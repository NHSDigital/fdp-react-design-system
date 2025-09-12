import { buildSpc, normaliseSpcSettings, SpcSettingsV2 } from "./spc";
import {
	PrecedenceStrategy,
	VariationIcon,
	ImprovementDirection,
	ChartType,
} from "./spcConstants";

const baseData = [
	{ x: 1, value: 10 },
	{ x: 2, value: 11 },
	{ x: 3, value: 12 },
	{ x: 4, value: 13 },
	{ x: 5, value: 14 },
	{ x: 6, value: 15 },
	{ x: 7, value: 16 },
	{ x: 8, value: 17 },
	{ x: 9, value: 18 },
	{ x: 10, value: 19 },
	{ x: 11, value: 20 },
	{ x: 12, value: 21 },
	{ x: 13, value: 22 },
];

describe("normaliseSpcSettings", () => {
	test("maps grouped V2 settings onto legacy engine fields (trend gating no longer mapped)", () => {
		const v2: SpcSettingsV2 = {
			rules: {
				shiftPoints: 7,
				trendPoints: 6,
				fourOfFiveEnabled: true,
				collapseWeakerClusterRules: false,
			},
			precedence: {
				strategy: PrecedenceStrategy.DirectionalFirst,
			},
			thresholds: {
				minimumPoints: 14,
			},
			grace: {
				emergingEnabled: true,
			},
		};
		const legacy = normaliseSpcSettings(v2) as any;
		expect(legacy.specialCauseShiftPoints).toBe(7);
		expect(legacy.specialCauseTrendPoints).toBe(6);
		expect(legacy.enableFourOfFiveRule).toBe(true);
		expect(legacy.collapseWeakerClusterRules).toBe(false);
		expect(legacy.precedenceStrategy).toBe(PrecedenceStrategy.DirectionalFirst);
		expect(legacy.minimumPoints).toBe(14);
		// Backwards compatible legacy aliases still populated (where applicable)
		expect(legacy.emergingGraceEnabled).toBe(true);
		expect(legacy.grace?.emergingEnabled).toBe(true);
		// Trend side gating is now unconditional and no longer mapped/populated by the normaliser
		expect(legacy.trendSideGatingEnabled).toBeUndefined();
		expect(legacy.rules?.collapseWeakerClusterRules).toBe(false);
	});

	test("legacy fields still pass through unchanged when V2 absent", () => {
		// Temporarily disable strict mode for this legacy-shape assertion
		(globalThis as any).__SPC_PHASE4_STRICT = false;
		const legacy = normaliseSpcSettings({
			emergingDirectionGrace: true,
			collapseClusterRules: true,
		});
		expect((legacy as any).grace?.emergingEnabled).toBe(true);
		expect((legacy as any).rules?.collapseWeakerClusterRules).toBe(true);
		// trendSideGatingEnabled is no longer supported/mapped
		expect((legacy as any).trendSideGatingEnabled).toBeUndefined();
		delete (globalThis as any).__SPC_PHASE4_STRICT;
	});

	test("buildSpc accepts grouped V2 settings producing result (smoke)", () => {
		const res = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: baseData,
			settings: { grace: { emergingEnabled: true } },
		});
		expect(res.rows.length).toBe(baseData.length);
		// Variation icon may remain none if no special cause; just ensure property exists.
		const icon = res.rows[res.rows.length - 1].variationIcon;
		expect(Object.values(VariationIcon)).toContain(icon);
	});
});
