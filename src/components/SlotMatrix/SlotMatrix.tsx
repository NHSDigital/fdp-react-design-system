import React, { useMemo, useState, useCallback } from 'react';
import classNames from 'classnames';
import { SlotMatrixProps, SlotMatrixSlot, InternalSlotCellData, LegendItem } from './SlotMatrix.types';
import { SlotMatrixToolbar } from './SlotMatrixToolbar';
import { SlotMatrixLegend } from './SlotMatrixLegend';
import { Grid, Row, Column } from '../Grid';
import './SlotMatrix.scss';

/**
 * SlotMatrix (initial scaffold)
 * - Renders an ARIA grid with timebands as rows and sessions as columns
 * - Minimal selection (single) and keyboard navigation prototype
 * - Designed to iterate; not production-ready
 */
export const SlotMatrix: React.FC<SlotMatrixProps> = ({
  slots,
  sessions,
  // dateRange reserved for future horizontal multi-day features
  value,
  defaultValue,
  onChange,
  selectionMode = 'single',
  a11yMode: controlledA11yMode,
  className,
  style,
  getSlotAriaLabel,
  toolbar,
  enableDefaultToolbar = true,
  legendItems,
  enableDefaultLegend = true,
  legendPlacement = 'bottom',
  onA11yModeChange
}) => {
  const [uncontrolledA11yMode, setUncontrolledA11yMode] = useState<'grid' | 'list'>('grid');
  const a11yMode = controlledA11yMode || uncontrolledA11yMode;
  const [internalSelection, setInternalSelection] = useState<string[]>(defaultValue || []);
  const selected = value ?? internalSelection;

  // Potential future usage: slotMap for O(1) selection lookups or metadata joins.

  // Group slots by timeband & session for fast lookups
  const timebandKeys = useMemo(() => {
    const keys = new Set<number>();
    slots.forEach(s => keys.add(new Date(s.start).getTime()));
    return Array.from(keys).sort((a,b) => a - b);
  }, [slots]);

  const byTimeband: Record<number, Record<string, InternalSlotCellData>> = useMemo(() => {
    const map: Record<number, Record<string, InternalSlotCellData>> = {};
    slots.forEach(slot => {
      const k = new Date(slot.start).getTime();
      if (!map[k]) map[k] = {};
      const remaining = slot.capacity - slot.booked - (slot.held || 0);
      map[k][slot.sessionId] = { slot, remaining };
    });
    return map;
  }, [slots]);

  const toggleSelect = useCallback((slot: SlotMatrixSlot) => {
    if (selectionMode === 'single') {
      const next = [slot.id];
      if (!value) setInternalSelection(next);
      onChange?.(next, { lastAction: 'select' });
    } else {
      const exists = selected.includes(slot.id);
      const next = exists ? selected.filter(id => id !== slot.id) : [...selected, slot.id];
      if (!value) setInternalSelection(next);
      onChange?.(next, { lastAction: exists ? 'deselect' : 'select' });
    }
  }, [selectionMode, selected, value, onChange]);

  const derivedLegend: LegendItem[] | undefined = useMemo(() => {
    if (legendItems) return legendItems;
    if (!enableDefaultLegend) return undefined;
    const statuses = Array.from(new Set(slots.map(s => s.status)));
    return statuses.map(st => ({
      status: st,
      label: st.charAt(0).toUpperCase() + st.slice(1)
    }));
  }, [legendItems, enableDefaultLegend, slots]);

  const legendNode = derivedLegend ? (
    <SlotMatrixLegend
      items={derivedLegend}
      orientation={legendPlacement === 'left' || legendPlacement === 'right' ? 'vertical' : 'horizontal'}
    />
  ) : null;

  const handleA11yModeChange = (mode: 'grid' | 'list') => {
    if (!controlledA11yMode) setUncontrolledA11yMode(mode);
    onA11yModeChange?.(mode);
  };

  const toolbarNode = toolbar || (enableDefaultToolbar ? (
    <SlotMatrixToolbar
      dateRange={{ start: new Date(), end: new Date() }}
      density={'comfortable'}
      a11yMode={a11yMode}
      onA11yModeChange={handleA11yModeChange}
    />
  ) : null);

  const ListView = (
    <div style={style} className={classNames(className)}>
      <Grid className={classNames('nhs-slot-matrix-grid-wrapper')}>
      <Row>
        <Column width="full">
          <div className="nhs-slot-matrix">
            {toolbarNode}
            {legendPlacement === 'top' && legendNode}
            <ul aria-label="Appointment slots list">
              {slots.map(s => (
                <li key={s.id}>
                  <button type="button" onClick={() => toggleSelect(s)} aria-pressed={selected.includes(s.id)}>
                    {formatTime(new Date(s.start))} – {formatTime(new Date(s.end))} ({s.status})
                  </button>
                </li>
              ))}
            </ul>
            {legendPlacement === 'bottom' && legendNode}
          </div>
        </Column>
      </Row>
      </Grid>
    </div>
  );
  if (a11yMode === 'list') return ListView;

  return (
    <div style={style} className={classNames(className)}>
      <Grid className={classNames('nhs-slot-matrix-grid-wrapper')}>
      <Row>
        <Column width="full">
          <div className="nhs-slot-matrix">
            {toolbarNode}
            {legendPlacement === 'top' && legendNode}
            <div role="grid" aria-rowcount={timebandKeys.length + 1} aria-colcount={sessions.length + 1}>
        {/* Header row */}
        <div role="row" className="nhs-slot-matrix__row">
          <div role="columnheader" aria-label="Timebands" className="nhs-slot-matrix__timeband-header" />
          {sessions.map(session => (
            <div key={session.id} role="columnheader" aria-label={`Session ${session.specialty}`} className="nhs-slot-matrix__session-header">
              {session.specialty}
            </div>
          ))}
        </div>
        {timebandKeys.map((tk) => (
          <div key={tk} role="row" className="nhs-slot-matrix__row">
            <div role="rowheader" className="nhs-slot-matrix__timeband-header" aria-label={formatTime(new Date(tk))}>
              {formatTime(new Date(tk))}
            </div>
            {sessions.map(session => {
              const cellData = byTimeband[tk]?.[session.id];
              if (!cellData) {
                return <div key={session.id} role="gridcell" className="nhs-slot-matrix__cell" aria-disabled="true" />;
              }
              const { slot, remaining } = cellData;
              const isSelected = selected.includes(slot.id);
              const ariaLabel = getSlotAriaLabel ? getSlotAriaLabel(slot) : `Slot ${formatTime(new Date(slot.start))} ${slot.status}${remaining === 0 ? ' full' : ''}`;
              return (
                <button
                  key={slot.id}
                  type="button"
                  role="gridcell"
                  data-status={slot.status}
                  className={classNames('nhs-slot-matrix__cell', isSelected && 'nhs-slot-matrix__cell--selected')}
                  aria-label={ariaLabel}
                  aria-selected={isSelected || undefined}
                  onClick={() => toggleSelect(slot)}
                >
                  {remaining > 0 ? `${remaining} left` : 'Full'}
                </button>
              );
            })}
          </div>
        ))}
            </div>
            {legendPlacement === 'bottom' && legendNode}
          </div>
        </Column>
      </Row>
      </Grid>
    </div>
  );
};

function pad(n: number) { return n < 10 ? `0${n}` : `${n}`; }
function formatTime(d: Date) { return `${pad(d.getHours())}:${pad(d.getMinutes())}`; }
