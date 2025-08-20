import { render, fireEvent } from '@testing-library/react';
import { Legend } from './index';
import { describe, it, expect } from 'vitest';

describe('Legend interactive toggling', () => {
  const items = [
    { id: 'a', label: 'Alpha' },
    { id: 'b', label: 'Beta' }
  ];
  it('toggles visibility and announces', () => {
  const { getAllByRole, getByText } = render(<Legend items={items} interactive />);
  const buttons = getAllByRole('button');
    expect(buttons[0].getAttribute('aria-pressed')).toBe('true');
    fireEvent.click(buttons[0]);
    expect(buttons[0].getAttribute('aria-pressed')).toBe('false');
    // Announcement region should contain hidden text
    getByText(/Alpha hidden|Alpha shown/);
  });
});
