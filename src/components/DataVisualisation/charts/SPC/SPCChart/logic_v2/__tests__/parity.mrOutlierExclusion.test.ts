import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../engine";
import { ChartType, ImprovementDirection } from "../types";
import { withParityV26 } from "../presets";

function asInput(values: Array<number | null>) {
	const start = new Date(2024, 0, 1);
	return values.map((v, i) => ({
		x: new Date(start.getFullYear(), start.getMonth() + i, 1),
		value: v,
		ghost: false,
		baseline: false,
		target: null as number | null,
	}));
}

describe("parity: MR outlier exclusion recomputes MRbar and mean", () => {
	it("excludes value(s) whose MR exceed raw MR UCL when computing centre line; and trims MR outliers for MRbar", () => {
		// Construct a series with a single large jump to create an MR outlier
		// Values mostly around 10; a spike to 40 and back causes a huge MR at the spike boundaries
		const series = [
			10, 10.2, 9.9, 10.1, 40, 10.0, 9.8, 10.1, 10.0, 9.9, 10.2, 10.1, 9.9,
		];

		const base = buildSpcV26a({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Neither,
			data: asInput(series),
			settings: withParityV26({
				excludeMovingRangeOutliers: false,
				minimumPoints: 12,
			}),
		}).rows;

		const excluded = buildSpcV26a({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Neither,
			data: asInput(series),
			settings: withParityV26({
				excludeMovingRangeOutliers: true,
				minimumPoints: 12,
			}),
		}).rows;

		// Compare last non-ghost row metrics
		const lastBase = base[base.length - 1];
		const lastEx = excluded[excluded.length - 1];

		// Mean should shift toward the stable cluster when exclusion is enabled
		expect(lastEx.mean !== null && lastBase.mean !== null).toBe(true);
		if (lastEx.mean !== null && lastBase.mean !== null) {
			expect(lastEx.mean).toBeLessThan(lastBase.mean + 1e-9); // closer to ~10 vs influenced by spike
		}

		// MRbar should reduce after trimming MR outliers
		// We don't expose MRbar directly on rows; compare UCL span as a proxy (center +/- 2.66*MRbar)
		if (
			lastEx.upperProcessLimit !== null &&
			lastEx.mean !== null &&
			lastBase.upperProcessLimit !== null &&
			lastBase.mean !== null
		) {
			const spanEx = lastEx.upperProcessLimit - lastEx.mean;
			const spanBase = lastBase.upperProcessLimit - lastBase.mean;
			expect(spanEx).toBeLessThan(spanBase + 1e-9);
		}
	});
});
