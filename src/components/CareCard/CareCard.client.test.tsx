import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CareCard } from './CareCard';

describe('CareCard (client)', () => {
  it('applies custom classes', () => {
    render(<CareCard type="non-urgent" heading="H" className="extra" headingClasses="h-extra" />);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading.className).toContain('h-extra');
  });
  it('renders children', () => {
    render(<CareCard type="urgent" heading="H"><p>Child</p></CareCard>);
    expect(screen.getByText('Child')).toBeTruthy();
  });
  it('supports accessibility attrs', () => {
    render(<CareCard type="non-urgent" heading="A" aria-label="Label" aria-describedby="d" />);
    const card = screen.getByLabelText('Label');
    expect(card.getAttribute('aria-describedby')).toBe('d');
  });
});
