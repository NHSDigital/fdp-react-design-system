import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SPCChart, ImprovementDirection, type SPCDatum } from "./SPCChart";
import { ChartContainer } from "../..";

// Healthcare representative SPC examples (deterministic, no randomness)
// Each dataset contains >= 20 points (monthly) to ensure stable limits and illustrates
// common real-world improvement / deterioration / special-cause patterns.

const meta: Meta<typeof SPCChart> = {
	title: "Data Visualisation/SPC/Healthcare Examples",
	component: SPCChart,
	parameters: {
		docs: {
			description: {
				component:
					"Representative healthcare metric SPC examples (synthetic but realistic). Shows typical improvement, deterioration, shift and rare-event patterns for training / demo purposes.",
			},
		},
	},
};
export default meta;
type Story = StoryObj<typeof SPCChart>;

function months(count: number, startISO = "2023-01-01"): Date[] {
	const start = new Date(startISO + "T00:00:00Z");
	return Array.from(
		{ length: count },
		(_, i) => new Date(start.getFullYear(), start.getMonth() + i, 1)
	);
}

// Helper to build SPCDatum series from value arrays
function series(values: number[], startISO?: string): SPCDatum[] {
	const dates = months(values.length, startISO);
	return values.map((v, i) => ({ x: dates[i], y: v }));
}

// 1. Emergency Department 4-hour standard compliance (%) – Higher is better
// Pattern: Baseline ~68-71%, improvement shift to ~78-82% after intervention at point 13, one concern dip.
const ed4hValues = [
	69, 70, 68, 71, 70, 69, 70, 69, 71, 70, 68, 69, 78, 79, 80, 81, 79, 78, 82,
	81, 80, 79, 81, 80,
];

// 2. Average length of stay (days) – Lower is better (gradual improvement trend with a shift)
const losValues = [
	7.4, 7.5, 7.6, 7.3, 7.4, 7.5, 7.2, 7.3, 7.1, 7.2, 7.0, 7.1, 6.8, 6.7, 6.6,
	6.5, 6.4, 6.3, 6.2, 6.1, 6.2, 6.0, 6.1, 6.0,
];

// 3. 30-day emergency readmission rate (%) – Lower is better with a concern outlier + two-of-three
const readmitValues = [
	9.1, 9.0, 9.2, 9.3, 9.1, 9.0, 9.2, 9.3, 9.1, 9.0, 9.2, 9.1, 9.4, 9.6, 9.5,
	9.2, 9.3, 9.1, 9.0, 9.2, 9.1, 9.0, 9.1, 9.0,
];

// 4. Hand hygiene compliance (%) – Higher is better; sustained high shift then a special-cause concern dip
const handHygieneValues = [
	86, 87, 85, 88, 87, 86, 87, 88, 86, 87, 88, 87, 92, 93, 94, 92, 93, 94, 93,
	92, 85, 93, 94, 93,
];

// 5. Inpatient falls per 1000 bed days – Lower is better; gradual downward trend + special high point.
const fallsValues = [
	5.8, 5.9, 5.7, 5.8, 5.9, 5.6, 5.7, 5.5, 5.6, 5.4, 5.5, 5.3, 5.2, 5.1, 5.0,
	4.9, 5.6, 4.8, 4.7, 4.6, 4.5, 4.4, 4.5, 4.3,
];

// 6. Time between medication administration errors (days between events) – T Chart (higher gaps desirable)
// Frequent events initially (short gaps) then process improvement yields longer gaps with one very long gap.
const medErrorGaps = [
	3, 4, 2, 5, 4, 3, 4, 5, 4, 3, 6, 7, 8, 9, 7, 10, 12, 14, 15, 6, 20, 9, 18, 7,
];

// 7. Count between hospital-acquired pressure ulcers – G Chart (higher counts desirable)
const pressureUlcerCounts = [
	8, 7, 9, 8, 7, 10, 9, 8, 11, 9, 12, 13, 14, 15, 13, 16, 18, 19, 17, 20, 5, 21,
	22, 23,
];

// 8. RTT % Patients Waiting > 18 weeks. Starting 1/1/18
const rttValues = [
	76, 79.7, 76.2, 74.4, 74.5, 74.2, 75.2, 75.8, 74.9, 75.0, 74.8, 74.9, 79, 81,
	80.7, 81.2, 81, 80.8, 81, 81.3, 81.6, 82, 83.2, 84.5, 84,
];

export const ED4HourCompliance: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Emergency Department 4-hour compliance (%). Improvement shift after month 12; single concern dip retained below new mean. Higher is better.",
			},
		},
		metricContext: { improvement: "up" },
	},
	render: () => (
		<ChartContainer
			title="ED 4h Compliance"
			description="% patients seen/admitted/discharged within 4h"
			source="Synthetic"
		>
			<SPCChart
				data={series(ed4hValues)}
				chartType="XmR"
				metricImprovement={ImprovementDirection.Up}
				unit="%"
				enableRules
				announceFocus
				targets={Array(ed4hValues.length).fill(75)} // Target 75% -> PASS (latest 80%)
				gradientSequences
				narrationContext={{
					measureName: "ED 4h compliance",
					datasetContext: "Monthly trust-wide data",
					timeframe: "24 months",
					additionalNote: "Intervention at month 13",
				}}
			/>
		</ChartContainer>
	),
};

export const LengthOfStay: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Average length of stay (days). Gradual improvement with downward shift after month 12. Lower is better.",
			},
		},
		metricContext: { improvement: "down" },
	},
	render: () => (
		<ChartContainer
			title="Average Length of Stay"
			description="Acute ward LOS (days)"
			source="Synthetic"
		>
			<SPCChart
				data={series(losValues)}
				chartType="XmR"
				metricImprovement={ImprovementDirection.Down}
				enableRules
				targets={Array(losValues.length).fill(6.2)} // Target 6.2 days -> PASS (latest 6.0)
				unit="days"
				announceFocus
				gradientSequences
				narrationContext={{
					measureName: "Average length of stay",
					datasetContext: "Monthly acute admissions",
					timeframe: "24 months",
				}}
			/>
		</ChartContainer>
	),
};

