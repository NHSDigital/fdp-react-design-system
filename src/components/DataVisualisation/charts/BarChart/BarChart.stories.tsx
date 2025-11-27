import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
	ChartRoot,
	LineScalesProvider,
	BandScalesProvider,
	Axis,
	GridLines,
	TooltipProvider,
	Legend,
	BarSeriesPrimitive,
	type BarSeries,
	useScaleContext,
} from "../../index";
import { computeContinuousBarChartTotalWidth } from "../../utils/computeContinuousBarWidth";
import { day } from "../../stories/utils/deterministic";
import { useChartContext } from "../../core/ChartRoot";
import { stackSeries, normaliseStack } from "../../utils/stack";
import VisuallyHiddenLiveRegion from "../../primitives/VisuallyHiddenLiveRegion";

const meta: Meta = { title: "Data Visualisation/BarChart" };
export default meta;
type Story = StoryObj;

const parseX = (d: any) => d.x as Date; // retained for time-based stories

// ---------------------------------------------------------------------------
// Deterministic helpers (replace Math.random/Date.now)
// ---------------------------------------------------------------------------
// day helper imported; define simple value helper for categorical bar sets
const val = (base: number) => base; // stable deterministic scalar

export const StackedBars: Story = {
	render: () => {
		const categories = [
			"Alpha",
			"Bravo",
			"Charlie",
			"Delta",
			"Echo",
			"Foxtrot",
			"Golf",
			"Hotel",
			"India",
			"Juliet",
		];
		const raw: BarSeries[] = Array.from({ length: 4 }).map((_, si) => ({
			id: `b${si + 1}`,
			data: categories.map((c, idx) => ({
				x: c,
				y: val(8 + si * 3 + (idx % 3)),
			})),
		}));
		const stacked = stackSeries(raw as any);
		const totals = stacked[0].stacked.map((_, i) =>
			stacked.reduce((sum, s) => sum + (s.stacked[i].y1 - s.stacked[i].y0), 0)
		);
		const yMax = Math.max(...totals);
		const margin = { left: 56, bottom: 48, right: 16, top: 12 };
		const Inner: React.FC = () => {
			const dims = useChartContext();
			const scale = useScaleContext();
			if (!dims || !scale) return null;
			return (
				<svg width={dims.width} height={dims.height} role="img">
					<g transform={`translate(${dims.margin.left},${dims.margin.top})`}>
						<GridLines axis="y" />
						{stacked.map((s, i) => (
							<BarSeriesPrimitive
								key={s.id}
								series={{
									id: s.id,
									data: s.stacked.map((d) => ({ x: d.x, y: d.y1 - d.y0 })),
								}}
								stacked={s.stacked.map((d) => ({ y0: d.y0, y1: d.y1 }))}
								seriesIndex={i}
								seriesCount={1}
								palette="categorical"
								parseX={parseX}
							/>
						))}
						<Axis type="y" />
						<Axis type="x" />
					</g>
				</svg>
			);
		};
		return (
			<div
				style={{
					fontFamily:
						'"Frutiger W01", Frutiger, Arial, "Helvetica Neue", Helvetica, sans-serif',
				}}
			>
				<ChartRoot
					width={720}
					height={320}
					margin={margin}
					ariaLabel="Stacked bar chart (categorical)"
				>
					<BandScalesProvider
						series={
							stacked.map((s) => ({
								data: s.stacked.map((d) => ({ x: d.x, y: d.y1 })),
							})) as any
						}
					>
						<TooltipProvider>
							<Inner />
							<Legend items={stacked.map((s) => ({ id: s.id, label: s.id }))} />
							<VisuallyHiddenLiveRegion />
						</TooltipProvider>
					</BandScalesProvider>
				</ChartRoot>
			</div>
		);
	},
	// name removed (redundant; Storybook infers from export identifier)
	parameters: {
		docs: {
			description: {
				story:
					"Absolute stacked vertical bar chart using stackSeries output with BarSeriesPrimitive stacked prop.",
			},
		},
	},
};

