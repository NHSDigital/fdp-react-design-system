import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import Table from './Table';

// SSR coverage for auto-generated head/rows via columns + data and visuallyHiddenCaption.

describe('Table (SSR)', () => {
  it('renders expected static markup with columns + data + visuallyHiddenCaption', () => {
    const html = renderToString(
      <Table
        caption="Monthly metrics"
        visuallyHiddenCaption
        firstCellIsHeader
        columns={[
          { key: 'metric', title: 'Metric' },
          { key: 'value', title: 'Value', format: 'numeric' as const },
          { key: 'delta', title: 'Δ vs prev', render: (v: number) => `${v > 0 ? '+' : ''}${v}` },
        ]}
        data={[
          { metric: 'Admissions', value: 120, delta: 5 },
          { metric: 'Discharges', value: 95, delta: -2 },
        ]}
      />
    );

    // Caption present and has visually hidden class
    expect(html).toMatch(/<caption[^>]*class="[^"]*nhsuk-u-visually-hidden[^"]*"[^>]*>Monthly metrics<\/caption>/);

    // Header cells derived from columns
    expect(html).toMatch(/<th[^>]*>Metric<\/th>/);
    expect(html).toMatch(/<th[^>]*>Value<\/th>/);
    expect(html).toMatch(/<th[^>]*>Δ vs prev<\/th>/);

    // Data rows present with transformed delta values
    expect(html).toMatch(/<th[^>]*scope="row"[^>]*>Admissions<\/th>/);
    expect(html).toMatch(/<td[^>]*>120<\/td>/);
    expect(html).toMatch(/<td[^>]*>\+5<\/td>/);
    expect(html).toMatch(/<th[^>]*scope="row"[^>]*>Discharges<\/th>/);
    expect(html).toMatch(/<td[^>]*>95<\/td>/);
    expect(html).toMatch(/<td[^>]*>-2<\/td>/);
  });

  it('renders selective row header column using column.rowHeader without firstCellIsHeader', () => {
    const html = renderToString(
      <Table
        caption="Selective headers"
        columns={[
          { key: 'metric', title: 'Metric', rowHeader: true },
          { key: 'value', title: 'Value', format: 'numeric' as const },
        ]}
        data={[
          { metric: 'Admissions', value: 120 },
          { metric: 'Discharges', value: 95 },
        ]}
      />
    );
    expect(html).toMatch(/<th[^>]*scope="row"[^>]*>Admissions<\/th>/);
    expect(html).toMatch(/<td[^>]*>120<\/td>/);
  });
});
