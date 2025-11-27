# Exports Inventory

Version: 0.0.34-alpha.6
Date: 2025-09-09

- SortableDataTable exports:
  - AriaDataGrid, AriaTabsDataGrid, SortStatusControl, createGenericTabsConfig, createTCHTabsConfig, tchDataConfig
  - Types: AriaDataGridProps, AriaTabsDataGridProps, AriaTabsDataGridRef, TabPanelConfig, SortStatusControlProps, GenericTabDefinition, GenericColumnDefinition
- ResponsiveDataGrid exports:
  - ResponsiveDataGrid, ResponsiveDataGridDemo, PatientCard, AppointmentCard, MedicationCard, VitalsCard
  - Back-compat names: AdaptiveDataGrid, AriaTabsDataGridAdaptive
  - Types: ResponsiveDataGridProps, ResponsiveTabPanelConfig, LayoutMode, ViewportConfig (+ back-compat types)
- Layout: WidthContainer, PageTemplate (PageTemplateProps), TransactionalPageTemplate (TransactionalPageTemplateProps)
- NavigationSplitView: `export *` (see its module for names)
- ProductRoadmap (ProductRoadmapProps, ProductRoadmapCategory, ProductRoadmapItem)

## 1) Top-level barrel exports (main entry)

Entry: `@nhsdigital/fdp-design-system`

- Module: `dist/index.esm.js`
- UMD: `dist/index.umd.js`
- Types: `dist/src/index.d.ts`

### Components (from `src/components/index.ts`)

- From `./components/DataVisualisation` barrel:
  - SPCChart, ChartRoot, Axis, GridLines, LineScalesProvider, BandScalesProvider,
    LineSeriesPrimitive, AreaSeriesPrimitive, BarSeriesPrimitive, Legend,
    TooltipProvider, TooltipOverlay, VisibilityProvider, ChartNoScript,
    ChartEnhancer, MetricCard
  - Types: SPCChartProps, SPCDatum, ChartRootProps, AxisProps,
    LineSeries, LineDatum, LineSeriesPrimitiveProps, AreaSeriesPrimitiveProps,
    AreaSeries, AreaDatum, BarSeriesPrimitiveProps, BarSeries, BarDatum,
    LegendProps, LegendItem
  - SPC (alias export)

### Hooks, Tokens, Typography, Fonts

- Tokens: re-exported from `../packages/nhs-fdp/dist/react/index`
- Typography: `../packages/nhs-fdp/dist/react/components/NHSTypography`
- Hooks:
  - `../packages/nhs-fdp/dist/react/hooks/useTokens`
  - `useNhsFdpBreakpoints`, `useResponsiveValue` from `./hooks/useBreakpoints`
  - `useNavigationSplitDrill` from `./hooks/useNavigationSplitDrill`
  - `useNavigationSplitUrlSync` from `./hooks/useNavigationSplitUrlSync`
- Font utilities: `./styles/font-config` (also eagerly imports `./styles/fonts.css` and `./styles/main.scss`)

---

## 2) Subpath exports (component- and feature-specific)

These can be imported as `@nhsdigital/fdp-design-system/<subpath>`.

### Runtime bundles

- `./ssr` → SSR helpers (types: `dist/src/ssr.d.ts`, module: `dist/src/ssr.js`)
- `./core` → core helpers (types: `dist/src/core.d.ts`, module: `dist/src/core.js`)
- `./nextjs` → Next.js helpers (types: `dist/src/nextjs.d.ts`, module: `dist/src/nextjs.js`)
- `./pure` → pure re-export of main ESM (types: `dist/src/index.d.ts`, module: `dist/index.esm.js`)
- `./behaviours` → vanilla JS behaviours bundle (types: `dist/src/behaviours/index.d.ts`, module: `dist/behaviours/index.js`)
- `./macros` → Nunjucks macros directory (copies of `src/macros/*.njk`)

### Tokens

- `./tokens` → JS tokens (import/require `packages/nhs-fdp/dist/js/tokens.js`)
- `./tokens/json` → JSON tokens (`packages/nhs-fdp/dist/js/tokens.json`)

### Global CSS

- `./dist/nhs-fdp-design-system.css` (direct path)
- `./css` → same global CSS
- `./core/css` → `dist/nhs-fdp-design-system-core.css`

### Component code subpaths (ESM/JS and types)

- `./components/Button`
- `./components/Card`
- `./components/Footer`
- `./components/Grid`
- `./components/Header`
- `./components/Header/server` (server variant)
- `./components/Radios/server` (server variant)
- `./components/ResponsiveDataGrid`
- `./components/SortableDataTable`
- `./components/DataVisualisation`
- `./components/DataVisualisation/charts/SPC` (SPC barrel: SPCChart, engine, types, icons)
- `./components/DataVisualisation/charts/SPC/icons` (SPC icons-only barrel: SPCVariationIcon, SPCAssuranceIcon, enums, prop types)

Each of the above maps to `dist/src/components/<Name>/index.{d.ts,js}`.

### Component CSS subpaths

