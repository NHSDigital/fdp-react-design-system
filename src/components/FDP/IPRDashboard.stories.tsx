import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { BrandThemeProvider } from "../../themes/BrandThemeProvider";
import { Header } from "../Header";
import { NavigationSplitView } from "../NavigationSplitView";
import type { NavigationSplitItem } from "../NavigationSplitView/NavigationSplitView.types";
import { LogoVariant } from "../../assets/brand";
import { AriaTabsDataGrid } from "../SortableDataTable/AriaTabsDataGrid";
import { createGenericTabsConfig } from "../SortableDataTable/AriaTabsDataGridFactory";
// SPC-backed visuals
import { SPCVariationIcon, VariationJudgement, MetricPolarity, Direction } from "../DataVisualisation/charts/SPC/icons";
import { ImprovementDirection, SPCChart, computeSpcPrecomputed, DEFAULT_MIN_POINTS, type SpcPrecomputedSummary } from "../DataVisualisation/charts/SPC";
import { SPCSpark } from "../DataVisualisation/charts/SPC/SPCSpark/SPCSpark";
import { ChartType } from "../DataVisualisation/charts/SPC/engine";

type PageId = "overview" | "summary" | "exceptions" | "transformation";

interface PageItem extends NavigationSplitItem<PageId> {
	description?: string;
}

// --- NOF SPC-backed dataset and renderers ---------------------------------
type Level = "Trust" | "Division" | "Care Group" | "Ward";

interface NofRow {
	id: string;
	level: Level;
	domain: string; // NOF Domain
	metric: string; // Strategic Metric
	polarity: MetricPolarity; // Higher or Lower is better (for icon narrative)
	improvementDirection: ImprovementDirection; // Engine polarity for SPC
	target?: number;
	dates: string[]; // ISO YYYY-MM
	values: Array<number | null>; // 18 months
}

// Fixed 18-month window for reproducibility (2024-03 .. 2025-08)
const genMonths = (startYear: number, startMonth1Based: number, count: number): string[] => {
	const out: string[] = [];
	let y = startYear, m = startMonth1Based - 1; // JS Date 0-based month
	for (let i = 0; i < count; i++) {
		const mm = (m + 1).toString().padStart(2, "0");
		out.push(`${y}-${mm}`);
		m += 1;
		if (m > 11) { m = 0; y += 1; }
	}
	return out;
};
const MONTHS_18 = genMonths(2024, 3, 18);

const nofData: NofRow[] = [
	{
		id: "nof1",
		level: "Trust",
		domain: "Access to services",
		metric: "A&E 4h performance (%)",
		polarity: MetricPolarity.HigherIsBetter,
		improvementDirection: ImprovementDirection.Up,
		target: 76,
		dates: MONTHS_18,
		// Engine-friendly shift: first 9 months ~60-61, next 9 months ~78-83 (should trigger shift/2-of-3)
		values: [60,60,61,60,61,60,61,60,61, 78,79,80,81,80,82,81,83,82],
	},
	{
		id: "nof2",
		level: "Trust",
		domain: "Access to services",
		metric: "RTT 18 weeks (%)",
		polarity: MetricPolarity.HigherIsBetter,
		improvementDirection: ImprovementDirection.Up,
		target: 92,
		dates: MONTHS_18,
		values: [70,71,71,72,72,73,73,74,75,76,76,77,78,79,79,80,81,82],
	},
	{
		id: "nof3",
		level: "Trust",
		domain: "People & Workforce",
		metric: "Sickness absence rate (%)",
		polarity: MetricPolarity.LowerIsBetter,
		improvementDirection: ImprovementDirection.Down,
		target: 4.0,
		dates: MONTHS_18,
		values: [5.3,5.2,5.1,5.1,5.0,5.0,4.9,4.8,4.8,4.7,4.6,4.6,4.5,4.5,4.4,4.3,4.2,4.1],
	},
	{
		id: "nof4",
		level: "Trust",
		domain: "Patient Safety",
		metric: "HCAI rate (per 10k bed-days)",
		polarity: MetricPolarity.LowerIsBetter,
		improvementDirection: ImprovementDirection.Down,
		target: 12,
		dates: MONTHS_18,
		// Clear deterioration shift (worse): first 9 months ~10.6-10.9, next 9 months ~14.5-17.0
		values: [10.5,10.7,10.6,10.8,10.7,10.9,10.6,10.8,10.7, 14.5,15.0,15.2,15.5,16.0,16.2,16.5,16.8,17.0],
	},
	{
		id: "nof5",
		level: "Trust",
		domain: "Effectiveness of care",
		metric: "HSMR (index)",
		polarity: MetricPolarity.LowerIsBetter,
		improvementDirection: ImprovementDirection.Down,
		target: 100,
		dates: MONTHS_18,
		values: [98,101,99,100,102,101,100,98,97,99,100,101,100,99,101,100,99,100],
	},
	{
		id: "nof6",
		level: "Trust",
		domain: "Patient Experience",
		metric: "Friends & Family positive (%)",
		polarity: MetricPolarity.HigherIsBetter,
		improvementDirection: ImprovementDirection.Up,
		target: 90,
		dates: MONTHS_18,
		values: [88,88,88,89,89,89,89,90,90,90,90,90,90,91,90,91,91,91],
	},
];

