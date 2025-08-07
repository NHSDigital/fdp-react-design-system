import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AriaTabsDataGridAdaptive } from '../src/components/SortableDataTable/AdaptiveTabGrid/AriaTabsDataGridAdaptive';
import { AriaTabsDataGridAdaptiveProps } from '../src/components/SortableDataTable/AdaptiveTabGrid/AriaTabsDataGridAdaptiveTypes';
import { PatientCard, AppointmentCard, MedicationCard, VitalsCard } from '../src/components/SortableDataTable/AdaptiveTabGrid/HealthcareCardTemplates';
import { createTCHTabsConfig, tchDataConfig } from '../src/components/SortableDataTable/AriaTabsDataGridTCH';
import { EWSPatientData } from '../src/components/SortableDataTable/AriaTabsDataGridTypes';

// Import real patient data
import patientsData from '../src/components/SortableDataTable/patients_with_ews.json';

// Cast imported JSON to typed patient data
const patients = patientsData as EWSPatientData[];

// Enhanced props for adaptive component stories
interface AdaptiveStoryArgs extends AriaTabsDataGridAdaptiveProps {
  enableAnimations?: boolean;
  cardVariant?: 'patient' | 'appointment' | 'medication' | 'vitals' | 'generic';
}

const meta: Meta<AdaptiveStoryArgs> = {
  title: 'NHS/Data/AriaTabsDataGrid Adaptive',
  component: AriaTabsDataGridAdaptive,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# AriaTabsDataGrid Adaptive

A mobile-first, responsive enhancement of the AriaTabsDataGrid component that automatically adapts between card and table layouts based on device capabilities and data characteristics.

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

## Healthcare Card Templates

- **Patient Cards**: Optimized for patient records with NHS numbers and priority indicators
- **Appointment Cards**: Time-sensitive appointment information with status badges
- **Medication Cards**: Drug administration with safety warnings and scheduling
- **Vitals Cards**: Clinical vital signs with EWS scoring and trend analysis
        `
      }
    }
  },
  argTypes: {
    forceLayout: {
      control: { type: 'select' },
      options: ['cards', 'table', 'hybrid'],
      description: 'Force a specific layout mode (overrides responsive behavior)'
    },
    enableAnimations: {
      control: { type: 'boolean' },
      description: 'Enable animated transitions between layouts'
    },
    cardVariant: {
      control: { type: 'select' },
      options: ['patient', 'appointment', 'medication', 'vitals', 'generic'],
      description: 'Healthcare card template variant'
    }
  }
};

export default meta;
type Story = StoryObj<AdaptiveStoryArgs>;

// Create healthcare tabs configuration with real patient data
const healthcareTabs = createTCHTabsConfig(patients);

// Base props for all stories
const baseProps: Partial<AriaTabsDataGridAdaptiveProps> = {
  dataConfig: tchDataConfig,
  tabPanels: healthcareTabs,
  ariaLabel: 'NHS Patient Data Grid',
  ariaDescription: 'Adaptive data grid showing patient information with mobile-first design',
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: 1200
  }
};

// Column definitions for different data types
const patientColumns = [
  { key: 'name', label: 'Patient Name' },
  { key: 'nhs_number', label: 'NHS Number' },
  { key: 'age', label: 'Age' },
  { key: 'ward', label: 'Ward' },
  { key: 'condition', label: 'Condition' },
  { key: 'ews_score', label: 'EWS Score' },
  { key: 'consultant', label: 'Consultant' },
  { key: 'status', label: 'Status' }
];

const appointmentColumns = [
  { key: 'appointment_time', label: 'Time', render: (row: any) => new Date(row.appointment_time).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) },
  { key: 'patient_name', label: 'Patient' },
  { key: 'appointment_type', label: 'Type' },
  { key: 'consultant', label: 'Consultant' },
  { key: 'location', label: 'Location' },
  { key: 'duration', label: 'Duration (min)' },
  { key: 'status', label: 'Status' }
];

const medicationColumns = [
  { key: 'medication', label: 'Medication' },
  { key: 'dose', label: 'Dose' },
  { key: 'frequency', label: 'Frequency' },
  { key: 'route', label: 'Route' },
  { key: 'next_due', label: 'Next Due', render: (row: any) => new Date(row.next_due).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) },
  { key: 'prescriber', label: 'Prescriber' },
  { key: 'patient', label: 'Patient' }
];

const vitalsColumns = [
  { key: 'patient', label: 'Patient' },
  { key: 'recorded_time', label: 'Time', render: (row: any) => new Date(row.recorded_time).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) },
  { key: 'temperature', label: 'Temp (°C)' },
  { key: 'blood_pressure', label: 'BP' },
  { key: 'heart_rate', label: 'HR (bpm)' },
  { key: 'respiratory_rate', label: 'RR' },
  { key: 'oxygen_saturation', label: 'SpO₂ (%)' },
  { key: 'ews_score', label: 'EWS Score' }
];

// Custom card template function
const getCardTemplate = (variant: string) => {
  return (data: any, columns: any[]) => {
    const commonProps = {
      data,
      columns,
      onSelect: (selectedData: any) => console.log('Card selected:', selectedData),
      onAction: (action: string, actionData: any) => console.log('Action:', action, actionData)
    };

    switch (variant) {
      case 'patient':
        return <PatientCard {...commonProps} priority={data.priority_level} status={data.status} />;
      case 'appointment':
        return <AppointmentCard {...commonProps} status={data.status} />;
      case 'medication':
        return <MedicationCard {...commonProps} priority={data.priority} />;
      case 'vitals':
        return <VitalsCard {...commonProps} priority={data.priority} />;
      default:
        return null;
    }
  };
};

// Base props for all stories
const baseProps = {
  ariaLabel: "Healthcare data grid with adaptive layout",
  ariaDescription: "Displays healthcare information in an optimal format based on device capabilities",
  onTabChange: (index: number) => console.log('Tab changed to:', index),
  onGlobalRowSelectionChange: (data: any) => console.log('Row selection changed:', data)
};

/**
 * Default adaptive layout that responds to viewport size
 */
export const Default: Story = {
  args: {
    ...baseProps,
    tabPanels: [
      {
        id: 'patients',
        label: 'Patients',
        data: patientData,
        columns: patientColumns,
        ariaLabel: 'Patient records'
      }
    ],
    cardConfig: {
      primaryField: 'name',
      secondaryFields: ['nhs_number', 'ward', 'condition'],
      badgeFields: ['ews_score', 'priority_level'],
      cardTemplate: getCardTemplate('patient')
    },
    experimental: {
      hybridMode: true,
      animatedTransitions: true
    }
  }
};

/**
 * Forced card layout for testing mobile design
 */
export const ForcedCardLayout: Story = {
  args: {
    ...baseProps,
    forceLayout: 'cards',
    tabPanels: [
      {
        id: 'patients',
        label: 'Patients',
        data: patientData,
        columns: patientColumns,
        ariaLabel: 'Patient records'
      }
    ],
    cardConfig: {
      primaryField: 'name',
      secondaryFields: ['nhs_number', 'ward', 'condition'],
      badgeFields: ['ews_score', 'priority_level'],
      cardTemplate: getCardTemplate('patient')
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Forces card layout regardless of viewport size to demonstrate mobile-first design patterns.'
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
    forceLayout: 'hybrid',
    tabPanels: [
      {
        id: 'patients',
        label: 'Patients',
        data: patientData,
        columns: patientColumns,
        ariaLabel: 'Patient records'
      }
    ],
    cardConfig: {
      primaryField: 'name',
      secondaryFields: ['nhs_number', 'ward', 'condition'],
      badgeFields: ['ews_score', 'priority_level'],
      cardTemplate: getCardTemplate('patient')
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Hybrid layout combining card benefits with table efficiency, optimized for tablet usage in clinical environments.'
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
    forceLayout: 'table',
    tabPanels: [
      {
        id: 'patients',
        label: 'Patients',
        data: patientData,
        columns: patientColumns,
        ariaLabel: 'Patient records'
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Traditional table layout for desktop environments with full data manipulation capabilities.'
      }
    }
  }
};

/**
 * Multi-tab healthcare workflow
 */
export const HealthcareWorkflow: Story = {
  args: {
    ...baseProps,
    tabPanels: [
      {
        id: 'patients',
        label: 'Patients',
        data: patientData,
        columns: patientColumns,
        ariaLabel: 'Current patients',
        cardTemplate: getCardTemplate('patient')
      },
      {
        id: 'appointments',
        label: 'Appointments',
        data: appointmentData,
        columns: appointmentColumns,
        ariaLabel: 'Today\'s appointments',
        cardTemplate: getCardTemplate('appointment')
      },
      {
        id: 'medications',
        label: 'Medications',
        data: medicationData,
        columns: medicationColumns,
        ariaLabel: 'Medication schedule',
        cardTemplate: getCardTemplate('medication')
      },
      {
        id: 'vitals',
        label: 'Vital Signs',
        data: vitalsData,
        columns: vitalsColumns,
        ariaLabel: 'Recent vital signs',
        cardTemplate: getCardTemplate('vitals')
      }
    ],
    cardConfig: {
      primaryField: 'name',
      secondaryFields: ['nhs_number', 'ward', 'condition'],
      badgeFields: ['ews_score', 'priority_level']
    },
    experimental: {
      hybridMode: true,
      animatedTransitions: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete healthcare workflow with multiple data types, each optimized with specialized card templates for clinical efficiency.'
      }
    }
  }
};

/**
 * Patient card showcase
 */
export const PatientCards: Story = {
  args: {
    ...baseProps,
    forceLayout: 'cards',
    tabPanels: [
      {
        id: 'patients',
        label: 'Current Patients',
        data: patientData,
        columns: patientColumns,
        ariaLabel: 'Patient records with priority indicators'
      }
    ],
    cardConfig: {
      primaryField: 'name',
      secondaryFields: ['nhs_number', 'ward', 'condition'],
      badgeFields: ['ews_score', 'priority_level'],
      cardTemplate: getCardTemplate('patient')
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Patient cards optimized for clinical use with NHS numbers, EWS scores, and priority indicators. Features emergency access patterns for critical patients.'
      }
    }
  }
};

/**
 * Appointment card showcase
 */
export const AppointmentCards: Story = {
  args: {
    ...baseProps,
    forceLayout: 'cards',
    tabPanels: [
      {
        id: 'appointments',
        label: 'Today\'s Schedule',
        data: appointmentData,
        columns: appointmentColumns,
        ariaLabel: 'Appointment schedule'
      }
    ],
    cardConfig: {
      primaryField: 'appointment_time',
      secondaryFields: ['patient_name', 'appointment_type', 'consultant'],
      badgeFields: ['status', 'duration'],
      cardTemplate: getCardTemplate('appointment')
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Appointment cards with time-sensitive information and status badges. Optimized for scheduling workflows and patient check-in processes.'
      }
    }
  }
};

/**
 * Medication card showcase
 */
export const MedicationCards: Story = {
  args: {
    ...baseProps,
    forceLayout: 'cards',
    tabPanels: [
      {
        id: 'medications',
        label: 'Medication Round',
        data: medicationData,
        columns: medicationColumns,
        ariaLabel: 'Medication administration schedule'
      }
    ],
    cardConfig: {
      primaryField: 'medication',
      secondaryFields: ['dose', 'frequency', 'next_due'],
      badgeFields: ['route', 'priority'],
      cardTemplate: getCardTemplate('medication')
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Medication cards with safety features including allergy warnings, administration routes, and scheduling information for clinical safety.'
      }
    }
  }
};

/**
 * Vitals card showcase
 */
export const VitalsCards: Story = {
  args: {
    ...baseProps,
    forceLayout: 'cards',
    tabPanels: [
      {
        id: 'vitals',
        label: 'Recent Observations',
        data: vitalsData,
        columns: vitalsColumns,
        ariaLabel: 'Patient vital signs monitoring'
      }
    ],
    cardConfig: {
      primaryField: 'patient',
      secondaryFields: ['recorded_time', 'temperature', 'blood_pressure', 'heart_rate'],
      badgeFields: ['ews_score'],
      cardTemplate: getCardTemplate('vitals')
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Vital signs cards with clinical measurements grid layout and EWS scoring for patient monitoring and early warning systems.'
      }
    }
  }
};

/**
 * High priority alerts showcase
 */
export const HighPriorityAlerts: Story = {
  args: {
    ...baseProps,
    forceLayout: 'cards',
    tabPanels: [
      {
        id: 'alerts',
        label: 'Critical Alerts',
        data: patientData.filter(patient => patient.ews_score >= 6),
        columns: patientColumns,
        ariaLabel: 'High priority patient alerts'
      }
    ],
    cardConfig: {
      primaryField: 'name',
      secondaryFields: ['nhs_number', 'ward', 'condition'],
      badgeFields: ['ews_score', 'priority_level'],
      cardTemplate: getCardTemplate('patient')
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Critical patient alerts with enhanced visual indicators, pulsing animations, and emergency action buttons for immediate clinical attention.'
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
    tabPanels: [
      {
        id: 'patients',
        label: 'Patients',
        data: [],
        columns: patientColumns,
        ariaLabel: 'Loading patient data'
      }
    ]
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
    tabPanels: [
      {
        id: 'patients',
        label: 'Patients',
        data: [],
        columns: patientColumns,
        ariaLabel: 'Patient data with error'
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Error state with clear error messaging and recovery suggestions for clinical environments.'
      }
    }
  }
};

/**
 * Accessibility showcase
 */
export const AccessibilityShowcase: Story = {
  args: {
    ...baseProps,
    tabPanels: [
      {
        id: 'patients',
        label: 'Patients (Navigate with Tab, Arrow keys, Enter)',
        data: patientData.slice(0, 3),
        columns: patientColumns,
        ariaLabel: 'Patient records - use Tab to navigate, Arrow keys within cards, Enter to select'
      }
    ],
    cardConfig: {
      primaryField: 'name',
      secondaryFields: ['nhs_number', 'ward', 'condition'],
      badgeFields: ['ews_score', 'priority_level'],
      cardTemplate: getCardTemplate('patient')
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including keyboard navigation, screen reader support, and ARIA labeling. Try navigating with Tab, Arrow keys, and Enter.'
      }
    }
  }
};
