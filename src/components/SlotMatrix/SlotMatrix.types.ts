import React from 'react';

// Core domain types (draft; may evolve)
export interface SlotMatrixSlot {
  id: string;
  sessionId: string;
  start: string; // ISO date-time
  end: string;   // ISO date-time
  capacity: number;
  booked: number;
  held?: number;
  overbook?: number;
  status: 'available' | 'full' | 'overbook' | 'held' | 'blocked';
  priorityTags?: string[];
  equipmentTags?: string[];
  roomId?: string;
  flags?: string[];
}

export interface SlotMatrixSession {
  id: string;
  specialty: string;
  consultant?: string;
  site?: string;
  roomId?: string;
  start: string; // session window
  end: string;
  maxOverbook?: number;
  attributes?: string[];
}

export interface SlotMatrixProps {
  slots: SlotMatrixSlot[];
  sessions: SlotMatrixSession[];
  dateRange: { start: Date; end: Date };
  timebandIntervalMinutes?: number; // default 30
  selectionMode?: 'single' | 'multi' | 'contiguous';
  value?: string[];            // controlled selected slot ids
  defaultValue?: string[];     // uncontrolled initial selection
  onChange?: (slotIds: string[], meta: { lastAction: string }) => void;
  loading?: boolean;
  density?: 'comfortable' | 'compact';
  highlightThresholds?: { lowRemaining?: number };
  showOverbook?: boolean;
  a11yMode?: 'grid' | 'list';
  /** Callback when accessibility mode changes (grid/list) via internal toolbar */
  onA11yModeChange?: (mode: 'grid' | 'list') => void;
  getSlotAriaLabel?: (slot: SlotMatrixSlot) => string;
  renderSlotTooltip?: (slot: SlotMatrixSlot) => React.ReactNode;
  liveUpdates?: { enabled: boolean; lastUpdated?: Date };
  /** Optional external toolbar content (filters, date nav) – if omitted internal minimal toolbar can render when enableDefaultToolbar=true */
  toolbar?: React.ReactNode;
  /** Whether to render a simple built-in toolbar shell (date + density toggles) when no custom toolbar passed */
  enableDefaultToolbar?: boolean;
  /** Legend configuration – pass explicit items to show; if omitted and enableDefaultLegend true a default legend is derived from visible statuses */
  legendItems?: LegendItem[];
  /** Enable rendering of the default legend (auto deriving statuses) when legendItems not provided */
  enableDefaultLegend?: boolean;
  /** Placement of legend relative to grid */
  legendPlacement?: 'bottom' | 'top' | 'right' | 'left';
  className?: string;
  style?: React.CSSProperties;
}

export interface InternalSlotCellData {
  slot: SlotMatrixSlot;
  remaining: number;
}

export interface LegendItem {
  status: SlotMatrixSlot['status'];
  label: string;
  description?: string;
  color?: string; // override swatch colour if needed
}

export interface SlotMatrixToolbarProps {
  dateRange: { start: Date; end: Date };
  onPrev?: () => void;
  onNext?: () => void;
  onToday?: () => void;
  density?: 'comfortable' | 'compact';
  onDensityChange?: (density: 'comfortable' | 'compact') => void;
  a11yMode: 'grid' | 'list';
  onA11yModeChange?: (mode: 'grid' | 'list') => void;
}

export interface SlotMatrixLegendProps {
  items: LegendItem[];
  orientation?: 'horizontal' | 'vertical';
}
