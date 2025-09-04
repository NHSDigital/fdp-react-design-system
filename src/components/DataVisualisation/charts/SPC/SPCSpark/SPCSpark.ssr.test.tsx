import React from 'react';
import { renderToString } from 'react-dom/server';
import { SPCSpark } from './SPCSpark';

describe('SPCSpark SSR', () => {
  it('renders without crashing server-side', () => {
    const html = renderToString(<SPCSpark data={[{value:10},{value:12},{value:11}]} autoClassify showLimits />);
    expect(html).toContain('svg');
  });
});
