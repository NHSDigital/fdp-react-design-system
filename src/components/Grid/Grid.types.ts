export enum GridWidth {
	OneQuarter = "one-quarter",
	OneThird = "one-third",
	OneHalf = "one-half",
	TwoThirds = "two-thirds",
	ThreeQuarters = "three-quarters",
	Full = "full",
}

export enum Breakpoint {
	Mobile = "mobile",
	Tablet = "tablet",
	Desktop = "desktop",
	LargeDesktop = "large-desktop",
}

export enum Float {
	Left = "left",
	Right = "right",
}

export interface ContainerProps {
	children: React.ReactNode;
	className?: string;
	fluid?: boolean;
	maxWidth?: string;
	style?: React.CSSProperties;
}

export interface RowProps {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

export enum ColumnAlign {
	Left = "left",
	Center = "center",
	Right = "right",
}

export interface ColumnProps {
	children: React.ReactNode;
	width?: GridWidth;
	mobileWidth?: GridWidth;
	tabletWidth?: GridWidth;
	desktopWidth?: GridWidth;
	start?: number; // Grid column start position (1-12)
	className?: string;
	forceWidth?: boolean; // Uses utility classes that force width on all screen sizes
	style?: React.CSSProperties;
	align?: ColumnAlign;
}

export interface GridProps {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties; // forwarded to Container
}
