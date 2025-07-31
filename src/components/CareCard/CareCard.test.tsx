import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CareCard } from './CareCard';

describe('CareCard Component', () => {
  it('renders a non-urgent care card', () => {
    render(
      <CareCard 
        type="non-urgent"
        heading="Speak to a GP if:"
        description="You have symptoms that are concerning you but are not urgent"
        data-testid="care-card"
      />
    );

    const careCard = screen.getByTestId('care-card');
    expect(careCard).toBeInTheDocument();
    expect(careCard).toHaveClass('nhsuk-care-card--non-urgent');
    
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    expect(screen.getByText('Non-urgent advice:')).toHaveClass('nhsuk-u-visually-hidden');
    expect(screen.getByText('Speak to a GP if:')).toBeInTheDocument();
    expect(screen.getByText('You have symptoms that are concerning you but are not urgent')).toBeInTheDocument();
  });

  it('renders an urgent care card', () => {
    render(
      <CareCard 
        type="urgent"
        heading="Ask for an urgent GP appointment if:"
        description="Your symptoms are severe and need prompt medical attention"
        data-testid="care-card"
      />
    );

    const careCard = screen.getByTestId('care-card');
    expect(careCard).toHaveClass('nhsuk-care-card--urgent');
    
    expect(screen.getByText('Urgent advice:')).toHaveClass('nhsuk-u-visually-hidden');
    expect(screen.getByText('Ask for an urgent GP appointment if:')).toBeInTheDocument();
  });

  it('renders an emergency care card', () => {
    render(
      <CareCard 
        type="emergency"
        heading="Call 999 if:"
        description="Someone's life is at risk and they need emergency medical treatment"
        data-testid="care-card"
      />
    );

    const careCard = screen.getByTestId('care-card');
    expect(careCard).toHaveClass('nhsuk-care-card--emergency');
    
    expect(screen.getByText('Immediate action required:')).toHaveClass('nhsuk-u-visually-hidden');
    expect(screen.getByText('Call 999 if:')).toBeInTheDocument();
  });

  it('renders with custom heading level', () => {
    render(
      <CareCard 
        type="non-urgent"
        heading="Test Care Card"
        headingLevel={2}
        data-testid="care-card"
      />
    );

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Test Care Card');
  });

  it('renders with custom HTML content', () => {
    const customDescription = '<p>Custom <strong>HTML</strong> content</p>';
    
    render(
      <CareCard 
        type="urgent"
        heading="Care Card with HTML"
        descriptionHtml={customDescription}
        data-testid="care-card"
      />
    );

    expect(screen.getByText(/Custom/)).toBeInTheDocument();
    expect(screen.getByText('HTML')).toBeInTheDocument();
    expect(screen.getByText(/content/)).toBeInTheDocument();
  });

  it('renders with children content', () => {
    render(
      <CareCard 
        type="emergency"
        heading="Care Card with Children"
        data-testid="care-card"
      >
        <p>Custom child content</p>
        <ul>
          <li>Emergency symptom 1</li>
          <li>Emergency symptom 2</li>
        </ul>
      </CareCard>
    );

    expect(screen.getByText('Custom child content')).toBeInTheDocument();
    expect(screen.getByText('Emergency symptom 1')).toBeInTheDocument();
    expect(screen.getByText('Emergency symptom 2')).toBeInTheDocument();
  });

  it('applies custom CSS classes', () => {
    render(
      <CareCard 
        type="non-urgent"
        heading="Custom Class Care Card"
        className="custom-care-card-class"
        headingClasses="custom-heading-class"
        data-testid="care-card"
      />
    );

    const careCard = screen.getByTestId('care-card');
    expect(careCard).toHaveClass('custom-care-card-class');
    
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('custom-heading-class');
  });

  it('supports accessibility attributes', () => {
    render(
      <CareCard 
        type="urgent"
        heading="Accessible Care Card"
        aria-label="Accessible care card label"
        aria-describedby="description-id"
        data-testid="care-card"
      />
    );

    const careCard = screen.getByTestId('care-card');
    expect(careCard).toHaveAttribute('aria-label', 'Accessible care card label');
    expect(careCard).toHaveAttribute('aria-describedby', 'description-id');
  });

  it('renders care card arrow', () => {
    render(
      <CareCard 
        type="non-urgent"
        heading="Care Card with Arrow"
        data-testid="care-card"
      />
    );

    const careCard = screen.getByTestId('care-card');
    expect(careCard.querySelector('.nhsuk-care-card__arrow')).toBeInTheDocument();
  });

  it('renders heading container and content sections', () => {
    render(
      <CareCard 
        type="urgent"
        heading="Structured Care Card"
        description="Test description"
        data-testid="care-card"
      />
    );

    const careCard = screen.getByTestId('care-card');
    expect(careCard.querySelector('.nhsuk-care-card__heading-container')).toBeInTheDocument();
    expect(careCard.querySelector('.nhsuk-care-card__content')).toBeInTheDocument();
  });

  it('uses default heading level when not specified', () => {
    render(
      <CareCard 
        type="non-urgent"
        heading="Default Heading Level"
        data-testid="care-card"
      />
    );

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  });

  it('renders text with correct CSS class', () => {
    render(
      <CareCard 
        type="emergency"
        heading="Text Class Test"
        description="Test description text"
        data-testid="care-card"
      />
    );

    const textElement = screen.getByText('Test description text');
    expect(textElement).toHaveClass('nhsuk-care-card__text');
  });
});
