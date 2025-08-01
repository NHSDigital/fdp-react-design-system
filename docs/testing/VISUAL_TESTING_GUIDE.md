# 🎨 Visual Testing Framework Setup

## Overview

This framework provides comprehensive visual regression testing by comparing your React components against the original NHS UK implementations. It uses Playwright for screenshot capture and comparison, with Storybook integration for component testing.

## Features

- **Side-by-side comparison**: React components vs NHS UK originals
- **Visual regression detection**: Automatically catch design changes
- **Multi-viewport testing**: Mobile, tablet, desktop
- **Interactive state testing**: Hover, focus, active states
- **Accessibility verification**: Color contrast and focus management
- **CI/CD integration**: Automated testing in GitHub Actions

## Quick Start

### 1. Setup the Framework

```bash
# Install dependencies and generate test files
npm run visual:setup
```

This will:
- Generate NHS UK reference HTML files
- Create visual test files for all components
- Set up directory structure

### 2. Run Visual Tests

```bash
# Run all visual tests
npm run visual:test

# Run with UI for interactive debugging
npm run visual:test:ui

# Run in headed mode to see the browser
npm run visual:test:headed
```

### 3. Update Snapshots

When you make intentional changes:

```bash
# Update all baseline screenshots
npm run visual:update
```

### 4. View Reports

```bash
# Open visual test report
npm run visual:report
```

## How It Works

### Reference Generation

The framework generates NHS UK reference implementations using:

1. **Original NHS UK CSS**: Loaded from CDN for authentic styling
2. **Component Templates**: HTML structures matching NHS UK patterns
3. **Test Variants**: Multiple configurations per component

### Test Process

1. **Screenshot React Component**: Captures your Storybook component
2. **Screenshot NHS UK Reference**: Captures original implementation  
3. **Visual Comparison**: Pixel-by-pixel diff analysis
4. **Report Generation**: Detailed comparison reports

### Test Types

#### 1. Side-by-Side Comparison
Compares React vs NHS UK implementations to ensure visual fidelity.

#### 2. Visual Regression Testing
Detects unintentional changes to component appearance.

#### 3. Interactive State Testing
Tests hover, focus, and active states for proper behavior.

#### 4. Accessibility Testing
Verifies color contrast, keyboard navigation, and ARIA attributes.

#### 5. Responsive Testing
Tests components across different viewport sizes.

## Component Configuration

### Enhanced Storybook Stories

Create visual testing stories with comprehensive test scenarios:

```tsx
// stories/ComponentName.visual.stories.tsx
export const VisualTestDefault: Story = {
  args: {
    // Props matching NHS UK reference
  },
  parameters: {
    visual: {
      nhsukReference: 'component-name',
      variants: ['default', 'variant1'],
    },
  },
};
```

### Custom Test Scenarios

Add component-specific interactions:

```tsx
// In visual test file
const testCases: VisualTestConfig[] = [
  {
    name: 'Component - Interactive',
    storybookPath: '/story/component--default',
    referencePath: '/component/component-default.html',
    interactions: async (page) => {
      // Custom interactions
      await page.hover('.component-button');
      await page.waitForTimeout(100);
    },
  },
];
```

## Best Practices

### 1. Consistent Test Data
- Use the same content in React and NHS UK reference
- Keep text lengths consistent for layout comparison
- Use realistic data that matches NHS patterns

### 2. Viewport Testing
- Test all responsive breakpoints
- Ensure mobile-first approach consistency
- Verify tablet and desktop layouts

### 3. Interactive States
- Test all interactive elements (links, buttons)
- Verify hover, focus, and active states
- Check keyboard navigation patterns

### 4. Accessibility
- Verify color contrast ratios
- Test focus management and visibility
- Ensure proper ARIA attributes

### 5. CI Integration
- Run visual tests on every PR
- Auto-update baselines for approved changes
- Include visual reports in PR comments

## File Structure

```
tests/visual/
├── reference/                 # NHS UK reference HTML files
│   ├── footer/
│   │   ├── footer-default.html
│   │   └── footer-multiColumn.html
│   ├── breadcrumb/
│   └── index.html            # Component gallery
├── screenshots/              # Baseline screenshots
│   ├── footer-default-chrome-react.png
│   ├── footer-default-chrome-reference.png
│   └── ...
├── reports/                  # Test reports
│   ├── html/                # HTML report
│   └── results.json         # JSON results
└── *.visual.test.ts         # Generated test files
```

## Configuration

### Playwright Configuration
```typescript
// playwright.visual.config.ts
export default defineConfig({
  testDir: './tests/visual',
  expect: {
    threshold: 0.2, // Allow 20% pixel difference
    toHaveScreenshot: {
      threshold: 0.2,
      animations: 'disabled',
    },
  },
});
```

### Visual Test Thresholds
- **Threshold**: 0.2 (20% difference allowed)
- **Max Diff Pixels**: 100 pixels
- **Animation**: Disabled for consistent captures

## Troubleshooting

### Common Issues

1. **Flaky Tests**: Increase wait times or disable animations
2. **Font Loading**: Ensure fonts load before screenshots
3. **Timing Issues**: Add explicit waits for dynamic content
4. **Cross-browser Differences**: Adjust thresholds per browser

### Debug Mode

```bash
# Run specific test with debugging
npx playwright test footer.visual.test.ts --debug

# Run with trace viewer
npx playwright test --trace on
```

## CI/CD Integration

Add to GitHub Actions:

```yaml
- name: Run Visual Tests
  run: npm run visual:test

- name: Upload Visual Test Results
  uses: actions/upload-artifact@v3
  with:
    name: visual-test-results
    path: tests/visual/reports/
```

This framework ensures your React components maintain visual fidelity with the original NHS UK design system while providing comprehensive regression testing capabilities.
