import * as React from "react";
import { useNhsFdpBreakpoints } from "../../../hooks/useBreakpoints";
import type {
	WorkflowBreakpoint,
	WorkflowPaneConfig,
} from "../WorkflowSplitView.types";

export function useWorkflowLayout<T>(args: {
	step: T | undefined;
	index: number;
	layoutForStep?: (a: {
		step: T;
		index: number;
		breakpoint: WorkflowBreakpoint;
	}) => WorkflowPaneConfig;
}) {
	const { up } = useNhsFdpBreakpoints();
	const [hydrated, setHydrated] = React.useState(false);
	React.useEffect(() => setHydrated(true), []);

	const isTablet = hydrated && up("medium") && !up("xlarge");
	const isDesktop = hydrated && up("xlarge");
	const breakpoint: WorkflowBreakpoint = isDesktop
		? "desktop"
		: isTablet
			? "tablet"
			: "mobile";

	const paneConfig: WorkflowPaneConfig = React.useMemo(() => {
		if (!args.step || !args.layoutForStep) {
			// Defaults: mobile=cards (1 pane, no navs), tablet=2 panes (primary nav + content), desktop=3 (primary nav + content + secondary if exists)
			return breakpoint === "mobile"
				? { panes: 1, showPrimaryNav: false, showSecondaryNav: false }
				: breakpoint === "tablet"
					? { panes: 2, showPrimaryNav: true, showSecondaryNav: false }
					: { panes: 3, showPrimaryNav: true, showSecondaryNav: true };
		}
		try {
			return (
				args.layoutForStep({
					step: args.step,
					index: args.index,
					breakpoint,
				}) || {}
			);
		} catch {
			return {};
		}
	}, [args.step, args.index, args.layoutForStep, breakpoint]);

	return { hydrated, breakpoint, isTablet, isDesktop, paneConfig };
}
