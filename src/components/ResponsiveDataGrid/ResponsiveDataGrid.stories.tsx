// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { ResponsiveDataGrid } from './ResponsiveDataGrid';
import type { ResponsiveDataGridProps } from './ResponsiveDataGridTypes';
import { PatientCard, AppointmentCard, MedicationCard, VitalsCard } from './HealthcareCardTemplates';
import type { EWSPatientData } from '../SortableDataTable/AriaTabsDataGridTypes';
import { Button } from '../Button';

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

// (Additional healthcare tab configs removed for pruning)

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
 * FourColumnTable: Minimal table-focused story with only four short columns.
 * Used to reproduce / verify header width expansion and tab overflow behaviour.
 */
export const FourColumnTable: Story = {
  args: {
    ...baseProps,
    forceLayout: 'table',
    tabPanels: [
      {
        id: 'four-cols',
        label: 'Short Cols',
        ariaLabel: 'Short column patient sample',
        data: patientData.map(p => ({
          id: p.name,
          name: p.name,
          age: p.age,
          ward_name: p.ward_name,
          ews_score: p.ews_score
        })),
        columns: [
          { key: 'name', label: 'Name' },
          { key: 'age', label: 'Age' },
          { key: 'ward_name', label: 'Ward' },
          { key: 'ews_score', label: 'EWS' }
        ]
      }
    ],
    hideTabsIfSingle: true,
    // Minimal cardConfig (kept for type completeness even though forceLayout=table)
    cardConfig: {
      primaryField: 'name',
      secondaryFields: ['ward', 'status'],
      badgeFields: ['status'],
      cardTemplate: getCardTemplate('patient')
    },
    experimental: {
      hybridMode: false,
      animatedTransitions: false
    }
  }
};

/**
        story: 'Minimal table-focused story used to reproduce and verify header width/overflow; also demonstrates hideTabsIfSingle to remove the tablist for a single panel.'
 */
export const WithActionAreas: Story = {
  args: {
    ...baseProps,
    tabPanels: [
      {
        id: 'patients',
        label: 'Patient Records',
        data: patientData.slice(0, 6),
        columns: [
          { key: 'name', label: 'Name', cardRenderer: (row: any) => row.name },
          { key: 'nhs_number', label: 'NHS Number', cardRenderer: (row: any) => row.nhs_number },
          { key: 'ward_name', label: 'Ward', cardRenderer: (row: any) => row.ward_name },
          { key: 'ews_score', label: 'EWS Score', cardRenderer: (row: any) => row.ews_score }
        ],
        ariaLabel: 'Patient records with action buttons'
      },
      {
        id: 'appointments',
        label: 'Appointments',
        data: patientData.slice(0, 4).map(p => ({
          id: p.name,
          patient: p.name,
          time: '09:00',
          type: 'Consultation',
          status: 'Scheduled'
        })),
        columns: [
          { key: 'patient', label: 'Patient', cardRenderer: (row: any) => row.patient },
          { key: 'time', label: 'Time', cardRenderer: (row: any) => row.time },
          { key: 'type', label: 'Type', cardRenderer: (row: any) => row.type },
          { key: 'status', label: 'Status', cardRenderer: (row: any) => row.status }
        ],
        ariaLabel: 'Appointment schedule'
      }
    ],
    topActions: (
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button 
          variant="primary" 
          onClick={() => console.log('Add new patient')}
        >
          Add Patient
        </Button>
        <Button 
          variant="secondary" 
          onClick={() => console.log('Filter patients')}
        >
          Filter
        </Button>
        <Button 
          variant="secondary" 
          onClick={() => console.log('Settings')}
        >
          Settings
        </Button>
      </div>
    ),
    bottomActions: (
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button 
            variant="secondary" 
            onClick={() => console.log('Previous page')}
          >
            Previous
          </Button>
          <span style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '0 16px',
            color: '#231f20'
          }}>
            Page 1 of 3
          </span>
          <Button 
            variant="secondary" 
            onClick={() => console.log('Next page')}
          >
            Next
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button 
            variant="secondary" 
            onClick={() => console.log('Export selected')}
          >
            Export Selected
          </Button>
          <Button 
            variant="primary" 
            onClick={() => console.log('Export all')}
          >
            Export All
          </Button>
        </div>
      </div>
    ),
    cardConfig: {
      primaryField: 'name',
      secondaryFields: ['nhs_number', 'ward_name'],
      badgeFields: ['ews_score'],
      cardTemplate: getCardTemplate('patient')
    }
  },
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates the action areas feature in ResponsiveDataGrid:

**Top Actions**: Contains primary action buttons like "Add Patient", "Filter", and "Settings"
- In card layout: Appears in the top-right of the tab bar when space allows
- In table/hybrid layout: Appears above the table, right-aligned

**Bottom Actions**: Contains secondary actions like pagination and export options
- Appears below the table/cards area
- Can contain pagination controls and bulk actions
- Responsive layout adjusts for mobile devices

Try switching between different device sizes to see how the action areas adapt responsively.
        `
      }
    }
  }
};

/**
 * Grid Actions Inline: Demonstrates forwarding gridActions to AriaTabsDataGrid allowing inline placement.
 */
export const WithGridActionsInline: Story = {
  args: {
    ...baseProps,
    forceLayout: 'table',
    tabPanels: [
      {
        id: 'patients',
        label: 'Patients',
        data: patientData.slice(0, 6),
        columns: [
          { key: 'name', label: 'Name' },
          { key: 'nhs_number', label: 'NHS Number' },
          { key: 'age', label: 'Age' },
          { key: 'ward', label: 'Ward' },
          { key: 'ews_score', label: 'EWS' }
        ],
        ariaLabel: 'Patients with grid actions'
      },
      {
        id: 'more',
        label: 'More',
        data: patientData.slice(6, 10),
        columns: [
          { key: 'name', label: 'Name' },
          { key: 'nhs_number', label: 'NHS Number' },
          { key: 'age', label: 'Age' },
          { key: 'ward', label: 'Ward' },
          { key: 'ews_score', label: 'EWS' }
        ],
        ariaLabel: 'More patients'
      }
    ],
    gridActions: (
      <div style={{ display: 'flex', gap: 16 }}>
        <Button variant="secondary" onClick={() => console.log('Refresh')}>Add</Button>
        <Button variant="primary" onClick={() => console.log('Add')}>Export</Button>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates `gridActions` forwarded to the underlying AriaTabsDataGrid so they attempt inline placement beside the tabs when space allows.'
      }
    }
  }
};

/**
 * Grid Actions Forced Above: Demonstrates forceGridActionsAbove prop.
 */
export const WithGridActionsForcedAbove: Story = {
  args: {
    ...baseProps,
    forceLayout: 'table',
    tabPanels: [
      {
        id: 'patients',
        label: 'Patients',
        data: patientData.slice(0, 6),
        columns: [
          { key: 'name', label: 'Name' },
          { key: 'nhs_number', label: 'NHS Number' },
          { key: 'age', label: 'Age' },
          { key: 'ward', label: 'Ward' },
          { key: 'ews_score', label: 'EWS' }
        ],
        ariaLabel: 'Patients with forced actions above'
      }
    ],
    gridActions: (
      <div style={{ display: 'flex', gap: 16 }}>
        <Button variant="secondary" onClick={() => console.log('Export')}>Export</Button>
        <Button variant="primary" onClick={() => console.log('Create')}>Create</Button>
      </div>
    ),
    forceGridActionsAbove: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Forces the grid actions to render above the tabs regardless of available inline space.'
      }
    }
  }
};
