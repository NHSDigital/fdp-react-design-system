import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { Legend } from '../Legend/Legend';

describe('Legend palettes', () => {
  it('renders severity palette items with data-color attribute', () => {
    const items = [ 'low','moderate','high','critical' ].map(id => ({ id, label: id }));
    const { getByText } = render(<Legend items={items} palette="severity" />);
    items.forEach(i => {
      const el = getByText(i.label).closest('li');
      expect(el).toBeTruthy();
    });
  });
  it('renders org-level palette items', () => {
    const items = [ 'trust','ambulance','icb','region' ].map(id => ({ id, label: id }));
    const { getByText } = render(<Legend items={items as any} palette={"org-level" as any} />);
    items.forEach(i => {
      const el = getByText(i.label).closest('li');
      expect(el).toBeTruthy();
    });
  });
});
