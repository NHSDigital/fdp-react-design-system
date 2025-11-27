# WarningCallout Component

A component for displaying important warnings and alerts that users need to be aware of, particularly when there could be legal, safety, or significant consequences.

## Features

- **Clear Visual Hierarchy**: Yellow background and border to grab attention
- **Accessibility First**: Screen reader support with automatic "Important:" prefix
- **Flexible Content**: Supports text, HTML, or React children
- **Semantic HTML**: Proper heading levels for document structure
- **NHS Compliant**: Follows NHS design system guidelines

## When to Use

Use the warning callout component when you need to warn users about:

- **Legal consequences** of an action or lack of action
- **Important deadlines** that must not be missed
- **Critical steps** in a process
- **Health and safety** information
- **Financial penalties** or implications
- **Data protection** notices
- **Eligibility requirements** that could affect applications

## When Not to Use

Do not use this component for:

- **General advice** or information (use Inset Text instead)
- **Error messages** in forms (use Error Message components)
- **Positive information** or good news (use Panel or Card)
- **Standard help text** (use Hint component)
- **Simple notifications** (use regular content)

## Basic Usage

```tsx
import { WarningCallout } from '@nhs-fdp/design-system';

// Simple warning with text
<WarningCallout 
  heading="Check your details are correct"
  text="If your details are wrong, you may not get the help you need."
/>

// Warning with HTML content
<WarningCallout 
  heading="Legal consequences"
  html="<p>You may face a fine of up to <strong>£1,000</strong>.</p>"
/>

// Warning with React children
<WarningCallout heading="Upload required documents">
  <p>You must provide one of the following:</p>
  <ul>
    <li>Passport</li>
    <li>Driving licence</li>
    <li>National insurance card</li>
  </ul>
  <p><a href="/upload">Upload documents</a></p>
</WarningCallout>
```

## Advanced Usage

### Custom Heading Levels

Control the heading level for proper document structure:

```tsx
<h1>Application Form</h1>

<WarningCallout 
  heading="Eligibility requirements"
  headingLevel={2}
  text="Check you meet all criteria before applying."
/>

<h2>Personal Details</h2>

<WarningCallout 
  heading="Provide accurate information"
  headingLevel={3}
  text="False information is a criminal offense."
/>
```

### Heading Text with "Important"

When your heading already contains "Important", the component automatically adjusts:

```tsx
// This will show: "Important deadline approaching:"
<WarningCallout 
  heading="Important deadline approaching"
  text="Submit by 31 March 2024."
/>

// This will show: "Important: Check your details"
<WarningCallout 
  heading="Check your details"
  text="Errors may affect your application."
/>
```

### Complex Content

For complex layouts, use HTML or React children:

```tsx
<WarningCallout heading="Data protection notice">
  <p>Your information will be:</p>
  <ul>
    <li>Stored securely</li>
    <li>Used only for this application</li>
    <li>Deleted after 7 years</li>
  </ul>
  <p>
    Read our <a href="/privacy">privacy policy</a> for more details.
  </p>
</WarningCallout>
```

## Accessibility

The WarningCallout component includes comprehensive accessibility features:

### Screen Reader Support

- Automatically prepends "Important:" for context
- Uses proper heading structure
- Includes visually hidden text for screen readers

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Proper focus indicators on links
- Tab order follows logical structure

### ARIA Support

```tsx
// For urgent warnings
<WarningCallout 
  heading="System maintenance"
  text="Service will be unavailable from 2-4 AM."
  role="alert"
  aria-live="polite"
/>
```

## Content Guidelines

### Writing Effective Warnings

1. **Be Specific**: State exactly what could happen
   - ❌ "There may be consequences"
   - ✅ "You may be fined up to £1,000"

2. **Use Action-Oriented Language**: Tell users what to do
   - ❌ "Details should be checked"
   - ✅ "Check your details are correct"

3. **Explain the Impact**: Help users understand why it matters
   - ❌ "Deadline approaching"
   - ✅ "Submit by 31 March or your application will be rejected"

4. **Keep It Scannable**: Use lists for multiple points

   ```tsx
   <WarningCallout heading="Required documents">
     <ul>
       <li>Passport or driving licence</li>
       <li>Proof of address (less than 3 months old)</li>
       <li>National insurance number</li>
     </ul>
   </WarningCallout>
   ```

### Tone and Language

- Use clear, direct language
- Avoid jargon or technical terms
- Be helpful, not threatening
- Focus on what users need to do

## Examples

### Legal Consequences

```tsx
<WarningCallout heading="Penalty for late submission">
  <p>If you submit your tax return after the deadline, you may have to pay a penalty.</p>
  <p>The penalty is usually £100, but can be more if your return is very late.</p>
</WarningCallout>
```

### Health and Safety

```tsx
<WarningCallout heading="Take precautions when handling chemicals">
  <p>Always wear appropriate protective equipment:</p>
  <ul>
    <li>Safety goggles</li>
    <li>Gloves</li>
    <li>Lab coat</li>
  </ul>
  <p><strong>Failure to follow safety procedures may result in injury.</strong></p>
</WarningCallout>
```

### Process Deadlines

```tsx
<WarningCallout heading="Appeal deadline">
  <p>You have <strong>28 days</strong> from the date of this letter to appeal.</p>
  <p>If you do not appeal within this time, the decision will become final.</p>
  <p><a href="/appeal-form">Submit your appeal online</a></p>
</WarningCallout>
```

### Data Protection

```tsx
<WarningCallout heading="Data protection notice">
  <p>Your personal information will be processed in accordance with data protection laws.</p>
  <p>By continuing, you consent to this processing.</p>
  <p><a href="/privacy-policy">Read our privacy policy</a></p>
</WarningCallout>
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `heading` | `string` | Yes | - | The heading text for the warning callout |
| `headingLevel` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | No | `3` | The heading level for document structure |
| `text` | `string` | No | - | Text content to display |
| `html` | `string` | No | - | HTML content (takes precedence over text) |
| `children` | `React.ReactNode` | No | - | React children (takes precedence over html and text) |
| `className` | `string` | No | - | Additional CSS classes |
| `...props` | `any` | No | - | Additional HTML attributes |

## Design Tokens

The component uses NHS FDP design tokens for:

- **Colors**: Yellow background and border colors
- **Typography**: Font families, sizes, and weights
- **Spacing**: Margins, padding, and layout spacing
- **Focus States**: Outline colors and accessibility indicators

## Migration from NHS UK Frontend

This component replaces the NHS UK Frontend warning callout with:

- **Enhanced TypeScript Support**: Full type safety with comprehensive prop types
- **Improved Accessibility**: Better screen reader support and ARIA patterns
- **React Integration**: Native React component with proper event handling
- **Design Token Integration**: Consistent styling through the design system
- **Better Testing**: Comprehensive test coverage with React Testing Library

## Best Practices

1. **Use Sparingly**: Too many warnings reduce their effectiveness
2. **Be Specific**: Clearly state what could happen and why
3. **Provide Solutions**: Tell users what they can do to avoid the consequence
4. **Test with Users**: Ensure warnings are helpful, not alarming
5. **Maintain Hierarchy**: Use appropriate heading levels for document structure
6. **Consider Context**: Place warnings at relevant points in the user journey
