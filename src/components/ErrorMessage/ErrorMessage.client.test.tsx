import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage (client)', () => {
  it('renders text content', () => {
    render(<ErrorMessage id="em1">Invalid input</ErrorMessage>);
    expect(screen.getByText('Invalid input')).toBeInTheDocument();
  });
  it('supports custom visuallyHiddenText', () => {
    render(<ErrorMessage visuallyHiddenText="Alert:">Invalid value</ErrorMessage>);
  // Hidden prefix is rendered in its own span with visually hidden class
  const hiddenSpan = document.querySelector('.nhsuk-u-visually-hidden');
  expect(hiddenSpan).toBeTruthy();
  expect(hiddenSpan?.textContent).toContain('Alert:');
  expect(screen.getByText('Invalid value')).toBeInTheDocument();
  });
});
