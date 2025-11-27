import * as React from 'react';

export interface ChartDimensions {
  width: number;
  height: number;
  innerWidth: number;
  innerHeight: number;
  margin: { top: number; right: number; bottom: number; left: number };
  ref: React.RefObject<HTMLDivElement | null>;
}

export function useChartDimensions(initial: Partial<ChartDimensions['margin']> = {}): ChartDimensions {
  const ref = React.useRef<HTMLDivElement>(null);
  const margin = React.useMemo(() => ({
    top: initial.top ?? 16,
    right: initial.right ?? 16,
    bottom: initial.bottom ?? 32,
    left: initial.left ?? 48
  }), [initial.bottom, initial.left, initial.right, initial.top]);

  const [dims, setDims] = React.useState({ width: 0, height: 0 });

  React.useLayoutEffect(() => {
    if (!ref.current) return;    
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDims({ width, height });
      }
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const innerWidth = Math.max(0, dims.width - margin.left - margin.right);
  const innerHeight = Math.max(0, dims.height - margin.top - margin.bottom);

  return { width: dims.width, height: dims.height, innerWidth, innerHeight, margin, ref };
}
