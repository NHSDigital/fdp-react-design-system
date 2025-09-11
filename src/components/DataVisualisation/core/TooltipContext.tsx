import * as React from "react";
import { useScaleContext } from "./ScaleContext";
import { useVisibility } from "./VisibilityContext";

export interface TooltipDatum {
	seriesId: string;
	index: number; // index within series
	x: Date | string | number; // allow categorical values
	y: number;
	clientX: number; // scaled x position within plot area
	clientY: number; // scaled y position within plot area
}

export interface TooltipContextValue {
	focused: TooltipDatum | null;
	setFocused: (d: TooltipDatum | null) => void;
	/** All series points sharing the focused x (including focused point) when multiple series align. Length 0 when no focus, 1 when single. */
	aggregated: TooltipDatum[];
	/** Programmatic focus of nearest datum to given SVG plot coordinates (already in inner coordinate space). */
	focusNearest: (plotX: number, plotY: number) => void;
	/** Clear current focus */
	clear: () => void;
	/** Register series data for nearest-point lookup */
	registerSeries: (
		seriesId: string,
		data: { x: Date | string | number; y: number }[]
	) => void;
	unregisterSeries: (seriesId: string) => void;
	/** Move focus to next point in same series */
	focusNextPoint: () => void;
	/** Move focus to previous point in same series */
	focusPrevPoint: () => void;
	/** Cycle to next series at same index (if exists) */
	focusNextSeries: () => void;
	/** Cycle to previous series at same index (if exists) */
	focusPrevSeries: () => void;
	/** Jump to first point in current (or first) series */
	focusFirstPoint: () => void;
	/** Jump to last point in current (or first) series */
	focusLastPoint: () => void;
}

const TooltipContext = React.createContext<TooltipContextValue | null>(null);
export const useTooltipContext = () => React.useContext(TooltipContext);

interface TooltipProviderProps {
	children: React.ReactNode;
	/** Maximum pixel distance to accept a nearest match (otherwise focus cleared) */
	maxDistance?: number;
	/** Allow wrap-around when navigating past start/end of points or series */
	wrapAround?: boolean;
}

