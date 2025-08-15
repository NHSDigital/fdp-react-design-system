# NavigationSplitView

Mobile-first master–detail navigation component inspired by SwiftUI `NavigationSplitView`, adapted for the NHS FDP Design System.

## Features

- Mobile: Single column list (or cards) with slide-in detail view
- Tablet: Two-column (navigation + content) layout
- Desktop: Optional or automatic three-column layout (navigation + content + secondary) when `autoEnableThirdColumn` and a secondary renderer are present
- Accessible listbox semantics for navigation
- Animations (optional) using GPU-friendly transforms (respects `prefers-reduced-motion`)
- Design tokens for spacing, colours, typography
- Badge, description, icon support per item
- Optional collapsible navigation pane (>= medium) with persistent state (URL and/or localStorage)
- Navigation footer region (`navFooter`) for status / actions that remains fixed to bottom
- Debounced URL sync (`urlSyncDebounceMs`) & lazy secondary pane mount (`lazySecondary`) for performance

## Basic Usage

```tsx
<NavigationSplitView
  items={patients}
  renderContent={item => item ? <PatientDetail patient={item} /> : <EmptyState />}
  renderSecondaryContent={item => item && <Analytics patientId={item.id} />}
/>
```

## Breakpoints & Auto Third Column

When `autoEnableThirdColumn` (default `true`) and `renderSecondaryContent` is provided, the component automatically switches to a three‑column layout at the `xlarge` breakpoint. Disable:

```tsx
<NavigationSplitView autoEnableThirdColumn={false} {...props} />
```

## Drilling Into / Out of Third Column

Treat the third column as a drill-down view. Activate it automatically (above) or manually by controlling `forceLayout`.

### Manual Control

```tsx
const [forceLayout, setForceLayout] = useState<NavigationSplitLayoutMode | undefined>();

<NavigationSplitView
  forceLayout={forceLayout}
  renderContent={item => item && (
    <>
      <h3>{item.label}</h3>
      {forceLayout !== 'three-column' && (
        <Button onClick={() => setForceLayout('three-column')}>Show analytics →</Button>
      )}
    </>
  )}
  renderSecondaryContent={item => forceLayout === 'three-column' && item && (
    <>
      <h4>Analytics</h4>
      <BackLink appearance="secondary" onClick={() => setForceLayout('two-column')}>Back</BackLink>
    </>
  )}
  items={patients}
/>
```

### Convenience Hook: `useNavigationSplitDrill`

```tsx
import { useNavigationSplitDrill } from '...';

const { forceLayout, drillIn, drillOut, toggle, isDrilledIn } = useNavigationSplitDrill();

<NavigationSplitView
  forceLayout={forceLayout}
  items={patients}
  renderContent={item => item && (
    <div>
      <h3>{item.label}</h3>
      {!isDrilledIn && <Button onClick={drillIn}>Show analytics →</Button>}
    </div>
  )}
  renderSecondaryContent={item => isDrilledIn && item && (
    <div>
      <h4>Analytics: {item.label}</h4>
      <BackLink appearance="secondary" onClick={drillOut}>Back</BackLink>
    </div>
  )}
/>;
```

Hook API:

| Property | Description |
|----------|-------------|
| `forceLayout` | Pass to the component’s `forceLayout` prop |
| `drillIn()` | Sets layout to `'three-column'` |
| `drillOut()` | Returns to fallback (default `'two-column'`) |
| `toggle()` | Toggles between three-column and fallback |
| `isDrilledIn` | Boolean indicating if currently drilled in |

Configure initial and fallback layouts:

```ts
const drill = useNavigationSplitDrill({ initialLayout: 'two-column', fallbackLayout: 'two-column' });
```

## Breakpoint Hooks

```ts
import { useNhsFdpBreakpoints, useResponsiveValue } from '...';

const { up, down, between } = useNhsFdpBreakpoints();
const columns = useResponsiveValue({ base: 1, medium: 2, xlarge: 3 });
```

## Accessibility

- Navigation list uses `role="listbox"` with `role="option"` items
- Selected item sets `aria-selected` (and `aria-current` for active row)
- Live region announces selection changes (suppress with `skipAnnouncements` if you provide custom messaging)
- Roving focus keyboard navigation (vertical or horizontal via `orientation`)
- `initialFocus` controls whether first item is focused automatically
- `skipFocusOnSelect` prevents auto focus shift to content pane (keep focus in nav)
- `navigationInstructions` text is exposed via `aria-describedby` for screen reader guidance
- `onFocusChange(id, item, index)` callback fires when keyboard focus moves
- Mobile detail view uses BackLink for consistent semantics
- Animations reduced under `prefers-reduced-motion: reduce`

