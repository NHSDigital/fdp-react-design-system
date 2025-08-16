import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { NavigationSplitView } from './NavigationSplitView';

// Mock breakpoints so component believes it's at least medium (for collapsible nav) and xlarge when needed
vi.mock('../../hooks/useBreakpoints', () => ({
  useNhsFdpBreakpoints: () => ({
    up: () => true // treat all breakpoints as satisfied
  })
}));

beforeEach(() => {
  // Reset URL & storage between tests
  window.history.replaceState(null, '', '/');
  window.localStorage.clear();
});

const items = [
  { id: 'a', label: 'Alpha' },
  { id: 'b', label: 'Bravo' }
];

describe('NavigationSplitView (persistence & URL sync)', () => {
  it('syncs selection to URL and updates when drilling to three-column', async () => {
    const onDrill = vi.fn();
    const { rerender } = render(
      <NavigationSplitView
        items={items}
        defaultSelectedId="a"
        renderContent={i => i ? <div>{i.label}</div> : null}
        renderSecondaryContent={i => i && <div data-testid="secondary">Sec {i.label}</div>}
        syncUrl
        urlParamSelected="sel"
        urlParamDrill="dr"
        forceLayout="two-column"
        onDrillChange={onDrill}
      />
    );
  // Explicitly select first item (defaultSelectedId may not mark selection before URL sync effect)
  const alpha = screen.getByRole('option', { name: 'Alpha' });
  fireEvent.click(alpha);
  await waitFor(() => expect(window.location.search).toMatch(/sel=a/));
    // Drill to three column
    rerender(
      <NavigationSplitView
        items={items}
        defaultSelectedId="a"
        renderContent={i => i ? <div>{i.label}</div> : null}
        renderSecondaryContent={i => i && <div data-testid="secondary">Sec {i.label}</div>}
        syncUrl
        urlParamSelected="sel"
        urlParamDrill="dr"
        forceLayout="three-column"
        onDrillChange={onDrill}
      />
    );
    await waitFor(() => {
      expect(window.location.search).toMatch(/dr=1/);
      expect(onDrill).toHaveBeenCalledWith(true);
      expect(screen.getByTestId('secondary')).toBeInTheDocument();
    });
  });

  it('persists nav collapsed state to localStorage and URL (both)', async () => {
    const onCollapse = vi.fn();
    render(
      <NavigationSplitView
        items={items}
        renderContent={i => i ? <div>{i.label}</div> : null}
        collapsibleNav
        persistNavCollapsed="both"
        navCollapsedStorageKey="__testNav"
        navCollapsedUrlParam="nav"
        onNavCollapseChange={onCollapse}
      />
    );
    const toggle = await screen.findByRole('button', { name: /Hide navigation/i });
    fireEvent.click(toggle);
    await waitFor(() => {
      expect(onCollapse).toHaveBeenCalledWith(true);
      expect(window.localStorage.getItem('__testNav')).toBe('1');
      expect(window.location.search).toMatch(/nav=1/);
    });
    // Expand again
    fireEvent.click(toggle);
    await waitFor(() => {
      expect(window.localStorage.getItem('__testNav')).toBe('0');
      expect(window.location.search).toMatch(/nav=0/);
    });
  });

  it('lazySecondary defers secondary mount until drilled', async () => {
    const { rerender } = render(
      <NavigationSplitView
        items={items}
        defaultSelectedId="a"
        renderContent={i => i ? <div>{i.label}</div> : null}
        renderSecondaryContent={i => i && <div data-testid="secondary">Sec {i.label}</div>}
        lazySecondary
        forceLayout="two-column"
      />
    );
    expect(screen.queryByTestId('secondary')).toBeNull();
    rerender(
      <NavigationSplitView
        items={items}
        defaultSelectedId="a"
        renderContent={i => i ? <div>{i.label}</div> : null}
        renderSecondaryContent={i => i && <div data-testid="secondary">Sec {i.label}</div>}
        lazySecondary
        forceLayout="three-column"
      />
    );
    await waitFor(() => expect(screen.getByTestId('secondary')).toBeInTheDocument());
  });
});
