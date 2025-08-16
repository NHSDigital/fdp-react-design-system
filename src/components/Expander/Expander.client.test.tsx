import React from 'react';
import { describe, it, expect } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Expander } from '../Expander';

describe('Expander (client)', () => {
  it('toggles open when summary clicked', () => {
    const { container, getByText } = render(<Expander summaryText="Summary" text="Content" />);
    const details = container.querySelector('details');
    const summary = getByText('Summary');
    expect(details?.hasAttribute('open')).toBe(false);
    fireEvent.click(summary);
    expect(details?.hasAttribute('open')).toBe(true);
    fireEvent.click(summary);
    expect(details?.hasAttribute('open')).toBe(false);
  });
  it('is keyboard focusable', () => {
    const { container } = render(<Expander summaryText="Summary" text="Content" />);
    const summary = container.querySelector('summary');
  // Native <summary> elements are focusable by default in most browsers without needing tabindex="0".
  // Instead of checking for an attribute (which we don't set), verify it can receive focus.
  summary?.focus();
  expect(document.activeElement).toBe(summary);
  });
  it('forwards ref', () => {
    const ref = React.createRef<HTMLDetailsElement>();
    const { container } = render(<Expander ref={ref} summaryText="Summary" text="Content" />);
    expect(ref.current).toBe(container.querySelector('details'));
  });
});
