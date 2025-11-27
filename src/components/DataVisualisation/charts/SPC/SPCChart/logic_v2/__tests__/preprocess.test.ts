import { describe, it, expect } from "vitest";
import { toTimeBetweenEvents, toCountBetweenEvents } from "../preprocess";

describe("logic_v2 preprocess helpers", () => {
	it("toTimeBetweenEvents computes deltas in ms by default", () => {
		const events = [
			{ x: "2025-09-01T00:00:00Z" },
			{ x: "2025-09-02T00:00:00Z" },
			{ x: "2025-09-05T00:00:00Z" },
		];
		const res = toTimeBetweenEvents(events);
		expect(res).toHaveLength(2);
		expect(res[0].value).toBe(24 * 60 * 60 * 1000);
		expect(res[1].value).toBe(3 * 24 * 60 * 60 * 1000);
	});

	it("toCountBetweenEvents yields distance since last hit", () => {
		const rows = [
			{ x: 1, occurred: false },
			{ x: 2, occurred: true },
			{ x: 3, occurred: false },
			{ x: 4, occurred: false },
			{ x: 5, occurred: 1 },
		];
		const res = toCountBetweenEvents(rows);
		expect(res).toEqual([
			{ x: 2, value: 2 },
			{ x: 5, value: 3 },
		]);
	});
});
