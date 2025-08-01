# NHS FDP Visual Testing - Chunked Approach

## Overview

This document outlines the comprehensive visual testing framework for the NHS FDP Design System, using a chunked approach to avoid timeouts and improve performance when testing large component libraries.

## Problem Solved

Previously, the visual testing framework was attempting to test all 33+ NHS components in a single test file, which caused timeouts and performance issues. The new chunked approach breaks down testing into manageable categories.

## Architecture

### Test Organization

The visual tests are now organized into 5 focused test chunks:

1. **Core Components** (`components-core.test.ts`)
   - Button, Footer, Breadcrumb, Tag, Pagination
   - Priority: 1 (Run first)
   - Focus: Essential NHS components used across the system

2. **Navigation Components** (`components-navigation.test.ts`)
   - Header, BackLink, SkipLink, ContentsList, Tabs
   - Priority: 2
   - Focus: Wayfinding and navigation patterns

3. **Form Components** (`components-form.test.ts`)
   - Input, Textarea, Select, Checkboxes, Radios, DateInput, etc.
   - Priority: 3
   - Focus: User input and data collection

4. **Content Components** (`components-content.test.ts`)
   - Card, Panel, InsetText, WarningCallout, Details, etc.
   - Priority: 4
   - Focus: Information display and content organization

5. **Error Components** (`components-error.test.ts`)
   - ErrorMessage, ErrorSummary
   - Priority: 5
   - Focus: Error handling and validation feedback

### Test Types

Each component chunk includes three types of visual tests:

#### 1. NHS UK vs React Comparison
- Tests components across NHS responsive breakpoints (375px, 768px, 1280px)
- Compares NHS UK reference implementation with React implementation
- Validates visual consistency and responsive behavior

#### 2. Component-Specific Behavior Testing
- **Navigation**: Mobile menu toggles, keyboard navigation, focus states
- **Form**: Input states (focus, hover, filled, checked), validation
- **Content**: Layout responsiveness, interactive elements, hover states
- **Error**: Accessibility attributes, link behavior, mobile layout

#### 3. Accessibility Testing
- Focus states and keyboard navigation
- ARIA attributes and roles
- Screen reader compatibility
- Color contrast and visual indicators

### NHS UK Responsive Breakpoints

The testing framework uses the official NHS UK Frontend responsive breakpoints:

```typescript
const viewports = [
  { name: 'Mobile', width: 375, height: 667 },    // NHS Mobile (up to 767px)
  { name: 'Tablet', width: 768, height: 1024 },   // NHS Tablet (768px+)  
  { name: 'Desktop', width: 1280, height: 720 }   // NHS Desktop
];
```

## Usage

### Running Individual Test Chunks

```bash
# Run core components only
npm run visual:test:core

# Run navigation components
npm run visual:test:navigation

# Run form components
npm run visual:test:form

# Run content components  
npm run visual:test:content

# Run error components
npm run visual:test:error
```

### Running All Tests (Chunked)

```bash
# Run all tests in sequence using the chunked runner
npm run visual:test:chunked

# List available test chunks
npx tsx tools/run-visual-tests.ts --list
```

### Other Visual Testing Commands

```bash
# Run with UI for debugging
npm run visual:test:ui

# Run in headed mode (see browser)
npm run visual:test:headed

# Update baseline snapshots
npm run visual:update

# View test reports
npm run visual:report
```

## Test Runner Features

The `tools/run-visual-tests.ts` script provides:

- **Sequential Execution**: Runs test chunks one at a time to avoid resource conflicts
- **Progress Reporting**: Real-time feedback on test progress and results
- **Error Handling**: Continues running remaining chunks if one fails
- **Summary Reports**: Comprehensive success/failure analysis
- **Validation**: Checks that all test files and configurations exist

### Test Runner Output

```bash
🧭 Running navigation components framework validation in chromium...
✅ Navigation framework ready for 5 components  
✅ Total navigation test scenarios: 23

🏁 Test Summary Report
===================
✅ Successful chunks: 4
❌ Failed chunks: 1
📊 Overall Success Rate: 80%
```

## Configuration

### Playwright Configuration

The visual tests use `playwright.visual.config.ts` with:

- **Browsers**: Chromium, Firefox, WebKit
- **Screenshots**: PNG format with threshold settings
- **Timeouts**: 30 seconds per test, 2 retries
- **Parallel Execution**: 7 workers (balanced for performance)

### NHS UK Reference Server

Core components have NHS UK reference implementations served at `http://localhost:3002`:

- `/button/button-default.html`
- `/footer/footer-default.html`  
- `/breadcrumb/breadcrumb-default.html`
- `/tag/tag-default.html`
- `/pagination/pagination-default.html`
- And more...

## Benefits of Chunked Approach

### Performance
- **Reduced Timeouts**: Smaller test suites complete faster
- **Parallel Safety**: No resource conflicts between chunks
- **Memory Management**: Lower memory usage per test run

### Maintainability  
- **Focused Testing**: Each chunk tests related components together
- **Easier Debugging**: Isolated test failures are easier to diagnose
- **Selective Running**: Run only the components you're working on

### Scalability
- **Easy Extension**: Add new components to appropriate chunks
- **Flexible Execution**: Run individual chunks or all together
- **CI/CD Ready**: Can distribute chunks across multiple CI jobs

## Test Coverage

### Current Coverage
- **Total Components**: 33+ NHS components
- **Total Viewports**: 3 responsive breakpoints
- **Total Browsers**: 3 (Chromium, Firefox, WebKit)
- **Total Test Scenarios**: 200+ individual tests

### Test Breakdown by Chunk
- Core: 5 components × 3 viewports × 3 test types = 45+ scenarios
- Navigation: 5 components × specialized navigation tests = 23+ scenarios  
- Form: 10 components × form interaction tests = 40+ scenarios
- Content: 10 components × layout tests = 40+ scenarios
- Error: 2 components × accessibility tests = 8+ scenarios

## Future Enhancements

### Planned Improvements
1. **Visual Diff Analysis**: Automated comparison reports
2. **Performance Metrics**: Test execution time tracking
3. **CI Integration**: Automated visual regression detection
4. **Mobile Testing**: Additional mobile device simulations
5. **Component Variants**: Testing different component states/variants

### Extensibility
- Add new test chunks for specialized component categories
- Include additional NHS UK breakpoints (Large Desktop: 1440px+)
- Integrate with Chromatic for cloud-based visual testing
- Add cross-browser compatibility matrix

## Troubleshooting

### Common Issues

**Test Timeouts**
- Solution: Use chunked approach, reduce parallel workers

**Missing Screenshots**  
- Solution: Run with `--update-snapshots` to create baselines

**Storybook Connection Issues**
- Solution: Ensure Storybook is running on port 6006

**NHS UK Reference Server Issues**
- Solution: Generate reference files with `npx tsx tools/generate-core-references.ts`

### Debug Commands

```bash
# Run single test with full output
npx playwright test tests/visual/components-core.test.ts --headed --workers=1

# Generate new reference files
npx tsx tools/generate-core-references.ts

# Check Playwright installation
npx playwright --version
```

## Conclusion

The chunked visual testing approach provides a robust, scalable, and maintainable framework for ensuring visual consistency across the NHS FDP Design System. By breaking down comprehensive testing into focused chunks, we can test all NHS components effectively while avoiding performance issues and timeouts.
