import { describe, it, expect } from 'vitest';
import nunjucks from 'nunjucks';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ErrorSummary } from '../../src/components/ErrorSummary/ErrorSummary';
import { normaliseHtml, loose } from './utils/htmlNormaliser';

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('src/macros'));

describe('ErrorSummary macro parity', () => {
  const fixtures = [
    {
      react: { errorList: [{ text: 'Enter a first name', href: '#first-name' }] },
      macro: { errorList: [{ text: 'Enter a first name', href: '#first-name' }] }
    },
    {
      react: { titleText: 'Check form', descriptionText: 'Fix these issues:', errorList: [{ text: 'Email required', href: '#email' }, { text: 'Password too short', href: '#password' }] },
      macro: { titleText: 'Check form', descriptionText: 'Fix these issues:', errorList: [{ text: 'Email required', href: '#email' }, { text: 'Password too short', href: '#password' }] }
    },
    {
      react: { titleHtml: '<span>Custom <strong>Title</strong></span>', descriptionHtml: '<p>HTML description</p>', errorList: [{ html: '<strong>Rich</strong> item', href: '#x' }] },
      macro: { titleHtml: '<span>Custom <strong>Title</strong></span>', descriptionHtml: '<p>HTML description</p>', errorList: [{ html: '<strong>Rich</strong> item', href: '#x' }] }
    },
    {
      react: { descriptionText: 'Uses children override', children: React.createElement('div', null, 'Child content'), errorList: [{ text: 'One issue' }] },
      macro: { descriptionText: 'Uses children override', children: '<div>Child content</div>', errorList: [{ text: 'One issue' }] }
    }
  ];

  fixtures.forEach((f, i) => {
    it(`fixture ${i+1}`, () => {
      const r = normaliseHtml(renderToString(React.createElement(ErrorSummary as any, f.react as any)));
      const m = normaliseHtml(env.renderString(`{% from "error-summary.njk" import errorSummary %}{{ errorSummary(params) }}`, { params: f.macro }));
      expect(loose(r)).toEqual(loose(m));
    });
  });
});
