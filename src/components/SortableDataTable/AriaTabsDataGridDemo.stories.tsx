import type { Meta, StoryObj } from '@storybook/react';
import { AriaTabsDataGridDemo } from './AriaTabsDataGridDemo';
import { AriaTabsDataGridComprehensiveDemo } from './AriaTabsDataGridComprehensiveDemo';

const meta: Meta<typeof AriaTabsDataGridDemo> = {
  title: 'NHS/Data/SortableDataTable',
  component: AriaTabsDataGridDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The AriaTabsDataGridDemo showcases the integrated tabs and data grid component designed for NHS patient care workflows. This component combines tabbed navigation with sortable data grids, providing a comprehensive interface for healthcare data management.

## 🌟 Key Features

- **Full ARIA Compliance**: Complete accessibility support with screen reader compatibility
- **Hierarchical Keyboard Navigation**: Arrow key navigation between tabs, headers, and cells  
- **Global Multi-Column Sorting**: Drag-and-drop sort configuration with visual priority indicators
- **Domain Flexibility**: Generic core with specialized plugins for healthcare, e-commerce, and finance
- **NHS Design System Compliant**: Full integration with NHS design tokens and patterns
- **Responsive Design**: Mobile-first approach with proper scaling across devices

## 🚀 Quick Start

### Healthcare Usage (NHS)
\`\`\`tsx
import { healthcareDataConfig, createHealthcareTabsConfig } from './AriaTabsDataGridHealthcare';

const HealthcareDemo = () => {
  const healthcareTabs = createHealthcareTabsConfig(patientsData);
  return (
    <AriaTabsDataGrid
      dataConfig={healthcareDataConfig}
      tabPanels={healthcareTabs}
      ariaLabel="Timely Care Data Table Concept"
    />
  );
};
\`\`\`

### Understanding createHealthcareTabsConfig

The \`createHealthcareTabsConfig\` function is a specialized factory that transforms raw NHS patient data into a structured tab configuration optimized for healthcare workflows. It serves as the bridge between your raw EWS patient data and the AriaTabsDataGrid component.

#### 🔄 Data Flow Architecture

\`\`\`tsx
Raw Patient Data → createHealthcareTabsConfig() → Tab Panels Configuration → AriaTabsDataGrid
\`\`\`

The function works in conjunction with the \`healthcareDataConfig\` to provide intelligent column mapping and data transformation:

\`\`\`tsx
// 1. Raw EWS patient data (your input)
const patientsData = [
  {
    name: "Sarah Johnson",
    age: 67,
    bed_name: "Bay 3 Bed 2",
    ward: "Cardiology",
    ews_data: {
      respiratory_rate_bpm: 18,
      sp02: 96,
      temperature: 36.8,
      systolic_bp: 140,
      heart_rate: 88,
      avpu: "alert"
    },
    total_score: 2,
    risk_level: "low",
    anticipated_discharge_date: "2024-08-15",
    medically_optimised: true,
    criteria_to_reside: false
  }
  // ... more patients
];

// 2. Apply healthcare configuration
const healthcareTabs = createHealthcareTabsConfig(patientsData);

// 3. Use with data grid
<AriaTabsDataGrid
  dataConfig={healthcareDataConfig}  // Provides column mapping & rendering
  tabPanels={healthcareTabs}         // Provides tab structure & data
  ariaLabel="Timely Care Data Table Concept"
/>
\`\`\`

#### 📊 Column Mapping & Data Transformation

The function automatically maps your raw data fields to display-ready columns using the \`healthcareDataConfig\`:

**Data Field → Display Column Mapping:**

| Raw Data Field | Display Column | Transformation Applied |
|----------------|----------------|------------------------|
| \`name\` | Patient Name | Direct mapping with ARIA labels |
| \`age\` | Age | Formatted with "years" suffix |
| \`total_score\` | EWS Score | Color-coded by risk level (🟢🟡🔴) |
| \`ews_data.temperature\` | Temperature | Formatted as "36.8°C" with fever alerts |
| \`ews_data.sp02\` | SpO₂ | Percentage with normal/abnormal indicators |
| \`ews_data.systolic_bp\` | Blood Pressure | Combined systolic/diastolic display |
| \`medically_optimised\` | Med Optimized | Boolean → ✅/❌ with SVG icons |
| \`criteria_to_reside\` | CTR Status | Boolean → ✅/❌ with clinical context |
| \`risk_level\` | Risk Category | Text + color coding (Low/Medium/High) |

#### 🏗️ What the Function Creates

**4 Pre-configured Healthcare Tabs:**

1. **Patient Overview Tab** (\`overview\`)
   - **Purpose**: General ward round information
   - **Columns**: Name, Age, Ward, Bed, EWS Score, Consultant, Specialty
   - **Data Source**: All patients with core demographics
   - **Use Case**: Daily ward rounds, handovers, general patient status

2. **Vital Signs & EWS Tab** (\`vitals\`)
   - **Purpose**: Clinical assessment and monitoring
   - **Columns**: Name, Temperature, SpO₂, Heart Rate, BP, Respiratory Rate, AVPU, EWS Score
   - **Data Source**: All patients with detailed vital signs from \`ews_data\`
   - **Use Case**: Clinical reviews, deteriorating patient identification

3. **Discharge Planning Tab** (\`discharge\`)
   - **Purpose**: Patient flow and discharge coordination
   - **Columns**: Name, Anticipated Discharge, Med Optimized, CTR Status, Discharge Ready, Ward
   - **Data Source**: Patients with discharge planning data
   - **Use Case**: Bed management, discharge coordination, flow optimization

4. **Bed Management Tab** (\`beds\`)
   - **Purpose**: Logistics and capacity management
   - **Columns**: Bed, Patient Name, Ward, Bed Type, Admission Date, Length of Stay
   - **Data Source**: All patients with location and timing data
   - **Use Case**: Capacity planning, bed allocation, logistics coordination

#### 🎨 Column Rendering & Data Configuration

The \`healthcareDataConfig\` provides specialized rendering for healthcare data:

**Boolean Renderers:**
\`\`\`tsx
// Automatic boolean field detection and rendering
medically_optimised: true  → ✅ (Green checkmark SVG)
criteria_to_reside: false → ❌ (Red cross SVG) 
discharge_ready: true     → ✅ (Green checkmark SVG)
\`\`\`

**Clinical Value Formatting:**
\`\`\`tsx
// Temperature with clinical context
36.8 → "36.8°C" (normal)
38.5 → "38.5°C ⚠️" (fever alert)

// SpO2 with range indicators  
96 → "96%" (normal)
88 → "88% ⚠️" (low oxygen)

// EWS Score with risk stratification
2 → "2 🟢" (Low Risk - Green)
5 → "5 🟡" (Medium Risk - Amber) 
8 → "8 🔴" (High Risk - Red)
\`\`\`

#### 🔧 Key Transformations Applied

**1. Risk Stratification:**
- Applies NHS EWS thresholds for color coding
- Sorts high-risk patients to top of lists automatically
- Adds visual risk indicators throughout the interface

**2. Clinical Formatting:**
- Formats vital signs according to NHS clinical standards
- Adds appropriate units and clinical context
- Provides abnormal value alerts and warnings

**3. Boolean Enhancement:**
- Converts boolean fields to visual indicators
- Uses healthcare-appropriate icons (✅/❌ for clinical status)
- Provides accessible labels for screen readers

**4. Filter Preset Generation:**
- Creates healthcare-specific filter presets automatically
- High Risk Patients (EWS ≥ 7) for emergency response
- Ready for Discharge for bed management workflows
- Fast Track Discharge for flow optimization
- ICU Patients for critical care monitoring

#### 💡 Benefits Over Manual Configuration

**Instead of manually defining 4 tabs × 6-8 columns each:**
- ✅ **Instant Setup**: Single function call creates complete healthcare interface
- ✅ **NHS Compliance**: Pre-built to meet NHS Digital standards and clinical workflows
- ✅ **Automatic Formatting**: Clinical values formatted correctly without custom renderers
- ✅ **Risk Intelligence**: EWS color coding and risk stratification built-in
- ✅ **Workflow Optimization**: Tabs organized for common nursing and medical workflows
- ✅ **Accessibility**: Full ARIA compliance and screen reader support included
- ✅ **Maintenance**: Single source of truth for healthcare column definitions

#### 🔄 Extending the Configuration

To customize or extend the healthcare configuration:

\`\`\`tsx
// Custom column additions
const customHealthcareTabs = createHealthcareTabsConfig(patientsData, {
  additionalColumns: [
    { key: 'custom_field', label: 'Custom Data', render: (patient) => patient.custom_field }
  ],
  customFilters: [
    { id: 'custom_filter', label: 'Custom Filter', filterFn: (patients) => patients.filter(p => p.custom_condition) }
  ]
});
\`\`\`

This architecture ensures that healthcare teams can focus on patient care rather than configuring data grids, while maintaining the flexibility to extend and customize as needed.

#### 🛠️ Creating Custom Data Mapping

For organizations with specific data structures or requirements, you can create custom data mappings using the patient data as a foundation. Here's a step-by-step guide:

**Step 1: Analyze Your Patient Data Structure**

\`\`\`tsx
// Example: Your custom patient data structure
const customPatientData = [
  {
    // Core patient info (standard)
    patient_id: "NHS123456789",
    full_name: "Emma Thompson",
    date_of_birth: "1956-04-15",
    age_years: 67,
    
    // Location info (custom structure)
    location: {
      ward_code: "CARD_01",
      ward_name: "Cardiology Ward",
      bed_number: "03-02",
      room_type: "side_room"
    },
    
    // Clinical data (custom nested structure)
    clinical_observations: {
      vital_signs: {
        temp_celsius: 37.2,
        oxygen_saturation: 94,
        pulse_rate: 92,
        blood_pressure: { systolic: 145, diastolic: 88 },
        respiratory_rate: 20
      },
      consciousness_level: "responds_to_voice",
      pain_score: 3,
      early_warning_score: 6
    },
    
    // Discharge planning (custom fields)
    discharge_info: {
      estimated_discharge: "2024-08-20",
      medical_clearance: true,
      social_clearance: false,
      transport_arranged: false,
      discharge_destination: "home_with_support"
    },
    
    // Medical team (custom structure)
    care_team: {
      consultant: "Dr. Sarah Mitchell",
      registrar: "Dr. James Wilson",
      specialty: "Cardiology",
      named_nurse: "RN Mary Johnson"
    }
  }
  // ... more patients
];
\`\`\`

**Step 2: Create Custom Column Mapping Configuration**

\`\`\`tsx
// Define how your custom data maps to display columns
const customDataConfig = {
  // Custom boolean renderer for your specific fields
  booleanRenderer: (value: boolean, fieldName?: string) => {
    const iconMap = {
      medical_clearance: value ? '🏥✅' : '🏥❌',
      social_clearance: value ? '🏠✅' : '🏠❌',
      transport_arranged: value ? '🚐✅' : '🚐❌'
    };
    
    const defaultIcon = value ? '✅' : '❌';
    const icon = fieldName && iconMap[fieldName] ? iconMap[fieldName] : defaultIcon;
    
    return (
      <span className={\`boolean-indicator \${value ? 'positive' : 'negative'}\`}>
        {icon}
      </span>
    );
  },
  
  // Custom data comparator for your patient objects
  dataComparator: (a, b) => a.patient_id === b.patient_id,
  
  // Custom ID extraction
  getDataId: (patient) => patient.patient_id,
  
  // Custom filter function
  filterFunction: (patients, filters) => {
    if (!filters) return patients;
    
    return patients.filter(patient => {
      // High risk filter (EWS >= 7)
      if (filters.highRisk && patient.clinical_observations.early_warning_score < 7) {
        return false;
      }
      
      // Ready for discharge filter
      if (filters.readyForDischarge) {
        const discharge = patient.discharge_info;
        return discharge.medical_clearance && discharge.social_clearance;
      }
      
      // ICU patients filter
      if (filters.icuPatients && !patient.location.ward_name.toLowerCase().includes('icu')) {
        return false;
      }
      
      return true;
    });
  }
};
\`\`\`

**Step 3: Create Custom Tab Configuration**

\`\`\`tsx
const createCustomHealthcareTabsConfig = (patientData) => {
  return [
    {
      id: 'overview',
      label: 'Patient Overview',
      data: patientData,
      columns: [
        { key: 'full_name', label: 'Patient Name' },
        { key: 'age_years', label: 'Age', render: (p) => \`\${p.age_years} years\` },
        { key: 'location.ward_name', label: 'Ward' },
        { key: 'location.bed_number', label: 'Bed' },
        { 
          key: 'clinical_observations.early_warning_score', 
          label: 'EWS Score',
          render: (p) => {
            const score = p.clinical_observations.early_warning_score;
            const riskLevel = score >= 7 ? 'high' : score >= 4 ? 'medium' : 'low';
            const colors = { low: '🟢', medium: '🟡', high: '🔴' };
            return \`\${score} \${colors[riskLevel]}\`;
          }
        },
        { key: 'care_team.consultant', label: 'Consultant' },
        { key: 'care_team.specialty', label: 'Specialty' }
      ]
    },
    
    {
      id: 'vitals',
      label: 'Vital Signs & Clinical',
      data: patientData,
      columns: [
        { key: 'full_name', label: 'Patient Name' },
        { 
          key: 'clinical_observations.vital_signs.temp_celsius', 
          label: 'Temperature',
          render: (p) => {
            const temp = p.clinical_observations.vital_signs.temp_celsius;
            const alert = temp >= 38 ? ' ⚠️' : '';
            return \`\${temp}°C\${alert}\`;
          }
        },
        { 
          key: 'clinical_observations.vital_signs.oxygen_saturation', 
          label: 'SpO₂',
          render: (p) => {
            const spo2 = p.clinical_observations.vital_signs.oxygen_saturation;
            const alert = spo2 < 95 ? ' ⚠️' : '';
            return \`\${spo2}%\${alert}\`;
          }
        },
        { key: 'clinical_observations.vital_signs.pulse_rate', label: 'Heart Rate', render: (p) => \`\${p.clinical_observations.vital_signs.pulse_rate} bpm\` },
        { 
          key: 'clinical_observations.vital_signs.blood_pressure', 
          label: 'Blood Pressure',
          render: (p) => {
            const bp = p.clinical_observations.vital_signs.blood_pressure;
            return \`\${bp.systolic}/\${bp.diastolic}\`;
          }
        },
        { key: 'clinical_observations.consciousness_level', label: 'AVPU', render: (p) => p.clinical_observations.consciousness_level.replace('_', ' ').toUpperCase() },
        { key: 'clinical_observations.pain_score', label: 'Pain Score', render: (p) => \`\${p.clinical_observations.pain_score}/10\` }
      ]
    },
    
    {
      id: 'discharge',
      label: 'Discharge Planning',
      data: patientData,
      columns: [
        { key: 'full_name', label: 'Patient Name' },
        { key: 'discharge_info.estimated_discharge', label: 'Est. Discharge', render: (p) => new Date(p.discharge_info.estimated_discharge).toLocaleDateString() },
        { key: 'discharge_info.medical_clearance', label: 'Medical Clearance' },
        { key: 'discharge_info.social_clearance', label: 'Social Clearance' },
        { key: 'discharge_info.transport_arranged', label: 'Transport' },
        { key: 'discharge_info.discharge_destination', label: 'Destination', render: (p) => p.discharge_info.discharge_destination.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()) },
        { key: 'location.ward_name', label: 'Current Ward' }
      ]
    },
    
    {
      id: 'team',
      label: 'Care Team & Location',
      data: patientData,
      columns: [
        { key: 'location.bed_number', label: 'Bed' },
        { key: 'full_name', label: 'Patient Name' },
        { key: 'location.ward_name', label: 'Ward' },
        { key: 'location.room_type', label: 'Room Type', render: (p) => p.location.room_type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()) },
        { key: 'care_team.consultant', label: 'Consultant' },
        { key: 'care_team.registrar', label: 'Registrar' },
        { key: 'care_team.named_nurse', label: 'Named Nurse' }
      ]
    }
  ];
};
\`\`\`

**Step 4: Implement Custom Filter Presets**

\`\`\`tsx
const customFilterPresets = [
  {
    id: 'high_risk',
    label: 'High Risk Patients',
    description: 'EWS ≥ 7 requiring urgent attention',
    filterConfig: { highRisk: true },
    count: (patients) => patients.filter(p => p.clinical_observations.early_warning_score >= 7).length
  },
  {
    id: 'ready_discharge',
    label: 'Ready for Discharge',
    description: 'Medical and social clearance complete',
    filterConfig: { readyForDischarge: true },
    count: (patients) => patients.filter(p => 
      p.discharge_info.medical_clearance && p.discharge_info.social_clearance
    ).length
  },
  {
    id: 'awaiting_transport',
    label: 'Awaiting Transport',
    description: 'Discharge ready but transport not arranged',
    filterConfig: { awaitingTransport: true },
    count: (patients) => patients.filter(p => 
      p.discharge_info.medical_clearance && 
      p.discharge_info.social_clearance && 
      !p.discharge_info.transport_arranged
    ).length
  }
];
\`\`\`

**Step 5: Use Your Custom Configuration**

\`\`\`tsx
const MyCustomHealthcareDemo = () => {
  const customTabs = createCustomHealthcareTabsConfig(customPatientData);
  
  return (
    <AriaTabsDataGrid
      dataConfig={customDataConfig}
      tabPanels={customTabs}
      filterPresets={customFilterPresets}
      ariaLabel="Custom Timely Care Data Table Concept"
      onTabChange={(index) => console.log('Tab changed to:', index)}
      onGlobalRowSelectionChange={(patient) => console.log('Patient selected:', patient.patient_id)}
    />
  );
};
\`\`\`

**Key Mapping Strategies:**

1. **Nested Data Access**: Use dot notation in column keys (\`'location.ward_name'\`) for nested object properties
2. **Custom Renderers**: Transform raw data into display-friendly formats with clinical context
3. **Boolean Fields**: Map boolean values to healthcare-appropriate visual indicators
4. **Risk Stratification**: Apply clinical logic for color coding and prioritization
5. **Date Formatting**: Convert ISO dates to user-friendly display formats
6. **Enumeration Mapping**: Transform coded values (like \`responds_to_voice\`) into readable text

This approach gives you complete control over how your specific patient data structure is displayed while maintaining the powerful features of the AriaTabsDataGrid component.

## 📚 Complete Documentation

For comprehensive setup guides, complete API reference, troubleshooting, and advanced examples, see the **AriaTabsDataGrid.mdx** file in the same directory.
        `,
      },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AriaTabsDataGridDemo>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
