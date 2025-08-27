# NHS FDP Design System - SSR Compatibility Analysis

## Executive Summary

- **Total Components Analyzed**: 149
- **Overall SSR Compatibility**: 92%
- **Fully Compatible**: 135 (91%)
- **Compatible with Hydration**: 3 (2%)
- **Client-Only**: 1 (1%)
- **Requires Refactoring**: 10 (7%)

## Quick Wins 🚀

Components that can be easily made SSR-compatible:

- **ChartWithTableTabs**: 3/3 issues auto-fixable
- **FontDebugger**: 5/6 issues auto-fixable
- **GanttChart**: 9/11 issues auto-fixable
- **NavigationSplitView.types**: 2/2 issues auto-fixable
- **SkipLink**: 9/11 issues auto-fixable
- **useIntelligentLayout**: 29/31 issues auto-fixable
- **TransactionalPageTemplate**: 1/1 issues auto-fixable

## Priority Issues

### Blocking Issues (Prevent SSR)
- **document-object**: Direct document object access
  ```
  const link = document.createElement('a');
  ```
  **Fix**: Add typeof document !== "undefined" check or use in useEffect

- **document-object**: Direct document object access
  ```
  document.body.appendChild(link);
  ```
  **Fix**: Add typeof document !== "undefined" check or use in useEffect

- **document-object**: Direct document object access
  ```
  document.body.removeChild(link);
  ```
  **Fix**: Add typeof document !== "undefined" check or use in useEffect

- **window-object**: Direct window object access
  ```
  window.addEventListener('keydown', onKey);
  ```
  **Fix**: Add typeof window !== "undefined" check or use in useEffect

- **window-object**: Direct window object access
  ```
  return () => window.removeEventListener('keydown', onKey);
  ```
  **Fix**: Add typeof window !== "undefined" check or use in useEffect


## Component Breakdown

### ✅ Fully SSR Compatible (135)
- Account
- Account.types
- ActionLink
- ActionLink.types
- BackLink
- BackLink.types
- ForwardLink
- Breadcrumb
- Breadcrumb.types
- Button.test-types
- Button.types
- ButtonExamples
- ButtonSSR
- Card.types
- CareCard.types
- CharacterCount
- CharacterCount.types
- Checkbox
- Checkbox.types
- Checkboxes.styles
- Checkboxes
- Checkboxes.types
- CheckboxesCSS
- ContentsList
- ContentsList.types
- DashboardSummaryGrid.types
- FilterableLineChart
- LineChart
- BandScalesProvider
- ChartRoot
- ScaleContext
- TooltipContext
- VisibilityContext
- Axis
- ChartContainer
- GridLines
- TooltipOverlay
- AreaSeriesPrimitive
- BarSeriesPrimitive
- LineSeriesPrimitive
- colors
- scales
- DateInput
- DateInput.types
- Details
- DoDontList
- ErrorMessage
- ErrorMessage.types
- ErrorSummary
- ErrorSummary.types
- Expander
- Fieldset
- Fieldset.types
- Footer
- Footer.types
- GanttChart-new
- TaskBar-new
- TaskBar
- Grid.types
- Header.types
- HeaderSSR
- HeaderStatic
- HeaderSearch.types
- Heading
- Heading.types
- Hero
- Hero.types
- Hint
- Hint.types
- Images
- Input
- Input.types
- InsetText
- InsetText.types
- Label
- Label.types
- List
- List.types
- MainWrapper
- MainWrapper.types
- NHSThemeProvider
- PageTemplate
- PageTemplate.types
- Pagination
- Pagination.types
- Panel
- Panel.types
- Radios
- Radios.types
- GenericCardRenderer
- HealthcareCardTemplates
- HealthcarePlugin
- ResponsiveDataGridDemo
- ResponsiveDataGridGeneric.types
- ResponsiveDataGridHelpers
- ResponsiveDataGridTypes
- Select
- Select.types
- SkipLink.types
- AriaDataGridTypes
- AriaTabsDataGridDemo
- AriaTabsDataGridEnhancedDemo
- AriaTabsDataGridFactory
- AriaTabsDataGridPlugins
- AriaTabsDataGridTCH
- AriaTabsDataGridTypes
- HealthcareCardTemplates
- SortStatusControl
- SortStatusControl
- SortStatusControlTypes
- icons
- patient
- utils
- SpacingUtilities
- SpacingUtilities.types
- SummaryCard.types
- SummaryList
- SummaryList.types
- Table
- Table.types
- AriaTabs
- AriaTabsTypes
- Tabs
- Tabs.types
- Tag
- Tag.types
- TaskList
- Textarea
- Textarea.types
- WarningCallout
- WidthContainer
- WidthUtilities
- WidthUtilities.types
- ssr
- test-account-icon

