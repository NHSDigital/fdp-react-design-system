import * as React from "react";
import {
  AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX,
  AXIS_Y_ZERO_BREAK_DEFAULT_EXTRA_CLEARANCE_PX,
  AXIS_Y_ZERO_BREAK_MIN_GAP_PX,
} from "../../../Axis/Axis.tokens";

/**
 * Decide if the y-axis zero break should be shown and compute clamped slot and total reserved pixels.
 * - Preserves true y-domain (range-only lift)
 * - Clamps reserved space relative to inner height to avoid dominating short charts
 */
export function useZeroAxisBreak(
  yDomain: [number, number] | undefined,
  chartHeight: number | undefined,
  options?: { maxFraction?: number }
) {
  const show = React.useMemo(() => {
    if (!yDomain || yDomain.length < 2) return false;
    const min = Math.min(yDomain[0], yDomain[1]);
    const max = Math.max(yDomain[0], yDomain[1]);
    return !(0 >= min && 0 <= max);
  }, [yDomain]);

  const { slotPx, totalReservedPx } = React.useMemo(() => {
    if (!show) return { slotPx: 0, totalReservedPx: 0 };
    const height = chartHeight ?? 260;
    const innerHeightApprox = height - (12 + 48); // ChartRoot top/bottom margins

    const requestedSlot = AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX;
    const requestedExtra = AXIS_Y_ZERO_BREAK_DEFAULT_EXTRA_CLEARANCE_PX;
    const requestedTotal = requestedSlot + requestedExtra;
    const maxFraction = options?.maxFraction ?? 0.35;

    const maxTotal = Math.max(
      AXIS_Y_ZERO_BREAK_MIN_GAP_PX,
      Math.floor(innerHeightApprox * maxFraction)
    );
    const totalReservedPx = Math.min(requestedTotal, maxTotal);
    const slotPx = Math.min(requestedSlot, totalReservedPx);

    return { slotPx, totalReservedPx };
  }, [show, chartHeight, options?.maxFraction]);

  return { show, slotPx, totalReservedPx } as const;
}
