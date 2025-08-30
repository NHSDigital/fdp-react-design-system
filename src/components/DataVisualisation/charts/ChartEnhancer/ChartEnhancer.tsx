import * as React from 'react';

export interface ChartEnhancerProps {
  /**
   * CSS selector used to locate the chart figure(s) to enhance.
   * Defaults to 'figure.fdp-chart'. All matches receive the class 'fdp-chart--enhanced'.
   */
  selector?: string;
  /** Optional callback fired after enhancement completes (provides enhanced elements) */
  onEnhanced?: (elements: HTMLElement[]) => void;
  /** Optional delay (ms) before applying enhancement (useful for Storybook demos) */
  delay?: number;
  /** Children containing one or more chart figures */
  children: React.ReactNode;
}

/**
 * ChartEnhancer automatically applies the `.fdp-chart--enhanced` class to any chart figure(s)
 * once the client has hydrated. This hides the static fallback table rendered by `ChartNoScript`
 * while preserving the `<noscript>` content for non‑JS scenarios.
 *
 * Example:
 * ```tsx
 * <ChartEnhancer>
 *   <ChartNoScript title="KPI" table={tableProps} />
 *   // Interactive chart mounts here
 * </ChartEnhancer>
 * ```
 */
const ChartEnhancer: React.FC<ChartEnhancerProps> = ({ selector = 'figure.fdp-chart', onEnhanced, delay = 0, children }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const apply = () => {
      const figures = Array.from(root.querySelectorAll<HTMLElement>(selector));
      if (figures.length === 0) return;
      const newlyEnhanced: HTMLElement[] = [];
      figures.forEach(fig => {
        if (!fig.classList.contains('fdp-chart--enhanced')) {
          fig.classList.add('fdp-chart--enhanced');
          newlyEnhanced.push(fig);
        }
      });
      if (newlyEnhanced.length && onEnhanced) onEnhanced(newlyEnhanced);
    };
    if (delay > 0) {
      const t = window.setTimeout(apply, delay);
      return () => window.clearTimeout(t);
    }
    apply();
  }, [selector, onEnhanced, delay]);

  return <div ref={ref}>{children}</div>;
};

export default ChartEnhancer;
