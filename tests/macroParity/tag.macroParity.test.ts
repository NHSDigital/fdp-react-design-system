import { describe, it, expect } from 'vitest';
import nunjucks from 'nunjucks';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Tag } from '../../src/components/Tag/Tag';
import { normaliseHtml, loose } from './utils/htmlNormaliser';

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('src/macros'));


describe('Tag macro parity', () => {
  const fixtures = [
    { react: { text: 'Default' }, macro: { text: 'Default' } },
    { react: { text: 'Green', color: 'green' }, macro: { text: 'Green', color: 'green' } },
    { react: { text: 'Closable', closable: true }, macro: { text: 'Closable', closable: true } },
    { react: { text: 'Disabled Close', closable: true, disabled: true }, macro: { text: 'Disabled Close', closable: true, disabled: true } },
    { react: { html: '<span>HTML</span>' }, macro: { html: '<span>HTML</span>' } }
  ];

  fixtures.forEach((f, i) => {
    it(`fixture ${i+1}`, () => {
  const r = normaliseHtml(renderToString(React.createElement(Tag as any, f.react as any)));
  const m = normaliseHtml(env.renderString(`{% from "tag.njk" import tag %}{{ tag(params) }}`, { params: f.macro }));
  expect(loose(r)).toEqual(loose(m));
    });
  });
});
