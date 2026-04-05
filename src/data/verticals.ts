export interface Vertical {
  icon: string;
  title: string;
  segment: string;
  problem: string;
  action: string;
  result: string;
}

export const verticals: Vertical[] = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>`,
    title: "Restaurantes",
    segment: "Restaurantes, bares e lanchonetes",
    problem:
      "Clientes buscam 'restaurante perto de mim' e você não aparece no local pack do Google nem nas primeiras posições do Maps.",
    action:
      "Otimizamos seu Google Meu Negócio, padronizamos o NAP em todos os diretórios, estruturamos schema Restaurant e gerenciamos reviews para aumentar sua nota e visibilidade.",
    result:
      "Mais ligações, reservas e visitas orgânicas — sem pagar comissão por cliente.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    title: "Delivery & Dark Kitchen",
    segment: "Delivery, dark kitchens e virtuais",
    problem:
      "Sua operação depende do iFood e Rappi para gerar pedidos, pagando comissões de até 30% por entrega.",
    action:
      "Construímos um cardápio digital otimizado para Google, aplicamos Core Web Vitals para carregamento rápido no mobile e posicionamos sua marca nas buscas de delivery local.",
    result:
      "Canal próprio de pedidos que cresce mês a mês, reduzindo a dependência de marketplaces.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    title: "Marcas de Alimentos",
    segment: "Marcas CPG, alimentos e bebidas",
    problem:
      "Sua marca não aparece quando consumidores buscam receitas ou produtos ligados ao seu segmento, perdendo tráfego qualificado para concorrentes.",
    action:
      "Produzimos conteúdo com schema Recipe para receitas estruturadas, mapeamos termos sazonais do segmento e construímos autoridade em portais de gastronomia e culinária.",
    result:
      "Aumento de reconhecimento de marca e tráfego orgânico qualificado de consumidores com alta intenção de compra.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    title: "Indústria Alimentícia",
    segment: "Indústrias e distribuidoras B2B",
    problem:
      "Compradores e distribuidores não encontram sua empresa no Google ao pesquisar fornecedores, ingredientes ou equipamentos do setor.",
    action:
      "Estruturamos SEO técnico para sites B2B, criamos conteúdo com long-tail de alta intenção comercial e posicionamos sua marca em guias especializados da indústria de alimentos.",
    result:
      "Geração de leads qualificados de compradores, distribuidores e revendedores sem depender de feiras ou prospecção ativa.",
  },
];
