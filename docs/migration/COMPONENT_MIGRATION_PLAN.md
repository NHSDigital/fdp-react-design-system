# NHS FDP Design System - Component Migration Plan

## Overview
This document outlines the migration plan for porting all NHS UK Frontend components to the NHS FDP Design System, using design tokens and following the established patterns from Button and Checkboxes components.

## Component Categories

### ✅ **Completed Components**
- [x] Button (ButtonCSS)
- [x] Checkboxes

### 🎯 **Priority 1 - Core Form Components** (Immediate)
These are essential form elements that should be migrated first:

- [x] **Input** - Text inputs, email, password, etc.
- [x] **Textarea** - Multi-line text input
- [x] **Select** - Dropdown selections
- [x] **Radios** - Radio button groups
- [x] **Date Input** - Date picker components
- [x] **Character Count** - Text input with character limits
- [x] **Fieldset** - Form grouping
- [x] **Label** - Form labels
- [x] **Hint** - Form help text
- [x] **Error Message** - Form validation messages
- [x] **Error Summary** - Form error summaries

### 🎯 **Priority 2 - Navigation & Layout** ✅ COMPLETED
Essential for page structure and navigation:

- [x] **Header** - Site header with navigation (Previously completed)
- [x] **Footer** - Site footer (9 tests passing)
- [x] **Breadcrumb** - Navigation breadcrumbs (11 tests passing)
- [x] **Skip Link** - Accessibility skip navigation (8 tests passing)
- [x] **Back Link** - Navigation back button (Previously completed)
- [x] **Pagination** - Page navigation (10 tests passing)
- [x] **Contents List** - Table of contents navigation (12 tests passing)

**Priority 2 Status: ✅ COMPLETE - All navigation and layout components implemented with 50 total tests passing**

### 🎯 **Priority 3 - Content Components** (Following Phase)
For displaying and organizing content:

- [ ] **Card** - Content cards with various layouts
- [ ] **Panel** - Highlighted content panels
- [ ] **Inset Text** - Indented text blocks
- [ ] **Summary List** - Key-value pair displays
- [ ] **Tables** - Data tables
- [ ] **Tabs** - Tabbed content
- [ ] **Details** - Collapsible content
- [ ] **Tag** - Status/category tags
- [ ] **Hero** - Hero banner sections

### 🎯 **Priority 4 - Interactive & Feedback** (Later Phase)
Advanced interactive components:

- [ ] **Action Link** - Enhanced action buttons
- [ ] **Task List** - Step-by-step task lists
- [ ] **Do/Don't List** - Guidance lists
- [ ] **Warning Callout** - Alert messages
- [ ] **Images** - Responsive image components

## Component Structure Pattern

Each component should follow this established structure:

```
ComponentName/
├── ComponentName.tsx           # React component (token-based)
├── ComponentName.scss          # SCSS with design tokens
├── ComponentName.types.ts      # TypeScript types
├── ComponentName.test.tsx      # Unit tests
├── ComponentName.stories.tsx   # Storybook stories
├── ComponentNameCSS.tsx        # CSS-only variant (optional)
├── ComponentNameCSS.test.tsx   # CSS variant tests (optional)
├── ComponentNameComparison.stories.tsx # Token vs CSS comparison
└── index.ts                    # Exports
```

## Design Token Integration Requirements

### 1. **SCSS Structure**
```scss
// Component SCSS template
@use '../../../packages/nhs-fdp/dist/scss/tokens' as nhs;

.nhsuk-component {
  // Use design tokens for all styling
  color: nhs.$nhs-fdp-semantic-color-text-primary;
  font-family: "#{nhs.$nhs-fdp-font-family-base}", #{nhs.$nhs-fdp-font-family-fallback};
  
  &__element {
    // Nested BEM structure
  }
  
  &--modifier {
    // Component variants
  }
}
```

### 2. **React Component Pattern**
```tsx
// Component TSX template
import React from 'react';
import './ComponentName.scss';
import { ComponentNameProps } from './ComponentName.types';

export const ComponentName: React.FC<ComponentNameProps> = ({
  // Use design tokens via CSS custom properties or direct token imports
}) => {
  return (
    <div className="nhsuk-component">
      {/* Component implementation */}
    </div>
  );
};
```

### 3. **Required Token Categories**
Each component should utilize appropriate tokens from:

- **Colors**: `$nhs-fdp-color-*`, `$nhs-fdp-semantic-color-*`
- **Typography**: `$nhs-fdp-font-*`, `$nhs-fdp-font-size-*`
- **Spacing**: `$nhs-fdp-spacing-*`, component-specific spacing tokens
- **Borders**: `$nhs-fdp-border-*`
- **Shadows**: `$nhs-fdp-shadow-*`
- **Focus**: `$nhs-fdp-focus-*`

## Migration Process

### Phase 1: Foundation Setup
1. Create folder structure for all Priority 1 components
2. Set up base TypeScript types and interfaces
3. Create component templates and generators

### Phase 2: Form Components Migration
1. Migrate core form components (Input, Textarea, Select, etc.)
2. Ensure form validation patterns are consistent
3. Test accessibility compliance

### Phase 3: Navigation & Layout
1. Migrate header, footer, and navigation components
2. Ensure responsive behavior with design tokens
3. Test routing integration

### Phase 4: Content & Interactive
1. Migrate remaining content and interactive components
2. Optimize for performance and bundle size
3. Complete comprehensive testing

## Token Requirements Analysis

Based on NHS UK components, we need to ensure these token categories are comprehensive:

### Missing Token Categories to Consider:
- **Animation/Transition tokens** for interactive states
- **Z-index tokens** for layering
- **Breakpoint tokens** for responsive design
- **Component-specific tokens** for each migrated component

## Quality Assurance Checklist

For each migrated component:
- [ ] Design tokens used throughout (no hardcoded values)
- [ ] Responsive design implemented
- [ ] Accessibility compliance (WCAG 2.1 AA)
- [ ] Cross-browser testing
- [ ] Unit tests with >90% coverage
- [ ] Storybook documentation
- [ ] TypeScript strict mode compliance
- [ ] Performance optimization

## Success Metrics

- **100% component parity** with NHS UK Frontend
- **Zero hardcoded CSS values** (all design token based)
- **Full accessibility compliance**
- **Performance improvements** over original NHS UK components
- **Developer experience** improvements with TypeScript and modern tooling
