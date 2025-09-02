import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import React from 'react';
import nunjucks from 'nunjucks';
import { Button } from '../../src/components/Button/Button';
import { normaliseHtml, loose } from './utils/htmlNormaliser';

// Configure nunjucks environment pointing to source macros (not dist yet)
const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('src/macros'));


describe('Button macro parity', () => {
  const fixtures = [
    { props: { children: 'Primary' }, macro: { text: 'Primary' } },
    { props: { children: 'Secondary', variant: 'secondary' }, macro: { text: 'Secondary', variant: 'secondary' } },
    { props: { children: 'Full', fullWidth: true }, macro: { text: 'Full', fullWidth: true } },
    { props: { children: 'Link Btn', href: '/test' }, macro: { text: 'Link Btn', href: '/test' } },
    { props: { children: 'Prevent', preventDoubleClick: true }, macro: { text: 'Prevent', preventDoubleClick: true } }
  ];

  fixtures.forEach((fixture, idx) => {
    it(`fixture ${idx + 1}`, () => {
  // Casting to any because the React Button union expects href when treated as link; our fixtures mix both shapes.
  const reactHtml = normaliseHtml(renderToString(React.createElement(Button as any, fixture.props as any)));
  const nunjucksHtml = normaliseHtml(env.renderString(`{% from "button.njk" import button %}{{ button(params) }}`, { params: { ...fixture.macro } }));
  // Expect equality after removing transient data-* attributes for now
  expect(loose(reactHtml)).toEqual(loose(nunjucksHtml));
    });
  });
});
