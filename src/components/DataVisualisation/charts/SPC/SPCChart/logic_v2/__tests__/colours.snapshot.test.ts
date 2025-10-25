import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../engine";
import { withParityV26 } from "../presets";
import { ChartType, ImprovementDirection } from "../types";
import { iconToName } from "../storybook/data/variationIconColours";
import {
	getMetricOptions,
	findGroup,
	normaliseSeries,
	toV2ImprovementDir,
} from "../storybook/data/groupedDataset";
import {
	datasetOptions as healthcareOptions,
	findDataset as findHealthcare,
	months,
	toV2Dir as toV2HealthcareDir,
} from "../storybook/data/healthcareDatasets";

// Golden snapshot scaffold for computed icon categories (by name).
// Intention: lock end-to-end colours at a category level (improvement/concern/neutral/common),
// independent of exact hex until tokens land. Initially skipped — enable and paste the
// generated output into the EXPECTED_* arrays to lock down behaviour.

function buildIconNamesFromValues(
	values: ReadonlyArray<number>,
	dir: ImprovementDirection
): string[] {
	const dates = months(values.length);
	const input = dates.map((x, i) => ({
		x,
		value: values[i],
		ghost: false,
		baseline: false,
		target: null,
	}));
	const rows = buildSpcV26a({
		chartType: ChartType.XmR,
		metricImprovement: dir,
		data: input,
		settings: withParityV26({ minimumPoints: 12 }),
	}).rows;
	return rows.filter((r) => !r.ghost).map((r) => iconToName(r.variationIcon));
}

function buildIconNamesForGrouped(metric: string): {
	metric: string;
	names: string[];
} {
	const grp = findGroup(metric)!;
	const { data } = normaliseSeries(grp);
	const input = data.map((d) => ({
		x: d.x,
		value: d.value,
		ghost: false,
		baseline: false,
		target: null,
	}));
	const dir = toV2ImprovementDir(grp.improvement as any);
	const rows = buildSpcV26a({
		chartType: ChartType.XmR,
		metricImprovement: dir,
		data: input,
		settings: withParityV26({ minimumPoints: 12 }),
	}).rows;
	const names = rows
		.filter((r) => !r.ghost)
		.map((r) => iconToName(r.variationIcon));
	return { metric: grp.metric, names };
}

// Replace with pasted snapshots and unskip the tests below when ready.
const EXPECTED_GROUPED_LAST12: string[] = [];
const EXPECTED_HEALTHCARE_LAST12: string[] = [];

// Helper to pretty-print arrays for copy/paste.
function logArray(label: string, arr: string[]): void {
	console.log(`${label} = [\n  ${arr.map((s) => `'${s}'`).join(",\n  ")}\n]`);
}

describe("Golden colours snapshot", () => {
	it("grouped dataset: first metric last 12 icon categories", () => {
		const metric = getMetricOptions()[0];
		const { names } = buildIconNamesForGrouped(metric);
		const last12 = names.slice(-12);
		// logArray("EXPECTED_GROUPED_LAST12", last12);
		if (EXPECTED_GROUPED_LAST12.length === 0) {
			// Scaffold mode: just ensure we produced something deterministic
			expect(last12.length).toBeGreaterThan(0);
		} else {
			expect(last12).toEqual(EXPECTED_GROUPED_LAST12);
		}
	});

	it("healthcare dataset: first option last 12 icon categories", () => {
		const key = healthcareOptions()[0];
		const def = findHealthcare(key);
		const names = buildIconNamesFromValues(
			def.values,
			toV2HealthcareDir(def.direction)
		);
		const last12 = names.slice(-12);
		// logArray("EXPECTED_HEALTHCARE_LAST12", last12);
		if (EXPECTED_HEALTHCARE_LAST12.length === 0) {
			expect(last12.length).toBeGreaterThan(0);
		} else {
			expect(last12).toEqual(EXPECTED_HEALTHCARE_LAST12);
		}
	});
});
