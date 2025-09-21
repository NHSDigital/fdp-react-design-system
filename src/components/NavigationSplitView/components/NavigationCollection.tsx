import * as React from "react";

interface ItemLike<ID> {
	id: ID;
	label: string;
	description?: string;
	icon?: React.ReactNode;
	badge?: React.ReactNode | number | string;
	disabled?: boolean;
}

export interface NavigationCollectionProps<
	ID = string,
	T extends ItemLike<ID> = ItemLike<ID>,
> {
	layout: "list" | "cards";
	items: T[];
	getId: (item: T) => ID;
	selectedId?: ID;
	isLoading?: boolean;
	emptyState?: React.ReactNode;
	renderItemContent?: (item: T) => React.ReactNode;
	onSelect: (id: ID, item: T, index: number) => void;
	orientation: "vertical" | "horizontal";
	initialFocus: "first" | "none";
	onFocusChange?: (
		id: ID | undefined,
		item: T | undefined,
		index: number
	) => void;
	justSelectedId?: ID;
	listRef?: React.RefObject<HTMLUListElement>;
	onKeyDownList?: (e: React.KeyboardEvent) => void;
	navigationInstructions?: string;
	controlledFocusedIndex?: number;
}

export function NavigationCollection<
	ID = string,
	T extends ItemLike<ID> = ItemLike<ID>,
