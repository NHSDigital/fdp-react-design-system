import React, { memo, useMemo, useState, useCallback, useRef } from 'react';
import classNames from 'classnames';
import { scaleTime } from 'd3-scale';
import { timeMonth } from 'd3-time';
import './ProductRoadmap.scss';
import { ProductRoadmapProps, ProductRoadmapItem } from './ProductRoadmap.types';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';

// Utility to clamp numeric props
const clamp = (val: number | undefined, min: number, max: number, def: number): number => {
	if (val == null || Number.isNaN(val)) return def;
	return Math.min(max, Math.max(min, val));
};

interface PositionedItem extends ProductRoadmapItem {
	_pxLeft: number;
	_pxWidth: number;
	_startFraction: number; // fractional column start (for aria colindex)
	_spanColumns: number; // approximate column span (for aria colspan)
}

interface RoadmapItemProps {
	item: PositionedItem;
	maxLines: number;
	enableDrilldown?: boolean;
	onExpand?(item: ProductRoadmapItem): void;
	isActive: boolean;
}

const RoadmapItem: React.FC<RoadmapItemProps & { topLaneIndex: number; laneOffset: number; }> = ({ item, maxLines, enableDrilldown, onExpand, isActive, topLaneIndex }) => {
	const { ariaLabel } = item;
	const left = `${item._pxLeft}px`;
	const width = `${item._pxWidth}px`;
	// topLaneIndex already incorporates any inserted child lanes above this item (0-based)
	const top = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${topLaneIndex})`;
	const ariaColIndex = Math.floor(item._startFraction) + 2;
	const ariaColSpan = Math.max(1, Math.round(item._spanColumns));
	const expandable = enableDrilldown && item.childItems && item.childItems.length > 0;
	const handleActivate = (e: React.MouseEvent | React.KeyboardEvent) => {
		if (!expandable) return; e.preventDefault(); onExpand?.(item);
	};
	const interactiveProps = expandable ? {
		role: 'button', tabIndex: 0, 'aria-haspopup': 'dialog', 'aria-expanded': isActive || false,
		onClick: handleActivate,
		onKeyDown: (e: React.KeyboardEvent) => {
			if (e.key === 'Enter' || e.key === ' ') handleActivate(e);
			if (e.key === 'Escape' && isActive) handleActivate(e);
		}
	} : {};
	return (
		<div
			className={classNames('nhsuk-product-roadmap__item', expandable && 'nhsuk-product-roadmap__item--expandable', isActive && 'nhsuk-product-roadmap__item--active')}
			style={{ left, width, top, ['--item-height' as any]: maxLines }}
			role="gridcell"
			aria-label={ariaLabel}
			aria-colindex={ariaColIndex}
			aria-colspan={ariaColSpan}
			{...interactiveProps as any}
		>
			<div className="nhsuk-product-roadmap__item-bg" aria-hidden="true" />
			<div className="nhsuk-product-roadmap__item-content">
				<span className="nhsuk-product-roadmap__item-title">{item.title}</span>
				{expandable && (<span className={classNames('nhsuk-product-roadmap__item-expander', isActive && 'nhsuk-product-roadmap__item-expander--open')} aria-hidden="true" />)}
			</div>
		</div>
	);
};

export const ProductRoadmap: React.FC<ProductRoadmapProps> = memo(({
	dateHeadings,
	categories,
	columnWidthPx = 400,
	itemMaxLines = 2,
	className,
	ariaLabel = 'Product roadmap',
	enableDrilldown = false,
	onToggleItem,
	drilldownMode = 'overlay',
	...rest
}) => {
	// Support multiple expanded items (IDs)
	const [activeItemIds, setActiveItemIds] = useState<Set<string>>(() => new Set());
	// Track collapsing item IDs for reverse animation
	const [collapsingIds, setCollapsingIds] = useState<Set<string>>(() => new Set());
	// Previous active set ref for animation diff
	const prevActiveRef = useRef<Set<string>>(new Set());

	const isItemActive = useCallback((id: string) => activeItemIds.has(id), [activeItemIds]);

	const handleExpand = useCallback((item: ProductRoadmapItem) => {
		setActiveItemIds(curr => {
			const next = new Set(curr);
			if (next.has(item.id)) {
				// start collapse sequence
				next.delete(item.id);
				setCollapsingIds(c => {
					const copy = new Set(c); copy.add(item.id); return copy; });
				setTimeout(() => setCollapsingIds(c => { const copy = new Set(c); copy.delete(item.id); return copy; }), 240);
				onToggleItem?.(item.id, false);
			} else {
				next.add(item.id);
				onToggleItem?.(item.id, true);
			}
			return next;
		});
	}, [onToggleItem]);

	// Inline child animations (cascade for any newly opened groups)
	useIsomorphicLayoutEffect(() => {
		if (drilldownMode !== 'inline' || !enableDrilldown) return;
		if (typeof document === 'undefined') return; // SSR/test guard
		const newlyOpened: string[] = [];
		activeItemIds.forEach(id => { if (!prevActiveRef.current.has(id)) newlyOpened.push(id); });
		prevActiveRef.current = new Set(activeItemIds);
		if (!newlyOpened.length) return;
		const prefersReduce = (typeof window !== 'undefined' && typeof window.matchMedia === 'function')
			? window.matchMedia('(prefers-reduced-motion: reduce)').matches
			: false;
		const selector = newlyOpened.map(id => `.nhsuk-product-roadmap__inline-children[data-parent="${id}"] .nhsuk-product-roadmap__inline-child`).join(',');
		const nodes = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
		if (!nodes.length) return;
		if (prefersReduce) {
			nodes.forEach(ch => { ch.style.opacity = '1'; ch.style.transform = 'translateY(0)'; });
			return;
		}
		import('gsap').then(gsapMod => {
			const gsap = gsapMod.gsap || (gsapMod as any).default || gsapMod;
			gsap.to(nodes, { opacity: 1, y: 0, duration: 0.32, ease: 'power2.out', stagger: 0.05 });
		}).catch(() => { nodes.forEach(ch => { ch.style.opacity = '1'; ch.style.transform = 'translateY(0)'; }); });
	}, [activeItemIds, drilldownMode, enableDrilldown]);

	const closePanel = useCallback(() => {
		// Overlay mode: close all
		if (activeItemIds.size) {
			setActiveItemIds(new Set());
		}
	}, [activeItemIds]);

	const rootCls = classNames('nhsuk-product-roadmap', className);
	const colWidth = clamp(columnWidthPx, 120, 1200, 400);
	const maxLines = clamp(itemMaxLines, 1, 6, 2);

	// Parse date headings into Date objects (expect formats like 'Sep 2025')
	const headingDates = useMemo(() => dateHeadings.map(h => new Date(h + ' 01')), [dateHeadings]);
	const timeDomain: [Date, Date] = useMemo(() => {
		if (headingDates.length === 0) {
			const now = new Date();
			return [now, now];
		}
		const start = new Date(headingDates[0]);
		// end is start of last month + 1 month (to get full span)
		const end = timeMonth.offset(new Date(headingDates[headingDates.length - 1]), 1);
		return [start, end];
	}, [headingDates]);
	const xScale = useMemo(() => scaleTime().domain(timeDomain).range([0, headingDates.length * colWidth]), [timeDomain, headingDates.length, colWidth]);

	// Helper to derive pixel positioning for legacy or date-based items
	const positionItem = useCallback((it: ProductRoadmapItem): PositionedItem => {
		// modern date-based path
		if (it.startDate) {
			const start = new Date(it.startDate as any);
			const end = new Date((it.endDate ?? it.startDate) as any);
			// ensure end after start minimally
			if (end < start) end.setTime(start.getTime());
			const pxLeft = xScale(start);
			// add 1 month if endDate given at month boundary for inclusive visual
			const visualEnd = timeMonth.offset(new Date(end), 1);
			let pxRight = xScale(visualEnd);
			if (!Number.isFinite(pxRight)) pxRight = pxLeft + colWidth; // fallback
			const pxWidth = Math.max(colWidth * 0.25, pxRight - pxLeft);
			const startFraction = pxLeft / colWidth; // convert to "columns"
			const spanColumns = pxWidth / colWidth;
			return { ...(it as any), _pxLeft: pxLeft, _pxWidth: pxWidth, _startFraction: startFraction, _spanColumns: spanColumns };
		}
		// legacy column-based path
		const date = it.date ?? 1;
		const dateOffset = it.dateOffset ?? 0;
		const length = it.length ?? 1;
		const partialLength = it.partialLength ?? 1;
		const startCol = (date - 1) + dateOffset;
		const totalColumns = (length - 1) + partialLength;
		return { ...(it as any), _pxLeft: startCol * colWidth, _pxWidth: totalColumns * colWidth, _startFraction: startCol, _spanColumns: totalColumns };
	}, [xScale, colWidth]);

	// Auto-pack items into vertical lanes per category to avoid overlaps (using pixel spans)
	const packedCategories = useMemo(() => {
		return categories.map(cat => {
			const normalized: PositionedItem[] = cat.roadmapItems.map(raw => {
				const base = (!raw.childItems && (raw as any).children) ? { ...raw, childItems: (raw as any).children } : { ...raw };
				return positionItem(base);
			});
			const sorted = normalized.sort((a, b) => {
				if (a._pxLeft !== b._pxLeft) return a._pxLeft - b._pxLeft;
				return b._pxWidth - a._pxWidth;
			});
			const laneEnds: number[] = [];
			sorted.forEach(item => {
				const start = item._pxLeft;
				const end = item._pxLeft + item._pxWidth;
				let laneIndex = laneEnds.findIndex(lEnd => lEnd <= start);
				if (laneIndex === -1) { laneIndex = laneEnds.length; laneEnds.push(0); }
				laneEnds[laneIndex] = end;
				item.verticalPosition = laneIndex + 1;
			});
			return { ...cat, roadmapItems: sorted, _laneCount: laneEnds.length } as typeof cat & { _laneCount: number };
		});
	}, [categories, positionItem]);

	const categoryLaneHeights = useMemo(() => packedCategories.map(c => c._laneCount || 1), [packedCategories]);

	// (Removed month index mapping; child items now positioned with exact day precision using xScale.)
	const gridTemplateColumns = useMemo(() => `var(--category-width) ${dateHeadings.map(() => 'var(--column-width)').join(' ')}`, [dateHeadings]);

	return (
		<div
			className={rootCls}
			style={{ ['--column-width' as any]: `${colWidth}px`, gridTemplateColumns }}
			role="grid"
			aria-label={ariaLabel}
			aria-colcount={dateHeadings.length + 1}
			aria-rowcount={packedCategories.length + 1}
			{...rest}
		>
			<div className="nhsuk-product-roadmap__header-row" role="row" aria-rowindex={1}>
				<div className="nhsuk-product-roadmap__header-cell" role="columnheader" aria-colindex={1}>
					<span className="nhsuk-visually-hidden">Category</span>
				</div>
				{dateHeadings.map((heading, i) => (
					<div key={`${heading}-${i}`} className="nhsuk-product-roadmap__date-heading" role="columnheader" aria-colindex={i + 2}>
						{heading}
					</div>
				))}
			</div>

			{ packedCategories.map((cat, ci) => {
				const rowIndex = ci + 2;
				const lanes = categoryLaneHeights[ci];
				// Determine expanded items in this category for dynamic height + offsets
				let containerHeightExpr: string;
				let totalExtraChildLanes = 0;
				let expandedMeta: { id: string; lane: number; count: number; }[] = [];
				if (enableDrilldown && drilldownMode === 'inline') {
					expandedMeta = (cat.roadmapItems as PositionedItem[])
						.filter(it => isItemActive(it.id) && it.childItems && it.childItems.length)
						.map(it => ({ id: it.id, lane: (it.verticalPosition || 1), count: it.childItems!.length }))
						.sort((a, b) => a.lane - b.lane);
					totalExtraChildLanes = expandedMeta.reduce((s, e) => s + e.count, 0);
				}
				const totalLanesWithChildren = lanes + totalExtraChildLanes;
				containerHeightExpr = `calc((${totalLanesWithChildren} * var(--roadmap-item-block-height)) + (max(0, ${totalLanesWithChildren} - 1) * var(--roadmap-row-gap)))`;
				// Precompute offset (extra lanes) above each base lane
				const extraBeforeLane: Record<number, number> = {};
				let running = 0;
				expandedMeta.forEach(meta => {
					// children inserted AFTER the parent's lane, so they affect lanes strictly greater than parent.lane
					running += meta.count;
					extraBeforeLane[meta.lane + 1] = running; // lanes starting after parent lane have this many extra
				});
				// For fast lookup produce prefix for all lane indices
				// (If needed later) cumulative extra lanes helper removed to avoid unused variable.
				return (
					<div key={`${cat.heading}-${ci}`} className="nhsuk-product-roadmap__row" role="row" aria-rowindex={rowIndex}>
						<div className="nhsuk-product-roadmap__category-cell" role="rowheader" aria-colindex={1}>{cat.heading}</div>
						<div className="nhsuk-product-roadmap__items-row" style={{ gridColumn: `2 / span ${dateHeadings.length}`, height: containerHeightExpr }}>
							<div className="nhsuk-product-roadmap__items-layer">
								{(cat.roadmapItems as PositionedItem[]).map((it, idx) => {
									const baseLaneIndex = (it.verticalPosition || 1) - 1;
									// Extra lanes inserted before this lane come from expanded items with lane < current lane
									const extraAbove = expandedMeta.filter(m => m.lane - 1 < baseLaneIndex).reduce((s, m) => s + m.count, 0);
									const topLaneIndex = baseLaneIndex + extraAbove;
									const active = isItemActive(it.id);
									const collapsing = collapsingIds.has(it.id);
									return (
										<React.Fragment key={it.id ?? idx}>
											<RoadmapItem item={it} maxLines={maxLines} enableDrilldown={enableDrilldown} onExpand={handleExpand} isActive={active} topLaneIndex={topLaneIndex} laneOffset={extraAbove} />
											{enableDrilldown && drilldownMode === 'inline' && (active || collapsing) && it.childItems && (
												<div data-parent={it.id} className="nhsuk-product-roadmap__inline-children" aria-label={`${it.title} child tasks`}>
													{it.childItems.map((child, cIdx) => {
														const itemHeight = 'calc(var(--roadmap-item-block-height) * 0.75)';
														// Day-precision positioning using xScale
														let childLeft = it._pxLeft;
														let childWidth = it._pxWidth;
														if (child.startDate) {
															const start = new Date(child.startDate);
															let end = child.endDate ? new Date(child.endDate) : new Date(start);
															if (end < start) end = new Date(start);
															// inclusive end: add one day
															const endPlusOne = new Date(end); endPlusOne.setDate(endPlusOne.getDate() + 1);
															const pxL = xScale(start);
															let pxR = xScale(endPlusOne);
															if (!Number.isFinite(pxR) || pxR <= pxL) pxR = pxL + 6; // minimum visible width
															childLeft = pxL;
															childWidth = Math.max(6, pxR - pxL);
														}
														// Children start immediately after parent lane + extraAbove offset
														const childBaseLane = topLaneIndex + 1; // first child lane (0-based)
														const childTopLane = childBaseLane + cIdx;
														return (
															<div
																key={child.id ?? cIdx}
																className={classNames('nhsuk-product-roadmap__inline-child', child.status && `nhsuk-product-roadmap__inline-child--status-${child.status}`, !active && collapsing && 'nhsuk-product-roadmap__inline-child--collapsing')}
																style={{ left: `${childLeft}px`, width: `${childWidth}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${childTopLane})`, height: itemHeight, opacity: active ? 0 : undefined, transform: active ? 'translateY(-6px)' : undefined }}
															>
																<div className="nhsuk-product-roadmap__inline-child-bg" />
																<div className="nhsuk-product-roadmap__inline-child-content">{child.title}</div>
															</div>
														);
													})}
												</div>
											)}
										</React.Fragment>
									);
								})}
							</div>
						</div>
					</div>
				);
			})}

			{/* Overlay mode (single close-all) */}
			{enableDrilldown && drilldownMode === 'overlay' && activeItemIds.size === 1 && (() => {
				const onlyId = Array.from(activeItemIds)[0];
				const item = categories.flatMap(c => c.roadmapItems).find(i => i.id === onlyId);
				if (!item || !item.childItems) return null;
				return (
					<div className="nhsuk-product-roadmap__drilldown-overlay" role="dialog" aria-modal="true" aria-label={`${item.title} details`}>
						<div className="nhsuk-product-roadmap__drilldown-panel">
							<header className="nhsuk-product-roadmap__drilldown-header">
								<h3 className="nhsuk-product-roadmap__drilldown-title">{item.title}</h3>
								<button type="button" className="nhsuk-product-roadmap__drilldown-close" onClick={closePanel} aria-label="Close details">×</button>
							</header>
							<div className="nhsuk-product-roadmap__drilldown-content">{item.content}</div>
							<ul className="nhsuk-product-roadmap__drilldown-children">
								{item.childItems.map((child, idx) => (
									<li key={child.id ?? idx} className="nhsuk-product-roadmap__drilldown-child">
										<strong className="nhsuk-product-roadmap__drilldown-child-title">{child.title}</strong>
										{child.content && <div className="nhsuk-product-roadmap__drilldown-child-content">{child.content}</div>}
									</li>
								))}
							</ul>
						</div>
						<div className="nhsuk-product-roadmap__drilldown-backdrop" onClick={closePanel} aria-hidden="true" />
					</div>
				);
			})()}
		</div>
	);
});

ProductRoadmap.displayName = 'ProductRoadmap';
