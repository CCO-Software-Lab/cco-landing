import { modelos } from '../data/site'
import { Reveal, SectionHead } from './Primitives'

export default function Modelos() {
  return (
    <section id="modelos" className="rule-t bg-surface">
      <div className="mx-auto max-w-[1240px] px-5 py-24 md:px-8 md:py-32">
        <SectionHead
          indice="04"
          eyebrow="Modelos de contratação"
          titulo="Três formas de trabalhar juntos."
          texto="Todas começam pelo mesmo diagnóstico de uma semana — a diferença está em como o time continua depois dele."
        />

        <div className="mt-16 grid gap-px bg-rule md:grid-cols-3">
          {modelos.map((m, i) => (
            <Reveal
              key={m.nome}
              delay={i * 110}
              className={`flex flex-col p-8 ${
                m.destaque ? 'bg-paper-2' : 'bg-surface'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl">{m.nome}</h3>
                  <p className="num mt-2 text-xs uppercase tracking-[0.12em] text-muted">
                    {m.para}
                  </p>
                </div>
                {m.destaque && (
                  <span className="num shrink-0 bg-signal px-2 py-1 text-[0.625rem] uppercase tracking-[0.12em]">
                    mais pedido
                  </span>
                )}
              </div>

              <p className="num mt-8 text-xl font-semibold tracking-tight">
                {m.preco}
              </p>

              <ul className="mt-8 flex flex-1 flex-col gap-3.5 border-t border-rule pt-6">
                {m.itens.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9375rem] leading-snug text-ink-soft">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 bg-azure"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`btn mt-10 justify-center ${
                  m.destaque ? 'btn-primary' : 'btn-ghost'
                }`}
              >
                Falar sobre isso
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
