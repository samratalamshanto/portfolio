// Single source of truth for "years of experience" on the portfolio.
// Anchored to the first paid role (Red.Digital, May 2022) — change here if a
// different start makes sense (e.g. earliest dev internship).
export const EXPERIENCE_START = new Date(2022, 4, 1); // May = month 4 (0-indexed)

const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000;

export function yearsOfExperience(now = new Date()) {
  return (now.getTime() - EXPERIENCE_START.getTime()) / YEAR_MS;
}

// Round to the nearest half-year (4.08 -> 4.0, 4.3 -> 4.5, 4.6 -> 4.5, 4.8 -> 5.0).
// Honest rounding — avoids inflating tenure beyond what's actually elapsed.
function roundHalf(n) {
  return Math.round(n * 2) / 2;
}

// "4" — for stat-strip context. Drops trailing .0 (e.g. 5.0 -> "5").
export function yearsDecimal(now) {
  const v = roundHalf(yearsOfExperience(now));
  return v % 1 === 0 ? String(v) : v.toFixed(1);
}

// "4+" — for prose context. Same rounding + plus sign.
export function yearsPlus(now) {
  return `${yearsDecimal(now)}+`;
}
