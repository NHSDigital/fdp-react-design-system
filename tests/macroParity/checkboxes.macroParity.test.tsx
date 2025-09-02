import React from 'react';
import { renderToString } from 'react-dom/server';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nunjucks = require('nunjucks');
import { describe, it, expect } from 'vitest';
import { Checkboxes } from '../../src/components/Checkboxes/Checkboxes';
import { normaliseHtml } from './utils/htmlNormaliser';

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(['dist/macros', 'src/macros']));
const react = (props: any) => normaliseHtml(renderToString(<Checkboxes {...props} />));
const macro = (params: any) => normaliseHtml(env.renderString(`{% from "checkboxes.njk" import checkboxes %}{{ checkboxes(params) }}`, { params }));

describe('Checkboxes macro parity', () => {
  const baseItems = [
    { value: 'a', text: 'Option A' },
    { value: 'b', text: 'Option B', hint: 'More info', checked: true },
    { value: 'c', text: 'Option C', disabled: true }
  ];

  it('basic rendering with legend + hint + error', () => {
    const props = { name: 'cb1', legend: 'Choose things', hint: 'Helpful hint', errorMessage: 'Problem', items: baseItems };
    expect(macro(props)).toEqual(react(props));
  });

  it('small variant', () => {
    const props = { name: 'cb2', small: true, items: baseItems };
    expect(macro(props)).toEqual(react(props));
  });

  it('conditional content', () => {
    const items = [
      { value: 'x', text: 'X', checked: true, conditional: '<p>Conditional X</p>' },
      { value: 'y', text: 'Y' }
    ];
    const props = { name: 'cb3', items };
    expect(macro(props)).toEqual(react(props));
  });
});