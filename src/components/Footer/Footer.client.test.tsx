import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

// Client tests: ensure attributes & target rel logic applied

describe('Footer (client)', () => {
  it('applies custom classes and attributes', () => {
    const { container } = render(<Footer className="x-footer" containerClasses="inner" attributes={{ 'data-id': 'ft' }} />);
    expect(container.querySelector('.nhsuk-footer')).toHaveClass('x-footer');
    expect(container.querySelector('.nhsuk-width-container')).toHaveClass('inner');
    expect(screen.getByRole('contentinfo')).toHaveAttribute('data-id', 'ft');
  });

  it('marks external links with target and rel', () => {
    render(<Footer links={[{ URL: 'https://example.com', label: 'External', newWindow: true }]} />);
    const link = screen.getByRole('link', { name: 'External' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
