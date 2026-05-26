export interface City {
  slug: string;
  name: string;
  distance: string;
  travelTime: string;
  mapsUrl: string;
  cityDescription: string;
}

export interface Specialty {
  slug: string;
  name: string;
  professional: string;
  intro: string;
  cases: string[];
  methods: string[];
}

export const cities: City[] = [
  {
    slug: "matelandia",
    name: "Matelândia",
    distance: "20 km",
    travelTime: "cerca de 20 min",
    mapsUrl:
      "https://www.google.com/maps/dir/Matel%C3%A2ndia,+PR/Av.+Jos%C3%A9+Callegari,+1820,+Medianeira,+PR",
    cityDescription:
      "Matelândia fica a apenas 20 km de Medianeira pela BR-277 — um trajeto rápido que torna o acesso ao atendimento especializado prático para as famílias da região.",
  },
  {
    slug: "sao-miguel-do-iguacu",
    name: "São Miguel do Iguaçu",
    distance: "17 km",
    travelTime: "cerca de 15 min",
    mapsUrl:
      "https://www.google.com/maps/dir/S%C3%A3o+Miguel+do+Igua%C3%A7u,+PR/Av.+Jos%C3%A9+Callegari,+1820,+Medianeira,+PR",
    cityDescription:
      "São Miguel do Iguaçu fica a apenas 17 km de Medianeira — vizinhas pela BR-277, o deslocamento é rápido e as famílias da cidade chegam à clínica em poucos minutos.",
  },
  {
    slug: "itaipulandia",
    name: "Itaipulândia",
    distance: "32 km",
    travelTime: "cerca de 30 min",
    mapsUrl:
      "https://www.google.com/maps/dir/Itaipul%C3%A2ndia,+PR/Av.+Jos%C3%A9+Callegari,+1820,+Medianeira,+PR",
    cityDescription:
      "Itaipulândia está a cerca de 32 km de Medianeira. As famílias de Itaipulândia encontram na Ser Singular o atendimento especializado em desenvolvimento infantil que buscavam para seus filhos.",
  },
  {
    slug: "serranopolis-do-iguacu",
    name: "Serranópolis do Iguaçu",
    distance: "15 km",
    travelTime: "cerca de 15 min",
    mapsUrl:
      "https://www.google.com/maps/dir/Serran%C3%B3polis+do+Igua%C3%A7u,+PR/Av.+Jos%C3%A9+Callegari,+1820,+Medianeira,+PR",
    cityDescription:
      "Serranópolis do Iguaçu está a apenas 15 km de Medianeira — um dos trajetos mais curtos da região, colocando as famílias a poucos minutos do atendimento especializado da Clínica Ser Singular.",
  },
];

