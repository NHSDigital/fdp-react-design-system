import { describe, it, expect } from 'vitest';
import nunjucks from 'nunjucks';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Label } from '../../src/components/Label/Label';
import { normaliseHtml, loose } from './utils/htmlNormaliser';

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('src/macros'));

describe('Label macro parity', () => {
  const fixtures = [
    { react: { children: 'Email address', htmlFor: 'email' }, macro: { text: 'Email address', htmlFor: 'email' } },
    { react: { children: 'Heading label', isPageHeading: true, htmlFor: 'name' }, macro: { text: 'Heading label', isPageHeading: true, htmlFor: 'name' } },
    { react: { children: 'Large', size: 'l', htmlFor: 'l1' }, macro: { text: 'Large', size: 'l', htmlFor: 'l1' } }
  ];

  fixtures.forEach((f, i) => {
    it(`fixture ${i+1}`, () => {
      const r = normaliseHtml(renderToString(React.createElement(Label as any, f.react as any)));
  const m = normaliseHtml(env.renderString(`{% from "label.njk" import label %}{{ label(params) }}`, { params: f.macro }));
      expect(loose(r)).toEqual(loose(m));
    });
  });
});
