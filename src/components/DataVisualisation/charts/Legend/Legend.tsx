import * as React from 'react';
import { pickSeriesColor, pickSeriesStroke, pickRegionColor, pickRegionStroke, pickSeverityColor, pickSeverityStroke, pickOrgLevelColor, pickOrgLevelStroke } from '../../utils/colors';
import { useVisibility } from '../../core/VisibilityContext';

export interface LegendItem {
  id: string;
  label: string;
  color?: string; // explicit override fill colour
  stroke?: string; // explicit stroke
  palette?: 'categorical' | 'region' | 'severity' | 'org-level';
  description?: string; // optional accessible description / tooltip (future)
  /** Optional pattern data URI (e.g. from patternDataUrl). When provided overlays on top of colour for CVD-friendly distinction. */
  patternDataUrl?: string;
}

export interface LegendProps {
  /** Legend items. If omitted and a VisibilityProvider is present, auto inference may be added later. */
  items?: LegendItem[];
  palette?: 'categorical' | 'region' | 'severity';
  direction?: 'row' | 'column';
  /** Make legend interactive – clicking toggles series visibility */
  interactive?: boolean;
  /** If true (default) adjust a white stroke token to dark on white page backgrounds for visibility */
  adjustStrokeForWhiteBackground?: boolean;
  /** Controlled hidden ids (when supplied component is controlled) */
  hiddenIds?: string[];
  /** Default hidden ids (uncontrolled) */
  defaultHiddenIds?: string[];
  /** Callback whenever visibility changes */
  onVisibilityChange?: (visibleIds: string[], hiddenIds: string[]) => void;
  /** Optional announcement override; return string describing change */
  formatAnnouncement?: (id: string, nowVisible: boolean, label: string) => string;
}

/** Legend with optional interactive show/hide toggling and aria-live announcements */
export const Legend: React.FC<LegendProps> = ({
  items: itemsProp,
  palette = 'categorical',
  direction = 'row',
  interactive = false,
  adjustStrokeForWhiteBackground = true,
  hiddenIds,
  defaultHiddenIds = [],
  onVisibilityChange,
  formatAnnouncement
}) => {
  const visibility = useVisibility();
  const contextInteractive = !!(visibility && !interactive && !onVisibilityChange && hiddenIds === undefined);
  const effectiveInteractive = interactive || contextInteractive;
  const items = itemsProp || [];
  const controlled = hiddenIds !== undefined;
  const [internalHidden, setInternalHidden] = React.useState<Set<string>>(new Set(defaultHiddenIds));
  const effectiveHidden = controlled ? new Set(hiddenIds) : internalHidden;
  const [announcement, setAnnouncement] = React.useState('');

  const toggle = (id: string) => {
    if (contextInteractive && visibility) {
      const wasHidden = visibility.isHidden(id);
      visibility.toggle(id);
      const item = items.find(i => i.id === id);
      const label = item?.label || id;
      const msg = formatAnnouncement
        ? formatAnnouncement(id, wasHidden, label)
        : `${label} ${wasHidden ? 'shown' : 'hidden'}`;
      setAnnouncement(msg);
      return;
    }
    if (!effectiveInteractive) return;
    const next = new Set(effectiveHidden);
    const wasHidden = next.has(id);
    if (wasHidden) next.delete(id); else next.add(id);
    if (!controlled) setInternalHidden(next);
    const visibleIds = items.filter(i => !next.has(i.id)).map(i => i.id);
    const hiddenNow = Array.from(next);
    onVisibilityChange?.(visibleIds, hiddenNow);
    const item = items.find(i => i.id === id);
    const label = item?.label || id;
    const msg = formatAnnouncement
      ? formatAnnouncement(id, wasHidden, label)
      : `${label} ${wasHidden ? 'shown' : 'hidden'}`;
    setAnnouncement(msg);
  };

  return (
    <div className="fdp-legend-wrapper">
      <ul className={`fdp-legend fdp-legend--${direction}`}> 
        {items.map((item, i) => {
          const effectivePalette = item.palette || palette;
          const fill = item.color || (
            effectivePalette === 'region' ? pickRegionColor(item.id, i)
            : effectivePalette === 'severity' ? pickSeverityColor(item.id, i)
            : effectivePalette === 'org-level' ? pickOrgLevelColor(item.id, i)
            : pickSeriesColor(i)
          );
          let stroke = item.stroke || (
            effectivePalette === 'region' ? pickRegionStroke(item.id, i)
            : effectivePalette === 'severity' ? pickSeverityStroke(item.id, i)
            : effectivePalette === 'org-level' ? pickOrgLevelStroke(item.id, i)
            : pickSeriesStroke(i)
          );
          if (adjustStrokeForWhiteBackground && stroke) {
            const norm = stroke.trim().toLowerCase();
            if (norm === '#fff' || norm === '#ffffff' || norm === 'white' || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(norm)) {
              // Override to dark neutral for visibility against white legend background.
              stroke = '#212b32';
            }
          }
          const hidden = contextInteractive && visibility ? visibility.isHidden(item.id) : effectiveHidden.has(item.id);
          const btnProps: React.ButtonHTMLAttributes<HTMLButtonElement> = effectiveInteractive ? {
            'aria-pressed': !hidden,
            'aria-label': `${item.label} (${hidden ? 'show' : 'hide'})`,
            onClick: () => toggle(item.id)
          } : { 'aria-label': item.label };
          return (
            <li key={item.id} className={`fdp-legend__item${hidden ? ' fdp-legend__item--hidden' : ''}`}> 
              <button
                type="button"
                className="fdp-legend__swatch"
                style={{
                  backgroundColor: fill,
                  backgroundImage: item.patternDataUrl ? `url(${item.patternDataUrl})` : undefined,
                  backgroundSize: item.patternDataUrl ? 'auto' : undefined,
                  borderColor: stroke
                }}
                {...btnProps}
              />
              <span className="fdp-legend__label">{item.label}</span>
            </li>
          );
        })}
      </ul>
  {effectiveInteractive && (
        <div className="fdp-visually-hidden" aria-live="polite" aria-atomic="true">{announcement}</div>
      )}
    </div>
  );
};

export default Legend;
