import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ResponsiveDataGrid } from './ResponsiveDataGrid';
import { Button } from '../Button';

function buildBasicPanels() {
  return [
    {
      id: 'data',
      label: 'Data',
      ariaLabel: 'Data grid',
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' }
      ],
      columns: [
        { key: 'name', label: 'Name', cardRenderer: (row: any) => row.name }
      ]
    }
  ];
}

describe('ResponsiveDataGrid Action Areas', () => {
  it('renders top actions in card layout', () => {
    const topActions = (
      <Button data-testid="top-action-button">Add Item</Button>
    );

    render(
      <ResponsiveDataGrid
        forceLayout="cards"
        ariaLabel="Test grid"
        tabPanels={buildBasicPanels()}
        topActions={topActions}
      />
    );

    expect(screen.getByTestId('top-action-button')).toBeInTheDocument();
    expect(screen.getByText('Add Item')).toBeInTheDocument();
  });

  it('renders bottom actions in card layout', () => {
    const bottomActions = (
      <Button data-testid="bottom-action-button">Export Data</Button>
    );

    render(
      <ResponsiveDataGrid
        forceLayout="cards"
        ariaLabel="Test grid"
        tabPanels={buildBasicPanels()}
        bottomActions={bottomActions}
      />
    );

    expect(screen.getByTestId('bottom-action-button')).toBeInTheDocument();
    expect(screen.getByText('Export Data')).toBeInTheDocument();
  });

  it('renders both top and bottom actions together', () => {
    const topActions = (
      <Button data-testid="top-action-button">Add Item</Button>
    );
    const bottomActions = (
      <Button data-testid="bottom-action-button">Export Data</Button>
    );

    render(
      <ResponsiveDataGrid
        forceLayout="cards"
        ariaLabel="Test grid"
        tabPanels={buildBasicPanels()}
        topActions={topActions}
        bottomActions={bottomActions}
      />
    );

    expect(screen.getByTestId('top-action-button')).toBeInTheDocument();
    expect(screen.getByTestId('bottom-action-button')).toBeInTheDocument();
  });

  it('renders top actions in table layout', () => {
    const topActions = (
      <Button data-testid="top-action-button">Add Item</Button>
    );

    render(
      <ResponsiveDataGrid
        forceLayout="table"
        ariaLabel="Test grid"
        tabPanels={buildBasicPanels()}
        topActions={topActions}
      />
    );

    expect(screen.getByTestId('top-action-button')).toBeInTheDocument();
  });

  it('renders top actions in hybrid layout', () => {
    const topActions = (
      <Button data-testid="top-action-button">Add Item</Button>
    );

    render(
      <ResponsiveDataGrid
        forceLayout="hybrid"
        ariaLabel="Test grid"
        tabPanels={buildBasicPanels()}
        topActions={topActions}
      />
    );

    expect(screen.getByTestId('top-action-button')).toBeInTheDocument();
  });

  it('applies correct CSS classes for action areas', () => {
    const topActions = <div data-testid="top-actions">Top Actions</div>;
    const bottomActions = <div data-testid="bottom-actions">Bottom Actions</div>;

    render(
      <ResponsiveDataGrid
        forceLayout="cards"
        ariaLabel="Test grid"
        tabPanels={buildBasicPanels()}
        topActions={topActions}
        bottomActions={bottomActions}
      />
    );

    const topActionsContainer = screen.getByTestId('top-actions').parentElement;
    const bottomActionsContainer = screen.getByTestId('bottom-actions').parentElement;

    expect(topActionsContainer).toHaveClass('aria-tabs-datagrid-adaptive__top-actions');
    expect(bottomActionsContainer).toHaveClass('aria-tabs-datagrid-adaptive__bottom-actions');
  });

  it('does not render action areas when not provided', () => {
    render(
      <ResponsiveDataGrid
        forceLayout="cards"
        ariaLabel="Test grid"
        tabPanels={buildBasicPanels()}
      />
    );

    expect(document.querySelector('.aria-tabs-datagrid-adaptive__top-actions')).not.toBeInTheDocument();
    expect(document.querySelector('.aria-tabs-datagrid-adaptive__bottom-actions')).not.toBeInTheDocument();
  });
});