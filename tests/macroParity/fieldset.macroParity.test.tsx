import { describe, it, expect } from 'vitest';
import nunjucks from 'nunjucks';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Fieldset } from '../../src/components/Fieldset/Fieldset';
import { normaliseHtml, loose } from './utils/htmlNormaliser';

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('src/macros'));

describe('Fieldset macro parity', () => {
  const childHtml = '<div>Child</div>';
  const fixtures = [
    { react: { legend: { text: 'Personal details' }, children: React.createElement('div', null, 'Child') }, macro: { legend: { text: 'Personal details' }, children: childHtml } },
    { react: { legend: { html: '<span>Rich <strong>HTML</strong></span>' }, children: React.createElement('div', null, 'Child') }, macro: { legend: { html: '<span>Rich <strong>HTML</strong></span>' }, children: childHtml } },
    { react: { legend: { text: 'As heading', size: 'l', isPageHeading: true }, describedBy: 'hint-id', className: 'extra-class', children: React.createElement('div', null, 'Child') }, macro: { legend: { text: 'As heading', size: 'l', isPageHeading: true }, describedBy: 'hint-id', className: 'extra-class', children: childHtml } },
    { react: { legend: { text: 'Sized legend', size: 'm', className: 'legend-extra' }, children: React.createElement('div', null, 'Child') }, macro: { legend: { text: 'Sized legend', size: 'm', className: 'legend-extra' }, children: childHtml } }
  ];

  fixtures.forEach((f, i) => {
    it(`fixture ${i+1}`, () => {
      const r = normaliseHtml(renderToString(React.createElement(Fieldset as any, f.react as any)));
      const m = normaliseHtml(env.renderString(`{% from "fieldset.njk" import fieldset %}{{ fieldset(params) }}`, { params: f.macro }));
      expect(loose(r)).toEqual(loose(m));
    });
  });
});
