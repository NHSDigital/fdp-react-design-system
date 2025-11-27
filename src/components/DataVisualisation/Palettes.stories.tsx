// React import omitted - using automatic JSX runtime
import { Table } from '../index';
import dataViz from '../../../packages/nhs-fdp/tokens/data-viz.json';
import colors from '../../../packages/nhs-fdp/tokens/colors.json';

const root: any = { color: { ...(colors as any).color, ...(dataViz as any).color } };

function deep(path: string): any {
  return path.split('.').reduce((acc: any, k) => (acc ? acc[k] : undefined), root);
}

function resolve(path: string, seen: Set<string> = new Set()): string | undefined {
  if (seen.has(path)) return undefined;
  seen.add(path);
  const node = deep(path);
  if (!node) return undefined;
  const value = node.$value || node.value;
  if (typeof value === 'string' && /^\{.+\}$/.test(value)) {
    return resolve(value.slice(1, -1), seen);
  }
  return value;
}

const categorical = Array.from({ length: 12 }).map((_, i) => ({
  idx: i + 1,
  token: `color.data-viz.categorical.${i + 1}`,
}));

const regions = [
  'north-east','north-west','east-of-england','midlands','london','south-west','south-east'
].map(id => ({ id, token: `color.data-viz.region.${id}` }));

export default {
  title: 'Data Visualisation/Utilities/Palettes'
};


export const CategoricalPalette = () => {
  const head = [
    { text: 'Series' },
    { text: 'Swatch' },
    { text: 'Token' },
    { text: 'Stroke Token' },
    { text: 'Hex' },
    { text: 'Stroke Hex' }
  ];
  const rows = categorical.map(c => {
    const fillHex = resolve(c.token) || '';
    const strokePath = `color.data-viz.stroke.categorical.${c.idx}`;
    const strokeHex = resolve(strokePath) || '';
    return [
      { text: `Series ${c.idx}` },
      { html: `<span style=\"display:inline-block;width:40px;height:20px;border-radius:4px;border:2px solid ${strokeHex || '#4c6272'};background:${fillHex}\"></span>` },
      { text: c.token },
      { text: strokePath },
      { text: fillHex },
      { text: strokeHex }
    ];
  });
  return <Table head={head} rows={rows} caption="Categorical palette tokens" captionSize="m" responsive />;
};

export const RegionPalette = () => {
  const head = [
    { text: 'Region' },
    { text: 'Swatch' },
    { text: 'Token' },
    { text: 'Stroke Token' },
    { text: 'Hex' },
    { text: 'Stroke Hex' }
  ];
  const rows = regions.map(r => {
    const fillHex = resolve(r.token) || '';
    const strokePath = `color.data-viz.stroke.region.${r.id}`;
    const strokeHex = resolve(strokePath) || '';
    return [
      { text: r.id },
      { html: `<span style=\"display:inline-block;width:40px;height:20px;border-radius:4px;border:2px solid ${strokeHex || '#4c6272'};background:${fillHex}\"></span>` },
      { text: r.token },
      { text: strokePath },
      { text: fillHex },
      { text: strokeHex }
    ];
  });
  return <Table head={head} rows={rows} caption="Region palette tokens" captionSize="m" responsive />;
};
export const PalettesStoryDocs = () => (
  <div>
    <CategoricalPalette />
    <div style={{ marginTop: 48 }} />
    <RegionPalette />
  </div>
);

PalettesStoryDocs.parameters = {
  docs: { description: { story: 'Aggregate categorical and region palettes with their stroke/contrast tokens.' } }
};
