import * as React from "react";
import type { WorkflowStep } from "../WorkflowSplitView.types";

export type CardsScrollerProps<T> = {
	steps: WorkflowStep<T>[];
	currentIndex: number;
	onNavigate?: (index: number) => void;
	renderCard: (
		step: WorkflowStep<T>,
		index: number,
		isCurrent: boolean
	) => React.ReactNode;
	className?: string;
	ariaLabel?: string;
};

export function CardsScroller<T>({
	steps,
	currentIndex,
	onNavigate,
	renderCard,
	className,
	ariaLabel = "Steps",
}: CardsScrollerProps<T>) {
	const trackRef = React.useRef<HTMLDivElement | null>(null);

	// Keyboard navigation for accessibility
	const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (!steps?.length) return;
		if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
			e.preventDefault();
			const next = Math.max(0, currentIndex - 1);
			if (next !== currentIndex) onNavigate?.(next);
		} else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
			e.preventDefault();
			const next = Math.min(steps.length - 1, currentIndex + 1);
			if (next !== currentIndex) onNavigate?.(next);
		} else if (e.key === "Home") {
			e.preventDefault();
			onNavigate?.(0);
		} else if (e.key === "End") {
			e.preventDefault();
			onNavigate?.(steps.length - 1);
		}
	};

	return (
		<div className={className} aria-label={ariaLabel} role="region">
			{/* Viewport intentionally hides overflow; track slides per index */}
			<div
				className="nhsfdp-cards-viewport"
				role="group"
				aria-roledescription="steps"
				tabIndex={0}
				onKeyDown={onKeyDown}
			>
				<div
					ref={trackRef}
					className="nhsfdp-cards-track"
					style={{ transform: `translate3d(-${Math.max(0, currentIndex) * 100}%, 0, 0)` }}
				>
					{steps.map((s, i) => {
						const isCurrent = i === currentIndex;
						return (
							<div
								key={i}
								className={"nhsfdp-pane mobile-pane" + (isCurrent ? " is-current" : "")}
								role="group"
								aria-roledescription="step"
								aria-label={(s.label ?? `Step ${i + 1}`).toString()}
								aria-hidden={!isCurrent}
								onClick={() => onNavigate?.(i)}
							>
								{renderCard(s, i, isCurrent)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
