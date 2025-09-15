import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import SPCChart from '../../SPCChart';
import { ChartType, ImprovementDirection } from '../spcConstants';
import { SpcWarningSeverity } from '../spc';

// Minimal mock data purposely triggering insufficient points warnings etc.
// We rely on engine behaviour: enabling minimumPointsWarning in settings will emit an InsufficientPointsGlobal warning when points < minimum.

describe('SPCChart diagnostics panel', () => {
  const baseData = Array.from({ length: 5 }).map((_, i) => ({ x: new Date(2024, 0, i + 1), y: 10 + i }));

  test('renders panel, announcements and table structure when enabled', () => {
    render(
      <SPCChart
        data={baseData}
        showWarningsPanel
        settings={{ minimumPointsWarning: true, minimumPoints: 13 }}
        metricImprovement={ImprovementDirection.Neither}
        chartType={ChartType.XmR}
      />
    );
    // Panel heading present
    expect(screen.getByText('Diagnostics')).toBeInTheDocument();
    // Live region appears (may be empty briefly but should exist with polite)
    const live = screen.getByTestId('spc-diagnostics-live');
    expect(live).toHaveAttribute('aria-live', 'polite');

    // Region wrapper
    const region = screen.getByRole('region', { name: 'SPC diagnostics' });
    // Column headers present
    const headers = within(region).getAllByRole('columnheader');
    expect(headers.map(h => h.textContent)).toEqual(['Severity', 'Category', 'Code', 'Details']);
    // No legacy list markup
    expect(within(region).queryByRole('list')).toBeNull();
    // At least one data row (row role includes header row; ensure >1)
    const rows = within(region).getAllByRole('row');
    expect(rows.length).toBeGreaterThan(1);
  });

  test('filters severities correctly', () => {
    render(
      <SPCChart
        data={baseData}
        showWarningsPanel
        warningsFilter={{ severities: [SpcWarningSeverity.Warning] }}
        settings={{ minimumPointsWarning: true, minimumPoints: 13 }}
      />
    );
    // Expect at least one warning severity badge labelled 'Warning' and none labelled 'Error'
    const badges = screen.getAllByText(/Warning|Error|Info/);
    // Ensure no Error badge rendered
    expect(badges.find(b => b.textContent === 'Error')).toBeUndefined();
  });
});
