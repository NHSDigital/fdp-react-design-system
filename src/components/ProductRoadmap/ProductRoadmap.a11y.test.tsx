import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { expectAccessible } from '../../test-utils/accessibility';
import { ProductRoadmap } from './ProductRoadmap';

describe('ProductRoadmap (a11y)', () => {
  it('no axe violations basic', async () => {
    const { container } = render(
      <ProductRoadmap
        dateHeadings={['Q1', 'Q2']}
        categories={[{ heading: 'Cat', roadmapItems: [{ content: 'Item', date: 1 }] }]}
      />
    );
    await expectAccessible(container);
  });
});
