/**
 * Button variant options following NHS design guidelines
 */
export enum ButtonVariant {
	/** Green button for main actions */
	Primary = "primary",
	/** Blue outlined button for secondary actions */
	Secondary = "secondary",
	/** White button for use on colored backgrounds */
	Reverse = "reverse",
	/** Orange/red button for warning actions */
	Warning = "warning",
	/** Blue button for authentication */
	Login = "login",
	/** Metric-inspired button: card-like with accent bar */
	Metric = "metric",
}

/**
 * Button size options
 */
export enum ButtonSize {
	/** Compact button for tight spaces */
	Small = "small",
	/** Standard button size */
	Default = "default",
	/** Larger button for emphasis */
	Large = "large",
}

/**
 * Backward-compatible prop typing that accepts either enum values or legacy string literals
 * Useful while migrating call sites to use enums explicitly.
 */
export type ButtonVariantLike =
	| ButtonVariant
	| "primary"
	| "secondary"
	| "reverse"
	| "warning"
	| "login"
	| "metric"
	| "metric-blue"
	| "metric-green"
	| "metric-warning";

export type ButtonSizeLike = ButtonSize | "small" | "default" | "large";
