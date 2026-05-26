export interface City {
  slug: string;
  name: string;
  distance: string;
  travelTime: string;
  via: string;
  route: string;
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
    travelTime: "cerca de 20 minutos",
    via: "BR-277",
    route:
      "De Matelândia, siga pela BR-277 sentido Foz do Iguaçu por aproximadamente 20 km até Medianeira. Ao entrar na cidade, acesse o Centro pela Av. Brasil e depois pela Av. José Callegari.",
    cityDescription:
      "Matelândia fica a apenas 20 km de Medianeira pela BR-277 — um trajeto rápido que torna o acesso ao atendimento especializado prático para as famílias da região.",
  },
  {
    slug: "sao-miguel-do-iguacu",
    name: "São Miguel do Iguaçu",
    distance: "60 km",
    travelTime: "cerca de 55 minutos",
    via: "BR-277",
    route:
      "De São Miguel do Iguaçu, acesse a BR-277 sentido Cascavel e siga até Medianeira, aproximadamente 60 km. Ao chegar, entre no Centro pela Av. Brasil e depois pela Av. José Callegari.",
    cityDescription:
      "São Miguel do Iguaçu está a cerca de 60 km de Medianeira pela BR-277. Muitas famílias da região já fazem esse trajeto regularmente para ter acesso a atendimento especializado em desenvolvimento infantil.",
  },
  {
    slug: "itaipulandia",
    name: "Itaipulândia",
    distance: "55 km",
    travelTime: "cerca de 50 minutos",
    via: "BR-277",
    route:
      "De Itaipulândia, acesse a BR-277 sentido Cascavel e siga até Medianeira, aproximadamente 55 km. Entre no Centro pela Av. Brasil e depois pela Av. José Callegari.",
    cityDescription:
      "Itaipulândia está a cerca de 55 km de Medianeira com trajeto direto pela BR-277. As famílias de Itaipulândia encontram na Ser Singular o atendimento especializado que buscavam para seus filhos.",
  },
  {
    slug: "serranopolis-do-iguacu",
    name: "Serranópolis do Iguaçu",
    distance: "35 km",
    travelTime: "cerca de 35 minutos",
    via: "BR-277",
    route:
      "De Serranópolis do Iguaçu, siga pelas rodovias locais até a BR-277 e depois até Medianeira, aproximadamente 35 km no total. Acesse o Centro pela Av. Brasil e depois pela Av. José Callegari.",
    cityDescription:
      "Serranópolis do Iguaçu está a apenas 35 km de Medianeira — um trajeto curto que coloca as famílias da cidade a poucos minutos do atendimento especializado da Clínica Ser Singular.",
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
