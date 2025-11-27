# NHS FDP Design System - SSR Compatibility Analysis

## Executive Summary

- **Total Components Analyzed**: 283
- **Overall SSR Compatibility**: 93%
- **Fully Compatible**: 258 (91%)
- **Compatible with Hydration**: 5 (2%)
- **Client-Only**: 1 (0%)
- **Requires Refactoring**: 19 (7%)

## Quick Wins 🚀

Components that can be easily made SSR-compatible:

- **ChartWithTableTabs**: 3/3 issues auto-fixable
- **spc**: 2/2 issues auto-fixable
- **boundaryWindows**: 1/1 issues auto-fixable
- **preprocess**: 1/1 issues auto-fixable
- **types**: 3/3 issues auto-fixable
- **spcTestCases**: 1/1 issues auto-fixable
- **SPCSpark.types**: 1/1 issues auto-fixable
- **patterns**: 3/3 issues auto-fixable
- **GanttChart**: 12/14 issues auto-fixable
- **NavigationSplitView.types**: 2/2 issues auto-fixable
- **ProductRoadmap**: 4/4 issues auto-fixable
- **SkipLink**: 9/11 issues auto-fixable
- **useIntelligentLayout**: 34/36 issues auto-fixable
- **TransactionalPageTemplate**: 1/1 issues auto-fixable

## Priority Issues

### Blocking Issues (Prevent SSR)
- **window-object**: Direct window object access
  ```
  const t = window.setTimeout(apply, delay);
  ```
  **Fix**: Add typeof window !== "undefined" check or use in useEffect

- **window-object**: Direct window object access
  ```
  return () => window.clearTimeout(t);
  ```
  **Fix**: Add typeof window !== "undefined" check or use in useEffect

- **document-object**: Direct document object access
  ```
  const link = document.createElement("a");
  ```
  **Fix**: Add typeof document !== "undefined" check or use in useEffect

- **document-object**: Direct document object access
  ```
  const parent: HTMLElement | null = (document.body as HTMLElement | null) || (document.documentElement as HTMLElement | null);
  ```
  **Fix**: Add typeof document !== "undefined" check or use in useEffect

- **document-object**: Direct document object access
  ```
  const parent: HTMLElement | null = (document.body as HTMLElement | null) || (document.documentElement as HTMLElement | null);
  ```
  **Fix**: Add typeof document !== "undefined" check or use in useEffect


## Component Breakdown

