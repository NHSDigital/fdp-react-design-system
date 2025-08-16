import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { Fieldset } from './Fieldset';

describe('Fieldset (SSR)', () => {
  it('renders legend and children', () => {
    const html = renderToString(<Fieldset legend={{ text: 'Personal details' }}><div>Child</div></Fieldset>);
    expect(html).toContain('Personal details');
    expect(html).toContain('Child');
  });
  it('renders page heading legend', () => {
    const html = renderToString(<Fieldset legend={{ text: 'Heading legend', isPageHeading: true }}>{null}</Fieldset>);
    expect(html).toContain('<h1');
    expect(html).toContain('Heading legend');
  });
});