>({
	layout,
	items,
	getId,
	selectedId,
	isLoading,
	emptyState,
	renderItemContent,
	onSelect,
	orientation,
	initialFocus,
	onFocusChange,
	justSelectedId,
	listRef,
	onKeyDownList,
	navigationInstructions,
	controlledFocusedIndex,
}: NavigationCollectionProps<ID, T>) {
	const [focusedIndex, setFocusedIndex] = React.useState(() =>
		initialFocus === "first" ? 0 : -1
	);
	const lastFocusedIndexRef = React.useRef(0);

	// Focus management (uncontrolled only)
	React.useEffect(() => {
		if (typeof controlledFocusedIndex === "number") return;
		if (focusedIndex < 0) return;
		if (!listRef?.current) return;
		const nodes = Array.from(
			listRef.current.querySelectorAll("[data-nav-item]")
		) as HTMLElement[];
		const node = nodes[focusedIndex];
		if (node) {
			if (document.activeElement !== node) node.focus();
			lastFocusedIndexRef.current = focusedIndex;
			const item = items[focusedIndex];
			onFocusChange?.(item ? getId(item) : undefined, item, focusedIndex);
		}
	}, [controlledFocusedIndex, focusedIndex, items, onFocusChange, getId, listRef]);

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (onKeyDownList) return onKeyDownList(e);
		const forward = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
		const backward = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
		if (e.key === forward) {
			e.preventDefault();
			setFocusedIndex((i) => Math.min(items.length - 1, i + 1));
		} else if (e.key === backward) {
			e.preventDefault();
			setFocusedIndex((i) => Math.max(0, i - 1));
		} else if (e.key === "Home") {
			e.preventDefault();
			setFocusedIndex(0);
		} else if (e.key === "End") {
			e.preventDefault();
			setFocusedIndex(items.length - 1);
		} else if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			const item = items[focusedIndex];
			if (item && !(item as any).disabled)
				onSelect(getId(item), item as T, focusedIndex);
		}
	};

	if (layout === "cards") {
		return (
			<ul
				className="nhs-navigation-split-view__cards"
				role="listbox"
				aria-activedescendant={selectedId ? String(selectedId) : undefined}
			>
				{items.map((item, idx) => {
					const id = getId(item);
					const selected = id === selectedId;
					return (
						<li
							key={String(id)}
							className="nhs-navigation-split-view__card-item"
							role="option"
							aria-selected={selected}
						>
							<button
								id={String(id)}
								type="button"
								className="nhs-navigation-split-view__card"
								data-selected={selected || undefined}
								data-disabled={(item as any).disabled || undefined}
								disabled={(item as any).disabled}
								onClick={() =>
									!(item as any).disabled && onSelect(id, item as T, idx)
								}
							>
								{(item as any).icon && (
									<span className="nhs-navigation-split-view__item-icon">
										{(item as any).icon}
									</span>
								)}
								<span className="nhs-navigation-split-view__item-label">
									{(item as any).label}
								</span>
								{(item as any).description && (
									<span className="nhs-navigation-split-view__item-description">
										{(item as any).description}
									</span>
								)}
								{renderItemContent?.(item)}
								{(item as any).badge !== undefined && (
									<span className="nhs-navigation-split-view__badge">
										{(item as any).badge}
									</span>
								)}
							</button>
						</li>
					);
				})}
				{items.length === 0 && !isLoading && (
					<li
						className="nhs-navigation-split-view__card-item"
						aria-disabled="true"
					>
						{emptyState || <div style={{ padding: 16 }}>No items</div>}
					</li>
				)}
			</ul>
		);
	}

	const instructionsId = "nsv-nav-instructions";
	const NavItem = React.useMemo(() => {
		return React.memo(
			({
				item,
				idx,
				selected,
				focused,
			}: {
				item: T;
				idx: number;
				selected: boolean;
				focused: boolean;
			}) => {
				const id = getId(item);
				const interactiveProps: React.HTMLAttributes<HTMLLIElement> = (
					item as any
				).disabled
					? { "aria-disabled": true, tabIndex: -1 }
					: {
							tabIndex: focused ? 0 : -1,
							onClick: () => {
								lastFocusedIndexRef.current = idx;
								onSelect(id, item as T, idx);
							},
							onKeyDown: (e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									lastFocusedIndexRef.current = idx;
									onSelect(id, item as T, idx);
								}
							},
						};
				return (
					<li
						id={String(id)}
						data-nav-item
						className="nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button"
						role="option"
						aria-selected={selected}
						aria-current={selected ? "true" : undefined}
						data-selected={selected || undefined}
						data-disabled={(item as any).disabled || undefined}
						{...interactiveProps}
					>
						{(item as any).icon && (
							<span className="nhs-navigation-split-view__item-icon">
								{(item as any).icon}
							</span>
						)}
						<span className="nhs-navigation-split-view__item-content">
							<span className="nhs-navigation-split-view__item-label">
								{(item as any).label}
							</span>
							{(item as any).description && (
								<span className="nhs-navigation-split-view__item-description">
									{(item as any).description}
								</span>
							)}
							{renderItemContent?.(item)}
						</span>
						{(item as any).badge !== undefined && (
							<span className="nhs-navigation-split-view__badge">
								{(item as any).badge}
							</span>
						)}
					</li>
				);
			}
		);
	}, [getId, onSelect, renderItemContent]);

	return (
		<>
			<ul
				ref={listRef}
				className="nhs-navigation-split-view__list"
				onKeyDown={handleKeyDown}
				role="listbox"
				aria-label={"Navigation items"}
				aria-describedby={instructionsId}
				aria-activedescendant={selectedId ? String(selectedId) : undefined}
			>
				{items.map((item, idx) => (
					<NavItem
						key={String(getId(item))}
						item={item}
						idx={idx}
						selected={getId(item) === selectedId}
						focused={(() => {
							const fi = typeof controlledFocusedIndex === "number" ? controlledFocusedIndex : focusedIndex;
							return idx === fi || (fi === -1 && idx === 0 && initialFocus === "first");
						})()}
						data-just-selected={
							getId(item) === justSelectedId ? "true" : undefined
						}
					/>
				))}
				{items.length === 0 && !isLoading && (
					<li
						className="nhs-navigation-split-view__list-item"
						aria-disabled="true"
					>
						{emptyState || <div style={{ padding: 16 }}>No items</div>}
					</li>
				)}
			</ul>
			<div
				id={instructionsId}
				style={{
					position: "absolute",
					width: 1,
					height: 1,
					overflow: "hidden",
					clip: "rect(0 0 0 0)",
				}}
			>
				{navigationInstructions || "Use arrow keys to navigate, Enter to open."}
			</div>
		</>
	);
}
