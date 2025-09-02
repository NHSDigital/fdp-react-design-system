import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import React from 'react';
import nunjucks from 'nunjucks';
import { Select } from '../../src/components/Select/Select';
import { normaliseHtml } from './utils/htmlNormaliser';

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('dist/macros'));

function renderMacro(params: any) {
  const macro = `{% from "select.njk" import select %}{{ select(params) }}`;
  return env.renderString(macro, { params });
}

describe('Select macro parity', () => {
  const react = (p: any, children?: React.ReactNode) => normaliseHtml(renderToString(<Select {...p}>{children}</Select>));
  const macro = (p: any) => normaliseHtml(renderMacro(p));

  it('basic select with options prop (default selected via selected flag)', () => {
    const options = [ { value: 'a', text: 'A' }, { value: 'b', text: 'B', selected: true }, { value: 'c', text: 'C' } ];
    const props = { id: 's1', name: 's1', options };
    expect(macro(props)).toEqual(react(props));
  });

  it('controlled value', () => {
    const options = [ { value: 'a', text: 'A' }, { value: 'b', text: 'B' } ];
    const props = { id: 's2', name: 's2', options, value: 'b' };
    expect(macro(props)).toEqual(react(props));
  });

  it('uncontrolled defaultValue', () => {
    const options = [ { value: 'a', text: 'A' }, { value: 'b', text: 'B' } ];
    const props = { id: 's3', name: 's3', options, defaultValue: 'b' };
    expect(macro(props)).toEqual(react(props));
  });

  it('multiple selection with size', () => {
    const options = [ { value: 'a', text: 'A' }, { value: 'b', text: 'B' }, { value: 'c', text: 'C' } ];
    const props = { id: 's4', name: 's4', options, multiple: true, size: 3 };
    expect(macro(props)).toEqual(react(props));
  });

  it('error + describedBy + autoComplete', () => {
    const options = [ { value: 'x', text: 'X' }, { value: 'y', text: 'Y' } ];
    const props = { id: 's5', name: 's5', options, hasError: true, describedBy: 'h1 e1', autoComplete: 'on' };
    expect(macro(props)).toEqual(react(props));
  });

  it('children pattern instead of options prop', () => {
    const props = { id: 's6', name: 's6' };
    const children = <>
      <Select.Option value="1">One</Select.Option>
      <Select.Option value="2" disabled>Two</Select.Option>
    </>;
    expect(macro({ ...props, children: renderToString(children) })).toEqual(react(props, children));
  });
});
