/* Marca oficial da C.C.O — arquivo em public/logo-cco.jpg.
   O tile branco do arquivo desaparece com mix-blend-multiply sobre o papel
   claro, e o leve scale corta a moldura arredondada do original. */
export default function Logo({ className = '', decorativo = false }) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <img
        src="/logo-cco.jpg"
        alt={decorativo ? '' : 'C.C.O Software Lab'}
        aria-hidden={decorativo ? 'true' : undefined}
        decoding="async"
        draggable="false"
        className="h-full w-full scale-[1.12] object-cover mix-blend-multiply"
      />
    </span>
  )
}

export function Wordmark({ className = '' }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Logo className="h-9 w-9 shrink-0" />
      <span className="flex items-baseline gap-2">
        <span className="font-display text-lg font-extrabold tracking-[-0.04em]">
          C.C.O
        </span>
        <span className="eyebrow hidden sm:block">Software Lab</span>
      </span>
    </span>
  )
}
