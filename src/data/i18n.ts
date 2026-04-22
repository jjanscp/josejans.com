export type Lang = 'en' | 'es';

export const t = {
  nav: {
    home: { en: 'Home', es: 'Inicio' },
    about: { en: 'About', es: 'Sobre mí' },
    research: { en: 'Research', es: 'Investigación' },
    advocacy: { en: 'Litigation', es: 'Litigio' },
    teaching: { en: 'Teaching', es: 'Docencia' },
    writing: { en: 'Opinion', es: 'Opinión' },
    media: { en: 'Opinion', es: 'Opinión' },
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
    availableFor: { en: 'Open to consulting, expert reports, and training', es: 'Abierto a consultorías, peritajes y formación especializada' },
    scrollForMore: { en: 'Scroll to explore', es: 'Desplázate para explorar' },
    requestFullCaseLog: { en: 'Request full case log', es: 'Solicitar bitácora completa' },
  },
  pubTypes: {
    article: { en: 'Peer-reviewed article', es: 'Artículo académico' },
    chapter: { en: 'Book chapter', es: 'Capítulo de libro' },
    report: { en: 'Policy & HR report', es: 'Reporte de política / DDHH' },
    intervention: { en: 'Amicus curiae brief', es: 'Amicus curiae / Intervención ciudadana' },
    dataset: { en: 'Research dataset', es: 'Base de datos' },
    wip: { en: 'Work in progress', es: 'Trabajo en curso' },
  },
  sections: {
    featuredPubs: { en: 'Featured work', es: 'Trabajos destacados' },
    peerReviewed: { en: 'Peer-reviewed articles', es: 'Artículos académicos' },
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
      en: 'Comparative research, strategic litigation, and clinical teaching on courts, accountability, and rights.',
      es: 'Investigación comparada, litigio estratégico y docencia clínica sobre cortes, responsabilidad estatal y derechos.',
    },
    promiseResearch: {
      title: { en: 'Research', es: 'Investigación' },
      body: {
        en: 'The politics of transitional justice institutions, state accountability for macro-criminal violence, and rights mobilization in post-conflict settings.',
        es: 'El funcionamiento de las instituciones de justicia transicional, la responsabilidad penal de agentes estatales por crímenes de sistema, y la movilización de derechos en contextos de posconflicto.',
      },
    },
    promiseAdvocacy: {
      title: { en: 'Advocacy & Consulting', es: 'Incidencia y Consultoría' },
      body: {
        en: 'Strategic litigation and amicus curiae briefs before Colombian high courts, the Inter-American system, and the ICC — and consulting for human-rights organizations and transitional justice institutions.',
        es: 'Litigio estratégico e intervenciones ante altas cortes colombianas, el Sistema Interamericano y la CPI — y asesoría especializada a organizaciones de derechos humanos e instituciones de justicia transicional.',
      },
    },
    promiseTeaching: {
      title: { en: 'Teaching & Training', es: 'Docencia y Formación' },
      body: {
        en: 'Constitutional theory, human rights research methods, and clinical legal education — grounded in a decade of public-interest litigation and civil society knowledge production.',
        es: 'Teoría constitucional, metodología de investigación en derechos humanos y clínica jurídica — con base en una década de litigio de interés público y producción de conocimiento desde la sociedad civil.',
      },
    },
    // Section tease eyebrows
    researchEyebrow: { en: 'Research & Publications', es: 'Investigación y Publicaciones' },
    advocacyEyebrow: { en: 'Advocacy & Consulting', es: 'Incidencia y Consultoría' },
    teachingEyebrow: { en: 'Teaching', es: 'Docencia' },
    // Section tease bodies
    researchBody: {
      en: 'Peer-reviewed articles, book chapters, policy reports, and empirical datasets on transitional justice, state accountability for macro-criminal violence, criminal governance, and rights mobilization in conflict-to-peace transitions.',
      es: 'Artículos académicos, capítulos de libro, reportes de política y bases de datos empíricas sobre justicia transicional, responsabilidad estatal por crímenes de sistema, estructuras criminales del Estado y movilización de derechos en transiciones.',
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
      en: 'Turning strategic litigation into precedent.',
      es: 'Convertir el litigio estratégico en precedentes.',
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
