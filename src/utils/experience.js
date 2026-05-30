// Single source of truth for "years of experience" on the portfolio.
// Anchored to the first paid role (Red.Digital, May 2022) — change here if a
// different start makes sense (e.g. earliest dev internship).
export const EXPERIENCE_START = new Date(2022, 4, 1); // May = month 4 (0-indexed)

const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000;

export function yearsOfExperience(now = new Date()) {
  return (now.getTime() - EXPERIENCE_START.getTime()) / YEAR_MS;
}

// "4.1" — 1-decimal precision, for stat-strip context.
export function yearsDecimal(now) {
  return yearsOfExperience(now).toFixed(1);
}

// "4+" — whole-year floor with plus sign, for prose context.
export function yearsPlus(now) {
  return `${Math.floor(yearsOfExperience(now))}+`;
}