### ✅ Fully SSR Compatible (258)
- Account
- Account.types
- ActionLink
- ActionLink.types
- BackLink
- BackLink.types
- ForwardLink
- Breadcrumb
- Breadcrumb.types
- Button.schema
- Button.server
- Button.test-types
- Button.types
- ButtonExamples
- ButtonSSR
- Card.types
- CareCard.types
- CharacterCount.schema
- CharacterCount
- CharacterCount.types
- Checkbox
- Checkbox.types
- Checkboxes.schema
- Checkboxes.server
- Checkboxes.styles
- Checkboxes
- Checkboxes.types
- CheckboxesCSS
- ContentsList
- ContentsList.types
- DashboardSummaryGrid.types
- FilterableLineChart
- Axis.tokens
- Axis
- Axis.types
- ChartContainer
- ChartNoScript
- FilterableLineChart
- GridLines
- GridLines
- LineChart
- RunChart
- runRules
- InternalSPC.types
- SPCChart.constants
- SPCChart.props
- SPCChart
- SPCChart.types
- SPCSignalsInspector
- DiagnosticsPanel
- EmbeddedIconsRow
- descriptors
- gradientSequences
- useZeroAxisBreak
- SPCRuleClashExamples
- spcAssurance
- spcCandidates
- spcConstants
- spcDescriptors
- spcProvenance
- spcSqlCompat
- spcUtils
- g.fixture
- g.sql.canonical.fixture
- t.fixture
- t.sql.canonical.fixture
- adapter
- assurance
- conflict
- constants
- detector
- RunVsSPCTransitionExample
- SPCChartAutoRecalcAppendExample
- SPCChartAutoRecalcBasicExample
- SPCChartAutoRecalcMinGapExample
- SPCChartAutoRecalcMultiExample
- SPCChartAutoRecalcTunedExample
- SPCChartEarlyWaitTimeExample
- SPCChartIndividualsExample
- SPCChartPhasedBaselineExample
- SPCChartRareEventExample
- SPCChartStableWaitTimeExample
- SPCChartWarningsPanelExample
- SPCRetroOverlayToggleDemo
- SPCVisualsScenarioToggleDemo
- TrendGatingExample
- staffSicknessRuleClash
- SPCRuleClash.examples
- TrendSegmentation.HighIsGoodExample
- engine
- limits
- normaliser
- trendSegments
- visualCategories
- presets
- retroOverlay
- groupedDataset
- healthcareDatasets
- tgParityFixtures
- variationIconColours
- autoRecalc
- direction
- utils
- public
- parsedDataset
- types
- domain
- embeddedIcon
- SPCAssuranceIcon
- SPCConstants
- SPCIcon
- ShiftPolarityExamples
- tokenUtils
- SPCSpark
- icons
- autoMetrics
- BandScalesProvider
- ChartRoot
- ScaleContext
- TooltipContext
- VisibilityContext
- useSpc
- wizardEngine
- wizardTypes
- AlertMarkers
- TooltipOverlay
- AreaSeriesPrimitive
- BarSeriesPrimitive
- LineSeriesPrimitive
- deterministic
- colors
- computeContinuousBarWidth
- scales
- stack
- ReviewAnswers
- WizardProgress
- DateInput.schema
- DateInput.server
- DateInput
- DateInput.types
- Details.schema
- Details
- DoDontList
- ErrorMessage.schema
- ErrorMessage
- ErrorMessage.types
- ErrorSummary.schema
- ErrorSummary.server
- ErrorSummary
- ErrorSummary.types
- Expander
- Fieldset.schema
- Fieldset
- Fieldset.types
- Footer
- Footer.types
- FormNavButtonBar.server
- FormNavButtonBar.types
- GanttChart-new
- TaskBar-new
- TaskBar
- Grid.types
- Header.render.server
- Header.render
- Header.server
- Header.types
- HeaderSearch.types
- Heading.schema
- Heading
- Heading.types
- Hero
- Hero.types
- Hint.schema
- Hint
- Hint.types
- Images
- Input.schema
- Input.server
- Input
- Input.types
- InsetText.schema
- InsetText
- InsetText.types
- Label.schema
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
- Panel.schema
- Panel
- Panel.types
- ProductRoadmap.types
- Radios.render
- Radios.schema
- Radios.server
- Radios
- Radios.types
- GenericCardRenderer
- HealthcareCardTemplates
- HealthcarePlugin
- ResponsiveDataGridDemo
- ResponsiveDataGridGeneric.types
- ResponsiveDataGridHelpers
- ResponsiveDataGridTypes
- Select.schema
- Select
- Select.types
- SkipLink.server
- SkipLink.types
- SlotMatrix
- SlotMatrix.types
- SlotMatrixToolbar
- generateSlotMatrixMocks
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
- Tag.schema
- Tag
- Tag.types
- TaskList
- Textarea.schema
- Textarea
- Textarea.types
- WarningCallout
- WidthContainer
- WidthUtilities
- WidthUtilities.types
- ssr
- test-account-icon

### 🔄 Compatible with Hydration (5)
- Button - 0 minor issues
- InternalSPC - 0 minor issues
- SPCTooltipOverlay - 2 minor issues
- VisuallyHiddenLiveRegion - 1 minor issues
- HeaderSearch - 1 minor issues

### 🔧 Requires Refactoring (19)
- **ChartEnhancer**: 3 issues (2 blocking)
- **ChartWithTableTabs**: 3 issues (3 blocking)
- **spc**: 2 issues (2 blocking)
- **boundaryWindows**: 1 issues (1 blocking)
- **preprocess**: 1 issues (1 blocking)
- **types**: 3 issues (3 blocking)
- **spcTestCases**: 1 issues (1 blocking)
- **SPCSpark.types**: 1 issues (1 blocking)
- **useFocusNav**: 4 issues (2 blocking)
- **patterns**: 3 issues (3 blocking)
- **FontDebugger**: 5 issues (3 blocking)
- **GanttChart**: 14 issues (8 blocking)
- **Header**: 13 issues (6 blocking)
- **NavigationSplitView**: 38 issues (20 blocking)
- **NavigationSplitView.types**: 2 issues (2 blocking)
- **ProductRoadmap**: 4 issues (3 blocking)
- **SkipLink**: 11 issues (8 blocking)
- **useIntelligentLayout**: 36 issues (23 blocking)
- **TransactionalPageTemplate**: 1 issues (1 blocking)

### 🖥️ Client-Only (1)
- useChartDimensions - Complex client interactions

## Detailed Component Analysis


