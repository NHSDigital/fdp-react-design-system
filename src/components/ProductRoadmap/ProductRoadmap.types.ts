import React from "react";

export interface ProductRoadmapItem {
	/** Unique identifier for the item */
	id: string;
	title: string;
	/** Rich text / inline HTML allowed (sanitise before passing) */
	content: React.ReactNode;
	/** 1-based column index referencing the date heading (legacy). Mutually exclusive with startDate. */
	date?: number;
	/** Absolute start date (preferred modern API). If supplied overrides legacy date/length for positioning. */
	startDate?: string | Date;
	/** Absolute end date (exclusive end or inclusive depending on context; we treat as inclusive month). */
	endDate?: string | Date;
	/** Decimal offset within the starting column (0-1) */
	dateOffset?: number;
	/** Whole column span length */
	length?: number;
	/** Partial length (0-1) applied to first column span width */
	partialLength?: number;
	/** 1-based vertical position (row grouping inside category column) */
	verticalPosition?: number;
	/** Optional aria-label override for item */
	ariaLabel?: string;
	/** Optional nested drill-down child activities (initial drill-down feature). */
	childItems?: Array<{
		id: string;
		/** Short label for child activity */
		title: string;
		/** Optional richer content shown inside panel */
		content?: React.ReactNode;
		/** Optional status (planned|in-progress|blocked|done) */
		status?: string;
		/** Optional date range metadata */
		startDate?: string;
		endDate?: string;
		/** Arbitrary labels/tags */
		labels?: string[];
	}>;
	/** Alias for childItems (accepts transformed roadmap design-system.json). */
	children?: ProductRoadmapItem['childItems'];
}

export interface ProductRoadmapCategory {
	heading: string;
	roadmapItems: ProductRoadmapItem[];
}

export interface ProductRoadmapProps
	extends React.HTMLAttributes<HTMLDivElement> {
	/** Column/date headings */
	dateHeadings: string[];
	/** Category groupings of roadmap items */
	categories: ProductRoadmapCategory[];
	/** Column width in px (token friendly) */
	columnWidthPx?: number;
	/** Max text lines per item (affects height) */
	itemMaxLines?: number;
	/** Accessible label for the roadmap table */
	ariaLabel?: string;
	/** Enable experimental drill-down panels for items containing childItems */
	enableDrilldown?: boolean;
	/** Callback when an item is expanded/collapsed */
	onToggleItem?(itemId: string, expanded: boolean): void;
	/** Drilldown render mode: overlay panel (default) or inline child timeline */
	drilldownMode?: 'overlay' | 'inline';
}
