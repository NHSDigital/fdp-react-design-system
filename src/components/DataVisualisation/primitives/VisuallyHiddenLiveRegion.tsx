import * as React from 'react';
import { useTooltipContext } from '../core/TooltipContext';

/**
 * ARIA live region announcing the currently focused data point for screen reader users.
 * Mount inside TooltipProvider scope (e.g. within LineChart). Hidden visually.
 */
const VisuallyHiddenLiveRegion: React.FC<{ polite?: boolean; format?: (d: { seriesId: string; x: Date; y: number; index: number }) => string }>
  = ({ polite = true, format }) => {
  const tooltip = useTooltipContext();
  const [message, setMessage] = React.useState('');
  const lastRef = React.useRef<string>('');

  React.useEffect(() => {
    if (!tooltip?.focused) return;
    const { focused, aggregated } = tooltip;
    let msg: string;
    if (aggregated && aggregated.length > 1) {
      // Aggregate announcement
      const parts = aggregated.map(a => `${a.seriesId} ${a.y}`).join('; ');
      msg = `${focused.x.toDateString()} – ${parts}`;
    } else {
      msg = format ? format({ seriesId: focused.seriesId, x: focused.x, y: focused.y, index: focused.index })
        : defaultFormatter(focused.seriesId, focused.x, focused.y, focused.index);
    }
    if (msg !== lastRef.current) {
      lastRef.current = msg;
      // Force screen reader to re-announce by clearing then setting (some AT benefit from refresh)
      setMessage('');
      const timeout = setTimeout(() => setMessage(msg), 10);
      return () => clearTimeout(timeout);
    }
  }, [tooltip?.focused, format]);

  return (
    <div
      aria-live={polite ? 'polite' : 'assertive'}
      aria-atomic="true"
      style={{ position: 'absolute', width: 1, height: 1, margin: -1, padding: 0, overflow: 'hidden', clip: 'rect(0 0 0 0)', border: 0 }}
    >
      {message}
    </div>
  );
};

function defaultFormatter(seriesId: string, x: Date, y: number, index: number) {
  return `Series ${seriesId}, point ${index + 1}, ${x.toDateString()}, value ${y}`;
}

export default VisuallyHiddenLiveRegion;
