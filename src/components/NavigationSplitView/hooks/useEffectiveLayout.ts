import * as React from "react";
import { NavigationSplitLayoutMode } from "../NavigationSplitView.types";
import { useNhsFdpBreakpoints } from "../../../hooks/useBreakpoints";

export function useEffectiveLayout(
	forceLayout: NavigationSplitLayoutMode | undefined,
	autoEnableThirdColumn: boolean,
	hasSecondary: boolean
) {
	const { up } = useNhsFdpBreakpoints();
	const [hydrated, setHydrated] = React.useState(false);
	React.useEffect(() => setHydrated(true), []);
	const isAtLeastMedium = hydrated && up("medium");
	const isAtLeastXlarge = hydrated && up("xlarge");

	let effectiveLayout: NavigationSplitLayoutMode;
	if (forceLayout) effectiveLayout = forceLayout;
	else if (isAtLeastMedium) effectiveLayout = "two-column";
	else effectiveLayout = "list";

	if (
		!forceLayout &&
		autoEnableThirdColumn &&
		hasSecondary &&
		isAtLeastXlarge
	) {
		effectiveLayout = "three-column";
	}

	return { effectiveLayout, hydrated, isAtLeastMedium, isAtLeastXlarge };
}
