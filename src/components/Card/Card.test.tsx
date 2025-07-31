import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card, CardGroup, CardGroupItem } from './Card';

describe('Card Component', () => {
  it('renders a basic card with heading and description', () => {
    render(
      <Card 
        heading="Test Card"
        description="This is a test card"
        data-testid="test-card"
      />
    );

    expect(screen.getByTestId('test-card')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Test Card');
    expect(screen.getByText('This is a test card')).toBeInTheDocument();
  });

  it('renders with custom heading level', () => {
    render(
      <Card 
        heading="Test Card"
        headingLevel={3}
        data-testid="test-card"
      />
    );

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Test Card');
  });

  it('renders clickable card with link', () => {
    render(
      <Card 
        variant="clickable"
        heading="Clickable Card"
        href="/test-link"
        data-testid="test-card"
      />
    );

    const card = screen.getByTestId('test-card');
    expect(card).toHaveClass('nhsuk-card--clickable');
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test-link');
    expect(link).toHaveTextContent('Clickable Card');
  });

  it('renders feature card variant', () => {
    render(
      <Card 
        variant="feature"
        heading="Feature Card"
        data-testid="test-card"
      />
    );

    const card = screen.getByTestId('test-card');
    expect(card).toHaveClass('nhsuk-card--feature');
    
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('nhsuk-card__heading--feature');
  });

  it('renders card with image', () => {
    render(
      <Card 
        heading="Card with Image"
        imgURL="/test-image.jpg"
        imgAlt="Test image"
        data-testid="test-card"
      />
    );

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/test-image.jpg');
    expect(image).toHaveAttribute('alt', 'Test image');
    expect(image).toHaveClass('nhsuk-card__img');
  });

  it('renders primary card with icon', () => {
    render(
      <Card 
        variant="primary"
        heading="Primary Card"
        data-testid="test-card"
      />
    );

    const card = screen.getByTestId('test-card');
    expect(card.querySelector('.nhsuk-card__content--primary')).toBeInTheDocument();
    expect(card.querySelector('.nhsuk-icon')).toBeInTheDocument();
  });

  it('renders secondary card variant', () => {
    render(
      <Card 
        variant="secondary"
        heading="Secondary Card"
        data-testid="test-card"
      />
    );

    const card = screen.getByTestId('test-card');
    expect(card).toHaveClass('nhsuk-card--secondary');
    expect(card.querySelector('.nhsuk-card__content--secondary')).toBeInTheDocument();
  });

  it('renders with custom HTML content', () => {
    const customDescription = '<p>Custom <strong>HTML</strong> content</p>';
    
    render(
      <Card 
        heading="Card with HTML"
        descriptionHtml={customDescription}
        data-testid="test-card"
      />
    );

    expect(screen.getByText(/Custom/)).toBeInTheDocument();
    expect(screen.getByText('HTML')).toBeInTheDocument();
    expect(screen.getByText(/content/)).toBeInTheDocument();
  });

  it('renders with children content', () => {
    render(
      <Card 
        heading="Card with Children"
        data-testid="test-card"
      >
        <p>Custom child content</p>
        <button type="button">Action Button</button>
      </Card>
    );

    expect(screen.getByText('Custom child content')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Action Button' })).toBeInTheDocument();
  });

  it('applies custom CSS classes', () => {
    render(
      <Card 
        heading="Custom Class Card"
        className="custom-card-class"
        headingClasses="custom-heading-class"
        data-testid="test-card"
      />
    );

    const card = screen.getByTestId('test-card');
    expect(card).toHaveClass('custom-card-class');
    
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('custom-heading-class');
  });

  it('supports accessibility attributes', () => {
    render(
      <Card 
        heading="Accessible Card"
        aria-label="Accessible card label"
        aria-describedby="description-id"
        data-testid="test-card"
      />
    );

    const card = screen.getByTestId('test-card');
    expect(card).toHaveAttribute('aria-label', 'Accessible card label');
    expect(card).toHaveAttribute('aria-describedby', 'description-id');
  });
});

describe('CardGroup Component', () => {
  it('renders card group with multiple cards', () => {
    render(
      <CardGroup data-testid="card-group">
        <CardGroupItem>
          <Card heading="Card 1" />
        </CardGroupItem>
        <CardGroupItem>
          <Card heading="Card 2" />
        </CardGroupItem>
      </CardGroup>
    );

    const cardGroup = screen.getByTestId('card-group');
    expect(cardGroup).toHaveClass('nhsuk-card-group');
    expect(cardGroup.tagName).toBe('UL');
    
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
  });

  it('applies custom CSS classes to card group', () => {
    render(
      <CardGroup className="custom-group-class" data-testid="card-group">
        <CardGroupItem>
          <Card heading="Card 1" />
        </CardGroupItem>
      </CardGroup>
    );

    const cardGroup = screen.getByTestId('card-group');
    expect(cardGroup).toHaveClass('custom-group-class');
  });
});

describe('CardGroupItem Component', () => {
  it('renders card group item with correct markup', () => {
    render(
      <CardGroup>
        <CardGroupItem data-testid="card-item">
          <Card heading="Test Card" />
        </CardGroupItem>
      </CardGroup>
    );

    const cardItem = screen.getByTestId('card-item');
    expect(cardItem).toHaveClass('nhsuk-card-group__item');
    expect(cardItem.tagName).toBe('LI');
  });

  it('applies custom CSS classes to card group item', () => {
    render(
      <CardGroup>
        <CardGroupItem className="custom-item-class" data-testid="card-item">
          <Card heading="Test Card" />
        </CardGroupItem>
      </CardGroup>
    );

    const cardItem = screen.getByTestId('card-item');
    expect(cardItem).toHaveClass('custom-item-class');
  });
});
