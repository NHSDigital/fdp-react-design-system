import { describe, it, expect } from 'vitest';
import nunjucks from 'nunjucks';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { InsetText } from '../../src/components/InsetText/InsetText';
import { normaliseHtml, loose } from './utils/htmlNormaliser';

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('src/macros'));

describe('InsetText macro parity', () => {
  const fixtures = [
    { react: { text: 'Plain text' }, macro: { text: 'Plain text' } },
    { react: { html: '<strong>Important</strong> info' }, macro: { html: '<strong>Important</strong> info' } },
    { react: { className: 'extra', text: 'With class' }, macro: { className: 'extra', text: 'With class' } }
  ];

  fixtures.forEach((f, i) => {
    it(`fixture ${i+1}`, () => {
      const r = normaliseHtml(renderToString(React.createElement(InsetText as any, f.react as any)));
      const m = normaliseHtml(env.renderString(`{% from "inset-text.njk" import insetText %}{{ insetText(params) }}`, { params: f.macro }));
      expect(loose(r)).toEqual(loose(m));
    });
  });
});
