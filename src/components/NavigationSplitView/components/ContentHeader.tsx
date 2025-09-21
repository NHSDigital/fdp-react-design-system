import * as React from "react";
import { BackLink } from "../../BackLink/BackLink";
import { ForwardLink } from "../../BackLink/ForwardLink";

export interface ContentHeaderProps {
	show: boolean;
	label?: string;
	contentHeaderLevel: 1 | 2 | 3 | 4 | 5 | 6;
	detailActive: boolean;
	headerContext: "mobile" | "tablet" | "desktop";
	backLabel: string;
	nextLabel: string;
	onBack?: () => void;
	onForward?: () => void;
	renderContentHeader?: (args: {
		item: any;
		detailActive: boolean;
		context: "mobile" | "tablet" | "desktop";
		backLink?: React.ReactNode;
		defaultHeading: React.ReactNode;
	}) => React.ReactNode;
	item?: any;
	contentSubheader?: React.ReactNode | ((item: any) => React.ReactNode);
	tertiaryInlineActive?: boolean;
}

export const ContentHeader: React.FC<ContentHeaderProps> = ({
	show,
	label,
	contentHeaderLevel,
	detailActive,
	headerContext,
	backLabel,
	nextLabel,
	onBack,
	onForward,
	renderContentHeader,
	item,
	contentSubheader,
	tertiaryInlineActive,
}) => {
	if (!show || !item) return null;

	const headingTag = `h${contentHeaderLevel}` as keyof HTMLElementTagNameMap;
	const defaultHeadingNode = label
		? React.createElement(
				headingTag,
				{
					style: {
						marginLeft: detailActive ? 32 : 0,
						marginRight: detailActive ? 32 : 0,
					},
				},
				label
			)
		: null;

	const backLinkNode = detailActive ? (
		<BackLink
			element="button"
			text={backLabel}
			style={{ marginRight: 16 }}
			onClick={onBack}
		/>
	) : undefined;

	const forwardLinkNode = !tertiaryInlineActive ? (
		<ForwardLink element="button" text={nextLabel} onClick={onForward} />
	) : undefined;

	if (renderContentHeader) {
		return (
			<div className="nhs-navigation-split-view__header">
				{renderContentHeader({
					item,
					detailActive,
					context: headerContext,
					backLink: backLinkNode,
					defaultHeading: defaultHeadingNode,
				})}
			</div>
		);
	}

	const sub =
		item && contentSubheader
			? typeof contentSubheader === "function"
				? contentSubheader(item)
				: contentSubheader
			: null;

	return (
		<div className="nhs-navigation-split-view__header">
			<div style={{ display: "flex", alignItems: "center", width: "100%" }}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 0,
						flex: "1 1 auto",
						minWidth: 0,
					}}
				>
					{backLinkNode}
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 4,
							minWidth: 0,
						}}
					>
						{defaultHeadingNode}
						{sub && (
							<div className="nhs-navigation-split-view__subheader">{sub}</div>
						)}
					</div>
				</div>
				{forwardLinkNode && (
					<div style={{ marginLeft: "auto" }}>{forwardLinkNode}</div>
				)}
			</div>
		</div>
	);
};
