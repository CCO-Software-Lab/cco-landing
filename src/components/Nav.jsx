import { useRef, useState } from 'react'
import { useScrollFrame } from '../lib/motion'
import { Wordmark } from './Logo'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#processo', label: 'Processo' },
  { href: '#modelos', label: 'Modelos' },
  { href: '#duvidas', label: 'Dúvidas' },
]

export default function Nav() {
  const bar = useRef(null)
  const header = useRef(null)
  const [aberto, setAberto] = useState(false)
  const compacto = useRef(false)

  /* Barra de progresso e estado do header escritos direto no DOM:
     zero re-render enquanto a página rola. */
  useScrollFrame(({ y, progress }) => {
    if (bar.current) bar.current.style.transform = `scaleX(${progress})`
    const deveCompactar = y > 24
    if (deveCompactar !== compacto.current) {
      compacto.current = deveCompactar
      header.current?.classList.toggle('is-compact', deveCompactar)
    }
  })

  return (
    <header
      ref={header}
      className="fixed inset-x-0 top-0 z-50 [&.is-compact]:bg-paper/85 [&.is-compact]:backdrop-blur-md [&.is-compact]:shadow-[0_1px_0_var(--color-rule)]"
    >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 md:px-8">
        <a href="#topo" aria-label="C.C.O Software Lab — início">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="num text-[0.8125rem] tracking-wide text-ink-soft transition-colors hover:text-azure-deep"
            >
              {l.label}
            </a>
          ))}
          <a href="#contato" className="btn btn-primary py-2.5">
            Agendar diagnóstico
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-label="Abrir menu"
          className="num flex h-10 items-center border border-ink px-3 text-xs uppercase md:hidden"
        >
          {aberto ? 'Fechar' : 'Menu'}
        </button>
      </div>

      {/* Régua de progresso: um transform por frame, nada mais */}
      <div className="h-px w-full bg-rule">
        <div ref={bar} className="h-px origin-left scale-x-0 bg-ink" />
      </div>

      {aberto && (
        <div className="rule-b bg-paper px-5 pb-6 md:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setAberto(false)}
                className="rule-b num py-4 text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setAberto(false)}
              className="btn btn-primary mt-6 justify-center"
            >
              Agendar diagnóstico
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
