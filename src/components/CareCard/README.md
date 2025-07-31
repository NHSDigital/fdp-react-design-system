# CareCard Component

A specialized component for medical guidance that helps users identify and understand the care they need, who to contact and how quickly.

## Features

- **Three Urgency Levels**: Non-urgent (blue), urgent (red), emergency (red with black content)
- **Accessibility**: Full screen reader support with hidden urgency text
- **Responsive Design**: Mobile-first design using NHS design tokens
- **Clear Visual Hierarchy**: Colored headers with arrow indicators
- **Semantic HTML**: Proper heading levels and ARIA attributes

## When to Use

Use care cards when you need to:
- Tell users to take action to get medical advice or help
- Help users understand the level of urgency for their symptoms
- Provide clear guidance on who to contact and how quickly

## When Not to Use

Do not use care cards for:
- Information that's not about helping users understand immediate care needs
- Question pages in transactional journeys
- General warnings (use warning callout instead)
- Signposting to digital services (use action link instead)
- Brief content summaries (use regular card instead)

## Basic Usage

```tsx
import { CareCard } from '@nhs-fdp/components';

// Non-urgent care card
<CareCard 
  type="non-urgent"
  heading="Speak to a GP if:"
  description="You have symptoms that are concerning you but are not urgent"
/>

// Urgent care card
<CareCard 
  type="urgent"
  heading="Ask for an urgent GP appointment if:"
  description="Your symptoms are severe and need prompt medical attention"
/>

// Emergency care card
<CareCard 
  type="emergency"
  heading="Call 999 if:"
  description="Someone's life is at risk and they need emergency medical treatment"
/>
```

## Care Card Types

### Non-urgent (Blue)
Use for general medical advice that doesn't require immediate attention:
- GP consultations
- Pharmacy advice
- Routine medical concerns

### Urgent (Red)
Use for symptoms that need prompt medical attention within hours:
- Urgent GP appointments
- NHS 111 calls
- Walk-in center visits

### Emergency (Red with Black Content)
Use only for life-threatening situations requiring immediate emergency services:
- 999 calls
- A&E visits
- Immediate medical emergencies

## Content Guidelines

### Use Clear, Action-Oriented Headings
- "Speak to a GP if:"
- "Call 111 if:"
- "Call 999 if:"

### Be Specific with Symptoms
Instead of: "Contact your GP if this happens"
Use: "Speak to a GP if you have a persistent cough for more than 3 weeks"

### Keep It Self-Contained
Include all necessary information within the card. Don't rely on external context.

### Use the "If" Format
Structure headings as conditional statements followed by specific criteria.

## Advanced Usage

### With Custom Content

```tsx
<CareCard 
  type="urgent"
  heading="Ask for an urgent GP appointment if:"
>
  <ul>
    <li>you have severe pain that's getting worse</li>
    <li>you have a high temperature that won't come down</li>
    <li>you're finding it difficult to breathe</li>
  </ul>
  <p>Tell them it's urgent when you call.</p>
</CareCard>
```

### Multiple Care Cards

```tsx
<div>
  <h2>When to get help for chest pain</h2>
  
  <CareCard
    type="emergency"
    heading="Call 999 if:"
  >
    <ul>
      <li>you have sudden, severe chest pain</li>
      <li>you have chest pain that does not go away</li>
    </ul>
  </CareCard>
  
  <CareCard
    type="urgent"
    heading="Call 111 if:"
  >
    <ul>
      <li>you have chest pain that comes and goes</li>
      <li>you're worried about your chest pain</li>
    </ul>
  </CareCard>
</div>
```

### Custom Heading Levels

```tsx
<CareCard 
  type="non-urgent"
  heading="Speak to a pharmacist if:"
  headingLevel={2}
  description="You need advice about over-the-counter treatments"
/>
```

## Accessibility

The CareCard component includes comprehensive accessibility features:

- **Screen Reader Support**: Hidden text announces urgency level ("Non-urgent advice:", "Urgent advice:", "Immediate action required:")
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard support for interactive elements
- **Color Contrast**: Meets WCAG 2.1 AA standards
- **Focus Management**: Clear focus indicators

### Hidden Text Example
```html
<h3>
  <span class="nhsuk-u-visually-hidden">Urgent advice: </span>
  Ask for an urgent GP appointment if:
</h3>
```

## Design Tokens

The component uses NHS FDP design tokens for:

- **Colors**: Background, border, and text colors for each urgency level
- **Typography**: Font families, sizes, weights, and line heights
- **Spacing**: Margins, padding, and layout spacing
- **Focus States**: Outline colors and widths

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `CareCardType` | - | Urgency level (non-urgent, urgent, emergency) **Required** |
| `heading` | `string` | - | Card heading text **Required** |
| `headingLevel` | `HeadingLevel` | `3` | Semantic heading level (1-6) |
| `description` | `string` | - | Card description text |
| `descriptionHtml` | `string` | - | Custom description HTML |
| `children` | `ReactNode` | - | Custom card content |
| `className` | `string` | - | Additional CSS classes |
| `headingClasses` | `string` | - | Additional heading CSS classes |

## Examples

### Pharmacy Advice

```tsx
<CareCard 
  type="non-urgent"
  heading="Ask a pharmacist for advice if:"
  description="You need help with managing your medicines or want advice about over-the-counter treatments"
/>
```

### NHS 111

```tsx
<CareCard 
  type="urgent"
  heading="Call 111 if:"
  description="You need medical help fast but it's not a 999 emergency"
/>
```

### Mental Health Emergency

```tsx
<CareCard 
  type="emergency"
  heading="Call 999 or go to A&E if:"
>
  <ul>
    <li>you think you might seriously hurt yourself or someone else</li>
    <li>you're having thoughts of suicide and you've made a plan</li>
  </ul>
  <p>Stay with the person until help arrives.</p>
</CareCard>
```

## Best Practices

1. **Use Appropriate Urgency Levels**: Only use emergency cards for true emergencies
2. **Be Specific**: Include exact symptoms and timeframes
3. **Keep It Simple**: Aim for 1-2 services per card
4. **Test with Users**: Ensure the urgency level matches user expectations
5. **Consider Context**: Place cards logically within content flow
6. **Avoid Overuse**: Don't use too many care cards on one page

## Migration from NHS UK Frontend

This component replaces the NHS UK Frontend care card implementation with:

- **Dedicated Component**: Separate from general cards for better semantic clarity
- **Enhanced Accessibility**: Improved screen reader support and ARIA attributes
- **Type Safety**: Full TypeScript support with comprehensive prop validation
- **Design Token Integration**: Consistent styling through design system tokens
- **Better Testing**: Comprehensive test coverage for all urgency levels
