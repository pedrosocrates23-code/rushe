export interface ContentBlock {
  type: "paragraph" | "heading2" | "heading3" | "inline-cta" | "content-highlight" | "list";
  html?: string;
  text?: string;
  title?: string;
  buttonText?: string;
  items?: string[];
}

export interface Post {
  slug: string;
  title: string;
  titleSEO: string;
  excerpt: string;
  description: string;
  date: string;
  dateModified: string;
  author: string;
  authorTitle: string;
  category: string;
  readTime: number;
  image: string;
  imageAlt: string;
  content: ContentBlock[];
}

const WA = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20SEO%20aliment%C3%ADcio";

export const posts: Post[] = [
  {
    slug: "seo-para-restaurantes-guia-completo",
    title: "SEO para Restaurantes: Guia Completo 2025",
    titleSEO: "SEO para Restaurantes: Guia Completo 2025 | Ruche",
    excerpt:
      "Aprenda as melhores estratégias de SEO local para restaurantes e como aparecer no topo das buscas 'perto de mim'.",
    description:
      "Guia completo de SEO para restaurantes: Google Meu Negócio, palavras-chave locais, reviews e muito mais para atrair mais clientes.",
    date: "2025-10-15",
    dateModified: "2025-12-10",
    author: "Equipe Ruche",
    authorTitle: "Especialistas em SEO Alimentício",
    category: "SEO Local",
    readTime: 8,
    image: "/images/blog/seo-restaurantes.jpg",
    imageAlt: "Chef em cozinha profissional com smartphones mostrando resultados no Google",
    content: [
      {
        type: "paragraph",
        html: "O mercado de alimentação fora do lar movimenta bilhões de reais por ano no Brasil. Mas de nada adianta ter a melhor comida da cidade se seu restaurante não aparece quando alguém pesquisa <strong>\"restaurante italiano perto de mim\"</strong> no Google.",
      },
      {
        type: "heading2",
        text: "Por que o SEO Local é diferente para Restaurantes?",
      },
      {
        type: "paragraph",
        html: "Diferente de outros negócios, restaurantes competem num raio geográfico muito específico. Um cliente em São Paulo não vai ao seu restaurante em Belo Horizonte. Isso significa que sua estratégia de SEO precisa ser <strong>hiperlocal</strong>: focada em bairro, cidade e contexto de busca do momento.",
      },
      {
        type: "content-highlight",
        text: "73% das pessoas que realizam uma busca local em smartphone visitam um estabelecimento nas próximas 24 horas. Fonte: Google Consumer Insights 2024.",
      },
      {
        type: "heading2",
        text: "Google Meu Negócio: sua âncora no SEO local",
      },
      {
        type: "paragraph",
        html: "O perfil no Google Business Profile (antigo Google Meu Negócio) é a peça central do SEO local para restaurantes. Perfis completos e otimizados recebem <strong>70% mais visitas</strong> do que perfis incompletos.",
      },
      {
        type: "list",
        items: [
          "Preencha 100% das informações: horário de funcionamento, cardápio, fotos de alta qualidade",
          "Responda TODOS os reviews (positivos e negativos) em até 24 horas",
          "Publique posts semanais com promoções e novidades",
          "Use os atributos corretos: aceita reservas, entrega, opções veganas, etc.",
          "Adicione fotos profissionais dos pratos — imagens geram 42% mais pedidos de rota",
        ],
      },
      {
        type: "inline-cta",
        title: "Precisa de ajuda para otimizar seu restaurante no Google?",
        text: "Nossa equipe especializada em SEO para o setor alimentício pode transformar seu perfil e multiplicar seus clientes.",
        buttonText: "Falar com especialista",
      },
      {
        type: "heading2",
        text: "Palavras-chave que realmente convertem",
      },
      {
        type: "paragraph",
        html: "Não basta otimizar para 'restaurante'. As buscas com maior intenção de compra são as mais específicas: <em>\"pizza bairro X delivery\"</em>, <em>\"jantar romântico Porto Alegre\"</em>, <em>\"buffet de churrasco para empresa\"</em>. Essas long-tail keywords têm menor volume mas conversão muito maior.",
      },
      {
        type: "heading3",
        text: "Tipos de intenção de busca para restaurantes",
      },
      {
        type: "paragraph",
        html: "Classificamos as buscas em 4 categorias: <strong>Descoberta</strong> (\"melhores hamburguerias\"), <strong>Consideração</strong> (\"hamburgeria X vs Y review\"), <strong>Decisão</strong> (\"hamburgeria bairro Z telefone\") e <strong>Fidelização</strong> (\"hamburgeria X cardápio\"). Cada uma exige conteúdo e otimização diferentes.",
      },
      {
        type: "heading2",
        text: "Site e conteúdo: a base que sustenta tudo",
      },
      {
        type: "paragraph",
        html: "Muitos restaurantes negligenciam o site e dependem 100% do iFood e redes sociais. Erro grave. Ter um site próprio otimizado garante que você não pague comissão em cada pedido e constrói autoridade de marca no longo prazo.",
      },
      {
        type: "content-highlight",
        text: "Restaurantes com sites bem otimizados pagam até 60% menos em mídia paga para conquistar o mesmo volume de clientes, segundo análise da Ruche com 40+ clientes do setor.",
      },
    ],
  },
  {
    slug: "seo-para-industria-alimenticia",
    title: "SEO para Indústria Alimentícia: B2B e B2C",
    titleSEO: "SEO para Indústria Alimentícia: Estratégia B2B e B2C | Ruche",
    excerpt:
      "Como marcas de alimentos e indústrias do setor usam SEO para conquistar distribuidores, varejo e consumidores finais.",
    description:
      "Estratégias de SEO específicas para indústrias alimentícias, desde otimização de fichas técnicas até conteúdo nutricional e compliance ANVISA.",
    date: "2025-09-20",
    dateModified: "2025-11-15",
    author: "Equipe Ruche",
    authorTitle: "Especialistas em SEO Alimentício",
    category: "Estratégia",
    readTime: 10,
    image: "/images/blog/seo-industria.jpg",
    imageAlt: "Linha de produção de alimentos com telas de dashboard de SEO",
    content: [
      {
        type: "paragraph",
        html: "A indústria alimentícia tem desafios únicos no SEO. Ao contrário de negócios de serviço ou tecnologia, ela precisa se comunicar simultaneamente com <strong>distribuidores B2B</strong>, <strong>varejistas</strong> e <strong>consumidores finais</strong> — cada um com linguagem, intenção e canal diferentes.",
      },
      {
        type: "heading2",
        text: "O desafio da dupla audiência: B2B e B2C",
      },
      {
        type: "paragraph",
        html: "Um fabricante de molhos artesanais pode precisar de conteúdo técnico para supermercadistas (fichas técnicas, certificações, prazo de validade) e ao mesmo tempo conteúdo inspiracional para consumidores (receitas, harmonizações, modo de preparo). Gerenciar essas duas vozes exige uma arquitetura de conteúdo cuidadosa.",
      },
      {
        type: "content-highlight",
        text: "Marcas alimentícias com estratégia de conteúdo dupla (B2B + B2C) registram em média 3x mais tráfego orgânico qualificado em 12 meses.",
      },
      {
        type: "heading2",
        text: "ANVISA e compliance: oportunidade de SEO",
      },
      {
        type: "paragraph",
        html: "Poucas marcas percebem que a conformidade regulatória pode ser um <strong>diferencial de SEO</strong>. Conteúdos como 'tabela nutricional completa', 'lista de ingredientes', 'alertas alergênicos' são exatamente o que o Google busca em sites de alimentos para aplicar as diretrizes <strong>E-E-A-T</strong> (Experience, Expertise, Authoritativeness, Trustworthiness).",
      },
      {
        type: "inline-cta",
        title: "Sua marca alimentícia precisa de uma estratégia de SEO completa?",
        text: "Desenvolvemos estratégias personalizadas para indústrias alimentícias, desde startups de alimentos saudáveis até grandes processadoras.",
        buttonText: "Solicitar proposta",
      },
      {
        type: "heading2",
        text: "Schema Markup específico para alimentos",
      },
      {
        type: "paragraph",
        html: "O <strong>Schema.org</strong> possui tipos específicos para o setor alimentício que pouquíssimas marcas utilizam: <code>Recipe</code>, <code>NutritionInformation</code>, <code>FoodEstablishment</code>, <code>Product</code> com atributos de categoria alimentar. Implementar esses markups corretamente pode gerar rich snippets que aumentam o CTR em até 40%.",
      },
      {
        type: "list",
        items: [
          "Recipe Schema: apareça nas pesquisas de receitas com imagem e avaliação",
          "Product Schema: exiba preço, disponibilidade e avaliações nos resultados",
          "NutritionInformation: mostre calorias e macros diretamente na SERP",
          "LocalBusiness: conecte sua sede ou showroom industrial ao Google Maps",
        ],
      },
    ],
  },
  {
    slug: "palavras-chave-alimentacao-2025",
    title: "Pesquisa de Palavras-chave para o Setor Alimentício em 2025",
    titleSEO: "Palavras-chave para Alimentação 2025: Como Pesquisar | Ruche",
    excerpt:
      "Metodologia completa para encontrar as melhores palavras-chave para negócios de alimentação — do restaurante local à grande rede.",
    description:
      "Aprenda a pesquisar palavras-chave eficazes para o setor alimentício em 2025, com ferramentas, métricas e exemplos práticos do segmento.",
    date: "2025-08-05",
    dateModified: "2025-10-30",
    author: "Equipe Ruche",
    authorTitle: "Especialistas em SEO Alimentício",
    category: "Pesquisa",
    readTime: 12,
    image: "/images/blog/palavras-chave.jpg",
    imageAlt: "Dashboard de ferramentas de SEO com dados de palavras-chave do setor alimentício",
    content: [
      {
        type: "paragraph",
        html: "A pesquisa de palavras-chave é a fundação de qualquer estratégia de SEO. No setor alimentício, ela tem particularidades que exigem atenção especial: <strong>sazonalidade</strong> (receitas de natal, pratos de verão), <strong>regionalismo</strong> (carne de sol vs carne seca) e <strong>tendências rápidas</strong> (keto, plant-based, sem glúten).",
      },
      {
        type: "heading2",
        text: "As 5 dimensões da pesquisa de palavras-chave para alimentação",
      },
      {
        type: "list",
        items: [
          "Volume de busca: quantas pessoas pesquisam por mês",
          "Dificuldade de ranqueamento (KD): quão difícil é aparecer na primeira página",
          "Intenção de busca: informacional, navegacional, transacional ou comercial",
          "Sazonalidade: o volume cai no verão? Sobe nas festas?",
          "CPC: quanto anunciantes pagam (indica valor comercial)",
        ],
      },
      {
        type: "heading2",
        text: "Ferramentas recomendadas para o setor",
      },
      {
        type: "paragraph",
        html: "Para o setor alimentício, recomendamos combinar <strong>Google Keyword Planner</strong> (tendências reais), <strong>Semrush</strong> ou <strong>Ahrefs</strong> (análise de concorrentes) e <strong>Answer the Public</strong> (perguntas que as pessoas fazem). O Google Trends é indispensável para mapear sazonalidade de ingredientes e pratos.",
      },
      {
        type: "content-highlight",
        text: "Dica de especialista: pesquise palavras-chave de concorrentes que já ranqueiam bem. Se eles aparecem para uma keyword, é porque ela funciona no seu setor — e você pode fazer melhor.",
      },
      {
        type: "heading3",
        text: "Clusters de palavras-chave para restaurantes",
      },
      {
        type: "paragraph",
        html: "Organize suas keywords em clusters temáticos: cluster de localização (\"restaurante [bairro]\"), cluster de culinária (\"culinária [tipo] [cidade]\"), cluster de ocasião (\"restaurante para casamento\"), cluster de delivery (\"pedir [prato] online\"). Cada cluster deve ter uma página dedicada.",
      },
      {
        type: "inline-cta",
        title: "Quer uma pesquisa de palavras-chave feita por especialistas?",
        text: "Fazemos a pesquisa e mapeamento completo de oportunidades para o seu negócio alimentício, com análise de concorrentes incluída.",
        buttonText: "Quero minha pesquisa",
      },
      {
        type: "heading2",
        text: "Long-tail: onde está o ouro para pequenos negócios",
      },
      {
        type: "paragraph",
        html: "Restaurantes e marcas menores raramente conseguem ranquear para termos amplos como <em>\"pizza\"</em> ou <em>\"hamburguer\"</em>. O caminho é focar em <strong>long-tail keywords</strong>: termos de 3-5 palavras com menor volume mas muito menos concorrência e maior intenção de compra. <em>\"pizza artesanal borda recheada Vila Madalena\"</em> tem menos buscas mas converte muito mais do que apenas <em>\"pizza\"</em>.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
