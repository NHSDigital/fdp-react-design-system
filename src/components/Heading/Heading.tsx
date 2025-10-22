import React, { createElement } from "react";
import "./Heading.scss";
import { HeadingProps } from "./Heading.types";
import { mapHeadingProps } from "../../mapping/heading";

/**
 * A reusable Heading component that abstracts heading level logic and provides consistent styling.
 * Separates semantic meaning (level) from visual appearance (size).
 *
 * If level is not provided, it will be automatically determined from the size prop:
 * - xxl/xl → h1
 * - l → h2
 * - m → h3
 * - s → h4
 * - xs → h5
 *
 * @example
 * <Heading level={1} size="xl">Page Title</Heading>
 * <Heading level={2} size="l" text="Section Title" />
 * <Heading size="xl" text="Auto h1 from size" />
 * <Heading size="m" text="Auto h3 from size" />
 * <Heading level={2} text="Custom Spacing" marginBottom="32px" />
 */
export const Heading: React.FC<HeadingProps> = ({
	level,
	className,
	text,
	html,
	children,
	size,
	marginBottom,
	...rest
}) => {
	const model = mapHeadingProps({ level, size, className, marginBottom });
	const content =
		children ||
		(html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text);
	return createElement(
		model.tag,
		{ className: model.classes, style: model.style, ...rest },
		content
	);
};