### Account
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Account/Account.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Account.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Account/Account.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ActionLink
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ActionLink/ActionLink.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ActionLink.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ActionLink/ActionLink.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### BackLink
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/BackLink/BackLink.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### BackLink.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/BackLink/BackLink.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ForwardLink
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/BackLink/ForwardLink.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Breadcrumb
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Breadcrumb/Breadcrumb.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Breadcrumb.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Breadcrumb/Breadcrumb.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Button.schema
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Button/Button.schema.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Button.server
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Button/Button.server.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Button.test-types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Button/Button.test-types.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Button
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Button/Button.tsx`
- **Compatibility**: compatible-with-hydration
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Button.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Button/Button.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ButtonExamples
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Button/ButtonExamples.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ButtonSSR
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Button/ButtonSSR.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Card.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Card/Card.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### CareCard.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/CareCard/CareCard.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### CharacterCount.schema
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/CharacterCount/CharacterCount.schema.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### CharacterCount
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/CharacterCount/CharacterCount.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 42): useEffect runs only on client side

#### Refactoring Actions:



### CharacterCount.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/CharacterCount/CharacterCount.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Checkbox
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Checkbox/Checkbox.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 56): useEffect runs only on client side

#### Refactoring Actions:



### Checkbox.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Checkbox/Checkbox.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Checkboxes.schema
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Checkboxes/Checkboxes.schema.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Checkboxes.server
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Checkboxes/Checkboxes.server.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Checkboxes.styles
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Checkboxes/Checkboxes.styles.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Checkboxes
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Checkboxes/Checkboxes.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Checkboxes.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Checkboxes/Checkboxes.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### CheckboxesCSS
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Checkboxes/CheckboxesCSS.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ContentsList
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ContentsList/ContentsList.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ContentsList.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ContentsList/ContentsList.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### DashboardSummaryGrid.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DashboardSummaryGrid/DashboardSummaryGrid.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### FilterableLineChart
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/FilterableLineChart.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Axis.tokens
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/Axis/Axis.tokens.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Axis
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/Axis/Axis.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Axis.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/Axis/Axis.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ChartContainer
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/ChartContainer.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ChartEnhancer
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/ChartEnhancer/ChartEnhancer.tsx`
- **Compatibility**: requires-refactoring
- **Issues**: 3
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 33): useEffect runs only on client side
- **window-object** (Line 51): Direct window object access
- **window-object** (Line 52): Direct window object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)


### ChartNoScript
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/ChartNoScript/ChartNoScript.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ChartWithTableTabs
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/ChartWithTableTabs/ChartWithTableTabs.tsx`
- **Compatibility**: requires-refactoring
- **Issues**: 3
- **Uses Hooks**: No
- **Browser APIs**: Yes
- **DOM Access**: No

#### Issues:
- **document-object** (Line 145): Direct document object access
- **document-object** (Line 150): Direct document object access
- **document-object** (Line 150): Direct document object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)


### FilterableLineChart
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/FilterableLineChart/FilterableLineChart.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### GridLines
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/GridLines/GridLines.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### GridLines
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/GridlLines/GridLines.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### LineChart
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/LineChart/LineChart.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### RunChart
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/RunChart/RunChart.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### runRules
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/RunChart/runRules.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### InternalSPC
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/InternalSPC.tsx`
- **Compatibility**: compatible-with-hydration
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: Yes

#### Issues:


#### Refactoring Actions:



### InternalSPC.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/InternalSPC.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCChart.constants
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/SPCChart.constants.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCChart.props
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/SPCChart.props.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCChart
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/SPCChart.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCChart.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/SPCChart.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCSignalsInspector
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/SPCSignalsInspector.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 81): useEffect runs only on client side

#### Refactoring Actions:



### SPCTooltipOverlay
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/SPCTooltipOverlay.tsx`
- **Compatibility**: compatible-with-hydration
- **Issues**: 2
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 67): useEffect runs only on client side
- **useEffect** (Line 98): useEffect runs only on client side

#### Refactoring Actions:



### DiagnosticsPanel
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/components/DiagnosticsPanel.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 34): useEffect runs only on client side

#### Refactoring Actions:



### EmbeddedIconsRow
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/components/EmbeddedIconsRow.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### descriptors
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/descriptors.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### gradientSequences
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/gradientSequences.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### useZeroAxisBreak
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/hooks/useZeroAxisBreak.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCRuleClashExamples
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic/SPCRuleClashExamples.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### spc
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic/spc.ts`
- **Compatibility**: requires-refactoring
- **Issues**: 2
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **window-object** (Line 399): Direct window object access
- **window-object** (Line 418): Direct window object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)


