import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { Hint } from './Hint';

describe('Hint (SSR)', () => {
  it('renders basic content', () => {
    const html = renderToString(<Hint id="h1">Server hint</Hint>);
    expect(html).toContain('Server hint');
    expect(html).toContain('nhsuk-hint');
  });
});
