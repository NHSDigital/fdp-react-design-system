import React from 'react';
import { SlotMatrixLegendProps } from './SlotMatrix.types';
import { Tag } from '../Tag';
import { TagColor } from '../Tag/Tag.types';

/**
 * SlotMatrixLegend (refactored)
 * Uses design system Tag component for consistent visual language.
 */
export const SlotMatrixLegend: React.FC<SlotMatrixLegendProps> = ({ items, orientation = 'horizontal' }) => {
  return (
    <div className={`nhs-slot-matrix__legend nhs-slot-matrix__legend--${orientation}`} role="list" aria-label="Slot legend">
      {items.map(item => (
        <div key={item.status} role="listitem" className="nhs-slot-matrix__legend-item">
          <Tag color={mapStatusToTagColor(item.status)} text={item.label} />
        </div>
      ))}
    </div>
  );
};

function mapStatusToTagColor(status: string): TagColor {
  switch (status) {
    case 'available': return 'green';
    case 'full': return 'grey';
    case 'overbook': return 'orange';
    case 'held': return 'yellow';
    // 'blocked' not mapped directly; choose grey as neutral representation
    case 'blocked': return 'grey';
    default: return 'default';
  }
}
