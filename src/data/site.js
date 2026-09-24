export const contato = {
  email: 'contato@ccosoftwarelab.com',
  whatsapp: '+55 (11) 90000-0000',
  cidade: 'São Paulo, BR — atendimento remoto',
}

export const servicos = [
  {
    id: 'saas',
    titulo: 'SaaS sob medida',
    resumo:
      'Plataformas multiempresa com login, permissões, cobrança recorrente e painel de dados. Nasce pronta para o segundo cliente, não só para o primeiro.',
    entregaveis: ['Multi-tenant', 'Billing recorrente', 'Painel de métricas'],
  },
  {
    id: 'automacoes',
    titulo: 'Automações e integrações',
    resumo:
      'Tiramos o trabalho manual do meio. Conectamos ERP, planilhas, e-mail, WhatsApp e APIs em rotinas que rodam sozinhas e avisam quando algo foge do esperado.',
    entregaveis: ['ERP e fiscal', 'WhatsApp e e-mail', 'Alertas de falha'],
  },
  {
    id: 'mobile',
    titulo: 'Aplicativos mobile',
    resumo:
      'iOS e Android a partir de uma base de código só, com publicação nas lojas, atualização por over-the-air e uso offline quando a operação exige.',
    entregaveis: ['iOS + Android', 'Publicação nas lojas', 'Modo offline'],
  },
  {
    id: 'desktop',
    titulo: 'Sistemas desktop',
    resumo:
      'Windows, macOS e Linux para quem trabalha o dia inteiro na mesma tela: leitor de código de barras, impressão fiscal, arquivos pesados e banco local.',
    entregaveis: ['Instalador assinado', 'Periféricos', 'Banco local'],
  },
  {
    id: 'web',
    titulo: 'Portais e sites de produto',
    resumo:
      'Páginas rápidas de verdade, com conteúdo editável pelo time de marketing e medição limpa do que vira contato — sem depender de nós para trocar um texto.',
    entregaveis: ['CMS para o time', 'Medição de conversão', 'SEO técnico'],
  },
  {
    id: 'ia',
    titulo: 'IA aplicada ao processo',
    resumo:
      'Copilotos internos, leitura de documentos e triagem de atendimento — sempre presos aos seus dados, com registro de tudo que o modelo respondeu.',
    entregaveis: ['Busca nos seus dados', 'Extração de documentos', 'Registro de uso'],
  },
]

export const etapas = [
  {
    n: '01',
    titulo: 'Diagnóstico',
    prazo: '1 semana',
    texto:
      'Sentamos com quem usa o processo hoje, medimos onde o tempo vai embora e escrevemos o problema em uma página. Se software não for a resposta, falamos isso.',
  },
  {
    n: '02',
    titulo: 'Blueprint',
    prazo: '2 semanas',
    texto:
      'Escopo fechado, telas navegáveis, arquitetura e preço. Você aprova sabendo o que recebe, quando recebe e quanto custa manter depois.',
  },
  {
    n: '03',
    titulo: 'Construção',
    prazo: 'sprints de 2 semanas',
    texto:
      'Entrega quinzenal em ambiente real, com testes automatizados e deploy a cada merge. Nada de demo em slide: você usa o que foi feito.',
  },
  {
    n: '04',
    titulo: 'Operação',
    prazo: 'contínuo',
    texto:
      'Monitoramento, plantão combinado e evolução mensal. Repositório, servidores e credenciais ficam na sua conta desde o primeiro dia.',
  },
]

export const compromissos = [
  { valor: 6, sufixo: ' sem', label: 'até a primeira versão em produção', decimais: 0 },
  { valor: 2, sufixo: ' sem', label: 'entre uma entrega e a próxima', decimais: 0 },
  { valor: 99.9, sufixo: '%', label: 'disponibilidade contratada em suporte', decimais: 1 },
  { valor: 100, sufixo: '%', label: 'do código-fonte no seu repositório', decimais: 0 },
]

export const modelos = [
  {
    nome: 'Projeto fechado',
    para: 'Escopo definido, data marcada',
    preco: 'a partir de R$ 38 mil',
    itens: [
      'Blueprint aprovado antes de programar',
      'Preço e prazo travados no contrato',
      'Entrega quinzenal em ambiente real',
      '60 dias de garantia após o go-live',
    ],
    destaque: false,
  },
  {
    nome: 'Squad dedicado',
    para: 'Produto em evolução contínua',
    preco: 'a partir de R$ 24 mil/mês',
    itens: [
      'Time sênior alocado no seu roadmap',
      'Planejamento e revisão a cada sprint',
      'Product designer incluso',
      'Prioridade muda quando o negócio muda',
    ],
    destaque: true,
  },
  {
    nome: 'Suporte e evolução',
    para: 'Sistema que já está no ar',
    preco: 'a partir de R$ 6 mil/mês',
    itens: [
      'Monitoramento e plantão combinado',
      'Correções com prazo de resposta acordado',
      'Bolsa mensal de horas para melhorias',
      'Aceitamos código feito por terceiros',
    ],
    destaque: false,
  },
]

export const faq = [
  {
    q: 'Quanto tempo até eu ver alguma coisa funcionando?',
    a: 'Telas navegáveis saem na terceira semana, no fim do blueprint. A primeira versão usável em produção fica pronta em cerca de seis semanas — a partir daí, entrega nova a cada quinze dias.',
  },
  {
    q: 'De quem é o código no fim?',
    a: 'Seu, desde o começo. Repositório, servidores e contas de terceiros são abertos no seu nome; nós entramos como colaboradores. Encerrando o contrato, nada precisa ser migrado.',
  },
  {
    q: 'Vocês trabalham em cima de um sistema que já existe?',
    a: 'Sim. Começamos por uma leitura técnica do que está no ar, apontamos o que dá para aproveitar e o que sai mais caro manter do que reescrever — com os números na mesa antes de qualquer decisão.',
  },
  {
    q: 'Como funciona o preço?',
    a: 'Projeto fechado tem valor e prazo travados no contrato depois do blueprint. Squad e suporte são mensais, sem multa de cancelamento e com aviso de 30 dias dos dois lados.',
  },
  {
    q: 'Quem toca o projeto no dia a dia?',
    a: 'O mesmo time do começo ao fim: um tech lead, os desenvolvedores da conta e um designer de produto. Você fala direto com quem escreve o código, sem camada de atendimento no meio.',
  },
]

export const stack = [
  'React', 'React Native', 'Next.js', 'Node.js', 'TypeScript', 'Python',
  'PostgreSQL', 'Redis', 'Electron', '.NET', 'Docker', 'AWS',
  'Supabase', 'n8n', 'Stripe', 'Claude API',
]
