import type { Meta, StoryObj } from "@storybook/react";
import { MetricCard } from "./MetricCard";
import { Grid, Row, Column, GridWidth } from "../../../Grid";

const meta: Meta<typeof MetricCard> = {
	title: "Data Dashboard/MetricCard",
	component: MetricCard,
	parameters: {
		docs: {
			description: {
				component:
					"Modern KPI card with DataViz-inspired styling. Features left border accents, subtle gradients, and comprehensive delta indicators for effective data presentation.",
			},
		},
	},
	argTypes: {
		variant: {
			control: "select",
			options: [
				"default",
				"primary",
				"secondary",
				"accent",
				"success",
				"warning",
				"error",
			],
			description: "Visual variant using DataViz color palette",
		},
		status: {
			control: "select",
			options: ["neutral", "positive", "negative", "warning"],
			description: "Status affects delta indicator styling",
		},
	},
};
export default meta;

type Story = StoryObj<typeof MetricCard>;

export const Basic: Story = {
	args: {
		label: "Total admissions",
		value: 1284,
		variant: "primary",
	},
};

export const WithUnit: Story = {
	args: {
		label: "Bed occupancy",
		value: 78.3,
		unit: "%",
		variant: "secondary",
		metadata: "Latest period: Aug 2025",
	},
};

export const WithPositiveDelta: Story = {
	args: {
		label: "Discharges",
		value: 542,
		delta: { value: 1.6, isPercent: true, period: "this month" },
		status: "positive",
		variant: "success",
		subtitle: "NHS providers",
	},
};

export const WithNegativeDelta: Story = {
	args: {
		label: "Wait time (mins)",
		value: 42,
		delta: { value: -5.7, isPercent: true, period: "this year" },
		status: "negative",
		variant: "warning",
	},
};

export const WithTargetStatus: Story = {
	args: {
		label: "Target status",
		value: "Below",
		subtitle: "Target: 65.0%",
		delta: { value: -3.7, isPercent: true },
		status: "warning",
		variant: "accent",
		metadata: "Performance below target",
	},
};

export const WithInvertedDelta: Story = {
	args: {
		label: "Infection rate",
		value: 1.2,
		unit: "%",
		delta: {
			value: -0.2,
			isPercent: true,
			invert: true,
			period: "vs last month",
		},
		status: "positive",
		variant: "success",
	},
};

export const Loading: Story = {
	args: {
		label: "Referrals",
		value: 0,
		loading: true,
		variant: "primary",
	},
};

export const Error: Story = {
	args: {
		label: "Referrals",
		value: 0,
		error: "Failed to load data",
		variant: "error",
	},
};

// Recreate the design concept from the image
export const DesignConcept: Story = {
	render: () => (
		<Grid>
			<Row>
				<Column width={GridWidth.OneThird}>
					<MetricCard
						label="National Average"
						value="61.3%"
						metadata="Latest period: Aug 2025"
						delta={{ value: 1.6, isPercent: true, period: "this month" }}
						status="positive"
						variant="primary"
						subtitle="Down 5.7% this year"
					/>
				</Column>
				<Column width={GridWidth.OneThird}>
					<MetricCard
						label="Total Trusts"
						value={117}
						subtitle="NHS providers"
						variant="secondary"
						metadata="Acute & specialist trusts"
					/>
				</Column>
				<Column width={GridWidth.OneThird}>
					<MetricCard
						label="Target status"
						value="Below"
						subtitle="Target: 65.0%"
						delta={{ value: -3.7, isPercent: true }}
						status="warning"
						variant="accent"
						metadata="Performance below target"
					/>
				</Column>
			</Row>
		</Grid>
	),
};

