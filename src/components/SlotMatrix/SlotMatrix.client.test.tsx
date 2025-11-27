import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { SlotMatrix } from './SlotMatrix';
import { generateSessions, generateSlots } from './generateSlotMatrixMocks';

describe('SlotMatrix (client)', () => {
  it('renders ARIA grid with headers and cells', () => {
    const date = new Date('2025-01-01');
    const sessions = generateSessions({ date });
    const slots = generateSlots(sessions, { date });
    render(<SlotMatrix slots={slots} sessions={sessions} dateRange={{ start: date, end: date }} />);
    expect(screen.getByRole('grid')).toBeInTheDocument();
    // At least one gridcell
    expect(screen.getAllByRole('gridcell').length).toBeGreaterThan(0);
  });
});
