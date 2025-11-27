import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { NavigationSplitView } from './NavigationSplitView';

const items = [
  { id: 'al', label: 'Alpha' },
  { id: 'br', label: 'Bravo' },
  { id: 'ch', label: 'Charlie' },
  { id: 'da', label: 'Delta' }
];

describe('NavigationSplitView (typeahead)', () => {
  it('moves focus to next matching item on character press, wrapping', () => {
    render(<NavigationSplitView items={items} renderContent={() => <div />} forceLayout="list" />);
    const listbox = screen.getByRole('listbox');
    // Focus first
    (listbox.querySelector('[data-nav-item]') as HTMLElement).focus();
    // Press 'd'
    fireEvent.keyDown(listbox, { key: 'd' });
    expect(document.activeElement?.id).toBe('da');
    // Press 'a' should go to next starting with a after current index (wrap to Alpha)
    fireEvent.keyDown(listbox, { key: 'a' });
    expect(document.activeElement?.id).toBe('al');
    // Press 'b' then 'c'
    fireEvent.keyDown(listbox, { key: 'b' });
    expect(document.activeElement?.id).toBe('br');
    fireEvent.keyDown(listbox, { key: 'c' });
    expect(document.activeElement?.id).toBe('ch');
  });

  it('skips disabled items in typeahead search', () => {
    const local = [...items];
  (local as any)[2] = { ...(local as any)[2], disabled: true }; // Charlie disabled
    render(<NavigationSplitView items={local} renderContent={() => <div />} forceLayout="list" />);
    const listbox = screen.getByRole('listbox');
    (listbox.querySelector('[data-nav-item]') as HTMLElement).focus();
    fireEvent.keyDown(listbox, { key: 'c' });
    // Should remain on first (no enabled match starting with c after wrap except disabled one)
    expect(document.activeElement?.id).not.toBe('ch');
  });
});
