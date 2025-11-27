import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Details } from './Details';

describe('Details (client)', () => {
  it('closed by default (no open attribute)', () => {
    const { container } = render(<Details summaryText="Summary" text="Content" />);
    expect(container.querySelector('details')?.hasAttribute('open')).toBe(false);
  });
  it('toggles when summary clicked', () => {
    const { container, getByText } = render(<Details summaryText="Summary" text="Content" />);
    const details = container.querySelector('details');
    const summary = getByText('Summary');
    expect(details?.hasAttribute('open')).toBe(false);
    fireEvent.click(summary);
    expect(details?.hasAttribute('open')).toBe(true);
    fireEvent.click(summary);
    expect(details?.hasAttribute('open')).toBe(false);
  });
  it('summary focusability (tabindex)', () => {
    const { container } = render(<Details summaryText="Summary" text="Content" />);
    const summary = container.querySelector('summary');
    expect(summary?.getAttribute('tabindex')).toBe('0');
  });
});
