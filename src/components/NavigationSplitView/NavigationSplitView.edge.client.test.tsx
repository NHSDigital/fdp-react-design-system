import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { NavigationSplitView } from './NavigationSplitView';

const items = [
  { id: 'a', label: 'Alpha' },
  { id: 'b', label: 'Bravo' },
  { id: 'c', label: 'Charlie', disabled: true },
  { id: 'd', label: 'Delta' }
];

function wait(ms = 0) { return new Promise(res => setTimeout(res, ms)); }

describe('NavigationSplitView (edge client)', () => {
  it('handles Home / End keys for roving focus', () => {
    render(<NavigationSplitView items={items} renderContent={() => <div />} />);
    const listbox = screen.getByRole('listbox');
    (listbox.querySelector('[data-nav-item]') as HTMLElement).focus();
    fireEvent.keyDown(listbox, { key: 'End' });
    // Re-query after state update
    let opts = screen.getAllByRole('option');
    expect((document.activeElement as HTMLElement).id).toBe(opts[opts.length - 1].id);
    fireEvent.keyDown(listbox, { key: 'Home' });
    opts = screen.getAllByRole('option');
    expect((document.activeElement as HTMLElement).id).toBe(opts[0].id);
  });

  it('supports horizontal orientation arrow navigation', () => {
    render(<NavigationSplitView orientation="horizontal" items={items} renderContent={() => <div />} />);
    const listbox = screen.getByRole('listbox');
    const first = listbox.querySelector('[data-nav-item]') as HTMLElement;
    first.focus();
    fireEvent.keyDown(listbox, { key: 'ArrowRight' });
    fireEvent.keyDown(listbox, { key: 'ArrowRight' });
    // Focus now on disabled item (Charlie)
    const disabled = screen.getByRole('option', { name: /Charlie/ });
    expect(document.activeElement).toBe(disabled);
    // ArrowLeft returns focus
    fireEvent.keyDown(listbox, { key: 'ArrowLeft' });
    const bravo = screen.getByRole('option', { name: 'Bravo' });
    expect(document.activeElement).toBe(bravo);
  });

  it('clears selection and announces when back link used (mobile list layout)', async () => {
    render(<NavigationSplitView forceLayout="list" items={items} defaultSelectedId="a" renderContent={item => item ? <div>{item.label}</div> : <div /> } />);
    const back = await screen.findByRole('button', { name: /Back/i });
    fireEvent.click(back);
    await wait(40);
    const live = document.querySelector('[aria-live="polite"][aria-atomic="true"]') as HTMLElement;
    expect(live?.textContent).toMatch(/Selection cleared/);
  });

  it('does not auto-focus first item when initialFocus="none"', () => {
    render(<NavigationSplitView items={items} initialFocus="none" renderContent={() => <div />} />);
    const first = screen.getAllByRole('option')[0];
    expect(first.tabIndex).toBe(-1);
  });

  it('respects skipFocusOnSelect (keeps focus in navigation)', async () => {
    render(<NavigationSplitView items={items} skipFocusOnSelect renderContent={() => <div />} />);
    const listbox = screen.getByRole('listbox');
    const first = listbox.querySelector('[data-nav-item]') as HTMLElement;
    first.focus();
    fireEvent.keyDown(listbox, { key: 'Enter' });
    await wait(50);
    expect((document.activeElement as HTMLElement).id).toBe(first.id);
  });

  it('skipAnnouncements prevents live region updates on selection', async () => {
    render(<NavigationSplitView items={items} skipAnnouncements renderContent={() => <div />} />);
    const listbox = screen.getByRole('listbox');
    const first = listbox.querySelector('[data-nav-item]') as HTMLElement;
    first.focus();
    fireEvent.keyDown(listbox, { key: 'Enter' });
    await wait(10);
    const live = document.querySelector('[aria-live="polite"][aria-atomic="true"]') as HTMLElement;
    expect(live?.textContent).toBe(''); // untouched
  });
});
