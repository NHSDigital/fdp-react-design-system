export type GridWidth = 
  | 'one-quarter' 
  | 'one-third' 
  | 'one-half' 
  | 'two-thirds' 
  | 'three-quarters' 
  | 'full';

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
  start?: number; // Grid column start position (1-12)
  className?: string;
  forceWidth?: boolean; // Uses utility classes that force width on all screen sizes
}

export interface GridProps {
  children: React.ReactNode;
  className?: string;
}
