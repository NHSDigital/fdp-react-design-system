import type { Meta, StoryObj } from "@storybook/react";
import { SPCChart, type SPCDatum, ImprovementDirection } from "./SPCChart";
import {
	ruleGlossary,
	variationLabel,
	assuranceLabel,
	zoneLabel,
} from "./logic/spcDescriptors";
import React from "react";
import { ChartContainer } from "../..";
import { Heading, Table } from "../../..";
import { List } from "../../../List/List";

const meta: Meta<typeof SPCChart> = {
	title: "Data Visualisation/SPC/Individuals",
	component: SPCChart,
	parameters: {
		docs: {
			description: {
				component:
					"Individuals (I) Shewhart chart. Computes mean, ±1σ/±2σ/±3σ control limits, and detects special-cause rules.",
			},
		},
	},
};
export default meta;
type Story = StoryObj<typeof SPCChart>;

const makeData = (): SPCDatum[] => {
	const points: SPCDatum[] = [];
	const start = Date.now() - 29 * 24 * 3600 * 1000;
	for (let i = 0; i < 30; i++) {
		const base = i < 18 ? 50 : 58; // shift
		const noise = (Math.random() - 0.5) * 6;
		points.push({
			x: new Date(start + i * 24 * 3600 * 1000),
			y: Math.round(base + noise),
		});
	}
	points[24].y = points[24].y + 20; // outlier
	return points;
};

export const Basic: Story = {
	parameters: {
		docs: {
			description: {
				story: `SPC Individuals (XmR) Chart\n\nShows individual measurements over time with:\n- Centre line (mean) and 1σ / 2σ / 3σ control limits after ≥13 valid points\n- Special cause rules: single beyond limit, 2 of 3 beyond 2σ, 4 of 5 beyond 1σ, shift, trend\n- Icons (★ improvement / ! concern) reflect variation classification relative to metricImprovement\n- Tooltips + keyboard navigation (arrow keys, Home/End) give value, variation, rule summary\n- Live region (announceFocus) narrates point, variation and special cause\n\nInterpretation: Points outside the outer limits or qualifying rule patterns indicate special cause variation.`,
			},
		},
		metricContext: { improvement: "neither" },
	},
	render: () => {
		const data = React.useMemo(() => makeData(), []);
		return (
			<ChartContainer
				title="SPC Individuals Chart"
				description="With rule detection (icons may be suppressed if too few points)"
				source="Synthetic data"
			>
				<SPCChart
					data={data}
					announceFocus
					unit="%"
					gradientSequences
					narrationContext={{
						measureName: "Daily metric",
						datasetContext: "Synthetic 30-day sample",
						timeframe: "Last 30 days",
					}}
				/>
			</ChartContainer>
		);
	},
};

export const Signals: Story = {
	parameters: {
		docs: {
			description: {
				story: `Individuals (XmR) with engineered signals. Demonstrates:\n- Sustained shift (manually raised segment)\n- High outlier forcing single-point special cause\n- Combined rule output (icons + point colouring)\nUse to explore multiple rule firings in one sequence.`,
			},
		},
		metricContext: { improvement: "up" },
	},
	render: () => {
		const data = React.useMemo(() => makeData(), []);
		// Introduce several special-cause patterns: sustained shift + high outlier
		const mutated = data.map((d) => ({ ...d }));
		for (let i = 10; i < 16; i++) mutated[i].y += 10; // shift
		mutated[25].y += 18; // high outlier
		return (
			<ChartContainer
				title="SPC"
				description="Special-cause rules & icons"
				source="Synthetic data"
			>
				<SPCChart
					data={mutated}
					chartType="XmR"
					metricImprovement={ImprovementDirection.Up}
					announceFocus
					gradientSequences={true}
					unit="%"
					narrationContext={{
						measureName: "Process metric",
						datasetContext: "Engineered signal sequence",
						additionalNote: "Injected shift and outlier for demo",
					}}
				/>
			</ChartContainer>
		);
	},
};

// Shared baseline dataset for direction comparison stories (stable across both).
const sharedDirectionData: SPCDatum[] = makeData();

