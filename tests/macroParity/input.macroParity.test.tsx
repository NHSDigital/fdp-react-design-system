import React from 'react';
import { renderToString } from 'react-dom/server';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nunjucks = require('nunjucks');
import { describe, it, expect } from 'vitest';
import { Input } from '../../src/components/Input/Input';
import { normaliseHtml } from './utils/htmlNormaliser';

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(['dist/macros', 'src/macros']));

describe('Input macro parity', () => {
  const react = (props: any) => normaliseHtml(renderToString(<Input {...props} />));
  const macro = (params: any) => normaliseHtml(env.renderString(`{% from "input.njk" import input %}{{ input(params) }}`, { params }));

  it('basic text input (uncontrolled)', () => {
    const props = { id: 'example', name: 'example', defaultValue: 'Hello', placeholder: 'Enter' };
    expect(macro(props)).toEqual(react(props));
  });
  it('basic text input (controlled value)', () => {
    const props = { id: 'example2', name: 'example2', value: 'Hello', onChange: () => {} };
    expect(macro(props)).toEqual(react(props));
  });

  it('error state', () => {
    const props = { id: 'email', name: 'email', type: 'email', hasError: true };
    expect(macro(props)).toEqual(react(props));
  });

  it('width variant', () => {
    const props = { id: 'code', name: 'code', width: '10', defaultValue: 'ABC123' };
    expect(macro(props)).toEqual(react(props));
  });

  it('range basic', () => {
    const props = { id: 'range1', name: 'range1', type: 'range', min: 0, max: 100 };
    expect(macro(props)).toEqual(react(props));
  });

  it('range with labels and current value', () => {
    const props = { id: 'range2', name: 'range2', type: 'range', min: 0, max: 10, showValueLabels: true, showCurrentValue: true, valueLabels: { min: 'Low', max: 'High', current: 'Current:' } };
    expect(macro(props)).toEqual(react(props));
  });
});
