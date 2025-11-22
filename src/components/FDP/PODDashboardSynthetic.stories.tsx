import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { BrandThemeProvider } from "../../themes/BrandThemeProvider";
import { Header } from "../Header";
import { LogoVariant } from "../../assets/brand";
import { GroupableDataGrid } from "../GroupableDataGrid";
import { Subnav } from "./Subnav";
import { SPCVariationIcon, VariationJudgement, Direction } from "../DataVisualisation/charts/SPC/icons";
import { computeSpcPrecomputed, DEFAULT_MIN_POINTS, type SpcPrecomputedSummary } from "../DataVisualisation/charts/SPC";
import { SPCSpark } from "../DataVisualisation/charts/SPC/SPCSpark/SPCSpark";
import { ChartType } from "../DataVisualisation/charts/SPC/engine";
import { generatePODMetrics, type PODMetric, type OrgLevel } from "./PODDashboard.syntheticData";

const meta: Meta = {
	title: "FDP/POD Dashboard/Synthetic Multi-Level Data",
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component:
					"POD dashboard with synthetic data demonstrating national, regional, and ICB level metrics. Data includes realistic trends, variation, and SPC analysis for 8 key NHS performance metrics.",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SyntheticDataDashboard: Story = {
	render: () => {
		const SyntheticPODPage: React.FC = () => {
			const [sortConfig, setSortConfig] = React.useState<Array<{ key: string; direction: 'asc' | 'desc' }>>([]);
			const [selectedMetric, setSelectedMetric] = React.useState<PODMetric | null>(null);
			const [selectedLevel, setSelectedLevel] = React.useState<OrgLevel>("National");
			const [selectedOrg, setSelectedOrg] = React.useState<string>("all");
			const [selectedTheme, setSelectedTheme] = React.useState<string>("all");
			const [expandedIds, setExpandedIds] = React.useState<Set<string>>(new Set());
			
			// Generate all synthetic data once
			const allMetrics = React.useMemo(() => generatePODMetrics(), []);

			// Precompute SPC for all metrics
			const precomputed = React.useMemo(() => {
				const map = new Map<string, SpcPrecomputedSummary>();

				for (const metric of allMetrics) {
					const data = metric.dates.map((d, i) => ({ x: d, value: metric.values[i] }));
					const summary = computeSpcPrecomputed(data, {
						chartType: ChartType.XmR,
						metricImprovement: metric.improvementDirection,
						minimumPoints: DEFAULT_MIN_POINTS,
						enableNeutralNoJudgement: true,
						includeSignalFallbacks: true,
					});
					map.set(metric.id, summary);
				}
				return map;
			}, [allMetrics]);

			// Filter metrics based on selections
			const filteredMetrics = React.useMemo(() => {
				let filtered = allMetrics.filter(m => m.level === selectedLevel);
				
				if (selectedOrg !== "all") {
					filtered = filtered.filter(m => m.orgCode === selectedOrg);
				}
				
				if (selectedTheme !== "all") {
					filtered = filtered.filter(m => m.theme === selectedTheme);
				}
				
				return filtered;
			}, [allMetrics, selectedLevel, selectedOrg, selectedTheme]);

			// Get unique organizations for current level
			const organizations = React.useMemo(() => {
				const orgs = allMetrics
					.filter(m => m.level === selectedLevel)
					.map(m => ({ code: m.orgCode, name: m.orgName }));
				
				// Deduplicate by code
				const uniqueOrgs = Array.from(
					new Map(orgs.map(o => [o.code, o])).values()
				);
				
				return uniqueOrgs.sort((a, b) => a.name.localeCompare(b.name));
			}, [allMetrics, selectedLevel]);

			// Get unique themes
			const themes = React.useMemo(() => {
				const uniqueThemes = [...new Set(allMetrics.map(m => m.theme))];
				return uniqueThemes.sort();
			}, [allMetrics]);

			// Reset org/theme filters when level changes
			React.useEffect(() => {
				setSelectedOrg("all");
				setSelectedTheme("all");
			}, [selectedLevel]);

			// Initialize expansion state when data changes
			React.useEffect(() => {
				const ids = new Set<string>();
				
				if (selectedLevel === "National") {
					// National: expand all theme groups (root-0-${theme})
					const themes = [...new Set(filteredMetrics.map(m => m.theme))];
					themes.forEach(theme => ids.add(`root-0-${theme}`));
				} else {
					// Regional/ICB: expand all org groups and theme subgroups
					const orgs = [...new Set(filteredMetrics.map(m => m.orgName))];
					orgs.forEach(org => {
						ids.add(`root-0-${org}`);
						// Also expand theme groups within each org
						const orgMetrics = filteredMetrics.filter(m => m.orgName === org);
						const orgThemes = [...new Set(orgMetrics.map(m => m.theme))];
						orgThemes.forEach(theme => ids.add(`root-0-${org}-1-${theme}`));
					});
				}
				
				console.log('Initializing expanded IDs:', Array.from(ids));
				setExpandedIds(ids);
			}, [filteredMetrics, selectedLevel]);

			// Sparkline cell renderer
			const SparkCell: React.FC<{ metric: PODMetric }> = ({ metric }) => {
				const pc = precomputed.get(metric.id);
				return (
					<SPCSpark
						data={metric.values.map((v, i) => ({ x: metric.dates[i], value: v }))}
						metricImprovement={metric.improvementDirection}
						showLimits={true}
						showLimitBand={false}
						showInnerBands={false}
						showMean={true}
						showStateGlyph={false}
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

			// SPC icon cell renderer
			const SpcIconCell: React.FC<{ metric: PODMetric }> = ({ metric }) => {
				const pc = precomputed.get(metric.id);
				return (
					<SPCVariationIcon
						size={64}
						data={{ 
							judgement: VariationJudgement.None,
							polarity: metric.polarity,
							trend: Direction.Higher
						}}
						precomputed={pc}
						improvementDirection={metric.improvementDirection}
						dropShadow={false}
					/>
				);
			};

			// Calculate 12-month average
			const avg12 = (values: Array<number | null>): string => {
				const tail = values.slice(-12).filter((v): v is number => v != null);
				if (!tail.length) return "–";
				const sum = tail.reduce((a, b) => a + b, 0);
				return (sum / tail.length).toFixed(1);
			};

			// Get latest value
			const latestValue = (values: Array<number | null>): string => {
				const latest = values[values.length - 1];
				return latest != null ? latest.toFixed(1) : "–";
			};

			// Column definitions
			const columns = [
				{ 
					key: "orgName", 
					label: "Organisation",
					render: (row: PODMetric) => row.orgName
				},
				{ 
					key: "theme", 
					label: "Theme",
					render: (row: PODMetric) => row.theme
				},
				{ 
					key: "metricName", 
					label: "Metric",
					render: (row: PODMetric) => row.metricName
				},
				{ 
					key: "latest", 
					label: "Latest",
					render: (row: PODMetric) => `${latestValue(row.values)}${row.unit === "%" ? "%" : row.unit === "minutes" || row.unit === "days" ? ` ${row.unit}` : ""}`
				},
				{ 
					key: "avg12", 
					label: "12 Month Avg",
					render: (row: PODMetric) => `${avg12(row.values)}${row.unit === "%" ? "%" : row.unit === "minutes" || row.unit === "days" ? ` ${row.unit}` : ""}`
				},
				{ 
					key: "target", 
					label: "Target",
					render: (row: PODMetric) => row.target != null ? `${row.target}${row.unit === "%" ? "%" : row.unit === "minutes" || row.unit === "days" ? ` ${row.unit}` : ""}` : "–"
				},
				{ 
					key: "trend", 
					label: "18 Month Trend",
					customRenderer: (_: any, row: PODMetric) => <SparkCell metric={row} />
				},
				{ 
					key: "spc", 
					label: "SPC",
					customRenderer: (_: any, row: PODMetric) => <SpcIconCell metric={row} />
				},
			];

			// Group by organisation for regional and ICB views, then by theme
			const groupConfig = selectedLevel === "National" 
				? {
					levels: [
						{
							groupBy: 'theme' as any,
							label: '',
							expandedByDefault: true,
						}
					]
				}
				: {
					levels: [
						{
							groupBy: 'orgName' as any,
							label: selectedLevel === "Region" ? "NHS Region" : "Integrated Care Board",
							expandedByDefault: false,
						},
						{
							groupBy: 'theme' as any,
							label: '',
							expandedByDefault: false,
						}
					]
				};

			return (
				<BrandThemeProvider brand="nhs" scope="local">
					<div>
						<Header
							service={{ text: "POD Dashboard - Synthetic Data", href: "/" }}
							className="nhsuk-header"
							logoVariant={LogoVariant.Graphic}
							navigation={{
								items : [
									{ href: "#", text: "Summaries" },
									{ href: "#", text: "Programme Areas" },
									{ href: "#", text: "Provider Tables", current: true },
									{ href: "#", text: "Links" },
									{ href: "#", text: "About" },
								]
							}}
						/>
						
						{/* Subnav with filters */}
						<Subnav
							filters={[
								{
									id: 'level-select',
									name: 'level',
									label: 'Level',
									value: selectedLevel,
									onChange: (e) => setSelectedLevel(e.target.value as OrgLevel),
									options: [
										{ value: 'National', label: 'National' },
										{ value: 'Region', label: 'Regional' },
										{ value: 'ICB', label: 'ICB' },
									],
								},
								{
									id: 'org-select',
									name: 'organisation',
									label: 'Organisation',
									value: selectedOrg,
									disabled: selectedLevel === 'National',
									onChange: (e) => setSelectedOrg(e.target.value),
									options: [
										{ value: 'all', label: 'All' },
										...organizations.map(org => ({
											value: org.code,
											label: org.name,
										})),
									],
								},
								{
									id: 'theme-select',
									name: 'theme',
									label: 'Theme',
									value: selectedTheme,
									onChange: (e) => setSelectedTheme(e.target.value),
									options: [
										{ value: 'all', label: 'All Themes' },
										...themes.map(theme => ({
											value: theme,
											label: theme,
										})),
									],
								},
							]}
						/>

						{/* Main content */}
						<div style={{ padding: '2rem' }}>
							<h1 style={{ marginBottom: '0.5rem' }}>
								{selectedLevel === "National" && "England - National Performance"}
								{selectedLevel === "Region" && "Regional Performance"}
								{selectedLevel === "ICB" && "Integrated Care Board Performance"}
							</h1>
							<p style={{ marginBottom: '2rem', color: '#425563' }}>
								Showing {filteredMetrics.length} metric{filteredMetrics.length !== 1 ? 's' : ''} 
								{selectedOrg !== "all" && ` for ${organizations.find(o => o.code === selectedOrg)?.name}`}
								{selectedTheme !== "all" && ` in ${selectedTheme}`}
								{' '}with 18 months of data (Mar 2024 - Aug 2025)
							</p>
							
							<GroupableDataGrid
								mode="grouped"
								data={filteredMetrics}
								columns={columns}
								groupConfig={groupConfig}
								expandedIds={expandedIds}
								onExpansionChange={(ids) => {
									console.log('Expansion changed:', Array.from(ids));
									setExpandedIds(ids);
								}}
								selectedRow={selectedMetric}
								onGlobalRowSelectionChange={setSelectedMetric}
								sortConfig={sortConfig}
								onSortChange={setSortConfig}
								ariaLabel="Performance metrics"
							/>
						</div>
					</div>
				</BrandThemeProvider>
			);
		};

		return <SyntheticPODPage />;
	},
};

export const NationalViewOnly: Story = {
	name: "National View",
	args: {},
	render: () => {
		const NationalView: React.FC = () => {
			const [sortConfig, setSortConfig] = React.useState<Array<{ key: string; direction: 'asc' | 'desc' }>>([]);
			const [selectedMetric, setSelectedMetric] = React.useState<PODMetric | null>(null);
			
			// Generate all synthetic data once - memoized to prevent regeneration on re-render
			const allMetrics = React.useMemo(() => generatePODMetrics(), []);
			const nationalMetrics = React.useMemo(() => allMetrics.filter(m => m.level === "National"), [allMetrics]);

			// Precompute SPC for all national metrics - memoized to prevent recalculation
			const precomputed = React.useMemo(() => {
				const map = new Map<string, SpcPrecomputedSummary>();
				for (const metric of nationalMetrics) {
					const data = metric.dates.map((d, i) => ({ 
						x: d, 
						value: metric.values[i] ?? 0 
					}));
					const summary = computeSpcPrecomputed(data, {
						chartType: ChartType.XmR,
						metricImprovement: metric.improvementDirection,
						minimumPoints: DEFAULT_MIN_POINTS,
						enableNeutralNoJudgement: true,
						includeSignalFallbacks: true,
					});
					map.set(metric.id, summary);
				}
				return map;
			}, [nationalMetrics]);

			const SparkCell: React.FC<{ metric: PODMetric }> = ({ metric }) => {
				const pc = precomputed.get(metric.id);
				return (
					<SPCSpark
						data={metric.dates.map((d, i) => ({ x: d, value: metric.values[i] ?? 0 }))}
						metricImprovement={metric.improvementDirection}
						showLimits={true}
						showLimitBand={false}
						showInnerBands={false}
						showMean={true}
						showStateGlyph={false}
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

			const SpcIconCell: React.FC<{ metric: PODMetric }> = ({ metric }) => {
				const pc = precomputed.get(metric.id);
				return (
					<SPCVariationIcon
						size={64}
						data={{ 
							judgement: VariationJudgement.None,
							polarity: metric.polarity,
							trend: Direction.Higher
						}}
						precomputed={pc}
						improvementDirection={metric.improvementDirection}
						dropShadow={false}
					/>
				);
			};

			const avg12 = (values: Array<number | null>): string => {
				const tail = values.slice(-12).filter((v): v is number => v != null);
				if (!tail.length) return "–";
				const sum = tail.reduce((a, b) => a + b, 0);
				return (sum / tail.length).toFixed(1);
			};

			const latestValue = (values: Array<number | null>): string => {
				const latest = values[values.length - 1];
				return latest != null ? latest.toFixed(1) : "–";
			};

			const columns = [
				{ 
					key: "metricName", 
					label: "Metric"
				},
				{ 
					key: "latest", 
					label: "Latest",
					render: (row: PODMetric) => `${latestValue(row.values)}${row.unit === "%" ? "%" : row.unit === "minutes" || row.unit === "days" ? ` ${row.unit}` : ""}`
				},
				{ 
					key: "avg12", 
					label: "12 Month Avg",
					render: (row: PODMetric) => `${avg12(row.values)}${row.unit === "%" ? "%" : row.unit === "minutes" || row.unit === "days" ? ` ${row.unit}` : ""}`
				},
				{ 
					key: "target", 
					label: "Target",
					render: (row: PODMetric) => row.target != null ? `${row.target}${row.unit === "%" ? "%" : row.unit === "minutes" || row.unit === "days" ? ` ${row.unit}` : ""}` : "–"
				},
				{ 
					key: "trend", 
					label: "18 Month Trend",
					customRenderer: (_: any, row: PODMetric) => <SparkCell metric={row} />
				},
				{ 
					key: "spc", 
					label: "SPC",
					customRenderer: (_: any, row: PODMetric) => <SpcIconCell metric={row} />
				},
			];

			return (
				<BrandThemeProvider brand="nhs" scope="local">
					<div style={{ padding: "2rem" }}>
						<h1>England - National Performance Overview</h1>
						<p style={{ marginBottom: "2rem", color: "#425563" }}>
							8 key NHS performance metrics with 18 months of data (Mar 2024 - Aug 2025)
						</p>
						<GroupableDataGrid
							mode="flat"
							data={nationalMetrics}
							columns={columns}
							groupConfig={{
								levels: [
									{
										groupBy: 'theme' as any,
										label: '',
										expandedByDefault: true,
									}
								]
							}}
							sortConfig={sortConfig}
							onSortChange={setSortConfig}
							selectedRow={selectedMetric}
							onGlobalRowSelectionChange={setSelectedMetric}
							ariaLabel="National performance metrics"
						/>
					</div>
				</BrandThemeProvider>
			);
		};

		return <NationalView />;
	},
};