const data = sharedDirectionData.map((d) => ({ ...d }));
// Create decreasing trend
data.forEach((d, i) => {
	if (i > 12) d.y -= i - 12;
});

export const DownIsBetter: Story = {
	parameters: {
		docs: {
			description: {
				story: `Individuals (XmR) where lower values are better (metricImprovement=Down).\nShows a decreasing trend and how variation / assurance semantics invert. Use when declines indicate improvement.`,
			},
		},
		metricContext: { improvement: "down" },
	},
	render: () => {
		return (
			<ChartContainer
				title="SPC (Down is better)"
				description="Variation icons invert when improvement direction is Down (deliberately not suppressing isolated favourable points)"
				source="Synthetic data"
			>
				<SPCChart
					data={data}
					chartType="XmR"
					settings={{
						suppressIsolatedFavourablePoint: true,
					}}
					metricImprovement={ImprovementDirection.Down}
					gradientSequences={true}
					unit="%"
					announceFocus
					narrationContext={{
						measureName: "Process metric",
						datasetContext: "Synthetic direction example",
						timeframe: "30 points",
					}}
				/>
			</ChartContainer>
		);
	},
};

export const UpIsBetter: Story = {
	parameters: {
		docs: {
			description: {
				story: `Individuals (XmR) where higher values are better (metricImprovement=Up).\nShows an increasing trend and how variation / assurance semantics invert. Use when increases indicate improvement.`,
			},
		},
		metricContext: { improvement: "up" },
	},
	render: () => {
		return (
			<ChartContainer
				title="SPC (Up is better)"
				description="Variation icons invert when improvement direction is Up (deliberately not suppressing isolated favourable points)"
				source="Synthetic data"
			>
				<SPCChart
					data={data}
					chartType="XmR"
					settings={{
						suppressIsolatedFavourablePoint: true,
					}}
					metricImprovement={ImprovementDirection.Up}
					unit="%"
					announceFocus
					gradientSequences={true}
					narrationContext={{
						measureName: "Process metric",
						datasetContext: "Synthetic direction example",
						timeframe: "30 points",
					}}
				/>
			</ChartContainer>
		);
	},
};

// Rare event examples (T and G charts)
function makeRareEventGaps(
	len: number,
	base: number,
	volatility: number
): SPCDatum[] {
	const pts: SPCDatum[] = [];
	const start = Date.now() - (len - 1) * 24 * 3600 * 1000;
	for (let i = 0; i < len; i++) {
		const noise = (Math.random() - 0.5) * volatility;
		const gap = Math.max(1, Math.round(base + noise));
		pts.push({ x: new Date(start + i * 24 * 3600 * 1000), y: gap });
	}
	return pts;
}

export const TChartRareEvents: Story = {
	parameters: {
		docs: {
			description: {
				story: `T Chart (time-between rare events).\nApplies y = t^0.2777 transform → XmR → back-transform limits.\nHighlights extended gap (potential improvement if higher=better) and very short gap (concern). Lower limit suppressed if ≤0 post back-transform.`,
			},
		},
		metricContext: { improvement: "up" },
	},
	render: () => {
		const data = React.useMemo(() => makeRareEventGaps(20, 5, 3), []); // days between events
		// Introduce an unusually long gap + short gap
		const mutated = data.map((d) => ({ ...d }));
		mutated[8].y += 10; // long gap (improvement if UP)
		mutated[15].y = 1; // very short gap (concern)
		return (
			<ChartContainer
				title="SPC T Chart (Time between events)"
				description="Uses T chart logic for time between rare events"
				source="Synthetic data"
			>
				<SPCChart
					data={mutated}
					chartType="T"
					metricImprovement={ImprovementDirection.Up}
					announceFocus
					gradientSequences={true}
					narrationContext={{
						measureName: "Days between events",
						datasetContext: "Rare event monitoring",
						timeframe: "20 observations",
					}}
				/>
			</ChartContainer>
		);
	},
};

