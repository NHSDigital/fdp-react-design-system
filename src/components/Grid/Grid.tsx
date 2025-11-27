import React from "react";
import classNames from "classnames";
import "./Grid.scss";
import {
	ContainerProps,
	RowProps,
	ColumnProps,
	GridProps,
} from "./Grid.types";

/**
 * Grid Container Component
 *
 * Provides a page-width container with responsive margins.
 * Based on NHS UK's width-container object.
 */
export const Container: React.FC<ContainerProps> = ({
	children,
	className,
	fluid = false,
	maxWidth,
	style,
	...props
}) => {
	const containerClasses = classNames(
		{
			"nhsuk-width-container": !fluid,
			"nhsuk-width-container-fluid": fluid,
		},
		className
	);

	const mergedStyle = maxWidth ? { maxWidth, ...(style || {}) } : style;

	return (
		<div className={containerClasses} style={mergedStyle} {...props}>
			{children}
		</div>
	);
};

/**
 * Grid Row Component
 *
 * Creates a grid row with negative margins to offset column gutters.
 * Based on NHS UK's grid-row object.
 */
export const Row: React.FC<RowProps> = ({
	children,
	className,
	style,
	align,
	rowGap,
	...props
}) => {
	const rowClasses = classNames(
		"nhsuk-grid-row",
		// Row-specific alignment class to avoid column flex styles
		align ? `nhsuk-grid-row-align-${align}` : undefined,
		className
	);

	return (
		<div className={rowClasses} style={style} {...props}>
			{children}
		</div>
	);
};

/**
 * Grid Column Component
 *
 * Creates responsive grid columns with CSS Grid layout.
 * Supports different widths at different breakpoints and grid positioning.
 */
import { GridWidth } from "./Grid.types";

export const Column: React.FC<ColumnProps> = ({
	children,
	width = GridWidth.Full,
	mobileWidth,
	tabletWidth,
	desktopWidth,
	start,
	className,
	forceWidth = false,
	style,
	align,
	...props
}) => {
	const columnClasses = classNames(
		{
			// Standard responsive grid columns
			[`nhsuk-grid-column-${width}`]: !forceWidth,
			// Utility classes that force width on all screen sizes
			[`nhsuk-u-${width}`]: forceWidth,
			// Responsive width overrides
			[`nhsuk-u-${mobileWidth}-mobile`]: !!mobileWidth,
			[`nhsuk-u-${tabletWidth}-tablet`]: !!tabletWidth,
			[`nhsuk-u-${desktopWidth}-desktop`]: !!desktopWidth,

			// Grid positioning
			[`nhsuk-grid-column-start-${start}`]: start && start >= 1 && start <= 7,
			// Alignment (robust string-based class to avoid enum identity issues)
			...(align ? { [`nhsuk-grid-align-${align}`]: true } : {}),
		},
		className
	);

	return (
		<div className={columnClasses} style={style} {...props}>
			{children}
		</div>
	);
};

/**
 * Grid Wrapper Component
 *
 * Convenience component that combines Container and Row.
 * Automatically wraps children in a Row unless the first child is already a Row component.
 */
export const Grid: React.FC<GridProps> = ({
	children,
	className,
	style,
	rowGap = 8,
	...props
}) => {
	const childrenArray = React.Children.toArray(children);
	const firstChild = childrenArray[0];

	// Check if the first child is a Row component
	const hasRowAsFirstChild =
		React.isValidElement(firstChild) &&
		(firstChild.type === Row ||
			(typeof firstChild.props === "object" &&
				firstChild.props &&
				"className" in firstChild.props &&
				typeof firstChild.props.className === "string" &&
				firstChild.props.className.includes("nhsuk-grid-row")));

	// Normalise gap to CSS length
	const gapValue = typeof rowGap === "number" ? `${rowGap}px` : rowGap;

	// If children are Rows, inject spacing between them unless Row rowGap overrides
	let content: React.ReactNode = children;
	if (hasRowAsFirstChild) {
		content = childrenArray.map((child, idx) => {
			if (!React.isValidElement(child)) return child;
			const el = child as React.ReactElement<any>;
			const propsAny: any = el.props || {};
			// Only target elements that look like Rows (by class name) to avoid touching arbitrary nodes
			const classNameStr = typeof propsAny.className === "string" ? (propsAny.className as string) : "";
			const isRowLike = el.type === Row || classNameStr.includes("nhsuk-grid-row");
			if (!isRowLike) return child;

			// Respect per-row override if provided
			const rowSpecificGap = propsAny.rowGap as undefined | number | string;
			const resolvedGap = rowSpecificGap !== undefined
				? (typeof rowSpecificGap === "number" ? `${rowSpecificGap}px` : rowSpecificGap)
				: gapValue;

			// No top margin on the first row
			const marginTop = idx === 0 ? undefined : resolvedGap;
			if (!marginTop) return child;

			const mergedStyle = { ...(propsAny.style || {}), marginTop } as React.CSSProperties;
			return React.cloneElement(el, { style: mergedStyle });
		});
	} else {
		// Single implicit Row wrapper: pass gap as row style
		const implicitRowStyle = { marginTop: undefined } as React.CSSProperties; // first row, no top margin
		content = <Row style={implicitRowStyle}>{children}</Row>;
	}

	return (
		<Container className={className} style={style} {...props}>
			{content}
		</Container>
	);
};
