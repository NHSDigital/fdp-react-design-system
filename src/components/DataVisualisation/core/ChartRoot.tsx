import * as React from 'react';
import { useChartDimensions, type ChartDimensions } from '../hooks/useChartDimensions';

export interface ChartRootProps {
  /** Explicit height (px). Width is responsive to parent unless set via style */
  height?: number;
  /** Override margins (top,right,bottom,left) */
  margin?: Partial<ChartDimensions['margin']>;
  /** Optional explicit width; otherwise flex/parent controlled */
  width?: number | string;
  className?: string;
  children: React.ReactNode;
  role?: string;
  ariaLabel?: string;
}

interface ChartContextValue extends ChartDimensions {}

const ChartContext = React.createContext<ChartContextValue | null>(null);
export function useChartContext(): ChartContextValue | null { return React.useContext(ChartContext); }

export const ChartRoot: React.FC<ChartRootProps> = ({
  height = 240,
  margin,
  width,
  className = 'fdp-chart', // align with SCSS token application (.fdp-chart)
  children,
  role = 'group',
  ariaLabel
}) => {
  const dims = useChartDimensions(margin);
  const style: React.CSSProperties = { height, position: 'relative' };
  if (width !== undefined) style.width = typeof width === 'number' ? `${width}px` : width;

  return (
    <div ref={dims.ref as any} className={className} style={style} role={role} aria-label={ariaLabel}>
      <ChartContext.Provider value={dims}>
        {children}
      </ChartContext.Provider>
    </div>
  );
};

export default ChartRoot;