### spcAssurance
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic/spcAssurance.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### spcCandidates
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic/spcCandidates.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### spcConstants
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic/spcConstants.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### spcDescriptors
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic/spcDescriptors.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### spcProvenance
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic/spcProvenance.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### spcSqlCompat
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic/spcSqlCompat.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### spcUtils
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic/spcUtils.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### g.fixture
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/__tests__/fixtures/g.fixture.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### g.sql.canonical.fixture
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/__tests__/fixtures/g.sql.canonical.fixture.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### t.fixture
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/__tests__/fixtures/t.fixture.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### t.sql.canonical.fixture
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/__tests__/fixtures/t.sql.canonical.fixture.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### adapter
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/adapter.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### assurance
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/assurance.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### conflict
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/conflict.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### constants
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/constants.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### detector
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/detector.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### RunVsSPCTransitionExample
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/doc-examples/RunVsSPCTransitionExample.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCChartAutoRecalcAppendExample
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/doc-examples/SPCChartAutoRecalcAppendExample.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCChartAutoRecalcBasicExample
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/doc-examples/SPCChartAutoRecalcBasicExample.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCChartAutoRecalcMinGapExample
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/doc-examples/SPCChartAutoRecalcMinGapExample.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCChartAutoRecalcMultiExample
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/doc-examples/SPCChartAutoRecalcMultiExample.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCChartAutoRecalcTunedExample
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/doc-examples/SPCChartAutoRecalcTunedExample.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCChartEarlyWaitTimeExample
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/doc-examples/SPCChartEarlyWaitTimeExample.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCChartIndividualsExample
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/doc-examples/SPCChartIndividualsExample.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCChartPhasedBaselineExample
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/doc-examples/SPCChartPhasedBaselineExample.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCChartRareEventExample
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/doc-examples/SPCChartRareEventExample.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCChartStableWaitTimeExample
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/doc-examples/SPCChartStableWaitTimeExample.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCChartWarningsPanelExample
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/doc-examples/SPCChartWarningsPanelExample.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCRetroOverlayToggleDemo
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/doc-examples/SPCRetroOverlayToggleDemo.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCVisualsScenarioToggleDemo
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/doc-examples/SPCVisualsScenarioToggleDemo.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 55): useEffect runs only on client side

#### Refactoring Actions:



### TrendGatingExample
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/doc-examples/TrendGatingExample.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### staffSicknessRuleClash
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/docs/data/staffSicknessRuleClash.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCRuleClash.examples
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/docs/examples/SPCRuleClash.examples.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### TrendSegmentation.HighIsGoodExample
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/docs/examples/TrendSegmentation.HighIsGoodExample.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### engine
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/engine.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### limits
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/limits.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### normaliser
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/normaliser.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### boundaryWindows
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/postprocess/boundaryWindows.ts`
- **Compatibility**: requires-refactoring
- **Issues**: 1
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **window-object** (Line 15): Direct window object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)


### trendSegments
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/postprocess/trendSegments.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### visualCategories
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/postprocess/visualCategories.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### preprocess
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/preprocess.ts`
- **Compatibility**: requires-refactoring
- **Issues**: 1
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **window-object** (Line 25): Direct window object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)


### presets
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/presets.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### retroOverlay
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/retroOverlay.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### groupedDataset
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/storybook/data/groupedDataset.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### healthcareDatasets
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/storybook/data/healthcareDatasets.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### tgParityFixtures
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/storybook/data/tgParityFixtures.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### variationIconColours
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/storybook/data/variationIconColours.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/types.ts`
- **Compatibility**: requires-refactoring
- **Issues**: 3
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **window-object** (Line 149): Direct window object access
- **window-object** (Line 169): Direct window object access
- **window-object** (Line 222): Direct window object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)


### autoRecalc
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/utils/autoRecalc.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### direction
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/utils/direction.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### utils
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/utils.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### public
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/public.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### parsedDataset
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/test-data/parsedDataset.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### spcTestCases
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/test-data/spcTestCases.ts`
- **Compatibility**: requires-refactoring
- **Issues**: 1
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **document-object** (Line 2): Direct document object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)


### types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### domain
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/utils/domain.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### embeddedIcon
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCChart/utils/embeddedIcon.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCAssuranceIcon
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCIcons/SPCAssuranceIcon.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCConstants
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCIcons/SPCConstants.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCIcon
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCIcons/SPCIcon.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ShiftPolarityExamples
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCIcons/examples/ShiftPolarityExamples.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### tokenUtils
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCIcons/tokenUtils.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SPCSpark
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCSpark/SPCSpark.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 283): useEffect runs only on client side

#### Refactoring Actions:



