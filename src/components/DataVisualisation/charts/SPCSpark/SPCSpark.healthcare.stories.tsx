// React import omitted (automatic JSX runtime)
import type { Meta, StoryObj } from "@storybook/react";
import { SPCSpark } from "./SPCSpark";
import { Grid, Row, Column } from "../../../Grid";

// Replicates the healthcare datasets from SPCChart.healthcare.stories.tsx
// to provide compact sparkline equivalents.

const meta: Meta<typeof SPCSpark> = {
	title: "Data Visualisation/SPC/Healthcare Sparks",
	component: SPCSpark,
	decorators: [
		(Story) => (
			<div style={{ fontFamily: "Frutiger W01, Frutiger, Arial, sans-serif" }}>
				<Story />
			</div>
		),
	],
	parameters: {
		docs: {
			description: {
				component:
					"Healthcare representative SPC datasets rendered as compact SPCSpark components (auto classification + 3σ limits). Use alongside the full SPC chart stories for narrative context.",
			},
		},
	},
};
export default meta;

// Datasets (kept local; if updated in chart stories, mirror here)
const ed4hValues = [
	69, 70, 68, 71, 70, 69, 70, 69, 71, 70, 68, 69, 78, 79, 80, 81, 79, 78, 82,
	81, 80, 79, 81, 80,
];
const losValues = [
	7.4, 7.5, 7.6, 7.3, 7.4, 7.5, 7.2, 7.3, 7.1, 7.2, 7.0, 7.1, 6.8, 6.7, 6.6,
	6.5, 6.4, 6.3, 6.2, 6.1, 6.2, 6.0, 6.1, 6.0,
];
const readmitValues = [
	9.1, 9.0, 9.2, 9.3, 9.1, 9.0, 9.2, 9.3, 9.1, 9.0, 9.2, 9.1, 9.4, 9.6, 9.5,
	9.2, 9.3, 9.1, 9.0, 9.2, 9.1, 9.0, 9.1, 9.0,
];
const handHygieneValues = [
	86, 87, 85, 88, 87, 86, 87, 88, 86, 87, 88, 87, 92, 93, 94, 92, 93, 94, 93,
	92, 85, 93, 94, 93,
];
const fallsValues = [
	5.8, 5.9, 5.7, 5.8, 5.9, 5.6, 5.7, 5.5, 5.6, 5.4, 5.5, 5.3, 5.2, 5.1, 5.0,
	4.9, 5.6, 4.8, 4.7, 4.6, 4.5, 4.4, 4.5, 4.3,
];
const medErrorGaps = [
	3, 4, 2, 5, 4, 3, 4, 5, 4, 3, 6, 7, 8, 9, 7, 10, 12, 14, 15, 6, 20, 9, 18, 7,
];
const pressureUlcerCounts = [
	8, 7, 9, 8, 7, 10, 9, 8, 11, 9, 12, 13, 14, 15, 13, 16, 18, 19, 17, 20, 5, 21,
	22, 23,
];
const rttValues = [
	76, 79.7, 76.2, 74.4, 74.5, 74.2, 75.2, 75.8, 74.9, 75.0, 74.8, 74.9, 79, 81,
	80.7, 81.2, 81, 80.8, 81, 81.3, 81.6, 82, 83.2, 84.5, 84,
];

const wrap = (vals: number[]) => vals.map((v) => ({ value: v }));

type Story = StoryObj<typeof SPCSpark>;

export const AllSparks: Story = {
	name: "All Sparks Grid",
	render: () => (
		<Grid>
			<Row>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						ED 4h
					</strong>
					<SPCSpark
						data={wrap(ed4hValues)}
						autoClassify
						showLimits
						sigmaMethod="moving-range"
						direction="higher"
					/>
				</Column>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						LOS
					</strong>
					<SPCSpark
						data={wrap(losValues)}
						autoClassify
						showLimits
						sigmaMethod="moving-range"
						direction="lower"
					/>
				</Column>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						Readmit
					</strong>
					<SPCSpark
						data={wrap(readmitValues)}
						autoClassify
						showLimits
						sigmaMethod="moving-range"
						direction="lower"
					/>
				</Column>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						Hand Hygiene
					</strong>
					<SPCSpark
						data={wrap(handHygieneValues)}
						autoClassify
						showLimits
						sigmaMethod="moving-range"
						direction="higher"
					/>
				</Column>
			</Row>
			<Row>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						Falls
					</strong>
					<SPCSpark
						data={wrap(fallsValues)}
						autoClassify
						showLimits
						sigmaMethod="moving-range"
						direction="lower"
					/>
				</Column>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						Med Errors
					</strong>
					<SPCSpark
						data={wrap(medErrorGaps)}
						autoClassify
						showLimits
						sigmaMethod="moving-range"
						direction="higher"
					/>
				</Column>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						Pressure Ulcers
					</strong>
					<SPCSpark
						data={wrap(pressureUlcerCounts)}
						autoClassify
						showLimits
						sigmaMethod="moving-range"
						direction="higher"
					/>
				</Column>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						RTT
					</strong>
					<SPCSpark
						data={wrap(rttValues)}
						autoClassify
						showLimits
						sigmaMethod="moving-range"
						direction="higher"
					/>
				</Column>
			</Row>
		</Grid>
	),
	parameters: {
		docs: {
			description: {
				story:
					"All healthcare sparks laid out with Grid / Row / Column for responsive NHS layout.",
			},
		},
	},
};

