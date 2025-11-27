import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { Label } from './Label';

describe('Label (SSR)', () => {
  it('renders basic label', () => {
    const html = renderToString(<Label htmlFor="email">Email</Label>);
    expect(html).toContain('Email');
    expect(html).toContain('for="email"');
  });
  it('renders page heading variant', () => {
    const html = renderToString(<Label htmlFor="main" isPageHeading size="xl">Main Heading</Label>);
    expect(html).toContain('<h1');
    expect(html).toContain('nhsuk-label--xl');
    expect(html).toContain('Main Heading');
  });
});
