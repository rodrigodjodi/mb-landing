export interface PortfolioCliente {
  nome: string
  tipo: string
  projetos: number
  destaque?: boolean
  imagem: string
  alt: string
}

export const portfolioClientes: PortfolioCliente[] = [
  {
    nome: 'DeDomit',
    tipo: 'Incorporadora',
    projetos: 7,
    destaque: true,
    imagem: '/images/portfolio-01-dedomit.jpg',
    alt: 'Empreendimento DeDomit',
  },
  {
    nome: 'AGL',
    tipo: 'Incorporadora',
    projetos: 3,
    imagem: '/images/portfolio-02-agl.jpg',
    alt: 'Empreendimento AGL',
  },
  {
    nome: 'Bouw',
    tipo: 'Incorporadora',
    projetos: 3,
    imagem: '/images/portfolio-03-bouw.jpg',
    alt: 'Empreendimento Bouw',
  },
]

export const portfolioChips = ['Avantti', 'CWG', 'BORSZCZ']
