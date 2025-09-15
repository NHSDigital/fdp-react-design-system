import { ImprovementDirection } from "../../types";

export const healthcareDatasets = [
	{
		name: "ED 4h compliance (%)",
		direction: "up" as const,
		unit: "%",
		description: "Improvement shift after month 12; higher is better.",
		values: [
			69, 70, 68, 71, 70, 69, 70, 69, 71, 70, 68, 69, 78, 79, 80, 81, 79, 78,
			82, 81, 80, 79, 81, 80,
		],
	},
	{
		name: "Average Length of Stay (days)",
		direction: "down" as const,
		unit: "days",
		description:
			"Gradual improvement with downward shift after month 12; lower is better.",
		values: [
			7.4, 7.5, 7.6, 7.3, 7.4, 7.5, 7.2, 7.3, 7.1, 7.2, 7.0, 7.1, 6.8, 6.7, 6.6,
			6.5, 6.4, 6.3, 6.2, 6.1, 6.2, 6.0, 6.1, 6.0,
		],
	},
	{
		name: "30-day Readmission rate (%)",
		direction: "down" as const,
		unit: "%",
		description:
			"Concern cluster (two-of-three) and an elevated outlier; lower is better.",
		values: [
			9.1, 9.0, 9.2, 9.3, 9.1, 9.0, 9.2, 9.3, 9.1, 9.0, 9.2, 9.1, 9.4, 9.6, 9.5,
			9.2, 9.3, 9.1, 9.0, 9.2, 9.1, 9.0, 9.1, 9.0,
		],
	},
	{
		name: "Hand hygiene compliance (%)",
		direction: "up" as const,
		unit: "%",
		description:
			"High-performing shift then a single concern dip; higher is better.",
		values: [
			86, 87, 85, 88, 87, 86, 87, 88, 86, 87, 88, 87, 92, 93, 94, 92, 93, 94,
			93, 92, 85, 93, 94, 93,
		],
	},
	{
		name: "Falls per 1000 bed days",
		direction: "down" as const,
		unit: "",
		description:
			"Downward trend with one special-cause high point; lower is better.",
		values: [
			5.8, 5.9, 5.7, 5.8, 5.9, 5.6, 5.7, 5.5, 5.6, 5.4, 5.5, 5.3, 5.2, 5.1, 5.0,
			4.9, 5.6, 4.8, 4.7, 4.6, 4.5, 4.4, 4.5, 4.3,
		],
	},
	{
		name: "RTT % patients waiting < 18 weeks",
		direction: "up" as const,
		unit: "%",
		description: "Indicative RTT waiting list performance; higher is better.",
		values: [
			76, 79.7, 76.2, 74.4, 74.5, 74.2, 75.2, 75.8, 74.9, 75.0, 74.8, 74.9, 79,
			81, 80.7, 81.2, 81, 80.8, 81, 81.3, 81.6, 82, 83.2, 84.5, 84,
		],
	},
] as const;

export type HealthcareDataset = (typeof healthcareDatasets)[number];

export function datasetOptions(): string[] {
	return healthcareDatasets.map((d) => d.name);
}

export function findDataset(name?: string): HealthcareDataset {
	const def = healthcareDatasets.find((d) => d.name === name);
	return def ?? healthcareDatasets[0];
}

export function months(count: number, startISO = "2023-01-01"): Date[] {
	const start = new Date(startISO + "T00:00:00Z");
	return Array.from(
		{ length: count },
		(_, i) => new Date(start.getFullYear(), start.getMonth() + i, 1)
	);
}

export function toV2Dir(key: "up" | "down"): ImprovementDirection {
	return key === "up" ? ImprovementDirection.Up : ImprovementDirection.Down;
}
