import React from "react";
import "./Fieldset.scss";
import { FieldsetProps } from "./Fieldset.types";
import { mapFieldsetProps } from "../../mapping/fieldset";

export const Fieldset: React.FC<FieldsetProps> = ({
	children,
	legend,
	className,
	describedBy,
	...fieldsetProps
}) => {
	const model = mapFieldsetProps({
		className,
		describedBy,
		legend: legend
			? {
					size: legend.size,
					className: legend.className,
					isPageHeading: legend.isPageHeading,
				}
			: undefined,
	});

	const renderLegendContent = () => {
		const content = legend?.html ? (
			<span dangerouslySetInnerHTML={{ __html: legend.html }} />
		) : (
			legend?.text
		);

		if (model.legendIsPageHeading) {
			return <h1 className="nhsuk-fieldset__heading">{content}</h1>;
		}

		return content;
	};

	return (
		<fieldset
			className={model.fieldsetClasses}
			aria-describedby={model.describedBy}
			{...fieldsetProps}
		>
			{legend && (legend.text || legend.html) && (
				<legend className={model.legendClasses}>{renderLegendContent()}</legend>
			)}
			{children}
		</fieldset>
	);
};
