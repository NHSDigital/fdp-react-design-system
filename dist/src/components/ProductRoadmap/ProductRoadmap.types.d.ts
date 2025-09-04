import React from 'react';
export interface ProductRoadmapItem {
    /** Rich text / inline HTML allowed (sanitise before passing) */
    content: React.ReactNode;
    /** 1-based column index referencing the date heading */
    date: number;
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
}
export interface ProductRoadmapCategory {
    heading: string;
    roadmapItems: ProductRoadmapItem[];
}
export interface ProductRoadmapProps extends React.HTMLAttributes<HTMLDivElement> {
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
}
