import { useReveal } from '../lib/motion'

/* Bloco revelado no scroll. `dir` escolhe de onde ele entra,
   `delay` escalona irmãos sem precisar de biblioteca. */
export function Reveal({
  as: Tag = 'div',
  dir = 'up',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useReveal()
  const variant =
    dir === 'left' ? 'rv-left' : dir === 'right' ? 'rv-right' : dir === 'scale' ? 'rv-scale' : ''

  return (
    <Tag
      ref={ref}
      className={`rv ${variant} ${className}`}
      style={{ '--d': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* Cabeçalho de seção: índice em mono à esquerda, título à direita. */
export function SectionHead({ indice, eyebrow, titulo, texto, className = '' }) {
  return (
    <div className={`grid gap-8 md:grid-cols-12 ${className}`}>
      <Reveal dir="left" className="md:col-span-4">
        <div className="flex items-baseline gap-4">
          <span className="num text-sm text-azure-deep">{indice}</span>
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <div className="md:col-span-8">
        <Reveal as="h2" delay={60} className="text-[clamp(2rem,5vw,3.5rem)]">
          {titulo}
        </Reveal>
        {texto && (
          <Reveal delay={140} className="mt-5 max-w-[62ch] text-lg leading-relaxed text-muted">
            {texto}
          </Reveal>
        )}
      </div>
    </div>
  )
}

export function Tick({ children }) {
  return (
    <span className="flex items-center gap-2.5 text-sm text-ink-soft">
      <span className="h-1.5 w-1.5 shrink-0 bg-azure" aria-hidden="true" />
      {children}
    </span>
  )
}
