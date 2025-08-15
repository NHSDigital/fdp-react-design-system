# Heading Component

Semantic heading wrapper that decouples visual size from HTML heading level while enforcing NHS FDP typography and spacing rules.

## Features

- Size variants (`xs`, `s`, `m`, `l`, `xl`, `xxl`) independent of semantic level
- Automatic level inference from size (override with `level` prop)
- Token-driven vertical rhythm (bottom margin + conditional top margin)
- Optional raw HTML injection (`html`) or plain text / children
- Customisable bottom margin via `marginBottom` prop

## Spacing & Vertical Rhythm

The component applies:

- `margin-bottom`: fixed per size using responsive spacing tokens (already in styles)
- `margin-top`: only when the heading is **not** the first child in its container, scaled by size using design tokens

| Size | Token (mobile) top | Token (tablet+) top |
|------|--------------------|---------------------|
| base / xs | spacing-responsive-3 | spacing-responsive-3 |
| s, m | spacing-responsive-4 | spacing-responsive-4 |
| l | spacing-responsive-5 | spacing-responsive-5 |
| xl | spacing-responsive-6 | spacing-responsive-6 |
| xxl | spacing-responsive-7 | spacing-responsive-7 |

Rationale: This avoids double spacing at section starts while giving larger headings more preceding space for improved scanability.

### Disabling Top Margin

Add the modifier class `nhsuk-heading--no-mt` to suppress any conditional top margin (e.g. when manually composing layouts):

```tsx
<Heading size="l" className="nhsuk-heading--no-mt">First item</Heading>
```

### Custom Bottom Margin

Use the `marginBottom` prop if a non-token value is needed (avoid overuse to maintain rhythm):

```tsx
<Heading size="m" marginBottom="2rem">Custom bottom space</Heading>
```

## Usage Examples

Automatic level from size:

```tsx
<Heading size="xl">Page Title</Heading> // renders h1
<Heading size="l">Section Title</Heading> // renders h2
<Heading size="s">Subsection</Heading> // renders h4
```

Explicit semantic level override:

```tsx
<Heading level={3} size="xl">Visually Large h3</Heading>
```

HTML injection (ensure content is trusted):

```tsx
<Heading size="m" html="Quarterly &amp; <em>Important</em> Update" />
```

## Accessibility

- Always uses a real heading tag (`h1`–`h6`)
- Size does not imply structure; supply explicit `level` for non-standard hierarchies
- Avoid skipping heading levels purely for visual effect

## Props (Summary)

| Prop | Type | Description |
|------|------|-------------|
| `size` | `"xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl"` | Visual size variant |
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | Semantic heading level override |
| `text` | `string` | Plain text content (alternative to children) |
| `html` | `string` | Raw HTML (dangerously set) |
| `marginBottom` | `string` | Custom bottom margin value |
| `className` | `string` | Additional classes (e.g. `nhsuk-heading--no-mt`) |

---

See `Heading.scss` for exact token mappings.
