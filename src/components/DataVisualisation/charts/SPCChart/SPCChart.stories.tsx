import type { Meta, StoryObj } from '@storybook/react';
import { SPCChart, type SPCDatum, ImprovementDirection } from './SPCChart';
import React from 'react';
import { ChartContainer } from '../..';

const meta: Meta<typeof SPCChart> = {
  title: 'Data Visualisation/SPC/Individuals',
  component: SPCChart,
  parameters: {
	docs: { description: { component: 'Individuals (I) Shewhart chart. Computes mean, ±1σ/±2σ/±3σ control limits, and detects special-cause rules.' } }
  }
};
export default meta;
type Story = StoryObj<typeof SPCChart>;

const makeData = (): SPCDatum[] => {
  const points: SPCDatum[] = [];
  const start = Date.now() - 29*24*3600*1000;
  for (let i=0;i<30;i++) {
	const base = i < 18 ? 50 : 58; // shift
	const noise = (Math.random()-0.5)*6;
	points.push({ x: new Date(start + i*24*3600*1000), y: Math.round(base + noise) });
  }
  points[24].y = points[24].y + 20; // outlier
  return points;
};

export const Basic: Story = {
  parameters: {
  docs: { description: { story: `SPC Individuals (XmR) Chart\n\nShows individual measurements over time with:\n- Centre line (mean) and 1σ / 2σ / 3σ control limits after ≥13 valid points\n- Special cause rules: single beyond limit, 2 of 3 beyond 2σ, 4 of 5 beyond 1σ, shift, trend\n- Icons (★ improvement / ! concern) reflect variation classification relative to metricImprovement\n- Tooltips + keyboard navigation (arrow keys, Home/End) give value, variation, rule summary\n- Live region (announceFocus) narrates point, variation and special cause\n\nInterpretation: Points outside the outer limits or qualifying rule patterns indicate special cause variation.` } },
  metricContext: { improvement: 'neither' }
  },
  render: () => {
	const data = React.useMemo(() => makeData(), []);
	return (
	  <ChartContainer title="SPC Individuals Chart" description="With rule detection (icons may be suppressed if too few points)" source="Synthetic data">
	  <SPCChart data={data} announceFocus narrationContext={{ measureName: 'Daily metric', datasetContext: 'Synthetic 30-day sample', timeframe: 'Last 30 days' }} />
	  </ChartContainer>
	);
  }
};

export const Signals: Story = {
  parameters: {
  docs: { description: { story: `Individuals (XmR) with engineered signals. Demonstrates:\n- Sustained shift (manually raised segment)\n- High outlier forcing single-point special cause\n- Combined rule output (icons + point colouring)\nUse to explore multiple rule firings in one sequence.` } },
  metricContext: { improvement: 'up' }
  },
  render: () => {
	const data = React.useMemo(() => makeData(), []);
	// Introduce several special-cause patterns: sustained shift + high outlier
	const mutated = data.map(d => ({ ...d }));
	for (let i=10;i<16;i++) mutated[i].y += 10; // shift
	mutated[25].y += 18; // high outlier
	return (
	  <ChartContainer title="SPC" description="Special-cause rules & icons" source="Synthetic data">
	  <SPCChart data={mutated} chartType="XmR" metricImprovement={ImprovementDirection.Up} announceFocus narrationContext={{ measureName: 'Process metric', datasetContext: 'Engineered signal sequence', additionalNote: 'Injected shift and outlier for demo' }} />
	  </ChartContainer>
	);
  }
};

// Shared baseline dataset for direction comparison stories (stable across both).
const sharedDirectionData: SPCDatum[] = makeData();

const data = sharedDirectionData.map(d => ({ ...d }))
// Create decreasing trend
data.forEach((d,i)=> { if (i>12) d.y -= (i-12); });

export const DownIsBetter: Story = {
  parameters: {
  docs: { description: { story: `Individuals (XmR) where lower values are better (metricImprovement=Down).\nShows a decreasing trend and how variation / assurance semantics invert. Use when declines indicate improvement.` } },
  metricContext: { improvement: 'down' }
  },
  render: () => {
	return (
	  <ChartContainer title="SPC (Down is better)" description="Variation icons invert when improvement direction is Down" source="Synthetic data">
			<SPCChart
				data={data}
				chartType="XmR"
				settings={{
					suppressIsolatedFavourablePoint: true,
				}}
				metricImprovement={ImprovementDirection.Down}
				announceFocus
				narrationContext={{ measureName: 'Process metric', datasetContext: 'Synthetic direction example', timeframe: '30 points' }}
			/>
	  </ChartContainer>
	);
  }
};

export const UpIsBetter: Story = {
  parameters: {
  docs: { description: { story: `Individuals (XmR) where higher values are better (metricImprovement=Up).\nShows an increasing trend and how variation / assurance semantics invert. Use when increases indicate improvement.` } },
  metricContext: { improvement: 'up' }
  },
  render: () => {
	return (
		<ChartContainer title="SPC (Up is better)"
			description="Variation icons invert when improvement direction is Up"
			source="Synthetic data">
			<SPCChart
				data={data}
				chartType="XmR"
				metricImprovement={ImprovementDirection.Up}
				announceFocus
				narrationContext={{ measureName: 'Process metric', datasetContext: 'Synthetic direction example', timeframe: '30 points' }}
			/>
	  </ChartContainer>
	);
  }
};