export const StackedBarsPercent: Story = {
	render: () => {
		const categories = [
			"Cat A",
			"Cat B",
			"Cat C",
			"Cat D",
			"Cat E",
			"Cat F",
			"Cat G",
			"Cat H",
			"Cat I",
			"Cat J",
			"Cat K",
			"Cat L",
		];
		const raw: BarSeries[] = Array.from({ length: 3 }).map((_, si) => ({
			id: `pb${si + 1}`,
			data: categories.map((c, idx) => ({
				x: c,
				y: val(6 + si * 4 + (idx % 4)),
			})),
		}));
		const absStack = stackSeries(raw as any);
		const percentStack = normaliseStack(
			absStack.map((s) => ({
				...s,
				stacked: s.stacked.map((d) => ({ ...d })),
			})) as any
		);
		const margin = { left: 56, bottom: 48, right: 16, top: 12 };
		const Inner: React.FC = () => {
			const dims = useChartContext();
			const scale = useScaleContext();
			if (!dims || !scale) return null;
			return (
				<svg width={dims.width} height={dims.height} role="img">
					<g transform={`translate(${dims.margin.left},${dims.margin.top})`}>
						<GridLines axis="y" />
						{percentStack.map((s, i) => (
							<BarSeriesPrimitive
								key={s.id}
								series={{
									id: s.id,
									data: s.stacked.map((d) => ({ x: d.x, y: d.y1 - d.y0 })),
								}}
								stacked={s.stacked.map((d) => ({ y0: d.y0, y1: d.y1 }))}
								seriesIndex={i}
								seriesCount={1}
								palette="categorical"
								parseX={parseX}
							/>
						))}
						<Axis type="y" formatTick={(v: any) => `${Math.round(v * 100)}%`} />
						<Axis type="x" />
					</g>
				</svg>
			);
		};
		return (
			<div
				style={{
					fontFamily:
						'"Frutiger W01", Frutiger, Arial, "Helvetica Neue", Helvetica, sans-serif',
				}}
			>
				<ChartRoot
					width={760}
					height={320}
					margin={margin}
					ariaLabel="100 percent stacked bar chart (categorical)"
				>
					<BandScalesProvider
						series={
							percentStack.map((s) => ({
								data: s.stacked.map((d) => ({ x: d.x, y: d.y1 })),
							})) as any
						}
					>
						<TooltipProvider>
							<Inner />
							<Legend
								items={percentStack.map((s) => ({ id: s.id, label: s.id }))}
							/>
							<VisuallyHiddenLiveRegion />
						</TooltipProvider>
					</BandScalesProvider>
				</ChartRoot>
			</div>
		);
	},
	// name removed (redundant)
	parameters: {
		docs: {
			description: {
				story: "100% stacked vertical bar chart with percent y-axis.",
			},
		},
	},
};

export const StackedBarsToggle: Story = {
	render: () => {
		const categories = [
			"Alpha",
			"Bravo",
			"Charlie",
			"Delta",
			"Echo",
			"Foxtrot",
			"Golf",
			"Hotel",
			"India",
			"Juliet",
		];
		const raw: BarSeries[] = Array.from({ length: 4 }).map((_, si) => ({
			id: `tb${si + 1}`,
			data: categories.map((c, idx) => ({
				x: c,
				y: val(10 + si * 2 + (idx % 5)),
			})),
		}));
		const absStack = React.useMemo(() => stackSeries(raw as any), [raw]);
		const percentStack = React.useMemo(
			() =>
				normaliseStack(
					absStack.map((s) => ({
						...s,
						stacked: s.stacked.map((d) => ({ ...d })),
					})) as any
				),
			[absStack]
		);
		const [mode, setMode] = React.useState<"absolute" | "percent">("absolute");
		const active = mode === "absolute" ? absStack : percentStack;
		const margin = { left: 56, bottom: 48, right: 16, top: 12 };
		const Inner: React.FC = () => {
			const dims = useChartContext();
			const scale = useScaleContext();
			if (!dims || !scale) return null;
			return (
				<svg width={dims.width} height={dims.height} role="img">
					<g transform={`translate(${dims.margin.left},${dims.margin.top})`}>
						<GridLines axis="y" />
						{active.map((s, i) => (
							<BarSeriesPrimitive
								key={s.id}
								series={{
									id: s.id,
									data: s.stacked.map((d) => ({ x: d.x, y: d.y1 - d.y0 })),
								}}
								stacked={s.stacked.map((d) => ({ y0: d.y0, y1: d.y1 }))}
								seriesIndex={i}
								seriesCount={1}
								palette="categorical"
								parseX={parseX}
							/>
						))}
						<Axis
							type="y"
							formatTick={
								mode === "percent"
									? (v: any) => `${Math.round(v * 100)}%`
									: undefined
							}
						/>
						<Axis type="x" />
					</g>
				</svg>
			);
		};
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 8,
					fontFamily:
						'"Frutiger W01", Frutiger, Arial, "Helvetica Neue", Helvetica, sans-serif',
				}}
			>
				<div style={{ display: "flex", gap: 8 }}>
					<button
						type="button"
						onClick={() => setMode("absolute")}
						disabled={mode === "absolute"}
					>
						Absolute
					</button>
					<button
						type="button"
						onClick={() => setMode("percent")}
						disabled={mode === "percent"}
					>
						Percent
					</button>
				</div>
				<ChartRoot
					width={720}
					height={320}
					margin={margin}
					ariaLabel={`Stacked bar chart toggle (${mode})`}
				>
					<BandScalesProvider
						series={
							active.map((s) => ({
								data: s.stacked.map((d) => ({ x: d.x, y: d.y1 })),
							})) as any
						}
					>
						<TooltipProvider>
							<Inner />
							<Legend items={active.map((s) => ({ id: s.id, label: s.id }))} />
							<VisuallyHiddenLiveRegion />
						</TooltipProvider>
					</BandScalesProvider>
				</ChartRoot>
			</div>
		);
	},
	// name removed (redundant)
	parameters: {
		docs: {
			description: {
				story: "Interactive toggle between absolute and percent stacked bars.",
			},
		},
	},
};

