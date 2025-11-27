import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { ProductRoadmap } from './ProductRoadmap';

describe('ProductRoadmap (Hydration)', () => {
  it('matches client render output structure', () => {
    const { container } = render(
      <ProductRoadmap
        dateHeadings={['Q1', 'Q2']}
        categories={[{ heading: 'Cat', roadmapItems: [{ content: 'Item A', date: 1 }, { content: 'Item B', date: 2 }] }]}
      />
    );
    const items = container.querySelectorAll('.nhsuk-product-roadmap__item');
    expect(items.length).toBe(2);
  });
});
