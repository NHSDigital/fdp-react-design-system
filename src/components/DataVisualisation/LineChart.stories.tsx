import type { Meta, StoryObj } from '@storybook/react';
import { ChartContainer, LineChart, LineSeries, Legend, TooltipProvider } from './index';

// ---------------------------------------------------------------------------
// Static deterministic data helpers (replaces Date.now + Math.random usage)
// ---------------------------------------------------------------------------
const BASE_DAY = new Date(Date.UTC(2025, 0, 1)); // Fixed anchor date (UTC to avoid TZ drift)
const day = (n: number) => new Date(Date.UTC(2025, 0, 1 + n));

// Utility for generating a simple linear-ish progression with optional wobble pattern
const linearSeries = (length: number, start: number, step: number, wobble: number[] = []): number[] =>
  Array.from({ length }).map((_, i) => start + step * i + (wobble.length ? wobble[i % wobble.length] : 0));

const meta: Meta = {
  title: 'Data Visualisation/LineChart',
  component: LineChart,
  parameters: {
    a11y: { disable: false }
  }
};
export default meta;

type Story = StoryObj<typeof LineChart>;

// Primary example dataset (14 days) – values chosen for a gentle upward trend
const admissionsValues = [55, 57, 60, 62, 59, 63, 65, 66, 64, 67, 70, 72, 74, 75];
const dischargesValues = [48, 50, 49, 51, 53, 52, 54, 56, 55, 57, 58, 60, 61, 63];
const series: LineSeries[] = [
  {
    id: 'admissions',
    label: 'Admissions',
    data: admissionsValues.map((y, i) => ({ x: day(i), y }))
  },
  {
    id: 'discharges',
    label: 'Discharges',
    data: dischargesValues.map((y, i) => ({ x: day(i), y }))
  }
];

export const Basic: Story = {
  render: () => (
    <ChartContainer
      title="Daily admissions vs discharges"
      description="Recent 14 day trend"
      source="Example synthetic data"
    >
      <TooltipProvider>
        {/* Wrapper div to capture keyboard events for future nav extensions */}
        <div tabIndex={0} aria-label="Interactive line chart area">
		  <LineChart series={series} yLabel="Count" />
      <Legend items={series.map(s => ({ id: s.id, label: s.label || s.id }))} />
        </div>
      </TooltipProvider>
    </ChartContainer>
  )
};

// Demonstrates automatic region colour mapping when series ids align with region token ids
const regionIds = ['north-east','north-west','east-of-england','midlands','london','south-west','south-east'];
// Deterministic region series: base offset per region + patterned wobble
const regionSeries: LineSeries[] = regionIds.map((id, idx) => {
  const base = 30 + idx * 3; // staggered starts
  const wobblePattern = [0, 4, -2, 5, -1];
  const values = linearSeries(10, base, 2, wobblePattern); // length 10
  return {
    id,
    label: id.replace(/-/g, ' '),
    data: values.map((y, i) => ({ x: day(i), y }))
  };
});

export const RegionPalette: Story = {
  render: () => (
    <ChartContainer
      title="Region comparison"
      description="Synthetic values per region"
      source="Example synthetic data"
    >
		<LineChart series={regionSeries} yLabel="Value" palette="region" />
    <Legend items={regionSeries.map(s => ({ id: s.id, label: s.label || s.id }))} />
    </ChartContainer>
  )
};

export const WithCustomFormatters: Story = {
  render: () => (
    <ChartContainer title="Custom formatters" description="Date & value formatting" source="Synthetic data">
      <LineChart
        series={series}
        yLabel="Count"
        dateFormatter={(d) => d.toLocaleDateString('en-GB',{ day:'2-digit', month:'2-digit' })}
        valueFormatter={(v) => v.toLocaleString('en-GB')}
      />
    </ChartContainer>
  )
};

// Extended palette demo – 20 deterministic mini-series
const manySeries: LineSeries[] = Array.from({ length: 20 }).map((_, i) => {
  const start = 12 + (i % 7) * 3; // cycle start values
  const wobble = [0, 3, -1, 5, -2, 4];
  const values = linearSeries(12, start, (i % 5) + 1, wobble);
  return {
    id: `s${i + 1}`,
    label: `S${i + 1}`,
    data: values.map((y, j) => ({ x: day(j), y }))
  };
});

export const ExtendedPalette: Story = {
  render: () => (
    <ChartContainer title=">12 series extended palette" description="Lightness variant rounds after 12" source="Synthetic data">
      <LineChart series={manySeries} yLabel="Value" />
    </ChartContainer>
  )
};

// Story to visually test x-axis tick alignment with data points
const alignmentSeries: LineSeries[] = [
  {
    id: 'a',
    label: 'Series A',
    data: Array.from({ length: 8 }).map((_, i) => ({ x: day(i), y: 20 + i * 5 }))
  },
  {
    id: 'b',
    label: 'Series B',
    data: Array.from({ length: 8 }).map((_, i) => ({ x: day(i), y: 18 + i * 6 }))
  }
];

