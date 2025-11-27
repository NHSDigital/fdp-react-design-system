import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { DoDontList } from './DoDontList';

describe('DoDontList (SSR)', () => {
  const items = [
    { item: 'wash your hands regularly' },
    { item: 'cover your mouth when coughing' },
  ];

  it('renders basic markup on the server', () => {
    const html = renderToString(<DoDontList title="Do" type="tick" items={items} />);
    expect(html).toContain('nhsuk-do-dont-list');
    expect(html).toContain('nhsuk-list--tick');
    expect(html).toContain('wash your hands regularly');
  });

  it('renders cross list with prefixed text on server', () => {
    const html = renderToString(<DoDontList title="Don\'t" type="cross" items={[{ item: 'touch your face' }]} />);
    expect(html).toContain('nhsuk-list--cross');
    expect(html).toContain('do not touch your face');
  });
});