### SPCSpark.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/SPCSpark/SPCSpark.types.ts`
- **Compatibility**: requires-refactoring
- **Issues**: 1
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **window-object** (Line 44): Direct window object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)


### icons
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/icons.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### autoMetrics
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/charts/SPC/utils/autoMetrics.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### BandScalesProvider
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/core/BandScalesProvider.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ChartRoot
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/core/ChartRoot.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ScaleContext
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/core/ScaleContext.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### TooltipContext
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/core/TooltipContext.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 113): useEffect runs only on client side

#### Refactoring Actions:



### VisibilityContext
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/core/VisibilityContext.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### useChartDimensions
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/hooks/useChartDimensions.ts`
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
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/hooks/useFocusNav.ts`
- **Compatibility**: requires-refactoring
- **Issues**: 4
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 17): useEffect runs only on client side
- **window-object** (Line 19): Direct window object access
- **event-listener** (Line 19): Event listener setup
- **window-object** (Line 20): Direct window object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)


### useSpc
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/hooks/useSpc.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### wizardEngine
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/logic/wizardEngine.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### wizardTypes
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/logic/wizardTypes.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AlertMarkers
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/primitives/AlertMarkers.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### TooltipOverlay
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/primitives/TooltipOverlay.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### VisuallyHiddenLiveRegion
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/primitives/VisuallyHiddenLiveRegion.tsx`
- **Compatibility**: compatible-with-hydration
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 14): useEffect runs only on client side

#### Refactoring Actions:



### AreaSeriesPrimitive
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/series/AreaSeriesPrimitive.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 67): useEffect runs only on client side

#### Refactoring Actions:



### BarSeriesPrimitive
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/series/BarSeriesPrimitive.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 112): useEffect runs only on client side

#### Refactoring Actions:



### LineSeriesPrimitive
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/series/LineSeriesPrimitive.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 74): useEffect runs only on client side

#### Refactoring Actions:



### deterministic
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/stories/utils/deterministic.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### colors
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/utils/colors.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### computeContinuousBarWidth
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/utils/computeContinuousBarWidth.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### patterns
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/utils/patterns.ts`
- **Compatibility**: requires-refactoring
- **Issues**: 3
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: Yes

#### Issues:
- **document-object** (Line 125): Direct document object access
- **document-object** (Line 130): Direct document object access
- **document-object** (Line 140): Direct document object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)


### scales
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/utils/scales.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### stack
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/utils/stack.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ReviewAnswers
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/wizard/ReviewAnswers.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### WizardProgress
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DataVisualisation/wizard/WizardProgress.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### DateInput.schema
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DateInput/DateInput.schema.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### DateInput.server
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DateInput/DateInput.server.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### DateInput
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DateInput/DateInput.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### DateInput.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DateInput/DateInput.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Details.schema
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Details/Details.schema.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Details
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Details/Details.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### DoDontList
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/DoDontList/DoDontList.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ErrorMessage.schema
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ErrorMessage/ErrorMessage.schema.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ErrorMessage
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ErrorMessage/ErrorMessage.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ErrorMessage.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ErrorMessage/ErrorMessage.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ErrorSummary.schema
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ErrorSummary/ErrorSummary.schema.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ErrorSummary.server
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ErrorSummary/ErrorSummary.server.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ErrorSummary
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ErrorSummary/ErrorSummary.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 19): useEffect runs only on client side

#### Refactoring Actions:



### ErrorSummary.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ErrorSummary/ErrorSummary.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Expander
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Expander/Expander.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Fieldset.schema
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Fieldset/Fieldset.schema.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Fieldset
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Fieldset/Fieldset.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Fieldset.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Fieldset/Fieldset.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### FontDebugger
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/FontDebugger.tsx`
- **Compatibility**: requires-refactoring
- **Issues**: 5
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 12): useEffect runs only on client side
- **document-object** (Line 17): Direct document object access
- **document-object** (Line 22): Direct document object access
- **document-object** (Line 28): Direct document object access
- **useEffect** (Line 32): useEffect runs only on client side

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)


### Footer
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Footer/Footer.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Footer.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Footer/Footer.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### FormNavButtonBar.server
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/FormNavButtonBar/FormNavButtonBar.server.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### FormNavButtonBar.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/FormNavButtonBar/FormNavButtonBar.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### GanttChart-new
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/GanttChart/GanttChart-new.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### GanttChart
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/GanttChart/GanttChart.tsx`
- **Compatibility**: requires-refactoring
- **Issues**: 14
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: Yes

