import { useReveal, useParallax } from '../lib/motion'
import { Reveal, Tick } from './Primitives'
import Logo from './Logo'

const linhas = [
  ['Software sob', ''],
  ['medida para quem', ''],
  ['não pode', 'esperar.'],
]

const pipeline = [
  { etapa: 'diagnóstico', estado: 'concluído', t: '1 sem' },
  { etapa: 'blueprint', estado: 'concluído', t: '2 sem' },
  { etapa: 'sprint 01 → 03', estado: 'concluído', t: '6 sem' },
  { etapa: 'deploy produção', estado: 'no ar', t: 'agora' },
]

function Titulo() {
  const ref = useReveal()
  return (
    <h1
      ref={ref}
      className="mt-7 text-[clamp(2.6rem,7.4vw,5.6rem)] leading-[0.94]"
    >
      {linhas.map(([texto, marcado], i) => (
        <span
          key={texto}
          className="line-mask"
          style={{ '--d': `${120 + i * 110}ms` }}
        >
          <span>
            {texto}
            {marcado && <> <em className="mark not-italic">{marcado}</em></>}
          </span>
        </span>
      ))}
    </h1>
  )
}

export default function Hero() {
  const painel = useParallax(-0.045)

  return (
    <section id="topo" className="relative overflow-hidden pt-24 md:pt-28">
      {/* Papel milimetrado esmaecendo para baixo — puro CSS, sem imagem */}
      <div
        aria-hidden="true"
        className="grid-paper pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_78%)] opacity-70"
      />

      {/* O "C" da marca sangrando pela borda, como marca d'água do papel */}
      <Logo
        decorativo
        className="pointer-events-none absolute -right-32 -top-24 hidden h-[620px] w-[620px] opacity-[0.06] lg:block"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal className="flex items-center gap-4">
              <span className="h-1.5 w-1.5 bg-cyan pulse-dot" aria-hidden="true" />
              <span className="eyebrow">
                Laboratório de engenharia de software
              </span>
            </Reveal>

            <Titulo />

            <Reveal delay={420} className="mt-8 max-w-[56ch] text-lg leading-relaxed text-muted md:text-xl">
              SaaS, automações, aplicativos mobile e sistemas desktop construídos
              do primeiro diagrama até o deploy — por um time sênior que fala com
              você direto, sem camada de atendimento no meio.
            </Reveal>

            <Reveal delay={520} className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contato" className="btn btn-primary">
                Agendar diagnóstico
              </a>
              <a href="#processo" className="btn btn-ghost">
                Ver como trabalhamos
              </a>
            </Reveal>

            <Reveal delay={620} className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              <Tick>Primeira versão em 6 semanas</Tick>
              <Tick>O código-fonte é seu</Tick>
              <Tick>Preço fechado no contrato</Tick>
            </Reveal>
          </div>

          {/* Painel de execução: o objeto mais característico do ofício —
              uma esteira de entrega, não uma ilustração genérica. */}
          <div className="lg:col-span-5">
            <div ref={painel}>
              <Reveal dir="scale" delay={300} className="border border-ink bg-surface shadow-[8px_8px_0_var(--color-paper-2)]">
                <div className="rule-b flex items-center justify-between px-5 py-3">
                  <span className="num text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                    esteira de entrega
                  </span>
                  <span className="num text-[0.6875rem] text-azure-deep">
                    build 1284
                  </span>
                </div>

                <ul className="px-5 py-2">
                  {pipeline.map((p, i) => (
                    <Reveal
                      as="li"
                      key={p.etapa}
                      dir="left"
                      delay={520 + i * 130}
                      className="flex items-center justify-between gap-3 border-b border-rule-soft py-3.5 last:border-0"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span
                          className={`h-2 w-2 shrink-0 ${
                            p.estado === 'no ar' ? 'bg-cyan pulse-dot' : 'bg-navy'
                          }`}
                          aria-hidden="true"
                        />
                        <span className="num truncate text-sm">{p.etapa}</span>
                      </span>
                      <span className="num shrink-0 text-xs text-muted">
                        {p.estado} · {p.t}
                      </span>
                    </Reveal>
                  ))}
                </ul>

                <Reveal delay={1040} className="rule-t bg-paper-2/60 px-5 py-4">
                  <div className="flex items-baseline justify-between">
                    <span className="eyebrow">tempo total</span>
                    <span className="num text-2xl font-semibold tracking-tight">
                      9 semanas
                    </span>
                  </div>
                  <div className="mt-3 h-1 w-full bg-rule">
                    <div className="bar-fill h-1 w-full origin-left bg-signal" />
                  </div>
                </Reveal>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
