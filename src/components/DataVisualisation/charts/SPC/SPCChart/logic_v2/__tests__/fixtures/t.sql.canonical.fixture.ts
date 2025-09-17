// Canonical SQL-derived T chart fixture (placeholder)
// TODO: Replace values with canonical intervals and expected numeric outputs from SQL v2.6a.
// Keep tests that import this file skipped until real fixtures are available.

export const T_SQL_CANONICAL_INTERVALS: number[] = [
  // Example intervals (days between events) — placeholder only
  2, 3, 1, 4, 6, 2, 5, 3, 7, 2, 4, 8, 3, 5, 9, 4
];

export const T_SQL_EXPECT_LAST_ROW_LIMITS = {
  // Back-transformed limits; LCL may be null when back-transform <= 0
  mean: null as number | null,
  lowerOneSigma: null as number | null,
  lowerTwoSigma: null as number | null,
  lowerProcessLimit: null as number | null,
  upperOneSigma: null as number | null,
  upperTwoSigma: null as number | null,
  upperProcessLimit: null as number | null,
};
