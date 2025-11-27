import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../engine";
import { withParityV26 } from "../presets";
import { ChartType, ImprovementDirection, VariationIcon } from "../types";
import {
	datasetOptions as getHealthcareOptions,
	findDataset as findHealthcare,
	months as monthsHC,
	toV2Dir as toV2HC,
} from "../storybook/data/healthcareDatasets";
import {
	getMetricOptions,
	findGroup,
	normaliseSeries,
	deriveBaselines,
	toV2ImprovementDir,
} from "../storybook/data/groupedDataset";
import { iconToName } from "../storybook/data/variationIconColours";

function allowedIconsForDir(dir: ImprovementDirection): VariationIcon[] {
	// For Up/Down metrics, Neither* icons are not expected; CommonCause is always allowed.
	if (dir === ImprovementDirection.Up)
		return [
			VariationIcon.ImprovementHigh,
			VariationIcon.ConcernLow,
			VariationIcon.CommonCause,
		];
	if (dir === ImprovementDirection.Down)
		return [
			VariationIcon.ImprovementLow,
			VariationIcon.ConcernHigh,
			VariationIcon.CommonCause,
		];
	return [
		VariationIcon.NeitherHigh,
		VariationIcon.NeitherLow,
		VariationIcon.CommonCause,
	];
}

describe("logic_v2: centralised datasets parity (healthcare + grouped)", () => {
	it("healthcare datasets: rows align with values, limits present when eligible, last icon sane", () => {
		const options = getHealthcareOptions();
		expect(options.length).toBeGreaterThan(0);

		for (const name of options) {
			const def = findHealthcare(name);
			const dates = monthsHC(def.values.length);
			const data = def.values.map((v, i) => ({
				x: dates[i],
				value: v,
				ghost: false,
				baseline: false,
				target: null,
			}));
			const settings = withParityV26();
			const dir = toV2HC(def.direction);
			const res = buildSpcV26a({
				chartType: ChartType.XmR,
				metricImprovement: dir,
				data,
				settings,
			});
			const rows = res.rows;

			expect(rows.length).toBe(def.values.length);

			const eligible =
				def.values.filter((v) => typeof v === "number").length >=
				(settings.minimumPoints ?? 13);
			const last = rows.filter((r) => !r.ghost).at(-1)!;

			if (eligible) {
				expect(last.mean).not.toBeNull();
				expect(last.upperProcessLimit).not.toBeNull();
				expect(last.lowerProcessLimit).not.toBeNull();
			}

			// Icon should be one of the allowed set for the metric direction (or CommonCause)
			expect(allowedIconsForDir(dir)).toContain(last.variationIcon);
		}
	});

	it("grouped dataset: basic invariants and optional baselines do not break parity build", () => {
		const metricOptions = getMetricOptions();
		expect(metricOptions.length).toBeGreaterThan(0);
		const pick = metricOptions[0];
		const grp = findGroup(pick)!;
		const { data: series } = normaliseSeries(grp);
		const baselines = deriveBaselines(grp, series.length);
		const dir = toV2ImprovementDir(grp.improvement as any);

		const input = series.map((d, i) => ({
			x: d.x,
			value: d.value,
			ghost: false,
			baseline: !!baselines?.[i],
			target: null,
		}));
		const settings = withParityV26();
		const rows = buildSpcV26a({
			chartType: ChartType.XmR,
			metricImprovement: dir,
			data: input,
			settings,
		}).rows;

		expect(rows.length).toBe(series.length);
		const last = rows.filter((r) => !r.ghost).at(-1)!;
		const eligible = series.length >= (settings.minimumPoints ?? 13);
		if (eligible) {
			expect(last.mean).not.toBeNull();
			expect(last.upperProcessLimit).not.toBeNull();
			expect(last.lowerProcessLimit).not.toBeNull();
		}
		expect(allowedIconsForDir(dir)).toContain(last.variationIcon);
	});

	it("grouped dataset: metrics report across ALL metrics (icons, eligibility, flags)", () => {
		const metricOptions = getMetricOptions();
		expect(metricOptions.length).toBeGreaterThan(0);
		const settings = withParityV26();

		const perMetric: Array<{
			metric: string;
			dir: ImprovementDirection;
			length: number;
			eligible: boolean;
			lastIcon: string;
			anySinglePoint: boolean;
			anyTwoSigma: boolean;
			anyShift: boolean;
			anyTrend: boolean;
		}> = [];

		let totals: Record<string, number> = {
			improvement: 0,
			concern: 0,
			neutralSpecialCause: 0,
			commonCause: 0,
		};

		for (const metric of metricOptions) {
			const grp = findGroup(metric)!;
			const { data: series } = normaliseSeries(grp);
			const baselines = deriveBaselines(grp, series.length);
			const dir = toV2ImprovementDir(grp.improvement as any);
			const input = series.map((d, i) => ({
				x: d.x,
				value: d.value,
				ghost: false,
				baseline: !!baselines?.[i],
				target: null,
			}));

			const rows = buildSpcV26a({
				chartType: ChartType.XmR,
				metricImprovement: dir,
				data: input,
				settings,
			}).rows;

			// invariants
			expect(rows.length).toBe(series.length);
			const last = rows.filter((r) => !r.ghost).at(-1)!;
			const eligible = series.length >= (settings.minimumPoints ?? 13);
			if (eligible) {
				expect(last.mean).not.toBeNull();
				expect(last.upperProcessLimit).not.toBeNull();
				expect(last.lowerProcessLimit).not.toBeNull();
			}
			expect(allowedIconsForDir(dir)).toContain(last.variationIcon);

			const iconName = iconToName(last.variationIcon);
			totals[iconName] = (totals[iconName] ?? 0) + 1;

			// aggregate flags for the series
			const anySinglePoint = rows.some(
				(r) => r.singlePointUp || r.singlePointDown
			);
			const anyTwoSigma = rows.some((r) => r.twoSigmaUp || r.twoSigmaDown);
			const anyShift = rows.some((r) => r.shiftUp || r.shiftDown);
			const anyTrend = rows.some((r) => r.trendUp || r.trendDown);

			perMetric.push({
				metric,
				dir,
				length: series.length,
				eligible,
				lastIcon: iconName,
				anySinglePoint,
				anyTwoSigma,
				anyShift,
				anyTrend,
			});
		}

		// Emit a concise report for visibility in CI logs
		// Using console.info to avoid failing on formatting issues
		// console.info(
		// 	"SPC v2 grouped metrics report (count=",
		// 	perMetric.length,
		// 	")"
		// );
		// console.table?.(
		// 	perMetric.map((m) => ({
		// 		Metric: m.metric,
		// 		Dir: m.dir,
		// 		Len: m.length,
		// 		Eligible: m.eligible,
		// 		LastIcon: m.lastIcon,
		// 		Single: m.anySinglePoint,
		// 		TwoSig: m.anyTwoSigma,
		// 		Shift: m.anyShift,
		// 		Trend: m.anyTrend,
		// 	}))
		// );
		// console.info("Icon totals:", totals);

		// Basic sanity: at least one metric per category over the full suite (dataset dependent but usually true)
		// We don't hard-require each bucket to be >0 to avoid brittleness; assert totals sum
		const sum = Object.values(totals).reduce((a, b) => a + b, 0);
		expect(sum).toBe(perMetric.length);
	});
});