### 🔄 Compatible with Hydration (3)
- Button - 0 minor issues
- VisuallyHiddenLiveRegion - 1 minor issues
- HeaderSearch - 1 minor issues

### 🔧 Requires Refactoring (10)
- **ChartWithTableTabs**: 3 issues (3 blocking)
- **useFocusNav**: 4 issues (2 blocking)
- **FontDebugger**: 6 issues (5 blocking)
- **GanttChart**: 11 issues (8 blocking)
- **Header**: 19 issues (9 blocking)
- **NavigationSplitView**: 28 issues (15 blocking)
- **NavigationSplitView.types**: 2 issues (2 blocking)
- **SkipLink**: 11 issues (8 blocking)
- **useIntelligentLayout**: 31 issues (18 blocking)
- **TransactionalPageTemplate**: 1 issues (1 blocking)

### 🖥️ Client-Only (1)
- useChartDimensions - Complex client interactions

## Detailed Component Analysis


### Account
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Account/Account.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Account.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Account/Account.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ActionLink
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/ActionLink/ActionLink.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ActionLink.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/ActionLink/ActionLink.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### BackLink
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/BackLink/BackLink.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### BackLink.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/BackLink/BackLink.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ForwardLink
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/BackLink/ForwardLink.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Breadcrumb
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Breadcrumb/Breadcrumb.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Breadcrumb.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Breadcrumb/Breadcrumb.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Button.test-types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Button/Button.test-types.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Button
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Button/Button.tsx`
- **Compatibility**: compatible-with-hydration
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Button.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Button/Button.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ButtonExamples
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Button/ButtonExamples.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ButtonSSR
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Button/ButtonSSR.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Card.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Card/Card.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### CareCard.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/CareCard/CareCard.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### CharacterCount
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/CharacterCount/CharacterCount.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 39): useEffect runs only on client side

#### Refactoring Actions:



### CharacterCount.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/CharacterCount/CharacterCount.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Checkbox
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Checkbox/Checkbox.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 56): useEffect runs only on client side

#### Refactoring Actions:



### Checkbox.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Checkbox/Checkbox.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Checkboxes.styles
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Checkboxes/Checkboxes.styles.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Checkboxes
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Checkboxes/Checkboxes.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Checkboxes.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Checkboxes/Checkboxes.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### CheckboxesCSS
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Checkboxes/CheckboxesCSS.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ContentsList
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/ContentsList/ContentsList.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ContentsList.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/ContentsList/ContentsList.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### DashboardSummaryGrid.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DashboardSummaryGrid/DashboardSummaryGrid.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ChartWithTableTabs
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/ChartWithTableTabs.tsx`
- **Compatibility**: requires-refactoring
- **Issues**: 3
- **Uses Hooks**: No
- **Browser APIs**: Yes
- **DOM Access**: No

#### Issues:
- **document-object** (Line 107): Direct document object access
- **document-object** (Line 112): Direct document object access
- **document-object** (Line 114): Direct document object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)


