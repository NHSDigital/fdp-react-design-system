import { describe, it, expect } from 'vitest';
import nunjucks from 'nunjucks';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Panel } from '../../src/components/Panel/Panel';
import { normaliseHtml, loose } from './utils/htmlNormaliser';

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('src/macros'));

describe('Panel macro parity', () => {
  const fixtures = [
    { react: { headingText: 'Panel heading', bodyText: 'Some body text' }, macro: { headingText: 'Panel heading', bodyText: 'Some body text' } },
    { react: { headingHtml: '<em>Rich</em> heading', bodyHtml: '<p><strong>HTML</strong> body</p>' }, macro: { headingHtml: '<em>Rich</em> heading', bodyHtml: '<p><strong>HTML</strong> body</p>' } },
    { react: { className: 'extra', headingLevel: 3, headingText: 'Level 3', bodyText: 'Body copy' }, macro: { className: 'extra', headingLevel: 3, headingText: 'Level 3', bodyText: 'Body copy' } }
  ];

  fixtures.forEach((f, i) => {
    it(`fixture ${i+1}`,( ) => {
      const r = normaliseHtml(renderToString(React.createElement(Panel as any, f.react as any)));
      const m = normaliseHtml(env.renderString(`{% from "panel.njk" import panel %}{{ panel(params) }}`, { params: f.macro }));
      expect(loose(r)).toEqual(loose(m));
    });
  });
});