export const GChartRareEvents: Story = {
	parameters: {
		docs: {
			description: {
				story: `G Chart (count-between rare events).\nGeometric distribution–derived probability limits. Demonstrates a long count (potential improvement) and a very short count (concern). LCL clipped at 0. Use for opportunities/units between events.`,
			},
		},
		metricContext: { improvement: "up" },
	},
	render: () => {
		const data = React.useMemo(() => makeRareEventGaps(20, 12, 5), []); // count between events
		const mutated = data.map((d) => ({ ...d }));
		mutated[5].y += 15; // high count between events
		mutated[12].y = 1; // low count between events
		return (
			<ChartContainer
				title="SPC G Chart (Count between events)"
				description="Uses G chart logic for count between rare events"
				source="Synthetic data"
			>
				<SPCChart
					data={mutated}
					chartType="G"
					metricImprovement={ImprovementDirection.Up}
					announceFocus
					gradientSequences={true}
					narrationContext={{
						measureName: "Count between events",
						datasetContext: "Rare event monitoring",
						timeframe: "20 observations",
					}}
				/>
			</ChartContainer>
		);
	},
};

// Assurance capability examples (Pass / Fail / Uncertain)
export const AssuranceCapability: Story = {
	parameters: {
		docs: {
			description: {
				story: `Assurance capability demonstration. Three metrics share similar variation but different relation to target (dashed).\nPass: Entire 3σ process band sits on the good side of target.\nFail: Entire band sits on the bad side.\nUncertain: Band straddles target. Uses capability mode (default) rather than single-point comparison.`,
			},
		},
		metricContext: { improvement: "up" },
	},
	render: () => {
		const baseSeq: SPCDatum[] = Array.from({ length: 20 }, (_, i) => ({
			x: i + 1,
			y: 50 + Math.sin(i / 2) * 3 + (Math.random() - 0.5) * 2,
		}));
		const passData: SPCDatum[] = baseSeq.map((d) => ({
			...d,
			y: d.y + 20,
			target: 60,
		})); // target below band (good since Up)
		const failData: SPCDatum[] = baseSeq.map((d) => ({
			...d,
			y: d.y - 20,
			target: 60,
		})); // band below target (bad for Up)
		const uncertainData: SPCDatum[] = baseSeq.map((d) => ({
			...d,
			target: 60,
		})); // baseline around target
		return (
			<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
				<ChartContainer
					title="Capability: Pass"
					description="Process consistently above target"
					source="Synthetic data"
				>
					<SPCChart
						data={passData}
						chartType="XmR"
						metricImprovement={ImprovementDirection.Up}
						announceFocus
						gradientSequences={true}
						narrationContext={{
							measureName: "Capability metric",
							datasetContext: "Process band entirely favourable",
							additionalNote: "Pass scenario",
						}}
					/>
				</ChartContainer>
				<ChartContainer
					title="Capability: Fail"
					description="Process consistently below target"
					source="Synthetic data"
				>
					<SPCChart
						data={failData}
						chartType="XmR"
						gradientSequences={true}
						metricImprovement={ImprovementDirection.Up}
						announceFocus
						narrationContext={{
							measureName: "Capability metric",
							datasetContext: "Process band entirely unfavourable",
							additionalNote: "Fail scenario",
						}}
					/>
				</ChartContainer>
				<ChartContainer
					title="Capability: Uncertain"
					description="Process band overlaps target"
					source="Synthetic data"
				>
					<SPCChart
						data={uncertainData}
						chartType="XmR"
						gradientSequences={true}
						metricImprovement={ImprovementDirection.Up}
						announceFocus
						narrationContext={{
							measureName: "Capability metric",
							datasetContext: "Process band overlaps target",
							additionalNote: "Uncertain scenario",
						}}
					/>
				</ChartContainer>
			</div>
		);
	},
};

