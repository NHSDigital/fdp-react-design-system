export type GridWidth = 'one-quarter' | 'one-third' | 'one-half' | 'two-thirds' | 'three-quarters' | 'full';
export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'large-desktop';
export type Float = 'left' | 'right';
export interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    fluid?: boolean;
    maxWidth?: string;
}
export interface RowProps {
    children: React.ReactNode;
    className?: string;
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
}
export interface GridProps {
    children: React.ReactNode;
    className?: string;
}
