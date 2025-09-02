import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import React from 'react';
import nunjucks from 'nunjucks';
import { Radios } from '../../src/components/Radios/Radios';
import { normaliseHtml } from './utils/htmlNormaliser';

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('dist/macros'));

function renderMacro(params: any) {
  const macro = `{% from "radios.njk" import radios %}{{ radios(params) }}`;
  return env.renderString(macro, { params });
}

describe('Radios macro parity', () => {
  const react = (p: any) => normaliseHtml(renderToString(<Radios {...p} />));
  const macro = (p: any) => normaliseHtml(renderMacro(p));

  const baseOptions = [
    { value: 'a', text: 'Option A' },
    { value: 'b', text: 'Option B', hint: 'More info' },
    { value: 'c', text: 'Option C', disabled: true }
  ];

  it('uncontrolled default value', () => {
    const props = { name: 'r1', options: baseOptions, defaultValue: 'b' };
    expect(macro(props)).toEqual(react(props));
  });

  it('controlled value', () => {
    const props = { name: 'r2', options: baseOptions, value: 'a' };
    expect(macro(props)).toEqual(react(props));
  });

  it('inline small with error', () => {
    const props = { name: 'r3', options: baseOptions, inline: true, size: 'small', hasError: true };
    expect(macro(props)).toEqual(react(props));
  });

  it('conditional content (simple HTML)', () => {
    const options = [
      { value: 'x', text: 'X', conditional: '<p>Conditional X</p>' },
      { value: 'y', text: 'Y' }
    ];
    const props = { name: 'r4', options, defaultValue: 'x' };
    expect(macro(props)).toEqual(react(props));
  });
});
