import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero (client)', () => {
  it('renders heading with chosen level', () => {
    render(<Hero heading="Title" headingLevel={2} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Title');
  });

  it('prioritises children over text/html', () => {
    render(<Hero text="T" html='<p>H</p>'><p>Child</p></Hero>);
    expect(screen.getByText('Child')).toBeInTheDocument();
    expect(screen.queryByText('T')).toBeNull();
    expect(screen.queryByText('H')).toBeNull();
  });

  it('adds border class when no image present', () => {
    const { container } = render(<Hero heading="No image" />);
    const widthContainer = container.querySelector('.nhsuk-width-container');
    expect(widthContainer?.className).toContain('nhsuk-hero--border');
  });

  it('adds arrow when image present', () => {
    const { container } = render(<Hero heading="Img" imageURL="x.jpg" />);
    expect(container.querySelector('.nhsuk-hero__arrow')).toBeTruthy();
  });
});
