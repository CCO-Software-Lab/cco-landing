import { useState } from 'react'
import { contato } from '../data/site'
import { Reveal, Tick } from './Primitives'
import { Wordmark } from './Logo'

const campos = [
  { name: 'nome', label: 'Nome', type: 'text', required: true },
  { name: 'empresa', label: 'Empresa', type: 'text', required: true },
  { name: 'email', label: 'E-mail', type: 'email', required: true },
]

export default function Contato() {
  const [dados, setDados] = useState({ nome: '', empresa: '', email: '', contexto: '' })

  const alterar = (e) =>
    setDados((d) => ({ ...d, [e.target.name]: e.target.value }))

  /* Sem back-end: monta o e-mail no cliente do usuário.
     Troque por um POST no seu endpoint quando ele existir. */
  const enviar = (e) => {
    e.preventDefault()
    const corpo = [
      `Nome: ${dados.nome}`,
      `Empresa: ${dados.empresa}`,
      `E-mail: ${dados.email}`,
      '',
      dados.contexto,
    ].join('\n')
    window.location.href = `mailto:${contato.email}?subject=${encodeURIComponent(
      `Diagnóstico — ${dados.empresa || dados.nome}`,
    )}&body=${encodeURIComponent(corpo)}`
  }

  return (
    <section id="contato" className="rule-t bg-ink text-paper">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-5 py-24 md:grid-cols-12 md:px-8 md:py-32">
        <div className="md:col-span-5">
          <Reveal dir="left">
            <span className="eyebrow text-paper/50">06 — Próximo passo</span>
            <h2 className="mt-5 text-[clamp(2.2rem,5vw,3.6rem)]">
              Uma conversa de <em className="mark not-italic text-ink">45 minutos</em> resolve.
            </h2>
            <p className="mt-6 max-w-[44ch] leading-relaxed text-paper/70">
              Você mostra o processo como ele é hoje. Nós voltamos com escopo,
              prazo e faixa de preço em até três dias úteis — sem compromisso e
              sem apresentação comercial.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-10 flex flex-col gap-3">
            <span className="flex items-center gap-2.5 text-sm text-paper/80">
              <span className="h-1.5 w-1.5 bg-cyan" aria-hidden="true" />
              {contato.email}
            </span>
            <span className="flex items-center gap-2.5 text-sm text-paper/80">
              <span className="h-1.5 w-1.5 bg-cyan" aria-hidden="true" />
              {contato.whatsapp}
            </span>
            <span className="flex items-center gap-2.5 text-sm text-paper/80">
              <span className="h-1.5 w-1.5 bg-cyan" aria-hidden="true" />
              {contato.cidade}
            </span>
          </Reveal>
        </div>

        <Reveal dir="right" delay={80} className="md:col-span-7">
          <form onSubmit={enviar} className="grid gap-6 sm:grid-cols-2">
            {campos.map((c) => (
              <label
                key={c.name}
                className={`flex flex-col gap-2 ${c.name === 'email' ? 'sm:col-span-2' : ''}`}
              >
                <span className="eyebrow text-paper/50">{c.label}</span>
                <input
                  type={c.type}
                  name={c.name}
                  required={c.required}
                  value={dados[c.name]}
                  onChange={alterar}
                  className="border-b border-paper/25 bg-transparent py-3 text-lg text-paper outline-none transition-colors focus:border-signal"
                />
              </label>
            ))}

            <label className="flex flex-col gap-2 sm:col-span-2">
              <span className="eyebrow text-paper/50">
                O que precisa ser resolvido
              </span>
              <textarea
                name="contexto"
                rows={4}
                value={dados.contexto}
                onChange={alterar}
                placeholder="Ex.: o time lança pedido em duas planilhas diferentes e a nota sai errada."
                className="resize-none border-b border-paper/25 bg-transparent py-3 text-lg text-paper outline-none transition-colors placeholder:text-paper/30 focus:border-signal"
              />
            </label>

            <div className="flex flex-wrap items-center gap-6 sm:col-span-2">
              <button type="submit" className="btn btn-primary border-signal">
                Enviar pedido
              </button>
              <span className="text-sm text-paper/50">
                Resposta em até 3 dias úteis.
              </span>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export function Rodape() {
  return (
    <footer className="mx-auto max-w-[1240px] px-5 py-10 md:px-8">
      <div className="flex flex-col gap-6 border-t border-rule pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Wordmark />
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <Tick>SaaS</Tick>
          <Tick>Automações</Tick>
          <Tick>Mobile</Tick>
          <Tick>Desktop</Tick>
        </div>
        <p className="num text-xs text-muted">
          © {new Date().getFullYear()} C.C.O Software Lab
        </p>
      </div>
    </footer>
  )
}