export const GenericBars: Story = {
	render: () => {
		const categories = [
			"One",
			"Two",
			"Three",
			"Four",
			"Five",
			"Six",
			"Seven",
			"Eight",
			"Nine",
			"Ten",
			"Eleven",
			"Twelve",
		];
		const series: BarSeries[] = Array.from({ length: 3 }).map((_, si) => ({
			id: `g${si + 1}`,
			data: categories.map((c, idx) => ({
				x: c,
				y: val(7 + si * 3 + (idx % 6)),
			})),
		}));
		const margin = { left: 56, bottom: 48, right: 16, top: 12 };
		const Inner: React.FC = () => {
			const dims = useChartContext();
			if (!dims) return null;
			return (
				<svg width={dims.width} height={dims.height} role="img">
					<g transform={`translate(${dims.margin.left},${dims.margin.top})`}>
						<GridLines axis="y" />
						{series.map((s, i) => (
							<BarSeriesPrimitive
								key={s.id}
								series={s}
								seriesIndex={i}
								seriesCount={series.length}
								palette="categorical"
								parseX={parseX}
								allSeries={series}
							/>
						))}
						<Axis type="y" />
						<Axis type="x" />
					</g>
				</svg>
			);
		};
		const yMax = Math.max(...series.flatMap((s) => s.data.map((d) => d.y)));
		return (
			<div
				style={{
					fontFamily:
						'"Frutiger W01", Frutiger, Arial, "Helvetica Neue", Helvetica, sans-serif',
				}}
			>
				<ChartRoot
					width={760}
					height={320}
					margin={margin}
					ariaLabel="Generic grouped bar chart (categorical)"
				>
					<BandScalesProvider series={series as any}>
						<TooltipProvider>
							<Inner />
							<Legend items={series.map((s) => ({ id: s.id, label: s.id }))} />
							<VisuallyHiddenLiveRegion />
						</TooltipProvider>
					</BandScalesProvider>
				</ChartRoot>
			</div>
		);
	},
	// name removed (redundant)
	parameters: {
		docs: {
			description: {
				story:
					"Grouped bar chart with automatic width and spacing constraints.",
			},
		},
	},
};

export const ContinuousManyBarsScrollable: Story = {
	render: () => {
		// Generate many days of data to provoke horizontal overflow
		const days = 60;
		const raw: BarSeries[] = [
			{
				id: "overflowSeries",
				data: Array.from({ length: days }).map((_, i) => ({
					x: day(i),
					y: 12 + (i % 10) * 3 + Math.floor(i / 15), // gentle repeating pattern with slow drift
				})),
				barWidth: 18,
			},
		];
		const margin = { left: 56, bottom: 48, right: 16, top: 12 };
		const gap = 4;
		const parse = (d: any) => d.x as Date;
		const requiredTotalWidth = computeContinuousBarChartTotalWidth(raw, {
			parseX: parse,
			barWidth: raw[0].barWidth,
			groupGap: gap,
			marginLeft: margin.left,
			marginRight: margin.right,
			minBarWidth: 12,
		});
		const Inner: React.FC = () => {
			const dims = useChartContext();
			if (!dims) return null;
			return (
				<svg width={dims.width} height={dims.height} role="img">
					<g transform={`translate(${dims.margin.left},${dims.margin.top})`}>
						<GridLines axis="y" />
						<BarSeriesPrimitive
							series={raw[0]}
							seriesIndex={0}
							seriesCount={1}
							palette="categorical"
							parseX={parse}
							groupGap={gap}
							allSeries={raw}
							minBarWidth={12}
						/>
						<Axis type="y" />
						{/* Provide an explicit tick for every bar so labels align with bar centers */}
						<Axis
							type="x"
							tickValues={raw[0].data.map((d) => d.x)}
							// Compact day/month formatting to keep labels readable; ensures uniqueness across months
							formatTick={(v: any) => {
								const d = v as Date;
								return `${d.getDate()}/${d.getMonth() + 1}`; // e.g. 3/8
							}}
							allowLabelWrap={false}
							autoMinLabelSpacing={false}
						/>
					</g>
				</svg>
			);
		};
		return (
			<div
				style={{
					width: 760,
					overflowX: "auto",
					border: "1px solid #ddd",
					paddingBottom: 4,
					fontFamily:
						'"Frutiger W01", Frutiger, Arial, "Helvetica Neue", Helvetica, sans-serif',
				}}
			>
				<ChartRoot
					width={requiredTotalWidth}
					height={320}
					margin={margin}
					ariaLabel="Scrollable bar chart with many bars"
				>
					<LineScalesProvider
						series={raw as any}
						parseX={parse}
						yDomain={[0, 60]}
					>
						<TooltipProvider>
							<Inner />
							<Legend items={raw.map((s) => ({ id: s.id, label: s.id }))} />
							<VisuallyHiddenLiveRegion />
						</TooltipProvider>
					</LineScalesProvider>
				</ChartRoot>
			</div>
		);
	},
	name: "Continuous Bars (Scrollable)",
	parameters: {
		docs: {
			description: {
				story:
					"Continuous time-scale bars with horizontal scroll instead of width compression. Uses minBarWidth prop to avoid rendering bars below 12px (auto-expands total width when needed).",
			},
		},
	},
};
