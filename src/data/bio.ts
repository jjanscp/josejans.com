// Single source of truth for bio blocks.
// Keep raw text here — pages import and render via <Fragment set:html={...}> when needed.

export const bio = {
  // Short bio used on HOME (between Promise and Research tease).
  short: {
    en: `I am a PhD student in Political Science at the University of Illinois Chicago (UIC) and a <strong>Fulbright–MinCiencias Scholar</strong> (2025–2030), with tracks in Comparative Politics and Political Theory. My career bridges advocacy and research on civil rights, courts, transitions, and social movements. I come to the academy after a decade of frontline legal practice and public-interest scholarship in Colombia, and the questions that now organize my doctoral work grew directly out of that empirical experience.`,
    es: `Soy estudiante doctoral en Ciencia Política en la Universidad de Illinois en Chicago (UIC) y <strong>becario Fulbright–MinCiencias</strong> (2025–2030), con líneas en Política Comparada y Teoría Política. Mi trayectoria une la práctica del litigio de interés público con la investigación académica sobre derechos civiles, cortes, transiciones y movimientos sociales. Llego a la academia después de una década de práctica jurídica de primera línea en Colombia, y las preguntas que hoy organizan mi tesis doctoral surgieron directamente de esa experiencia empírica.`,
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

  // Personal / story-telling paragraph (About long page — user will expand later; placeholder w/ seed).
  personal: {
    en: `Beyond the courtroom and the seminar room, I am a triathlete, a community organizer, and an eternal student of Latin American political theory. Outside work I train on the Chicago lakefront, cook Colombian food for friends, and read a lot of fiction — the kind of ballast that keeps long-haul research honest.`,
    es: `Fuera del litigio y del aula soy triatleta, organizador comunitario y estudiante permanente de teoría política latinoamericana. En mi tiempo libre entreno en el lago de Chicago, cocino comida colombiana para mis amigos y leo mucha ficción — el tipo de contrapeso que mantiene honesta a la investigación de largo aliento.`,
  },

  // Research pitch (About + Research pages).
  research: {
    en: `My research focuses on the intersection of <strong>public interest litigation, social movements, and judicial reform</strong> of criminal and constitutional justice systems. I study <strong>state accountability mechanisms</strong> — courts, truth commissions, and amicus-curiae-based rights mobilization — in contexts of transition from authoritarian rule and/or armed conflict. Methodologically, I combine an action-research participatory approach with archival work, macro-historical analysis, discourse analysis, and ethnographic fieldwork.`,
    es: `Mi investigación se ubica en la intersección del <strong>litigio de interés público, los movimientos sociales y la reforma judicial</strong> de los sistemas de justicia penal y constitucional. Estudio <strong>mecanismos de rendición de cuentas del Estado</strong> — cortes, comisiones de la verdad y movilización de derechos vía amicus curiae — en contextos de transición desde regímenes autoritarios y/o conflicto armado. Metodológicamente combino un enfoque de investigación-acción participativa con trabajo de archivo, análisis macro-histórico, análisis de discurso y etnografía.`,
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
