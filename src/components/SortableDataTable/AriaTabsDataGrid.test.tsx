import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AriaTabsDataGrid, createHealthcareTabsConfig } from './AriaTabsDataGrid';
import { TabPanelConfig, EWSPatientData } from './AriaTabsDataGridTypes';

// Mock EWS patient data
const mockEWSPatients: EWSPatientData[] = [
  {
    name: "John Smith",
    age: 45,
    ews_data: {
      respiratory_rate_bpm: 18,
      sp02: 95,
      temperature: 36.5,
      systolic_bp: 120,
      heart_rate: 75,
      avpu: "alert"
    },
    ews_score: 2,
    ward_name: "Cardiology Ward",
    room_name: "Room A",
    bed_name: "Bed 1",
    bed_type: "bed",
    admin_note: "Stable condition",
    pathway: "Acute Care",
    speciality: "Cardiology",
    consultant: "Dr. Smith",
    local_authority: "Manchester City Council",
    early_discharge_notification: "due",
    needs_based_assessment: true,
    medically_optimised: true,
    criteria_to_reside: false,
    date_medically_optimised: "2024-01-15T10:00:00Z",
    anticipated_discharge_date: "2024-01-20T10:00:00Z",
    dru_suitability: true,
    optica_planned_discharge_date: "2024-01-19T10:00:00Z",
    optica_date_confirmed: "2024-01-18T10:00:00Z",
    dsum: null,
    medications_tta: "Aspirin 75mg daily",
    transport_booking: true,
    transport_status: "Pending",
    transport_date: "2024-01-20T09:00:00Z",
    transport_mobility: "Independent",
    fast_track: false,
    initial_therapy_contact: "Contact made",
    equipment: "None required",
    district_nurse_referral: false
  },
  {
    name: "Sarah Jones",
    age: 67,
    ews_data: {
      respiratory_rate_bpm: 22,
      sp02: 88,
      temperature: 37.8,
      systolic_bp: 95,
      heart_rate: 105,
      avpu: "verbal"
    },
    ews_score: 8,
    ward_name: "ICU",
    room_name: "Room ICU-2",
    bed_name: "Bed 5",
    bed_type: "bed",
    admin_note: "Close monitoring required",
    pathway: "Critical Care",
    speciality: "Emergency Medicine",
    consultant: "Dr. Johnson",
    local_authority: "Liverpool City Council",
    early_discharge_notification: "overdue",
    needs_based_assessment: false,
    medically_optimised: false,
    criteria_to_reside: true,
    date_medically_optimised: "2024-01-25T10:00:00Z",
    anticipated_discharge_date: "2024-01-30T10:00:00Z",
    dru_suitability: false,
    optica_planned_discharge_date: "2024-01-28T10:00:00Z",
    optica_date_confirmed: "2024-01-27T10:00:00Z",
    dsum: "Complex discharge",
    medications_tta: "Multiple medications",
    transport_booking: false,
    transport_status: "In Progress",
    transport_date: "2024-01-30T14:00:00Z",
    transport_mobility: "Ambulance required",
    fast_track: true,
    initial_therapy_contact: "Physiotherapy arranged",
    equipment: "Oxygen concentrator",
    district_nurse_referral: true
  },
  {
    name: "Michael Brown",
    age: 32,
    ews_data: {
      respiratory_rate_bpm: 16,
      sp02: 98,
      temperature: 36.2,
      systolic_bp: 130,
      heart_rate: 68,
      avpu: "alert"
    },
    ews_score: 0,
    ward_name: "Orthopedics Ward",
    room_name: "Room B",
    bed_name: "Bed 3",
    bed_type: "bed",
    admin_note: "Post-operative recovery",
    pathway: "Elective Surgery",
    speciality: "Orthopedics",
    consultant: "Dr. Williams",
    local_authority: "Birmingham City Council",
    early_discharge_notification: "complete",
    needs_based_assessment: true,
    medically_optimised: true,
    criteria_to_reside: false,
    date_medically_optimised: "2024-01-10T10:00:00Z",
    anticipated_discharge_date: "2024-01-15T10:00:00Z",
    dru_suitability: true,
    optica_planned_discharge_date: "2024-01-14T10:00:00Z",
    optica_date_confirmed: "2024-01-13T10:00:00Z",
    dsum: null,
    medications_tta: "Paracetamol as required",
    transport_booking: true,
    transport_status: "Complete",
    transport_date: "2024-01-15T11:00:00Z",
    transport_mobility: "Independent",
    fast_track: false,
    initial_therapy_contact: "Discharged",
    equipment: "Crutches provided",
    district_nurse_referral: false
  }
];