### FilterableLineChart
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/FilterableLineChart.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### LineChart
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/charts/LineChart.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### BandScalesProvider
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/core/BandScalesProvider.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ChartRoot
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/core/ChartRoot.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ScaleContext
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/core/ScaleContext.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### TooltipContext
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/core/TooltipContext.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 90): useEffect runs only on client side

#### Refactoring Actions:



### VisibilityContext
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/core/VisibilityContext.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### useChartDimensions
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/hooks/useChartDimensions.ts`
- **Compatibility**: client-only
- **Issues**: 2
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useLayoutEffect** (Line 23): useLayoutEffect does not run during SSR
- **resize-observer** (Line 25): ResizeObserver API usage

#### Refactoring Actions:
- wrap-use-client: Wrap component with "use client" directive (low complexity)


### useFocusNav
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/hooks/useFocusNav.ts`
- **Compatibility**: requires-refactoring
- **Issues**: 4
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 17): useEffect runs only on client side
- **window-object** (Line 18): Direct window object access
- **event-listener** (Line 18): Event listener setup
- **window-object** (Line 19): Direct window object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)


### Axis
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/primitives/Axis.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ChartContainer
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/primitives/ChartContainer.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### GridLines
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/primitives/GridLines.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### TooltipOverlay
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/primitives/TooltipOverlay.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### VisuallyHiddenLiveRegion
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/primitives/VisuallyHiddenLiveRegion.tsx`
- **Compatibility**: compatible-with-hydration
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 14): useEffect runs only on client side

#### Refactoring Actions:



### AreaSeriesPrimitive
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/series/AreaSeriesPrimitive.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 49): useEffect runs only on client side

#### Refactoring Actions:



### BarSeriesPrimitive
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/series/BarSeriesPrimitive.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 66): useEffect runs only on client side

#### Refactoring Actions:



### LineSeriesPrimitive
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/series/LineSeriesPrimitive.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 53): useEffect runs only on client side

#### Refactoring Actions:



### colors
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/utils/colors.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### scales
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DataVisualisation/utils/scales.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### DateInput
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DateInput/DateInput.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### DateInput.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DateInput/DateInput.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Details
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Details/Details.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### DoDontList
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/DoDontList/DoDontList.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ErrorMessage
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/ErrorMessage/ErrorMessage.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ErrorMessage.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/ErrorMessage/ErrorMessage.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ErrorSummary
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/ErrorSummary/ErrorSummary.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 19): useEffect runs only on client side

#### Refactoring Actions:



### ErrorSummary.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/ErrorSummary/ErrorSummary.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Expander
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Expander/Expander.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Fieldset
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Fieldset/Fieldset.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Fieldset.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Fieldset/Fieldset.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### FontDebugger
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/FontDebugger.tsx`
- **Compatibility**: requires-refactoring
- **Issues**: 6
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 11): useEffect runs only on client side
- **document-object** (Line 13): Direct document object access
- **document-object** (Line 18): Direct document object access
- **document-object** (Line 23): Direct document object access
- **document-object** (Line 56): Direct document object access
- **document-object** (Line 57): Direct document object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)
- dynamic-import: Consider lazy loading this component (medium complexity)


### Footer
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Footer/Footer.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Footer.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Footer/Footer.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### GanttChart-new
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/GanttChart/GanttChart-new.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### GanttChart
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/GanttChart/GanttChart.tsx`
- **Compatibility**: requires-refactoring
- **Issues**: 11
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: Yes

#### Issues:
- **document-object** (Line 87): Direct document object access
- **document-object** (Line 107): Direct document object access
- **useEffect** (Line 211): useEffect runs only on client side
- **document-object** (Line 239): Direct document object access
- **document-object** (Line 242): Direct document object access
- **document-object** (Line 248): Direct document object access
- **document-object** (Line 310): Direct document object access
- **document-object** (Line 313): Direct document object access
- **document-object** (Line 319): Direct document object access
- **useEffect** (Line 438): useEffect runs only on client side
- **resize-observer** (Line 441): ResizeObserver API usage

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)
- dynamic-import: Consider lazy loading this component (medium complexity)


### TaskBar-new
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/GanttChart/TaskBar-new.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### TaskBar
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/GanttChart/TaskBar.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Grid.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Grid/Grid.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Header
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Header/Header.tsx`
- **Compatibility**: requires-refactoring
- **Issues**: 19
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: Yes

