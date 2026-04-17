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
    en: 'Comparative Politics & Political Theory',
    es: 'Política Comparada y Teoría Política',
  },
  fellowship: 'Fulbright–MinCiencias Scholar (2025–2030)',
  email: 'jcarr74@uic.edu',
  // Social / professional links
  social: {
    linkedin: 'https://www.linkedin.com/in/josejans/',
    twitter: 'https://x.com/josejanscp',
    github: 'https://github.com/josejanscp',
    uic: 'https://pols.uic.edu/profiles/carretero-padro-jose-jans/',
    // Research identifiers
    scholar: 'https://scholar.google.com/citations?hl=en&user=h_YHiYkAAAAJ' as string | null,
    orcid: null as string | null,
    ssrn: null as string | null,
    researchgate: 'https://www.researchgate.net/profile/Jose-Carretero-5' as string | null,
    academia: 'https://uniandes.academia.edu/josejanscarreteropardo' as string | null,
    semanticscholar: null as string | null,
    // Affiliation pages
    bertha: 'https://berthafoundation.org/lawyers/',
    cajar: 'https://www.colectivodeabogados.org/',
    fidh: 'https://www.fidh.org/en/region/americas/',
  },
  // Newsletter (Buttondown)
  newsletter: {
    provider: 'buttondown' as const,
    username: 'jose_jans' as string | null,
  },
  // Analytics
  analytics: {
    plausible: null as string | null,
  },
} as const;
