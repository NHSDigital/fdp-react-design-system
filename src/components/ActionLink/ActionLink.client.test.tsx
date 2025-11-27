import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ActionLink } from './ActionLink';

describe('ActionLink (client)', () => {
  it('renders arrow icon', () => {
    render(<ActionLink text="Go" href="/go" />);
    expect(document.querySelector('.nhsuk-icon__arrow-right-circle')).toBeTruthy();
    expect(screen.getByText('Go')).toBeInTheDocument();
  });
});