#### Issues:
- **useEffect** (Line 46): useEffect runs only on client side
- **useEffect** (Line 54): useEffect runs only on client side
- **window-object** (Line 120): Direct window object access
- **useEffect** (Line 181): useEffect runs only on client side
- **document-object** (Line 192): Direct document object access
- **event-listener** (Line 192): Event listener setup
- **document-object** (Line 193): Direct document object access
- **useEffect** (Line 198): useEffect runs only on client side
- **window-object** (Line 224): Direct window object access
- **window-object** (Line 225): Direct window object access
- **media-query** (Line 225): matchMedia API usage
- **event-listener** (Line 236): Event listener setup
- **window-object** (Line 242): Direct window object access
- **event-listener** (Line 242): Event listener setup
- **window-object** (Line 245): Direct window object access
- **useEffect** (Line 263): useEffect runs only on client side
- **document-object** (Line 278): Direct document object access
- **event-listener** (Line 278): Event listener setup
- **document-object** (Line 279): Direct document object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)
- dynamic-import: Consider lazy loading this component (medium complexity)


### Header.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Header/Header.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### HeaderSSR
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Header/HeaderSSR.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### HeaderStatic
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Header/HeaderStatic.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### HeaderSearch
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/HeaderSearch/HeaderSearch.tsx`
- **Compatibility**: compatible-with-hydration
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 144): useEffect runs only on client side

#### Refactoring Actions:



### HeaderSearch.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/HeaderSearch/HeaderSearch.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Heading
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Heading/Heading.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Heading.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Heading/Heading.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Hero
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Hero/Hero.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Hero.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Hero/Hero.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Hint
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Hint/Hint.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Hint.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Hint/Hint.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Images
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Images/Images.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Input
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Input/Input.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 39): useEffect runs only on client side

#### Refactoring Actions:



### Input.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Input/Input.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### InsetText
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/InsetText/InsetText.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### InsetText.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/InsetText/InsetText.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Label
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Label/Label.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Label.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Label/Label.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### List
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/List/List.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### List.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/List/List.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### MainWrapper
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/MainWrapper/MainWrapper.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### MainWrapper.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/MainWrapper/MainWrapper.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### NHSThemeProvider
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/NHSThemeProvider.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 16): useEffect runs only on client side

#### Refactoring Actions:



### NavigationSplitView
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/NavigationSplitView/NavigationSplitView.tsx`
- **Compatibility**: requires-refactoring
- **Issues**: 28
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 85): useEffect runs only on client side
- **useEffect** (Line 153): useEffect runs only on client side
- **useEffect** (Line 226): useEffect runs only on client side
- **useEffect** (Line 244): useEffect runs only on client side
- **window-object** (Line 247): Direct window object access
- **window-object** (Line 256): Direct window object access
- **event-listener** (Line 256): Event listener setup
- **window-object** (Line 257): Direct window object access
- **useEffect** (Line 269): useEffect runs only on client side
- **useEffect** (Line 280): useEffect runs only on client side
- **localStorage** (Line 363): localStorage is not available during SSR
- **window-object** (Line 366): Direct window object access
- **localStorage** (Line 370): localStorage is not available during SSR
- **window-object** (Line 372): Direct window object access
- **localStorage** (Line 372): localStorage is not available during SSR
- **useEffect** (Line 379): useEffect runs only on client side
- **useEffect** (Line 383): useEffect runs only on client side
- **localStorage** (Line 386): localStorage is not available during SSR
- **window-object** (Line 387): Direct window object access
- **localStorage** (Line 387): localStorage is not available during SSR
- **window-object** (Line 390): Direct window object access
- **window-object** (Line 392): Direct window object access
- **window-object** (Line 392): Direct window object access
- **window-object** (Line 393): Direct window object access
- **useEffect** (Line 408): useEffect runs only on client side
- **useEffect** (Line 417): useEffect runs only on client side
- **useEffect** (Line 428): useEffect runs only on client side
- **useEffect** (Line 432): useEffect runs only on client side

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)
- dynamic-import: Consider lazy loading this component (medium complexity)


