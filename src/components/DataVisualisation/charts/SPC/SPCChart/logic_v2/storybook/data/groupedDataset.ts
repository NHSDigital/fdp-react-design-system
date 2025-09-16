import grouped from "../../../test-data/Test Data.grouped.json";
import { ImprovementDirection } from "../../types";

export type Group = {
	metric: string;
	improvement?: "up" | "down" | "neither" | "";
	data: { date: string; value: number; colour: string; judgement: string }[];
};

export function getGroups(): Group[] {
	return (grouped as unknown as Group[]) || [];
}

export function getMetricOptions(): string[] {
	return getGroups().map((g) => g.metric);
}

export function findGroup(metric?: string): Group | undefined {
	const groups = getGroups();
	if (!metric) return groups[0];
	return groups.find((g) => g.metric === metric) || groups[0];
}

export function toV2ImprovementDir(
	key: "neither" | "up" | "down" | undefined
): ImprovementDirection {
	switch (key) {
		case "up":
			return ImprovementDirection.Up;
		case "down":
			return ImprovementDirection.Down;
		default:
			return ImprovementDirection.Neither;
	}
}

export function normaliseSeries(group: Group) {
	const data = group.data.map(({ date, value }) => ({
		x: new Date(date),
		value,
	}));
	return { data };
}

// Certain metrics in the dataset encode a recalculation example; expose a helper
export function deriveBaselines(
	group: Group,
	length: number
): (boolean | null | undefined)[] | undefined {
	if (
		group.metric === "Recalculations - Recalculated" || group.metric === "Baselines - Recalculated" ||
		group.metric.startsWith("Special cause crossing recalculations")
	
	) {
		const arr = new Array(length).fill(undefined);
		const idx = Math.min(15, Math.max(0, length - 1));
		arr[idx] = true;
		return arr;
	}
	return undefined;
}