#### Issues:
- **document-object** (Line 88): Direct document object access
- **document-object** (Line 108): Direct document object access
- **useEffect** (Line 211): useEffect runs only on client side
- **document-object** (Line 240): Direct document object access
- **document-object** (Line 245): Direct document object access
- **document-object** (Line 253): Direct document object access
- **document-object** (Line 317): Direct document object access
- **document-object** (Line 322): Direct document object access
- **document-object** (Line 330): Direct document object access
- **useEffect** (Line 450): useEffect runs only on client side
- **resize-observer** (Line 453): ResizeObserver API usage
- **resize-observer** (Line 454): ResizeObserver API usage
- **resize-observer** (Line 454): ResizeObserver API usage
- **resize-observer** (Line 454): ResizeObserver API usage

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)
- dynamic-import: Consider lazy loading this component (medium complexity)


### TaskBar-new
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/GanttChart/TaskBar-new.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### TaskBar
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/GanttChart/TaskBar.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Grid.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Grid/Grid.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Header.render.server
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Header/Header.render.server.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Header.render
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Header/Header.render.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Header.server
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Header/Header.server.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Header
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Header/Header.tsx`
- **Compatibility**: requires-refactoring
- **Issues**: 13
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: Yes

#### Issues:
- **useEffect** (Line 40): useEffect runs only on client side
- **useEffect** (Line 48): useEffect runs only on client side
- **document-object** (Line 59): Direct document object access
- **event-listener** (Line 59): Event listener setup
- **document-object** (Line 60): Direct document object access
- **document-object** (Line 89): Direct document object access
- **window-object** (Line 104): Direct window object access
- **resize-observer** (Line 124): ResizeObserver API usage
- **useEffect** (Line 125): useEffect runs only on client side
- **window-object** (Line 133): Direct window object access
- **resize-observer** (Line 143): ResizeObserver API usage
- **window-object** (Line 150): Direct window object access
- **useEffect** (Line 156): useEffect runs only on client side

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)
- dynamic-import: Consider lazy loading this component (medium complexity)


### Header.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Header/Header.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### HeaderSearch
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/HeaderSearch/HeaderSearch.tsx`
- **Compatibility**: compatible-with-hydration
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 162): useEffect runs only on client side

#### Refactoring Actions:



### HeaderSearch.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/HeaderSearch/HeaderSearch.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Heading.schema
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Heading/Heading.schema.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Heading
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Heading/Heading.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Heading.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Heading/Heading.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Hero
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Hero/Hero.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Hero.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Hero/Hero.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Hint.schema
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Hint/Hint.schema.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Hint
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Hint/Hint.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Hint.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Hint/Hint.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Images
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Images/Images.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Input.schema
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Input/Input.schema.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Input.server
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Input/Input.server.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Input
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Input/Input.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 39): useEffect runs only on client side

#### Refactoring Actions:



### Input.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Input/Input.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### InsetText.schema
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/InsetText/InsetText.schema.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### InsetText
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/InsetText/InsetText.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### InsetText.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/InsetText/InsetText.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Label.schema
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Label/Label.schema.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Label
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Label/Label.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Label.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Label/Label.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### List
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/List/List.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### List.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/List/List.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### MainWrapper
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/MainWrapper/MainWrapper.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### MainWrapper.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/MainWrapper/MainWrapper.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### NHSThemeProvider
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/NHSThemeProvider.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 1
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 16): useEffect runs only on client side

#### Refactoring Actions:



