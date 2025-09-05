import { renderToString } from 'react-dom/server';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nunjucks = require('nunjucks');
import { normaliseHtml } from './htmlNormaliser';

// Create (and memo) a nunjucks environment pointing at compiled + source macros
let _env: any;
function getEnv() {
  if (!_env) {
    // Prefer source macros so tests reflect latest edits without requiring rebuild
    _env = new nunjucks.Environment(new nunjucks.FileSystemLoader(['src/macros', 'dist/macros']));
  }
  return _env;
}

export interface ParityTargets<T extends Record<string, any>> {
  react: (props: T) => React.ReactElement;
  /** Base file name (without .njk). If not provided, macroSymbol is used. */
  macroName?: string;
  /** Macro function symbol exported from the njk file. Defaults to macroName. */
  macroSymbol?: string;
}

// Normalise props for parity so we never accidentally pass both value & defaultValue and so that
// any controlled value always has a no-op onChange (avoids React warnings in tests without adding noise).
export function normaliseFieldProps<T extends Record<string, any>>(props: T): T {
  const clone: any = { ...props };
  if (clone.value != null) {
    // Ensure onChange exists for controlled scenario
    if (typeof clone.onChange !== 'function') {
      clone.onChange = () => {};
    }
    // If value provided, drop defaultValue to avoid mixed mode
    if (clone.defaultValue != null) {
      delete clone.defaultValue;
    }
  }
  return clone;
}

export function renderReact<T extends Record<string, any>>(target: ParityTargets<T>, props: T) {
  const safe = normaliseFieldProps(props);
  return normaliseHtml(renderToString(target.react(safe)));
}

export function renderMacro<T extends Record<string, any>>(target: ParityTargets<T>, params: T) {
  const safe = normaliseFieldProps(params);
  const env = getEnv();
  const fileBase = target.macroName || target.macroSymbol;
  const symbol = target.macroSymbol || target.macroName;
  if (!fileBase || !symbol) throw new Error('parityHarness: macroName or macroSymbol must be provided');
  const tpl = `{% from "${fileBase}.njk" import ${symbol} %}{{ ${symbol}(p) }}`;
  return normaliseHtml(env.renderString(tpl, { p: safe }));
}

export function buildParity(target: ParityTargets<any>) {
  return {
    react: (p: any) => renderReact(target, p),
    macro: (p: any) => renderMacro(target, p),
  };
}
