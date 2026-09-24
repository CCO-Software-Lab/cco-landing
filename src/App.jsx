import Nav from './components/Nav'
import Hero from './components/Hero'
import Stack from './components/Stack'
import Servicos from './components/Servicos'
import Processo from './components/Processo'
import Compromissos from './components/Compromissos'
import Modelos from './components/Modelos'
import Duvidas from './components/Duvidas'
import Contato, { Rodape } from './components/Contato'

export default function App() {
  return (
    <>
      <a
        href="#servicos"
        className="num sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-ink focus:bg-signal focus:px-4 focus:py-2 focus:text-xs focus:uppercase"
      >
        Pular para o conteúdo
      </a>

      <Nav />

      <main>
        <Hero />
        <Stack />
        <Servicos />
        <Processo />
        <Compromissos />
        <Modelos />
        <Duvidas />
        <Contato />
      </main>

      <Rodape />
    </>
  )
}
