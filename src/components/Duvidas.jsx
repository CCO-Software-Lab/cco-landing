import { useState } from 'react'
import { faq } from '../data/site'
import { Reveal, SectionHead } from './Primitives'

export default function Duvidas() {
  const [aberta, setAberta] = useState(0)

  return (
    <section id="duvidas" className="mx-auto max-w-[1240px] px-5 py-24 md:px-8 md:py-32">
      <SectionHead indice="05" eyebrow="Dúvidas frequentes" titulo="Perguntado antes de assinar." />

      <div className="mt-14 border-t border-rule">
        {faq.map((item, i) => {
          const ativa = aberta === i
          return (
            <Reveal key={item.q} delay={i * 60} className="border-b border-rule">
              <h3>
                <button
                  type="button"
                  onClick={() => setAberta(ativa ? -1 : i)}
                  aria-expanded={ativa}
                  className="flex w-full items-start gap-5 py-6 text-left"
                >
                  <span className="num pt-2 text-xs text-azure-deep">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 font-display text-xl font-extrabold tracking-[-0.03em] md:text-2xl">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`mt-2 block h-3 w-3 shrink-0 border-t-2 border-r-2 border-ink transition-transform duration-300 ${
                      ativa ? 'rotate-[315deg]' : 'rotate-[135deg]'
                    }`}
                  />
                </button>
              </h3>

              {/* Abertura em grid-template-rows: anima altura sem medir nada */}
              <div
                className="grid transition-[grid-template-rows] duration-400 ease-[var(--ease-out-soft)]"
                style={{ gridTemplateRows: ativa ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <p className="max-w-[68ch] pb-7 pl-10 leading-relaxed text-muted">
                    {item.a}
                  </p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