export const RuleGlossary: Story = {
	parameters: {
		docs: {
			description: {
				story: `Glossary of SPC rule identifiers, variation & assurance semantics.

Special cause rules help distinguish common-cause vs assignable variation:
- Single point beyond a control limit (3σ) – indicates a rare event.
- Two of three beyond 2σ (same side) – emerging shift.
- Four of five beyond 1σ (same side) – strengthening shift (optional rule).
- Shift – run of points all on one side of the mean meeting configured length.
- Trend – consecutive increases or decreases meeting configured length.

Variation classification (icons / colours):
Improvement signal: favourable special cause relative to metricImprovement.
Concern signal: unfavourable special cause relative to metricImprovement.
Common cause variation: no special cause signal; system behaving normally.

Assurance (capability mode):
Target met: Entire 3σ process band on favourable side of target.
Target not met: Entire band on unfavourable side.
No label (uncertain): Band straddles target.

Zone bands (for heuristics & some rule logic): Within 1σ, Between 1–2σ, Between 2–3σ, Beyond 3σ.`,
			},
		},
	},
	render: () => {
		const glossaryEntries = Object.entries(ruleGlossary).map(([id, entry]) => ({ id, ...entry }));
		const head = [
			{ text: 'Rule ID' },
			{ text: 'Tooltip Label' },
			{ text: 'Narration Fragment' },
		];
		const rows = glossaryEntries.map(r => [
			{ text: r.id, classes: 'nhsuk-u-font-mono' },
			{ text: r.tooltip },
			{ text: r.narration },
		]);
		return (
			<div style={{ maxWidth: 760 }}>
				<Heading size="m">Special Cause Rules</Heading>
				<Table head={head as any} rows={rows as any} responsive={false} firstCellIsHeader={false} />
				<Heading size="m">Variation & Assurance Helpers</Heading>
				<List>
					<List.Item><strong>variationLabel()</strong> returns one of: Improvement signal / Concern signal / Common cause variation / null</List.Item>
					<List.Item><strong>assuranceLabel()</strong> returns: Target met / Target not met / null</List.Item>
					<List.Item><strong>zoneLabel(mean, sigma, value)</strong> returns the zone classification based on |z|</List.Item>
				</List>
				<p style={{ fontSize: 12, color: "#666" }}>
					These helpers are used by both tooltip and live narration to maintain
					consistent phrasing and reduce duplication.
				</p>
			</div>
		);
	},
};

export const GradientSequences: Story = {
	parameters: {
		docs: {
			description: {
				story: `Gradient sequence backgrounds (experimental).
Adds a subtle vertical fade behind contiguous runs (>1 point) of:
- Concern points (orange)
- Improvement points (blue)
- Common cause points (neutral grey)

Purpose: reinforce sustained behaviour patterns without the harshness of solid bands. Single isolated points are ignored to avoid visual noise.

Behaviour:
- Run detection is recalculated on data / rule changes.
- A run starts when category changes or at first point, and closes when category changes.
- Width extends halfway to neighbouring points (or chart edge) so backgrounds tile seamlessly.
- Opacity tapers (≈0.18→0.08→0.03) to stay recessive under lines/points and limits.

Accessibility: decorative only (aria-hidden). Does not alter live narration or tooltips.

Disable via gradientSequences={false} (default). Useful for storytelling views highlighting sustained shifts or improvement windows.`,
			},
		},
		metricContext: { improvement: 'up' },
	},
	render: () => {
		const base = React.useMemo(() => makeData(), []);
		// Engineer a few runs: improvement cluster, concern cluster, neutral cluster
		const mutated = base.map(d => ({ ...d }));
		// Improvement run (raise values)
		for (let i = 5; i < 10; i++) mutated[i].y += 8;
		// Concern run (lower values)
		for (let i = 15; i < 20; i++) mutated[i].y -= 8;
		return (
			<ChartContainer
				title="SPC with Gradient Sequence Backgrounds"
				description="Contiguous improvement / concern / common-cause runs gain subtle gradient fills"
				source="Synthetic data"
			>
				<SPCChart
					data={mutated}
					chartType="XmR"
					metricImprovement={ImprovementDirection.Up}
					gradientSequences
					announceFocus
					narrationContext={{
						measureName: 'Process metric',
						datasetContext: 'Engineered runs (raised & lowered segments)',
						timeframe: '30 points'
					}}
				/>
			</ChartContainer>
		);
	},
};