### URL Sync

Enable lightweight query param synchronisation:

```tsx
<NavigationSplitView
  syncUrl
  urlParamSelected="patient"
  urlParamDrill="analytics"
  {...props}
/>
```

This keeps selection and drill (three-column) state in the URL (without adding history entries). Back/forward navigation will restore state.

Performance tuning:

```tsx
<NavigationSplitView
  syncUrl
  urlSyncDebounceMs={150} // debounce rapid selection changes
  lazySecondary // mount third pane only after first activation
  {...props}
/>
```

Standalone hook (if you need lower‑level control):

```ts
import { useNavigationSplitUrlSync } from '...';
const { selectedId, setSelectedId, drilledIn, setDrilledIn } = useNavigationSplitUrlSync({
  paramSelected: 'patient',
  paramDrill: 'analytics'
});
```

## Collapsible Navigation & Footer

On wider viewports (≥ medium breakpoint) you can allow the navigation pane to collapse to an icon rail.

```tsx
<NavigationSplitView
  collapsibleNav
  navFooter={<SmallStatusPanel />}
  persistNavCollapsed="localStorage" // or 'url' | 'both'
  collapseToggleLabelShow="Show navigation"
  collapseToggleLabelHide="Hide navigation"
  {...props}
/>
```

### Props

| Prop | Type | Description |
|------|------|-------------|
| `collapsibleNav` | `boolean` | Enables collapse/expand control on ≥ medium screens. |
| `navInitiallyCollapsed` | `boolean` | Initial collapsed state (used if no persisted value). |
| `onNavCollapseChange` | `(collapsed: boolean) => void` | Notified after state changes. |
| `collapseToggleLabelShow` | `string` | Accessible label & tooltip when nav is collapsed (action = show). |
| `collapseToggleLabelHide` | `string` | Accessible label & tooltip when nav is expanded (action = hide). |
| `collapseToggleIconShow` | `ReactNode` | Custom icon when collapsed (defaults to chevron right). |
| `collapseToggleIconHide` | `ReactNode` | Custom icon when expanded (defaults to chevron left). |
| `navFooter` | `ReactNode` | Fixed footer content (hidden while collapsed). |
| `persistNavCollapsed` | `'localStorage' \| 'url' \| 'both'` | Persist collapsed state (URL param &/or localStorage). |
| `navCollapsedStorageKey` | `string` | Storage key (default `nsvCollapsed`). |
| `navCollapsedUrlParam` | `string` | URL query param (default `nsvCollapsed`, values `1`/`0`). |

### Persistence Behaviour

Priority when determining initial collapsed state:

1. URL param (if enabled) — ``?nsvCollapsed=1|0``
2. localStorage key (if enabled) — `'1'` or `'0'`
3. `navInitiallyCollapsed` prop fallback


Whenever the state changes it is written back to the chosen persistence medium(s) using `history.replaceState` for the URL (so it does not spam history).

### Custom Toggle Icons

Provide any React nodes:

```tsx
<NavigationSplitView
  collapsibleNav
  collapseToggleIconShow={<MyExpandIcon />}
  collapseToggleIconHide={<MyCollapseIcon />}
  {...props}
/>
```

Icons are wrapped in an accessible button whose `aria-label` is controlled by the `collapseToggleLabel*` props. A native tooltip is supplied via the `title` attribute for quick discoverability.

### Footer Example

```tsx
<NavigationSplitView
  collapsibleNav
  navFooter={(
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Button size="small">New Item</Button>
      <span style={{ fontSize: 12, opacity: 0.65 }}>Updated 2m ago</span>
    </div>
  )}
  {...props}
/>
```

## Future Enhancements

- Virtualisation for large lists
- Integrated search/filter bar
- Persisted selection across sessions (collapsed state already supported)
- Enhanced keyboard support for horizontal orientation (baseline implemented; more grid patterns possible)
- Animatable layout transitions between breakpoints
- Lazy mount secondary pane
- Advanced URL / router (e.g. nested routes) helpers

---

See `NavigationSplitView.types.ts` for full prop definitions.
