import type { Meta, StoryObj } from '@storybook/react';
import { AriaTabsDataGridDemo } from './AriaTabsDataGridDemo';

const meta: Meta<typeof AriaTabsDataGridDemo> = {
  title: 'NHS/Data/SortableDataTable',
  component: AriaTabsDataGridDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The AriaTabsDataGridDemo showcases the integrated tabs and data grid component designed for NHS patient care workflows. This component combines tabbed navigation with sortable data grids, providing a comprehensive interface for healthcare data management.

## Key Features

- **Integrated Tabs & Data Grids**: Each tab contains its own data grid with independent configurations
- **Healthcare-Focused**: Pre-configured for NHS EWS (Early Warning Score) patient data
- **Full ARIA Compliance**: Manual ARIA implementation ensuring complete accessibility
- **Keyboard Navigation**: Complete keyboard support with arrow keys, tab navigation, and shortcuts
- **NHS Design System**: Compliant with NHS design tokens and color schemes
- **Filter Presets**: Healthcare-specific filter presets for common workflows
- **Real Patient Data**: Demonstrates with actual EWS patient data structure
- **Responsive Design**: Mobile-first responsive layout with proper scaling

## Healthcare Tab Views

### 1. Patient Overview
- Basic patient demographics (name, age, ward, bed)
- EWS scores with color-coded risk levels
- Specialty and consultant information
- Quick reference for patient management

### 2. Vital Signs & EWS
- Early Warning Scores (sorted by risk level)
- Respiratory rate, SpO2, temperature readings
- Blood pressure and heart rate monitoring
- AVPU consciousness levels
- Critical vital signs for clinical decision making

### 3. Discharge Planning
- Anticipated discharge dates
- Discharge status and medical optimization
- Criteria to Reside (CTR) assessments
- Fast-track discharge eligibility
- Comprehensive discharge coordination

### 4. Bed Management
- Ward, room, and bed assignments
- Bed type and side room availability
- Transport booking status
- Equipment requirements
- Location and logistics tracking

## Filter Presets

The demo includes healthcare-specific filter presets:
- **High Risk Patients**: EWS score ≥ 7
- **Ready for Discharge**: Medically optimized patients
- **Fast Track**: Fast-track discharge candidates
- **ICU Patients**: Intensive care unit patients

## Keyboard Navigation

- **Arrow Keys**: Navigate between tabs and within data grids
- **Enter/Space**: Activate tabs, sort columns, select rows
- **Home/End**: Jump to start/end of current area
- **Tab**: Move between major interface sections
- **Escape**: Clear selections or exit focus

## Accessibility Features

- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Clear visual focus indicators with NHS blue
- **Keyboard-Only Operation**: Complete functionality without mouse
- **Color Coding**: EWS risk levels with accessible color contrast
- **Announcements**: Status changes announced to assistive technology

## Data Structure

Compatible with the \`patients_with_ews.json\` data structure including:
- Patient demographics and identification
- Clinical measurements and EWS calculations
- Ward and bed management information
- Discharge planning and status tracking
- Transport arrangements and requirements

## Usage

\`\`\`tsx
import { AriaTabsDataGridDemo } from '@nhs-fdp/design-system/AriaTabsDataGridDemo';

<AriaTabsDataGridDemo />
\`\`\`

The component automatically loads patient data and provides a complete healthcare data management interface.
        `,
      },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AriaTabsDataGridDemo>;

/**
 * The default AriaTabsDataGridDemo shows the complete integrated tabs and data grid
 * component with real NHS patient data. Each tab contains a different view of patient
 * information optimized for specific healthcare workflows.
 */
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

### Healthcare Workflows

This demo represents typical NHS digital workflows:
- **Ward Rounds**: Use Overview tab for general patient status
- **Clinical Reviews**: Use Vital Signs tab for medical assessment
- **Discharge Planning**: Use Discharge tab for patient flow management
- **Bed Management**: Use Bed Management tab for capacity planning

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

/**
 * Demonstrates the component with filter presets applied to show how data can be
 * filtered for specific healthcare scenarios.
 */
export const WithFilters: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates the powerful filtering capabilities of the AriaTabsDataGrid.
The component includes healthcare-specific filter presets that support common clinical workflows:

### Available Filter Presets

1. **High Risk Patients** (EWS ≥ 7)
   - Shows patients requiring immediate clinical attention
   - Red color coding indicates high-priority cases
   - Used for emergency response and clinical escalation

2. **Ready for Discharge** (Medically optimized)
   - Displays patients who are medically ready to leave
   - Supports discharge planning and bed management
   - Helps identify patients for discharge coordination

3. **Fast Track Discharge**
   - Shows patients eligible for expedited discharge
   - Supports patient flow optimization
   - Reduces length of stay and improves capacity

4. **ICU Patients**
   - Filters to show intensive care unit patients
   - Specialized view for critical care management
   - High-acuity patient monitoring

### How to Use Filters

1. Click any filter preset button to apply the filter
2. The data grid automatically updates to show filtered results
3. Patient statistics update to reflect the filtered data
4. Switch between tabs to see the filtered data in different views
5. Click "Clear Filters" to return to the complete dataset

### Filter Persistence

