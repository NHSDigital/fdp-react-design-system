import React from 'react';
import { renderToString } from 'react-dom/server';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nunjucks = require('nunjucks');
import { describe, it, expect } from 'vitest';
import { Heading } from '../../src/components/Heading/Heading';
import { normaliseHtml } from './utils/htmlNormaliser';

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(['dist/macros', 'src/macros']));

describe('Heading macro parity', () => {
  it('matches default derived level from size', () => {
    const reactHtml = renderToString(<Heading size="xl" text="Page title" />);
    const macroHtml = env.renderString(`{% from "heading.njk" import heading %}{{ heading({ size: 'xl', text: 'Page title' }) }}`);
    expect(normaliseHtml(reactHtml)).toEqual(normaliseHtml(macroHtml));
  });

  it('respects explicit level override', () => {
    const reactHtml = renderToString(<Heading level={3} size="xl" text="Section" />);
    const macroHtml = env.renderString(`{% from "heading.njk" import heading %}{{ heading({ level:3, size:'xl', text:'Section' }) }}`);
    expect(normaliseHtml(reactHtml)).toEqual(normaliseHtml(macroHtml));
  });

  it('applies custom marginBottom', () => {
    const reactHtml = renderToString(<Heading size="m" marginBottom="32px" text="With spacing" />);
    const macroHtml = env.renderString(`{% from "heading.njk" import heading %}{{ heading({ size:'m', marginBottom:'32px', text:'With spacing' }) }}`);
    expect(normaliseHtml(reactHtml)).toEqual(normaliseHtml(macroHtml));
  });
});
