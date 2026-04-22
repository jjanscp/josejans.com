export const profile = {
  name: 'José Jans Carretero Pardo',
  shortName: 'José Jans Carretero',
  initials: 'JJC',
  title: {
    en: 'PhD Student in Political Science',
    es: 'Estudiante Doctoral en Ciencia Política',
  },
  affiliation: {
    en: 'University of Illinois Chicago',
    es: 'Universidad de Illinois en Chicago',
  },
  tracks: {
    en: 'Research on Justice, Criminal Politics & Peacebuilding | Advocacy in Human Rights',
    es: 'Investigación en Justicia, Política Criminal y Construcción de Paz | Incidencia en Derechos Humanos',
  },
  fellowship: 'Fulbright–MinCiencias Scholar (2025–2030)',
  email: 'jcarr74@uic.edu',

  // Hero subtitle (approved v3 — research identity framing)
  heroSubtitle: {
    en: 'Lawyer (LL.M.) · PhD student in Political Science, University of Illinois Chicago · Research on Justice, Criminal Politics & Peacebuilding.',
    es: 'Abogado (LL.M.) · Estudiante doctoral en Ciencia Política, Universidad de Illinois en Chicago · Investigación en Justicia, Política Criminal y Construcción de Paz.',
  },

  // Social / professional links
  social: {
    // Professional / social
    linkedin: 'https://www.linkedin.com/in/josejans/',
    twitter: 'https://x.com/josejanscp',
    instagram: 'https://www.instagram.com/josejanscp/',
    github: 'https://github.com/josejanscp',
    // Institutional
    uic: 'https://pols.uic.edu/profiles/carretero-padro-jose-jans/',
    // Research identifiers
    scholar: 'https://scholar.google.com/citations?hl=en&user=h_YHiYkAAAAJ' as string | null,
    orcid: null as string | null,
    ssrn: null as string | null,
    researchgate: 'https://www.researchgate.net/profile/Jose-Carretero-5' as string | null,
    academia: 'https://uniandes.academia.edu/josejanscarreteropardo' as string | null,
    semanticscholar: null as string | null,
    // Blog / newsletter (single source of truth = Substack)
    substack: 'https://josejanscp.substack.com' as string | null,
    // Affiliation pages (kept for body-text linking, not for footer)
    bertha: 'https://berthafoundation.org/lawyers/',
    cajar: 'https://www.colectivodeabogados.org/',
    fidh: 'https://www.fidh.org/en/region/americas/',
    jep: 'https://www.jep.gov.co/',
    uis: 'https://www.uis.edu.co/',
    uniandes: 'https://uniandes.edu.co/',
  },

  // Newsletter — moving to Substack as single source (blog + newsletter)
  newsletter: {
    provider: 'substack' as 'substack' | 'buttondown',
    substackUrl: 'https://josejanscp.substack.com' as string | null,
    substackEmbedUrl: 'https://josejanscp.substack.com/embed' as string | null,
    buttondownUsername: 'jose_jans' as string | null, // kept as fallback
    publicationName: {
      en: 'Notes on Law, Politics & Social Change',
      es: 'Notas sobre Derecho, Política y Cambio Social',
    },
  },

  // Analytics
  analytics: {
    plausible: null as string | null,
  },
} as const;
