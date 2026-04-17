export type Lang = 'en' | 'es';

export const t = {
  nav: {
    home: { en: 'Home', es: 'Inicio' },
    about: { en: 'About', es: 'Sobre mí' },
    research: { en: 'Research', es: 'Investigación' },
    publications: { en: 'Publications', es: 'Publicaciones' },
    teaching: { en: 'Teaching', es: 'Docencia' },
    archive: { en: 'Archive', es: 'Archivo' },
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
      en: 'Write me about research, collaborations, or speaking invitations.',
      es: 'Escríbeme sobre investigación, colaboraciones o invitaciones.',
    },
    contactSend: { en: 'Send', es: 'Enviar' },
    yourName: { en: 'Your name', es: 'Tu nombre' },
    yourEmail: { en: 'Your email', es: 'Tu correo' },
    yourMessage: { en: 'Your message', es: 'Tu mensaje' },
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
  },
} as const;

export function translate<T extends { en: string; es: string }>(entry: T, lang: Lang): string {
  return entry[lang];
}

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'es' : 'en');
