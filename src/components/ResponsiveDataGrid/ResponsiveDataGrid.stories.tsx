// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { ResponsiveDataGrid } from './ResponsiveDataGrid';
import { AriaTabsDataGridComprehensiveDemo } from './ResponsiveDataGridDemo';
import type { ResponsiveDataGridProps } from './ResponsiveDataGridTypes';
import { PatientCard, AppointmentCard, MedicationCard, VitalsCard } from './HealthcareCardTemplates';
import { createTCHTabsConfig, tchDataConfig } from '../SortableDataTable/AriaTabsDataGridTCH';
import type { EWSPatientData } from '../SortableDataTable/AriaTabsDataGridTypes';

// Import real patient data
import patientsData from '../SortableDataTable/patients_with_ews.json';

// Cast imported JSON to typed patient data
const patients = patientsData as EWSPatientData[];

// Enhanced props for responsive component stories
interface ResponsiveStoryArgs extends ResponsiveDataGridProps {
  enableAnimations?: boolean;
  cardVariant?: 'patient' | 'appointment' | 'medication' | 'vitals' | 'generic';
}

const meta: Meta<ResponsiveStoryArgs> = {
  title: 'NHS/Data/ResponsiveDataGrid',
  component: ResponsiveDataGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# ResponsiveDataGrid

A mobile-first, responsive data grid component that automatically adapts between card and table layouts based on device capabilities and data characteristics.

## Features

- **Mobile-First Design**: Optimised card layout for mobile devices
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
type Story = StoryObj<ResponsiveStoryArgs>;

// Create healthcare tabs configuration with real patient data
const healthcareTabs = createTCHTabsConfig(patients);

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
        const patientPriority = data.ews_score >= 7 ? 'high' : data.ews_score >= 3 ? 'medium' : 'low';
        return <PatientCard {...commonProps} priority={patientPriority} status="active" />;
      case 'appointment':
        return <AppointmentCard {...commonProps} status={data.status || 'pending'} />;
      case 'medication':
        return <MedicationCard {...commonProps} priority={data.priority || 'medium'} />;
      case 'vitals':
        const vitalsPriority = data.ews_score >= 7 ? 'high' : data.ews_score >= 3 ? 'medium' : 'low';
        return <VitalsCard {...commonProps} priority={vitalsPriority} />;
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

// Use the patients data we have available
const patientData = patients.slice(0, 10); // Use first 10 patients

// Enhanced appointment data with better structure
const appointmentData = [
  {
    id: 'appt-001',
    appointment_time: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
    patient_name: patients[0]?.name || 'Sarah Johnson',
    appointment_type: 'Cardiology Consultation',
    consultant: patients[0]?.consultant || 'Dr. Smith',
    location: 'Clinic Room 3',
    duration: 30,
    status: 'pending'
  },
  {
    id: 'appt-002',
    appointment_time: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    patient_name: patients[1]?.name || 'Michael Davis',
    appointment_type: 'Post-op Follow-up',
    consultant: patients[1]?.consultant || 'Dr. Johnson',
    location: 'Surgery Ward',
    duration: 15,
    status: 'active'
  },
  {
    id: 'appt-003',
    appointment_time: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
    patient_name: patients[2]?.name || 'Emma Thompson',
    appointment_type: 'Respiratory Assessment',
    consultant: patients[2]?.consultant || 'Dr. Wilson',
    location: 'Emergency Department',
    duration: 45,
    status: 'pending'
  }
];

// Enhanced medication data with better structure
const medicationData = [
  {
    id: 'med-001',
    medication: 'Amlodipine',
    dose: '5mg',
    frequency: 'Once daily',
    route: 'Oral',
    next_due: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
    prescriber: 'Dr. Smith',
    patient_name: patients[0]?.name || 'Sarah Johnson',
    allergies: null,
    priority: 'medium'
  },
  {
    id: 'med-002',
    medication: 'Morphine',
    dose: '10mg',
    frequency: 'Every 4 hours',
    route: 'IV',
    next_due: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
    prescriber: 'Dr. Johnson',
    patient_name: patients[1]?.name || 'Michael Davis',
    allergies: 'Codeine allergy',
    priority: 'high'
  },
  {
    id: 'med-003',
    medication: 'Salbutamol',
    dose: '2 puffs',
    frequency: 'As needed',
    route: 'Inhaled',
    next_due: new Date(Date.now() + 90 * 60 * 1000).toISOString(),
    prescriber: 'Dr. Wilson',
    patient_name: patients[2]?.name || 'Emma Thompson',
    allergies: null,
    priority: 'high'
  }
];

// Enhanced vitals data with better structure
const vitalsData = [
  {
    id: 'vitals-001',
    patient_name: patients[0]?.name || 'Sarah Johnson',
    recorded_time: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    temperature: 36.8,
    blood_pressure: '140/90',
    heart_rate: 82,
    respiratory_rate: 16,
    oxygen_saturation: 98,
    ews_score: patients[0]?.ews_score || 3,
    priority: patients[0]?.ews_score >= 7 ? 'high' : patients[0]?.ews_score >= 3 ? 'medium' : 'low'
  },
  {
    id: 'vitals-002',
    patient_name: patients[1]?.name || 'Michael Davis',
    recorded_time: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    temperature: 37.2,
    blood_pressure: '130/85',
    heart_rate: 98,
    respiratory_rate: 20,
    oxygen_saturation: 95,
    ews_score: patients[1]?.ews_score || 7,
    priority: patients[1]?.ews_score >= 7 ? 'high' : patients[1]?.ews_score >= 3 ? 'medium' : 'low'
  },
  {
    id: 'vitals-003',
    patient_name: patients[2]?.name || 'Emma Thompson',
    recorded_time: new Date(Date.now() - 90 * 60 * 1000).toISOString(),
    temperature: 38.5,
    blood_pressure: '110/70',
    heart_rate: 105,
    respiratory_rate: 24,
    oxygen_saturation: 90,
    ews_score: patients[2]?.ews_score || 9,
    priority: patients[2]?.ews_score >= 7 ? 'high' : patients[2]?.ews_score >= 3 ? 'medium' : 'low'
  }
];

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
