import { compromissos } from '../data/site'
import { useCountUp, useReveal } from '../lib/motion'
import { Reveal } from './Primitives'

function Metrica({ item, delay }) {
  const { node, start } = useCountUp(item.valor, { decimals: item.decimais })
  const ref = useReveal(start)

  return (
    <div
      ref={ref}
      className="rv border-t border-rule pt-6 md:border-l md:border-t-0 md:pl-6 md:pt-0"
      style={{ '--d': `${delay}ms` }}
    >
      <div className="num flex items-baseline text-[clamp(2.6rem,6vw,4rem)] font-semibold tracking-[-0.04em]">
        <span ref={node}>0</span>
        <span className="text-azure-deep">{item.sufixo}</span>
      </div>
      <p className="mt-3 max-w-[24ch] text-sm leading-relaxed text-muted">
        {item.label}
      </p>
    </div>
  )
}

export default function Compromissos() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal dir="left" className="md:col-span-4">
          <span className="eyebrow">03 — Compromissos</span>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3rem)]">
            Números que a gente <em className="mark not-italic">assina</em>.
          </h2>
          <p className="mt-5 max-w-[38ch] leading-relaxed text-muted">
            Não são médias de mercado: é o que entra no contrato antes de você
            pagar a primeira parcela.
          </p>
        </Reveal>

        <div className="grid gap-10 md:col-span-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {compromissos.map((c, i) => (
            <Metrica key={c.label} item={c} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