export const AllVariants: Story = {
	render: () => (
		<Grid>
			<Row>
				<Column width={GridWidth.OneQuarter}>
					<MetricCard
						label="Primary"
						value={1284}
						variant="primary"
						delta={{ value: 2.4, isPercent: true }}
						status="positive"
					/>
				</Column>
				<Column width={GridWidth.OneQuarter}>
					<MetricCard
						label="Secondary"
						value="83.2%"
						variant="secondary"
						delta={{ value: -1.2, isPercent: true }}
						status="negative"
					/>
				</Column>
				<Column width={GridWidth.OneQuarter}>
					<MetricCard
						label="Accent"
						value={542}
						variant="accent"
						delta={{ value: 0.8, isPercent: true }}
						status="positive"
					/>
				</Column>
				<Column width={GridWidth.OneQuarter}>
					<MetricCard
						label="Success"
						value="42 mins"
						variant="success"
						delta={{ value: -3.5, isPercent: true }}
						status="positive"
					/>
				</Column>
			</Row>
			<Row style={{ marginTop: "2rem" }}>
				<Column width={GridWidth.OneQuarter}>
					<MetricCard
						label="Warning"
						value={98}
						variant="warning"
						delta={{ value: 5.2, isPercent: true }}
						status="warning"
					/>
				</Column>
				<Column width={GridWidth.OneQuarter}>
					<MetricCard
						label="Error"
						value="High"
						variant="error"
						delta={{ value: 12.3, isPercent: true }}
						status="negative"
					/>
				</Column>
				<Column width={GridWidth.OneQuarter}>
					<MetricCard
						label="Default"
						value={1456}
						variant="default"
						delta={{ value: 0 }}
						status="neutral"
					/>
				</Column>
				<Column width={GridWidth.OneQuarter}>
					<MetricCard
						label="Loading"
						value={0}
						loading={true}
						variant="primary"
					/>
				</Column>
			</Row>
		</Grid>
	),
};

export const GridLayout: Story = {
	render: () => (
		<Grid>
			<Row>
				<Column width="one-quarter">
					<MetricCard
						label="Admissions"
						value={1284}
						variant="primary"
						metadata="Daily average"
					/>
				</Column>
				<Column width="one-quarter">
					<MetricCard
						label="Bed occupancy"
						value={83.2}
						unit="%"
						variant="secondary"
						delta={{ value: 2.1, isPercent: true, period: "vs target" }}
						status="positive"
					/>
				</Column>
				<Column width="one-quarter">
					<MetricCard
						label="Discharges"
						value={542}
						variant="accent"
						delta={{ value: 34, isPercent: true, period: "this week" }}
						status="positive"
					/>
				</Column>
				<Column width="one-quarter">
					<MetricCard
						label="Wait time"
						value={42}
						unit="mins"
						variant="warning"
						delta={{ value: 5, period: "vs last week" }}
						status="negative"
					/>
				</Column>
			</Row>
			<Row style={{ marginTop: "2rem" }}>
				<Column width="one-quarter">
					<MetricCard
						label="Infection rate"
						value={1.2}
						unit="%"
						variant="success"
						delta={{
							value: -0.2,
							isPercent: true,
							invert: true,
							period: "this month",
						}}
						status="positive"
					/>
				</Column>
				<Column width="one-quarter">
					<MetricCard
						label="Staff satisfaction"
						value={4.2}
						unit="/5"
						variant="primary"
						subtitle="Quarterly survey"
						delta={{ value: 0.3, period: "vs Q1" }}
						status="positive"
					/>
				</Column>
				<Column width="one-quarter">
					<MetricCard
						label="Revenue"
						value="£2.4M"
						variant="secondary"
						subtitle="Monthly total"
						delta={{ value: -2.8, isPercent: true, period: "vs budget" }}
						status="negative"
					/>
				</Column>
				<Column width="one-quarter">
					<MetricCard
						label="Efficiency"
						value={94.8}
						unit="%"
						variant="success"
						delta={{ value: 1.4, isPercent: true, period: "this quarter" }}
						status="positive"
					/>
				</Column>
			</Row>
		</Grid>
	),
};