const explicitTickValues = alignmentSeries[0].data.map(d => d.x);

export const XTickAlignment: Story = {
  name: 'X Tick Alignment (Exact)',
  render: () => (
    <ChartContainer
      title="X Tick Alignment"
      description="Ticks should sit directly under point columns (compare explicit vs auto)"
      source="Synthetic data"
    >
      <div style={{ display: 'grid', gap: '1rem' }}>
        <div>
          <h4 style={{ margin: '0 0 4px' }}>alignXTicksToData=true</h4>
          <LineChart series={alignmentSeries} yLabel="Value" alignXTicksToData />
        </div>
        <div>
          <h4 style={{ margin: '0 0 4px' }}>explicit xTickValues</h4>
          <LineChart series={alignmentSeries} yLabel="Value" xTickValues={explicitTickValues} />
        </div>
        <div>
          <h4 style={{ margin: '0 0 4px' }}>default (auto ticks)</h4>
          <LineChart series={alignmentSeries} yLabel="Value" />
        </div>
      </div>
    </ChartContainer>
  )
};

// Live region accessibility demo
export const WithLiveRegion: Story = {
  name: 'Accessibility / Live Region',
  render: () => (
    <ChartContainer
      title="Live Region Announcements"
      description="Use arrow keys to move focus between points; screen readers should announce updates."
      source="Synthetic data"
    >
      <LineChart series={alignmentSeries} yLabel="Value" alignXTicksToData announceFocus />
      <p style={{ fontSize: 12, color: '#555' }}>Focus the chart area (click inside) then use Left/Right (points) and Up/Down (series). Disable announcements with announceFocus&#123;false&#125;.</p>
    </ChartContainer>
  )
};

// Demonstrates opt-in keyboard navigation handler (keyboardNav) & wrap-around behaviour
export const KeyboardNavigation: Story = {
  name: 'Accessibility / Keyboard Navigation',
  render: () => (
    <ChartContainer
      title="Keyboard navigation (opt-in)"
      description="Arrow keys traverse points & series. Home/End jump to first/last point within current series. Wrap-around enabled."
      source="Synthetic data"
    >
      <LineChart
        series={alignmentSeries}
        yLabel="Value"
        alignXTicksToData
        announceFocus
        keyboardNav
        wrapAroundNav
      />
      <p style={{ fontSize: 12, color: '#555' }}>
        Focus the chart (Tab or click). Use Left/Right to move within a series, Up/Down to change series, Home/End to jump, Escape to clear.
      </p>
    </ChartContainer>
  )
};

// Visibility / domain behaviour comparison
import { VisibilityProvider } from './core/VisibilityContext';
export const VisibilityModes: Story = {
  name: 'Visibility Modes (remove vs fade + domain recompute)',
  render: () => {
    const visSeries: LineSeries[] = [
      { id: 'alpha', label: 'Alpha', data: Array.from({ length: 12 }).map((_, i) => ({ x: day(i), y: 40 + i * 2 })) },
      { id: 'beta', label: 'Beta', data: Array.from({ length: 12 }).map((_, i) => ({ x: day(i), y: 10 + (i % 4) * 6 })) },
      { id: 'gamma', label: 'Gamma', data: Array.from({ length: 12 }).map((_, i) => ({ x: day(i), y: 75 - i * 3 })) }
    ];
  const legendItems = visSeries.map(s => ({ id: s.id, label: s.label || s.id }));
    return (
      <ChartContainer
        title="Hidden series presentation"
        description="Compare 'remove' (baseline domain) vs 'fade' with dynamic y-domain recompute"
        source="Synthetic data"
      >
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div>
            <h4 style={{ margin: '0 0 4px' }}>Remove (default)</h4>
            <VisibilityProvider>
              <LineChart series={visSeries} yLabel="Value" alignXTicksToData keyboardNav />
              <Legend items={legendItems} />
            </VisibilityProvider>
            <p style={{ fontSize: 11, color: '#666', marginTop: 4 }}>Hidden series are removed; y-domain retains full original range.</p>
          </div>
          <div>
            <h4 style={{ margin: '0 0 4px' }}>Fade + Recompute Domain</h4>
            <VisibilityProvider>
              <LineChart
                series={visSeries}
                yLabel="Value"
                visibilityMode="fade"
                recomputeYDomainOnHidden
                alignXTicksToData
                keyboardNav
              />
              <Legend items={legendItems} />
            </VisibilityProvider>
            <p style={{ fontSize: 11, color: '#666', marginTop: 4 }}>Hidden series persist dimmed (not focusable) and y-domain shrinks to visible data.</p>
          </div>
        </div>
      </ChartContainer>
    );
  }
};
