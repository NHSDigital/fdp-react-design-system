import type { Meta, StoryObj } from "@storybook/react";
import { SPCChart, type SPCDatum, ImprovementDirection, SequenceTransition, TrendVisualMode } from "./SPCChart";
import { ruleGlossary } from "./descriptors";
import React from "react";
import { seedPRNG } from "../../../stories/utils/deterministic";
import { ChartContainer } from "../../ChartContainer.tsx";
// Use top-level component barrel for Heading/Table/List (navigate up to components root)
import { Heading, Table, List } from "../../../../";
import { ChartType } from './types';

const meta: Meta<typeof SPCChart> = {
	title: "Data Visualisation/SPC/v1/Individuals",
	component: SPCChart,
	argTypes: {
		trendVisualMode: {
			control: { type: 'select' },
			options: [TrendVisualMode.Ungated, TrendVisualMode.Gated],
			description: 'Visual-only trend colouring. Ungated colours early monotonic trends by direction even before crossing the mean; Gated keeps them neutral purple until favourable side.',
			defaultValue: TrendVisualMode.Ungated,
		},
		sequenceTransition: {
			control: { type: 'select' },
			options: [SequenceTransition.Slope, SequenceTransition.Neutral, SequenceTransition.Extend],
			description: 'Strategy for joining adjacent coloured gradient sequences (slope | neutral | extend).',
			defaultValue: SequenceTransition.Slope,
		},
		showSignalsInspector: { control: 'boolean', description: 'Show a minimal Signals Inspector panel under the chart.', defaultValue: false },
		showTrendStartMarkers: { control: 'boolean', description: 'Show hollow marker at trend start (when run reaches N).', defaultValue: false },
		showFirstFavourableCrossMarkers: { control: 'boolean', description: 'Show solid marker at first favourable-side inclusion in the trend window.', defaultValue: false },
		showTrendBridgeOverlay: { control: 'boolean', description: 'Draw dashed bridge from trend start to first favourable-side inclusion.', defaultValue: false },
	},
	parameters: {
		docs: {
			description: {
					component:
						"Individuals (I) Shewhart chart. Computes mean, ±1σ/±2σ/±3σ control limits, and detects special-cause rules. Below the minimum points threshold (default 13), limits are suppressed and variation icons are suppressed; see docs/spc-thresholds.md.",
			},
		},
	},
};
export default meta;
type Story = StoryObj<typeof SPCChart>;

