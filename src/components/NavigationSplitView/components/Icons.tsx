import * as React from "react";

export const ChevronLeftIcon: React.FC<{ className?: string }> = ({
	className,
}) => (
	<svg
		className={className}
		width="16"
		height="16"
		viewBox="0 0 16 16"
		aria-hidden="true"
		focusable="false"
	>
		<path
			fill="currentColor"
			d="M10.7 3.3a1 1 0 0 1 0 1.4L7.41 8l3.3 3.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 0Z"
		/>
	</svg>
);

export const ChevronRightIcon: React.FC<{ className?: string }> = ({
	className,
}) => (
	<svg
		className={className}
		width="16"
		height="16"
		viewBox="0 0 16 16"
		aria-hidden="true"
		focusable="false"
	>
		<path
			fill="currentColor"
			d="M5.3 12.7a1 1 0 0 1 0-1.4L8.59 8l-3.3-3.3a1 1 0 0 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42 0Z"
		/>
	</svg>
);