This is the complete demonstration of the AriaTabsDataGrid component showing real NHS patient data
across four specialized healthcare views:

### Tab Overview

1. **Patient Overview**: Core patient information for general management
2. **Vital Signs & EWS**: Clinical measurements and early warning scores
3. **Discharge Planning**: Discharge coordination and planning data
4. **Bed Management**: Location and logistics information

### Interactive Features

- **Tab Navigation**: Click tabs or use left/right arrow keys to switch views
- **Data Grid Sorting**: Click column headers to sort data within each tab
- **Filter Presets**: Use the filter buttons to apply common healthcare filters
- **Statistics Display**: View patient statistics and counts for each category
- **Row Selection**: Click rows to select patients for further action

### EWS Color Coding

Early Warning Scores use NHS-approved color coding:
- **🟢 Low Risk (0-3)**: Green indicators for stable patients
- **🟡 Medium Risk (4-6)**: Amber indicators requiring monitoring
- **🔴 High Risk (7+)**: Red indicators for urgent clinical review
        `,
      },
    },
  },
};

export const WithFilters: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates the powerful filtering capabilities of the AriaTabsDataGrid.
The component includes healthcare-specific filter presets that support common clinical workflows.

### Available Filter Presets

1. **High Risk Patients** (EWS ≥ 7) - Shows patients requiring immediate clinical attention
2. **Ready for Discharge** (Medically optimized) - Displays patients who are medically ready to leave
3. **Fast Track Discharge** - Shows patients eligible for expedited discharge
4. **ICU Patients** - Filters to show intensive care unit patients

### How to Use Filters

1. Click any filter preset button to apply the filter
2. The data grid automatically updates to show filtered results
3. Patient statistics update to reflect the filtered data
4. Switch between tabs to see the filtered data in different views
5. Click "Clear Filters" to return to the complete dataset
        `,
      },
    },
  },
};

