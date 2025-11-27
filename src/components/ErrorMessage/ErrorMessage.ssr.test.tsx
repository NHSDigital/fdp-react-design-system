import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage (SSR)', () => {
  it('renders with default hidden prefix', () => {
    const html = renderToString(<ErrorMessage id="e1">Required field</ErrorMessage>);
    expect(html).toContain('nhsuk-error-message');
    expect(html).toContain('Required field');
    expect(html).toContain('Error:');
  });
  it('renders custom hidden prefix', () => {
    const html = renderToString(<ErrorMessage visuallyHiddenText="Problem:">Issue</ErrorMessage>);
    expect(html).toContain('Problem:');
  });
});
