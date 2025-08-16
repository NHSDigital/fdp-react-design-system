import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderSSR as render } from '../../test-utils/renderSSR';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders without crashing', () => {
    const { getByRole, getByText, queryByText, getByTestId, getAllByRole, container } = render(<Hero />);
    const hero = getByRole('banner', { hidden: true });
    expect(hero).toBeTruthy();
  });

  it('renders with heading', () => {
    const headingText = 'Welcome to NHS Digital';
    const { getByRole, getByText, queryByText, getByTestId, getAllByRole, container } = render(<Hero heading={headingText} />);
    
    const heading = getByRole('heading', { level: 1 });
    expect(heading).toBeTruthy();
    expect(heading?.textContent?.includes(headingText)).toBeTruthy();
    expect(heading?.className?.includes('nhsuk-hero__heading')).toBeTruthy();
  });

  it('renders with different heading levels', () => {
    const headingText = 'Test Heading';
    const { getByRole, getByText, queryByText, getByTestId, getAllByRole, container } = render(<Hero heading={headingText} headingLevel={2} />);
    
    const heading = getByRole('heading', { level: 2 });
    expect(heading).toBeTruthy();
    expect(heading?.textContent?.includes(headingText)).toBeTruthy();
  });

  it('renders with text content', () => {
    const textContent = 'This is hero text content';
    const { getByRole, getByText, queryByText, getByTestId, getAllByRole, container } = render(<Hero text={textContent} />);
    
    expect(getByText(textContent)).toBeTruthy();
    expect(getByText(textContent)?.className?.includes('nhsuk-body-l')).toBeTruthy();
  });

  it('renders with HTML content', () => {
    const htmlContent = '<p>HTML <strong>content</strong></p>';
    const { getByRole, getByText, queryByText, getByTestId, getAllByRole, container } = render(<Hero html={htmlContent} />);
    
    const strongElement = getByText('content');
    expect(strongElement.tagName).toBe('STRONG');
  });

  it('renders with children', () => {
    const childContent = 'Child content';
    const { getByRole, getByText, queryByText, getByTestId, getAllByRole, container } = render(
      <Hero>
        <p>{childContent}</p>
      </Hero>
    );
    
    expect(getByText(childContent)).toBeTruthy();
  });

  it('renders with background image', () => {
    const imageURL = 'https://example.com/hero-image.jpg';
    const { getByRole, getByText, queryByText, getByTestId, getAllByRole, container } = render(<Hero imageURL={imageURL} heading="Test Heading" />);
    
    const hero = getByRole('banner', { hidden: true });
    expect(hero).toHaveStyle(`background-image: url('${imageURL}')`);
    expect(hero?.className?.includes('nhsuk-hero--image')).toBeTruthy();
    expect(hero?.className?.includes('nhsuk-hero--image-description')).toBeTruthy();
  });

  it('renders with background image but no heading', () => {
    const imageURL = 'https://example.com/hero-image.jpg';
    const { getByRole, getByText, queryByText, getByTestId, getAllByRole, container } = render(<Hero imageURL={imageURL} />);
    
    const hero = getByRole('banner', { hidden: true });
    expect(hero?.className?.includes('nhsuk-hero--image')).toBeTruthy();
    expect(hero?.className?.includes('nhsuk-hero--image-description')).toBeFalsy();
  });

  it('applies custom classes correctly', () => {
    const customClasses = 'custom-hero-class';
    const customContainerClasses = 'custom-container-class';
    const customHeadingClasses = 'custom-heading-class';
    
    const { getByRole, getByText, queryByText, getByTestId, getAllByRole, container } = render(
      <Hero 
        heading="Test Heading"
        classes={customClasses}
        containerClasses={customContainerClasses}
        headingClasses={customHeadingClasses}
      />
    );
    
    const hero = getByRole('banner', { hidden: true });
    expect(hero).toHaveClass(customClasses);
    
    const heading = getByRole('heading');
    expect(heading).toHaveClass(customHeadingClasses);
    expect(heading?.className?.includes('nhsuk-hero__heading')).toBeTruthy();
  });

  it('renders with border class when no image', () => {
    const { container } = render(<Hero heading="Test Heading" />);
    const heroContainer = container.querySelector('.nhsuk-width-container');
    expect(heroContainer?.className).toContain('nhsuk-hero--border');
  });

  it('does not render border class with image', () => {
    const { container } = render(<Hero heading="Test Heading" imageURL="test.jpg" />);
    const heroContainer = container.querySelector('.nhsuk-width-container');
    expect(heroContainer?.className).not.toContain('nhsuk-hero--border');
  });

  it('forwards additional attributes', () => {
    const { getByTestId } = render(<Hero data-testid="hero-component" aria-label="Hero section" />);
    expect(getByTestId('hero-component')).toHaveAttribute('aria-label', 'Hero section');
  });

  it('renders arrow element with image and content', () => {
    const { container } = render(<Hero imageURL="test.jpg" heading="Test" />);
    const arrow = container.querySelector('.nhsuk-hero__arrow');
    expect(arrow).toBeTruthy();
    expect(arrow).toHaveAttribute('aria-hidden', 'true');
  });

  it('prioritizes children over text and html', () => {
    const childContent = 'Child content';
    const textContent = 'Text content';
    const htmlContent = '<p>HTML content</p>';
    
  const { getByText, queryByText } = render(
      <Hero text={textContent} html={htmlContent}>
        <p>{childContent}</p>
      </Hero>
    );
    
    expect(getByText(childContent)).toBeTruthy();
    expect(queryByText(textContent)).not.toBeTruthy();
    expect(queryByText('HTML content')).not.toBeTruthy();
  });

  it('adds margin-bottom-0 class to heading when no content', () => {
    const { getByRole } = render(<Hero heading="Lone Heading" />);
    expect(getByRole('heading')?.className?.includes('nhsuk-u-margin-bottom-0')).toBeTruthy();
  });

  it('does not add margin-bottom-0 class to heading when content present', () => {
    const { getByRole } = render(<Hero heading="Heading with content" text="Some text" />);
    expect(getByRole('heading')?.className?.includes('nhsuk-u-margin-bottom-0')).toBeFalsy();
  });

  it('handles all heading levels correctly', () => {
    const headingLevels = [1, 2, 3, 4, 5, 6];
    
    headingLevels.forEach(level => {
      const { getByRole } = render(<Hero heading="Test" headingLevel={level as 1 | 2 | 3 | 4 | 5 | 6} />);
      const heading = getByRole('heading', { level });
      expect(heading).toBeTruthy();
    });
  });

  it('defaults to h1 for invalid heading level', () => {
    // @ts-expect-error intentional invalid level to test fallback
    const { getByRole } = render(<Hero heading="Test" headingLevel={7} />);
    expect(getByRole('heading', { level: 1 })).toBeTruthy();
  });

  it('does not render content sections when no content provided', () => {
    render(<Hero />);
    expect(document.querySelector('.nhsuk-hero__wrapper')).not.toBeTruthy();
    expect(document.querySelector('.nhsuk-hero-content')).not.toBeTruthy();
  });
});
