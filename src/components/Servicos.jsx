import { servicos } from '../data/site'
import { Reveal, SectionHead } from './Primitives'

export default function Servicos() {
  return (
    <section id="servicos" className="mx-auto max-w-[1240px] px-5 py-24 md:px-8 md:py-32">
      <SectionHead
        indice="01"
        eyebrow="O que construímos"
        titulo="Seis frentes, um time só."
        texto="Cada projeto começa pelo problema do seu processo — a tecnologia entra depois, e só a que se justifica."
      />

      <div className="mt-16 grid border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
        {servicos.map((s, i) => (
          <Reveal
            key={s.id}
            delay={(i % 3) * 90}
            className="group relative border-b border-rule p-7 transition-colors duration-300 hover:bg-surface sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r"
          >
            <div className="flex items-baseline justify-between">
              <span className="num text-xs text-azure-deep">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                aria-hidden="true"
                className="h-2 w-2 bg-rule transition-colors duration-300 group-hover:bg-cyan"
              />
            </div>

            <h3 className="mt-6 text-2xl">{s.titulo}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
              {s.resumo}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {s.entregaveis.map((e) => (
                <li
                  key={e}
                  className="num border border-rule px-2.5 py-1 text-[0.6875rem] uppercase tracking-wide text-ink-soft"
                >
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
