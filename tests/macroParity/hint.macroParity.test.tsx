import React from 'react';
import { renderToString } from 'react-dom/server';
// Import nunjucks using require to avoid potential ESM/bundler type resolution issues in tests
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nunjucks = require('nunjucks');
import { describe, it, expect } from 'vitest';
import { Hint } from '../../src/components/Hint/Hint';
import { normaliseHtml } from './utils/htmlNormaliser';

// Configure nunjucks to load from dist (generated) then src (manual) macros
const env = new nunjucks.Environment(
  new nunjucks.FileSystemLoader(['dist/macros', 'src/macros'])
);

describe('Hint macro parity', () => {
  it('matches React SSR output for basic hint', () => {
    const reactHtml = renderToString(<Hint id="hint-1">Support text</Hint>);
    const macroHtml = env.renderString(`{% from "hint.njk" import hint %}{{ hint({ id: 'hint-1', html: 'Support text' }) }}`);
    expect(normaliseHtml(reactHtml)).toEqual(normaliseHtml(macroHtml));
  });

  it('supports additional className', () => {
    const reactHtml = renderToString(<Hint className="extra">Help</Hint>);
    const macroHtml = env.renderString(`{% from "hint.njk" import hint %}{{ hint({ html: 'Help', className: 'extra' }) }}`);
    expect(normaliseHtml(reactHtml)).toEqual(normaliseHtml(macroHtml));
  });
});