const avg12 = (arr: Array<number | null>): number | null => {
	const tail = arr.slice(-12).filter((v): v is number => v != null);
	if (!tail.length) return null;
	const sum = tail.reduce((a, b) => a + b, 0);
	return +(sum / tail.length).toFixed(1);
};

// Removed local mapIconToVariation in favour of SPC utils and precompute helper

// Inline cells and columns are now created inside the component to capture precomputed engine results

const pages: PageItem[] = [
	{ id: "overview", label: "Performance overview", description: "Key KPIs across organisational levels" },
	{ id: "summary", label: "Performance summary", description: "Summarised recent performance and trends" },
	{ id: "exceptions", label: "Performance exception report", description: "Signals requiring attention" },
	{ id: "transformation", label: "Transformation", description: "Programmes and interventions" },
];

const meta: Meta = {
	title: "FDP/IPR Dashboard/Performance Overview",
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
			component:
				"IPR dashboard composition: FDP Header + split navigation with four pages. The first three pages include a tabbed responsive data table showing Trust/Division/Care Group/Ward views.",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PerformanceOverview: Story = {
	render: () => {
		// Local wrapper to hold selection state for tertiary pane chart
		const IPRPage: React.FC = () => {
			const [selectedRow, setSelectedRow] = React.useState<NofRow | null>(null);

			// Precompute SPC engine rows and visuals once per NOF row for exact spark/chart parity
			const precomputed = React.useMemo(() => {
				const map = new Map<string, SpcPrecomputedSummary>();

				for (const row of nofData) {
					const data = row.dates.map((d, i) => ({ x: d, value: row.values[i] }));
					const summary = computeSpcPrecomputed(data, {
						chartType: ChartType.XmR,
						metricImprovement: row.improvementDirection,
						minimumPoints: DEFAULT_MIN_POINTS,
						enableNeutralNoJudgement: true,
						includeSignalFallbacks: true,
					});
					map.set(row.id, summary);
				}
				return map;
			}, []);

			// Inline cells consuming precomputed values for sparks and icons
			const SparkCell: React.FC<{ row: NofRow }> = ({ row }) => {
				const pc = precomputed.get(row.id);
				return (
					<SPCSpark
						data={row.values.map((v, i) => ({ x: row.dates[i], value: v }))}
						metricImprovement={row.improvementDirection}
						showLimits={true}
						showLimitBand={false}
						showInnerBands={false}
						showMean={true}
						centerLine={pc?.centerLine}
						controlLimits={pc?.controlLimits ?? null}
						sigmaBands={pc?.sigmaBands ?? null}
						pointSignals={pc?.pointSignals}
						pointNeutralSpecialCause={pc?.pointNeutralSpecialCause}
						visualCategories={pc?.visuals}
						variationState={pc?.latestState ?? undefined}
						colorPointsBySignal={true}
						size="full"
					/>
				);
			};

			const SpcIconCell: React.FC<{ row: NofRow }> = ({ row }) => {
				const pc = precomputed.get(row.id);
				return (
					<SPCVariationIcon
						size={64}
						// Minimal placeholder input; actual state/layout come from precomputed
						data={{ judgement: VariationJudgement.None, polarity: row.polarity, trend: Direction.Higher }}
						precomputed={pc}
						improvementDirection={row.improvementDirection}
						dropShadow={false}
					/>
				);
			};

			const nofColumns = [
				{ key: "domain", label: "NOF Domain" },
				{ key: "metric", label: "Strategic Metric" },
				{ key: "current", label: "Current Performance", customRenderer: (_: any, row: NofRow) => <SparkCell row={row} /> },
				{ key: "spc", label: "SPC", customRenderer: (_: any, row: NofRow) => <SpcIconCell row={row} /> },
				{ key: "avg12", label: "12 Month Average", render: (row: NofRow) => {
					const v = avg12(row.values);
					return v != null ? v.toLocaleString() : "–";
				} },
				{ key: "target", label: "Target", render: (row: NofRow) => (row.target != null ? row.target.toLocaleString() : "–") },
			];

			const overviewTabsLocal = createGenericTabsConfig<NofRow>(nofData, [
				{ id: "trust", label: "Trust", ariaLabel: "National Outcomes Framework metrics", columns: nofColumns },
				{ id: "division", label: "Division", ariaLabel: "Divisional metrics", columns: [] },
				{ id: "care-group", label: "Care Group", ariaLabel: "Care Group metrics", columns: [] },
				{ id: "ward", label: "Ward", ariaLabel: "Ward metrics", columns: [] },
			]);

			return (
				<BrandThemeProvider brand="fdp" scope="local">
					<div>
						<Header
							service={{ text: "IPR Dashboard", href: "/" }}
							className="nhsuk-header--dark-grey-gradient"
							logoVariant={LogoVariant.Inverse}
						/>
						<NavigationSplitView<PageId, PageItem>
							items={pages}
							autoContentHeader={{ mobile: true, tablet: true, desktop: true }}
							contentSubheader={(item) => item?.description}
							// Provide a tertiary renderer; shows placeholder until a row is selected
							renderSecondaryContent={() => (
								selectedRow ? (
									<div>
										<SPCChart
											ariaLabel={`${selectedRow.metric} SPC chart`}
											data={selectedRow.dates
												.map((d, i) => {
													const v = selectedRow.values[i];
													return v != null ? { x: d, y: v } : null;
												})
												.filter(Boolean) as { x: string; y: number }[]}
											engine={{ metricImprovement: selectedRow.improvementDirection }}
											showPoints={true}
											highlightOutOfControl={true}
											precomputed={{
												rows: precomputed.get(selectedRow.id)?.rows ?? [],
												visuals: precomputed.get(selectedRow.id)?.visuals ?? [],
											}}
											height={250}
										/>
									</div>
								) : (
									<p style={{ margin: 0 }}>Select a metric row to view its SPC chart here.</p>
								)
							)}
							// Helpful label for mobile/tablet forward action
							nextLabel="View chart"
							// Secondary header can show selected metric context when available
							secondarySubheader={() => (
								selectedRow ? (
									<div style={{ display: "flex", flexDirection: "column" }}>
										<strong>{selectedRow.metric}</strong>
										<span style={{ opacity: 0.8 }}>{selectedRow.domain}</span>
									</div>
								) : null
							)}
							a11y={{ secondaryContentLabel: "Metric details" }}
							defaultSelectedId="overview"
							renderContent={(item?: PageItem) => {
								if (!item) return <p>Select a page from the navigation.</p>;
								switch (item.id) {
									case "overview":
									case "summary":
									case "exceptions":
										return (
											<AriaTabsDataGrid
												ariaLabel={`${item.label} data views`}
												tabPanels={overviewTabsLocal}
												onGlobalRowSelectionChange={(row) => setSelectedRow(row as NofRow | null)}
											/>
										);
									case "transformation":
									default:
										return (
											<div>
												<h3 style={{ marginTop: 0 }}>Transformation</h3>
												<p>
													Track transformation programmes, milestones and benefits realisation. Add visualisations and status summaries here.
												</p>
											</div>
										);
								}
							}}
						/>
					</div>
				</BrandThemeProvider>
			);
		};

		return <IPRPage />;
	},
};
