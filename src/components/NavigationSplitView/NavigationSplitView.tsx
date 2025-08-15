import * as React from 'react';
import {
  NavigationSplitViewProps,
  NavigationSplitItem,
  NavigationSplitLayoutMode
} from './NavigationSplitView.types';
import './NavigationSplitView.scss';
import { BackLink } from '../BackLink/BackLink';
import { useNhsFdpBreakpoints } from '../../hooks/useBreakpoints';
import { useNavigationSplitUrlSync } from '../../hooks/useNavigationSplitUrlSync';

// Inline SVG icons for nav collapse/expand (kept lightweight, no external dependency)
const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
	<path fill="currentColor" d="M10.7 3.3a1 1 0 0 1 0 1.4L7.41 8l3.3 3.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 0Z" />
  </svg>
);
const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
	<path fill="currentColor" d="M5.3 12.7a1 1 0 0 1 0-1.4L8.59 8l-3.3-3.3a1 1 0 0 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42 0Z" />
  </svg>
);

// (Deprecated internal) Previous responsive layout helper removed in favour of hydration-safe inline logic.

/**
 * NavigationSplitView Component
 * Mobile-first master-detail navigation similar to SwiftUI NavigationSplitView.
 */
export function NavigationSplitView<ID = string, T extends NavigationSplitItem<ID> = NavigationSplitItem<ID>>(
  props: NavigationSplitViewProps<ID, T>
) {
  const {
	items,
	selectedId: controlledSelectedId,
	defaultSelectedId,
	onSelectionChange,
	renderItemContent,
	renderContent,
	renderSecondaryContent,
	forceLayout,
	animated = true,
	backLabel = 'Back',
	isLoading = false,
	emptyState,
	a11y,
	className,
	getId = (i: any) => i.id,
  orientation = 'vertical',
  autoEnableThirdColumn = true,
  onDrillChange,
  navigationInstructions = 'Use arrow keys to navigate, Enter to open.',
  initialFocus = 'first',
  skipFocusOnSelect = false,
  skipAnnouncements = false,
  onFocusChange,
  syncUrl = false,
  urlParamSelected = 'nsv',
  urlParamDrill = 'nsvDrill',
  urlSyncDebounceMs = 0,
  lazySecondary = false,
  navFooter,
  collapsibleNav = false,
  navInitiallyCollapsed = false,
  onNavCollapseChange,
  collapseToggleLabelShow = 'Show navigation',
  collapseToggleLabelHide = 'Hide navigation',
  collapseToggleIconShow,
  collapseToggleIconHide,
  persistNavCollapsed,
  navCollapsedStorageKey = 'nsvCollapsed',
	navCollapsedUrlParam = 'nsvCollapsed',
	autoContentHeader,
	contentHeaderLevel = 2,
	renderContentHeader
} = props;

	const { up } = useNhsFdpBreakpoints();
	// Hydration gating: avoid reading real breakpoints on first client render to match SSR markup
	const [hydrated, setHydrated] = React.useState(false);
	React.useEffect(() => { setHydrated(true); }, []);

	// Treat all breakpoints as mobile until hydrated unless forceLayout provided
	const isAtLeastMedium = hydrated && up('medium');
	const isAtLeastXlarge = hydrated && up('xlarge');

	let effectiveLayout: NavigationSplitLayoutMode;
	if (forceLayout) {
		effectiveLayout = forceLayout;
	} else if (isAtLeastMedium) {
		effectiveLayout = 'two-column';
	} else {
		effectiveLayout = 'list';
	}
	if (!forceLayout && autoEnableThirdColumn && renderSecondaryContent && isAtLeastXlarge) {
		effectiveLayout = 'three-column';
	}

  // URL sync integration (optional)
  const urlSync = useNavigationSplitUrlSync<ID>({
	enabled: syncUrl,
	paramSelected: urlParamSelected,
	paramDrill: urlParamDrill
  });

  // Selection state (controlled/uncontrolled) initialised from URL if present
  const [uncontrolledSelected, setUncontrolledSelected] = React.useState<ID | undefined>(() =>
	urlSync.selectedId !== undefined ? urlSync.selectedId : defaultSelectedId
  );
  const selectedId = controlledSelectedId !== undefined ? controlledSelectedId : uncontrolledSelected;
  const selectedItem = items.find(i => getId(i) === selectedId);

  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const contentPaneRef = React.useRef<HTMLDivElement | null>(null);

	// Track detail active state for mobile slide animation
	const detailActive = !!selectedItem && (effectiveLayout === 'list' || effectiveLayout === 'cards');

	// Determine auto content header rendering across breakpoints
	const autoHeaderConfig = React.useMemo(() => {
		if (autoContentHeader === undefined) {
			return { mobile: true, tablet: false, desktop: false };
		}
		if (autoContentHeader === true) {
			return { mobile: true, tablet: true, desktop: true };
		}
		if (autoContentHeader === false) {
			return { mobile: false, tablet: false, desktop: false };
		}
		return {
			mobile: autoContentHeader.mobile !== undefined ? autoContentHeader.mobile : true,
			tablet: autoContentHeader.tablet || false,
			desktop: autoContentHeader.desktop || false
		};
	}, [autoContentHeader]);

	// Breakpoint buckets for header logic (reuse breakpoint hook 'up')
	const isTabletRange = hydrated && up('medium') && !up('xlarge');
	const isDesktopRange = hydrated && up('xlarge');

	const showHeader = !!selectedItem && (
		(detailActive && autoHeaderConfig.mobile) || // mobile detail view (list/cards)
		(!detailActive && isTabletRange && autoHeaderConfig.tablet) || // tablet two-column
		(!detailActive && isDesktopRange && autoHeaderConfig.desktop) // desktop two/three column
	);

	// Build default heading node respecting chosen level
	const headingTag = `h${contentHeaderLevel}` as keyof HTMLElementTagNameMap;
	const defaultHeadingNode = selectedItem ? React.createElement(headingTag, { style: { marginLeft: detailActive ? 32 : 0 } }, selectedItem.label) : null;

	const headerContext: 'mobile' | 'tablet' | 'desktop' = detailActive ? 'mobile' : (isTabletRange ? 'tablet' : 'desktop');

	const backLinkNode = detailActive && autoHeaderConfig.mobile ? (
		<BackLink
		  element="button"
		  text={backLabel}
		  onClick={() => handleSelect(undefined as any, undefined as any)}
		/>
	) : undefined;

	const renderedHeaderInner = React.useMemo(() => {
		if (!showHeader || !selectedItem) return null;
		if (renderContentHeader) return renderContentHeader({
			item: selectedItem as any,
			detailActive,
			context: headerContext,
			backLink: backLinkNode,
			defaultHeading: defaultHeadingNode
		});
		return (<>
			{backLinkNode}
			{defaultHeadingNode}
		</>);
	}, [showHeader, selectedItem, renderContentHeader, detailActive, headerContext, backLinkNode, defaultHeadingNode]);

  // Keep URL in sync with selection and drill state (two vs three column) without adding history entries
  React.useEffect(() => {
	if (!syncUrl) return;
	const drilled = effectiveLayout === 'three-column';
	let cancelled = false;
	const apply = () => {
	  if (cancelled) return;
	  if (urlSync.selectedId !== selectedId) urlSync.setSelectedId(selectedId as any);
	  if (urlSync.drilledIn !== drilled) urlSync.setDrilledIn(drilled);
	};
	if (urlSyncDebounceMs && urlSyncDebounceMs > 0) {
	  const t = setTimeout(apply, urlSyncDebounceMs);
	  return () => { cancelled = true; clearTimeout(t); };
	} else {
	  apply();
	}
  }, [syncUrl, urlSync, selectedId, effectiveLayout, urlSyncDebounceMs]);

  // Respond to back/forward navigation (popstate) by re-parsing params
  React.useEffect(() => {
	if (!syncUrl) return;
	const handler = () => {
	  const sp = new URLSearchParams(window.location.search);
	  const sel = sp.get(urlParamSelected) as ID | null;
	  const drill = sp.get(urlParamDrill) === '1';
	  setUncontrolledSelected(sel === null ? undefined : sel);
	  // Only adjust layout if not forcibly controlled from props
	  if (!forceLayout && drill && renderSecondaryContent) {
		// rely on autoEnableThirdColumn logic at xlarge or force immediate? we just leave; up() will handle when width qualifies
	  }
	};
	window.addEventListener('popstate', handler);
	return () => window.removeEventListener('popstate', handler);
  }, [syncUrl, urlParamSelected, urlParamDrill, forceLayout, renderSecondaryContent]);

  const lastFocusedIndexRef = React.useRef(0);
  const handleSelect = React.useCallback((id: ID, item: T) => {
	if (controlledSelectedId === undefined) setUncontrolledSelected(id);
	onSelectionChange?.(id, item);
  }, [controlledSelectedId, onSelectionChange]);

  // When entering detail view on mobile/card layouts move focus into content pane
  React.useEffect(() => {
	if (!skipFocusOnSelect && detailActive && contentPaneRef.current) {
	  const t = setTimeout(() => contentPaneRef.current?.focus(), 30);
	  return () => clearTimeout(t);
	}
  }, [detailActive, selectedId, skipFocusOnSelect]);

  // Keyboard navigation (basic roving focus in list)
  const listRef = React.useRef<HTMLUListElement | null>(null);
  const [focusedIndex, setFocusedIndex] = React.useState(() => initialFocus === 'first' ? 0 : -1);

  React.useEffect(() => {
	if (!listRef.current) return;
	const nodes = Array.from(listRef.current.querySelectorAll('button[data-nav-item]')) as HTMLButtonElement[];
	nodes.forEach((btn, idx) => btn.tabIndex = (focusedIndex === -1 ? (idx === 0 && initialFocus === 'first') : idx === focusedIndex) ? 0 : -1);
	if (focusedIndex >= 0) {
	  const node = nodes[focusedIndex];
	  node?.focus();
	  const item = items[focusedIndex];
	  onFocusChange?.(item ? getId(item) : undefined, item as any, focusedIndex);
	}
  }, [focusedIndex, items, initialFocus, onFocusChange, getId]);

  const onKeyDownList = (e: React.KeyboardEvent) => {
	const forward = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';
	const backward = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
	if (e.key === forward) {
	  e.preventDefault(); setFocusedIndex(i => Math.min(items.length - 1, i + 1));
	} else if (e.key === backward) {
	  e.preventDefault(); setFocusedIndex(i => Math.max(0, i - 1));
	} else if (e.key === 'Home') {
	  e.preventDefault(); setFocusedIndex(0);
	} else if (e.key === 'End') {
	  e.preventDefault(); setFocusedIndex(items.length - 1);
	} else if (e.key === 'Enter' || e.key === ' ') {
	  e.preventDefault();
	  const item = items[focusedIndex];
	  if (item && !item.disabled) handleSelect(getId(item), item as T);
	}
  };

  // Collapsible nav (>= medium)
  // Collapsed state initialisation with persistence sources (URL overrides localStorage overrides prop)
  const initialCollapsed = React.useMemo(() => {
	if (persistNavCollapsed && (persistNavCollapsed === 'url' || persistNavCollapsed === 'both') && typeof window !== 'undefined') {
	  const sp = new URLSearchParams(window.location.search);
	  const val = sp.get(navCollapsedUrlParam);
	  if (val === '1') return true; if (val === '0') return false;
	}
	if (persistNavCollapsed && (persistNavCollapsed === 'localStorage' || persistNavCollapsed === 'both') && typeof window !== 'undefined') {
	  try {
		const raw = window.localStorage.getItem(navCollapsedStorageKey);
		if (raw === '1') return true; if (raw === '0') return false;
	  } catch {}
	}
	return navInitiallyCollapsed;
  }, [persistNavCollapsed, navInitiallyCollapsed, navCollapsedStorageKey, navCollapsedUrlParam]);
  const [navCollapsed, setNavCollapsed] = React.useState(initialCollapsed);
  React.useEffect(() => { onNavCollapseChange?.(navCollapsed); }, [navCollapsed, onNavCollapseChange]);
  const toggleNav = React.useCallback(() => { if (isAtLeastMedium && collapsibleNav) setNavCollapsed(c => !c); }, [isAtLeastMedium, collapsibleNav]);

  // Persist collapsed state when it changes
  React.useEffect(() => {
	if (!persistNavCollapsed) return;
	if (typeof window === 'undefined') return;
	if (persistNavCollapsed === 'localStorage' || persistNavCollapsed === 'both') {
	  try { window.localStorage.setItem(navCollapsedStorageKey, navCollapsed ? '1' : '0'); } catch {}
	}
	if (persistNavCollapsed === 'url' || persistNavCollapsed === 'both') {
	  const sp = new URLSearchParams(window.location.search);
	  sp.set(navCollapsedUrlParam, navCollapsed ? '1' : '0');
	  const newUrl = `${window.location.pathname}?${sp.toString()}${window.location.hash}`;
	  window.history.replaceState(null, '', newUrl);
	}
  }, [navCollapsed, persistNavCollapsed, navCollapsedStorageKey, navCollapsedUrlParam]);

  const rootClasses = [
	'nhs-navigation-split-view',
	animated ? 'nhs-navigation-split-view--animated' : '',
	detailActive ? 'nhs-navigation-split-view--detail-active' : '',
	effectiveLayout === 'three-column' ? 'nhs-navigation-split-view--three-column' : '',
	collapsibleNav && isAtLeastMedium && navCollapsed ? 'nhs-navigation-split-view--nav-collapsed' : '',
	className
  ].filter(Boolean).join(' ');

  // Live region for announcements
  const liveRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
	if (skipAnnouncements) return;
	if (liveRef.current) {
	  const msg = selectedItem ? `Selected ${selectedItem.label}` : 'Selection cleared';
	  liveRef.current.textContent = msg;
	}
  }, [selectedItem, skipAnnouncements]);

  // Persist + restore nav focus when returning from detail
  React.useEffect(() => {
	if (!detailActive && selectedId == null && listRef.current) {
	  	const btns = listRef.current.querySelectorAll('button[data-nav-item]');
  		const target = btns[lastFocusedIndexRef.current] as HTMLElement | undefined;
  		target?.focus();
	}
  }, [detailActive, selectedId]);

  // Drill change callback & live message
  const drilledIn = effectiveLayout === 'three-column';
  const [secondaryMounted, setSecondaryMounted] = React.useState(false);
  React.useEffect(() => {
	if (drilledIn && !secondaryMounted) setSecondaryMounted(true);
  }, [drilledIn, secondaryMounted]);
  const prevDrillRef = React.useRef(drilledIn);
  React.useEffect(() => {
	if (prevDrillRef.current !== drilledIn) {
	  onDrillChange?.(drilledIn);
	  prevDrillRef.current = drilledIn;
	}
  }, [drilledIn, onDrillChange]);

  // Render list or card collection depending on layout
  const renderNavigationCollection = () => {
	if (effectiveLayout === 'cards') {
	  return (
		<ul className="nhs-navigation-split-view__cards" role="listbox" aria-activedescendant={selectedId ? String(selectedId) : undefined}>
		  {items.map(item => {
			const id = getId(item);
			const selected = id === selectedId;
			return (
			  <li key={id} className="nhs-navigation-split-view__card-item" role="option" aria-selected={selected}>
				<button
				  id={String(id)}
				  type="button"
				  className="nhs-navigation-split-view__card"
				  data-selected={selected || undefined}
				  data-disabled={item.disabled || undefined}
				  disabled={item.disabled}
				  onClick={() => !item.disabled && handleSelect(id, item as T)}
				>
				  {item.icon && <span className="nhs-navigation-split-view__item-icon">{item.icon}</span>}
				  <span className="nhs-navigation-split-view__item-label">{item.label}</span>
				  {item.description && <span className="nhs-navigation-split-view__item-description">{item.description}</span>}
				  {renderItemContent?.(item)}
				  {item.badge !== undefined && (
					<span className="nhs-navigation-split-view__badge">{item.badge}</span>
				  )}
				</button>
			  </li>
			);
		  })}
		  {items.length === 0 && !isLoading && (
			<li className="nhs-navigation-split-view__card-item" aria-disabled="true">
			  {emptyState || <div style={{ padding: 16 }}>No items</div>}
			</li>
		  )}
		</ul>
	  );
	}

	// Default list layout
	const instructionsId = 'nsv-nav-instructions';
	const NavItem = React.useMemo(() => {
	  type P = { item: T; idx: number; selected: boolean };
	  const C: React.FC<P> = ({ item, idx, selected }) => {
		const id = getId(item);
		return (
		  <li className="nhs-navigation-split-view__list-item" role="option" aria-selected={selected}>
			<button
			  id={String(id)}
			  data-nav-item
			  type="button"
			  className="nhs-navigation-split-view__item-button"
			  data-selected={selected || undefined}
			  data-disabled={item.disabled || undefined}
			  disabled={item.disabled}
			  aria-current={selected ? 'true' : undefined}
			  onClick={() => { if (!item.disabled) { lastFocusedIndexRef.current = idx; handleSelect(id, item as T);} }}
			>
			  {item.icon && <span className="nhs-navigation-split-view__item-icon">{item.icon}</span>}
			  <span className="nhs-navigation-split-view__item-content">
				<span className="nhs-navigation-split-view__item-label">{item.label}</span>
				{item.description && (
				  <span className="nhs-navigation-split-view__item-description">{item.description}</span>
				)}
				{renderItemContent?.(item)}
			  </span>
			  {item.badge !== undefined && (
				<span className="nhs-navigation-split-view__badge">{item.badge}</span>
			  )}
			</button>
		  </li>
		);
	  };
	  return React.memo(C);
	}, [getId, handleSelect, renderItemContent]);
	return (
	  <>
		<ul
		  ref={listRef}
		  className="nhs-navigation-split-view__list"
		  onKeyDown={onKeyDownList}
		  role="listbox"
		  aria-describedby={instructionsId}
		  aria-activedescendant={selectedId ? String(selectedId) : undefined}
		>
  		{ items.map((item, idx) => <NavItem key={getId(item)} item={item} idx={idx} selected={getId(item) === selectedId} />)}
		{ items.length === 0 && !isLoading && (
		  <li className="nhs-navigation-split-view__list-item" aria-disabled="true">
			{emptyState || <div style={{ padding: 16 }}>No items</div>}
		  </li>
		)}
		</ul>
		<div id={instructionsId} style={{ position:'absolute', width:1, height:1, overflow:'hidden', clip:'rect(0 0 0 0)' }}>
		  {navigationInstructions}
		</div>
	  </>
	);
  };

  return (
	<div
	  ref={rootRef}
	  className={rootClasses}
	  aria-label={a11y?.rootLabel}
	  data-layout={effectiveLayout}
	>
	  <div className="nhs-navigation-split-view__body">
		<div className="nhs-navigation-split-view__panes" data-active-detail={detailActive || undefined} style={{ transform: detailActive ? 'translateX(-100%)' : undefined }}>
		  {/* Navigation Pane */}
		  <div
			className="nhs-navigation-split-view__nav-pane"
			role="navigation"
			aria-label={a11y?.navigationLabel || 'Items'}
			data-collapsed={navCollapsed || undefined}
		  >
			{ collapsibleNav && isAtLeastMedium && (
			  <div className="nhs-navigation-split-view__nav-collapse">
				<button
				  type="button"
				  onClick={toggleNav}
				  className="nhs-navigation-split-view__nav-collapse-btn"
				  aria-label={navCollapsed ? collapseToggleLabelShow : collapseToggleLabelHide}
	  			  title={navCollapsed ? collapseToggleLabelShow : collapseToggleLabelHide}
				>
	  			{/* Customisable icons with sensible fallbacks */}
	  			{ navCollapsed ? (collapseToggleIconShow || <ChevronRightIcon />) : (collapseToggleIconHide || <ChevronLeftIcon />) }
				</button>
			  </div>
			)}
			<div className="nhs-navigation-split-view__nav-scroll">
			  {renderNavigationCollection()}
			</div>
			{navFooter && (
			  <div className="nhs-navigation-split-view__nav-footer" role="contentinfo">
				{navFooter}
			  </div>
			)}
		  </div>

		  {/* Content Pane */}
		  <div
			ref={contentPaneRef}
			className="nhs-navigation-split-view__content-pane"
			role="region"
			aria-label={a11y?.contentLabel || 'Content'}
			data-has-selection={!!selectedItem || undefined}
			tabIndex={-1}
		  >
			{showHeader && (
			  <div className="nhs-navigation-split-view__header">
				{renderedHeaderInner}
			  </div>
			)}
			<div className="nhs-navigation-split-view__content-inner" style={{ padding: 32, flex: 1 }}>
			  {renderContent(selectedItem)}
			</div>
		  </div>

		  {/* Secondary Pane (three-column on desktop) */}
		  { effectiveLayout === 'three-column' && (!lazySecondary || secondaryMounted) && (
			<div
			  className="nhs-navigation-split-view__secondary-pane"
			  role="region"
			  aria-label={a11y?.secondaryContentLabel || 'Secondary'}
			>
			  <div style={{ padding: 32, flex: 1, minWidth: 0 }}>
				{renderSecondaryContent?.(selectedItem)}
			  </div>
			</div>
		  )}
		</div>
	{/* Live regions */}
	<div ref={liveRef} aria-live="polite" aria-atomic="true" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }} />
	<div aria-live="polite" style={{ position:'absolute', width:1, height:1, overflow:'hidden', clip:'rect(0 0 0 0)' }}>
	  {drilledIn ? 'Expanded to three column layout' : 'In two column layout'}
	</div>
	  </div>
	</div>
  );
}

NavigationSplitView.displayName = 'NavigationSplitView';
