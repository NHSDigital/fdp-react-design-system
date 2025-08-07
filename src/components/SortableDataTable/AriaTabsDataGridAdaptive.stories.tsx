import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AriaTabsDataGridAdaptive } from './AdaptiveTabGrid/AriaTabsDataGridAdaptive';
import type { AriaTabsDataGridAdaptiveProps } from './AdaptiveTabGrid/AriaTabsDataGridAdaptiveTypes';
import { createTCHTabsConfig, tchDataConfig } from './AriaTabsDataGridTCH';
import type { EWSPatientData } from './AriaTabsDataGridTypes';

// Import real patient data
import patientsData from './patients_with_ews.json';

// Cast imported JSON to typed patient data
const patients = patientsData as EWSPatientData[];

// Create healthcare tabs configuration with real patient data
const healthcareTabs = createTCHTabsConfig(patients);

// Create card configuration for real patient data
const patientCardConfig = {
  primaryField: 'name',
  secondaryFields: ['ews_score', 'ward_name', 'bed_name', 'pathway'],
  badgeFields: ['ews_score'],
  hiddenFields: ['id']
};

const meta: Meta<AriaTabsDataGridAdaptiveProps> = {
  title: 'NHS/Data/AriaTabsDataGrid Adaptive',
  component: AriaTabsDataGridAdaptive,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# AriaTabsDataGrid Adaptive

A mobile-first, responsive enhancement of the AriaTabsDataGrid component that automatically adapts between card and table layouts based on device capabilities and data characteristics.

## Real Data Integration

This component now uses the same real NHS patient data from patients_with_ews.json as the original AriaTabsDataGrid component, utilizing the createTCHTabsConfig plugin and tchDataConfig for consistency.

## Features

- **Mobile-First Design**: Optimized card layout for mobile devices
- **Progressive Enhancement**: Scales from cards to hybrid to full table
- **Healthcare Optimization**: Specialized card templates for clinical data
- **Intelligent Layout**: AI-powered layout recommendations based on data and device context
- **Accessibility Excellence**: Maintains WCAG 2.1 AA compliance across all layouts
- **NHS Design System**: Full compliance with NHS design tokens and patterns

## Layout Modes

- **Cards**: Mobile-optimized card layout with touch-friendly interactions
- **Hybrid**: Tablet layout combining card benefits with table efficiency
- **Table**: Desktop table layout for complex data manipulation
        `
      }
    }
  },
  argTypes: {
    forceLayout: {
      control: { type: 'select' },
      options: ['cards', 'table', 'hybrid'],
      description: 'Force a specific layout mode (overrides responsive behavior)'
    }
  }
};

export default meta;
type Story = StoryObj<AriaTabsDataGridAdaptiveProps>;

// Base props for all stories using real data
const baseProps: Partial<AriaTabsDataGridAdaptiveProps> = {
  dataConfig: tchDataConfig,
  tabPanels: healthcareTabs,
  cardConfig: patientCardConfig,
  ariaLabel: "NHS Patient Management Adaptive Grid",
  ariaDescription: "Mobile-first adaptive data grid showing real patient information with Early Warning System scoring",
  experimental: {
    hybridMode: true,
    animatedTransitions: true
  }
};

/**
 * Default adaptive layout using real NHS patient data
 */
export const Default: Story = {
  args: {
    ...baseProps
  },
  parameters: {
    docs: {
      description: {
        story: 'Real NHS patient data from patients_with_ews.json file. Automatically adapts between card and table layouts based on viewport size. Uses the same data source and configuration as the original AriaTabsDataGrid component.'
      }
    }
  }
};

/**
 * Forced card layout for testing mobile design
 */
export const ForcedCardLayout: Story = {
  args: {
    ...baseProps,
    forceLayout: 'cards'
  },
  parameters: {
    docs: {
      description: {
        story: 'Forces card layout regardless of viewport size to demonstrate mobile-first design patterns using real NHS patient data.'
      }
    }
  }
};

/**
 * Hybrid layout optimized for tablets
 */
export const HybridLayout: Story = {
  args: {
    ...baseProps,
    forceLayout: 'hybrid'
  },
  parameters: {
    docs: {
      description: {
        story: 'Hybrid layout combining card benefits with table efficiency for tablet devices.'
      }
    }
  }
};

/**
 * Full table layout for desktop
 */
export const TableLayout: Story = {
  args: {
    ...baseProps,
    forceLayout: 'table'
  },
  parameters: {
    docs: {
      description: {
        story: 'Forced table layout for desktop environments with complex data manipulation needs.'
      }
    }
  }
};

/**
 * High priority patients only (EWS Score >= 7)
 */
export const HighPriorityPatients: Story = {
  args: {
    ...baseProps,
    tabPanels: createTCHTabsConfig(patients.filter(patient => patient.ews_score >= 7)),
    cardConfig: {
      ...patientCardConfig,
      badgeFields: ['ews_score', 'pathway']
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Filtered view showing only high-priority patients with EWS scores of 7 or higher, using real patient data.'
      }
    }
  }
};

/**
 * Loading state
 */
export const LoadingState: Story = {
  args: {
    ...baseProps,
    isLoading: true,
    tabPanels: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state with NHS-compliant spinner and accessible loading announcements.'
      }
    }
  }
};

/**
 * Error state
 */
export const ErrorState: Story = {
  args: {
    ...baseProps,
    error: 'Failed to load patient data. Please check your connection and try again.',
    tabPanels: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Error state with clear error messaging and recovery suggestions for clinical environments.'
      }
    }
  }
};
