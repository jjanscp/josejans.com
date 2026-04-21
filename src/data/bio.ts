// Single source of truth for bio blocks.
// Keep raw text here — pages import and render via <Fragment set:html={...}> when needed.

export const bio = {
  // Short bio used on HOME (between Promise and Research tease).
  short: {
    en: `I am a PhD student in Political Science at the University of Illinois Chicago (UIC) and a <strong>Fulbright–MinCiencias Scholar</strong> (2025–2030), with tracks in Comparative Politics and Political Theory. My career bridges advocacy and research on civil rights, courts, transitions, and social movements. I come to the academy after a decade of frontline legal practice and public-interest scholarship in Colombia, and the questions that now organize my doctoral work grew directly out of that empirical experience.`,
    es: `Soy estudiante de doctorado en Ciencia Política en la Universidad de Illinois en Chicago (UIC) y <strong>Scholar Fulbright–MinCiencias</strong> (2025–2030), con énfasis en Política Comparada y Teoría Política. Mi trayectoria conecta la práctica del litigio de interés público con la investigación académica sobre derechos, cortes, transiciones y movimientos sociales. Llego a la academia tras una década de trabajo jurídico de primera línea en Colombia, y las preguntas que hoy organizan mi tesis doctoral surgieron directamente de esa experiencia empírica.`,
  },

  // Long bio (About page, Block 1 — professional/academic arc).
  professional: {
    en: `Most recently, I served as <strong>Lead Counsel for Judicial Representation</strong> before Colombia's <em>Special Jurisdiction for Peace</em> (JEP), as a staff attorney of the SAAD-Víctimas within the Secretaría Ejecutiva. I supervised a team of six counsel and two assistants representing over 2,079 individual and 26 collective victims of war crimes in the macro-cases on extrajudicial executions ("false positives") — work that contributed to the indictment of 25 army officials, including five generals, for 303 victims in Casanare and 135 in the Caribbean region. Earlier, I was senior attorney at the José Alvear Restrepo Lawyers' Collective (CAJAR), consultant for the International Federation for Human Rights (FIDH), and attorney at the Committee in Solidarity with Political Prisoners (CSPP). Across these roles I submitted more than 30 amicus curiae briefs and constitutional actions before Colombia's Constitutional Court, Supreme Court, JEP, the Inter-American Court of Human Rights, and the International Criminal Court.`,
    es: `Entre 2023 y 2024 me desempeñé como <strong>abogado líder de representación judicial</strong> ante la <em>Jurisdicción Especial para la Paz</em> (JEP) — como abogado de planta del SAAD-Víctimas de la Secretaría Ejecutiva. Coordiné a seis abogados y dos asistentes en la representación de más de 2.079 víctimas individuales y 26 colectivas en los macrocasos sobre ejecuciones extrajudiciales ("falsos positivos") — un trabajo que contribuyó al llamamiento a juicio de 25 oficiales del Ejército, cinco de ellos generales, por 303 víctimas en Casanare y 135 en la región Caribe. Antes fui abogado senior del Colectivo de Abogados José Alvear Restrepo (CAJAR), consultor de la Federación Internacional de Derechos Humanos (FIDH) y abogado del Comité de Solidaridad con los Presos Políticos (CSPP). En estos roles presenté más de 30 intervenciones ciudadanas, amicus curiae y demandas de inconstitucionalidad ante la Corte Constitucional, la Corte Suprema, la JEP, la Corte Interamericana de Derechos Humanos y la Corte Penal Internacional.`,
  },

  // Teaching paragraph (About + Teaching page).
  teaching: {
    en: `Alongside my litigation practice, I have built an academic-teaching trajectory in Colombia. I am the founding coordinator of the <strong>Carlos Gaviria Díaz Strategic Litigation Legal Clinic</strong> at the Legal Aid Office of the <strong>Industrial University of Santander (UIS)</strong>, where I also taught Constitutional Theory. I designed and taught Research Methodologies in UIS's Master's Program in Human Rights, and served as teaching and research assistant in multiple courses at the <strong>Universidad de los Andes</strong>, including stints at the Centre for Sociolegal Research (<strong>CIJUS</strong>). This parallel teaching track — clinical, methodological, and doctrinal — informs how I design my own research agenda and how I train students to connect advocacy, evidence, and theory.`,
    es: `Junto a mi práctica de litigio he construido una trayectoria de docencia académica en Colombia. Soy coordinador fundador de la <strong>Clínica Jurídica de Litigio Estratégico Carlos Gaviria Díaz</strong> del Consultorio Jurídico de la <strong>Universidad Industrial de Santander (UIS)</strong>, donde también fui profesor de Teoría Constitucional. Diseñé y dicté Metodologías de Investigación en la Maestría en Derechos Humanos de la UIS, y fui asistente docente e investigador en varios cursos de la <strong>Universidad de los Andes</strong>, incluyendo estancias en el Centro de Investigaciones Sociojurídicas (<strong>CIJUS</strong>). Esta línea paralela — clínica, metodológica y doctrinal — informa cómo diseño mi propia agenda de investigación y cómo formo estudiantes para conectar incidencia, evidencia y teoría.`,
  },

  // Personal / story-telling paragraph — verbatim from user.
  personal: {
    en: `Beyond the courtroom and classrooms, I am a triathlete, a community organizer, and an eternal student of political theory. Outside work I train on the Chicago lakefront and Little Village, love sharing food from all over with friends, and enjoy audiobooks, podcasts, and watching Real Madrid games with my cats — the kind of things that keeps the soul happy.`,
    es: `Fuera de las audiencias y las aulas soy triatleta, organizador comunitario y estudiante permanente de teoría política. En mi tiempo libre entreno en el lago Chicago y en Little Village, me encanta compartir comidas de todo el mundo con amigos, y disfruto los audiolibros, los podcasts y ver los partidos del Real Madrid con mis gatos — el tipo de cosas que mantienen feliz el alma.`,
  },

  // Working papers (3 — MPSA 2026 + 2 co-authored)
  wip: [
    {
      id: 'sra-2026',
      authors: { en: 'Carretero Pardo, J. J.', es: 'Carretero Pardo, J. J.' },
      title: {
        en: 'The Systemic Research Approach: How Accountability Institutions\u2019 Design Enables Investigating State-Criminal Networks',
        es: 'El Enfoque de Investigación Sistémica: cómo el diseño de las instituciones de rendición de cuentas permite investigar redes estado-criminales',
      },
      status: { en: 'Under review · Presented at MPSA 2026, Chicago', es: 'En evaluación · Presentado en MPSA 2026, Chicago' },
      abstract: {
        en: 'Introduces the Systemic Research Approach (SRA): a model of judicial governance in which a single accountability institution develops five integrated capacities for reconstructing macro-criminal patterns rather than isolated acts. Using Colombia\u2019s JEP as a paradigmatic case and five comparators — Guatemala\u2019s CICIG, Cambodia\u2019s ECCC, Sierra Leone\u2019s SCSL, the ICC, and Argentina\u2019s ESMA mega-cause — the article demonstrates that deliberate institutional integration produces structural documentation of state-criminal networks and an \u201caccountability shock\u201d that partial deployments cannot achieve.',
        es: 'Introduce el Enfoque de Investigación Sistémica (EIS): un modelo de gobernanza judicial en el que una sola institución de rendición de cuentas desarrolla cinco capacidades integradas para reconstruir patrones macro-criminales. Usando la JEP colombiana como caso paradigmático y cinco comparadores — la CICIG guatemalteca, el ECCC camboyano, el TSSL de Sierra Leona, la CPI y el mega-juicio ESMA de Argentina — el artículo demuestra que la integración institucional deliberada produce documentación estructural de redes estado-criminales y un \u201cchoque de rendición de cuentas\u201d que las implementaciones parciales no logran.',
      },
    },
    {
      id: 'catatumbo-2026',
      authors: { en: 'Sanguino Cuéllar, K., & Carretero Pardo, J. J. — University of Illinois Chicago', es: 'Sanguino Cuéllar, K., & Carretero Pardo, J. J. — University of Illinois Chicago' },
      title: {
        en: 'From Body Counts to State-Criminal Accountability: How Justice System Capacities Evolved to Prosecute Extrajudicial Killings in Colombia\u2019s Catatumbo',
        es: 'Del conteo de cuerpos a la rendición de cuentas estado-criminal: cómo evolucionaron las capacidades del sistema de justicia para enjuiciar los falsos positivos en el Catatumbo',
      },
      status: { en: 'Working draft, April 2026', es: 'Borrador de trabajo, abril 2026' },
      abstract: {
        en: 'Argues that deterrence and accountability are analytically separable outcomes with different institutional preconditions. In the Catatumbo case, the violent practice of extrajudicial killings ceased in 2008 through administrative and political pressure; upward accountability — reaching brigade-level commanders — required the JEP\u2019s integrated design combining investigative independence, cross-database articulation, conditional truth-telling incentives, subnational-national reach, and contextual analysis. Ordinary justice produced zero high-ranking convictions in a decade; the JEP achieved upward accountability in approximately four years.',
        es: 'Argumenta que la disuasión y la rendición de cuentas son resultados analíticamente separables con precondiciones institucionales distintas. En el caso del Catatumbo, la práctica violenta cesó en 2008 por presión administrativa y política; la rendición de cuentas ascendente — llegar a los comandantes de brigada — requirió el diseño integrado de la JEP: independencia investigativa, articulación de bases de datos, incentivos condicionales de verdad, alcance subnacional-nacional y análisis contextual. La justicia ordinaria no logró ninguna condena de alto rango en una década; la JEP alcanzó la rendición de cuentas ascendente en aproximadamente cuatro años.',
      },
    },
    {
      id: 'par-tjustice-2026',
      authors: { en: 'Carretero Pardo, J. J.', es: 'Carretero Pardo, J. J.' },
      title: {
        en: 'Beyond Judicial Truth: Civil Society Methodologies and the Transformation of Legal Knowledge in Colombia\u2019s Transitional Justice',
        es: 'Más allá de la verdad judicial: metodologías de la sociedad civil y la transformación del conocimiento jurídico en la justicia transicional colombiana',
      },
      status: { en: 'Working paper', es: 'Documento de trabajo' },
      abstract: {
        en: 'Argues that human-rights organizations using Participatory Action Research (PAR) fundamentally transformed knowledge production within the JEP and the Truth Commission, subverting traditional boundaries between legal, academic, and social knowledge. Analysis of JEP\u2019s Case 03 on extrajudicial executions shows how PAR methodologies were integrated directly into judicial resolutions and indictments, enabling victims to co-construct legal and historical truth and embedding Global South peacebuilding innovation into state-centric transitional justice.',
        es: 'Argumenta que las organizaciones de derechos humanos que emplean Investigación-Acción Participativa (IAP) transformaron fundamentalmente la producción de conocimiento en la JEP y la Comisión de la Verdad, subvirtiendo los límites tradicionales entre el conocimiento jurídico, académico y social. El análisis del Caso 03 de la JEP muestra cómo las metodologías de IAP se integraron directamente en resoluciones e imputaciones judiciales, permitiendo a las víctimas co-construir la verdad legal e histórica.',
      },
    },
  ],

  // Research pitch (About + Research pages).
  research: {
    en: `My research sits at the intersection of <strong>comparative politics, transitional justice, and the political sociology of law</strong>. I study how states and armed actors jointly produce violence and criminal governance — and how accountability institutions are designed to investigate and disrupt those networks. My current work develops the concept of the <em>Systemic Research Approach</em>: a model of judicial governance that enables transitional justice institutions to reconstruct <strong>macro-criminal patterns</strong> and achieve upward accountability against high-ranking commanders. Using Colombia's JEP as a paradigmatic case alongside comparators in Guatemala, Cambodia, Sierra Leone, Argentina, and the ICC, I analyze when and why partial institutional configurations fail to produce structural documentation of state-criminal networks. Methodologically, I combine participatory action research, archival analysis, macro-historical comparison, discourse analysis, and ethnographic fieldwork.`,
    es: `Mi investigación se ubica en la intersección de la <strong>política comparada, la justicia transicional y la sociología política del derecho</strong>. Estudio cómo los estados y actores armados co-producen violencia y estructuras criminales — y cómo las instituciones de justicia diseñadas para la rendición de cuentas investigan y desarticulan esas redes. Mi trabajo actual desarrolla el concepto de <em>Enfoque de Investigación Sistémica</em> (EIS): un modelo de diseño institucional que permite a los tribunales de justicia transicional reconstruir <strong>patrones de criminalidad estructural</strong> y alcanzar la responsabilización de mandos superiores. Usando la JEP colombiana como caso paradigmático y cinco comparadores (CICIG, ECCC, TSSL, CPI, mega-juicio ESMA), analizo cuándo y por qué los diseños institucionales parciales no logran producir documentación sistemática de redes Estado-crimen. Metodológicamente combino investigación-acción participativa, análisis de archivos, comparación macro-histórica, análisis de discurso y trabajo de campo etnográfico.`,
  },

  // Research interests (6 bullets, frozen per decision #5).
  interests: {
    en: [
      'Transitional justice and post-conflict institutional design',
      'Public-interest litigation and rights mobilization',
      'Courts, truth commissions, and state accountability',
      'Social movements and the political sociology of law',
      'Drug policy, prohibition, and health-rights frameworks',
      'Comparative politics of Latin America',
    ],
    es: [
      'Justicia transicional y diseño institucional de posconflicto',
      'Litigio de interés público y movilización de derechos',
      'Cortes, comisiones de la verdad y rendición de cuentas del Estado',
      'Movimientos sociales y sociología política del derecho',
      'Política de drogas, prohibición y enfoque de salud-derechos',
      'Política comparada de América Latina',
    ],
  },

  // Education (3 degrees).
  education: {
    en: [
      '<strong>PhD, Political Science</strong>, University of Illinois Chicago, 2025–2030 (Fulbright–MinCiencias Scholar).',
      '<strong>LL.M. (Master of Laws)</strong>, Universidad de los Andes, Bogotá, 2018–2019 (Academic Vice President fully funded assistantship).',
      '<strong>LL.B. (Bachelor of Laws)</strong>, Universidad de los Andes, Bogotá, 2008–2015 ("Quiero Estudiar" Scholarship; top-ranked in the Colombian National Saber Pro Exam in Law, 2013-II, and Humanities, 2014-I).',
    ],
    es: [
      '<strong>PhD en Ciencia Política</strong>, University of Illinois Chicago, 2025–2030 (beca Fulbright–MinCiencias).',
      '<strong>Magíster en Derecho (LL.M.)</strong>, Universidad de los Andes, Bogotá, 2018–2019 (asistencia graduada de la Vicepresidencia Académica).',
      '<strong>Abogado (LL.B.)</strong>, Universidad de los Andes, Bogotá, 2008–2015 (beca "Quiero Estudiar"; mejor puntaje nacional Saber Pro en Derecho 2013-II y Humanidades 2014-I).',
    ],
  },

  // Additional training.
  training: {
    en: [
      'Diploma in Drug Policy, Health, and Human Rights — <strong>CIDE</strong>, Mexico, 2020.',
      'Leadership, Organizing, and Action: Leading Change Certification — <strong>Harvard Kennedy School of Government</strong>, 2018.',
      'Clinical Seminar in Human Rights — <strong>Central European University</strong>, Budapest, 2017.',
      'Bertha Justice Human Rights Global Convening — <strong>University of the Witwatersrand</strong> / CALS, South Africa, 2018.',
    ],
    es: [
      'Diplomado en Política de Drogas, Salud y Derechos Humanos — <strong>CIDE</strong>, México, 2020.',
      '"Leading Change" — <strong>Harvard Kennedy School of Government</strong>, 2018.',
      'Seminario Clínico en Derechos Humanos — <strong>Central European University</strong>, Budapest, 2017.',
      'Bertha Justice Human Rights Global Convening — <strong>University of the Witwatersrand</strong> / CALS, Sudáfrica, 2018.',
    ],
  },

  // Affiliations (cleaned per user: Bertha Advisory and CAJAR/FIDH "alumnus" removed).
  affiliations: {
    en: [
      'Department of Political Science, University of Illinois Chicago.',
      'Fulbright Scholar — Fulbright–MinCiencias Endowed program.',
    ],
    es: [
      'Departamento de Ciencia Política, University of Illinois Chicago.',
      'Becario Fulbright — programa Fulbright–MinCiencias.',
    ],
  },

  // Languages — minimalist on site, detailed levels live on CV only.
  languages: {
    en: 'Spanish (native) · English · French.',
    es: 'Español (nativo) · inglés · francés.',
  },
} as const;