### NavigationSplitView
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/NavigationSplitView/NavigationSplitView.tsx`
- **Compatibility**: requires-refactoring
- **Issues**: 38
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: No

#### Issues:
- **useEffect** (Line 106): useEffect runs only on client side
- **useEffect** (Line 154): useEffect runs only on client side
- **document-object** (Line 220): Direct document object access
- **document-object** (Line 225): Direct document object access
- **event-listener** (Line 255): Event listener setup
- **document-object** (Line 272): Direct document object access
- **document-object** (Line 275): Direct document object access
- **event-listener** (Line 298): Event listener setup
- **useEffect** (Line 638): useEffect runs only on client side
- **useEffect** (Line 643): useEffect runs only on client side
- **useEffect** (Line 656): useEffect runs only on client side
- **useEffect** (Line 798): useEffect runs only on client side
- **useEffect** (Line 820): useEffect runs only on client side
- **window-object** (Line 823): Direct window object access
- **window-object** (Line 832): Direct window object access
- **event-listener** (Line 832): Event listener setup
- **window-object** (Line 833): Direct window object access
- **useEffect** (Line 858): useEffect runs only on client side
- **useEffect** (Line 872): useEffect runs only on client side
- **document-object** (Line 881): Direct document object access
- **localStorage** (Line 991): localStorage is not available during SSR
- **window-object** (Line 998): Direct window object access
- **localStorage** (Line 1005): localStorage is not available during SSR
- **window-object** (Line 1010): Direct window object access
- **localStorage** (Line 1010): localStorage is not available during SSR
- **useEffect** (Line 1023): useEffect runs only on client side
- **useEffect** (Line 1031): useEffect runs only on client side
- **localStorage** (Line 1035): localStorage is not available during SSR
- **window-object** (Line 1039): Direct window object access
- **localStorage** (Line 1039): localStorage is not available during SSR
- **window-object** (Line 1046): Direct window object access
- **window-object** (Line 1048): Direct window object access
- **window-object** (Line 1048): Direct window object access
- **window-object** (Line 1049): Direct window object access
- **useEffect** (Line 1075): useEffect runs only on client side
- **useEffect** (Line 1086): useEffect runs only on client side
- **useEffect** (Line 1099): useEffect runs only on client side
- **useEffect** (Line 1103): useEffect runs only on client side

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)
- dynamic-import: Consider lazy loading this component (medium complexity)


### NavigationSplitView.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/NavigationSplitView/NavigationSplitView.types.ts`
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
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/PageTemplate/PageTemplate.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### PageTemplate.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/PageTemplate/PageTemplate.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Pagination
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Pagination/Pagination.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Pagination.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Pagination/Pagination.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Panel.schema
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Panel/Panel.schema.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Panel
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Panel/Panel.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Panel.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Panel/Panel.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ProductRoadmap
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ProductRoadmap/ProductRoadmap.tsx`
- **Compatibility**: requires-refactoring
- **Issues**: 4
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: No

#### Issues:
- **window-object** (Line 116): Direct window object access
- **window-object** (Line 117): Direct window object access
- **media-query** (Line 117): matchMedia API usage
- **document-object** (Line 120): Direct document object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)


### ProductRoadmap.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ProductRoadmap/ProductRoadmap.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Radios.render
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Radios/Radios.render.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Radios.schema
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Radios/Radios.schema.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Radios.server
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Radios/Radios.server.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Radios
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Radios/Radios.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Radios.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Radios/Radios.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### GenericCardRenderer
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ResponsiveDataGrid/GenericCardRenderer.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### HealthcareCardTemplates
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ResponsiveDataGrid/HealthcareCardTemplates.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### HealthcarePlugin
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ResponsiveDataGrid/HealthcarePlugin.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ResponsiveDataGridDemo
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ResponsiveDataGrid/ResponsiveDataGridDemo.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ResponsiveDataGridGeneric.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ResponsiveDataGrid/ResponsiveDataGridGeneric.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ResponsiveDataGridHelpers
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ResponsiveDataGrid/ResponsiveDataGridHelpers.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ResponsiveDataGridTypes
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ResponsiveDataGrid/ResponsiveDataGridTypes.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Select.schema
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Select/Select.schema.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Select
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Select/Select.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Select.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Select/Select.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SkipLink.server
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SkipLink/SkipLink.server.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SkipLink
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SkipLink/SkipLink.tsx`
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
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SkipLink/SkipLink.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SlotMatrix
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SlotMatrix/SlotMatrix.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SlotMatrix.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SlotMatrix/SlotMatrix.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SlotMatrixToolbar
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SlotMatrix/SlotMatrixToolbar.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### generateSlotMatrixMocks
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SlotMatrix/generateSlotMatrixMocks.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AriaDataGridTypes
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SortableDataTable/AriaDataGridTypes.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AriaTabsDataGridDemo
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SortableDataTable/AriaTabsDataGridDemo.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AriaTabsDataGridEnhancedDemo
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SortableDataTable/AriaTabsDataGridEnhancedDemo.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AriaTabsDataGridFactory
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SortableDataTable/AriaTabsDataGridFactory.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AriaTabsDataGridPlugins
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SortableDataTable/AriaTabsDataGridPlugins.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AriaTabsDataGridTCH
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SortableDataTable/AriaTabsDataGridTCH.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AriaTabsDataGridTypes
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SortableDataTable/AriaTabsDataGridTypes.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### HealthcareCardTemplates
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SortableDataTable/HealthcareCardTemplates.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SortStatusControl
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SortableDataTable/SortStatusControl/SortStatusControl.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SortStatusControl
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SortableDataTable/SortStatusControl.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SortStatusControlTypes
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SortableDataTable/SortStatusControlTypes.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### useIntelligentLayout
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SortableDataTable/hooks/useIntelligentLayout.ts`
- **Compatibility**: requires-refactoring
- **Issues**: 36
- **Uses Hooks**: Yes
- **Browser APIs**: Yes
- **DOM Access**: Yes

#### Issues:
- **window-object** (Line 61): Direct window object access
- **window-object** (Line 62): Direct window object access
- **window-object** (Line 65): Direct window object access
- **window-object** (Line 66): Direct window object access
- **media-query** (Line 66): matchMedia API usage
- **window-object** (Line 70): Direct window object access
- **window-object** (Line 71): Direct window object access
- **media-query** (Line 71): matchMedia API usage
- **window-object** (Line 80): Direct window object access
- **useEffect** (Line 179): useEffect runs only on client side
- **window-object** (Line 191): Direct window object access
- **event-listener** (Line 191): Event listener setup
- **window-object** (Line 192): Direct window object access
- **event-listener** (Line 192): Event listener setup
- **window-object** (Line 197): Direct window object access
- **window-object** (Line 198): Direct window object access
- **media-query** (Line 198): matchMedia API usage
- **window-object** (Line 201): Direct window object access
- **window-object** (Line 202): Direct window object access
- **media-query** (Line 202): matchMedia API usage
- **event-listener** (Line 207): Event listener setup
- **event-listener** (Line 208): Event listener setup
- **window-object** (Line 212): Direct window object access
- **window-object** (Line 213): Direct window object access
- **useEffect** (Line 222): useEffect runs only on client side
- **resize-observer** (Line 251): ResizeObserver API usage
- **resize-observer** (Line 253): ResizeObserver API usage
- **resize-observer** (Line 253): ResizeObserver API usage
- **document-object** (Line 258): Direct document object access
- **window-object** (Line 264): Direct window object access
- **document-object** (Line 293): Direct document object access
- **document-object** (Line 298): Direct document object access
- **document-object** (Line 311): Direct document object access
- **window-object** (Line 316): Direct window object access
- **document-object** (Line 317): Direct document object access
- **document-object** (Line 322): Direct document object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)
- dynamic-import: Consider lazy loading this component (medium complexity)


### icons
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SortableDataTable/icons.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### patient
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SortableDataTable/patient.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### utils
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SortableDataTable/utils.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SpacingUtilities
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SpacingUtilities/SpacingUtilities.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SpacingUtilities.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SpacingUtilities/SpacingUtilities.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SummaryCard.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SummaryCard/SummaryCard.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SummaryList
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SummaryList/SummaryList.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### SummaryList.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/SummaryList/SummaryList.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Table
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Tables/Table.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Table.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Tables/Table.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AriaTabs
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Tabs/AriaTabs.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### AriaTabsTypes
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Tabs/AriaTabsTypes.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Tabs
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Tabs/Tabs.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: Yes
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Tabs.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Tabs/Tabs.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Tag.schema
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Tag/Tag.schema.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Tag
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Tag/Tag.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Tag.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Tag/Tag.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### TaskList
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/TaskList/TaskList.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Textarea.schema
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Textarea/Textarea.schema.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Textarea
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Textarea/Textarea.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### Textarea.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/Textarea/Textarea.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### TransactionalPageTemplate
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/TransactionalPageTemplate/TransactionalPageTemplate.tsx`
- **Compatibility**: requires-refactoring
- **Issues**: 1
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:
- **window-object** (Line 107): Direct window object access

#### Refactoring Actions:
- add-ssr-guard: Add SSR guards for browser-only code (medium complexity)


### WarningCallout
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/WarningCallout/WarningCallout.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### WidthContainer
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/WidthContainer/WidthContainer.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### WidthUtilities
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/WidthUtilities/WidthUtilities.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### WidthUtilities.types
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/WidthUtilities/WidthUtilities.types.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### ssr
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/ssr.ts`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



### test-account-icon
- **File**: `/Users/fergusbisset/Dropbox/Sites/nhs-fdp-design-system/src/components/test-account-icon.tsx`
- **Compatibility**: fully-compatible
- **Issues**: 0
- **Uses Hooks**: No
- **Browser APIs**: No
- **DOM Access**: No

#### Issues:


#### Refactoring Actions:



## Next Steps

1. **Quick Wins**: Fix auto-fixable issues in 14 components
2. **High Priority**: Address blocking issues in refactoring-required components
3. **Client Components**: Convert 1 components to client-only
4. **Testing**: Set up SSR testing pipeline for all compatible components

## Automated Fixes Available

119 issues can be automatically fixed.
