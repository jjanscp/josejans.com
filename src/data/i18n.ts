export type Lang = 'en' | 'es';

export const t = {
  nav: {
    home: { en: 'Home', es: 'Inicio' },
    about: { en: 'About', es: 'Sobre mí' },
    research: { en: 'Research & Publications', es: 'Investigación y Publicaciones' },
    advocacy: { en: 'Advocacy & Consulting', es: 'Incidencia y Consultoría' },
    teaching: { en: 'Teaching', es: 'Docencia' },
    media: { en: 'Media & Opinion', es: 'Medios y Opinión' },
    blog: { en: 'Blog', es: 'Blog' },
    cv: { en: 'CV', es: 'CV' },
    contact: { en: 'Contact', es: 'Contacto' },
  },
  labels: {
    downloadCV: { en: 'Download CV', es: 'Descargar CV' },
    readMore: { en: 'Read more', es: 'Leer más' },
    viewPDF: { en: 'View PDF', es: 'Ver PDF' },
    allPublications: { en: 'All publications', es: 'Todas las publicaciones' },
    workingPaper: { en: 'Working paper', es: 'Documento de trabajo' },
    underReview: { en: 'Under review', es: 'En evaluación' },
    inPreparation: { en: 'In preparation', es: 'En preparación' },
    switchLang: { en: 'Español', es: 'English' },
    email: { en: 'Email', es: 'Correo' },
    backToTop: { en: 'Back to top', es: 'Volver arriba' },
    year: { en: 'Year', es: 'Año' },
    type: { en: 'Type', es: 'Tipo' },
    court: { en: 'Court', es: 'Corte' },
    ruling: { en: 'Ruling', es: 'Sentencia' },
    abstract: { en: 'Abstract', es: 'Resumen' },
    publishedIn: { en: 'Published in', es: 'Publicado en' },
    coAuthoredWith: { en: 'Co-authored with', es: 'Co-autoría con' },
    newsletterHeadline: {
      en: 'Subscribe to receive new papers, posts, and research updates.',
      es: 'Suscríbete para recibir nuevos papers, entradas y actualizaciones de investigación.',
    },
    newsletterCTA: { en: 'Subscribe', es: 'Suscribirse' },
    contactHeadline: {
      en: 'Write me about research, consulting, or speaking invitations.',
      es: 'Escríbeme sobre investigación, consultoría o invitaciones.',
    },
    contactSend: { en: 'Send', es: 'Enviar' },
    yourName: { en: 'Your name', es: 'Tu nombre' },
    yourEmail: { en: 'Your email', es: 'Tu correo' },
    yourMessage: { en: 'Your message', es: 'Tu mensaje' },
    // CTAs
    workWithMe: { en: 'Work with me', es: 'Trabajemos juntos' },
    subscribeNewsletter: { en: 'Subscribe to the newsletter', es: 'Suscríbete al newsletter' },
    readTheBlog: { en: 'Read the blog', es: 'Leer el blog' },
    viewFull: { en: 'View full section', es: 'Ver sección completa' },
    viewAll: { en: 'View all', es: 'Ver todo' },
    latestFromBlog: { en: 'Latest from the blog', es: 'Últimas entradas' },
    noPostsYet: {
      en: 'New posts coming soon. Subscribe below to get notified.',
      es: 'Próximamente nuevas entradas. Suscríbete para recibir avisos.',
    },
    availableFor: { en: 'Available for consulting and training', es: 'Disponible para consultorías y formaciones' },
    scrollForMore: { en: 'Scroll to explore', es: 'Desplázate para explorar' },
    requestFullCaseLog: { en: 'Request full case log', es: 'Solicitar bitácora completa' },
  },
  pubTypes: {
    article: { en: 'Peer-reviewed article', es: 'Artículo arbitrado' },
    chapter: { en: 'Book chapter', es: 'Capítulo de libro' },
    report: { en: 'Policy & HR report', es: 'Reporte de política / DDHH' },
    intervention: { en: 'Amicus curiae brief', es: 'Amicus curiae / Intervención ciudadana' },
    dataset: { en: 'Research dataset', es: 'Base de datos' },
    wip: { en: 'Work in progress', es: 'Trabajo en curso' },
  },
  sections: {
    featuredPubs: { en: 'Featured work', es: 'Trabajos destacados' },
    peerReviewed: { en: 'Peer-reviewed articles', es: 'Artículos arbitrados' },
    chapters: { en: 'Book chapters', es: 'Capítulos de libro' },
    reports: { en: 'Policy & human rights reports', es: 'Reportes de política y derechos humanos' },
    interventions: {
      en: 'Amicus curiae briefs & constitutional court interventions',
      es: 'Amicus curiae e intervenciones ante altas cortes',
    },
    wip: { en: 'Works in progress', es: 'Trabajos en curso' },
    datasets: { en: 'Research datasets', es: 'Bases de datos' },
  },
  home: {
    // Hero
    heroCTA: { en: 'Work with me', es: 'Trabajemos juntos' },
    heroCTASub: { en: 'Subscribe to the newsletter', es: 'Suscríbete al newsletter' },
    // Promise
    promiseEyebrow: { en: 'What I do', es: 'Qué hago' },
    promiseTitle: {
      en: 'Research, advocacy, and teaching on courts, transitions, and social change.',
      es: 'Investigación, incidencia y docencia sobre cortes, transiciones y cambio social.',
    },
    promiseResearch: {
      title: { en: 'Research', es: 'Investigación' },
      body: {
        en: 'Comparative politics of courts, transitional justice, and rights mobilization.',
        es: 'Política comparada de las cortes, justicia transicional y movilización de derechos.',
      },
    },
    promiseAdvocacy: {
      title: { en: 'Advocacy & Consulting', es: 'Incidencia y Consultoría' },
      body: {
        en: 'Strategic litigation, amicus curiae briefs, and policy advice for human-rights organizations and public institutions.',
        es: 'Litigio estratégico, amicus curiae y asesoría a organizaciones de derechos humanos e instituciones públicas.',
      },
    },
    promiseTeaching: {
      title: { en: 'Teaching & Training', es: 'Docencia y Formación' },
      body: {
        en: 'Constitutional theory, research methods, and clinical legal education grounded in real cases.',
        es: 'Teoría constitucional, metodologías de investigación y educación jurídica clínica anclada en casos reales.',
      },
    },
    // Section tease eyebrows
    researchEyebrow: { en: 'Research & Publications', es: 'Investigación y Publicaciones' },
    advocacyEyebrow: { en: 'Advocacy & Consulting', es: 'Incidencia y Consultoría' },
    teachingEyebrow: { en: 'Teaching', es: 'Docencia' },
    // Section tease bodies
    researchBody: {
      en: 'Peer-reviewed articles, book chapters, policy reports, and datasets on transitional justice, rights mobilization, and the politics of courts.',
      es: 'Artículos arbitrados, capítulos de libro, reportes de política y bases de datos sobre justicia transicional, movilización de derechos y política de las cortes.',
    },
    advocacyBody: {
      en: 'Thirty-plus amicus curiae briefs and constitutional interventions filed before Colombian high courts, the Inter-American system, and the International Criminal Court. Available for consulting, expert reports, and training.',
      es: 'Más de 30 amicus curiae e intervenciones ciudadanas ante altas cortes colombianas, el sistema interamericano y la Corte Penal Internacional. Disponible para consultoría, peritajes y formación.',
    },
    teachingBody: {
      en: 'Founding coordinator of the Carlos Gaviria Díaz Strategic Litigation Legal Clinic at UIS. Courses on Constitutional Law and Research Methods. TA and RA fellowships at Universidad de los Andes.',
      es: 'Coordinador fundador de la Clínica de Litigio Estratégico Carlos Gaviria Díaz de la UIS. Cursos de Derecho Constitucional y Metodologías de Investigación. Asistente docente e investigador en la Universidad de los Andes.',
    },
    // Contact inline
    contactInlineHeadline: {
      en: 'Let\u2019s talk.',
      es: 'Hablemos.',
    },
    contactInlineBody: {
      en: 'Research collaborations, consulting briefs, expert testimony, speaking invitations, or press inquiries — this inbox is open.',
      es: 'Colaboraciones de investigación, consultorías, peritajes, invitaciones a charlas o consultas de prensa — este buzón está abierto.',
    },
  },
  advocacy: {
    eyebrow: { en: 'Advocacy & Consulting', es: 'Incidencia y Consultoría' },
    headline: {
      en: 'Turning case work into precedent.',
      es: 'Convertir casos en precedente.',
    },
    intro: {
      en: 'A decade of strategic litigation, amicus curiae briefs, and policy advice before Colombian high courts, the Inter-American system, and the International Criminal Court — alongside human-rights reports that have been cited by the UN, the IACHR, and the ICC.',
      es: 'Una década de litigio estratégico, amicus curiae y asesoría de política pública ante las altas cortes colombianas, el sistema interamericano y la Corte Penal Internacional — además de reportes de derechos humanos citados por la ONU, la CIDH y la CPI.',
    },
    sections: {
      reports: { en: 'Policy & human rights reports', es: 'Reportes de política y derechos humanos' },
      interventions: { en: 'Constitutional court interventions & amicus curiae', es: 'Intervenciones ante altas cortes y amicus curiae' },
      litigation: { en: 'Strategic litigation portfolio', es: 'Portafolio de litigio estratégico' },
      consulting: { en: 'Consulting, expert reports & training', es: 'Consultoría, peritajes y formación' },
      pressRoom: { en: 'Press room', es: 'Sala de prensa' },
    },
    consultingBlurb: {
      en: 'I advise organizations, attorneys, and public institutions on transitional justice, constitutional litigation, victims\u2019 rights, and rights mobilization. I also deliver training on clinical legal education and strategic litigation methodology.',
      es: 'Asesoro a organizaciones, abogados e instituciones públicas en justicia transicional, litigio constitucional, derechos de las víctimas y movilización de derechos. También ofrezco formación en educación jurídica clínica y metodología de litigio estratégico.',
    },
  },
} as const;

export function translate<T extends { en: string; es: string }>(entry: T, lang: Lang): string {
  return entry[lang];
}

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'es' : 'en');
