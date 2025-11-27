// React import omitted - automatic JSX runtime
import { Table } from '../index';
import dataViz from '../../../packages/nhs-fdp/tokens/data-viz.json';
import colors from '../../../packages/nhs-fdp/tokens/colors.json';

// Merge token sources (shallow at category level) so reference resolution can span files
const root: any = {
  color: {
    ...(colors as any).color,
    ...(dataViz as any).color
  }
};

function rawLookup(path: string): any {
  return path.split('.').reduce((acc: any, k) => (acc ? acc[k] : undefined), root);
}

function resolveToken(path: string, seen: Set<string> = new Set()): string | undefined {
  if (seen.has(path)) return undefined; // circular guard
  seen.add(path);
  const node = rawLookup(path);
  if (!node) return undefined;
  const value = node.$value || node.value; // support built outputs too
  if (typeof value === 'string' && /^\{.+\}$/.test(value)) {
    const refPath = value.slice(1, -1);
    return resolveToken(refPath, seen);
  }
  return value;
}

const regionEntries: Array<{ id: string; name: string; token: string; cssVar?: string }> = [
  { id: 'northEast', name: 'North East', token: 'color.data-viz.region.north-east' },
  { id: 'northWest', name: 'North West', token: 'color.data-viz.region.north-west' },
  { id: 'eastOfEngland', name: 'East of England', token: 'color.data-viz.region.east-of-england' },
  { id: 'midlands', name: 'Midlands', token: 'color.data-viz.region.midlands' },
  { id: 'london', name: 'London', token: 'color.data-viz.region.london' },
  { id: 'southWest', name: 'South West', token: 'color.data-viz.region.south-west' },
  { id: 'southEast', name: 'South East', token: 'color.data-viz.region.south-east' }
];

export default {
  title: 'Data Visualisation/Utilities/Legend/Region Colours'
};

export const RegionLegend = () => {
  const head = [
    { text: 'Region' },
    { text: 'Swatch' },
    { text: 'Token' },
    { text: 'Hex (resolved)' }
  ];
  const rows = regionEntries.map(r => {
    const hex = resolveToken(r.token) || '';
    return [
      { text: r.name },
      { html: `<span style=\"display:inline-block;width:20px;height:20px;border-radius:4px;border:1px solid #4c6272;background:${hex}\" aria-hidden=\"true\"></span>` },
      { text: r.token },
      { text: hex }
    ];
  });
  return <Table head={head} rows={rows} caption="Region colour tokens" captionSize="m" responsive />;
};

RegionLegend.parameters = {
  docs: {
    description: {
  story: 'Fixed NHS region colour tokens resolved via design token references displayed in a table.'
    }
  }
};
