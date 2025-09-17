// Gradient sequence utilities extracted from SPCChart.tsx for reuse and testing
// Builds contiguous sequences of categories with optional absorption of single-length coloured runs.

import SpcGradientCategory from "./SPCChart.constants";

export type GradientSequence = {
  start: number;
  end: number;
  category: SpcGradientCategory;
};

/**
 * Compute contiguous sequences from per-point gradient categories.
 *
 * Behaviour:
 * - If absorbSingles is true (default), any single-length coloured run (Concern/Improvement/NoJudgement)
 *   is converted to Common to avoid tiny slivers in the background bands.
 * - Only sequences of length >= 2 are emitted for coloured categories; Common sequences are emitted regardless.
 */
export function computeGradientSequences(
  categories: SpcGradientCategory[],
  absorbSingles: boolean = true
): GradientSequence[] {
  if (!categories?.length) return [];

  // Optionally absorb any single coloured point into Common
  const cats = [...categories];
  if (absorbSingles) {
    let i = 0;
    while (i < cats.length) {
      const cat = cats[i];
      let j = i + 1;
      while (j < cats.length && cats[j] === cat) j++;
      const runLen = j - i;
      if (runLen === 1 && cat !== SpcGradientCategory.Common) {
        cats[i] = SpcGradientCategory.Common;
      }
      i = j;
    }
  }

  // Build sequences (coloured runs must be length >= 2 after absorption)
  const out: GradientSequence[] = [];
  if (cats.length) {
    let start = 0;
    for (let k = 1; k <= cats.length; k++) {
      if (k === cats.length || cats[k] !== cats[start]) {
        const runCat = cats[start];
        const end = k - 1;
        const len = end - start + 1;
        if (runCat === SpcGradientCategory.Common || len >= 2)
          out.push({ start, end, category: runCat });
        start = k;
      }
    }
  }

  return out;
}

export default { computeGradientSequences };