/** Shared tooltip / focus context: unifies pointer & keyboard focus of a single datum across chart primitives. */
export const TooltipProvider: React.FC<TooltipProviderProps> = ({
	children,
	maxDistance = 40,
	wrapAround = false,
}) => {
	const scaleCtx = useScaleContext();
	const visibility = useVisibility();
	const [focused, setFocused] = React.useState<TooltipDatum | null>(null);
	const seriesRef = React.useRef<
		Map<string, { x: Date | string | number; y: number }[]>
	>(new Map());
	const [aggregated, setAggregated] = React.useState<TooltipDatum[]>([]);

	const registerSeries = React.useCallback(
		(seriesId: string, data: { x: Date | string | number; y: number }[]) => {
			seriesRef.current.set(seriesId, data);
		},
		[]
	);
	const unregisterSeries = React.useCallback((seriesId: string) => {
		seriesRef.current.delete(seriesId);
	}, []);

	const focusNearest = React.useCallback(
		(plotX: number, plotY: number) => {
			if (!scaleCtx) return;
			const { xScale, yScale } = scaleCtx;
			let best: TooltipDatum | null = null;
			let bestDist = Infinity;
			seriesRef.current.forEach((data, sid) => {
				data.forEach((d, i) => {
					const px = xScale(d.x);
					const py = yScale(d.y);
					const dx = px - plotX;
					const dy = py - plotY;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < bestDist) {
						bestDist = dist;
						best = {
							seriesId: sid,
							index: i,
							x: d.x,
							y: d.y,
							clientX: px,
							clientY: py,
						};
					}
				});
			});
			if (best && bestDist <= maxDistance) setFocused(best);
			else setFocused(null);
		},
		[scaleCtx, maxDistance]
	);

	const clear = React.useCallback(() => setFocused(null), []);

	// Recompute aggregated aligned points whenever focused changes
	React.useEffect(() => {
		if (!focused) {
			setAggregated([]);
			return;
		}
		// Collect all points with identical x timestamp (exact match) across visible (registered) series
		if (!scaleCtx) return;
		const { xScale, yScale } = scaleCtx;
		const agg: TooltipDatum[] = [];
		seriesRef.current.forEach((data, sid) => {
			data.forEach((d, i) => {
				const match = ((): boolean => {
					if (focused.x instanceof Date && d.x instanceof Date)
						return d.x.getTime() === focused.x.getTime();
					return d.x === focused.x; // strict equality for non-dates
				})();
				if (match) {
					agg.push({
						seriesId: sid,
						index: i,
						x: d.x,
						y: d.y,
						clientX: xScale(d.x as any),
						clientY: yScale(d.y),
					});
				}
			});
		});
		// Sort by seriesId for stable output
		agg.sort((a, b) => a.seriesId.localeCompare(b.seriesId));
		setAggregated(agg);
	}, [focused, scaleCtx]);

	const focusRelativePoint = React.useCallback(
		(delta: 1 | -1) => {
			if (!focused) return;
			const data = seriesRef.current.get(focused.seriesId);
			if (!data) return;
			let nextIndex = focused.index + delta;
			if (nextIndex < 0 || nextIndex >= data.length) {
				if (!wrapAround) return;
				// wrap
				nextIndex = (nextIndex + data.length) % data.length;
			}
			const d = data[nextIndex];
			if (!scaleCtx) return;
			const { xScale, yScale } = scaleCtx;
			setFocused({
				seriesId: focused.seriesId,
				index: nextIndex,
				x: d.x,
				y: d.y,
				clientX: xScale(d.x),
				clientY: yScale(d.y),
			});
		},
		[focused, scaleCtx, wrapAround]
	);

	const focusSeriesAtIndex = React.useCallback( (seriesDelta: 1 | -1) => {
			let ids = Array.from(seriesRef.current.keys());
			// Skip hidden series (if visibility context present)
			if (visibility) ids = ids.filter((id) => !visibility.isHidden(id));
			if (ids.length === 0) return;
			if (!focused) {
				// pick first series first point
				const first = ids[0];
				const data = seriesRef.current.get(first);
				if (!data || !scaleCtx) return;
				const { xScale, yScale } = scaleCtx;
				const d = data[0];
				setFocused({
					seriesId: first,
					index: 0,
					x: d.x,
					y: d.y,
					clientX: xScale(d.x),
					clientY: yScale(d.y),
				});
				return;
			}
			const currentSeriesIdx = ids.indexOf(focused.seriesId);
			if (currentSeriesIdx === -1) return;
			let nextSeriesIdx = currentSeriesIdx + seriesDelta;
			if (nextSeriesIdx < 0 || nextSeriesIdx >= ids.length) {
				if (!wrapAround) return; // clamp
				nextSeriesIdx = (nextSeriesIdx + ids.length) % ids.length;
			}
			const nextSeriesId = ids[nextSeriesIdx];
			const nextData = seriesRef.current.get(nextSeriesId);
			if (!nextData || !scaleCtx) return;
			const idx = Math.min(focused.index, nextData.length - 1);
			const d = nextData[idx];
			const { xScale, yScale } = scaleCtx;
			setFocused({
				seriesId: nextSeriesId,
				index: idx,
				x: d.x,
				y: d.y,
				clientX: xScale(d.x),
				clientY: yScale(d.y),
			});
		},
		[focused, scaleCtx, wrapAround, visibility]
	);
	const focusFirstPoint = React.useCallback(() => {
		// Within current focused series; if none, pick first visible series
		let ids = Array.from(seriesRef.current.keys());
		if (visibility) ids = ids.filter((id) => !visibility.isHidden(id));
		if (ids.length === 0) return;
		const targetSeriesId = focused ? focused.seriesId : ids[0];
		const data = seriesRef.current.get(targetSeriesId);
		if (!data || data.length === 0 || !scaleCtx) return;
		const d = data[0];
		const { xScale, yScale } = scaleCtx;
		setFocused({
			seriesId: targetSeriesId,
			index: 0,
			x: d.x,
			y: d.y,
			clientX: xScale(d.x),
			clientY: yScale(d.y),
		});
	}, [focused, scaleCtx, visibility]);

	const focusLastPoint = React.useCallback(() => {
		let ids = Array.from(seriesRef.current.keys());
		if (visibility) ids = ids.filter((id) => !visibility.isHidden(id));
		if (ids.length === 0) return;
		const targetSeriesId = focused ? focused.seriesId : ids[0];
		const data = seriesRef.current.get(targetSeriesId);
		if (!data || data.length === 0 || !scaleCtx) return;
		const lastIndex = data.length - 1;
		const d = data[lastIndex];
		const { xScale, yScale } = scaleCtx;
		setFocused({
			seriesId: targetSeriesId,
			index: lastIndex,
			x: d.x,
			y: d.y,
			clientX: xScale(d.x),
			clientY: yScale(d.y),
		});
	}, [focused, scaleCtx, visibility]);

	const focusNextPoint = React.useCallback(
		() => focusRelativePoint(1),
		[focusRelativePoint]
	);
	const focusPrevPoint = React.useCallback(
		() => focusRelativePoint(-1),
		[focusRelativePoint]
	);
	const focusNextSeries = React.useCallback(
		() => focusSeriesAtIndex(1),
		[focusSeriesAtIndex]
	);
	const focusPrevSeries = React.useCallback(
		() => focusSeriesAtIndex(-1),
		[focusSeriesAtIndex]
	);

	const value: TooltipContextValue = React.useMemo(
		() => ({
			focused,
			setFocused,
			aggregated,
			focusNearest,
			clear,
			registerSeries,
			unregisterSeries,
			focusNextPoint,
			focusPrevPoint,
			focusNextSeries,
			focusPrevSeries,
			focusFirstPoint,
			focusLastPoint,
		}),
		[
			focused,
			aggregated,
			focusNearest,
			clear,
			registerSeries,
			unregisterSeries,
			focusNextPoint,
			focusPrevPoint,
			focusNextSeries,
			focusPrevSeries,
			focusFirstPoint,
			focusLastPoint,
		]
	);

	return (
		<TooltipContext.Provider value={value}>{children}</TooltipContext.Provider>
	);
};

export default TooltipContext;