// Rare event examples (T and G charts)
function makeRareEventGaps(len: number, base: number, volatility: number): SPCDatum[] {
  const pts: SPCDatum[] = [];
  const start = Date.now() - (len-1)*24*3600*1000;
  for (let i=0;i<len;i++) {
	const noise = (Math.random()-0.5) * volatility;
	const gap = Math.max(1, Math.round(base + noise));
	pts.push({ x: new Date(start + i*24*3600*1000), y: gap });
  }
  return pts;
}

export const TChartRareEvents: Story = {
  parameters: {
  docs: { description: { story: `T Chart (time-between rare events).\nApplies y = t^0.2777 transform → XmR → back-transform limits.\nHighlights extended gap (potential improvement if higher=better) and very short gap (concern). Lower limit suppressed if ≤0 post back-transform.` } },
  metricContext: { improvement: 'up' }
  },
  render: () => {
	const data = React.useMemo(() => makeRareEventGaps(20, 5, 3), []); // days between events
	// Introduce an unusually long gap + short gap
	const mutated = data.map(d => ({ ...d }));
	mutated[8].y += 10; // long gap (improvement if UP)
	mutated[15].y = 1;  // very short gap (concern)
	return (
	  <ChartContainer title="SPC T Chart (Time between events)" description="Uses T chart logic for time between rare events" source="Synthetic data">
  <SPCChart data={mutated} chartType="T" metricImprovement={ImprovementDirection.Up} announceFocus narrationContext={{ measureName: 'Days between events', datasetContext: 'Rare event monitoring', timeframe: '20 observations' }} />
	  </ChartContainer>
	);
  }
};

export const GChartRareEvents: Story = {
  parameters: {
  docs: { description: { story: `G Chart (count-between rare events).\nGeometric distribution–derived probability limits. Demonstrates a long count (potential improvement) and a very short count (concern). LCL clipped at 0. Use for opportunities/units between events.` } },
  metricContext: { improvement: 'up' }
  },
  render: () => {
	const data = React.useMemo(() => makeRareEventGaps(20, 12, 5), []); // count between events
	const mutated = data.map(d => ({ ...d }));
	mutated[5].y += 15; // high count between events
	mutated[12].y = 1;  // low count between events
	return (
	  <ChartContainer title="SPC G Chart (Count between events)" description="Uses G chart logic for count between rare events" source="Synthetic data">
  <SPCChart data={mutated} chartType="G" metricImprovement={ImprovementDirection.Up} announceFocus narrationContext={{ measureName: 'Count between events', datasetContext: 'Rare event monitoring', timeframe: '20 observations' }} />
	  </ChartContainer>
	);
  }
};

// Assurance capability examples (Pass / Fail / Uncertain)
export const AssuranceCapability: Story = {
  parameters: {
	docs: { description: { story: `Assurance capability demonstration. Three metrics share similar variation but different relation to target (dashed).\nPass: Entire 3σ process band sits on the good side of target.\nFail: Entire band sits on the bad side.\nUncertain: Band straddles target. Uses capability mode (default) rather than single-point comparison.` } },
	metricContext: { improvement: 'up' }
  },
  render: () => {
	const baseSeq: SPCDatum[] = Array.from({ length: 20 }, (_, i) => ({ x: i+1, y: 50 + Math.sin(i/2)*3 + (Math.random()-0.5)*2 }));
	const passData: SPCDatum[] = baseSeq.map(d => ({ ...d, y: d.y + 20, target: 60 })); // target below band (good since Up)
	const failData: SPCDatum[] = baseSeq.map(d => ({ ...d, y: d.y - 20, target: 60 })); // band below target (bad for Up)
	const uncertainData: SPCDatum[] = baseSeq.map(d => ({ ...d, target: 60 })); // baseline around target
	return (
	  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
		<ChartContainer title="Capability: Pass" description="Process consistently above target" source="Synthetic data">
		  <SPCChart data={passData} chartType="XmR" metricImprovement={ImprovementDirection.Up} announceFocus narrationContext={{ measureName: 'Capability metric', datasetContext: 'Process band entirely favourable', additionalNote: 'Pass scenario' }} />
		</ChartContainer>
		<ChartContainer title="Capability: Fail" description="Process consistently below target" source="Synthetic data">
		  <SPCChart data={failData} chartType="XmR" metricImprovement={ImprovementDirection.Up} announceFocus narrationContext={{ measureName: 'Capability metric', datasetContext: 'Process band entirely unfavourable', additionalNote: 'Fail scenario' }} />
		</ChartContainer>
		<ChartContainer title="Capability: Uncertain" description="Process band overlaps target" source="Synthetic data">
		  <SPCChart data={uncertainData} chartType="XmR" metricImprovement={ImprovementDirection.Up} announceFocus narrationContext={{ measureName: 'Capability metric', datasetContext: 'Process band overlaps target', additionalNote: 'Uncertain scenario' }} />
		</ChartContainer>
	  </div>
	);
  }
};
