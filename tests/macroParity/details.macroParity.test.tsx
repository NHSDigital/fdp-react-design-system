import { describe, it, expect } from 'vitest';
import nunjucks from 'nunjucks';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Details } from '../../src/components/Details/Details';
import { normaliseHtml, loose } from './utils/htmlNormaliser';

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('src/macros'));

describe('Details macro parity', () => {
  const fixtures = [
    { react: { summaryText: 'Show more', text: 'Extra information' }, macro: { summaryText: 'Show more', text: 'Extra information' } },
    { react: { summaryHtml: '<strong>Important</strong> details', html: '<p><em>HTML</em> body</p>', open: true }, macro: { summaryHtml: '<strong>Important</strong> details', html: '<p><em>HTML</em> body</p>', open: true } },
    { react: { summaryText: 'Custom id', text: 'With id and class', id: 'd1', className: 'extra' }, macro: { summaryText: 'Custom id', text: 'With id and class', id: 'd1', className: 'extra' } }
  ];

  fixtures.forEach((f, i) => {
    it(`fixture ${i+1}`,( ) => {
      const r = normaliseHtml(renderToString(React.createElement(Details as any, f.react as any)));
      const m = normaliseHtml(env.renderString(`{% from "details.njk" import details %}{{ details(params) }}`, { params: f.macro }));
      expect(loose(r)).toEqual(loose(m));
    });
  });
});
