import { AssuranceIcon, VariationIcon } from "./types";

// Hierarchical UI row shape consumed by SPCChart and overlays, mapped from v2 SpcRowV2
export interface EngineRowUI {
	data: {
		value: number | null;
		ghost: boolean;
	};
	partition: {
		id: number;
	};
	limits: {
		mean: number | null;
		ucl: number | null;
		lcl: number | null;
		oneSigma: { upper: number | null; lower: number | null };
		twoSigma: { upper: number | null; lower: number | null };
	};
	rules: {
		singlePoint: { up: boolean; down: boolean };
		twoOfThree: { up: boolean; down: boolean };
		fourOfFive: { up: boolean; down: boolean };
		shift: { up: boolean; down: boolean };
		trend: { up: boolean; down: boolean };
	};
	classification: {
		variation: VariationIcon;
		neutralSpecialCauseValue: number | null;
		assurance?: AssuranceIcon;
	};
	// Optional target (passed through when available)
	target?: number | null;
}

export type SPCSignalFocusInfo = {
	index: number;
	x: Date | string | number;
	y: number;
	row: EngineRowUI;
	rules: (string | number)[];
};