export const ReadmissionRate: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"30-day emergency readmission rate (%). Concern cluster (two-of-three) and an elevated outlier. Lower is better.",
			},
		},
		metricContext: { improvement: "down" },
	},
	render: () => (
		<ChartContainer
			title="Readmission Rate"
			description="30-day emergency readmissions (%)"
			source="Synthetic"
		>
			<SPCChart
				data={series(readmitValues)}
				chartType="XmR"
				metricImprovement={ImprovementDirection.Down}
				enableRules
				targets={Array(readmitValues.length).fill(9.1)} // Target 9.1% -> PASS (latest 9.0)
				unit="%"
				announceFocus
				gradientSequences
				narrationContext={{
					measureName: "30-day readmission rate",
					datasetContext: "Monthly trust-wide data",
					timeframe: "24 months",
				}}
			/>
		</ChartContainer>
	),
};

export const HandHygieneCompliance: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Hand hygiene compliance (%). High-performing shift with a single concern dip (month 21). Higher is better.",
			},
		},
		metricContext: { improvement: "up" },
	},
	render: () => (
		<ChartContainer
			title="Hand Hygiene Compliance"
			description="Audit compliance (%)"
			source="Synthetic"
		>
			<SPCChart
				data={series(handHygieneValues)}
				chartType="XmR"
				metricImprovement={ImprovementDirection.Up}
				enableRules
				targets={Array(handHygieneValues.length).fill(90)} // Target 90% -> PASS (latest 93%)
				unit="%"
				announceFocus
				gradientSequences
				narrationContext={{
					measureName: "Hand hygiene compliance",
					datasetContext: "Monthly audits",
					timeframe: "24 months",
					additionalNote: "Sustained high shift after month 12",
				}}
			/>
		</ChartContainer>
	),
};

export const FallsPer1000BedDays: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Inpatient falls per 1000 bed days. Downward trend with one special-cause high point (month 17). Lower is better.",
			},
		},
		metricContext: { improvement: "down" },
	},
	render: () => (
		<ChartContainer
			title="Falls per 1000 Bed Days"
			description="Inpatient falls rate"
			source="Synthetic"
		>
			<SPCChart
				data={series(fallsValues)}
				chartType="XmR"
				metricImprovement={ImprovementDirection.Down}
				enableRules
				targets={Array(fallsValues.length).fill(4.6)} // Target 4.6 falls/1000 bed days -> PASS (latest 4.3)
				announceFocus
				gradientSequences
				narrationContext={{
					measureName: "Inpatient falls per 1000 bed days",
					datasetContext: "Monthly trust-wide data",
					timeframe: "24 months",
				}}
			/>
		</ChartContainer>
	),
};

export const TimeBetweenMedicationErrors: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Time between medication administration errors (days) – T chart. Longer gaps indicate improvement; notable very long gap (month 21).",
			},
		},
		metricContext: { improvement: "up" },
	},
	render: () => (
		<ChartContainer
			title="Time Between Medication Errors"
			description="Days between events (T chart)"
			source="Synthetic"
		>
			<SPCChart
				data={series(medErrorGaps)}
				chartType="T"
				metricImprovement={ImprovementDirection.Up}
				enableRules
				announceFocus
				targets={Array(medErrorGaps.length).fill(10)} // Target 10 days between errors -> FAIL (latest 7 < 10)
				gradientSequences
				narrationContext={{
					measureName: "Days between medication errors",
					datasetContext: "Trust-wide events",
					timeframe: "24 events",
					additionalNote: "Improvement phase with long gap",
				}}
			/>
		</ChartContainer>
	),
};

export const CountBetweenPressureUlcers: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Count between hospital-acquired pressure ulcers – G chart. Increased counts showing improvement; short count (month 21) then recovery.",
			},
		},
		metricContext: { improvement: "up" },
	},
	render: () => (
		<ChartContainer
			title="Count Between Pressure Ulcers"
			description="Opportunities/units between events (G chart)"
			source="Synthetic"
		>
			<SPCChart
				data={series(pressureUlcerCounts)}
				chartType="G"
				metricImprovement={ImprovementDirection.Up}
				enableRules
				announceFocus
				targets={Array(pressureUlcerCounts.length).fill(14)} // Target 14 counts -> PASS (latest 23 >=14)
				gradientSequences
				narrationContext={{
					measureName: "Count between pressure ulcers",
					datasetContext: "Trust-wide events",
					timeframe: "24 events",
				}}
			/>
		</ChartContainer>
	),
};

export const RTTPatientsWaiting: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Indicative RTT % patients waiting less than 18 weeks. Higher is better.",
			},
		},
		metricContext: { improvement: "up" },
	},
	render: () => (
		<ChartContainer
			title="RTT % Patients Waiting < 18 weeks"
			description="(XmR chart)"
			source="Synthetic"
		>
			<SPCChart
				data={series(rttValues)}
				chartType="XmR"
				metricImprovement={ImprovementDirection.Up}
				enableRules
				unit="%"
				announceFocus
				targets={Array(rttValues.length).fill(80)} // Target 80% -> PASS (latest ~84%)
				gradientSequences
				narrationContext={{
					measureName: "RTT % Patients Waiting < 18 weeks",
					datasetContext: "National RTT Waiting List Target",
					timeframe: "25 events",
				}}
			/>
		</ChartContainer>
	),
};
