import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Images } from './Images';

describe('Images (client)', () => {
  it('applies classes and attributes', () => {
    render(<Images src="x.jpg" alt="Desc" className="extra" data-testid="imgfig" />);
    const fig = screen.getByTestId('imgfig');
    expect(fig).toHaveClass('nhsuk-image');
    expect(fig).toHaveClass('extra');
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'x.jpg');
    expect(img).toHaveAttribute('alt', 'Desc');
  });

  it('renders caption when provided', () => {
    render(<Images src="x.jpg" alt="a" caption="Cap" />);
    expect(screen.getByText('Cap')).toBeInTheDocument();
  });

  it('adds sizes/srcset only when both supplied', () => {
    render(<Images src="x.jpg" alt="a" sizes="(max) 100vw" srcset="x1.jpg 600w, x2.jpg 1200w" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('sizes');
    expect(img).toHaveAttribute('srcset');
  });
});
