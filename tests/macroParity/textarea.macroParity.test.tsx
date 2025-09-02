import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { Textarea } from '../../src/components/Textarea/Textarea';
import nunjucks from 'nunjucks';
import { normaliseHtml } from './utils/htmlNormaliser';

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('dist/macros'));

describe('Textarea macro parity', () => {
  const macro = `{% from "textarea.njk" import textarea %}`;

  function renderMacro(params: any) {
    return env.renderString(`${macro}{{ textarea(params) }}`, { params });
  }

  it('basic textarea', () => {
    const reactHtml = renderToString(<Textarea id="msg" name="message" />);
    const macroHtml = renderMacro({ id: 'msg', name: 'message' });
    expect(normaliseHtml(macroHtml)).toEqual(normaliseHtml(reactHtml));
  });

  it('with value (controlled)', () => {
    const reactHtml = renderToString(<Textarea id="t1" name="t1" value="Hello" onChange={() => {}} />);
    const macroHtml = renderMacro({ id: 't1', name: 't1', value: 'Hello' });
    expect(normaliseHtml(macroHtml)).toEqual(normaliseHtml(reactHtml));
  });

  it('with defaultValue (uncontrolled)', () => {
    const reactHtml = renderToString(<Textarea id="t2" name="t2" defaultValue="Draft" />);
    const macroHtml = renderMacro({ id: 't2', name: 't2', defaultValue: 'Draft' });
    expect(normaliseHtml(macroHtml)).toEqual(normaliseHtml(reactHtml));
  });

  it('error + resize variant', () => {
    const reactHtml = renderToString(<Textarea id="t3" name="t3" hasError resize="horizontal" />);
    const macroHtml = renderMacro({ id: 't3', name: 't3', hasError: true, resize: 'horizontal' });
    expect(normaliseHtml(macroHtml)).toEqual(normaliseHtml(reactHtml));
  });

  it('all attributes', () => {
    const reactHtml = renderToString(<Textarea id="t4" name="t4" placeholder="Enter" rows={8} cols={40} maxLength={120} minLength={10} wrap="hard" autoComplete="on" spellCheck={false} describedBy="h1 e1" />);
    const macroHtml = renderMacro({ id: 't4', name: 't4', placeholder: 'Enter', rows: 8, cols: 40, maxLength: 120, minLength: 10, wrap: 'hard', autoComplete: 'on', spellCheck: false, describedBy: 'h1 e1' });
    expect(normaliseHtml(macroHtml)).toEqual(normaliseHtml(reactHtml));
  });
});
