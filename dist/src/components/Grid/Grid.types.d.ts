export declare enum GridWidth {
    OneQuarter = "one-quarter",
    OneThird = "one-third",
    OneHalf = "one-half",
    TwoThirds = "two-thirds",
    ThreeQuarters = "three-quarters",
    Full = "full"
}
export declare enum Breakpoint {
    Mobile = "mobile",
    Tablet = "tablet",
    Desktop = "desktop",
    LargeDesktop = "large-desktop"
}
export declare enum Float {
    Left = "left",
    Right = "right"
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
export declare enum ColumnAlign {
    Left = "left",
    Center = "center",
    Right = "right"
}
export interface ColumnProps {
    children: React.ReactNode;
    width?: GridWidth;
    mobileWidth?: GridWidth;
    tabletWidth?: GridWidth;
    desktopWidth?: GridWidth;
    start?: number;
    className?: string;
    forceWidth?: boolean;
    style?: React.CSSProperties;
    align?: ColumnAlign;
}
export interface GridProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