// Thinned variants grid (stride thinning)
export const AllSparksThinnedStride: Story = {
	name: "All Sparks (Thinned Stride)",
	render: () => (
		<Grid>
			<Row>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						ED 4h
					</strong>
					<SPCSpark
						data={wrap(ed4hValues)}
						autoClassify
						showLimits
						showLimitBand
						sigmaMethod="moving-range"
						direction="higher"
						showMean
						maxPoints={24}
						thinningStrategy="stride"
					/>
				</Column>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						LOS
					</strong>
					<SPCSpark
						data={wrap(losValues)}
						autoClassify
						showLimits
						showLimitBand
						sigmaMethod="moving-range"
						direction="lower"
						showMean
						maxPoints={24}
						thinningStrategy="stride"
					/>
				</Column>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						Readmit
					</strong>
					<SPCSpark
						data={wrap(readmitValues)}
						autoClassify
						showLimits
						showLimitBand
						sigmaMethod="moving-range"
						direction="lower"
						showMean
						maxPoints={24}
						thinningStrategy="stride"
					/>
				</Column>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						Hand Hygiene
					</strong>
					<SPCSpark
						data={wrap(handHygieneValues)}
						autoClassify
						showLimits
						showLimitBand
						sigmaMethod="moving-range"
						direction="higher"
						showMean
						maxPoints={24}
						thinningStrategy="stride"
					/>
				</Column>
			</Row>
			<Row>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						Falls
					</strong>
					<SPCSpark
						data={wrap(fallsValues)}
						autoClassify
						showLimits
						showLimitBand
						sigmaMethod="moving-range"
						direction="lower"
						showMean
						maxPoints={24}
						thinningStrategy="stride"
					/>
				</Column>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						Med Errors
					</strong>
					<SPCSpark
						data={wrap(medErrorGaps)}
						autoClassify
						showLimits
						showLimitBand
						sigmaMethod="moving-range"
						direction="higher"
						showMean
						maxPoints={24}
						thinningStrategy="stride"
					/>
				</Column>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						Pressure Ulcers
					</strong>
					<SPCSpark
						data={wrap(pressureUlcerCounts)}
						autoClassify
						showLimits
						showLimitBand
						sigmaMethod="moving-range"
						direction="higher"
						showMean
						maxPoints={24}
						thinningStrategy="stride"
					/>
				</Column>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						RTT
					</strong>
					<SPCSpark
						data={wrap(rttValues)}
						autoClassify
						showLimits
						showLimitBand
						sigmaMethod="moving-range"
						direction="higher"
						showMean
						maxPoints={24}
						thinningStrategy="stride"
					/>
				</Column>
			</Row>
		</Grid>
	),
	parameters: {
		docs: {
			description: {
				story:
					"All healthcare sparks rendered with stride-based thinning (maxPoints=24).",
			},
		},
	},
};

// Thinned variants grid (RDP thinning)
export const AllSparksThinnedRDP: Story = {
	name: "All Sparks (Thinned RDP)",
	render: () => (
		<Grid>
			<Row>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						ED 4h
					</strong>
					<SPCSpark
						data={wrap(ed4hValues)}
						autoClassify
						showLimits
						showLimitBand
						sigmaMethod="moving-range"
						direction="higher"
						showMean
						maxPoints={24}
						thinningStrategy="rdp"
					/>
				</Column>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						LOS
					</strong>
					<SPCSpark
						data={wrap(losValues)}
						autoClassify
						showLimits
						showLimitBand
						sigmaMethod="moving-range"
						direction="lower"
						showMean
						maxPoints={24}
						thinningStrategy="rdp"
					/>
				</Column>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						Readmit
					</strong>
					<SPCSpark
						data={wrap(readmitValues)}
						autoClassify
						showLimits
						showLimitBand
						sigmaMethod="moving-range"
						direction="lower"
						showMean
						maxPoints={24}
						thinningStrategy="rdp"
					/>
				</Column>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						Hand Hygiene
					</strong>
					<SPCSpark
						data={wrap(handHygieneValues)}
						autoClassify
						showLimits
						showLimitBand
						sigmaMethod="moving-range"
						direction="higher"
						showMean
						maxPoints={24}
						thinningStrategy="rdp"
					/>
				</Column>
			</Row>
			<Row>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						Falls
					</strong>
					<SPCSpark
						data={wrap(fallsValues)}
						autoClassify
						showLimits
						showLimitBand
						sigmaMethod="moving-range"
						direction="lower"
						showMean
						maxPoints={24}
						thinningStrategy="rdp"
					/>
				</Column>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						Med Errors
					</strong>
					<SPCSpark
						data={wrap(medErrorGaps)}
						autoClassify
						showLimits
						showLimitBand
						sigmaMethod="moving-range"
						direction="higher"
						showMean
						maxPoints={24}
						thinningStrategy="rdp"
					/>
				</Column>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						Pressure Ulcers
					</strong>
					<SPCSpark
						data={wrap(pressureUlcerCounts)}
						autoClassify
						showLimits
						showLimitBand
						sigmaMethod="moving-range"
						direction="higher"
						showMean
						maxPoints={24}
						thinningStrategy="rdp"
					/>
				</Column>
				<Column width="one-quarter">
					<strong
						style={{
							fontSize: 12,
							width: "100%",
							display: "block",
							marginBottom: 4,
						}}
					>
						RTT
					</strong>
					<SPCSpark
						data={wrap(rttValues)}
						autoClassify
						showLimits
						showLimitBand
						sigmaMethod="moving-range"
						direction="higher"
						showMean
						maxPoints={24}
						thinningStrategy="rdp"
					/>
				</Column>
			</Row>
		</Grid>
	),
	parameters: {
		docs: {
			description: {
				story:
					"All healthcare sparks rendered with RDP shape-preserving thinning (maxPoints=24).",
			},
		},
	},
};