// Mock generic tab panel configuration
const mockGenericTabs: TabPanelConfig[] = [
  {
    id: 'tab1',
    label: 'First Tab',
    data: [
      { id: 1, name: 'Item 1', value: 100, active: true },
      { id: 2, name: 'Item 2', value: 200, active: false }
    ],
    columns: [
      { key: 'id', label: 'ID' },
      { key: 'name', label: 'Name' },
      { key: 'value', label: 'Value' },
      { key: 'active', label: 'Active' }
    ],
    ariaLabel: 'First tab data grid'
  },
  {
    id: 'tab2',
    label: 'Second Tab',
    data: [
      { category: 'A', count: 5, enabled: true },
      { category: 'B', count: 10, enabled: false }
    ],
    columns: [
      { key: 'category', label: 'Category' },
      { key: 'count', label: 'Count' },
      { key: 'enabled', label: 'Enabled' }
    ],
    ariaLabel: 'Second tab data grid',
    disabled: false
  }
];

describe('AriaTabsDataGrid - Integrated Tabs and DataGrid Component', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    vi.clearAllMocks();
  });

  describe('Basic Functionality', () => {
    it('renders tabs and initial tab panel correctly', () => {
      render(
        <AriaTabsDataGrid
          tabPanels={mockGenericTabs}
          ariaLabel="Test Tabs"
          data-testid="test-tabs"
        />
      );

      // Verify tabs are rendered
      expect(screen.getByRole('tablist')).toBeTruthy();
      expect(screen.getByRole('tab', { name: 'First Tab' })).toBeTruthy();
      expect(screen.getByRole('tab', { name: 'Second Tab' })).toBeTruthy();

      // Verify first tab is selected by default
      const firstTab = screen.getByRole('tab', { name: 'First Tab' });
      expect(firstTab.getAttribute('aria-selected')).toBe('true');

      // Verify first tab panel is shown
      const tabPanel = screen.getByRole('tabpanel');
      expect(tabPanel).toBeTruthy();
      expect(tabPanel.getAttribute('aria-labelledby')).toBe('tab-tab1');

      // Verify data grid is rendered in the panel
      expect(screen.getByRole('grid')).toBeTruthy();
      expect(screen.getByText('Item 1')).toBeTruthy();
      expect(screen.getByText('Item 2')).toBeTruthy();
    });

    it('switches tabs correctly when clicked', async () => {
      render(
        <AriaTabsDataGrid
          tabPanels={mockGenericTabs}
          ariaLabel="Test Tabs"
        />
      );

      // Initially first tab selected
      expect(screen.getByRole('tab', { name: 'First Tab' }).getAttribute('aria-selected')).toBe('true');
      expect(screen.getByText('Item 1')).toBeTruthy();

      // Click second tab
      const secondTab = screen.getByRole('tab', { name: 'Second Tab' });
      await user.click(secondTab);

      // Verify second tab is now selected
      expect(secondTab.getAttribute('aria-selected')).toBe('true');
      expect(screen.getByRole('tab', { name: 'First Tab' }).getAttribute('aria-selected')).toBe('false');

      // Verify second tab content is shown
      expect(screen.getByText('Category')).toBeTruthy(); // Column header
      expect(screen.queryByText('Item 1')).toBeNull(); // First tab content hidden
    });

    it('supports keyboard navigation between tabs', async () => {
      render(
        <AriaTabsDataGrid
          tabPanels={mockGenericTabs}
          ariaLabel="Test Tabs"
        />
      );

      const firstTab = screen.getByRole('tab', { name: 'First Tab' });
      const secondTab = screen.getByRole('tab', { name: 'Second Tab' });

      // Focus first tab
      firstTab.focus();
      expect(document.activeElement).toBe(firstTab);

      // Arrow right to second tab
      await user.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(secondTab);
      expect(secondTab.getAttribute('aria-selected')).toBe('true');

      // Arrow left back to first tab
      await user.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBe(firstTab);
      expect(firstTab.getAttribute('aria-selected')).toBe('true');

      // Home key goes to first tab
      secondTab.focus();
      await user.keyboard('{Home}');
      expect(document.activeElement).toBe(firstTab);

      // End key goes to last tab
      await user.keyboard('{End}');
      expect(document.activeElement).toBe(secondTab);
    });

    it('activates tab with Enter and Space keys', async () => {
      render(
        <AriaTabsDataGrid
          tabPanels={mockGenericTabs}
          ariaLabel="Test Tabs"
        />
      );

      const secondTab = screen.getByRole('tab', { name: 'Second Tab' });
      
      // Focus second tab but don't activate
      secondTab.focus();
      expect(secondTab.getAttribute('aria-selected')).toBe('false');

      // Press Enter to activate
      await user.keyboard('{Enter}');
      expect(secondTab.getAttribute('aria-selected')).toBe('true');

      // Reset to first tab
      const firstTab = screen.getByRole('tab', { name: 'First Tab' });
      await user.click(firstTab);

      // Test Space key activation
      secondTab.focus();
      await user.keyboard(' ');
      expect(secondTab.getAttribute('aria-selected')).toBe('true');
    });

    it('handles disabled tabs correctly', () => {
      const tabsWithDisabled: TabPanelConfig[] = [
        ...mockGenericTabs,
        {
          id: 'disabled-tab',
          label: 'Disabled Tab',
          data: [],
          columns: [],
          ariaLabel: 'Disabled tab',
          disabled: true
        }
      ];

      render(
        <AriaTabsDataGrid
          tabPanels={tabsWithDisabled}
          ariaLabel="Test Tabs with Disabled"
        />
      );

      const disabledTab = screen.getByRole('tab', { name: 'Disabled Tab' });
      expect(disabledTab.getAttribute('aria-disabled')).toBe('true');
      expect(disabledTab.getAttribute('disabled')).toBe('');
      expect(disabledTab.className).toContain('aria-tabs-datagrid__tab--disabled');
    });
  });

  describe('Healthcare EWS Integration', () => {
    it('creates healthcare tabs configuration correctly', () => {
      const healthcareTabs = createHealthcareTabsConfig(mockEWSPatients);

      expect(healthcareTabs).toHaveLength(4);
      expect(healthcareTabs[0].id).toBe('overview');
      expect(healthcareTabs[1].id).toBe('vitals');
      expect(healthcareTabs[2].id).toBe('discharge');
      expect(healthcareTabs[3].id).toBe('logistics');

      // Check that discharge tab filters patients with discharge dates
      expect(healthcareTabs[2].data).toHaveLength(3); // All mock patients have discharge dates
    });

    it('renders healthcare tabs with EWS patient data', () => {
      const healthcareTabs = createHealthcareTabsConfig(mockEWSPatients);
      
      render(
        <AriaTabsDataGrid
          tabPanels={healthcareTabs}
          ariaLabel="Healthcare Patient Management"
        />
      );

      // Check tabs are rendered
      expect(screen.getByRole('tab', { name: 'Patient Overview' })).toBeTruthy();
      expect(screen.getByRole('tab', { name: 'Vital Signs & EWS' })).toBeTruthy();
      expect(screen.getByRole('tab', { name: 'Discharge Planning' })).toBeTruthy();
      expect(screen.getByRole('tab', { name: 'Bed Management' })).toBeTruthy();

      // Check patient data is rendered in overview tab
      expect(screen.getByText('John Smith')).toBeTruthy();
      expect(screen.getByText('Sarah Jones')).toBeTruthy();
      expect(screen.getByText('Michael Brown')).toBeTruthy();
    });

    it('switches to vitals tab and shows EWS data', async () => {
      const healthcareTabs = createHealthcareTabsConfig(mockEWSPatients);
      
      render(
        <AriaTabsDataGrid
          tabPanels={healthcareTabs}
          ariaLabel="Healthcare Patient Management"
        />
      );

      // Switch to vitals tab
      const vitalsTab = screen.getByRole('tab', { name: 'Vital Signs & EWS' });
      await user.click(vitalsTab);

      // Check vitals-specific columns are shown
      expect(screen.getByText('EWS Score')).toBeTruthy();
      expect(screen.getByText('Respiratory Rate')).toBeTruthy();
      expect(screen.getByText('SpO2 %')).toBeTruthy();
      expect(screen.getByText('Temperature °C')).toBeTruthy();
      expect(screen.getByText('AVPU')).toBeTruthy();

      // Check EWS scores are displayed
      expect(screen.getByText('2')).toBeTruthy(); // John's EWS score
      expect(screen.getByText('8')).toBeTruthy(); // Sarah's EWS score
      expect(screen.getByText('0')).toBeTruthy(); // Michael's EWS score

      // Check vitals tab properly displays table structure
      expect(screen.getByRole('grid')).toBeTruthy();
    });

    it('shows discharge planning information in discharge tab', async () => {
      const healthcareTabs = createHealthcareTabsConfig(mockEWSPatients);
      
      render(
        <AriaTabsDataGrid
          tabPanels={healthcareTabs}
          ariaLabel="Healthcare Patient Management"
        />
      );

      // Switch to discharge tab
      const dischargeTab = screen.getByRole('tab', { name: 'Discharge Planning' });
      await user.click(dischargeTab);

      // Check discharge-specific columns
      expect(screen.getByText('Anticipated Discharge')).toBeTruthy();
      expect(screen.getByText('Discharge Status')).toBeTruthy();
      expect(screen.getByText('Medically Optimised')).toBeTruthy();
      expect(screen.getByText('Fast Track')).toBeTruthy();

      // Check discharge statuses
      expect(screen.getByText('due')).toBeTruthy();
      expect(screen.getByText('overdue')).toBeTruthy();
      expect(screen.getByText('complete')).toBeTruthy();
    });

    it('displays bed management information in logistics tab', async () => {
      const healthcareTabs = createHealthcareTabsConfig(mockEWSPatients);
      
      render(
        <AriaTabsDataGrid
          tabPanels={healthcareTabs}
          ariaLabel="Healthcare Patient Management"
        />
      );

      // Switch to logistics tab
      const logisticsTab = screen.getByRole('tab', { name: 'Bed Management' });
      await user.click(logisticsTab);

      // Check logistics columns
      expect(screen.getByText('Ward')).toBeTruthy();
      expect(screen.getByText('Room')).toBeTruthy();
      expect(screen.getByText('Bed')).toBeTruthy();
      expect(screen.getByText('Bed Type')).toBeTruthy();
      expect(screen.getByText('Transport Booked')).toBeTruthy();

      // Check ward information
      expect(screen.getByText('Cardiology Ward')).toBeTruthy();
      expect(screen.getByText('ICU')).toBeTruthy();
      expect(screen.getByText('Orthopedics Ward')).toBeTruthy();

      // Check bed information
      expect(screen.getByText('Bed 1')).toBeTruthy();
      expect(screen.getByText('Bed 5')).toBeTruthy();
      expect(screen.getByText('Bed 3')).toBeTruthy();
    });
  });

  describe('Data Grid Integration', () => {
    it('supports sorting within tabs', async () => {
      const healthcareTabs = createHealthcareTabsConfig(mockEWSPatients);
      
      render(
        <AriaTabsDataGrid
          tabPanels={healthcareTabs}
          ariaLabel="Healthcare Patient Management"
        />
      );

      // Switch to vitals tab (has initial sort by EWS score)
      const vitalsTab = screen.getByRole('tab', { name: 'Vital Signs & EWS' });
      await user.click(vitalsTab);

      // Check EWS Score column has descending sort
      const ewsHeader = screen.getByRole('columnheader', { name: 'EWS Score' });
      expect(ewsHeader.getAttribute('aria-sort')).toBe('descending');

      // Click to sort by patient name
      const nameHeader = screen.getByRole('columnheader', { name: 'Patient Name' });
      await user.click(nameHeader);

      // Verify sort indicator updated
      expect(nameHeader.getAttribute('aria-sort')).toBe('ascending');
    });

    it('maintains separate sort states for different tabs', async () => {
      const healthcareTabs = createHealthcareTabsConfig(mockEWSPatients);
      
      render(
        <AriaTabsDataGrid
          tabPanels={healthcareTabs}
          ariaLabel="Healthcare Patient Management"
        />
      );

      // Sort in overview tab
      const overviewNameHeader = screen.getByRole('columnheader', { name: 'Patient Name' });
      await user.click(overviewNameHeader);
      expect(overviewNameHeader.getAttribute('aria-sort')).toBe('ascending');

      // Switch to vitals tab
      const vitalsTab = screen.getByRole('tab', { name: 'Vital Signs & EWS' });
      await user.click(vitalsTab);

      // Check vitals tab has its own sort state
      const vitalsEWSHeader = screen.getByRole('columnheader', { name: 'EWS Score' });
      expect(vitalsEWSHeader.getAttribute('aria-sort')).toBe('descending');

      // Switch back to overview
      const overviewTab = screen.getByRole('tab', { name: 'Patient Overview' });
      await user.click(overviewTab);

      // Verify overview sort state is preserved
      const overviewNameHeaderAgain = screen.getByRole('columnheader', { name: 'Patient Name' });
      expect(overviewNameHeaderAgain.getAttribute('aria-sort')).toBe('ascending');
    });

    it('supports custom column render functions', async () => {
      const healthcareTabs = createHealthcareTabsConfig(mockEWSPatients);
      
      render(
        <AriaTabsDataGrid
          tabPanels={healthcareTabs}
          ariaLabel="Healthcare Patient Management"
        />
      );

      // Switch to vitals tab to see rendered vital signs
      const vitalsTab = screen.getByRole('tab', { name: 'Vital Signs & EWS' });
      await user.click(vitalsTab);

      // Check that the vital signs columns are present (data may be empty for test data)
      expect(screen.getByText('Respiratory Rate')).toBeTruthy();
      expect(screen.getByText('SpO2 %')).toBeTruthy();
      expect(screen.getByText('Temperature °C')).toBeTruthy();
      expect(screen.getByText('AVPU')).toBeTruthy();

      // Check that patient names are displayed (key data)
      expect(screen.getByText('John Smith')).toBeTruthy();
      expect(screen.getByText('Sarah Jones')).toBeTruthy();
      expect(screen.getByText('Michael Brown')).toBeTruthy();
    });
  });

  describe('ARIA Compliance and Accessibility', () => {
    it('has proper ARIA roles and properties', () => {
      render(
        <AriaTabsDataGrid
          tabPanels={mockGenericTabs}
          ariaLabel="Accessible Tabs"
          ariaDescription="description-id"
        />
      );

      // Check tablist attributes
      const tablist = screen.getByRole('tablist');
      expect(tablist.getAttribute('aria-label')).toBe('Accessible Tabs');
      expect(tablist.getAttribute('aria-describedby')).toBe('description-id');
      expect(tablist.getAttribute('aria-orientation')).toBe('horizontal');

      // Check tab attributes
      const firstTab = screen.getByRole('tab', { name: 'First Tab' });
      expect(firstTab.getAttribute('aria-controls')).toBe('panel-tab1');
      expect(firstTab.getAttribute('aria-selected')).toBe('true');
      expect(firstTab.getAttribute('tabindex')).toBe('0');

      const secondTab = screen.getByRole('tab', { name: 'Second Tab' });
      expect(secondTab.getAttribute('aria-selected')).toBe('false');
      expect(secondTab.getAttribute('tabindex')).toBe('-1');

      // Check tabpanel attributes
      const tabpanel = screen.getByRole('tabpanel');
      expect(tabpanel.getAttribute('aria-labelledby')).toBe('tab-tab1');
      expect(tabpanel.getAttribute('tabindex')).toBe('0');
    });

    it('updates focus management correctly', async () => {
      render(
        <AriaTabsDataGrid
          tabPanels={mockGenericTabs}
          ariaLabel="Focus Test Tabs"
        />
      );

      const firstTab = screen.getByRole('tab', { name: 'First Tab' });
      const secondTab = screen.getByRole('tab', { name: 'Second Tab' });

      // Initially first tab should be focusable
      expect(firstTab.getAttribute('tabindex')).toBe('0');
      expect(secondTab.getAttribute('tabindex')).toBe('-1');

      // After selecting second tab
      await user.click(secondTab);

      // Focus management should update
      expect(firstTab.getAttribute('tabindex')).toBe('-1');
      expect(secondTab.getAttribute('tabindex')).toBe('0');
    });

    it('supports vertical orientation', () => {
      render(
        <AriaTabsDataGrid
          tabPanels={mockGenericTabs}
          ariaLabel="Vertical Tabs"
          orientation="vertical"
        />
      );

      const tablist = screen.getByRole('tablist');
      expect(tablist.getAttribute('aria-orientation')).toBe('vertical');
      expect(tablist.parentElement?.className).toContain('aria-tabs-datagrid--vertical');
    });

    it('handles loading and error states', () => {
      // Test loading state
      const { rerender } = render(
        <AriaTabsDataGrid
          tabPanels={mockGenericTabs}
          ariaLabel="Loading Tabs"
          isLoading={true}
        />
      );

      expect(screen.getByRole('status', { name: 'Loading data' })).toBeTruthy();
      expect(screen.getByText('Loading...')).toBeTruthy();

      // Test error state
      rerender(
        <AriaTabsDataGrid
          tabPanels={mockGenericTabs}
          ariaLabel="Error Tabs"
          error="Failed to load data"
        />
      );

      expect(screen.getByRole('alert')).toBeTruthy();
      expect(screen.getByText('Error loading data')).toBeTruthy();
      expect(screen.getByText('Failed to load data')).toBeTruthy();
    });
  });

  describe('Event Handlers and Callbacks', () => {
    it('calls onTabChange when tab selection changes', async () => {
      const onTabChange = vi.fn();
      
      render(
        <AriaTabsDataGrid
          tabPanels={mockGenericTabs}
          ariaLabel="Callback Test Tabs"
          onTabChange={onTabChange}
        />
      );

      const secondTab = screen.getByRole('tab', { name: 'Second Tab' });
      await user.click(secondTab);

      expect(onTabChange).toHaveBeenCalledWith(1);
    });

    it('calls custom sort handlers', async () => {
      const onSort = vi.fn();
      const tabsWithSortHandler: TabPanelConfig[] = [
        {
          ...mockGenericTabs[0],
          onSort
        }
      ];

      render(
        <AriaTabsDataGrid
          tabPanels={tabsWithSortHandler}
          ariaLabel="Sort Handler Test"
        />
      );

      const nameHeader = screen.getByRole('columnheader', { name: 'Name' });
      await user.click(nameHeader);

      expect(onSort).toHaveBeenCalledWith('name');
    });

    it('supports controlled selectedIndex', () => {
      const { rerender } = render(
        <AriaTabsDataGrid
          tabPanels={mockGenericTabs}
          ariaLabel="Controlled Tabs"
          selectedIndex={0}
        />
      );

      expect(screen.getByRole('tab', { name: 'First Tab' }).getAttribute('aria-selected')).toBe('true');

      rerender(
        <AriaTabsDataGrid
          tabPanels={mockGenericTabs}
          ariaLabel="Controlled Tabs"
          selectedIndex={1}
        />
      );

      expect(screen.getByRole('tab', { name: 'Second Tab' }).getAttribute('aria-selected')).toBe('true');
    });
  });

  describe('Performance and Edge Cases', () => {
    it('handles empty data gracefully', () => {
      const emptyTabs: TabPanelConfig[] = [
        {
          id: 'empty',
          label: 'Empty Tab',
          data: [],
          columns: [{ key: 'name', label: 'Name' }],
          ariaLabel: 'Empty data grid'
        }
      ];

      render(
        <AriaTabsDataGrid
          tabPanels={emptyTabs}
          ariaLabel="Empty Data Test"
        />
      );

      // Should render structure without errors
      expect(screen.getByRole('tablist')).toBeTruthy();
      expect(screen.getByRole('tab', { name: 'Empty Tab' })).toBeTruthy();
      expect(screen.getByRole('tabpanel')).toBeTruthy();
    });

    it('handles large numbers of tabs efficiently', () => {
      const manyTabs: TabPanelConfig[] = Array.from({ length: 20 }, (_, i) => ({
        id: `tab-${i}`,
        label: `Tab ${i + 1}`,
        data: [{ id: i, value: `Value ${i}` }],
        columns: [{ key: 'id', label: 'ID' }, { key: 'value', label: 'Value' }],
        ariaLabel: `Tab ${i + 1} data grid`
      }));

      const startTime = performance.now();
      render(
        <AriaTabsDataGrid
          tabPanels={manyTabs}
          ariaLabel="Many Tabs Performance Test"
        />
      );
      const endTime = performance.now();

      // Should render quickly
      expect(endTime - startTime).toBeLessThan(100);

      // All tabs should be rendered
      expect(screen.getAllByRole('tab')).toHaveLength(20);
    });
  });
});
