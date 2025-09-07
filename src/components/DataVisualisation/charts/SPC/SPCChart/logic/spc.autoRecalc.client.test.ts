import { describe, it, expect } from "vitest";
import { buildSpc, ImprovementDirection } from "./spc";
import { ChartType } from './spc';

/** Helper */
const make = (vals: number[]) => vals.map((v, i) => ({ x: i + 1, value: v }));

/**
 * Synthetic series: 12 points stable at 10, then sustained shift to 18.
 * Should trigger:
 *  - specialCauseShiftHigh flags on second phase
 *  - auto baseline insertion (partitionId change) when autoRecalculateAfterShift enabled
 */
const shifted = [
	10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 18, 18, 18, 18, 18, 18, 18,
];

describe("autoRecalculateAfterShift", () => {
	it("does not create extra partition when disabled", () => {
		const res = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: make(shifted),
		});
		const uniquePartitions = Array.from(
			new Set(res.rows.map((r) => r.partitionId))
		);
		expect(uniquePartitions.length).toBe(1);
	});

	it("creates new partition after sustained shift when enabled", () => {
		const res = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: make(shifted),
			settings: { autoRecalculateAfterShift: true, specialCauseShiftPoints: 6 },
		});
		const partIds = res.rows.map((r) => r.partitionId);
		const uniquePartitions = Array.from(new Set(partIds));
		expect(uniquePartitions.length).toBeGreaterThan(1);
		// Ensure baseline flag inserted exactly at first index of recalculated partition
		const changeIndex = partIds.findIndex(
			(pid, i) => i > 0 && pid !== partIds[i - 1]
		);
		expect(changeIndex).toBeGreaterThanOrEqual(12); // should occur at or after shift start (index 12 zero-based)
	});

			it('respects delta sigma threshold (higher threshold suppresses recalculation)', () => {
				// deltaSigma for this shift ~20; using 50 ensures suppression
				const resHigh = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data: make(shifted), settings: { autoRecalculateAfterShift: true, autoRecalculateDeltaSigma: 50 } });
			const partsHigh = Array.from(new Set(resHigh.rows.map(r=>r.partitionId)));
			expect(partsHigh.length).toBe(1);

			const resLow = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data: make(shifted), settings: { autoRecalculateAfterShift: true, autoRecalculateDeltaSigma: 0.1 } });
			const partsLow = Array.from(new Set(resLow.rows.map(r=>r.partitionId)));
			expect(partsLow.length).toBeGreaterThan(1);
		});
});
