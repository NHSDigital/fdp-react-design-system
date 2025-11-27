import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { expectAccessible } from '../../test-utils/accessibility';
import Table from './Table';

// Basic accessibility coverage for Table (standard & responsive/panel variant)

describe('Table (a11y)', () => {
  const head = [
    { text: 'Name' },
    { text: 'Role' },
    { text: 'Location' }
  ];

  const rows = [
    [ { text: 'Alice' }, { text: 'Nurse' }, { text: 'London' } ],
    [ { text: 'Bob' }, { text: 'Doctor' }, { text: 'Manchester' } ],
  ];

  it('no axe violations (basic table with caption)', async () => {
    const { container } = render(
      <Table
        head={head}
        rows={rows}
        caption="Staff directory"
        captionSize="m"
      />
    );
    await expectAccessible(container);
  });

  it('no axe violations (responsive, first cell header, panel)', async () => {
    const responsiveRows = [
      [ { text: 'Ward A' }, { text: '12' }, { text: '4' } ],
      [ { text: 'Ward B' }, { text: '9' }, { text: '2' } ],
    ];
    const responsiveHead = [
      { text: 'Ward' },
      { text: 'Patients' },
      { text: 'Discharges' }
    ];
    const { container } = render(
      <Table
        head={responsiveHead}
        rows={responsiveRows}
        firstCellIsHeader
        responsive
        panel
        heading="Ward stats"
        headingLevel={3}
        caption="Current occupancy"
        captionSize="s"
      />
    );
    await expectAccessible(container);
  });

  it('no axe violations (columns + data + visuallyHiddenCaption)', async () => {
    const { container } = render(
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
    await expectAccessible(container);
  });
});