export const ResponsiveLayout: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ 
        width: '900px', 
        height: '700px', 
        border: '2px solid #d8dde0', 
        borderRadius: '4px',
        overflow: 'auto',
        padding: '16px',
        backgroundColor: '#f0f4f5'
      }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#212b32' }}>
          Constrained Container Demo
        </h3>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates how the AriaTabsDataGrid adapts to different container sizes
and maintains functionality in responsive layouts.

### Responsive Features

1. **Flexible Tab Layout**: Tabs adjust to available width while maintaining readability
2. **Data Grid Scrolling**: Tables provide horizontal scrolling when columns exceed container width
3. **Sticky Headers**: Column headers remain visible during vertical scrolling
4. **Filter Controls**: Filter buttons wrap appropriately on smaller screens
5. **Statistics Panel**: Patient statistics adapt to available space
        `,
      },
    },
  },
};

export const AccessibilityDemo: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
This story highlights the comprehensive accessibility features built into the AriaTabsDataGrid
component, demonstrating WCAG 2.1 AA compliance and NHS accessibility standards.

### Keyboard Navigation

**Tab-Level Navigation:**
- Tab/Shift+Tab: Move between tabs
- Arrow Left/Right: Navigate between tabs  
- Home/End: Jump to first/last tab
- Enter/Space: Activate tab

**Data Grid Navigation:**
- Arrow Keys: Navigate between cells
- Home/End: Navigate to row start/end
- Enter/Space: Select/deselect row

### Screen Reader Support

- **Semantic Structure**: Proper heading hierarchy and landmark roles
- **Table Semantics**: Column headers, row headers, and cell relationships
- **Sort Announcements**: Sort state changes are announced clearly
- **Filter Status**: Current filter state is communicated

This component meets NHS Digital accessibility standards and WCAG 2.1 AA requirements.
        `,
      },
    },
  },
};

export const ComprehensivePluginDemo: Story = {
  render: () => <AriaTabsDataGridComprehensiveDemo />,
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates the comprehensive plugin system with all domain configurations:
Healthcare, E-commerce, and Financial data grids.

### Plugin System Features

**Healthcare Mode**
- Patient management with EWS scores
- Boolean values for discharge status, medical optimization
- SVG icons for clinical indicators

**E-commerce Mode** 
- Product catalogs with inventory management
- Boolean "inStock" field with SVG tick/cross icons
- Price comparisons and ratings

**Financial Mode**
- Transaction history and categorization  
- Boolean "pending" field with SVG tick/cross icons
- Credit/debit transaction types

Switch between modes to see SVG icons and domain-specific features in action.
        `,
      },
    },
  },
};
