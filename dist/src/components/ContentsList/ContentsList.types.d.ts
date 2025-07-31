export interface ContentsListItem {
    /**
     * The text to display for the item
     */
    text: string;
    /**
     * The URL for the item (not used if current is true)
     */
    href?: string;
    /**
     * Whether this item represents the current page
     * @default false
     */
    current?: boolean;
    /**
     * Additional HTML attributes for the item
     */
    attributes?: Record<string, string>;
}
export interface ContentsListProps {
    /**
     * Array of content items
     */
    items: ContentsListItem[];
    /**
     * Additional CSS class names
     */
    classes?: string;
    /**
     * Aria label for the navigation
     * @default "Pages in this guide"
     */
    ariaLabel?: string;
    /**
     * Additional HTML attributes
     */
    attributes?: Record<string, string>;
}
