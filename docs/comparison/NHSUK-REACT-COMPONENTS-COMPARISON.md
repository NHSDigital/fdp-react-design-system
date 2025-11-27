# NHS FDP Design System vs nhsuk-react-components

> A detailed comparison between `@fergusbisset/nhs-fdp-design-system` (FDP) and `nhsuk-react-components` (NHS.UK React).

**Document Version:** 1.0  
**Last Updated:** 25 November 2025

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Library Overview](#library-overview)
3. [Component-by-Component Analysis](#component-by-component-analysis)
4. [Behaviour Layer Comparison](#behaviour-layer-comparison)
5. [Build & Tooling](#build--tooling)
6. [Styling & Design Tokens](#styling--design-tokens)
7. [SSR & Hydration](#ssr--hydration)
8. [Testing Strategy](#testing-strategy)
9. [Migration Considerations](#migration-considerations)
10. [Recommendations](#recommendations)

---

## Executive Summary

| Aspect | NHS FDP Design System | nhsuk-react-components |
|--------|----------------------|------------------------|
| **Version** | 0.0.45 (active development) | 6.0.0-beta.4 (stable) |
| **Purpose** | Extended platform with data viz, multi-render, behaviour layer | Faithful React port of nhsuk-frontend |
| **Component Count** | ~70+ directories | ~35 components |
| **Build Tool** | Vite 7 (multi-config) | Rollup 4 |
| **Test Runner** | Vitest 3 | Jest 30 |
| **Styling** | Style Dictionary tokens + SCSS | nhsuk-frontend CSS dependency |
| **SSR Support** | Explicit server variants | Standard React hydration |
| **Behaviour Layer** | Custom progressive enhancement | nhsuk-frontend JS modules |
| **React Version** | React 19.2.0 | React 19.2.0 |
| **Distribution** | GitHub Packages (scoped) | npm (public) |

### Key Differentiators

**FDP Advantages:**
- Design token system with JSON export for cross-platform use
- Server/client component split eliminating hydration warnings
- Multi-render architecture (React + Nunjucks macros)
- Advanced data visualisation (SPC charts, Gantt, dashboards)
- Behaviour layer with teardown/cleanup semantics
- Granular CSS subpath exports per component

**NHS.UK React Advantages:**
- Simpler dependency graph
- Direct nhsuk-frontend alignment (styles, JS)
- Public npm distribution (no auth required)
- Lower learning curve for existing nhsuk-frontend users
- Smaller bundle for basic service patterns

---

## Library Overview

### NHS FDP Design System

```
@fergusbisset/nhs-fdp-design-system
├── Core NHS components (Button, Header, Forms, etc.)
├── Extended components (DataVisualisation, GanttChart, SlotMatrix)
├── Design token pipeline (Style Dictionary)
├── Behaviour layer (progressive enhancement)
├── SSR-optimised exports (/ssr, /nextjs, /server variants)
├── Nunjucks macro generation
└── Multi-bundle output (ESM, UMD, component CSS)
```

**Dependencies:**
- `react-aria` for accessible interactions
- `d3` for data visualisation
- `gsap` for animations
- `sass` for styling

### nhsuk-react-components

```
nhsuk-react-components
├── Content Presentation (Details, Hero, Panel, Tables, etc.)
├── Form Elements (Button, Checkboxes, Radios, Inputs, etc.)
├── Navigation (Header, Footer, Breadcrumb, Pagination)
├── Layout (Container, Row, Col)
├── Typography (BodyText, LedeText)
└── Utilities (FormGroup, HeadingLevel, Clearfix)
```

**Dependencies:**
- `classnames` for class composition
- Peer dependency on `nhsuk-frontend` for styles and JS behaviours

---

## Component-by-Component Analysis

### Shared Components

The following components exist in both libraries. This section details API differences, implementation approach, and compatibility considerations.

---

### 1. Button

| Feature | FDP | NHS.UK React |
|---------|-----|--------------|
| **Variants** | `primary`, `secondary`, `warning`, `reverse`, `link` | `secondary`, `reverse`, `warning` |
| **Size prop** | Yes (`default`, `small`) | No |
| **Full width** | Yes (`fullWidth` prop) | No |
| **Prevent double-click** | Yes (built-in debounce) | Yes (via nhsuk-frontend JS) |
| **Link-as-button** | Yes (polymorphic via `href`) | Yes (separate `ButtonLinkProps`) |
| **Ref forwarding** | Yes | Yes |

**FDP Implementation:**
```tsx
// Self-contained with internal state management
function ButtonComponent(props, ref) {
  const [isPressed, setIsPressed] = useState(false);
  // Uses mapButtonProps for normalisation
  const model = mapButtonProps({ variant, size, fullWidth, ... });
  // Renders button or anchor based on href presence
}
```

**NHS.UK React Implementation:**
```tsx
// Delegates to nhsuk-frontend JS module
const ButtonComponent = forwardRef((props, ref) => {
  const [instance, setInstance] = useState<ButtonModule>();
  useEffect(() => {
    import('nhsuk-frontend').then(({ Button }) => 
      setInstance(new Button(moduleRef.current))
    );
  }, []);
  // Uses data-module="nhsuk-button" for JS enhancement
});
```

**Key Differences:**
- FDP internalises all logic; NHS.UK React delegates to nhsuk-frontend
- FDP supports size variants; NHS.UK React matches upstream exactly
- FDP uses explicit state for pressed/hover/focus; NHS.UK React relies on CSS/JS module

---

### 2. Header

| Feature | FDP | NHS.UK React |
|---------|-----|--------------|
| **Navigation overflow** | Built-in "More" dropdown | Via nhsuk-frontend module |
| **Server variant** | Yes (`HeaderServer`) | No |
| **Organisation logo** | Yes | Yes |
| **Service name** | Yes | Yes |
| **Search component** | Integrated | Compound child |
| **Account component** | Yes | Yes |
| **Menu state** | React state + behaviour | React state + nhsuk-frontend |
| **Responsive measurement** | ResizeObserver + layout calc | nhsuk-frontend handles |

**FDP Implementation:**
```tsx
// Pure render function for SSR determinism
import { renderHeaderMarkup } from "./Header.render";

export const Header: React.FC<HeaderProps> = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [visibleItems, setVisibleItems] = useState(navigation?.items?.length);
  
  // ResizeObserver for responsive overflow
  useEffect(() => {
    const ro = new ResizeObserver(() => recomputeLayout());
    ro.observe(container);
    return () => ro.disconnect();
  }, []);
  
  return renderHeaderMarkup(props, { menuOpen, visibleItems, ... });
};

// Server variant (no hooks)
export const HeaderServer: React.FC<HeaderProps> = (props) => 
  renderHeaderMarkup(props, { variant: 'server' });
```

**NHS.UK React Implementation:**
```tsx
// Standard React with compound children
const HeaderComponent = forwardRef((props, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    import('nhsuk-frontend').then(({ Header }) => 
      setInstance(new Header(moduleRef.current))
    );
  }, []);
  
  return (
    <header data-module="nhsuk-header">
      <HeaderContext.Provider value={{ menuOpen, setMenuOpen }}>
        {/* Compound children */}
      </HeaderContext.Provider>
    </header>
  );
});

export const Header = Object.assign(HeaderComponent, {
  Navigation: HeaderNavigation,
  NavigationItem: HeaderNavigationItem,
  Search: HeaderSearch,
  // ...
});
```

**Key Differences:**
- FDP has explicit `HeaderServer` for SSR without hooks
- FDP handles overflow measurement in React; NHS.UK React delegates to nhsuk-frontend
- FDP uses render function pattern for macro generation parity
- NHS.UK React uses compound component pattern with `Object.assign`

---

### 3. Radios

| Feature | FDP | NHS.UK React |
|---------|-----|--------------|
| **Conditional reveal** | Built-in | Via nhsuk-frontend module |
| **Arrow key navigation** | Custom implementation | nhsuk-frontend module |
| **Server variant** | Yes (`RadiosServer`) | No |
| **Small variant** | Yes | Yes |
| **Inline layout** | Yes | Yes |
| **Divider support** | Yes | Yes (Radios.Divider) |
| **Form group integration** | Via Fieldset | Via FormGroup HOC |

**FDP Implementation:**
```tsx
export const Radios: React.FC<RadiosProps> = (props) => {
  const [selectedValue, setSelectedValue] = useState(value || defaultValue);
  const itemsRef = useRef<HTMLInputElement[]>([]);
  
  // Custom keyboard navigation
  const handleKeyDown = useCallback((event) => {
    if (['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(key)) {
      event.preventDefault();
      const enabledRadios = itemsRef.current.filter(r => !r.disabled);
      // Navigate and select
    }
  }, []);
  
  return renderRadiosMarkup(props, {
    variant: 'client',
    selectedValue,
    handleChange,
    handleKeyDown,
    itemsRef,
  });
};
```

**NHS.UK React Implementation:**
```tsx
const RadiosComponent = forwardRef((props, ref) => {
  const [selectedRadio, setSelectedRadio] = useState<string>();
  
  useEffect(() => {
    import('nhsuk-frontend').then(({ Radios }) => 
      setInstance(new Radios(moduleRef.current))
    );
  }, []);
  
  return (
    <FormGroup inputType="radios" {...rest}>
      {(formProps) => (
        <RadiosContext.Provider value={contextValue}>
          <div className="nhsuk-radios" data-module="nhsuk-radios">
            {children}
          </div>
        </RadiosContext.Provider>
      )}
    </FormGroup>
  );
});
```

**Key Differences:**
- FDP implements keyboard nav directly; NHS.UK React uses nhsuk-frontend
- FDP has render function for SSR/macro parity
- NHS.UK React uses Context for child radio registration
- FDP manages refs array for navigation; NHS.UK React uses module

---

### 4. Checkboxes

| Feature | FDP | NHS.UK React |
|---------|-----|--------------|
| **Conditional reveal** | Built-in | Via nhsuk-frontend module |
| **Small variant** | Yes | Yes |
| **Exclusive checkbox** | Via config | Via nhsuk-frontend |
| **Server variant** | Planned | No |
| **State management** | Internal array | Via Context |

**FDP Implementation:**
```tsx
export const Checkboxes: React.FC<CheckboxesProps> = (props) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(
    items.filter(item => item.checked).map(item => item.value)
  );
  
  const handleCheckboxChange = (value: string, checked: boolean) => {
    const newValues = checked 
      ? [...selectedValues, value]
      : selectedValues.filter(v => v !== value);
    setSelectedValues(newValues);
    onChange?.(newValues);
  };
  
  // Renders items with conditional content inline
};
```

**NHS.UK React Implementation:**
```tsx
const CheckboxesComponent = forwardRef((props, ref) => {
  useEffect(() => {
    import('nhsuk-frontend').then(({ Checkboxes }) => 
      setInstance(new Checkboxes(moduleRef.current))
    );
  }, []);
  
  return (
    <FormGroup inputType="checkboxes" {...rest}>
      {(formProps) => (
        <CheckboxesContext.Provider value={contextValue}>
          <div className="nhsuk-checkboxes" data-module="nhsuk-checkboxes">
            {children}
          </div>
        </CheckboxesContext.Provider>
      )}
    </FormGroup>
  );
});
```

**Key Differences:**
- FDP passes `items` array prop; NHS.UK React uses compound children
- FDP handles conditional reveal in React; NHS.UK React uses nhsuk-frontend
- FDP exposes `onChange` with values array; NHS.UK React uses native events

---

### 5. CharacterCount

| Feature | FDP | NHS.UK React |
|---------|-----|--------------|
| **Max length** | Yes | Yes |
| **Max words** | Yes | Yes |
| **Threshold** | Yes (default 75%) | Yes |
| **Live count** | Built-in | Via nhsuk-frontend |
| **Over limit styling** | Built-in | Via module |
| **Count callback** | Yes (`onCountChange`) | No |

**FDP Implementation:**
```tsx
export const CharacterCount: React.FC = (props) => {
  const [remaining, setRemaining] = useState(0);
  const [isOverLimit, setIsOverLimit] = useState(false);
  const [showCount, setShowCount] = useState(false);
  
  const calculateCount = useCallback((text) => {
    return maxWords 
      ? text.trim().split(/\s+/).length 
      : text.length;
  }, [maxWords]);
  
  useEffect(() => {
    const count = calculateCount(currentValue);
    const thresholdCount = Math.floor(limit * (threshold / 100));
    setShowCount(count >= thresholdCount || count > limit);
    // Update remaining, isOverLimit
  }, [currentValue]);
  
  // Inline message generation
};
```

**NHS.UK React Implementation:**
```tsx
export const CharacterCount = forwardRef((props, ref) => {
  useEffect(() => {
    import('nhsuk-frontend').then(({ CharacterCount }) => 
      setInstance(new CharacterCount(moduleRef.current))
    );
  }, []);
  
  return (
    <FormGroup
      formGroupProps={{
        'data-module': 'nhsuk-character-count',
        'data-maxlength': maxLength?.toString(),
        'data-maxwords': maxWords?.toString(),
      }}
    >
      {/* Textarea + static message div */}
      {/* Module handles live updates */}
    </FormGroup>
  );
});
```

**Key Differences:**
- FDP calculates count in React with callbacks; NHS.UK React delegates to module
- FDP provides `onCountChange` callback for external consumers
- FDP generates dynamic messages; NHS.UK React uses module DOM manipulation

---

### 6. Other Shared Components

| Component | FDP Approach | NHS.UK React Approach | Notes |
|-----------|--------------|----------------------|-------|
| **ActionLink** | Standalone | Standalone | Similar API |
| **BackLink** | Standalone | Standalone | Similar API |
| **Breadcrumb** | Items array | Compound children | Different composition |
| **Card** | Items array + variants | Compound children | FDP has more variants |
| **ContentsList** | Items array | Compound children | - |
| **DateInput** | Server variant available | Standard | FDP has SSR split |
| **Details** | Standalone | Standalone | Similar |
| **ErrorMessage** | Standalone | Standalone | Similar |
| **ErrorSummary** | Server variant available | Standard | FDP has SSR split |
| **Footer** | Full implementation | Full implementation | Similar structure |
| **Hint** | Standalone | As HintText | Naming difference |
| **Images** | With lazy loading | Basic | FDP extended |
| **InsetText** | Standalone | Standalone | Similar |
| **Label** | Standalone | Standalone | Similar |
| **Pagination** | Full | Full | Similar |
| **Panel** | Standalone | Standalone | Similar |
| **Select** | Standard | Standard | Similar |
| **SkipLink** | Server variant | Standard | FDP has SSR split |
| **SummaryList** | Items array | Compound children | Different composition |
| **Table** | Enhanced sorting | Basic | FDP has SortableDataTable |
| **Tabs** | Multiple implementations | Basic tabs | FDP has AriaTabsDataGrid |
| **Tag** | With variants | Standard | Similar |
| **Textarea** | Standard | Standard | Similar |
| **WarningCallout** | Standalone | Standalone | Similar |

---

### Components Unique to FDP

| Component | Purpose |
|-----------|---------|
| **DataVisualisation** | SPC charts, MetricCard, line/bar primitives |
| **GanttChart** | Project timeline visualisation |
| **ProductRoadmap** | Product planning display |
| **SlotMatrix** | Appointment slot grid |
| **NavigationSplitView** | Master-detail navigation |
| **WorkflowSplitView** | Multi-step workflow UI |
| **ResponsiveDataGrid** | Adaptive data grid |
| **GroupableDataGrid** | Grouping/aggregation grid |
| **SortableDataTable** | Interactive sorting |
| **DashboardSummaryGrid** | Dashboard card layout |
| **FormNavButtonBar** | Form wizard navigation |
| **StepByStepNavigation** | Journey step tracker |
| **PatternBanner** | Decorative header |
| **Parallax** | Scroll effects |
| **Account** | User account widget |
| **CareCard** | Care urgency cards |
| **SummaryCard** | Extended summary |
| **TaskList** | Task tracking list |

### Components Unique to NHS.UK React

| Component | Purpose |
|-----------|---------|
| **Hero** | Page hero section |
| **NotificationBanner** | Alert banner |
| **DoAndDontList** | Guidance lists |
| **Clearfix** | Layout utility |
| **ReadingWidth** | Typography container |
| **BodyText** | Body paragraph |
| **LedeText** | Lead paragraph |
| **HeadingLevel** | Dynamic heading |
| **Form** | Form wrapper |
| **Legend** | Fieldset legend |

---

## Behaviour Layer Comparison

This section provides a detailed analysis of how each library handles interactive JavaScript behaviours.

### FDP Behaviour Layer Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    FDP Behaviour Layer                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │  initAll()   │  │ initRadios() │  │ initButtons()│       │
│  │              │  │              │  │              │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│         │                │                 │                │
│         ▼                ▼                 ▼                │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Element Enhancement                    │    │
│  │  - Attaches __nhsXxxBehaviour handle                │    │
│  │  - Sets up event listeners                          │    │
│  │  - Returns { detach() } cleanup function            │    │
│  └─────────────────────────────────────────────────────┘    │
│         │                                                   │
│         ▼                                                   │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Custom Events                          │    │
│  │  - nhs:radios:change                                │    │
│  │  - nhs:checkboxes:change                            │    │
│  │  - nhs:character-count:update                       │    │
│  └─────────────────────────────────────────────────────┘    │
│         │                                                   │
│         ▼                                                   │
│  ┌──────────────┐  ┌──────────────┐                         │
│  │ teardownAll()│  │detachRadios()│                         │
│  │              │  │              │                         │
│  └──────────────┘  └──────────────┘                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### NHS.UK React Module Pattern

```
┌─────────────────────────────────────────────────────────────┐
│               nhsuk-frontend Module System                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │         data-module="nhsuk-xxx" attribute           │    │
│  └─────────────────────────────────────────────────────┘    │
│                          │                                  │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │           Dynamic import('nhsuk-frontend')          │    │
│  │                                                     │    │
│  │   import('nhsuk-frontend').then(({ Button }) =>     │    │
│  │     new Button(element)                             │    │
│  │   )                                                 │    │
│  └─────────────────────────────────────────────────────┘    │
│                          │                                  │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │         Module Instance (stored in state)           │    │
│  │  - Manages internal DOM manipulation                │    │
│  │  - Handles events internally                        │    │
│  │  - No explicit teardown API                         │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Detailed Comparison

| Aspect | FDP Behaviour Layer | NHS.UK React Approach |
|--------|--------------------|-----------------------|
| **Initialisation** | Explicit `init*()` functions | Auto via `useEffect` + dynamic import |
| **Teardown** | Explicit `detach*()` / `teardownAll()` | None (relies on React unmount) |
| **Idempotence** | Element-level handles prevent re-init | Import ref prevents re-instantiation |
| **Custom Events** | Yes (`nhs:radios:change`, etc.) | Uses nhsuk-frontend events |
| **SSR Safety** | Designed for it | Works but can cause hydration warnings |
| **Scoping** | Container parameter | Per-component scope |
| **React Integration** | `BehavioursLoader` component | `useEffect` in each component |
| **Non-React Use** | First-class support | Not primary use case |
| **Bundle Impact** | Separate behaviours bundle | nhsuk-frontend JS included |

### Pros and Cons

#### FDP Behaviour Layer

**Pros:**

1. **Explicit Teardown Semantics**
   - Clean memory management for SPAs
   - Essential for route transitions in Next.js/React Router
   - Prevents listener accumulation

2. **SSR-First Design**
   - Server variants render static HTML
   - Behaviours attach post-hydration
   - Eliminates hydration mismatch warnings

3. **Multi-Render Parity**
   - Same behaviours work for React, Nunjucks, static HTML
   - Single source of truth for interactions
   - Easier testing (test behaviour once)

4. **Custom Event API**
   - Observable interaction points
   - Easy analytics integration
   - Decoupled from React state

5. **Scoped Initialisation**
   - `initAll(container)` for partial page updates
   - Better for micro-frontend architectures
   - Cleaner for dynamic content injection

6. **Independent Testing**
   - Behaviours testable without React
   - DOM-level unit tests
   - Clearer separation of concerns

**Cons:**

1. **Higher Complexity**
   - Two systems to understand (React + behaviours)
   - More code to maintain
   - Steeper learning curve

2. **Manual Coordination**
   - Must remember to initialise behaviours
   - Must teardown on navigation
   - Easy to forget in complex apps

3. **Potential Duplication**
   - Some logic in both React and behaviours
   - Keeping them in sync
   - Risk of divergence

4. **Bundle Overhead**
   - Separate behaviours bundle to load
   - Additional HTTP request (if not bundled)
   - More code even for React-only apps

5. **Less React-Idiomatic**
   - Escape hatch from React paradigm
   - Can conflict with React state
   - Unusual for React developers

#### NHS.UK React Approach

**Pros:**

1. **React-Idiomatic**
   - Uses standard patterns (useEffect, useState)
   - Familiar to React developers
   - Integrates with React DevTools

2. **Automatic Lifecycle**
   - Module instantiation in useEffect
   - Cleanup on unmount (mostly)
   - Less manual management

3. **Direct Upstream Alignment**
   - Uses official nhsuk-frontend JS
   - Guaranteed behaviour parity with Nunjucks
   - Maintenance shared with NHS.UK team

4. **Simpler Mental Model**
   - One library handles everything
   - No separate behaviour layer
   - Lower cognitive load

5. **Established Pattern**
   - Used by many NHS services
   - Community knowledge exists
   - Proven in production

**Cons:**

1. **No Explicit Teardown**
   - Memory leaks possible in SPAs
   - Module instances may persist
   - Harder to clean up on navigation

2. **SSR Complexity**
   - Dynamic imports can cause issues
   - Potential hydration warnings
   - No server-safe variants

3. **Limited Customisation**
   - Locked to nhsuk-frontend behaviour
   - Can't easily modify interactions
   - No event hooks for analytics

4. **React-Only**
   - Doesn't help non-React consumers
   - Nunjucks must use nhsuk-frontend directly
   - No unified behaviour layer

5. **Import Overhead**
   - Dynamic import on every component mount
   - Each component waits for nhsuk-frontend
   - Potential race conditions

### Recommendation Matrix

| Use Case | Recommended Approach |
|----------|---------------------|
| Simple service forms | NHS.UK React (simpler) |
| Complex SPA with routing | FDP (teardown essential) |
| SSR with Next.js | FDP (server variants) |
| Data-heavy dashboards | FDP (data viz + grids) |
| Quick prototype | NHS.UK React (faster) |
| Multi-render (React + Nunjucks) | FDP (behaviour parity) |
| Team new to React | NHS.UK React (idiomatic) |
| Team with vanilla JS experience | FDP (familiar patterns) |

---

## Build & Tooling

| Aspect | FDP | NHS.UK React |
|--------|-----|--------------|
| **Build Tool** | Vite 7 | Rollup 4 |
| **Output Formats** | ESM, UMD, per-component CSS | ESM, CJS |
| **Type Checking** | TypeScript 5.9 | TypeScript 5.9 |
| **Linting** | ESLint 9 | ESLint 9 |
| **Testing** | Vitest 3 | Jest 30 |
| **Storybook** | Storybook 10 | Storybook 10 |
| **Token Build** | Style Dictionary 5 | N/A |
| **CI/CD** | GitHub Actions (assumed) | GitHub Actions |
| **Visual Testing** | Chromatic | Chromatic |

### Build Time Comparison

| Task | FDP | NHS.UK React |
|------|-----|--------------|
| Full build | ~33 seconds | ~10 seconds |
| Test suite | ~4 minutes (1000+ tests) | ~30 seconds |
| Storybook build | ~36 seconds | ~30 seconds |
| Type check | ~2 seconds | ~5 seconds |

---

## Styling & Design Tokens

### FDP Token System

```scss
// Source: packages/nhs-fdp/tokens/
// Output: packages/nhs-fdp/dist/scss/_tokens.scss

// Usage in components
@use '../../../packages/nhs-fdp/dist/scss/tokens' as nhs;

.nhsuk-button {
  background-color: nhs.$color-green;
  padding: nhs.$spacing-3;
  font-size: nhs.$font-size-body;
}
```

**Exports:**
- CSS custom properties
- SCSS variables
- JavaScript/TypeScript constants
- JSON for tooling

### NHS.UK React Styling

```tsx
// Peer dependency on nhsuk-frontend
// Styles imported globally or via Sass
import 'nhsuk-frontend/dist/nhsuk.min.css';

// Components use nhsuk-* classes directly
<button className="nhsuk-button nhsuk-button--secondary">
```

**Approach:**
- Direct class application
- No token abstraction
- Relies on upstream CSS

---

## SSR & Hydration

### FDP SSR Pattern

```tsx
// Server Component (no hooks)
import { HeaderServer } from '@fergusbisset/nhs-fdp-design-system/ssr';

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <HeaderServer 
          serviceName="Service"
          navigation={{ items: [...] }}
        />
        {children}
      </body>
    </html>
  );
}
```

```tsx
// Client enhancement
import { NHSBehavioursInit } from '@fergusbisset/nhs-fdp-design-system/nextjs';

// In layout
<NHSBehavioursInit />
```

### NHS.UK React SSR

```tsx
// Standard component (has useEffect, useState)
import { Header } from 'nhsuk-react-components';

// Works but may cause hydration warnings
export default function Layout({ children }) {
  return (
    <html>
      <body>
        <Header>
          <Header.Navigation>...</Header.Navigation>
        </Header>
        {children}
      </body>
    </html>
  );
}
```

---

## Testing Strategy

### FDP Testing Tiers

1. **Client Tests** (`*.client.test.tsx`)
   - Interactive behaviour
   - Event handling
   - Keyboard navigation

2. **SSR Tests** (`*.ssr.test.tsx`)
   - Server-rendered output
   - Role/semantic structure
   - No hooks executed

3. **Hydration Tests** (`*.hydration.test.tsx`)
   - SSR → client transition
   - Post-hydration interactions
   - Attribute consistency

4. **Macro Parity Tests**
   - React ↔ Nunjucks output comparison
   - Structural equivalence

### NHS.UK React Testing

- Unit tests per component
- jest-axe for accessibility
- Standard React Testing Library patterns

---

## Migration Considerations

### From NHS.UK React to FDP

**Steps:**

1. **Update imports**
   ```tsx
   // Before
   import { Button, Header } from 'nhsuk-react-components';
   
   // After
   import { Button, Header } from '@fergusbisset/nhs-fdp-design-system';
   ```

2. **Configure .npmrc for GitHub Packages**

3. **Replace nhsuk-frontend CSS**
   ```tsx
   // Before
   import 'nhsuk-frontend/dist/nhsuk.min.css';
   
   // After
   import '@fergusbisset/nhs-fdp-design-system/css';
   ```

4. **Add behaviours initialisation** (if using SSR)
   ```tsx
   import { NHSBehavioursInit } from '@fergusbisset/nhs-fdp-design-system/nextjs';
   ```

5. **Adapt API differences**
   - Items arrays vs compound children
   - Server variants for SSR
   - Additional props (size, fullWidth, etc.)

### Compatibility Layer (Proposed)

For gradual migration, a shim module could map NHS.UK React patterns:

```tsx
// Hypothetical compatibility layer
export { Button } from '@fergusbisset/nhs-fdp-design-system';
export { Header } from '@fergusbisset/nhs-fdp-design-system';
// etc.
```

---

## Recommendations

### When to Choose FDP

- ✅ Building data-heavy dashboards or analytics
- ✅ Need SSR with Next.js App Router
- ✅ Require design token system for theming
- ✅ Multi-render environment (React + Nunjucks)
- ✅ Complex SPAs requiring teardown semantics
- ✅ Need advanced components (charts, grids, workflows)

### When to Choose NHS.UK React

- ✅ Simple transactional services
- ✅ Quick prototyping
- ✅ Team prefers React-idiomatic patterns
- ✅ Need public npm package (no auth)
- ✅ Minimal JavaScript requirements
- ✅ Direct nhsuk-frontend alignment critical

### Hybrid Approach

For existing NHS.UK React projects wanting FDP features:

1. Use NHS.UK React for standard components
2. Import FDP data visualisation separately
3. Consider FDP token system for theming
4. Evaluate full migration when major version needed

---

## Appendix: API Reference Quick Comparison

### Button Props

| Prop | FDP | NHS.UK React |
|------|-----|--------------|
| `variant` | `'primary' \| 'secondary' \| 'warning' \| 'reverse' \| 'link'` | - |
| `secondary` | - | `boolean` |
| `reverse` | - | `boolean` |
| `warning` | - | `boolean` |
| `size` | `'default' \| 'small'` | - |
| `fullWidth` | `boolean` | - |
| `preventDoubleClick` | `boolean` | `boolean` |
| `href` | Polymorphic render | Separate `ButtonLinkProps` |

### Header Props

| Prop | FDP | NHS.UK React |
|------|-----|--------------|
| `logo` | Object | Via `Header.Logo` child |
| `service` | Object | Via props |
| `organisation` | Object | Via props |
| `navigation` | `{ items: [] }` | Via `Header.Navigation` child |
| `search` | Object | Via `Header.Search` child |
| `account` | Object | Via `Header.Account` child |
| `containerClasses` | `string` | `string` |
| `variant` | `'default' \| 'transactional'` | - |
| `white` | - | `boolean` |

---

*This document will be updated as both libraries evolve.*
