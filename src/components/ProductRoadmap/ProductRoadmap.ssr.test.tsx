import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ProductRoadmap } from './ProductRoadmap';

describe('ProductRoadmap (SSR)', () => {
  it('renders server-side without crashing', () => {
    const html = renderToString(
      <ProductRoadmap
        dateHeadings={['Q1']}
        categories={[{ heading: 'Cat', roadmapItems: [{ content: 'Item', date: 1 }] }]}
      />
    );
    expect(html).toContain('nhsuk-product-roadmap');
  });
});
