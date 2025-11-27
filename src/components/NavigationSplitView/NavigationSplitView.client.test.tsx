import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { NavigationSplitView } from './NavigationSplitView';

const items = [
  { id: 'a', label: 'Alpha' },
  { id: 'b', label: 'Bravo' },
  { id: 'c', label: 'Charlie', disabled: true },
  { id: 'd', label: 'Delta' }
];

describe('NavigationSplitView (client)', () => {
  it('roves focus with ArrowDown / ArrowUp and selects with Enter (skips disabled selection)', () => {
    render(<NavigationSplitView items={items} renderContent={() => <div />} />);
    const listbox = screen.getByRole('listbox');
    // Focus first focusable option
    (listbox.querySelector('[data-nav-item]') as HTMLElement).focus();
    fireEvent.keyDown(listbox, { key: 'ArrowDown' });
  fireEvent.keyDown(listbox, { key: 'ArrowDown' }); // move to disabled (c)
  const disabledOption = screen.getByRole('option', { name: /Charlie/ });
  expect(disabledOption).toHaveAttribute('aria-disabled', 'true');
  fireEvent.keyDown(listbox, { key: 'Enter' }); // attempt selection
  expect(disabledOption).not.toHaveAttribute('aria-selected', 'true');
    fireEvent.keyDown(listbox, { key: 'ArrowDown' }); // move to d
    fireEvent.keyDown(listbox, { key: 'Enter' });
    expect(screen.getByRole('option', { selected: true }).id).toBe('d');
  });

  it('announces selection changes via live region (polite)', () => {
    render(<NavigationSplitView items={items} renderContent={() => <div />} />);
    const listbox = screen.getByRole('listbox');
    (listbox.querySelector('[data-nav-item]') as HTMLElement).focus();
    fireEvent.keyDown(listbox, { key: 'ArrowDown' });
    fireEvent.keyDown(listbox, { key: 'Enter' });
    const live = document.querySelector('[aria-live="polite"][aria-atomic="true"]') as HTMLElement;
    expect(live?.textContent).toContain('Selected');
  });
});
