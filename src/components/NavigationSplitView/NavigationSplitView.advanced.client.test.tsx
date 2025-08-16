import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { NavigationSplitView } from './NavigationSplitView';

// Edge environment: treat breakpoints as mobile by default, customise per test.

describe('NavigationSplitView (advanced interactions)', () => {
  const items = [
    { id: 'a', label: 'Alpha' },
    { id: 'b', label: 'Bravo' },
    { id: 'c', label: 'Charlie' },
  ];

  it('restores focus to last focused nav item when selection cleared', async () => {
    render(
      <NavigationSplitView
        items={items}
        renderContent={i => i ? <div>{i.label}</div> : <div />}
        forceLayout="list"
      />
    );
    const listbox = screen.getByRole('listbox');
    const options = () => screen.getAllByRole('option');
    // Focus 2nd item
    (options()[0] as HTMLElement).focus();
    fireEvent.keyDown(listbox, { key: 'ArrowDown' }); // now Bravo focused
    expect(document.activeElement?.id).toBe('b');
    // Select it
    fireEvent.keyDown(listbox, { key: 'Enter' });
    // Back button appears; clear selection
    const back = await screen.findByRole('button', { name: /Back/i });
    fireEvent.click(back);
    await waitFor(() => expect(document.activeElement?.id).toBe('b'));
  });

  it('inline tertiary drill (non xlarge) shows secondary then back returns', async () => {
    render(
      <NavigationSplitView
        items={items}
        defaultSelectedId="a"
        renderContent={i => i ? <div>{i.label}</div> : <div />}
        renderSecondaryContent={i => i && <div data-testid="secondary">Sec {i.label}</div>}
        forceLayout="two-column"
      />
    );
    // Forward link should show (tertiary available but not visible)
    const forward = screen.getByRole('button', { name: /Next/i });
    fireEvent.click(forward);
    expect(screen.getByTestId('secondary')).toBeInTheDocument();
    const back = screen.getByRole('button', { name: /Back/i });
    fireEvent.click(back);
    await waitFor(() => expect(screen.queryByTestId('secondary')).toBeNull());
  });

  it('collapsible nav toggle updates data-collapsed attribute', () => {
    render(
      <NavigationSplitView
        items={items}
        renderContent={i => i ? <div>{i.label}</div> : <div />}
        collapsibleNav
        forceLayout="two-column"
      />
    );
    const pane = screen.getByRole('navigation', { name: /Items/i });
    const toggle = screen.getByRole('button', { name: /Hide navigation/i });
    fireEvent.click(toggle);
    expect(pane).toHaveAttribute('data-collapsed');
    fireEvent.click(toggle);
    expect(pane).not.toHaveAttribute('data-collapsed');
  });

  it('skipAnnouncements leaves live region empty after selection', async () => {
    render(
      <NavigationSplitView
        items={items}
        renderContent={i => i ? <div>{i.label}</div> : <div />}
        skipAnnouncements
        forceLayout="list"
      />
    );
    const listbox = screen.getByRole('listbox');
    const first = screen.getByRole('option', { name: 'Alpha' });
    first.focus();
    fireEvent.keyDown(listbox, { key: 'Enter' });
    await new Promise(r => setTimeout(r, 20));
    const live = document.querySelector('[aria-live="polite"][aria-atomic="true"]') as HTMLElement;
    expect(live.textContent).toBe('');
  });
});
