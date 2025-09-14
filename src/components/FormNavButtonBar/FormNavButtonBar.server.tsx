import React from "react";
import classNames from "classnames";
import { Row, Column, GridWidth, ColumnAlign } from "../Grid";
import ButtonServer from "../Button/Button.server";
import type {
	FormNavButtonBarProps,
	NavButtonConfig,
} from "./FormNavButtonBar.types";
import "./FormNavButtonBar.scss";

function renderButton(cfg: NavButtonConfig | undefined, defaultLabel: string) {
	if (!cfg || cfg.hidden) return null;
	const { href, label, variant, disabled, type } = cfg;
	const common = { variant, disabled } as any;
	if (href)
		return (
			<ButtonServer href={href} {...common}>
				{label || defaultLabel}
			</ButtonServer>
		);
	return (
		<ButtonServer type={type === "button" ? "button" : "submit"} {...common}>
			{label || defaultLabel}
		</ButtonServer>
	);
}

export const FormNavButtonBar: React.FC<FormNavButtonBarProps> = ({
	back,
	startAgain,
	next,
	flipOrderOnMobile = true,
	className,
}) => {
	// Order: Desktop → [Back][Start again][Next]
	// Mobile (when flipOrderOnMobile) → Next first visually
	const showBack = !!back && !back.hidden;
	const showStartAgain = !!startAgain && !startAgain.hidden;
	const showNext = !!next && !next.hidden;
	const visibleCount = [showBack, showStartAgain, showNext].filter(Boolean).length;
	const widthForTwo = GridWidth.OneHalf;
	const widthForThree = GridWidth.OneThird;
	return (
		<Row
			className={classNames("nhs-form-nav", className, {
				"nhs-form-nav--flip-mobile": flipOrderOnMobile,
			})}
		>
			{showBack && (
				<Column width={visibleCount === 2 ? widthForTwo : widthForThree} className="nhs-form-nav__back">
					{renderButton(back, "Back")}
				</Column>
			)}
			{showStartAgain && (
				<Column
					width={visibleCount === 2 ? widthForTwo : widthForThree}
					align={visibleCount === 2 ? ColumnAlign.Right : ColumnAlign.Center}
					className="nhs-form-nav__start-again"
				>
					{renderButton(startAgain, "Start again")}
				</Column>
			)}
			{showNext && (
				<Column
					width={!showBack && !showStartAgain ? GridWidth.Full : (visibleCount === 2 ? widthForTwo : widthForThree)}
					align={ColumnAlign.Right}
					className="nhs-form-nav__next"
				>
					{renderButton(next, "Next")}
				</Column>
			)}
		</Row>
	);
};

export default FormNavButtonBar;
