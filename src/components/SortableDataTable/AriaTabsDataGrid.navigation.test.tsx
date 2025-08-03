import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, describe, beforeEach, afterEach, it, expect } from 'vitest';
import { AriaTabsDataGrid } from './AriaTabsDataGrid';
import type { TabPanelConfig } from './AriaTabsDataGridTypes';

// Mock data for testing
const mockData = [
  { id: 1, name: 'Patient 1', age: 25, ward: 'Ward A' },
  { id: 2, name: 'Patient 2', age: 35, ward: 'Ward B' },
  { id: 3, name: 'Patient 3', age: 45, ward: 'Ward C' },
];

const mockColumns = [
  { key: 'name', label: 'Patient Name' },
  { key: 'age', label: 'Age' },
  { key: 'ward', label: 'Ward' }
];

const mockTabPanels: TabPanelConfig[] = [
  {
    id: 'test-tab',
    label: 'Test Tab',
    data: mockData,
    columns: mockColumns,
    ariaLabel: 'Test data grid',
    ariaDescription: 'Test data for navigation testing'
  }
];

describe('AriaTabsDataGrid Keyboard Navigation', () => {
  let originalQuerySelector: typeof document.querySelector;
  let focusSpy = vi.fn();

  beforeEach(() => {
    focusSpy.mockClear();
    
    // Save original querySelector
    originalQuerySelector = document.querySelector;
    
    // Mock querySelector to return elements with focus spy
    document.querySelector = vi.fn((selector: string) => {
      // Create a mock element that has focus method
      return {
        focus: focusSpy,
        tabIndex: 0,
        setAttribute: vi.fn(),
        getAttribute: vi.fn(),
        classList: {
          add: vi.fn(),
          remove: vi.fn(),
          contains: vi.fn().mockReturnValue(false),
        },
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
        offsetWidth: 100,
        offsetHeight: 30,
        offsetLeft: 0,
        offsetTop: 0,
      } as any;
    });
  });

  afterEach(() => {
    // Restore original querySelector
    document.querySelector = originalQuerySelector;
    vi.restoreAllMocks();
  });

  it('should navigate from tabs to headers with Arrow Down', async () => {
    render(
      <AriaTabsDataGrid
        id="test-grid"
        tabPanels={mockTabPanels}
        ariaLabel="Test Grid"
      />
    );

    const tab = screen.getByRole('tab');
    tab.focus();

    // Press Arrow Down to navigate to headers
    fireEvent.keyDown(tab, { key: 'ArrowDown' });

    // Wait for the timeout in focusGridHeader
    await waitFor(() => {
      expect(focusSpy).toHaveBeenCalled();
    });
  });

  it('should select row when Enter is pressed on a cell', async () => {
    render(
      <AriaTabsDataGrid
        id="test-grid"
        tabPanels={mockTabPanels}
        ariaLabel="Test Grid"
      />
    );

    const cell = screen.getByText('Patient 1');
    
    // Press Enter to select row
    fireEvent.keyDown(cell, { key: 'Enter' });

    // Check that row gets selected class
    const row = cell.closest('tr');
    expect(row?.classList.contains('data-row--selected')).toBe(true);
  });
});
