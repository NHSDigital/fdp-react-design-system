# Visual Testing Strategy for NHS FDP Design System

## Overview
This setup creates a comprehensive visual regression testing system that compares our React components against the original NHS UK components to ensure design fidelity during migration.

## Architecture

### 1. Reference Component Generation
- **NHS UK HTML**: Generate pure HTML using original NHS UK templates
- **NHS UK Nunjucks**: Use original Nunjucks templates with sample data
- **Screenshot Capture**: Automated screenshot generation using Playwright

### 2. React Component Testing
- **Storybook Integration**: Use existing Storybook stories as test cases
- **Chromatic Integration**: Leverage existing Chromatic setup for visual regression
- **Playwright E2E**: Additional Playwright tests for interaction testing

### 3. Visual Comparison Pipeline
- **Side-by-side comparisons**: Original NHS UK vs React implementation
- **Pixel-perfect diff detection**: Automated visual regression detection
- **Multiple viewport testing**: Mobile, tablet, desktop responsive testing
- **Accessibility comparison**: Color contrast, focus states, ARIA attributes

## Implementation Plan

### Phase 1: Reference HTML Generation
1. Create NHS UK reference templates
2. Set up automated screenshot capture
3. Generate baseline reference images

### Phase 2: React Component Testing
1. Enhanced Storybook stories with test scenarios
2. Playwright visual testing setup
3. Chromatic configuration optimization

### Phase 3: Comparison & CI Integration
1. Visual diff reporting
2. GitHub Actions integration
3. PR comment integration with visual diff reports

## Benefits
- **Design Fidelity**: Ensure pixel-perfect migration
- **Regression Prevention**: Catch visual changes early
- **Documentation**: Visual test cases serve as living documentation
- **Confidence**: High confidence in component accuracy
