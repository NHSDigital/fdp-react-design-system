import { renderToString } from 'react-dom/server';
import React from 'react';
import { describe, it, expect } from 'vitest';
import { Input } from '../../src/components/Input/Input';
import { normaliseHtml } from './utils/htmlNormaliser';

const macroPath = 'input.njk';

describe('Input macro parity (legacy harness)', () => {
  const renderReact = (props: any) => normaliseHtml(renderToString(<Input {...props} />));
  // Inline simple render macro helper
  const nunjucks = require('nunjucks');
  const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(['dist/macros','src/macros']));
  const renderNunjucks = (params: any) => normaliseHtml(env.renderString(`{% from "${macroPath}" import input %}{{ input(params) }}`, { params }));

  it('matches basic text input', () => {
    const props = { id: 'example', name: 'example', value: 'Hello', placeholder: 'Enter' };
    expect(renderNunjucks(props)).toEqual(renderReact(props));
  });
  it('matches error state', () => {
    const props = { id: 'email', name: 'email', type: 'email', hasError: true };
    expect(renderNunjucks(props)).toEqual(renderReact(props));
  });
  it('matches width variant', () => {
    const props = { id: 'code', name: 'code', width: '10', defaultValue: 'ABC123' };
    expect(renderNunjucks(props)).toEqual(renderReact(props));
  });
  it('matches range variant basic', () => {
    const props = { id: 'range1', name: 'range1', type: 'range', min: 0, max: 100 };
    expect(renderNunjucks(props)).toEqual(renderReact(props));
  });
  it('matches range variant with labels and current value', () => {
    const props = { id: 'range2', name: 'range2', type: 'range', min: 0, max: 10, showValueLabels: true, showCurrentValue: true, valueLabels: { min: 'Low', max: 'High', current: 'Current:' } };
    expect(renderNunjucks(props)).toEqual(renderReact(props));
  });
});