### NavigationSplitView.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/NavigationSplitView/NavigationSplitView.types.ts`
- **Compatibility**: requires-refactoring
- **Issues**: 2
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **localStorage** (Line 140): localStorage is not available during SSR
- **localStorage** (Line 141): localStorage is not available during SSR

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)


### PageTemplate
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/PageTemplate/PageTemplate.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### PageTemplate.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/PageTemplate/PageTemplate.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Pagination
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Pagination/Pagination.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Pagination.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Pagination/Pagination.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Panel
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Panel/Panel.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Panel.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Panel/Panel.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Radios
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Radios/Radios.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Radios.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Radios/Radios.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### GenericCardRenderer
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/ResponsiveDataGrid/GenericCardRenderer.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### HealthcareCardTemplates
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/ResponsiveDataGrid/HealthcareCardTemplates.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### HealthcarePlugin
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/ResponsiveDataGrid/HealthcarePlugin.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ResponsiveDataGridDemo
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/ResponsiveDataGrid/ResponsiveDataGridDemo.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ResponsiveDataGridGeneric.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/ResponsiveDataGrid/ResponsiveDataGridGeneric.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ResponsiveDataGridHelpers
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/ResponsiveDataGrid/ResponsiveDataGridHelpers.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ResponsiveDataGridTypes
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/ResponsiveDataGrid/ResponsiveDataGridTypes.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Select
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Select/Select.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Select.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Select/Select.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SkipLink
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SkipLink/SkipLink.tsx`
- **Compatibility**: requires-refactoring
- **Issues**: 11
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: Yes

#### Issues:
- **useEffect** (Line 34): useEffect runs only on client side
- **useEffect** (Line 38): useEffect runs only on client side
- **document-object** (Line 42): Direct document object access
- **document-object** (Line 43): Direct document object access
- **document-object** (Line 52): Direct document object access
- **window-object** (Line 65): Direct window object access
- **window-object** (Line 66): Direct window object access
- **document-object** (Line 82): Direct document object access
- **event-listener** (Line 84): Event listener setup
- **window-object** (Line 94): Direct window object access
- **window-object** (Line 95): Direct window object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)
- dynamic-import: Consider lazy loading this component (medium complexity)


### SkipLink.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SkipLink/SkipLink.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AriaDataGridTypes
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SortableDataTable/AriaDataGridTypes.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AriaTabsDataGridDemo
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SortableDataTable/AriaTabsDataGridDemo.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AriaTabsDataGridEnhancedDemo
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SortableDataTable/AriaTabsDataGridEnhancedDemo.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AriaTabsDataGridFactory
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SortableDataTable/AriaTabsDataGridFactory.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AriaTabsDataGridPlugins
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SortableDataTable/AriaTabsDataGridPlugins.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AriaTabsDataGridTCH
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SortableDataTable/AriaTabsDataGridTCH.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AriaTabsDataGridTypes
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SortableDataTable/AriaTabsDataGridTypes.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### HealthcareCardTemplates
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SortableDataTable/HealthcareCardTemplates.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SortStatusControl
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SortableDataTable/SortStatusControl/SortStatusControl.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SortStatusControl
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SortableDataTable/SortStatusControl.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SortStatusControlTypes
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SortableDataTable/SortStatusControlTypes.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### useIntelligentLayout
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SortableDataTable/hooks/useIntelligentLayout.ts`
- **Compatibility**: requires-refactoring
- **Issues**: 31
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: Yes

