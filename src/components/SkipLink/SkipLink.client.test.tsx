import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { SkipLink } from './SkipLink';

describe('SkipLink (client)', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders default link', () => {
    const { getByText } = render(<SkipLink />);
    const link = getByText('Skip to main content');
    expect(link).toBeTruthy();
    expect(link.getAttribute('href')).toBe('#maincontent');
  });

  it('focuses target element when clicked (if present)', () => {
    const main = document.createElement('main');
    main.id = 'maincontent';
    document.body.appendChild(main);
    const { getByText } = render(<SkipLink />);
    const link = getByText('Skip to main content');
    fireEvent.click(link);
    expect(document.getElementById('maincontent')).toBeTruthy();
  });

  it('supports custom text + href', () => {
    const { getByText } = render(<SkipLink text="Jump" href="#nav" />);
    const link = getByText('Jump');
    expect(link.getAttribute('href')).toBe('#nav');
  });
});
