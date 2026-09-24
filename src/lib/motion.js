import { useEffect, useRef } from 'react'

export const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------------------------------------------------------------
   1) Um único IntersectionObserver para a página inteira.
   O elemento recebe a classe, dispara o callback e sai do observer —
   nada continua sendo observado depois de aparecer.
   --------------------------------------------------------------- */
let io = null
const entered = new WeakMap()

function observer() {
  if (io) return io
  io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('rv-in')
        entered.get(entry.target)?.current?.()
        io.unobserve(entry.target)
        entered.delete(entry.target)
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
  )
  return io
}

export function useReveal(onEnter) {
  const ref = useRef(null)
  const cb = useRef(onEnter)
  cb.current = onEnter

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reducedMotion()) {
      el.classList.add('rv-in')
      cb.current?.()
      return
    }
    /* Já visível no primeiro paint: revela sem esperar o observer.
       Garante o conteúdo acima da dobra mesmo em aba oculta ou throttled. */
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
      requestAnimationFrame(() => {
        el.classList.add('rv-in')
        cb.current?.()
      })
      return
    }

    const o = observer()
    entered.set(el, cb)
    o.observe(el)
    return () => {
      o.unobserve(el)
      entered.delete(el)
    }
  }, [])

  return ref
}

/* ---------------------------------------------------------------
   2) Um único listener de scroll + um único requestAnimationFrame
   para a página inteira. Cada assinante escreve direto no style do
   seu elemento — nenhum setState roda por frame.
   --------------------------------------------------------------- */
const subscribers = new Set()
let ticking = false
let bound = false
const frame = { y: 0, progress: 0, height: 0 }

function measure() {
  ticking = false
  frame.y = window.scrollY
  frame.height = window.innerHeight
  const max = document.documentElement.scrollHeight - frame.height
  frame.progress = max > 0 ? Math.min(1, frame.y / max) : 0
  for (const fn of subscribers) fn(frame)
}

function schedule() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(measure)
}

function bind() {
  if (bound) return
  bound = true
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule, { passive: true })
}

export function useScrollFrame(fn) {
  const cb = useRef(fn)
  cb.current = fn

  useEffect(() => {
    if (reducedMotion()) return
    const run = (f) => cb.current(f)
    subscribers.add(run)
    bind()
    schedule()
    return () => {
      subscribers.delete(run)
    }
  }, [])
}

/* Parallax: desloca o elemento em fração da distância percorrida,
   ancorado na própria posição do elemento no documento. */
export function useParallax(speed = 0.12) {
  const ref = useRef(null)
  const anchor = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const remeasure = () => {
      anchor.current = el.getBoundingClientRect().top + window.scrollY
    }
    remeasure()
    window.addEventListener('resize', remeasure)
    return () => window.removeEventListener('resize', remeasure)
  }, [])

  useScrollFrame(({ y, height }) => {
    const el = ref.current
    if (!el) return
    const delta = y + height - anchor.current
    if (delta < -height || delta > height * 3) return // fora de vista: não escreve
    el.style.transform = `translate3d(0, ${(delta * speed).toFixed(2)}px, 0)`
  })

  return ref
}

/* Contador que escreve textContent direto, sem re-render por frame. */
export function useCountUp(target, { duration = 1400, decimals = 0 } = {}) {
  const node = useRef(null)
  const started = useRef(false)

  const start = () => {
    if (started.current) return
    started.current = true
    const el = node.current
    if (!el) return
    if (reducedMotion()) {
      el.textContent = target.toFixed(decimals).replace('.', ',')
      return
    }
    const t0 = performance.now()
    const step = (now) => {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      el.textContent = (target * eased).toFixed(decimals).replace('.', ',')
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  return { node, start }
}
