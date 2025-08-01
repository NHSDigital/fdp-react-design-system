# Heading Component with Automatic Level Mapping

This demonstrates the new automatic level mapping feature that was added to the Heading component.

## Usage Examples

```tsx
// Explicit level has precedence
<Heading level={3} size="xl" text="This is an H3 with XL styling" />

// Automatic level mapping from size
<Heading size="xxl" text="Auto H1 (xxl → h1)" />
<Heading size="xl" text="Auto H1 (xl → h1)" />
<Heading size="l" text="Auto H2 (l → h2)" />
<Heading size="m" text="Auto H3 (m → h3)" />
<Heading size="s" text="Auto H4 (s → h4)" />
<Heading size="xs" text="Auto H5 (xs → h5)" />

// Fallback when neither level nor size is provided
<Heading text="Auto H2 (default fallback)" />
```

## Mapping Rules

The automatic mapping follows NHS design system guidelines for heading hierarchy:

- **xxl/xl** → h1 (main page headings)
- **l** → h2 (major sections)  
- **m** → h3 (subsections)
- **s** → h4 (sub-subsections)
- **xs** → h5 (minor headings)
- **default** → h2 (when neither level nor size specified)

## Benefits

1. **Simpler API**: You can now create headings using just the `size` prop
2. **NHS Compliance**: Automatic mapping follows NHS design system patterns
3. **Backwards Compatible**: Existing code continues to work unchanged
4. **Explicit Override**: The `level` prop always takes precedence when specified

## Example: Panel Component Integration

The Panel component now benefits from this feature when using the Heading component:

```tsx
// Panel can now pass just a size and get appropriate semantic level
<Panel 
  headingText="Confirmation"
  bodyText="Your application has been submitted successfully."
/>

// The heading will automatically be an h2 with appropriate styling
```
