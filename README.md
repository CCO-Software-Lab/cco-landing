# C.C.O Software Lab — landing page

Landing page oficial da C.C.O Software Lab: SaaS, automações, aplicativos
mobile e sistemas desktop

Vite + React + Tailwind CSS v4. Tema claro, sem dependências de UI

## Rodar

```bash
npm install
npm run dev
```

`npm run build` gera o site estático em `dist/`.

## Como o projeto está organizado

```
src/
  components/   uma seção da página por arquivo
  data/site.js  todo o texto da página (serviços, etapas, preços, FAQ)
  lib/motion.js observador de scroll e revelações
  styles.css    tokens de cor/tipografia e as classes de animação
public/
  logo-cco.jpg  marca oficial
```

**Para trocar textos, preços ou perguntas do FAQ, edite só `src/data/site.js`.**

## Paleta

Retirada da marca, com um único acento quente:

| token | valor | onde aparece |
| --- | --- | --- |
| `ink` | `#0b1a26` | textos e a seção de contato |
| `navy` | `#0f3d5c` | estrutura e sombras |
| `azure` | `#0b8fd4` | índices, marcadores, trilho do processo |
| `cyan` | `#22c3de` | pontos de status e destaques no escuro |
| `signal` | `#e9e23d` | grifo do título, botão principal, selo e barra do herói |
| `paper` | `#f2f5f7` | fundo da página |

O amarelo aparece em quatro lugares na página inteira — é o que o mantém
como acento em vez de decoração.

## Animações de scroll

Toda a página usa **um** `IntersectionObserver` e **um** `requestAnimationFrame`
compartilhados (`src/lib/motion.js`):

- só `opacity` e `transform` são animados, sempre em camada composta;
- cada elemento sai do observer assim que aparece e devolve o `will-change`;
- a barra de progresso, o parallax do painel e o trilho do processo escrevem
  direto no `style` do elemento — nenhum `setState` roda por frame;
- o que já está visível no primeiro paint é revelado sem esperar o observer;
- com `prefers-reduced-motion: reduce` nada anima e todo o conteúdo aparece
  imediatamente.

## Formulário de contato

`src/components/Contato.jsx` monta um `mailto:` no cliente do usuário — não há
back-end. Para ligar a um endpoint de verdade, troque o corpo da função
`enviar` por um `fetch` e ajuste o e-mail em `src/data/site.js`.
