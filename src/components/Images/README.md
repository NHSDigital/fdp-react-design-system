# Images Component

The Images component provides a consistent way to display images across NHS services with responsive sizing and optional captions.

## Overview

The Images component is designed to:
- Display images responsively (2/3 width on desktop, full width on mobile)
- Support optional captions for describing image content
- Handle responsive images with srcset and sizes
- Provide consistent NHS styling with borders and spacing
- Ensure accessibility with proper semantic structure

## Usage

### Basic Usage

```tsx
import { Images } from '@nhs-fdp/design-system';

export const BasicImage = () => (
  <Images
    src="https://example.com/image.jpg"
    alt="Description of the image"
  />
);
```

### With Caption

```tsx
export const ImageWithCaption = () => (
  <Images
    src="https://example.com/medical-diagram.jpg"
    alt="Diagram showing heart anatomy"
    caption="A detailed diagram showing the main parts of the human heart"
  />
);
```

### Responsive Images

```tsx
export const ResponsiveImage = () => (
  <Images
    src="https://example.com/fallback.jpg"
    alt="Medical professional with patient"
    srcset="
      https://example.com/small.jpg 480w,
      https://example.com/medium.jpg 800w,
      https://example.com/large.jpg 1200w
    "
    sizes="(max-width: 480px) 100vw, (max-width: 800px) 50vw, 33vw"
    caption="Healthcare consultation in progress"
  />
);
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `src` | `string` | Yes | The source location of the image |
| `alt` | `string` | Yes | The alt text of the image for accessibility |
| `caption` | `string` | No | Optional caption text for the image |
| `sizes` | `string` | No | List of screen sizes for responsive images |
| `srcset` | `string` | No | List of image source URLs and their sizes |
| `className` | `string` | No | Additional CSS classes |

Note: `sizes` and `srcset` must both be provided together for responsive images to work.

## Accessibility

The Images component follows accessibility best practices:

- **Semantic Structure**: Uses `<figure>` and `<figcaption>` elements
- **Alt Text**: Requires descriptive alt text for all images
- **Decorative Images**: Supports empty alt text (`alt=""`) for purely decorative images
- **Caption Association**: Captions are properly associated with images

### Alt Text Guidelines

- **Descriptive Images**: Describe what the image shows
- **Informational Images**: Describe the information conveyed
- **Decorative Images**: Use empty alt text (`alt=""`)
- **Complex Images**: Use detailed descriptions, consider longer captions

## Examples

### Medical Diagram

```tsx
<Images
  src="/images/heart-diagram.jpg"
  alt="Anatomical diagram of the human heart showing four chambers"
  caption="The heart has four chambers: left and right atria (upper chambers) and left and right ventricles (lower chambers)"
/>
```

### Step-by-Step Instructions

```tsx
<div>
  <Images
    src="/images/hand-washing-step1.jpg"
    alt="Hands under running water"
    caption="Step 1: Wet your hands with clean, running water"
  />
  <Images
    src="/images/hand-washing-step2.jpg"
    alt="Hands being lathered with soap"
    caption="Step 2: Apply soap and lather well"
  />
</div>
```

### Responsive Medical Image

```tsx
<Images
  src="/images/consultation-fallback.jpg"
  alt="Doctor consulting with patient in clinic"
  srcset="
    /images/consultation-320.jpg 320w,
    /images/consultation-640.jpg 640w,
    /images/consultation-1024.jpg 1024w
  "
  sizes="(max-width: 640px) 100vw, 66vw"
  caption="Regular consultations help maintain good health"
/>
```

## Styling

The component uses NHS design tokens for consistent styling:

- **Responsive Width**: 66.6% (2/3) on desktop, 100% on mobile/tablet
- **Background**: White background with bottom border
- **Spacing**: Consistent margins matching NHS spacing scale
- **Typography**: NHS font family and sizes for captions

### Custom Styling

```tsx
<Images
  src="/images/custom-image.jpg"
  alt="Custom styled image"
  className="my-custom-image-class"
  caption="Image with custom styling applied"
/>
```

## Best Practices

### Image Selection
- Use high-quality, relevant images
- Ensure images load quickly across all devices
- Consider different screen sizes and resolutions

### Alt Text
- Be descriptive but concise
- Don't start with "Image of" or "Picture of"
- For complex images, use detailed captions alongside alt text

### Captions
- Use captions to provide additional context
- Keep captions concise and relevant
- Can include HTML markup for links or formatting

### Performance
- Use responsive images with srcset for optimal loading
- Optimize image file sizes
- Consider lazy loading for images below the fold

## Migration from NHS UK Frontend

This component replaces the NHS UK Frontend images implementation with:

- **Enhanced Props**: Better TypeScript support and prop validation
- **Consistent API**: Matches other NHS FDP component patterns
- **Design Token Integration**: Uses NHS FDP design tokens for styling
- **Improved Testing**: Comprehensive test coverage
- **Better Documentation**: Enhanced Storybook examples and usage guides

The component maintains full compatibility with NHS UK Frontend styling while providing improved developer experience.
