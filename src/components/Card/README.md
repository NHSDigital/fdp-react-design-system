# Card Component

A versatile card component that follows NHS design guidelines for displaying content and actions.

## Features

- **Multiple Variants**: Default, feature, clickable, secondary, and primary cards
- **Accessibility**: Full keyboard navigation, screen reader support, and semantic HTML
- **Responsive Design**: Adapts to different screen sizes using design tokens
- **Flexible Content**: Support for images, custom HTML, and React children
- **Card Groups**: Organized layout for multiple cards with equal heights

**Note**: For medical guidance cards (care cards), use the separate `CareCard` component instead.

## Basic Usage

```tsx
import { Card } from '@nhs-fdp/components';

// Basic card
<Card 
  heading="Introduction to care and support"
  description="A quick guide for people who have care and support needs"
/>

// Clickable card
<Card 
  variant="clickable"
  heading="Find services near you"
  description="Search for NHS services in your area"
  href="/services"
/>

// For medical guidance, use the CareCard component instead:
// import { CareCard } from '@nhs-fdp/components';
// <CareCard type="urgent" heading="Ask for an urgent GP appointment if:" />
```

## Card Groups

Use `CardGroup` and `CardGroupItem` to display multiple cards in a flexible layout:

```tsx
import { Card, CardGroup, CardGroupItem } from '@nhs-fdp/components';

<CardGroup>
  <CardGroupItem>
    <Card heading="Card 1" description="First card" />
  </CardGroupItem>
  <CardGroupItem>
    <Card heading="Card 2" description="Second card" />
  </CardGroupItem>
  <CardGroupItem>
    <Card heading="Card 3" description="Third card" />
  </CardGroupItem>
</CardGroup>
```

## Variants

### Default Card
Standard white card with border for general content.

### Feature Card
Card with a colored header that stands out from regular content.

### Clickable Card
Enhanced card with hover states and invisible overlay for full-card clicking.

### Primary Card
Card with an arrow icon, typically used for important actions.

### Secondary Card
Minimal card with only a bottom border, for subtle content separation.

## Accessibility

The Card component includes comprehensive accessibility features:

- **Semantic HTML**: Proper heading levels and ARIA attributes
- **Screen Reader Support**: Descriptive content and proper labeling
- **Keyboard Navigation**: Full keyboard support for interactive elements
- **Focus Management**: Clear focus indicators and proper tab order
- **Color Contrast**: Meets WCAG 2.1 AA standards for all text

## Design Tokens

The component uses NHS FDP design tokens for:

- **Colors**: Background, border, text, and focus colors
- **Typography**: Font families, sizes, weights, and line heights
- **Spacing**: Margins, padding, and layout spacing
- **Borders**: Border widths, styles, and radii
- **Shadows**: Focus and interactive state shadows

## Props

### Card Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `CardVariant` | `'default'` | Visual variant of the card |
| `heading` | `string` | - | Card heading text |
| `headingLevel` | `HeadingLevel` | `2` | Semantic heading level (1-6) |
| `description` | `string` | - | Card description text |
| `href` | `string` | - | URL for clickable cards |
| `imgURL` | `string` | - | Image URL for card with image |
| `imgAlt` | `string` | - | Alt text for card image |
| `children` | `ReactNode` | - | Custom card content |
| `className` | `string` | - | Additional CSS classes |

### CardGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | CardGroupItem components |
| `className` | `string` | - | Additional CSS classes |

### CardGroupItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Card component |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Card with Image

```tsx
<Card 
  heading="Health Information"
  description="Essential health guidance and resources"
  imgURL="/health-image.jpg"
  imgAlt="Health information illustration"
/>
```

### Card with Custom Content

```tsx
<Card heading="Custom Content Card">
  <p>This card contains custom React content.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  <button type="button">Custom Action</button>
</Card>
```

### Responsive Card Group

```tsx
<CardGroup>
  <CardGroupItem>
    <Card 
      variant="clickable"
      heading="Mobile-friendly"
      description="Cards stack on mobile devices"
      href="/mobile"
    />
  </CardGroupItem>
  <CardGroupItem>
    <Card 
      variant="clickable"
      heading="Equal Heights"
      description="Cards maintain equal height on desktop"
      href="/desktop"
    />
  </CardGroupItem>
</CardGroup>
```

## Best Practices

1. **Use Appropriate Variants**: Choose the right card variant for your content type
2. **Semantic Headings**: Use proper heading levels for document structure
3. **Medical Guidance**: Use the separate CareCard component for medical guidance
4. **Image Alt Text**: Always provide descriptive alt text for images
5. **Clickable Areas**: Ensure clickable cards have clear visual feedback
6. **Content Length**: Keep descriptions concise and scannable
7. **Group Organization**: Use card groups for related content sets

## Migration from NHS UK Frontend

This component replaces the NHS UK Frontend card component with:

- **Type Safety**: Full TypeScript support with comprehensive prop types
- **Modern React**: Uses React 18+ patterns and hooks
- **Design Tokens**: Consistent styling through design system tokens
- **Enhanced Accessibility**: Improved ARIA support and keyboard navigation
- **Better Testing**: Comprehensive test coverage with React Testing Library
