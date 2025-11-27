import type { SPCDatum } from "../SPCChart.props";

/** Compute y-domain given data, optional limits, flags, and targets. */
export function computeYDomain(
	data: SPCDatum[],
	limits: {
		mean?: number | null;
		ucl?: number | null;
		lcl?: number | null;
		onePos?: number | null;
		oneNeg?: number | null;
		twoPos?: number | null;
		twoNeg?: number | null;
	},
	flags: {
		alwaysShowZeroY: boolean;
		alwaysShowHundredY: boolean;
		percentScale: boolean;
	},
	targets?: Array<number | null | undefined> | null
): [number, number] | undefined {
	if (flags.percentScale) {
		const allVals = data.map((d) => d.y);
		const overMax = Math.max(100, ...allVals);
		const underMin = Math.min(0, ...allVals);
		return [underMin < 0 ? underMin : 0, overMax > 100 ? overMax : 100];
	}

	const base: number[] = data.map((d) => d.y);
	const add = (v: number | null | undefined) => {
		if (v != null) base.push(v);
	};
	
	add(limits.mean);
	add(limits.ucl);
	add(limits.lcl);
	add(limits.onePos);
	add(limits.oneNeg);
	add(limits.twoPos);
	add(limits.twoNeg);

	if (targets && targets.length) {
		for (const t of targets)
			if (typeof t === "number" && !isNaN(t)) base.push(t);
	}
	if (!base.length) return undefined;
	let min = Math.min(...base);
	let max = Math.max(...base);
	if (flags.alwaysShowZeroY) min = Math.min(0, min);
	if (flags.alwaysShowHundredY) max = Math.max(100, max);
	return [min, max];
}
