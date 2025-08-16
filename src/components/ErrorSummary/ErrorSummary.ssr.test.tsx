import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { ErrorSummary } from './ErrorSummary';

describe('ErrorSummary (SSR)', () => {
  const errors = [
    { text: 'Enter your full name', href: '#name' },
    { text: 'Enter a valid email address', href: '#email' },
  ];

  it('renders list and heading', () => {
    const html = renderToString(<ErrorSummary errorList={errors} />);
    expect(html).toContain('There is a problem');
    expect(html).toContain('Enter your full name');
    expect(html).toContain('href="#name"');
  });

  it('renders custom titleHtml and descriptionHtml', () => {
    const html = renderToString(
      <ErrorSummary errorList={errors} titleHtml="<strong>Problems</strong> found" descriptionHtml="Please fix <em>issues</em>" />
    );
    expect(html).toContain('<strong>Problems</strong>');
    expect(html).toContain('<em>issues</em>');
  });
});
