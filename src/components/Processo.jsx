import { useRef } from 'react'
import { etapas } from '../data/site'
import { useScrollFrame } from '../lib/motion'
import { Reveal, SectionHead } from './Primitives'

export default function Processo() {
  const secao = useRef(null)
  const trilho = useRef(null)

  /* O trilho preenche conforme a seção atravessa a viewport:
     uma leitura de rect e um transform por frame, só enquanto visível. */
  useScrollFrame(({ height }) => {
    const el = secao.current
    const bar = trilho.current
    if (!el || !bar) return
    const r = el.getBoundingClientRect()
    if (r.bottom < 0 || r.top > height) return
    const avanco = (height * 0.72 - r.top) / r.height
    bar.style.transform = `scaleY(${Math.min(1, Math.max(0, avanco)).toFixed(3)})`
  })

  return (
    <section
      id="processo"
      ref={secao}
      className="rule-t bg-surface"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-24 md:px-8 md:py-32">
        <SectionHead
          indice="02"
          eyebrow="Como trabalhamos"
          titulo="Quatro etapas, nessa ordem."
          texto="A sequência existe por um motivo: ninguém escreve código antes de o escopo, o preço e as telas estarem aprovados por você."
        />

        <div className="mt-20 grid gap-0 md:grid-cols-12">
          {/* Trilho de progresso — a barra acompanha a leitura */}
          <div className="hidden md:col-span-1 md:block">
            <div className="sticky top-28 h-64 w-px bg-rule">
              <div
                ref={trilho}
                className="h-full w-px origin-top scale-y-0 bg-azure"
              />
            </div>
          </div>

          <ol className="md:col-span-11">
            {etapas.map((e, i) => (
              <Reveal
                as="li"
                key={e.n}
                delay={i * 70}
                className="grid gap-4 border-t border-rule py-9 last:border-b md:grid-cols-12 md:gap-8"
              >
                <div className="flex items-baseline gap-4 md:col-span-3">
                  <span className="num text-4xl font-semibold tracking-tight text-azure-deep">
                    {e.n}
                  </span>
                  <span className="num text-xs uppercase tracking-[0.14em] text-muted">
                    {e.prazo}
                  </span>
                </div>
                <h3 className="text-3xl md:col-span-3">{e.titulo}</h3>
                <p className="max-w-[58ch] leading-relaxed text-muted md:col-span-6">
                  {e.texto}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
