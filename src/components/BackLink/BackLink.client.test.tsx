import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BackLink } from './BackLink';

describe('BackLink (client)', () => {
  it('applies custom class', () => {
    render(<BackLink className="extra" />);
    const el = screen.getByText('Back').closest('.nhsuk-back-link');
    expect(el?.className).toContain('extra');
  });
});
