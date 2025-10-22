# ProductCard

A modern product card component following FDP brand guidelines with vector graphics, gradients, and flexible content options. Uses the same gradient system as PatternBanner.

## Features

- **FDP Brand Gradients**: Five color themes (aqua-green, purple, blue, grey, azure)
- **Vector Graphics**: Auto-generated or custom SVG shapes with gradients
- **Photo Support**: Traditional image display with optimized aspect ratios
- **Flexible Layouts**: Vertical (default) or horizontal orientations
- **Interactive**: Optional clickable cards with keyboard navigation
- **Action Buttons**: Support for multiple CTAs with three variants
- **Fully Accessible**: Semantic HTML, ARIA labels, keyboard navigation
- **SSR Compatible**: Renders consistently on server and client
- **Responsive**: Adapts to mobile and desktop viewports

## Basic Usage

```tsx
import { ProductCard } from '@fergusbisset/nhs-fdp';

// Simple card with auto-generated graphic
<ProductCard
  title="Digital Health Platform"
  description="A comprehensive platform for managing patient data and workflows"
  theme="blue"
  buttons={[
    { label: "Learn More", href: "/products/dhp" }
  ]}
/>
```

## Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Product title |
| `description` | `string` | Product description text |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `image` | `object` | - | Image configuration (see Image Configuration below) |
| `layout` | `'vertical' \| 'horizontal'` | `'vertical'` | Card layout orientation |
| `buttons` | `ProductCardButton[]` | `[]` | Array of action buttons/CTAs |
| `badge` | `string` | - | Optional badge text (e.g., "New", "Beta") |
| `theme` | `ProductCardTheme` | `'blue'` | Color theme for gradients and accents |
| `className` | `string` | - | Additional CSS classes |
| `style` | `CSSProperties` | - | Inline styles |
| `onClick` | `function` | - | Click handler for entire card |
| `href` | `string` | - | Makes entire card a link |
| `headingLevel` | `1-6` | `3` | Semantic heading level |
| `footer` | `ReactNode` | - | Custom footer content |
| `elevated` | `boolean` | `true` | Enable shadow/elevation effect |
| `imageAspectRatio` | `number` | `1.5` | Image area aspect ratio (width/height) |

### Image Configuration

The `image` prop accepts an object with the following structure:

**Technical Note**: The vector graphics use **native SVG coordinates** (similar to the example: 840×525). The viewBox is calculated as `baseHeight × aspectRatio × baseHeight` where baseHeight = 600. Shapes use actual SVG units (not scaled percentages), which prevents any distortion and ensures circles stay circular, rectangles maintain their proportions, and hexagons keep their intended shape across all aspect ratios.

```typescript
// Photo image
{
  type: 'photo',
  src: '/path/to/image.jpg',
  alt: 'Image description'
}

// Auto-generated vector graphic
{
  type: 'graphic',
  seed: 12345,  // Optional: for consistent random generation
  theme: 'aqua-green'  // Optional: overrides card theme
}

// Custom vector shapes
{
  type: 'graphic',
  shapes: [
    {
      kind: 'circle',
      x: 50,  // 0-100 percentage (positioned in SVG coordinate space)
      y: 50,
      size: 80,  // SVG units (maintains actual size, no skewing)
      gradient: 'blue',
      shadow: 'soft'  // 'none' | 'soft' | 'strong'
    },
    {
      kind: 'rect',
      x: 30,
      y: 30,
      width: 100,  // SVG units (actual width)
      height: 60,  // SVG units (actual height)
      rotate: 15,  // degrees
      gradient: 'aqua-green'
    },
    {
      kind: 'hex',
      x: 70,
      y: 70,
      size: 60,  // SVG units (actual hexagon size)
      gradient: 'purple',
      rotate: 30
    }
  ]
}
```

### Button Configuration

```typescript
{
  label: string;                    // Button text
  href?: string;                    // Link URL (creates <a> tag)
  onClick?: (event) => void;        // Click handler (creates <button> tag)
  variant?: 'primary' | 'secondary' | 'tertiary';  // Default: 'primary'
  disabled?: boolean;               // Disable button
  ariaLabel?: string;               // Custom ARIA label
}
```

## Examples

### With Multiple Buttons

```tsx
<ProductCard
  title="Patient Portal"
  description="Secure access to health records and appointments"
  theme="aqua-green"
  image={{ type: 'graphic', theme: 'aqua-green' }}
  buttons={[
    { label: "Get Started", href: "/signup", variant: "primary" },
    { label: "View Demo", href: "/demo", variant: "secondary" }
  ]}
/>
```

### Horizontal Layout

```tsx
<ProductCard
  title="Clinical Decision Support"
  description="AI-powered tools for evidence-based decisions"
  theme="purple"
  layout="horizontal"
  image={{ type: 'graphic', seed: 54321 }}
  buttons={[
    { label: "Explore Features", href: "/features" }
  ]}
/>
```

### With Photo Image

```tsx
<ProductCard
  title="Healthcare Analytics"
  description="Transform data into actionable insights"
  image={{
    type: 'photo',
    src: '/images/analytics-dashboard.jpg',
    alt: 'Analytics dashboard screenshot'
  }}
  buttons={[
    { label: "Request Demo", href: "/demo" }
  ]}
/>
```

### Clickable Card (No Buttons)

```tsx
<ProductCard
  title="Medication Management"
  description="Streamline prescription workflows"
  theme="aqua-green"
  href="/products/medication"
  image={{ type: 'graphic' }}
/>
```

### With Badge

```tsx
<ProductCard
  title="Telehealth Solution"
  description="Connect with patients remotely"
  theme="azure"
  badge="New"
  image={{ type: 'graphic' }}
  buttons={[
    { label: "Start Free Trial", href: "/trial" }
  ]}
/>
```

