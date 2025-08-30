import React from 'react';
import { SlotMatrixToolbarProps } from './SlotMatrix.types';
import { Button } from '../Button';
import { Select } from '../Select';

/**
 * SlotMatrixToolbar (scaffold)
 * Minimal internal toolbar shell – consumers can pass a custom toolbar prop to SlotMatrix instead.
 * Future: add filter chips, date picker popover, export actions etc.
 */
export const SlotMatrixToolbar: React.FC<SlotMatrixToolbarProps> = ({
  dateRange,
  onPrev,
  onNext,
  onToday,
  density,
  onDensityChange,
  a11yMode,
  onA11yModeChange
}) => {
  return (
    <div className="nhs-slot-matrix__toolbar" role="group" aria-label="Slot matrix controls">
      <div className="nhs-slot-matrix__toolbar-section">
        <Button variant="secondary" size="small" onClick={onPrev} aria-label="Previous date range">Prev</Button>
        <Button variant="secondary" size="small" onClick={onToday} aria-label="Jump to today">Today</Button>
        <Button variant="secondary" size="small" onClick={onNext} aria-label="Next date range">Next</Button>
        <span className="nhs-slot-matrix__toolbar-daterange" aria-live="polite">
          {dateRange.start.toDateString()} – {dateRange.end.toDateString()}
        </span>
      </div>
      <div className="nhs-slot-matrix__toolbar-section">
        <label className="nhs-slot-matrix__toolbar-label" htmlFor="slot-matrix-density-select">Density</label>
        <Select
          id="slot-matrix-density-select"
          name="slot-matrix-density"
          ariaLabel="Change density"
          value={density}
          onChange={(e) => onDensityChange?.(e.target.value as 'comfortable' | 'compact')}
          options={[
            { value: 'comfortable', text: 'Comfortable' },
            { value: 'compact', text: 'Compact' }
          ]}
        />
        <label className="nhs-slot-matrix__toolbar-label" htmlFor="slot-matrix-mode-select">Mode</label>
        <Select
          id="slot-matrix-mode-select"
          name="slot-matrix-mode"
          ariaLabel="Change accessibility mode"
          value={a11yMode}
          onChange={(e) => onA11yModeChange?.(e.target.value as 'grid' | 'list')}
          options={[
            { value: 'grid', text: 'Grid' },
            { value: 'list', text: 'List' }
          ]}
        />
      </div>
    </div>
  );
};
