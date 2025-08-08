import { render } from '../../test-utils/ServerRenderer';
import { describe, it, expect } from 'vitest';
import { Card, CardGroup, CardGroupItem } from './Card';

describe('Card Component', () => {
  it('renders a basic card with heading and description', () => {
    const { getByRole, getByText, container } = render(
      <Card 
        heading="Test Card"
        description="This is a test card"
        data-testid="test-card"
      />
    );

    expect(container.querySelector('[data-testid="test-card"]')).toBeTruthy();
    expect(getByRole('heading', { level: 2 })!.textContent).toBe('Test Card');
    expect(getByText('This is a test card')).toBeTruthy();
  });

  it('renders with custom heading level', () => {
    const { getByRole } = render(
      <Card 
        heading="Test Card"
        headingLevel={3}
        data-testid="test-card"
      />
    );

    expect(getByRole('heading', { level: 3 })!.textContent).toBe('Test Card');
  });

  it('renders clickable card with link', () => {
    const { getByTestId, getByRole } = render(
      <Card 
        variant="clickable"
        heading="Clickable Card"
        href="/test-link"
        data-testid="test-card"
      />
    );

    const card = getByTestId('test-card');
    expect(card!.className.includes('nhsuk-card--clickable')).toBe(true);
    
    const link = getByRole('link');
    expect(link!.getAttribute('href')).toBe('/test-link');
    expect(link!.textContent).toBe('Clickable Card');
  });

  it('renders feature card variant', () => {
    const { getByTestId, getByRole } = render(
      <Card 
        variant="feature"
        heading="Feature Card"
        data-testid="test-card"
      />
    );

    const card = getByTestId('test-card');
    expect(card!.className.includes('nhsuk-card--feature')).toBe(true);
    
    const heading = getByRole('heading');
    expect(heading!.className.includes('nhsuk-card__heading--feature')).toBe(true);
  });

  it('renders card with image', () => {
    const { container } = render(
      <Card 
        heading="Card with Image"
        imgURL="/test-image.jpg"
        imgAlt="Test image"
        data-testid="test-card"
      />
    );

    const image = container.querySelector('img');
    expect(image!.getAttribute('src')).toBe('/test-image.jpg');
    expect(image!.getAttribute('alt')).toBe('Test image');
    expect(image!.className.includes('nhsuk-card__img')).toBe(true);
  });

  it('renders primary card with icon', () => {
    const { getByTestId } = render(
      <Card 
        variant="primary"
        heading="Primary Card"
        data-testid="test-card"
      />
    );

    const card = getByTestId('test-card');
    expect(card!.querySelector('.nhsuk-card__content--primary')).toBeTruthy();
    expect(card!.querySelector('.nhsuk-icon')).toBeTruthy();
  });

  it('renders secondary card variant', () => {
    const { getByTestId } = render(
      <Card 
        variant="secondary"
        heading="Secondary Card"
        data-testid="test-card"
      />
    );

    const card = getByTestId('test-card');
    expect(card!.className.includes('nhsuk-card--secondary')).toBe(true);
    expect(card!.querySelector('.nhsuk-card__content--secondary')).toBeTruthy();
  });

  it('renders with custom HTML content', () => {
    const customDescription = '<p>Custom <strong>HTML</strong> content</p>';
    
    const { getByText } = render(
      <Card 
        heading="Card with HTML"
        descriptionHtml={customDescription}
        data-testid="test-card"
      />
    );

    expect(getByText('Custom')).toBeTruthy();
    expect(getByText('HTML')).toBeTruthy();
    expect(getByText('content')).toBeTruthy();
  });

  it('renders with children content', () => {
    const { getByText, getByRole } = render(
      <Card 
        heading="Card with Children"
        data-testid="test-card"
      >
        <p>Custom child content</p>
        <button type="button">Action Button</button>
      </Card>
    );

    expect(getByText('Custom child content')).toBeTruthy();
    expect(getByText('Action Button')).toBeTruthy();
  });

  it('applies custom CSS classes', () => {
    const { getByTestId, getByRole } = render(
      <Card 
        heading="Custom Class Card"
        className="custom-card-class"
        headingClasses="custom-heading-class"
        data-testid="test-card"
      />
    );

    const card = getByTestId('test-card');
    expect(card!.className.includes('custom-card-class')).toBe(true);
    
    const heading = getByRole('heading');
    expect(heading!.className.includes('custom-heading-class')).toBe(true);
  });

  it('supports accessibility attributes', () => {
    const { getByTestId } = render(
      <Card 
        heading="Accessible Card"
        aria-label="Accessible card label"
        aria-describedby="description-id"
        data-testid="test-card"
      />
    );

    const card = getByTestId('test-card');
    expect(card!.getAttribute('aria-label')).toBe('Accessible card label');
    expect(card!.getAttribute('aria-describedby')).toBe('description-id');
  });
});

describe('CardGroup Component', () => {
  it('renders card group with multiple cards', () => {
    const { getByTestId, getByText } = render(
      <CardGroup data-testid="card-group">
        <CardGroupItem>
          <Card heading="Card 1" />
        </CardGroupItem>
        <CardGroupItem>
          <Card heading="Card 2" />
        </CardGroupItem>
      </CardGroup>
    );

    const cardGroup = getByTestId('card-group');
    expect(cardGroup!.className.includes('nhsuk-card-group')).toBe(true);
    expect(cardGroup!.tagName).toBe('UL');
    
    expect(getByText('Card 1')).toBeTruthy();
    expect(getByText('Card 2')).toBeTruthy();
  });

  it('applies custom CSS classes to card group', () => {
    const { getByTestId } = render(
      <CardGroup className="custom-group-class" data-testid="card-group">
        <CardGroupItem>
          <Card heading="Card 1" />
        </CardGroupItem>
      </CardGroup>
    );

    const cardGroup = getByTestId('card-group');
    expect(cardGroup!.className.includes('custom-group-class')).toBe(true);
  });
});

describe('CardGroupItem Component', () => {
  it('renders card group item with correct markup', () => {
    const { getByTestId } = render(
      <CardGroup>
        <CardGroupItem data-testid="card-item">
          <Card heading="Test Card" />
        </CardGroupItem>
      </CardGroup>
    );

    const cardItem = getByTestId('card-item');
    expect(cardItem!.className.includes('nhsuk-card-group__item')).toBe(true);
    expect(cardItem!.tagName).toBe('LI');
  });

  it('applies custom CSS classes to card group item', () => {
    const { getByTestId } = render(
      <CardGroup>
        <CardGroupItem className="custom-item-class" data-testid="card-item">
          <Card heading="Test Card" />
        </CardGroupItem>
      </CardGroup>
    );

    const cardItem = getByTestId('card-item');
    expect(cardItem!.className.includes('custom-item-class')).toBe(true);
  });
});
