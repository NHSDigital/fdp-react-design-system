import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { NavigationSplitView } from './NavigationSplitView';

// Simulate mobile by mocking breakpoint hook to always return false for medium/xlarge
vi.mock('../../hooks/useBreakpoints', () => ({
  useNhsFdpBreakpoints: () => ({ up: (_: string) => false })
}));

describe('NavigationSplitView mobile header arrow navigation', () => {
  const items = [
    { id: 'one', label: 'One' },
    { id: 'two', label: 'Two' }
  ];

  it('ArrowLeft/Right navigates between Back and Next buttons in header', () => {
    const { getByRole, getByText } = render(
      <NavigationSplitView
        items={items}
        defaultSelectedId="one"
        autoContentHeader={{ mobile: true, tablet: false, desktop: false }}
        renderContent={() => <div style={{ height: 10 }}>Body</div>}
        renderSecondaryContent={() => <div>Secondary</div>}
        nextLabel="Next"
        backLabel="Back"
      />
    );

    // Manually focus Back button to simulate having "entered" the header navigation
    const backButton = getByText('Back').closest('button') as HTMLButtonElement;
    backButton.focus();
    expect(document.activeElement).toBe(backButton);

    // Right -> Next button
    fireEvent.keyDown(backButton, { key: 'ArrowRight' });
    const nextButton = getByText('Next').closest('button') as HTMLButtonElement;
    expect(document.activeElement).toBe(nextButton);

    // Left -> Back button
    fireEvent.keyDown(nextButton, { key: 'ArrowLeft' });
    expect(document.activeElement).toBe(backButton);
  });
});
