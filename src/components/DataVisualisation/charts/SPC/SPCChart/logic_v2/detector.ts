import { SpcRowV2 } from "./types";
import { isNumber } from "./utils";

export interface DetectorConfig {
	shiftPoints: number;
	trendPoints: number;
	twoSigmaIncludeAboveThree?: boolean;
	enableFourOfFiveRule?: boolean;
}

export function detectRulesInPartition(rows: SpcRowV2[], cfg: DetectorConfig) {
	const idxs = rows
		.map((_, i) => i)
		.filter((i) => !rows[i].ghost && isNumber(rows[i].value));
	const get = (i: number) => rows[i];
	const shiftN = cfg.shiftPoints;
	const trendN = cfg.trendPoints;

	// Shift
	let runHigh: number[] = [];
	let runLow: number[] = [];
	for (const i of idxs) {
		const r = get(i);
		if (!isNumber(r.mean) || !isNumber(r.value)) {
			runHigh = [];
			runLow = [];
			continue;
		}
		if (r.value > r.mean) {
			runHigh.push(i);
			runLow = [];
		} else if (r.value < r.mean) {
			runLow.push(i);
			runHigh = [];
		} else {
			runHigh = [];
			runLow = [];
		}
		if (runHigh.length >= shiftN)
			for (const j of runHigh) get(j).shiftUp = true;
		if (runLow.length >= shiftN)
			for (const j of runLow) get(j).shiftDown = true;
	}

	// Two-of-three beyond 2σ (side-consistent)
	for (let w = 0; w <= idxs.length - 3; w++) {
		const win = idxs.slice(w, w + 3);
		const trip = win.map(get);
		if (!trip.every((r) => isNumber(r.value) && isNumber(r.mean))) continue;
		const mean = trip[0].mean!;
		const allHigh = trip.every((r) => r.value! > mean);
		const allLow = trip.every((r) => r.value! < mean);
		if (!allHigh && !allLow) continue;
		const u2 = trip[0].upperTwoSigma ?? Infinity;
		const l2 = trip[0].lowerTwoSigma ?? -Infinity;
		const u3 = trip[0].upperProcessLimit ?? Infinity;
		const l3 = trip[0].lowerProcessLimit ?? -Infinity;
		const highs = trip.filter((r) => cfg.twoSigmaIncludeAboveThree ? r.value! > u2 : (r.value! > u2 && r.value! <= u3));
		const lows = trip.filter((r) => cfg.twoSigmaIncludeAboveThree ? r.value! < l2 : (r.value! < l2 && r.value! >= l3));
		if (allHigh && highs.length >= 2)
			highs.forEach((r) => (r.twoSigmaUp = true));
		if (allLow && lows.length >= 2)
			lows.forEach((r) => (r.twoSigmaDown = true));
	}

	// Four-of-five beyond 1σ (side-consistent, optional early-warning)
	if (cfg.enableFourOfFiveRule) {
		for (let w = 0; w <= idxs.length - 5; w++) {
			const win = idxs.slice(w, w + 5);
			const quint = win.map(get);
			if (!quint.every((r) => isNumber(r.value) && isNumber(r.mean))) continue;
			const mean = quint[0].mean!;
			const allHigh = quint.every((r) => r.value! > mean);
			const allLow = quint.every((r) => r.value! < mean);
			if (!allHigh && !allLow) continue;
			const u1 = quint[0].upperOneSigma ?? Infinity;
			const l1 = quint[0].lowerOneSigma ?? -Infinity;
			const highs = quint.filter((r) => r.value! > u1);
			const lows = quint.filter((r) => r.value! < l1);
			if (allHigh && highs.length >= 4) highs.forEach((r) => (r.fourOfFiveUp = true));
			if (allLow && lows.length >= 4) lows.forEach((r) => (r.fourOfFiveDown = true));
		}
	}

	// Trend (strict monotonic inc/dec)
	for (let w = 0; w <= idxs.length - trendN; w++) {
		const win = idxs.slice(w, w + trendN);
		const seq = win.map(get);
		if (!seq.every((r) => isNumber(r.value))) continue;
		let inc = true;
		let dec = true;
		for (let k = 1; k < seq.length; k++) {
			if (!(seq[k].value! > seq[k - 1].value!)) inc = false;
			if (!(seq[k].value! < seq[k - 1].value!)) dec = false;
			if (!inc && !dec) break;
		}
		if (inc) win.forEach((i) => (get(i).trendUp = true));
		if (dec) win.forEach((i) => (get(i).trendDown = true));
	}
}
