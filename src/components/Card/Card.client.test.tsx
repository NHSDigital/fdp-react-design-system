import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card, CardGroup, CardGroupItem } from './Card';

describe('Card (client)', () => {
  it('applies custom classes', () => {
    render(<Card heading="H" className="extra" headingClasses="h-extra" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading.className).toContain('h-extra');
  });
  it('renders primary variant icon', () => {
    render(<Card variant="primary" heading="P" />);
    expect(document.querySelector('.nhsuk-icon')).toBeTruthy();
  });
  it('renders secondary variant modifiers', () => {
    render(<Card variant="secondary" heading="S" />);
    const card = document.querySelector('.nhsuk-card');
    expect(card?.className).toContain('nhsuk-card--secondary');
  });
  it('renders HTML description', () => {
    render(<Card heading="Html" descriptionHtml="<p><strong>X</strong></p>" />);
    expect(screen.getByText('X')).toBeTruthy();
  });
});

describe('CardGroup (client)', () => {
  it('applies custom class', () => {
    render(<CardGroup className="g-extra"><CardGroupItem><Card heading="A" /></CardGroupItem></CardGroup>);
    const group = document.querySelector('.nhsuk-card-group');
    expect(group?.className).toContain('g-extra');
  });
});
