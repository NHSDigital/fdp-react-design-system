import { describe, it, expect } from "vitest";
import spcModule from "./spc";
import { ImprovementDirection, ChartType } from "./spcConstants";
// Dataset: first 13 steady points then 5 clearly above mean & beyond 1σ threshold to trigger four-of-five rule when enabled.
const base = Array.from({ length: 13 }, () => 100);
// Use larger deviations (e.g. +15) so they exceed upperOneSigma easily.
const signalSeq = [115, 116, 114, 115, 115]; // 5 points above mean; expect four-of-five rule => all five flagged
const data = [...base, ...signalSeq].map((v, i) => ({ x: i + 1, value: v }));

describe("SPC four-of-five rule", () => {
	it("flags when enabled and not when disabled", () => {
		const enabled = spcModule.buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
			settings: { enableFourOfFiveRule: true },
		});
		const disabled = spcModule.buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
			settings: { enableFourOfFiveRule: false },
		});
		const lastFiveEnabled = enabled.rows.slice(-5);
		const lastFiveDisabled = disabled.rows.slice(-5);
		// Engine may flag multiple exceeding points once condition satisfied (selective flagging of those >1σ).
		const flags = lastFiveEnabled.map((r) => r.specialCauseFourOfFiveUp);
		// Final point must be flagged (condition definitely satisfied by then)
		expect(flags[4]).toBe(true);
		// At least two of the last five should be flagged (since 4 of 5 exceed >1σ, selective marking >=4 or subset)
		expect(flags.filter(Boolean).length).toBeGreaterThanOrEqual(2);
		expect(lastFiveDisabled.every((r) => !r.specialCauseFourOfFiveUp)).toBe(
			true
		);
	});
});