### Custom Vector Shapes

```tsx
<ProductCard
  title="Custom Design"
  description="Fully customizable vector graphics"
  image={{
    type: 'graphic',
    shapes: [
      {
        kind: 'circle',
        x: 30,
        y: 40,
        size: 80,
        gradient: 'purple',
        shadow: 'soft'
      },
      {
        kind: 'hex',
        x: 70,
        y: 30,
        size: 60,
        gradient: 'azure',
        rotate: 30
      }
    ]
  }}
/>
```

### With Footer Content

```tsx
<ProductCard
  title="Appointment Scheduling"
  description="Optimize clinic capacity"
  buttons={[{ label: "View Details", variant: "secondary" }]}
  footer={
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>★★★★★ 4.8/5</span>
      <span>1,200+ installs</span>
    </div>
  }
/>
```

### Text-Only Card (No Image)

```tsx
<ProductCard
  title="Integration Services"
  description="Connect your existing systems with our APIs"
  buttons={[
    { label: "View Documentation", href: "/docs" },
    { label: "Contact Sales", href: "/contact" }
  ]}
  footer="24/7 technical support included"
/>
```

### With Click Handlers

```tsx
<ProductCard
  title="Interactive Card"
  description="Handle clicks programmatically"
  onClick={() => console.log('Card clicked')}
  buttons={[
    {
      label: "Action",
      onClick: (e) => {
        e.stopPropagation(); // Prevents card click
        console.log('Button clicked');
      }
    }
  ]}
/>
```

## Themes

Five color themes are available, each with corresponding gradients:

- `aqua-green`: Teal to green gradient
- `purple`: Lavender gradient
- `blue`: NHS blue gradient (default)
- `grey`: Grey to light grey gradient
- `azure`: Azure to cyan gradient

Each theme affects:
- Title color
- Button colors (when using primary/secondary variants)
- Vector graphic color palette

## Accessibility

The ProductCard component follows WCAG 2.1 Level AA guidelines:

- Semantic HTML with proper heading levels
- Keyboard navigation support (Tab, Enter, Space)
- Focus indicators on interactive elements
- ARIA attributes for screen readers
- Sufficient color contrast ratios
- SVG graphics hidden from screen readers with `aria-hidden`

### Keyboard Navigation

- **Tab**: Navigate to card (if clickable) and buttons
- **Enter/Space**: Activate clickable card or focused button
- **Shift+Tab**: Navigate backwards

## Responsive Behavior

- **Mobile (<640px)**: Horizontal layout cards stack vertically
- **Tablet/Desktop**: Maintains specified layout
- **Image Scaling**: Maintains aspect ratio across all viewports
- **Button Wrapping**: Buttons wrap to multiple rows if needed

## Performance

- **SSR Compatible**: Renders identically on server and client
- **Lightweight**: Minimal JavaScript for interactive features
- **CSS-based**: Gradients and animations use CSS for optimal performance
- **Lazy Rendering**: Vector shapes generated only when needed

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- iOS Safari: Latest 2 versions
- Chrome Android: Latest 2 versions

## Related Components

- **PatternBanner**: Uses the same gradient system and shape primitives
- **Card**: Traditional NHS card component
- **Hero**: Page hero component with similar visual language

## Testing

The component includes comprehensive test coverage:

- **Client tests** (`ProductCard.client.test.tsx`): Interactive behavior, events, accessibility
- **SSR tests** (`ProductCard.ssr.test.tsx`): Server-side rendering compatibility

Run tests:
```bash
npm run test:components
```

## Troubleshooting

### Vector graphics not appearing

Ensure the `image.type` is set to `'graphic'` and shapes are properly configured:

```tsx
image={{ type: 'graphic', seed: 12345 }}
```

### Buttons not clickable in card

Use `e.stopPropagation()` in button onClick handlers to prevent card click:

```tsx
buttons={[
  {
    label: "Action",
    onClick: (e) => {
      e.stopPropagation();
      // Your logic here
    }
  }
]}
```

### Custom theme colors not applying

Themes must be one of the predefined values. To use custom colors, apply them via CSS:

```tsx
<ProductCard
  className="custom-theme"
  style={{ '--custom-color': '#ff0000' }}
/>
```

## Server-Side Rendering (SSR)

ProductCard is fully SSR-compatible and can be imported from the `/ssr` barrel:

```tsx
import { ProductCard, ProductCardThemeEnum } from '@fergusbisset/nhs-fdp-design-system/ssr';
```

### Important SSR Considerations

When using vector graphics with SSR (Next.js, Remix, etc.), **always provide a seed value** to ensure consistent rendering between server and client:

```tsx
// ✅ Good - Consistent SSR
<ProductCard
  image={{
    type: 'graphic',
    seed: 12345,  // Same shapes on server and client
    theme: 'blue'
  }}
  title="My Product"
  description="Description"
/>

// ❌ Avoid - Hydration mismatch
<ProductCard
  image={{
    type: 'graphic',
    // No seed = defaults to 0, but shapes change if seed is added later
  }}
  title="My Product"
  description="Description"
/>
```

**Why this matters**: Without a seed, the shape generation defaults to `0` for SSR consistency. If you later rely on dynamic seeds or change the implementation, it could cause hydration mismatches. Always be explicit with your seed values.

## Contributing

When contributing to ProductCard:

1. Follow the established testing patterns (client/SSR tests)
2. Maintain accessibility standards
3. Update documentation for new props
4. Test across major browsers
5. Ensure SSR compatibility (no client-only hooks like useRef)

## License

Part of the NHS FDP Design System. See project LICENSE for details.
