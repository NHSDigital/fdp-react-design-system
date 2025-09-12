import { describe, it, expect } from "vitest";
import { buildSpc } from "./spc";
import { ImprovementDirection, ChartType } from "./spcConstants";

// Cap suppression tests: ensure limits & mean are nulled after configured caps and warnings emitted.

function makeSeries(n: number, base = 100, jitter = 0): number[] {
	return Array.from(
		{ length: n },
		(_, i) => base + (i % 2 === 0 ? jitter : -jitter)
	);
}

describe("SPC cap suppression", () => {
	it("applies partition cap (maximumPointsPartition) and emits partition_cap_applied warning", () => {
		const values = makeSeries(16, 100, 2); // 16 points >= minimumPoints (13)
		const data = values.map((v, i) => ({ x: i + 1, value: v }));

			const { rows, warnings } = buildSpc({
				chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
			settings: { maximumPointsPartition: 8 }, // cap after 8 non-ghost points in partition
		});

		// Sanity: earlier rows have mean/limits
		const row8 = rows.find((r) => r.rowId === 8)!; // last allowed
		const row9 = rows.find((r) => r.rowId === 9)!; // first suppressed
		expect(row8.mean).not.toBeNull();
		expect(row9.mean).toBeNull();
		// All subsequent rows remain null
		rows.filter((r) => r.rowId > 8).forEach((r) => expect(r.mean).toBeNull());

		const partCap = warnings.find((w) => w.code === "partition_cap_applied");
		expect(partCap).toBeDefined();
	});

	it("applies global cap (maximumPoints) and emits global_cap_applied warning", () => {
		const values = makeSeries(14, 100, 1.5);
		const data = values.map((v, i) => ({ x: i + 1, value: v }));

			const { rows, warnings } = buildSpc({
				chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Down,
			data,
			settings: { maximumPoints: 10 }, // cap after 10 non-ghost globally
		});

		const row10 = rows.find((r) => r.rowId === 10)!;
		const row11 = rows.find((r) => r.rowId === 11)!;
		expect(row10.mean).not.toBeNull();
		expect(row11.mean).toBeNull();
		rows.filter((r) => r.rowId > 10).forEach((r) => expect(r.mean).toBeNull());

		const globalCap = warnings.find((w) => w.code === "global_cap_applied");
		const noPartitionCap = warnings.find(
			(w) => w.code === "partition_cap_applied"
		);
		expect(globalCap).toBeDefined();
		expect(noPartitionCap).toBeUndefined();
	});

	it("applies both partition and global caps and emits both warnings", () => {
		const values = makeSeries(20, 100, 3);
		const data = values.map((v, i) => ({ x: i + 1, value: v }));

			const { rows, warnings } = buildSpc({
				chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
			settings: { maximumPointsPartition: 8, maximumPoints: 12 },
		});

		// Partition cap triggers first: row 9+ suppressed
		expect(rows.find((r) => r.rowId === 8)!.mean).not.toBeNull();
		for (let id = 9; id <= 20; id++) {
			expect(rows.find((r) => r.rowId === id)!.mean).toBeNull();
		}
		const partCap = warnings.find((w) => w.code === "partition_cap_applied");
		const globalCap = warnings.find((w) => w.code === "global_cap_applied");
		expect(partCap).toBeDefined();
		expect(globalCap).toBeDefined();
	});
});
