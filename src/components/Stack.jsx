import { stack } from '../data/site'

export default function Stack() {
  const lista = [...stack, ...stack] // duplicado: a faixa fecha o loop em -50%

  return (
    <section className="rule-t rule-b mt-16 overflow-hidden bg-paper-2/40 py-4 md:mt-24">
      <div className="flex items-center gap-6">
        <span className="eyebrow shrink-0 pl-5 md:pl-8">Stack de trabalho</span>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <ul className="marquee-track flex w-max items-center gap-10 pr-10">
            {lista.map((item, i) => (
              <li
                key={`${item}-${i}`}
                className="num flex shrink-0 items-center gap-10 text-sm text-ink-soft"
                aria-hidden={i >= stack.length ? 'true' : undefined}
              >
                {item}
                <span className="h-1 w-1 bg-rule" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
