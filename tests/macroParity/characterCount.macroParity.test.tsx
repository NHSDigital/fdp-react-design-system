import React from 'react';
import { renderToString } from 'react-dom/server';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nunjucks = require('nunjucks');
import { CharacterCount } from '../../src/components/CharacterCount/CharacterCount';
import { normaliseHtml } from './utils/htmlNormaliser';

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(['dist/macros', 'src/macros']));
import { describe, it, expect } from 'vitest';
const react = (props: any) => normaliseHtml(renderToString(<CharacterCount {...props} />));
const macro = (params: any) => normaliseHtml(env.renderString(`{% from "character-count.njk" import characterCount %}{{ characterCount(params) }}`, { params }));

describe('CharacterCount macro parity', () => {
  it('basic maxLength', () => {
    const props = { id: 'cc1', name: 'cc1', maxLength: 25, defaultValue: 'Hello' };
    expect(macro(props)).toEqual(react(props));
  });
  it('shows initial over limit state', () => {
    const props = { id: 'cc2', name: 'cc2', maxLength: 5, defaultValue: 'Too long value' };
    expect(macro(props)).toEqual(react(props));
  });
  it('word counting variant', () => {
    const props = { id: 'cc3', name: 'cc3', maxWords: 3, defaultValue: 'one two three' };
    expect(macro(props)).toEqual(react(props));
  });
});