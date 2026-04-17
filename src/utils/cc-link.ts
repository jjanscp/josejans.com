// Auto-generate Constitutional Court of Colombia relatoria URLs from a ruling code.
//
// Pattern (Corte Constitucional):
//   https://www.corteconstitucional.gov.co/relatoria/{YYYY}/{TIPO}-{NUM}-{YY}.htm
//
// Where TIPO ∈ {C, SU, T}, NUM is the ruling number with no leading zeros,
// and YY is the 2-digit year. A ruling can be written as "C-590/2019", "C-590 de 2019",
// "SU-545/2023", "T-087/23" — we normalise all of these.
//
// Supreme Court of Justice, Council of State, JEP, IACHR, ICC rulings do not have a
// predictable public URL, so this helper only returns links for Constitutional Court codes.

const CC_RE = /^(C|SU|T)[\-\s]?(\d{1,4})[\s\/de]*(\d{2,4})$/i;

export function ccLink(ruling: string | undefined | null): string | null {
  if (!ruling) return null;
  const m = ruling.trim().match(CC_RE);
  if (!m) return null;
  const tipo = m[1].toUpperCase();
  const num = String(parseInt(m[2], 10)); // strip leading zeros
  const rawYear = m[3];
  const yyyy = rawYear.length === 2 ? (parseInt(rawYear, 10) > 50 ? `19${rawYear}` : `20${rawYear}`) : rawYear;
  const yy = yyyy.slice(-2);
  return `https://www.corteconstitucional.gov.co/relatoria/${yyyy}/${tipo}-${num}-${yy}.htm`;
}

// Return the full list of CC links found in a comma/ampersand-separated string of rulings.
export function ccLinks(rulings: string | undefined | null): { ruling: string; url: string | null }[] {
  if (!rulings) return [];
  return rulings
    .split(/[,;y&]| and /i)
    .map((r) => r.trim())
    .filter(Boolean)
    .map((r) => ({ ruling: r, url: ccLink(r) }));
}
