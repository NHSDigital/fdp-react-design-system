// Lightweight adapter to build v2 rows and visual categories in one call.
// This helps migrate SPCChart away from legacy engine dependencies.

import { buildSpcV26a, buildSpcV26aWithVisuals } from "./engine";
import { SpcVisualCategory } from "./postprocess/visualCategories";
import { BuildArgsV2, SpcResultV2 } from "./types";

export interface BuildWithVisualsResult extends SpcResultV2 {
	visuals: SpcVisualCategory[];
}

export function buildWithVisuals(args: BuildArgsV2): BuildWithVisualsResult {
	const { rows } = buildSpcV26a(args);
	// Default visuals derived from engine output without window overrides
	const base = buildSpcV26aWithVisuals(args);
	return { rows, visuals: base.visuals };
}

export default { buildWithVisuals };