export const specialties: Specialty[] = [
  {
    slug: "psicologia-infantil",
    name: "Psicologia Infantil",
    professional: "Daiana Plauth — Psicóloga",
    intro:
      "A Psicologia Infantil na Clínica Ser Singular atua com crianças que apresentam dificuldades emocionais, comportamentais e de desenvolvimento. Nosso trabalho é baseado em evidências científicas, com abordagens como ABA (Análise do Comportamento Aplicada) e o Modelo Denver de Intervenção Precoce.",
    cases: [
      "Diagnóstico ou suspeita de TEA (autismo)",
      "Crises e birras intensas",
      "Dificuldade de regulação emocional",
      "Ansiedade e fobias infantis",
      "Comportamentos desafiadores",
      "Dificuldades de socialização e interação",
      "TDAH — agitação, impulsividade, desatenção",
    ],
    methods: [
      "ABA — Análise do Comportamento Aplicada",
      "Modelo Denver de Intervenção Precoce",
      "Psicoterapia Infantil",
      "Avaliação Neuropsicológica",
      "Treino de Habilidades Sociais",
      "Orientação Parental Estruturada",
    ],
  },
  {
    slug: "fonoaudiologia",
    name: "Fonoaudiologia",
    professional: "Fonoaudióloga especializada",
    intro:
      "A Fonoaudiologia na Clínica Ser Singular é especializada em linguagem infantil, fala e motricidade orofacial. Utilizamos abordagens baseadas em evidências como PROMPT e DTTC, voltadas especialmente para crianças com atraso de fala, TEA e outras condições do neurodesenvolvimento.",
    cases: [
      "Atraso na fala ou na linguagem",
      "Gagueira",
      "Pronúncia difícil de entender",
      "Ausência ou pouca comunicação verbal",
      "Dificuldade de compreensão de linguagem",
      "Alterações de motricidade orofacial",
      "Comunicação Aumentativa e Alternativa (CAA)",
    ],
    methods: [
      "PROMPT",
      "DTTC",
      "Comunicação Aumentativa e Alternativa (CAA)",
      "Avaliação de linguagem receptiva e expressiva",
      "Terapia de fala individualizada",
      "Orientação familiar",
    ],
  },
  {
    slug: "terapia-ocupacional",
    name: "Terapia Ocupacional",
    professional: "Terapeuta Ocupacional especializada",
    intro:
      "A Terapia Ocupacional na Clínica Ser Singular trabalha com integração sensorial, desenvolvimento motor e autonomia nas atividades do dia a dia. A abordagem é individualizada, respeitando o perfil sensorial e funcional de cada criança para que ela conquiste mais independência em casa, na escola e na vida social.",
    cases: [
      "Hipersensibilidade ou hiposensibilidade sensorial",
      "Dificuldades motoras finas e grosseiras",
      "Baixa participação em atividades escolares",
      "Dificuldade de autonomia em rotinas diárias",
      "Atrasos no desenvolvimento neuromotor",
      "TEA com perfil sensorial atípico",
      "TDAH com dificuldades de organização e execução",
    ],
    methods: [
      "Integração Sensorial",
      "Desenvolvimento de Habilidades de Vida Diária",
      "Treino de Coordenação Motora",
      "Adaptação de Ambiente e Rotina",
      "Orientação para Escola e Família",
    ],
  },
  {
    slug: "psicopedagogia",
    name: "Psicopedagogia",
    professional: "Psicopedagoga especializada",
    intro:
      "A Psicopedagogia na Clínica Ser Singular investiga as causas das dificuldades de aprendizagem e traça um plano de intervenção individualizado. Trabalhamos em parceria com a escola para que a criança desenvolva seu potencial dentro e fora da sala de aula.",
    cases: [
      "Dificuldades de leitura e escrita",
      "Dislexia, discalculia e disgrafia",
      "Dificuldades de atenção e concentração",
      "Baixo rendimento escolar sem causa aparente",
      "Dificuldades com funções executivas",
      "Problemas de memória e organização",
      "Crianças com TDAH e impacto na aprendizagem",
    ],
    methods: [
      "Avaliação Psicopedagógica Completa",
      "Identificação do Perfil Cognitivo",
      "Intervenção em Alfabetização e Letramento",
      "Treino de Funções Executivas",
      "Relatórios e Orientação para Escola",
      "Parceria com Professores e Coordenadores",
    ],
  },
  {
    slug: "terapia-alimentar",
    name: "Terapia Alimentar",
    professional: "Roberta — Nutricionista",
    intro:
      "A Terapia Alimentar na Clínica Ser Singular é conduzida pela nutricionista Roberta, com foco em crianças que apresentam seletividade alimentar, recusa alimentar e dificuldades na hora das refeições. O trabalho vai além do cardápio: envolve comportamento alimentar, sensorialidade e construção de autonomia à mesa.",
    cases: [
      "Seletividade alimentar severa",
      "Recusa de alimentos por textura, cor ou cheiro",
      "Criança que aceita poucos alimentos",
      "Ansiedade e birras intensas na hora das refeições",
      "TEA com comportamentos alimentares restritivos",
      "Baixo ganho de peso por recusa alimentar",
      "Dificuldades de mastigação e deglutição",
    ],
    methods: [
      "Avaliação Nutricional e Comportamental",
      "Terapia de Exposição Alimentar Gradual",
      "Dessensibilização Sensorial para Alimentos",
      "Cardápio Individualizado",
      "Orientação e Suporte Familiar",
      "Trabalho Integrado com demais Especialidades",
    ],
  },
];
