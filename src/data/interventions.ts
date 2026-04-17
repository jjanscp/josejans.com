// Full corpus of 26 strategic-litigation interventions (2015–2024), bilingual.
// Source: CV + WordPress export (backup/wp-pages.json) + PROJECT_STATE.md §6.
// Each entry auto-links to corteconstitucional.gov.co when applicable (via cc-link.ts).

import { ccLink } from '~/utils/cc-link';

export type Court =
  | 'Constitutional Court'
  | 'Supreme Court of Justice'
  | 'Council of State'
  | 'Special Jurisdiction for Peace (JEP)'
  | 'Inter-American Court of Human Rights'
  | 'International Criminal Court'
  | 'Inter-American Commission on Human Rights'
  | 'Multiple high courts';

export interface Intervention {
  year: number;
  ruling?: string;            // e.g. "C-590/2019" or "SU-545/2023 and SU-546/2023"
  court: Court;
  caseNumber?: string;        // for non-CC rulings (e.g. "D-12489")
  topic: { en: string; es: string };
  ctx?: { en: string; es: string };  // short context / block
  tags?: string[];
}

// Bilingual court labels for display.
export const courtLabel: Record<Court, { en: string; es: string }> = {
  'Constitutional Court': { en: 'Constitutional Court', es: 'Corte Constitucional' },
  'Supreme Court of Justice': { en: 'Supreme Court of Justice', es: 'Corte Suprema de Justicia' },
  'Council of State': { en: 'Council of State', es: 'Consejo de Estado' },
  'Special Jurisdiction for Peace (JEP)': { en: 'Special Jurisdiction for Peace (JEP)', es: 'Jurisdicción Especial para la Paz (JEP)' },
  'Inter-American Court of Human Rights': { en: 'Inter-American Court of Human Rights', es: 'Corte Interamericana de Derechos Humanos' },
  'International Criminal Court': { en: 'International Criminal Court', es: 'Corte Penal Internacional' },
  'Inter-American Commission on Human Rights': { en: 'Inter-American Commission on Human Rights', es: 'Comisión Interamericana de Derechos Humanos' },
  'Multiple high courts': { en: 'Multiple high courts', es: 'Varias altas cortes' },
};

