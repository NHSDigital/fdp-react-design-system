import React from "react";
import "./Tag.scss";
import { TagProps } from "./Tag.types";
import { mapTagProps } from "../../mapping/tag";

export const Tag: React.FC<TagProps> = ({
	text,
	html,
	children,
	color = "default",
	noBorder = false,
	closable = false,
	onClose,
	disabled = false,
	className,
	...props
}) => {
	const model = mapTagProps({ color, noBorder, closable, disabled, className });

	const handleClose = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (!disabled && onClose) {
			onClose();
		}
	};

	return (
		<strong className={model.classes} {...props}>
			{/* Content - children take precedence, then html, then text */}
			{children ? (
				children
			) : html ? (
				<span dangerouslySetInnerHTML={{ __html: html }} />
			) : (
				text
			)}

			{/* Close button */}
			{closable && (
				<button
					type="button"
					className="nhsuk-tag__close"
					onClick={handleClose}
					disabled={disabled}
					aria-label="Remove"
					title="Remove"
				>
					×
				</button>
			)}
		</strong>
	);
};
