/**
 * Default visual gap for the y-axis zero break indicator (px).
 * This is the size of the slot reserved above the x-axis line for the zig-zag.
 */
export declare const AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX = 16;
/** Minimum gap enforced for the break area (px). Prevents degenerate rendering. */
export declare const AXIS_Y_ZERO_BREAK_MIN_GAP_PX = 6;
/**
 * Default extra clearance above the break gap reserved to keep the first tick/gridline from crowding the zig-zag (px).
 * Used when a consumer lifts the plotting range (e.g., LineScalesProvider.yBottomGapPx).
 */
export declare const AXIS_Y_ZERO_BREAK_DEFAULT_EXTRA_CLEARANCE_PX = 16;
/** Default zig-zag vertical amplitude per half-step (px). */
export declare const AXIS_ZIGZAG_DEFAULT_AMPLITUDE_PX = 4;
/** Default number of zig-zag cycles (each cycle consists of two diagonal segments). */
export declare const AXIS_ZIGZAG_DEFAULT_CYCLES = 6;
/** Default horizontal pixel step for each zig-zag segment. */
export declare const AXIS_ZIGZAG_DEFAULT_STEP_X_PX = 3;
/** Default desired height is undefined; when omitted, height is derived from cycles and amplitude. */
export declare const AXIS_ZIGZAG_DEFAULT_HEIGHT_PX: number | undefined;
