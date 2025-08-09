# Layout Components

This directory contains layout components that provide NHS-compliant page structure and content organization.

## Components

### PageTemplate

A complete page template following NHS Service Manual guidance and best practices.

**Features:**

- Complete page structure with all essential NHS layout components
- Clean component composition: `<SkipLink/><Header/><WidthContainer><MainWrapper><Row><Column><Heading /></></></></><Footer />`
- Flexible configuration for service, navigation, search, and account features
- Responsive design with configurable column widths
- Full accessibility compliance

**Usage:**

```tsx
import { PageTemplate } from '@nhs-fdp/design-system';

<PageTemplate
  pageTitle="Manage your appointments"
  service={{ text: "NHS App", href: "/" }}
  navigation={[
    { text: "Home", href: "/", current: true },
    { text: "Appointments", href: "/appointments" },
    { text: "Messages", href: "/messages" }
  ]}
>
  <p>Your page content goes here</p>
</PageTemplate>
```

### WidthContainer

A standalone NHS-standard page width container component.

**Features:**

- Standard NHS page width constraints (960px max-width)
- Responsive margins and centering
- Optional fluid layout for full-width content
- Lightweight wrapper around the Grid Container component

**Usage:**

```tsx
import { WidthContainer } from '@nhs-fdp/design-system';

<WidthContainer>
  <h1>Content with NHS-standard width</h1>
  <p>This content will be properly constrained and centered.</p>
</WidthContainer>

// Fluid width
<WidthContainer fluid>
  <p>This content spans the full viewport width.</p>
</WidthContainer>
```

## When to Use

### Use PageTemplate when

- Building complete service pages
- You want consistent NHS page structure without manual composition
- You need standard header, navigation, and footer functionality
- Building dashboard or application pages

### Use WidthContainer when

- Building custom page layouts
- You need just the NHS width constraints
- Composing your own layout structure
- Creating content sections within larger layouts

## Design Principles

Both components follow NHS Service Manual guidance:

1. **Accessibility First**: All components include proper ARIA attributes, semantic HTML, and keyboard navigation
2. **Mobile-First Design**: Responsive design that works on all device sizes
3. **NHS Brand Compliance**: Consistent with NHS digital service standards
4. **Progressive Enhancement**: Works without JavaScript, enhanced with client-side features

## Related Components

- **Grid System**: `Container`, `Row`, `Column` for layout structure
- **MainWrapper**: Semantic main content wrapper with spacing variants
- **Header**: NHS header with service branding and navigation
- **Footer**: NHS footer with links and copyright
- **SkipLink**: Accessibility skip navigation

## Examples

See the Storybook documentation for comprehensive examples and interactive demos of all layout components.
