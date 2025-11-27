import React from 'react';
import { describe, it, expect } from 'vitest';
import { CharacterCount } from '../../src/components/CharacterCount/CharacterCount';
import { buildParity } from './utils/parityHarness';

const { react, macro } = buildParity({
  react: (p) => <CharacterCount {...p} />,
  macroName: 'character-count', // file name
  macroSymbol: 'characterCount', // exported njk macro function name
});

describe('CharacterCount macro parity', () => {
  it('basic maxLength', () => {
    expect(macro({ id: 'cc1', name: 'cc1', maxLength: 25, defaultValue: 'Hello' }))
      .toEqual(react({ id: 'cc1', name: 'cc1', maxLength: 25, defaultValue: 'Hello' }));
  });
  it('shows initial over limit state', () => {
    expect(macro({ id: 'cc2', name: 'cc2', maxLength: 5, defaultValue: 'Too long value' }))
      .toEqual(react({ id: 'cc2', name: 'cc2', maxLength: 5, defaultValue: 'Too long value' }));
  });
  it('word counting variant', () => {
    expect(macro({ id: 'cc3', name: 'cc3', maxWords: 3, defaultValue: 'one two three' }))
      .toEqual(react({ id: 'cc3', name: 'cc3', maxWords: 3, defaultValue: 'one two three' }));
  });
});