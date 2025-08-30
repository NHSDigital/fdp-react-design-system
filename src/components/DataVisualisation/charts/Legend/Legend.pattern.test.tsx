import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Legend } from '../../index';
import { generatePattern, patternDataUrl } from '../../utils/patterns';

describe('Legend pattern overlay', () => {
  it('applies patternDataUrl as background-image', () => {
    const pat = patternDataUrl(generatePattern('diagonal'));
    const items = [ { id: 's1', label: 'Series 1', color: '#005EB8', patternDataUrl: pat } ];
    const { getByText } = render(<Legend items={items} />);
    const li = getByText('Series 1').closest('li');
    expect(li).toBeTruthy();
    const swatch = li!.querySelector('button.fdp-legend__swatch') as HTMLButtonElement | null;
    expect(swatch).toBeTruthy();
    // JSDOM exposes inline style string
    expect(swatch!.getAttribute('style')).toMatch(/background-image/);
  });
  it('maintains aria-pressed semantics when interactive with pattern', () => {
    const pat = patternDataUrl(generatePattern('checker'));
    const items = [ { id: 's1', label: 'Series 1', color: '#005EB8', patternDataUrl: pat } ];
    const { getByText } = render(<Legend items={items} interactive />);
    const swatch = getByText('Series 1').closest('li')!.querySelector('button.fdp-legend__swatch') as HTMLButtonElement;
    // Initially visible => aria-pressed true
    expect(swatch.getAttribute('aria-pressed')).toBe('true');
    const styleBefore = swatch.getAttribute('style') || '';
    expect(styleBefore).toMatch(/background-image/);
    fireEvent.click(swatch);
    // After click becomes hidden => aria-pressed false
    expect(swatch.getAttribute('aria-pressed')).toBe('false');
    // Pattern still applied
    expect(swatch.getAttribute('style')).toMatch(/background-image/);
  });
});