- Account: `./components/Account/css`
- ActionLink: `./components/ActionLink/css`
- BackLink: `./components/BackLink/css`
- Breadcrumb: `./components/Breadcrumb/css`
- Button: `./components/Button/css`
- Card: `./components/Card/css`
- CareCard: `./components/CareCard/css`
- CharacterCount: `./components/CharacterCount/css`
- Checkbox: `./components/Checkbox/css`
- Checkboxes: `./components/Checkboxes/css` (alias to Checkbox.css)
- ContentsList: `./components/ContentsList/css`
- DashboardSummaryGrid: `./components/DashboardSummaryGrid/css`
- DateInput: `./components/DateInput/css`
- Details: `./components/Details/css`
- DoDontList: `./components/DoDontList/css`
- ErrorMessage: `./components/ErrorMessage/css`
- ErrorSummary: `./components/ErrorSummary/css`
- Expander: `./components/Expander/css`
- Fieldset: `./components/Fieldset/css`
- Footer: `./components/Footer/css`
- GanttChart: `./components/GanttChart/css`
- Grid: `./components/Grid/css`
- Header: `./components/Header/css`
- Header (index styles): `./components/Header/index/css`
- HeaderSearch: `./components/HeaderSearch/css`
- Heading: `./components/Heading/css`
- Hero: `./components/Hero/css`
- Hint: `./components/Hint/css`
- Images: `./components/Images/css`
- Input: `./components/Input/css`
- InsetText: `./components/InsetText/css`
- Label: `./components/Label/css`
- List: `./components/List/css`
- MainWrapper: `./components/MainWrapper/css`
- NavigationSplitView: `./components/NavigationSplitView/css`
- Pagination: `./components/Pagination/css`
- Panel: `./components/Panel/css`
- ProductRoadmap: `./components/ProductRoadmap/css`
- Radios: `./components/Radios/css`
- ResponsiveDataGrid: `./components/ResponsiveDataGrid/css`
- ResponsiveDataGrid (HealthcareCardTemplates): `./components/ResponsiveDataGrid/HealthcareCardTemplates/css`
- Select: `./components/Select/css`
- SkipLink: `./components/SkipLink/css`
- SortableDataTable: `./components/SortableDataTable/css` (alias to AriaTabsDataGrid.css)
- SortableDataTable/AriaTabsDataGrid: `./components/SortableDataTable/AriaTabsDataGrid/css`
- SortableDataTable/AriaTabsDataGridDemo: `./components/SortableDataTable/AriaTabsDataGridDemo/css`
- SortableDataTable/HealthcareCardTemplates: `./components/SortableDataTable/HealthcareCardTemplates/css`
- SortableDataTable/SortStatusControl: `./components/SortableDataTable/SortStatusControl/css`
- SortableDataTable/SortStatusControl/SortStatusControl: `./components/SortableDataTable/SortStatusControl/SortStatusControl/css`
- SpacingUtilities: `./components/SpacingUtilities/css`
- SummaryCard: `./components/SummaryCard/css`
- SummaryList: `./components/SummaryList/css`
- Tables: `./components/Tables/css`
- Tables/Table: `./components/Tables/Table/css` (alias to Table.css)
- Tabs: `./components/Tabs/css`
- Tag: `./components/Tag/css`
- TaskList: `./components/TaskList/css`
- Textarea: `./components/Textarea/css`
- WarningCallout: `./components/WarningCallout/css`
- WidthUtilities: `./components/WidthUtilities/css`
- WidthContainer: `./components/WidthContainer/css` (alias to Grid.css)
- PageTemplate: `./components/PageTemplate/css` (alias to MainWrapper.css)
- TransactionalPageTemplate: `./components/TransactionalPageTemplate/css` (alias to MainWrapper.css)
- SlotMatrix: `./components/SlotMatrix/css`
- DataVisualisation (global): `./components/DataVisualisation/css`
- DataVisualisation/MetricCard: `./components/DataVisualisation/components/MetricCard/MetricCard/css`
- SPCChart: `./components/DataVisualisation/charts/SPC/SPCChart/SPCChart/css`
- Internal (Mermaid): `./components/_internal/Mermaid/css`

---

## 3) Usage examples

Top-level (recommended for most apps):

```ts
import { Button, Grid, SPCChart } from '@nhsdigital/fdp-design-system';
```

Component code subpath (tree-shaking friendly where applicable):

```ts
import { Button } from '@nhsdigital/fdp-design-system/components/Button';
```

Component CSS only (when selectively including styles):

```ts
import '@nhsdigital/fdp-design-system/components/Button/css';
```

SSR/Core/Next helpers:

```ts
import * as SSR from '@nhsdigital/fdp-design-system/ssr';
import * as Core from '@nhsdigital/fdp-design-system/core';
import * as NextJS from '@nhsdigital/fdp-design-system/nextjs';
```

Tokens:

```ts
import { tokens } from '@nhsdigital/fdp-design-system/tokens';
import tokensJson from '@nhsdigital/fdp-design-system/tokens/json';
```

SPC (recommended via barrel):

```ts
// Named
import { SPCChart, buildSpc, ImprovementDirection } from '@nhsdigital/fdp-design-system/components/DataVisualisation/charts/SPC';

// Namespace
import * as SPC from '@nhsdigital/fdp-design-system/components/DataVisualisation/charts/SPC';

// CSS per-component
import '@nhsdigital/fdp-design-system/components/DataVisualisation/charts/SPC/SPCChart/SPCChart/css';
```

---

SPC icons-only subpath (minimal icon imports):

```ts
// Components
import { SPCVariationIcon, SPCAssuranceIcon } from '@nhsdigital/fdp-design-system/components/DataVisualisation/charts/SPC/icons';

// Enums and types (optional)
import { VariationIcon, AssuranceIcon, ImprovementDirection } from '@nhsdigital/fdp-design-system/components/DataVisualisation/charts/SPC/icons';
```

If you want this inventory emitted programmatically, see the script `npm run inventory` (generates `inventory.md` and `inventory.json`).
