import * as React from 'react';
import { createSequentialColorScale, createDivergingColorScale } from './utils/colors';

export default {
  title: 'Data Visualisation/Utilities/Palettes/Sequential & Diverging'
};

const values = Array.from({ length: 11 }).map((_, i) => i / 10); // 0..1

export const SequentialBlue = () => {
  const scale = React.useMemo(() => createSequentialColorScale({ domain: [0, 1], colors: ['#e5f1fa', '#005eb8'] }), []);
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {values.map(v => (
        <div key={v} style={{ width: 32, height: 32, background: scale(v), border: '1px solid #ccc' }} aria-label={`${v}`}></div>
      ))}
    </div>
  );
};

export const DivergingRedGreen = () => {
  const scale = React.useMemo(() => createDivergingColorScale({ domain: [-1, 0, 1] }), []);
  const vals = Array.from({ length: 21 }).map((_, i) => -1 + (i / 20) * 2);
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {vals.map(v => (
        <div key={v} style={{ width: 24, height: 24, background: scale(v), border: '1px solid #ccc' }} aria-label={`${v.toFixed(2)}`}></div>
      ))}
    </div>
  );
};

SequentialBlue.parameters = {
  docs: { description: { story: 'Sequential scale from light to NHS blue.' } }
};

DivergingRedGreen.parameters = {
  docs: { description: { story: 'Auto-generated diverging scale red → neutral → green.' } }
};
