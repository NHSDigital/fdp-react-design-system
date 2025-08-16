import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { Heading } from './Heading';

describe('Heading (SSR)', () => {
  it('renders derived level from size', () => {
    const html = renderToString(<Heading size="m" text="Medium" />);
    expect(html).toContain('<h3');
    expect(html).toContain('Medium');
  });
  it('respects explicit level over size', () => {
    const html = renderToString(<Heading level={4} size="m" text="Forced" />);
    expect(html).toContain('<h4');
  });
});
