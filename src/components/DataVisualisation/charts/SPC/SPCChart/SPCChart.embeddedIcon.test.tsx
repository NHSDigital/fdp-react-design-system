import { describe, it, expect } from "vitest";
import React from "react";
// Adjusted relative path (one level too shallow previously) to locate shared test SSR renderer
import { renderSSR } from "../../../../../test-utils/renderSSR";
import { SPCChart } from "./SPCChart";
import {
	ImprovementDirection,
	VariationIcon as EngineVariationIcon,
} from "./logic/spc";
import { SPCVariationIcon } from "../SPCIcons/SPCIcon";
import { Direction } from "../SPCIcons/SPCConstants";

type SPCDatum = { x: Date | string | number; y: number };

const makeBase = (len = 18, base = 50): SPCDatum[] => {
	const start = Date.now() - (len - 1) * 24 * 3600 * 1000;
	return Array.from({ length: len }, (_, i) => ({
		x: new Date(start + i * 24 * 3600 * 1000),
		y: base + Math.round(Math.sin(i / 3) * 2),
	}));
};

describe("SPC embedded icon rendering (deterministic unit)", () => {
	it("renders Improvement (H) with blue colour", () => {
		const { container } = renderSSR(
			<div>
				<SPCVariationIcon
					data={{
						variationIcon: EngineVariationIcon.Improvement,
						trend: Direction.Higher,
					}}
					size={80}
					letterMode="direction"
				/>
			</div>
		);
		const svg = container.querySelector("svg");
		expect(svg).toBeTruthy();
		const ring = svg!.querySelector('circle[stroke]:not([stroke="none"])');
		expect(ring).toBeTruthy();
		expect(ring!.getAttribute("stroke")).toBe("#00B0F0");
		expect(svg!.textContent).toContain("H");
	});

	it("renders Concern (L) with orange colour", () => {
		const { container } = renderSSR(
			<div>
				<SPCVariationIcon
					data={{
						variationIcon: EngineVariationIcon.Concern,
						trend: Direction.Lower,
					}}
					size={80}
					letterMode="direction"
				/>
			</div>
		);
		const svg = container.querySelector("svg");
		expect(svg).toBeTruthy();
		const ring = svg!.querySelector('circle[stroke]:not([stroke="none"])');
		expect(ring).toBeTruthy();
		expect(ring!.getAttribute("stroke")).toBe("#E46C0A");
		expect(svg!.textContent).toContain("L");
	});

	it("renders No-judgement (purple) when signals conflict", () => {
		const { container } = renderSSR(
			<div>
				<SPCVariationIcon
					data={{
						variationIcon: EngineVariationIcon.None,
						trend: Direction.Lower,
					}}
					size={80}
				/>
			</div>
		);
		const svg = container.querySelector("svg");
		expect(svg).toBeTruthy();
		const path = svg!.querySelector("path[fill]");
		expect(path).toBeTruthy();
		expect(path!.getAttribute("fill")).toBe("#490092");
		const txt = svg!.textContent || "";
		expect(txt).not.toContain("H");
		expect(txt).not.toContain("L");
	});

	it("renders Common cause (grey) with no letter", () => {
		const { container } = renderSSR(
			<div>
				<SPCVariationIcon
					data={{
						variationIcon: EngineVariationIcon.Neither,
						trend: Direction.Higher,
					}}
					size={80}
				/>
			</div>
		);
		const svg = container.querySelector("svg");
		expect(svg).toBeTruthy();
		const ring = svg!.querySelector('circle[stroke]:not([stroke="none"])');
		expect(ring).toBeTruthy();
		expect(ring!.getAttribute("stroke")).toBe("#A6A6A6");
		const txt = svg!.textContent || "";
		expect(txt).not.toContain("H");
		expect(txt).not.toContain("L");
	});

	it("renders No-judgement (purple) for neutral metric with special cause point", () => {
		// Craft data with a single special-cause (simulate high point) while improvement direction neutral
		// Simplest: feed chart and rely on engine classification; use an obviously out-of-control high value among stable series.
		const base = makeBase(18, 50);
		base[base.length - 1] = { ...base[base.length - 1], y: base[base.length - 1].y + 25 }; // spike
		const { container } = renderSSR(
			<SPCChart
				data={base.map(d => ({ x: d.x, y: d.y }))}
				metricImprovement={ImprovementDirection.Neither}
				showEmbeddedIcon
				showPoints={false}
				enableRules
			/>
		);
		const wrapper = container.querySelector('.fdp-spc-chart__embedded-icon');
		expect(wrapper).toBeTruthy();
		const svg = wrapper!.querySelector('svg');
		expect(svg).toBeTruthy();
		// Purple fill path present (variation icon internal shape)
		const path = svg!.querySelector('path[fill="#490092"]');
		expect(path).toBeTruthy();
	});

	it("orients neutral special-cause purple arrow downward for low-side signal", () => {
		// Create descending trend triggering low-side special cause (simulate shift/trend below mean)
		const start = Date.now();
		const data = Array.from({ length: 18 }, (_, i) => ({
			x: new Date(start + i * 86400000),
			y: 50 - i - (i > 10 ? 5 : 0), // tail drops further to create low signals
		}));
		const { container } = renderSSR(
			<SPCChart
				data={data}
				metricImprovement={ImprovementDirection.Neither}
				showEmbeddedIcon
				showPoints={false}
				enableRules
			/>
		);
		const wrapper = container.querySelector('.fdp-spc-chart__embedded-icon');
		expect(wrapper).toBeTruthy();
		// Heuristic: downward orientation should include data-trend="lower"
		const trendAttr = wrapper!.getAttribute('data-trend');
		expect(trendAttr).toBe('lower');
	});
});
