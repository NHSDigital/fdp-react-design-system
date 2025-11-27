import React from 'react';
import { renderToString } from 'react-dom/server';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nunjucks = require('nunjucks');
import { describe, it, expect } from 'vitest';
import { ErrorMessage } from '../../src/components/ErrorMessage/ErrorMessage';
import { normaliseHtml } from './utils/htmlNormaliser';

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(['dist/macros', 'src/macros']));

describe('ErrorMessage macro parity', () => {
  it('renders with default visually hidden text', () => {
    const reactHtml = renderToString(<ErrorMessage id="err1">Problem occurred</ErrorMessage>);
    const macroHtml = env.renderString(`{% from "error-message.njk" import errorMessage %}{{ errorMessage({ id: 'err1', text: 'Problem occurred' }) }}`);
    expect(normaliseHtml(reactHtml)).toEqual(normaliseHtml(macroHtml));
  });
  it('renders with custom visually hidden text', () => {
    const reactHtml = renderToString(<ErrorMessage visuallyHiddenText="Error status:">Bad input</ErrorMessage>);
    const macroHtml = env.renderString(`{% from "error-message.njk" import errorMessage %}{{ errorMessage({ visuallyHiddenText: 'Error status:', text: 'Bad input' }) }}`);
    expect(normaliseHtml(reactHtml)).toEqual(normaliseHtml(macroHtml));
  });
  it('applies additional className', () => {
    const reactHtml = renderToString(<ErrorMessage className="extra">Oops</ErrorMessage>);
    const macroHtml = env.renderString(`{% from "error-message.njk" import errorMessage %}{{ errorMessage({ className: 'extra', text: 'Oops' }) }}`);
    expect(normaliseHtml(reactHtml)).toEqual(normaliseHtml(macroHtml));
  });
});
