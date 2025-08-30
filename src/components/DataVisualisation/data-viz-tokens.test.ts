import { describe, it, expect } from 'vitest';
// Tokens are raw JSON; import via require to avoid build transforms
const dataViz = require('../../../packages/nhs-fdp/tokens/data-viz.json');
const semanticDataViz = require('../../../packages/nhs-fdp/tokens/semantic-data-viz.json');

function get(obj: any, path: string) {
  return path.split('.').reduce((acc, k) => (acc ? acc[k] : undefined), obj);
}

describe('Data Viz Tokens', () => {
  it('has 12 categorical series', () => {
    for (let i = 1; i <= 12; i++) {
      const token = get(dataViz, `color.data-viz.categorical.${i}`);
      expect(token, `categorical ${i} missing`).toBeTruthy();
      expect(token.$value, `categorical ${i} missing $value`).toBeTruthy();
    }
  });

  it('has region tokens', () => {
    const regions = ['north-east','north-west','east-of-england','midlands','london','south-west','south-east'];
    regions.forEach(r => {
      const token = get(dataViz, `color.data-viz.region.${r}`);
      expect(token, `region ${r} missing`).toBeTruthy();
    });
  });

  it('has stroke tokens for categorical & region', () => {
    for (let i = 1; i <= 12; i++) {
      const s = get(dataViz, `color.data-viz.stroke.categorical.${i}`);
      expect(s, `stroke categorical ${i} missing`).toBeTruthy();
    }
    const regions = ['north-east','north-west','east-of-england','midlands','london','south-west','south-east'];
    regions.forEach(r => {
      const s = get(dataViz, `color.data-viz.stroke.region.${r}`);
      expect(s, `stroke region ${r} missing`).toBeTruthy();
    });
  });

  it('exposes semantic aliases for series and regions', () => {
    for (let i = 1; i <= 12; i++) {
      const alias = get(semanticDataViz, `semantic.data-viz.series.${i}`);
      expect(alias, `semantic series ${i} missing`).toBeTruthy();
    }
    const regions = ['north-east','north-west','east-of-england','midlands','london','south-west','south-east'];
    regions.forEach(r => {
      const alias = get(semanticDataViz, `semantic.data-viz.region.${r}`);
      expect(alias, `semantic region alias ${r} missing`).toBeTruthy();
    });
  });
});
