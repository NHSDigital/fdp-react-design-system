import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders without crashing', () => {
    render(<Hero />);
    const hero = screen.getByRole('banner', { hidden: true });
    expect(hero).toBeInTheDocument();
  });

  it('renders with heading', () => {
    const headingText = 'Welcome to NHS Digital';
    render(<Hero heading={headingText} />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(headingText);
    expect(heading).toHaveClass('nhsuk-hero__heading');
  });

  it('renders with different heading levels', () => {
    const headingText = 'Test Heading';
    render(<Hero heading={headingText} headingLevel={2} />);
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(headingText);
  });

  it('renders with text content', () => {
    const textContent = 'This is hero text content';
    render(<Hero text={textContent} />);
    
    expect(screen.getByText(textContent)).toBeInTheDocument();
    expect(screen.getByText(textContent)).toHaveClass('nhsuk-body-l');
  });

  it('renders with HTML content', () => {
    const htmlContent = '<p>HTML <strong>content</strong></p>';
    render(<Hero html={htmlContent} />);
    
    const strongElement = screen.getByText('content');
    expect(strongElement.tagName).toBe('STRONG');
  });

  it('renders with children', () => {
    const childContent = 'Child content';
    render(
      <Hero>
        <p>{childContent}</p>
      </Hero>
    );
    
    expect(screen.getByText(childContent)).toBeInTheDocument();
  });

  it('renders with background image', () => {
    const imageURL = 'https://example.com/hero-image.jpg';
    render(<Hero imageURL={imageURL} heading="Test Heading" />);
    
    const hero = screen.getByRole('banner', { hidden: true });
    expect(hero).toHaveStyle(`background-image: url('${imageURL}')`);
    expect(hero).toHaveClass('nhsuk-hero--image');
    expect(hero).toHaveClass('nhsuk-hero--image-description');
  });

  it('renders with background image but no heading', () => {
    const imageURL = 'https://example.com/hero-image.jpg';
    render(<Hero imageURL={imageURL} />);
    
    const hero = screen.getByRole('banner', { hidden: true });
    expect(hero).toHaveClass('nhsuk-hero--image');
    expect(hero).not.toHaveClass('nhsuk-hero--image-description');
  });

  it('applies custom classes correctly', () => {
    const customClasses = 'custom-hero-class';
    const customContainerClasses = 'custom-container-class';
    const customHeadingClasses = 'custom-heading-class';
    
    render(
      <Hero 
        heading="Test Heading"
        classes={customClasses}
        containerClasses={customContainerClasses}
        headingClasses={customHeadingClasses}
      />
    );
    
    const hero = screen.getByRole('banner', { hidden: true });
    expect(hero).toHaveClass(customClasses);
    
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass(customHeadingClasses);
    expect(heading).toHaveClass('nhsuk-hero__heading');
  });

  it('renders with border class when no image', () => {
    render(<Hero heading="Test Heading" />);
    
    const container = document.querySelector('.nhsuk-width-container');
    expect(container).toHaveClass('nhsuk-hero--border');
  });

  it('does not render border class with image', () => {
    render(<Hero heading="Test Heading" imageURL="test.jpg" />);
    
    const container = document.querySelector('.nhsuk-width-container');
    expect(container).not.toHaveClass('nhsuk-hero--border');
  });

  it('forwards additional attributes', () => {
    render(<Hero data-testid="hero-component" aria-label="Hero section" />);
    
    const hero = screen.getByTestId('hero-component');
    expect(hero).toHaveAttribute('aria-label', 'Hero section');
  });

  it('renders arrow element with image and content', () => {
    render(<Hero imageURL="test.jpg" heading="Test" />);
    
    const arrow = document.querySelector('.nhsuk-hero__arrow');
    expect(arrow).toBeInTheDocument();
    expect(arrow).toHaveAttribute('aria-hidden', 'true');
  });

  it('prioritizes children over text and html', () => {
    const childContent = 'Child content';
    const textContent = 'Text content';
    const htmlContent = '<p>HTML content</p>';
    
    render(
      <Hero text={textContent} html={htmlContent}>
        <p>{childContent}</p>
      </Hero>
    );
    
    expect(screen.getByText(childContent)).toBeInTheDocument();
    expect(screen.queryByText(textContent)).not.toBeInTheDocument();
    expect(screen.queryByText('HTML content')).not.toBeInTheDocument();
  });

  it('adds margin-bottom-0 class to heading when no content', () => {
    render(<Hero heading="Lone Heading" />);
    
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('nhsuk-u-margin-bottom-0');
  });

  it('does not add margin-bottom-0 class to heading when content present', () => {
    render(<Hero heading="Heading with content" text="Some text" />);
    
    const heading = screen.getByRole('heading');
    expect(heading).not.toHaveClass('nhsuk-u-margin-bottom-0');
  });

  it('handles all heading levels correctly', () => {
    const headingLevels = [1, 2, 3, 4, 5, 6];
    
    headingLevels.forEach(level => {
      const { unmount } = render(<Hero heading="Test" headingLevel={level} />);
      const heading = screen.getByRole('heading', { level });
      expect(heading).toBeInTheDocument();
      unmount();
    });
  });

  it('defaults to h1 for invalid heading level', () => {
    render(<Hero heading="Test" headingLevel={7} />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('does not render content sections when no content provided', () => {
    render(<Hero />);
    
    expect(document.querySelector('.nhsuk-hero__wrapper')).not.toBeInTheDocument();
    expect(document.querySelector('.nhsuk-hero-content')).not.toBeInTheDocument();
  });
});
