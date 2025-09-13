/**
 * SSR-Safe Component Exports
 *
 * Components re-exported here are verified to avoid React hooks / context in their
 * render paths so they can be safely imported in a server component (e.g. Next.js
 * App Router) without triggering client boundary errors.
 *
 * Legacy exports HeaderSSR / HeaderStatic have been removed – use `Header` directly.
 */

// SSR-safe Header (pure render path)
// Server-only Header markup (no hooks) – import directly from server entry to avoid client barrel imports
export { HeaderServer as Header } from './Header/Header.server';
export type { HeaderProps, NavigationItem } from './Header/Header.types';
export type { HeaderSearchProps } from './HeaderSearch';

// SSR-Safe Basic Components (verified to have no hooks or context usage)
export { ActionLink } from './ActionLink';
export type { ActionLinkProps } from './ActionLink';
/**
 * Preferred server-first Button export for SSR and SSG. Supports both <button> and <a> via props.
 */
export { ButtonServer } from './Button';
export type { ButtonServerProps } from './Button/Button.server';
export { BackLink } from './BackLink';
export type { BackLinkProps } from './BackLink';
export { Tag } from './Tag';
export type { TagColor, TagProps } from './Tag';
export { Label } from './Label';
export type { LabelProps } from './Label';
export { Heading } from './Heading';
export type { HeadingProps } from './Heading';
export { Hint } from './Hint';
export type { HintProps } from './Hint';
export { ErrorMessage } from './ErrorMessage';
export type { ErrorMessageProps } from './ErrorMessage';
export { Fieldset } from './Fieldset';
export type { FieldsetProps } from './Fieldset/Fieldset.types';
// Server-only SkipLink variant (no hooks)
export { SkipLinkServer as SkipLink } from './SkipLink/SkipLink.server';
export type { SkipLinkProps } from './SkipLink/SkipLink.types';

// Additional SSR-safe content components (verified pure render paths)
export { Details } from './Details';
export type { DetailsProps } from './Details/Details';
export { InsetText } from './InsetText';
export type { InsetTextProps } from './InsetText/InsetText.types';
export { Panel } from './Panel';
export type { PanelProps } from './Panel/Panel.types';
export { Breadcrumb } from './Breadcrumb';
export type { BreadcrumbProps, BreadcrumbItemProps } from './Breadcrumb/Breadcrumb.types';
export { List } from './List';
export type { ListProps, ListItemProps } from './List/List.types';
export { Footer } from './Footer';
export type { FooterProps, FooterLinkItem } from './Footer/Footer.types';
export { WarningCallout } from './WarningCallout';
export type { WarningCalloutProps } from './WarningCallout/WarningCallout';

// Layout and content primitives
export { Grid, Container, Row, Column } from './Grid';
export type { GridProps, ContainerProps, RowProps, ColumnProps } from './Grid';
export { GridWidth, Breakpoint, Float, ColumnAlign } from './Grid';

export { ContentsList } from './ContentsList';
export type { ContentsListProps, ContentsListItem } from './ContentsList';
export { DoDontList } from './DoDontList';
export type { DoDontListProps, DoDontListItem } from './DoDontList';

export { Images } from './Images';
export type { ImagesProps } from './Images';

export { Pagination } from './Pagination';
export type { PaginationProps } from './Pagination';

export { SummaryList } from './SummaryList';
export type { SummaryListProps, SummaryListItem } from './SummaryList';

export { SummaryCard } from './SummaryCard';
export type { SummaryCardProps } from './SummaryCard';

export { Table, TableCaption, TableBodyRow, TableHeaderCell, TableCell } from './Tables';
export type {
	TableProps,
	TableCellData,
	TableHeaderCellType,
	TableCaptionProps,
	TableBodyRowProps,
	TableHeaderCellComponentProps,
	TableDataCellComponentProps,
	TableColumn,
} from './Tables';

export { SpacingUtilities, getSpacingClass } from './SpacingUtilities';
export type { SpacingUtilitiesProps, SpacingUtilityClassNames } from './SpacingUtilities';

export { Hero } from './Hero';
export type { HeroProps } from './Hero';

export { Card, CardGroup, CardGroupItem } from './Card';
export type { CardProps, CardGroupProps, CardGroupItemProps, CardVariant, HeadingLevel as CardHeadingLevel } from './Card';

export { CareCard } from './CareCard';
export type { CareCardProps, CareCardType, HeadingLevel as CareCardHeadingLevel } from './CareCard';

// Server-first form controls
export { InputServer as Input } from './Input/Input.server';
export type { InputProps } from './Input/Input.types';
export { Textarea } from './Textarea';
export type { TextareaProps } from './Textarea/Textarea.types';
export { Select, SelectOption } from './Select';
export type { SelectProps, SelectOptionProps } from './Select/Select.types';

// ⚠️  REMOVED COMPONENTS (contain react-aria dependencies or other context dependencies):
// - Checkboxes, Radios (may use react-aria-components)

// ⚠️  EXCLUDED COMPONENTS (contain hooks, context, or react-aria dependencies):
// - All form input components that haven't been converted yet
// - Checkboxes, Radios (while client-enhanced paths depend on hooks/context)
// - DataTable, SortableDataTable (use hooks and state)
// - Any components that depend on NHSThemeProvider or react-aria dependencies
//
// If you need these components in SSR, consider:
// 1. Using dynamic imports with { ssr: false }
// 2. Wrapping in a client component with "use client"
// 3. Using the server-first alternatives where available (e.g., ButtonServer)
