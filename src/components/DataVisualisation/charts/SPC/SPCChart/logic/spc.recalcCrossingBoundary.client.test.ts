import { describe, it, expect } from "vitest";
import { buildSpc } from "./spc";
import { ChartType, ImprovementDirection, AssuranceIcon } from "./spcConstants";

const toRows = (vals: number[], target?: number) =>
	vals.map((v, i) => ({ x: i + 1, value: v, target }));

describe("SPC baseline recalculation crossing & assurance boundary equality", () => {
	it("auto recalculation after shift crossing produces new mean & resets shift flags outside original partition", () => {
		// Enable autoRecalculateAfterShift; dataset: stable low phase then clear high shift.
		const low = [60, 61, 59, 60, 61, 59, 60, 61, 60, 59, 60, 61];
		const high = [80, 81, 82, 83, 82, 81, 84, 83, 85, 84]; // extended to ensure >= shiftN sustained points
		const values = [...low, ...high];
		const { rows } = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: toRows(values),
			settings: {
				autoRecalculateAfterShift: true,
				autoRecalculateDeltaSigma: 0.3,
				autoRecalculateShiftLength: 8,
			},
		});
		// Find first row where partitionId changes (indicates recalculation baseline).
		const firstPartition = rows[0].partitionId;
		const recalcIndex = rows.findIndex((r) => r.partitionId !== firstPartition);
		expect(recalcIndex).toBeGreaterThan(-1);
		// Assert a partition change occurred and new partition has different mean baseline.
		const prevPartitionRows = rows.filter(
			(r) => r.partitionId === rows[0].partitionId
		);
		const newPartitionRows = rows.filter(
			(r) => r.partitionId === rows[recalcIndex].partitionId
		);
		expect(prevPartitionRows.length).toBeGreaterThan(0);
		expect(newPartitionRows.length).toBeGreaterThan(0);
		const prevMean = prevPartitionRows.find((r) => r.mean !== null)?.mean;
		const newMean = newPartitionRows.find((r) => r.mean !== null)?.mean;
		expect(prevMean).not.toBe(newMean);
	});

	it("assurance icon boundary: value exactly at target yields Pass for Up metric with single-point fallback mode", () => {
		// Use small dataset just over minimum to enable limits, but disable capability mode by removing limits via minimumPoints > length to force fallback
		const vals = [
			100, 101, 99, 100, 101, 100, 100, 101, 100, 101, 100, 101, 100,
		];
		const target = 100; // exact boundary
		const { rows } = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: toRows(vals, target),
			settings: { assuranceCapabilityMode: false },
		});
		const last = rows[rows.length - 1]!;
		expect(last.assuranceIcon).toBe(AssuranceIcon.Pass);
	});
});
