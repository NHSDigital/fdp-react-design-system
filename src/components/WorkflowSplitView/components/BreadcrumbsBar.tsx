import * as React from "react";
import type { WorkflowStep } from "../WorkflowSplitView.types";
import { Breadcrumb } from "../../Breadcrumb";

export type BreadcrumbsBarProps<T> = {
	steps: WorkflowStep<T>[];
	currentIndex: number;
	onNavigate?: (index: number) => void;
	renderLabel?: (step: WorkflowStep<T>, index: number) => React.ReactNode;
	ariaLabel?: string;
	className?: string;
};

export function BreadcrumbsBar<T>({
	steps,
	currentIndex,
	onNavigate,
	renderLabel,
	ariaLabel = "Breadcrumbs",
	className,
}: BreadcrumbsBarProps<T>) {
	// Breadcrumb semantics: only show links for previous steps; current is active; future steps omitted
	const items = steps.map((s, i) => {
		const isCurrent = i === currentIndex;
		const isPast = i < currentIndex;
		const label = renderLabel ? renderLabel(s, i) : (s.label ?? `Step ${i + 1}`);
		return {
			text: String(label),
			href: isPast ? "#" : undefined,
			active: isCurrent,
			attributes: isPast ? { "data-index": String(i) } : undefined,
		};
	});

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLElement;
		const link = target.closest('a.nhsuk-breadcrumb__link, a.nhsuk-breadcrumb__backlink') as HTMLAnchorElement | null;
		if (!link) return;

		// If it's the mobile back link, go to the previous step
		if (link.classList.contains('nhsuk-breadcrumb__backlink')) {
			e.preventDefault();
			const prev = Math.max(0, currentIndex - 1);
			if (prev !== currentIndex) onNavigate?.(prev);
			return;
		}

		// Otherwise, it's a breadcrumb link to a past step — use the data-index
		const idxStr = link.getAttribute('data-index');
		if (idxStr != null) {
			e.preventDefault();
			const idx = parseInt(idxStr, 10);
			if (!Number.isNaN(idx)) onNavigate?.(idx);
		}
	};

	return (
		<div onClick={handleClick}>
			<Breadcrumb labelText={ariaLabel} classes={className} items={items as any} />
		</div>
	);
}