const makeData = (): SPCDatum[] => {
	const rand = seedPRNG(20250101);
	const points: SPCDatum[] = [];
	for (let i = 0; i < 30; i++) {
		const base = i < 18 ? 50 : 58; // engineered shift
		const noise = (rand() - 0.5) * 6;
		points.push({ x: i + 1, y: Math.round(base + noise) });
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
	render: (args) => {
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
					sequenceTransition={SequenceTransition.Slope}
					trendVisualMode={args.trendVisualMode as TrendVisualMode}
					showSignalsInspector={args.showSignalsInspector as boolean}
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
	render: (args) => {
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
					chartType={ChartType.XmR}
					metricImprovement={ImprovementDirection.Up}
					announceFocus
					gradientSequences={true}
					sequenceTransition={SequenceTransition.Slope}
					trendVisualMode={args.trendVisualMode as TrendVisualMode}
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

export const InspectorWithOverlays: Story = {
	parameters: {
		docs: {
			description: {
				story:
					`Signals Inspector with trend overlays. Demonstrates UI-only overlays (trend start, first favourable cross, bridge) and the inspector panel that follows keyboard focus.`,
			},
		},
		metricContext: { improvement: 'up' },
	},
	render: (args) => {
		const data = React.useMemo(() => makeData(), []);
		// Create a mild upward trend to ensure trend rule fires and overlays appear
		const mutated = data.map((d, i) => ({ ...d, y: d.y + (i > 12 ? i - 12 : 0) }));
			const [lastFocus, setLastFocus] = React.useState<string>("-");
		return (
			<ChartContainer
				title="SPC with Signals Inspector & Trend Overlays"
					description={`Use arrow keys or the inspector buttons to move focus. Last focus: ${lastFocus}`}
				source="Synthetic data"
			>
				<SPCChart
					data={mutated}
					chartType={ChartType.XmR}
					metricImprovement={ImprovementDirection.Up}
					announceFocus
					gradientSequences
					sequenceTransition={SequenceTransition.Slope}
					trendVisualMode={args.trendVisualMode as TrendVisualMode}
					showSignalsInspector
					showTrendStartMarkers
					showFirstFavourableCrossMarkers
					showTrendBridgeOverlay
						onSignalFocus={(info) => setLastFocus(`#${info.index + 1} (${info.y}${typeof info.x === 'number' ? '' : ''})`)}
					unit="%"
					narrationContext={{
						measureName: 'Process metric',
						datasetContext: 'Engineered trend sequence',
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
	render: (args) => {
		return (
			<ChartContainer
				title="SPC (Down is better)"
				description="Variation icons invert when improvement direction is Down (deliberately not suppressing isolated favourable points)"
				source="Synthetic data"
			>
				<SPCChart
					data={data}
					chartType={ChartType.XmR}
					// settings placeholder (no isolated favourable suppression in deterministic demo)
					metricImprovement={ImprovementDirection.Down}
					gradientSequences={true}
					sequenceTransition={SequenceTransition.Slope}
					trendVisualMode={args.trendVisualMode as TrendVisualMode}
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
	render: (args) => {
		return (
			<ChartContainer
				title="SPC (Up is better)"
				description="Variation icons invert when improvement direction is Up (deliberately not suppressing isolated favourable points)"
				source="Synthetic data"
			>
				<SPCChart
					data={data}
					chartType={ChartType.XmR}
					// settings placeholder (no isolated favourable suppression in deterministic demo)
					metricImprovement={ImprovementDirection.Up}
					unit="%"
					announceFocus
					gradientSequences={true}
					sequenceTransition={SequenceTransition.Slope}
					trendVisualMode={args.trendVisualMode as TrendVisualMode}
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
function makeRareEventGaps(len: number, base: number, volatility: number, seed = 98765): SPCDatum[] {
	const rand = seedPRNG(seed);
	return Array.from({ length: len }).map((_, i) => {
		const noise = (rand() - 0.5) * volatility;
		const gap = Math.max(1, Math.round(base + noise));
		return { x: i + 1, y: gap };
	});
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
	render: (args) => {
		const data = React.useMemo(() => makeRareEventGaps(20, 5, 3, 34567), []); // deterministic
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
					chartType={ChartType.T}
					metricImprovement={ImprovementDirection.Up}
					announceFocus
					gradientSequences={true}
					sequenceTransition={SequenceTransition.Slope}
					trendVisualMode={args.trendVisualMode as TrendVisualMode}
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
	render: (args) => {
		const data = React.useMemo(() => makeRareEventGaps(20, 12, 5, 45678), []); // deterministic
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
					chartType={ChartType.G}
					metricImprovement={ImprovementDirection.Up}
					announceFocus
					gradientSequences={true}
					sequenceTransition={SequenceTransition.Slope}
					trendVisualMode={args.trendVisualMode as TrendVisualMode}
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
		render: (args) => {
			const rand = seedPRNG(112233);
			const baseSeq: SPCDatum[] = Array.from({ length: 20 }, (_, i) => ({ x: i + 1, y: 50 + Math.sin(i / 2) * 3 + (rand() - 0.5) * 2 }));
			const passData = baseSeq.map(d => ({ x: d.x as any, y: d.y + 20 }));
			const passTargets = passData.map(() => 60); // target well below raised band -> pass
			const failData = baseSeq.map(d => ({ x: d.x as any, y: d.y - 20 }));
			const failTargets = failData.map(() => 60); // band below target -> fail
			const uncertainData = baseSeq.map(d => ({ x: d.x as any, y: d.y }));
			// Use target at approximate mean so band straddles it -> assuranceIcon None (uncertain)
			const uncertainTargets = uncertainData.map(() => 50);
			return (
				<div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
					<ChartContainer title="Capability: Pass" description="Process consistently above target" source="Synthetic data">
						<SPCChart data={passData} targets={passTargets} chartType={ChartType.XmR} metricImprovement={ImprovementDirection.Up} announceFocus gradientSequences trendVisualMode={args.trendVisualMode as TrendVisualMode} narrationContext={{ measureName: 'Capability metric', datasetContext: 'Process band entirely favourable', additionalNote: 'Pass scenario' }} />
						<SPCChart data={passData} targets={passTargets} chartType={ChartType.XmR} metricImprovement={ImprovementDirection.Up} announceFocus gradientSequences sequenceTransition={SequenceTransition.Slope} trendVisualMode={args.trendVisualMode as TrendVisualMode} narrationContext={{ measureName: 'Capability metric (slope join)', datasetContext: 'Process band entirely favourable', additionalNote: 'Pass scenario slope' }} />
					</ChartContainer>
					<ChartContainer title="Capability: Fail" description="Process consistently below target" source="Synthetic data">
						<SPCChart data={failData} targets={failTargets} chartType={ChartType.XmR} metricImprovement={ImprovementDirection.Up} announceFocus gradientSequences trendVisualMode={args.trendVisualMode as TrendVisualMode} narrationContext={{ measureName: 'Capability metric', datasetContext: 'Process band entirely unfavourable', additionalNote: 'Fail scenario' }} />
						<SPCChart data={failData} targets={failTargets} chartType={ChartType.XmR} metricImprovement={ImprovementDirection.Up} announceFocus gradientSequences sequenceTransition={SequenceTransition.Slope} trendVisualMode={args.trendVisualMode as TrendVisualMode} narrationContext={{ measureName: 'Capability metric (slope join)', datasetContext: 'Process band entirely unfavourable', additionalNote: 'Fail scenario slope' }} />
					</ChartContainer>
					<ChartContainer title="Capability: Uncertain" description="Process band overlaps target (no assurance icon)" source="Synthetic data">
						<SPCChart data={uncertainData} targets={uncertainTargets} chartType={ChartType.XmR} metricImprovement={ImprovementDirection.Up} announceFocus gradientSequences trendVisualMode={args.trendVisualMode as TrendVisualMode} narrationContext={{ measureName: 'Capability metric', datasetContext: 'Process band overlaps target', additionalNote: 'Uncertain scenario' }} />
						<SPCChart data={uncertainData} targets={uncertainTargets} chartType={ChartType.XmR} metricImprovement={ImprovementDirection.Up} announceFocus gradientSequences sequenceTransition={SequenceTransition.Slope} trendVisualMode={args.trendVisualMode as TrendVisualMode} narrationContext={{ measureName: 'Capability metric (slope join)', datasetContext: 'Process band overlaps target', additionalNote: 'Uncertain scenario slope' }} />
					</ChartContainer>
				</div>
			);
		},
};

// New story: Embedded summary icons (variation and assurance) side-by-side examples
export const EmbeddedSummaryIcons: Story = {
	parameters: { docs: { description: { story: 'Demonstrates embedded variation and assurance icons rendered together: Pass, Fail and (no icon) Uncertain scenarios.' } }, metricContext: { improvement: 'up' } },
	render: (args) => {
		const randIcons = seedPRNG(998877);
		const baseSeq: SPCDatum[] = Array.from({ length: 18 }, (_, i) => ({ x: i + 1, y: 40 + Math.sin(i / 2) * 2 + (randIcons() - 0.5) * 1.5 }));
		const passData = baseSeq.map(d => ({ x: d.x as any, y: d.y + 18 }));
		const passTargets = passData.map(() => 55);
		const failData = baseSeq.map(d => ({ x: d.x as any, y: d.y - 18 }));
		const failTargets = failData.map(() => 55);
		const uncertainData = baseSeq.map(d => ({ x: d.x as any, y: d.y }));
		// Target at approximate mean ensures band spans the target -> assuranceIcon None
		const uncertainTargets = uncertainData.map(() => 40);
		return (
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(360px,1fr))', gap: 24 }}>
				<ChartContainer title="Embedded: Pass" description="Variation and assurance pass" source="Synthetic">
					<SPCChart data={passData} targets={passTargets} metricImprovement={ImprovementDirection.Up} showEmbeddedIcon trendVisualMode={args.trendVisualMode as TrendVisualMode} />
					<SPCChart data={passData} targets={passTargets} metricImprovement={ImprovementDirection.Up} showEmbeddedIcon sequenceTransition={SequenceTransition.Slope} trendVisualMode={args.trendVisualMode as TrendVisualMode} />
				</ChartContainer>
				<ChartContainer title="Embedded: Fail" description="Variation and assurance fail" source="Synthetic">
					<SPCChart data={failData} targets={failTargets} metricImprovement={ImprovementDirection.Up} showEmbeddedIcon trendVisualMode={args.trendVisualMode as TrendVisualMode} />
					<SPCChart data={failData} targets={failTargets} metricImprovement={ImprovementDirection.Up} showEmbeddedIcon sequenceTransition={SequenceTransition.Slope} trendVisualMode={args.trendVisualMode as TrendVisualMode} />
				</ChartContainer>
				<ChartContainer title="Embedded: Uncertain" description="No assurance icon (band overlaps target)" source="Synthetic">
					<SPCChart data={uncertainData} targets={uncertainTargets} metricImprovement={ImprovementDirection.Up} showEmbeddedIcon trendVisualMode={args.trendVisualMode as TrendVisualMode} />
					<SPCChart data={uncertainData} targets={uncertainTargets} metricImprovement={ImprovementDirection.Up} showEmbeddedIcon sequenceTransition={SequenceTransition.Slope} trendVisualMode={args.trendVisualMode as TrendVisualMode} />
				</ChartContainer>
			</div>
		);
	}
};

// Governance-focused preset: Gated visuals by default and embedded icons for assurance clarity
export const GovernanceAssurancePreset: Story = {
	args: { trendVisualMode: TrendVisualMode.Gated },
	parameters: {
		docs: {
			description: {
				story:
					'Governance preset with gated visuals and embedded variation+assurance icons. Use for board packs to keep early trend points neutral until favourable side is established.'
			}
		},
		metricContext: { improvement: 'up' }
	},
	render: (args) => {
		const randIcons = seedPRNG(123321);
		const baseSeq: SPCDatum[] = Array.from({ length: 18 }, (_, i) => ({ x: i + 1, y: 45 + Math.sin(i / 2) * 2 + (randIcons() - 0.5) * 1.5 }));
		const passData = baseSeq.map(d => ({ x: d.x as any, y: d.y + 18 }));
		const passTargets = passData.map(() => 55);
		const failData = baseSeq.map(d => ({ x: d.x as any, y: d.y - 18 }));
		const failTargets = failData.map(() => 55);
		const uncertainData = baseSeq.map(d => ({ x: d.x as any, y: d.y }));
		const uncertainTargets = uncertainData.map(() => 45);
		return (
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(360px,1fr))', gap: 24 }}>
				<ChartContainer title="Governance: Pass" description="Band favourable vs target" source="Synthetic">
					<SPCChart data={passData} targets={passTargets} metricImprovement={ImprovementDirection.Up} showEmbeddedIcon trendVisualMode={args.trendVisualMode as TrendVisualMode} />
				</ChartContainer>
				<ChartContainer title="Governance: Fail" description="Band unfavourable vs target" source="Synthetic">
					<SPCChart data={failData} targets={failTargets} metricImprovement={ImprovementDirection.Up} showEmbeddedIcon trendVisualMode={args.trendVisualMode as TrendVisualMode} />
				</ChartContainer>
				<ChartContainer title="Governance: Uncertain" description="Band overlaps target" source="Synthetic">
					<SPCChart data={uncertainData} targets={uncertainTargets} metricImprovement={ImprovementDirection.Up} showEmbeddedIcon trendVisualMode={args.trendVisualMode as TrendVisualMode} />
				</ChartContainer>
			</div>
		);
	}
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
					chartType={ChartType.XmR}
					metricImprovement={ImprovementDirection.Up}
					gradientSequences
					sequenceTransition={SequenceTransition.Slope}
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

export const TrendOverlays: Story = {
	parameters: {
		docs: {
			description: {
				story: `Trend overlays (UI-only): shows optional markers and a dashed bridge computed from engine rows without changing classification.
- Start marker (hollow): first index where the monotonic run reaches N.
- First favourable-side inclusion (solid): first point in the run on the favourable side of mean relative to metricImprovement.
- Bridge: dashed segment connecting start to first favourable point.`
			}
		},
		metricContext: { improvement: 'up' }
	},
	render: (args) => {
		const data = React.useMemo(() => makeData(), []);
		// Create a gentle upward trend in the back half to ensure a monotonic window
		const trended = data.map((d) => ({ ...d }));
		for (let i=15;i<trended.length;i++) trended[i].y += (i-14) * 0.6;
		return (
			<ChartContainer title="SPC with Trend Overlays" description="UI-only overlays; classification remains side-gated" source="Synthetic data">
				<SPCChart
					data={trended}
					chartType={ChartType.XmR}
					metricImprovement={ImprovementDirection.Up}
					gradientSequences
					trendVisualMode={args.trendVisualMode as TrendVisualMode}
					sequenceTransition={SequenceTransition.Slope}
					showTrendStartMarkers={args.showTrendStartMarkers as boolean}
					showFirstFavourableCrossMarkers={args.showFirstFavourableCrossMarkers as boolean}
					showTrendBridgeOverlay={args.showTrendBridgeOverlay as boolean}
					narrationContext={{ measureName: 'Process metric (overlays demo)' }}
				/>
			</ChartContainer>
		);
	}
};

// Governance-focused preset with Signals Inspector enabled and gated visuals
export const GovernanceSignalsPreset: Story = {
	args: { trendVisualMode: TrendVisualMode.Gated },
	parameters: {
		docs: {
			description: {
				story:
					'Governance preset with gated trend visuals and the Signals Inspector enabled for transparency. Suitable for board reporting where early trend points remain neutral until favourable-side is established; inspector exposes value, variation, assurance and rule narration.',
			},
		},
		metricContext: { improvement: 'up' },
	},
	render: (args) => {
		const data = React.useMemo(() => makeData(), []);
		return (
			<ChartContainer
				title="Governance preset (Signals Inspector)"
				description="Gated visuals by default; Inspector mirrors keyboard focus for auditable rule context."
				source="Synthetic data"
			>
				<SPCChart
					data={data}
					chartType={ChartType.XmR}
					metricImprovement={ImprovementDirection.Up}
					trendVisualMode={args.trendVisualMode as TrendVisualMode}
					showSignalsInspector
					announceFocus
					unit="%"
					gradientSequences
					sequenceTransition={SequenceTransition.Slope}
					narrationContext={{
						measureName: 'Governance metric',
						datasetContext: 'Deterministic sample (30 points)',
						timeframe: 'Last 30 days',
					}}
				/>
			</ChartContainer>
		);
	},
};
