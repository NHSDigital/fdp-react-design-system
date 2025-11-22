/**
 * GroupableDataGrid - Row Selection and Sorting Tests
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { GroupableDataGrid } from './GroupableDataGrid';

describe('GroupableDataGrid - Row Selection', () => {
  const testData = [
    { id: '1', name: 'Alice', age: 30, city: 'London' },
    { id: '2', name: 'Bob', age: 25, city: 'Paris' },
    { id: '3', name: 'Charlie', age: 35, city: 'Berlin' },
  ];

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'city', label: 'City' },
  ];

  it('should call onGlobalRowSelectionChange when a row is clicked', async () => {
    const user = userEvent.setup();
    const handleSelection = vi.fn();

    render(
      <GroupableDataGrid
        mode="flat"
        data={testData}
        columns={columns}
        onGlobalRowSelectionChange={handleSelection}
        ariaLabel="Test grid"
      />
    );

    const rows = screen.getAllByRole('row');
    const firstDataRow = rows[1]; // Skip header row

    await user.click(firstDataRow);

    expect(handleSelection).toHaveBeenCalledWith(testData[0]);
  });

  it('should apply selected styles to the selected row', () => {
    const { rerender } = render(
      <GroupableDataGrid
        mode="flat"
        data={testData}
        columns={columns}
        selectedRow={null}
        onGlobalRowSelectionChange={vi.fn()}
        ariaLabel="Test grid"
      />
    );

    const rows = screen.getAllByRole('row');
    const firstDataRow = rows[1];

    expect(firstDataRow).not.toHaveClass('groupable-datagrid__data-row--selected');
    expect(firstDataRow).not.toHaveAttribute('aria-selected', 'true');

    // Rerender with selected row
    rerender(
      <GroupableDataGrid
        mode="flat"
        data={testData}
        columns={columns}
        selectedRow={testData[0]}
        onGlobalRowSelectionChange={vi.fn()}
        ariaLabel="Test grid"
      />
    );

    expect(firstDataRow).toHaveClass('groupable-datagrid__data-row--selected');
    expect(firstDataRow).toHaveAttribute('aria-selected', 'true');
  });

  it('should call onRowClick callback when provided', async () => {
    const user = userEvent.setup();
    const handleRowClick = vi.fn();

    render(
      <GroupableDataGrid
        mode="flat"
        data={testData}
        columns={columns}
        onRowClick={handleRowClick}
        ariaLabel="Test grid"
      />
    );

    const rows = screen.getAllByRole('row');
    const firstDataRow = rows[1];

    await user.click(firstDataRow);

    expect(handleRowClick).toHaveBeenCalledWith(
      testData[0],
      expect.any(Object) // MouseEvent
    );
  });

  it('should toggle selection when clicking the same row twice', async () => {
    const user = userEvent.setup();
    const handleSelection = vi.fn();
    let currentSelection: typeof testData[0] | null = null;

    const TestWrapper = () => {
      const [selected, setSelected] = React.useState<typeof testData[0] | null>(null);
      
      React.useEffect(() => {
        currentSelection = selected;
      }, [selected]);

      return (
        <GroupableDataGrid
          mode="flat"
          data={testData}
          columns={columns}
          selectedRow={selected}
          onGlobalRowSelectionChange={(row) => {
            handleSelection(row);
            setSelected(row);
          }}
          ariaLabel="Test grid"
        />
      );
    };

    render(<TestWrapper />);

    const rows = screen.getAllByRole('row');
    const firstDataRow = rows[1];

    // First click - select
    await user.click(firstDataRow);
    expect(handleSelection).toHaveBeenCalledWith(testData[0]);
    expect(currentSelection).toEqual(testData[0]);

    // Second click - deselect
    handleSelection.mockClear();
    await user.click(firstDataRow);
    expect(handleSelection).toHaveBeenCalledWith(null);
  });
});

describe('GroupableDataGrid - Column Sorting', () => {
  const testData = [
    { id: '1', name: 'Charlie', age: 35, city: 'Berlin' },
    { id: '2', name: 'Alice', age: 30, city: 'London' },
    { id: '3', name: 'Bob', age: 25, city: 'Paris' },
  ];

  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'age', label: 'Age', sortable: true },
    { key: 'city', label: 'City', sortable: true },
  ];

  it('should render sortable column headers', () => {
    render(
      <GroupableDataGrid
        mode="flat"
        data={testData}
        columns={columns}
        onSortChange={vi.fn()}
        ariaLabel="Test grid"
      />
    );

    const nameHeader = screen.getByRole('columnheader', { name: /Name/i });
    const ageHeader = screen.getByRole('columnheader', { name: /Age/i });

    expect(nameHeader).toHaveClass('groupable-datagrid__header-cell--sortable');
    expect(ageHeader).toHaveClass('groupable-datagrid__header-cell--sortable');
  });

  it('should call onSortChange when clicking a sortable column header', async () => {
    const user = userEvent.setup();
    const handleSortChange = vi.fn();

    render(
      <GroupableDataGrid
        mode="flat"
        data={testData}
        columns={columns}
        onSortChange={handleSortChange}
        ariaLabel="Test grid"
      />
    );

    const nameHeader = screen.getByRole('columnheader', { name: /Name/i });
    await user.click(nameHeader);

    expect(handleSortChange).toHaveBeenCalledWith([
      { key: 'name', direction: 'asc' },
    ]);
  });

  it('should sort data in ascending order', () => {
    render(
      <GroupableDataGrid
        mode="flat"
        data={testData}
        columns={columns}
        sortConfig={[{ key: 'name', direction: 'asc' }]}
        onSortChange={vi.fn()}
        ariaLabel="Test grid"
      />
    );

    const rows = screen.getAllByRole('row');
    const dataRows = rows.slice(1); // Skip header

    // Check order: Alice, Bob, Charlie (alphabetical)
    expect(dataRows[0]).toHaveTextContent('Alice');
    expect(dataRows[1]).toHaveTextContent('Bob');
    expect(dataRows[2]).toHaveTextContent('Charlie');
  });

  it('should sort data in descending order', () => {
    render(
      <GroupableDataGrid
        mode="flat"
        data={testData}
        columns={columns}
        sortConfig={[{ key: 'name', direction: 'desc' }]}
        onSortChange={vi.fn()}
        ariaLabel="Test grid"
      />
    );

    const rows = screen.getAllByRole('row');
    const dataRows = rows.slice(1);

    // Check order: Charlie, Bob, Alice (reverse alphabetical)
    expect(dataRows[0]).toHaveTextContent('Charlie');
    expect(dataRows[1]).toHaveTextContent('Bob');
    expect(dataRows[2]).toHaveTextContent('Alice');
  });

  it('should sort numeric values correctly', () => {
    render(
      <GroupableDataGrid
        mode="flat"
        data={testData}
        columns={columns}
        sortConfig={[{ key: 'age', direction: 'asc' }]}
        onSortChange={vi.fn()}
        ariaLabel="Test grid"
      />
    );

    const rows = screen.getAllByRole('row');
    const dataRows = rows.slice(1);

    // Check order: 25, 30, 35
    expect(dataRows[0]).toHaveTextContent('25');
    expect(dataRows[1]).toHaveTextContent('30');
    expect(dataRows[2]).toHaveTextContent('35');
  });

  it('should show sort indicator on sorted column', () => {
    render(
      <GroupableDataGrid
        mode="flat"
        data={testData}
        columns={columns}
        sortConfig={[{ key: 'name', direction: 'asc' }]}
        onSortChange={vi.fn()}
        ariaLabel="Test grid"
      />
    );

    const nameHeader = screen.getByRole('columnheader', { name: /Name/i });
    
    expect(nameHeader).toHaveClass('groupable-datagrid__header-cell--sorted');
    expect(nameHeader).toHaveAttribute('aria-sort', 'ascending');
  });

  it('should toggle sort direction on repeated clicks', async () => {
    const user = userEvent.setup();
    const handleSortChange = vi.fn();

    render(
      <GroupableDataGrid
        mode="flat"
        data={testData}
        columns={columns}
        sortConfig={[{ key: 'name', direction: 'asc' }]}
        onSortChange={handleSortChange}
        ariaLabel="Test grid"
      />
    );

    const nameHeader = screen.getByRole('columnheader', { name: /Name/i });
    
    // Click to change to descending
    await user.click(nameHeader);
    expect(handleSortChange).toHaveBeenCalledWith([
      { key: 'name', direction: 'desc' },
    ]);
  });

  it('should support multi-column sorting when enabled', async () => {
    const user = userEvent.setup();
    const handleSortChange = vi.fn();

    render(
      <GroupableDataGrid
        mode="flat"
        data={testData}
        columns={columns}
        sortConfig={[{ key: 'name', direction: 'asc' }]}
        onSortChange={handleSortChange}
        enableMultiSort={true}
        ariaLabel="Test grid"
      />
    );

    const ageHeader = screen.getByRole('columnheader', { name: /Age/i });
    
    // Click age header to add second sort
    await user.click(ageHeader);
    expect(handleSortChange).toHaveBeenCalledWith([
      { key: 'name', direction: 'asc' },
      { key: 'age', direction: 'asc' },
    ]);
  });
});
