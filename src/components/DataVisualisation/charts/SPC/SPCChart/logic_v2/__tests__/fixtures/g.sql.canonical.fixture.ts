// Canonical SQL-derived G chart fixture (placeholder)
// TODO: Replace values with canonical counts-between from SQL v2.6a examples and expected numeric outputs.

export const G_SQL_CANONICAL_INTERVALS: number[] = [
  // Example counts between events — placeholder only (0-based allowed)
  0, 1, 0, 2, 3, 1, 0, 4, 2, 1, 0, 3, 2, 0, 1, 5, 2
];

export const G_SQL_EXPECT_LAST_ROW_LIMITS = {
  mean: null as number | null,
  lowerOneSigma: null as number | null,
  lowerTwoSigma: null as number | null,
  lowerProcessLimit: null as number | null,
  upperOneSigma: null as number | null,
  upperTwoSigma: null as number | null,
  upperProcessLimit: null as number | null,
};