Filters persist across tab switches, allowing you to:
- Apply a filter and review the same patient subset across all views
- Compare different aspects of the same patient group
- Maintain focus on specific patient populations during clinical workflows
        `,
      },
    },
  },
};

/**
 * Shows the component in a constrained container to demonstrate responsive behavior
 * and how it adapts to different screen sizes.
 */
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

### Container Behavior

- **Overflow Handling**: Content scrolls cleanly within the container
- **Focus Management**: Keyboard focus remains visible during scrolling
- **Visual Hierarchy**: NHS design system spacing maintains clarity
- **Touch Support**: Optimized for touch interactions on tablet devices

### Mobile Considerations

While this demo shows a desktop container, the component is built mobile-first:
- Touch-friendly interactive areas
- Readable text sizes on small screens
- Efficient use of vertical space
- Accessible color contrasts for outdoor viewing

### Performance

The component maintains performance in constrained environments:
- Only active tab content is rendered
- Efficient re-rendering on filter changes
- Optimized DOM structure for large datasets
- Minimal memory footprint per tab
        `,
      },
    },
  },
};

/**
 * Focuses on accessibility features with enhanced visual indicators to demonstrate
 * keyboard navigation and screen reader support.
 */
export const AccessibilityDemo: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
This story highlights the comprehensive accessibility features built into the AriaTabsDataGrid
component, demonstrating WCAG 2.1 AA compliance and NHS accessibility standards.

### Keyboard Navigation Demonstration

**Tab-Level Navigation:**
1. Press Tab to focus the first tab
2. Use Left/Right arrow keys to move between tabs
3. Press Enter or Space to activate a tab
4. Use Home/End to jump to first/last tab

**Data Grid Navigation:**
1. Press Tab to enter the active data grid
2. Use arrow keys to navigate between cells
3. Press Enter on column headers to sort
4. Use Page Up/Page Down for large movements

**Filter Controls:**
1. Tab to reach filter preset buttons
2. Use Enter or Space to apply filters
3. Arrow keys move between filter options
4. Clear filters with dedicated button

### Screen Reader Support

The component provides comprehensive screen reader support:

- **Semantic Structure**: Proper heading hierarchy and landmark roles
- **Table Semantics**: Column headers, row headers, and cell relationships
- **Sort Announcements**: Sort state changes are announced clearly
- **Filter Status**: Current filter state is communicated
- **Statistical Updates**: Patient counts are announced when filters change

### Visual Accessibility

- **High Contrast**: NHS blue focus indicators on white backgrounds
- **Color Coding**: EWS risk levels use both color and text indicators
- **Large Touch Targets**: Minimum 44px touch areas for mobile accessibility
- **Clear Typography**: NHS Frutiger font stack for optimal readability

### Focus Management

- **Visual Focus**: Clear NHS blue outline on focused elements
- **Focus Persistence**: Focus remains visible during scrolling and interactions
- **Logical Order**: Tab sequence follows visual and functional hierarchy
- **Focus Restoration**: Focus returns appropriately after modal interactions

### Testing Recommendations

1. **Keyboard Only**: Navigate the entire interface using only keyboard
2. **Screen Reader**: Test with NVDA, JAWS, or VoiceOver
3. **Zoom**: Verify functionality at 200% zoom level
4. **Color Blindness**: Confirm information isn't solely color-dependent
5. **Motion Sensitivity**: Check for any unnecessary animations

This component meets NHS Digital accessibility standards and WCAG 2.1 AA requirements
for use in healthcare environments.
        `,
      },
    },
  },
};

/**
 * Demonstrates the component with controlled state management for integration
 * with larger healthcare applications.
 */
export const ControlledState: Story = {
  args: {},
  decorators: [
    (Story) => {
      // This would typically be managed by a parent application
      return (
        <div>
          <div style={{ 
            padding: '16px', 
            backgroundColor: '#f0f4f5', 
            borderRadius: '4px',
            marginBottom: '16px'
          }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#212b32' }}>
              Integration Example
            </h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#425563' }}>
              This demonstrates how the AriaTabsDataGrid can be controlled by a parent
              healthcare application for seamless integration with existing workflows.
            </p>
          </div>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    docs: {
      description: {
        story: `
This story shows how the AriaTabsDataGrid can be integrated into larger healthcare
applications with controlled state management.

### Integration Scenarios

**Electronic Health Records (EHR)**
- Embed within patient record systems
- Sync with external patient data sources
- Integrate with clinical decision support systems

**Ward Management Systems**
- Connect to bed management databases
- Real-time updates from nursing stations
- Integration with discharge planning workflows

**Clinical Dashboards**
- Part of larger clinical overview interfaces
- Integration with alerting and notification systems
- Support for multi-ward and multi-department views

### State Management

The component supports controlled modes where parent applications can:

1. **Control Active Tab**: Programmatically switch between views
2. **Apply External Filters**: Filter data based on external application state
3. **Handle Selection**: Respond to patient selection for detailed views
4. **Update Data**: Refresh data from external sources
5. **Export Data**: Extract filtered data for reports and analysis

### API Integration

Typical integration patterns include:

- **REST API**: Fetch patient data from hospital information systems
- **WebSocket**: Real-time updates for vital signs and status changes
- **FHIR**: Standard healthcare data exchange format support
- **HL7**: Integration with hospital communication systems

### Event Handling

The component emits events for:
- Tab changes for navigation tracking
- Sort changes for user preference persistence
- Filter applications for workflow optimization
- Row selections for patient detail navigation

This flexibility makes the component suitable for diverse NHS Digital environments
while maintaining consistent user experience and accessibility standards.
        `,
      },
    },
  },
};
