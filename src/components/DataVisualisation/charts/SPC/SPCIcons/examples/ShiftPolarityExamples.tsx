import React from 'react';
import SPCChart from '../../SPCChart/SPCChart';
import { ImprovementDirection } from '../../engine';

// 7 baseline points at 50 then shift to 70 (special cause shift)
const shiftData = [
  { x: 1, y: 50 },
  { x: 2, y: 50 },
  { x: 3, y: 50 },
  { x: 4, y: 50 },
  { x: 5, y: 50 },
  { x: 6, y: 50 },
  { x: 7, y: 50 },
  { x: 8, y: 70 },
  { x: 9, y: 70 },
  { x: 10, y: 70 },
  { x: 11, y: 70 },
  { x: 12, y: 70 },
  { x: 13, y: 70 },
  { x: 14, y: 70 },
  { x: 15, y: 70 }
];

export const ShiftPolarityExamples: React.FC = () => {
  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <div style={{ maxWidth: 340 }}>
        <strong>Higher is better (polarity letter H)</strong>
        <SPCChart data={shiftData} metricImprovement={ImprovementDirection.Up} enableRules />
      </div>
      <div style={{ maxWidth: 340 }}>
        <strong>Lower is better (polarity letter L)</strong>
        <SPCChart data={shiftData} metricImprovement={ImprovementDirection.Down} enableRules />
      </div>
      <div style={{ maxWidth: 340 }}>
        <strong>Neither (letters show signal side H)</strong>
        <SPCChart data={shiftData} metricImprovement={ImprovementDirection.Neither} enableRules />
      </div>
    </div>
  );
};

export default ShiftPolarityExamples;