#### Issues:
- **window-object** (Line 61): Direct window object access
- **window-object** (Line 62): Direct window object access
- **navigator** (Line 67): Navigator API access
- **window-object** (Line 68): Direct window object access
- **window-object** (Line 69): Direct window object access
- **media-query** (Line 69): matchMedia API usage
- **window-object** (Line 70): Direct window object access
- **media-query** (Line 70): matchMedia API usage
- **useEffect** (Line 167): useEffect runs only on client side
- **window-object** (Line 178): Direct window object access
- **event-listener** (Line 178): Event listener setup
- **window-object** (Line 179): Direct window object access
- **event-listener** (Line 179): Event listener setup
- **window-object** (Line 182): Direct window object access
- **media-query** (Line 182): matchMedia API usage
- **window-object** (Line 183): Direct window object access
- **media-query** (Line 183): matchMedia API usage
- **event-listener** (Line 187): Event listener setup
- **event-listener** (Line 188): Event listener setup
- **window-object** (Line 191): Direct window object access
- **window-object** (Line 192): Direct window object access
- **useEffect** (Line 200): useEffect runs only on client side
- **resize-observer** (Line 226): ResizeObserver API usage
- **resize-observer** (Line 228): ResizeObserver API usage
- **document-object** (Line 233): Direct document object access
- **document-object** (Line 267): Direct document object access
- **document-object** (Line 273): Direct document object access
- **document-object** (Line 277): Direct document object access
- **document-object** (Line 283): Direct document object access
- **document-object** (Line 289): Direct document object access
- **document-object** (Line 294): Direct document object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)
- dynamic-import: Consider lazy loading this component (medium complexity)


### icons
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SortableDataTable/icons.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### patient
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SortableDataTable/patient.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### utils
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SortableDataTable/utils.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SpacingUtilities
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SpacingUtilities/SpacingUtilities.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SpacingUtilities.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SpacingUtilities/SpacingUtilities.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SummaryCard.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SummaryCard/SummaryCard.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SummaryList
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SummaryList/SummaryList.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SummaryList.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/SummaryList/SummaryList.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Table
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Tables/Table.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Table.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Tables/Table.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AriaTabs
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Tabs/AriaTabs.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AriaTabsTypes
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Tabs/AriaTabsTypes.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Tabs
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Tabs/Tabs.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Tabs.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Tabs/Tabs.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Tag
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Tag/Tag.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Tag.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Tag/Tag.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### TaskList
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/TaskList/TaskList.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Textarea
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Textarea/Textarea.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Textarea.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/Textarea/Textarea.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### TransactionalPageTemplate
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/TransactionalPageTemplate/TransactionalPageTemplate.tsx`
- **Compatibility**: requires-refactoring
- **Issues**: 1
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **window-object** (Line 106): Direct window object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)


### WarningCallout
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/WarningCallout/WarningCallout.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### WidthContainer
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/WidthContainer/WidthContainer.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### WidthUtilities
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/WidthUtilities/WidthUtilities.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### WidthUtilities.types
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/WidthUtilities/WidthUtilities.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ssr
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/ssr.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### test-account-icon
- **File**: `/home/runner/work/nhs-fdp-design-system/nhs-fdp-design-system/src/components/test-account-icon.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



## Next Steps

1. **Quick Wins**: Fix auto-fixable issues in 7 components
2. **High Priority**: Address blocking issues in refactoring-required components
3. **Client Components**: Convert 1 components to client-only
4. **Testing**: Set up SSR testing pipeline for all compatible components

## Automated Fixes Available

93 issues can be automatically fixed.