export const interventions: Intervention[] = [
  // --- Block A: CAJAR 2017–2018 Fast Track / Peace Agreement implementation ---
  {
    year: 2017,
    ruling: 'C-674/2017',
    court: 'Constitutional Court',
    topic: { en: 'Command responsibility & victims\u2019 rights in the SIVJRNR (AL 1/2017).', es: 'Responsabilidad de mando y derechos de víctimas en el SIVJRNR (AL 1/2017).' },
    ctx: { en: 'CAJAR — Fast Track review of the Peace Agreement implementation.', es: 'CAJAR — revisión Fast Track de implementación del Acuerdo Final de Paz.' },
    tags: ['transitional justice', 'peace agreement', 'victims'],
  },
  {
    year: 2017,
    ruling: 'C-630/2017',
    court: 'Constitutional Court',
    topic: { en: 'Legal stability of the Peace Agreement and the right to peace (AL 2/2017).', es: 'Seguridad jurídica del Acuerdo y derecho a la paz (AL 2/2017).' },
    ctx: { en: 'CAJAR — Fast Track.', es: 'CAJAR — Fast Track.' },
    tags: ['peace agreement', 'constitutional law'],
  },
  {
    year: 2018,
    ruling: 'C-027/2018',
    court: 'Constitutional Court',
    topic: { en: 'Political reintegration of former combatants (AL 3/2017).', es: 'Reincorporación política de excombatientes (AL 3/2017).' },
    ctx: { en: 'CAJAR — Fast Track.', es: 'CAJAR — Fast Track.' },
    tags: ['peace agreement', 'transitional justice'],
  },
  {
    year: 2018,
    ruling: 'C-018/2018',
    court: 'Constitutional Court',
    topic: { en: 'Statute of the Opposition (PLE 003–006/2017).', es: 'Estatuto de la Oposición (PLE 003–006/2017).' },
    ctx: { en: 'CAJAR — Fast Track.', es: 'CAJAR — Fast Track.' },
    tags: ['democracy', 'constitutional law'],
  },
  {
    year: 2017,
    ruling: 'C-408/2017',
    court: 'Constitutional Court',
    topic: { en: 'Victim representation during Fast Track legislation (Law 1830/2017).', es: 'Vocerías de víctimas durante Fast Track (Ley 1830/2017).' },
    ctx: { en: 'CAJAR — Fast Track.', es: 'CAJAR — Fast Track.' },
    tags: ['victims', 'peace agreement'],
  },
  {
    year: 2018,
    ruling: 'C-017/2018',
    court: 'Constitutional Court',
    topic: { en: 'Truth Commission — institutional autonomy and the right to truth (DL 588/2017).', es: 'Comisión de la Verdad — autonomía y derecho a la verdad (DL 588/2017).' },
    ctx: { en: 'CAJAR — Fast Track.', es: 'CAJAR — Fast Track.' },
    tags: ['truth commission', 'transitional justice'],
  },
  {
    year: 2018,
    ruling: 'C-067/2018',
    court: 'Constitutional Court',
    topic: { en: 'Truth Commission — autonomy and archives (DL 589/2017).', es: 'Comisión de la Verdad — autonomía y archivos (DL 589/2017).' },
    ctx: { en: 'CAJAR — Fast Track.', es: 'CAJAR — Fast Track.' },
    tags: ['truth commission', 'archives'],
  },
  {
    year: 2017,
    ruling: 'C-433/2017',
    court: 'Constitutional Court',
    topic: { en: 'Reform to Law 1448/2010 on child victims (DL 671/2017).', es: 'Reforma a la Ley 1448/2010 sobre menores (DL 671/2017).' },
    ctx: { en: 'CAJAR — Fast Track.', es: 'CAJAR — Fast Track.' },
    tags: ['victims', 'child rights'],
  },
  {
    year: 2017,
    ruling: 'C-730/2017',
    court: 'Constitutional Court',
    topic: { en: 'Territorial Development Programs with a Peace Approach — citizen participation (Decree 893/2017).', es: 'PDET — participación ciudadana (Decreto 893/2017).' },
    ctx: { en: 'CAJAR — Fast Track.', es: 'CAJAR — Fast Track.' },
    tags: ['peace agreement', 'territorial rights'],
  },
  {
    year: 2017,
    ruling: 'C-644/2017',
    court: 'Constitutional Court',
    topic: { en: 'Payment for environmental services and community rights (DL 870/2017).', es: 'Pago por servicios ambientales y derechos comunitarios (DL 870/2017).' },
    ctx: { en: 'CAJAR — Fast Track.', es: 'CAJAR — Fast Track.' },
    tags: ['environment', 'community rights'],
  },
  {
    year: 2018,
    ruling: 'C-019/2018',
    court: 'Constitutional Court',
    topic: { en: 'Technical defense of victims (DL 775/2017).', es: 'Defensa técnica de víctimas (DL 775/2017).' },
    ctx: { en: 'CAJAR — Fast Track.', es: 'CAJAR — Fast Track.' },
    tags: ['victims', 'due process'],
  },
  {
    year: 2018,
    ruling: 'C-070/2018',
    court: 'Constitutional Court',
    topic: { en: 'Suspension of arrest warrants against security forces (DL 706/2017).', es: 'Suspensión de órdenes de captura a la fuerza pública (DL 706/2017).' },
    ctx: { en: 'CAJAR — Fast Track.', es: 'CAJAR — Fast Track.' },
    tags: ['accountability', 'security forces'],
  },
  {
    year: 2017,
    ruling: 'C-608/2017',
    court: 'Constitutional Court',
    topic: { en: 'National Council for Peace, Coexistence and Reconciliation (DL 885/2017).', es: 'Consejo Nacional de Paz, Convivencia y Reconciliación (DL 885/2017).' },
    ctx: { en: 'CAJAR — Fast Track.', es: 'CAJAR — Fast Track.' },
    tags: ['peacebuilding'],
  },
  {
    year: 2018,
    ruling: 'C-076/2018',
    court: 'Constitutional Court',
    topic: { en: 'Citizen intervention — AL 5/2017 on paramilitarism.', es: 'Intervención ciudadana AL 5/2017 sobre paramilitarismo.' },
    ctx: { en: 'CAJAR.', es: 'CAJAR.' },
    tags: ['paramilitarism', 'accountability'],
  },
  {
    year: 2018,
    ruling: 'C-080/2018',
    court: 'Constitutional Court',
    topic: { en: 'Victims\u2019 rights in the JEP Statutory Law (PLE 008–016/2017).', es: 'Derechos de víctimas en la Ley Estatutaria de la JEP (PLE 008–016/2017).' },
    ctx: { en: 'CAJAR.', es: 'CAJAR.' },
    tags: ['JEP', 'victims', 'transitional justice'],
  },
  {
    year: 2017,
    court: 'Constitutional Court',
    caseNumber: 'T-6406743',
    topic: { en: 'Environmental licensing of transgenics / tutela action (Grupo Semillas).', es: 'Licenciamiento ambiental de transgénicos — acción de tutela (Grupo Semillas).' },
    ctx: { en: 'CAJAR.', es: 'CAJAR.' },
    tags: ['environment', 'indigenous rights'],
  },
  {
    year: 2017,
    court: 'Constitutional Court',
    caseNumber: 'D-12489',
    topic: { en: 'Unconstitutionality challenge to Arts. 43 & 44 of Law 1801/2017 — equality and sex workers\u2019 rights in the Police Code.', es: 'Demanda de inconstitucionalidad Arts. 43 y 44 Ley 1801/2017 — igualdad y derechos de trabajadoras sexuales en el Código de Policía.' },
    ctx: { en: 'CAJAR — challenge to the Police Statute.', es: 'CAJAR — demanda al Código de Policía.' },
    tags: ['equality', 'sex workers\u2019 rights'],
  },

  // --- Block B: 2019–2020 (security, drugs, protest, victims) ---
  {
    year: 2019,
    court: 'Council of State',
    caseNumber: '201800444',
    topic: { en: 'Drug policy as a public health matter.', es: 'Política de drogas como asunto de salud pública.' },
    ctx: { en: 'Strategic litigation (CAJAR).', es: 'Litigio estratégico (CAJAR).' },
    tags: ['drug policy', 'public health'],
  },
  {
    year: 2019,
    court: 'Constitutional Court',
    topic: { en: 'Sex workers\u2019 rights in the National Police Statute.', es: 'Derechos de trabajadoras sexuales en el Código Nacional de Policía.' },
    ctx: { en: 'CAJAR.', es: 'CAJAR.' },
    tags: ['equality', 'sex workers\u2019 rights'],
  },
  {
    year: 2019,
    court: 'Supreme Court of Justice',
    caseNumber: '20190252',
    topic: { en: 'Restrictions on state force during social protest.', es: 'Restricciones al uso de la fuerza estatal durante la protesta social.' },
    ctx: { en: 'CAJAR.', es: 'CAJAR.' },
    tags: ['protest', 'human rights'],
  },
  {
    year: 2019,
    ruling: 'C-590/2019 and C-050/2020',
    court: 'Constitutional Court',
    topic: { en: 'Victims\u2019 rights in the JEP Procedure Law.', es: 'Derechos de las víctimas en la Ley de Procedimiento de la JEP.' },
    ctx: { en: 'CAJAR / FIDH consulting.', es: 'CAJAR / consultoría FIDH.' },
    tags: ['JEP', 'victims', 'transitional justice'],
  },
  {
    year: 2020,
    ruling: 'C-040/2020 and C-069/2020',
    court: 'Constitutional Court',
    topic: { en: 'Challenge to the National Security Policy.', es: 'Demanda contra la Política de Defensa y Seguridad Nacional.' },
    ctx: { en: 'CAJAR.', es: 'CAJAR.' },
    tags: ['security policy', 'human rights'],
  },

  // --- Block C: 2022–2023 (UIS Clinic + SU rulings) ---
  {
    year: 2022,
    ruling: 'T-087/2023 and T-452/2022',
    court: 'Constitutional Court',
    topic: { en: 'Freedom of speech and media regulation.', es: 'Libertad de expresión y regulación de medios.' },
    ctx: { en: 'Carlos Gaviria Díaz Strategic Litigation Legal Clinic (UIS).', es: 'Clínica Jurídica de Litigio Estratégico Carlos Gaviria Díaz (UIS).' },
    tags: ['freedom of speech', 'media'],
  },
  {
    year: 2023,
    ruling: 'SU-545/2023',
    court: 'Constitutional Court',
    topic: { en: 'Rights of Indigenous communities.', es: 'Derechos de los pueblos indígenas.' },
    ctx: { en: 'UIS Legal Clinic.', es: 'Clínica Jurídica UIS.' },
    tags: ['indigenous rights', 'constitutional law'],
  },
  {
    year: 2023,
    ruling: 'SU-546/2023',
    court: 'Constitutional Court',
    topic: { en: 'Systemic violations against human-rights defenders.', es: 'Violaciones sistemáticas contra personas defensoras de derechos humanos.' },
    ctx: { en: 'UIS Legal Clinic.', es: 'Clínica Jurídica UIS.' },
    tags: ['human rights defenders', 'systemic violations'],
  },

  // --- Block D: Portfolio meta-entry ---
  {
    year: 2024,
    court: 'Multiple high courts',
    topic: { en: 'Strategic-litigation portfolio (2016–2024): 30+ amicus curiae briefs and constitutional interventions before Colombia\u2019s Constitutional Court, Supreme Court, Council of State, JEP, IACHR, and ICC.', es: 'Portafolio de litigio estratégico (2016–2024): más de 30 amicus curiae e intervenciones constitucionales ante la Corte Constitucional, la Corte Suprema, el Consejo de Estado, la JEP, la CIDH y la CPI.' },
    ctx: { en: 'Cumulative portfolio — full case log on request.', es: 'Portafolio acumulado — bitácora completa bajo solicitud.' },
    tags: ['portfolio'],
  },
];

// Attach the CC URL lazily via getter.
export function interventionUrl(i: Intervention): string | null {
  if (!i.ruling) return null;
  // Use the first ruling code if multiple listed.
  const first = i.ruling.split(/ and |,|;/i)[0].trim();
  return ccLink(first);
}

// Sorted & grouped helpers.
export function interventionsByYear(): Intervention[] {
  return [...interventions].sort((a, b) => b.year - a.year || (a.ruling || a.caseNumber || '').localeCompare(b.ruling || b.caseNumber || ''));
}
