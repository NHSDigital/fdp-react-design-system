import { describe, it, expect } from "vitest";
import spcModule, { ImprovementDirection, ChartType } from "./spc";
import fs from "node:fs";
import path from "node:path";

// Snapshot-style parity test. If underlying logic changes intentionally, regenerate golden via generator script (previously _generate-all-golden).
// Compares per-row statistical outputs across XmR, T, G chart types to frozen golden JSON.

interface GoldenRow {
	rowId: number;
	value: number | null;
	ghost: boolean;
	mean: number | null;
	mr: number | null;
	mrMean: number | null;
	ucl: number | null;
	lcl: number | null;
	u2: number | null;
	l2: number | null;
	u1: number | null;
	l1: number | null;
	vIcon: string;
	sc3High: boolean;
	sc3Low: boolean;
	sc23High: boolean;
	sc23Low: boolean;
	sc45High: boolean;
	sc45Low: boolean;
	shiftHigh: boolean;
	shiftLow: boolean;
	trendUp: boolean;
	trendDown: boolean;
}

type Golden = Record<"XmR" | "T" | "G", GoldenRow[]>;

const goldenPath = path.resolve(__dirname, "../test-data/golden-all.json");
const golden: Golden = JSON.parse(fs.readFileSync(goldenPath, "utf8"));

// Reconstruct the input datasets used to produce the snapshot
const datasets = {
	XmR: {
		chartType: "XmR" as const,
		data: [
			55, 60, 51, 50, 51, 60, 50, 51, 52, 52, 60, 50, 60, 50, 49, 45, 51, 45,
			44, 43, 40, 35, 30, 25,
		].map((v, i) => ({ x: i + 1, value: v })),
	},
	T: {
		chartType: "T" as const,
		data: [5, 7, 9, 4, 6, 8, 30, 7, 6, 5, 4, 3, 2, 1].map((v, i) => ({
			x: i + 1,
			value: v,
			target: 10,
			ghost: i === 5,
		})),
	},
	G: {
		chartType: "G" as const,
		data: [10, 11, 9, 10, 12, 8, 7, 6, 40, 7, 8, 9, 10, 11].map((v, i) => ({
			x: i + 1,
			value: v,
			target: 10,
			ghost: i === 4,
		})),
	},
};

function project(rows: any[]): GoldenRow[] {
	return rows.map((r) => ({
		rowId: r.rowId,
		value: r.value,
		ghost: r.ghostFlag || r.ghost,
		mean: r.mean,
		mr: r.mr,
		mrMean: r.mrMean,
		ucl: r.upperProcessLimit,
		lcl: r.lowerProcessLimit,
		u2: r.upperTwoSigma,
		l2: r.lowerTwoSigma,
		u1: r.upperOneSigma,
		l1: r.lowerOneSigma,
		vIcon: r.variationIcon,
		sc3High: r.specialCauseSinglePointUp,
		sc3Low: r.specialCauseSinglePointDown,
		sc23High: r.specialCauseTwoOfThreeUp,
		sc23Low: r.specialCauseTwoOfThreeDown,
		sc45High: r.specialCauseFourOfFiveUp,
		sc45Low: r.specialCauseFourOfFiveDown,
		shiftHigh: r.specialCauseShiftUp,
		shiftLow: r.specialCauseShiftDown,
		trendUp: r.specialCauseTrendUp,
		trendDown: r.specialCauseTrendDown,
	}));
}

const NUM_FIELDS: (keyof GoldenRow)[] = [
	"mean",
	"mr",
	"mrMean",
	"ucl",
	"lcl",
	"u2",
	"l2",
	"u1",
	"l1",
];
const TOL = 1e-9;

describe("SPC engine golden snapshot parity", () => {
	(["XmR", "T", "G"] as const).forEach((key) => {
		it(`${key} chart rows match golden snapshot`, () => {
			const input = datasets[key];
			const { rows } = spcModule.buildSpc({ chartType: input.chartType as ChartType, metricImprovement: ImprovementDirection.Up, data: input.data, settings: { enableFourOfFiveRule: true } });
			const projected = project(rows);
			const expected = golden[key];
			expect(projected.length).toBe(expected.length);
			for (let i = 0; i < expected.length; i++) {
				const exp = expected[i];
				const act = projected[i];
				expect(act.rowId).toBe(exp.rowId);
				expect(act.value).toBe(exp.value);
				expect(act.ghost).toBe(exp.ghost);
				// Numeric comparisons within tolerance (null stays null)
				NUM_FIELDS.forEach((f) => {
					const ev = exp[f];
					const av = act[f];
					if (ev === null || av === null) {
						expect(av).toBe(ev);
					} else {
						expect(Math.abs((av as number) - (ev as number))).toBeLessThan(TOL);
					}
				});
				// Exact discrete / boolean flags
				expect(act.vIcon).toBe(exp.vIcon);
				[
					"sc3High",
					"sc3Low",
					"sc23High",
					"sc23Low",
					"sc45High",
					"sc45Low",
					"shiftHigh",
					"shiftLow",
					"trendUp",
					"trendDown",
				].forEach((flag) => {
					// @ts-ignore
					const actFlag = !!act[flag];
					// @ts-ignore
					const expFlag = !!exp[flag];
					expect(actFlag).toBe(expFlag);
				});
			}
		});
	});
});
