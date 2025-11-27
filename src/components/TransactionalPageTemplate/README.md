# TransactionalPageTemplate Component

A complete transactional page template following NHS Service Manual guidance for transactional services like forms, applications, and user journeys.

## Overview

The TransactionalPageTemplate provides a simplified page structure optimized for task-focused interactions. Unlike the standard PageTemplate, it excludes complex navigation and focuses on guiding users through specific processes.

## Usage

```tsx
import { TransactionalPageTemplate } from '@nhs-fdp/components';

// Basic appointment booking form
<TransactionalPageTemplate
  pageTitle="Book an appointment"
  serviceName="NHS Service Name"
  serviceHref="/"
  backLinkProps={{
    text: "Back to appointments",
    href: "/appointments"
  }}
>
  <form>
    {/* Form content */}
  </form>
</TransactionalPageTemplate>

// Registration form with button back link
<TransactionalPageTemplate
  pageTitle="Register for services"
  serviceName="NHS Online Services"
  backLinkProps={{
    text: "Back",
    element: "button",
    onClick: () => router.back()
  }}
>
  <form>
    {/* Registration form */}
  </form>
</TransactionalPageTemplate>
```

## Props

### TransactionalPageTemplateProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Content to render inside the template |
| `pageTitle` | `string` | - | Main page heading |
| `pageHeadingProps` | `HeadingProps` | - | Props to customize the page heading |
| `columnWidth` | `GridWidth` | `"two-thirds"` | Width of the main content column |
| `mainWrapperSize` | `MainWrapperProps['size']` | `"small"` | Size variant for the main wrapper |
| `skipLinkProps` | `SkipLinkProps` | - | Skip link configuration |
| `headerProps` | `HeaderProps` | - | Header configuration (simplified) |
| `footerProps` | `FooterProps` | - | Footer configuration |
| `backLinkProps` | `BackLinkProps` | - | Back link configuration |
| `serviceName` | `string` | - | Service name for the header |
| `serviceHref` | `string` | - | Service URL for the header |
| `logo` | `HeaderProps['logo']` | - | Logo configuration |

## Key Features

### Simplified Header

- NHS logo and service name only
- No navigation, search, or account components
- Focused on task completion

### Back Link Support

- Built-in BackLink component integration
- Supports both anchor and button elements
- Flexible positioning before main content

### Optimized Layout

- Smaller main wrapper by default (better for forms)
- Two-thirds column width by default
- Responsive grid system

### Accessibility

- Skip links for keyboard navigation
- Semantic HTML structure
- Screen reader friendly

## When to Use

Use TransactionalPageTemplate for:

- **Forms and Applications**: Registration, booking, applications
- **Multi-step Processes**: Wizards, checkout flows, onboarding
- **User Account Management**: Profile updates, settings, preferences
- **Task-focused Pages**: Single-purpose interactions

## When Not to Use

Don't use TransactionalPageTemplate for:

- **Content Pages**: Articles, guidance, information pages
- **Landing Pages**: Marketing or promotional content
- **Complex Navigation**: Multi-section applications
- **Browse-focused Content**: Catalogs, directories, search results

## Structure

The component follows this hierarchical structure:

```text
<SkipLink />
<Header /> {/* Simplified */}
<WidthContainer>
  <BackLink /> {/* Optional */}
  <MainWrapper>
    <Row>
      <Column>
        <Heading /> {/* Page title */}
        {children}
      </Column>
    </Row>
  </MainWrapper>
</WidthContainer>
<Footer />
```

## Examples

### Appointment Booking

```tsx
<TransactionalPageTemplate
  pageTitle="Choose appointment time"
  serviceName="NHS App"
  serviceHref="/"
  backLinkProps={{
    text: "Back to available dates",
    href: "/appointments/dates"
  }}
>
  <form>
    <fieldset>
      <legend>Available times for Monday 15 March</legend>
      {/* Time slot options */}
    </fieldset>
    <button type="submit">Book appointment</button>
  </form>
</TransactionalPageTemplate>
```

### Confirmation Page

```tsx
<TransactionalPageTemplate
  pageTitle="Appointment booked"
  serviceName="NHS App"
  serviceHref="/"
  // No back link for confirmation pages
>
  <div className="nhsuk-panel nhsuk-panel--confirmation">
    <h2>Booking confirmed</h2>
    <p>Reference: ABC123</p>
  </div>
  <p>We've sent you a confirmation email.</p>
</TransactionalPageTemplate>
```

### Form with Validation

```tsx
<TransactionalPageTemplate
  pageTitle="Enter your details"
  serviceName="NHS Registration"
  backLinkProps={{
    text: "Back",
    element: "button",
    onClick: handleBack
  }}
>
  <form onSubmit={handleSubmit}>
    <div className="nhsuk-form-group">
      <label htmlFor="email">Email address</label>
      <input 
        type="email" 
        id="email" 
        className="nhsuk-input"
        required 
      />
    </div>
    <button type="submit">Continue</button>
  </form>
</TransactionalPageTemplate>
```

## Comparison with PageTemplate

| Feature | PageTemplate | TransactionalPageTemplate |
|---------|--------------|---------------------------|
| Header | Full with navigation/search/account | Simplified with service name only |
| Back Link | Not included | Built-in support |
| Main Wrapper | Default size | Small size (better for forms) |
| Use Case | Content browsing | Task completion |
| Complexity | Higher | Lower |
| Navigation | Multi-level | Linear/sequential |

## Guidelines

- **Use for**: Multi-step forms, booking systems, registration flows, transactional services
- **Don't use for**: Information pages, guidance content, landing pages
- **Back links**: Include on all pages except start and confirmation pages
- **Page titles**: Should describe the current step (e.g., "Enter your details", "Choose appointment time")
- **Service name**: Should be the name of your digital service
- **Breadcrumbs**: Not recommended for transactional journeys - use back links instead

## Accessibility Features

- The simplified header improves focus management for screen reader users
- Back links provide clear navigation context
- Page titles are properly structured for assistive technologies
- Form elements should follow NHS design system accessibility patterns

## Browser Support

Works in all browsers supported by the NHS design system:

- Chrome, Firefox, Safari (latest 2 versions)
- Internet Explorer 11
- iOS Safari, Chrome Mobile
