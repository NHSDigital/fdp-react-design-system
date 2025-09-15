import type { Meta, StoryObj } from "@storybook/react";
import { toTimeBetweenEvents, toCountBetweenEvents } from "../";
import { tgEventDates, tgHits } from "./data/tgParityFixtures";

const meta: Meta = {
  title: "Data Visualisation/SPC/v2/T&G Parity Vignettes",
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj;

// --- Tiny helpers (story-only, illustrative) ---
// T chart (time-between events) naive normal-approx limits
function tNaiveLimits(msIntervals: number[]) {
  if (!msIntervals.length) return { mean: 0, sd: 0, LCL: 0, UCL: 0, LCLSuppressed: 0 };
  const mean = msIntervals.reduce((a, b) => a + b, 0) / msIntervals.length;
  const var_ =
    msIntervals.length > 1
      ? msIntervals.reduce((a, b) => a + (b - mean) ** 2, 0) / (msIntervals.length - 1)
      : 0;
  const sd = Math.sqrt(var_);
  const LCL = mean - 3 * sd;
  const UCL = mean + 3 * sd;
  // SQL parity convention: lower limits <= 0 are suppressed/clamped to 0 for T
  const LCLSuppressed = LCL <= 0 ? 0 : LCL;
  return { mean, sd, LCL, UCL, LCLSuppressed };
}

// G chart (count-between events, support starts at 1): quantile-based limits
// For shifted geometric with mean gBar, p = 1/gBar, and Q(u) = ceil(log(1-u)/log(1-p))
function gQuantileLimits(counts: number[], alpha = 0.0027) {
  const valid = counts.filter((v) => Number.isFinite(v) && v >= 1);
  if (!valid.length) return { mean: 0, p: 0, lower: 1, upper: 1 };
  const mean = valid.reduce((a, b) => a + b, 0) / valid.length;
  const p = 1 / mean; // MLE for shifted geometric
  const q = (u: number) => Math.ceil(Math.log(1 - u) / Math.log(1 - p));
  const lo = q(alpha / 2);
  const hi = q(1 - alpha / 2);
  // Lower bound cannot be < 1 for the shifted geometric; clamp
  return { mean, p, lower: Math.max(1, lo), upper: Math.max(1, hi) };
}

export const Overview: Story = {
  render: () => {
    // --- T vignette: events with small variation → naive LCL likely negative (suppressed to 0) ---
    const tSeries = toTimeBetweenEvents(tgEventDates); // values are ms deltas
    const tIntervals = tSeries.map((r) => r.value);
    const tLimits = tNaiveLimits(tIntervals);

    // --- G vignette: sparse hits → quantile limits on shifted geometric ---
    const gSeries = toCountBetweenEvents(tgHits); // values are integer counts starting at 1
    const gCounts = gSeries.map((r) => r.value);
    const gLimits = gQuantileLimits(gCounts);

    return (
      <div style={{ maxWidth: 900 }}>
        <h2>T & G Parity Vignettes</h2>
        <p>
          These small fixtures complement the preprocess adapters by illustrating the
          parity semantics we target for T and G charts in SQL mode. The engine currently
          focuses on XmR; these calculations are story-only helpers to clarify expected behaviour.
        </p>

        <h3>T chart: Back-transform/LCL suppression</h3>
        <p>
          Using the derived time-between-events series, a naive normal-approximation can produce
          a negative lower limit. Under SQL parity conventions, the lower limit is suppressed to 0
          (not drawn) if it is non-positive.
        </p>
        <details open>
          <summary>Intervals (ms)</summary>
          <pre>{JSON.stringify(tIntervals, null, 2)}</pre>
        </details>
        <pre>
          {JSON.stringify(
            {
              meanMs: Math.round(tLimits.mean),
              sdMs: Math.round(tLimits.sd),
              LCL_raw: Math.round(tLimits.LCL),
              LCL_suppressed: Math.round(tLimits.LCLSuppressed),
              UCL_raw: Math.round(tLimits.UCL),
            },
            null,
            2
          )}
        </pre>
        <small>
          Note: Production T charts typically use transform-based limits (e.g., log) or exponential
          quantiles. This vignette demonstrates the suppression rule: LCL ≤ 0 → clamp to 0 (omit).
        </small>

        <hr />

        <h3>G chart: Quantile-based limits (shifted geometric)</h3>
        <p>
          For counts-between-events with support starting at 1, the shifted geometric distribution
          provides quantile-based control limits. We estimate p = 1/mean and compute two-sided 3σ
          equivalents via quantiles.
        </p>
        <details open>
          <summary>Counts-between-events</summary>
          <pre>{JSON.stringify(gCounts, null, 2)}</pre>
        </details>
        <pre>
          {JSON.stringify(
            {
              mean: Number(gLimits.mean.toFixed(2)),
              p: Number(gLimits.p.toFixed(4)),
              lowerQuantile: gLimits.lower,
              upperQuantile: gLimits.upper,
            },
            null,
            2
          )}
        </pre>
        <small>
          Note: This is a minimal illustration for parity; full G chart implementations may also
          include additional small-sample adjustments and visual policies.
        </small>
      </div>
    );
  },
};
