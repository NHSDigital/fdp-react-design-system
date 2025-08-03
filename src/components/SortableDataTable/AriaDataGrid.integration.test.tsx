import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AriaDataGrid } from './AriaDataGrid';

// Mock healthcare data for comprehensive testing
const mockPatients = [
  {
    id: 'P001',
    name: 'John Smith',
    age: 45,
    condition: 'Hypertension',
    admitted: '2024-01-15',
    isActive: true,
    ward: 'Cardiology',
    priority: 'High',
    score: 85.5
  },
  {
    id: 'P002', 
    name: 'Sarah Jones',
    age: 32,
    condition: 'Diabetes',
    admitted: '2024-01-16',
    isActive: false,
    ward: 'Endocrinology',
    priority: 'Medium',
    score: 72.3
  },
  {
    id: 'P003',
    name: 'Michael Brown',
    age: 67,
    condition: 'Pneumonia',
    admitted: '2024-01-14',
    isActive: true,
    ward: 'Respiratory',
    priority: 'High',
    score: 91.2
  }
];

const patientColumns = [
  { key: 'id', label: 'Patient ID' },
  { key: 'name', label: 'Patient Name' },
  { key: 'age', label: 'Age' },
  { key: 'condition', label: 'Condition' },
  { key: 'admitted', label: 'Admission Date' },
  { key: 'isActive', label: 'Active Status' },
  { key: 'ward', label: 'Ward' },
  { key: 'priority', label: 'Priority' },
  { key: 'score', label: 'Clinical Score' }
];

describe('AriaDataGrid - Comprehensive Healthcare Integration Tests', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    vi.clearAllMocks();
  });

  describe('Healthcare Data Rendering and Accessibility', () => {
    it('renders patient data with full accessibility compliance', () => {
      render(
        <AriaDataGrid 
          data={mockPatients}
          columns={patientColumns}
          sortConfig={[]}
          aria-label="Patient Information Grid"
          aria-describedby="patient-grid-description"
        />
      );

      // Verify table structure
      const table = screen.getByRole('table');
      expect(table.getAttribute('aria-label')).toBe('Patient Information Grid');
      expect(table.getAttribute('aria-describedby')).toBe('patient-grid-description');

      // Verify all patient names are rendered
      expect(screen.getByText('John Smith')).toBeInTheDocument();
      expect(screen.getByText('Sarah Jones')).toBeInTheDocument();
      expect(screen.getByText('Michael Brown')).toBeInTheDocument();

      // Verify medical conditions are displayed
      expect(screen.getByText('Hypertension')).toBeInTheDocument();
      expect(screen.getByText('Diabetes')).toBeInTheDocument();
      expect(screen.getByText('Pneumonia')).toBeInTheDocument();

      // Verify active status accessibility
      const yesTexts = screen.getAllByText('Yes');
      const noTexts = screen.getAllByText('No');
      expect(yesTexts).toHaveLength(2); // Two active patients
      expect(noTexts).toHaveLength(1); // One inactive patient
    });

    it('handles complex medical data types correctly', () => {
      const complexMedicalData = [
        {
          patientId: 'NHS-001-2024',
          fullName: 'Dr. Elizabeth Windsor-Smith',
          demographics: { age: 78, gender: 'F' },
          vitals: { temperature: 37.2, heartRate: 72, bloodPressure: '120/80' },
          allergies: ['Penicillin', 'Shellfish'],
          isInpatient: true,
          lastUpdated: '2024-01-15T14:30:00Z',
          criticalAlert: false
        }
      ];

      const complexColumns = [
        { key: 'patientId', label: 'NHS Number' },
        { key: 'fullName', label: 'Full Name' },
        { key: 'demographics', label: 'Demographics' },
        { key: 'isInpatient', label: 'Inpatient Status' },
        { key: 'criticalAlert', label: 'Critical Alerts' }
      ];

      render(
        <AriaDataGrid 
          data={complexMedicalData}
          columns={complexColumns}
          sortConfig={[]}
          aria-label="Complex Medical Data Grid"
        />
      );

      // Should handle object data gracefully
      expect(screen.getByText('NHS-001-2024')).toBeInTheDocument();
      expect(screen.getByText('Dr. Elizabeth Windsor-Smith')).toBeInTheDocument();
      
      // Should render object as string
      expect(screen.getByText('[object Object]')).toBeInTheDocument();
    });

    it('supports urgent care priorities and alerts', () => {
      const urgentCareData = [
        {
          patientId: 'URGENT-001',
          name: 'Emergency Patient',
          triage: 'Red',
          isUrgent: true,
          requiresIsolation: false,
          allergies: true
        }
      ];

      const urgentColumns = [
        { key: 'patientId', label: 'Patient ID' },
        { key: 'name', label: 'Name' },
        { key: 'triage', label: 'Triage Level' },
        { key: 'isUrgent', label: 'Urgent Care' },
        { key: 'requiresIsolation', label: 'Isolation Required' },
        { key: 'allergies', label: 'Has Allergies' }
      ];

      render(
        <AriaDataGrid 
          data={urgentCareData}
          columns={urgentColumns}
          sortConfig={[]}
          aria-label="Urgent Care Patient Grid"
          className="urgent-care-table"
        />
      );

      // Verify urgent indicators
      const urgentYes = screen.getAllByText('Yes');
      const urgentNo = screen.getAllByText('No');
      expect(urgentYes).toHaveLength(2); // isUrgent and allergies are true
      expect(urgentNo).toHaveLength(1); // requiresIsolation is false

      const table = screen.getByRole('table');
      expect(table.className).toContain('urgent-care-table');
    });
  });

  describe('Advanced Sorting and Data Management', () => {
    it('handles multi-level sorting for clinical priorities', async () => {
      const onSort = vi.fn();
      render(
        <AriaDataGrid 
          data={mockPatients}
          columns={patientColumns}
          sortConfig={[
            { key: 'priority', direction: 'desc' },
            { key: 'score', direction: 'desc' }
          ]}
          onSort={onSort}
          aria-label="Multi-Sort Patient Grid"
        />
      );

      // Check priority column shows sort state
      const priorityHeader = screen.getByRole('columnheader', { name: 'Priority' });
      expect(priorityHeader.getAttribute('aria-sort')).toBe('descending');

      // Check score column shows sort state  
      const scoreHeader = screen.getByRole('columnheader', { name: 'Clinical Score' });
      expect(scoreHeader.getAttribute('aria-sort')).toBe('descending');

      // Verify sort priority indicators
      const priorityIndicator = priorityHeader.querySelector('.sort-priority');
      const scoreIndicator = scoreHeader.querySelector('.sort-priority');
      
      expect(priorityIndicator?.textContent).toBe('1');
      expect(scoreIndicator?.textContent).toBe('2');

      // Test sorting interaction
      await user.click(priorityHeader);
      expect(onSort).toHaveBeenCalledWith('priority');
    });

    it('supports keyboard navigation through patient records', async () => {
      render(
        <AriaDataGrid 
          data={mockPatients}
          columns={patientColumns}
          sortConfig={[]}
          selectedRowIndex={1}
          aria-label="Navigable Patient Grid"
        />
      );

      const headers = screen.getAllByRole('columnheader');
      const cells = screen.getAllByRole('gridcell');

      // Navigate through headers
      await user.tab();
      expect(headers[0]).toHaveFocus();

      await user.tab();
      expect(headers[1]).toHaveFocus();

      // Continue to cells
      for (let i = 2; i < headers.length; i++) {
        await user.tab();
      }

      await user.tab();
      expect(cells[0]).toHaveFocus();

      // Verify selected row
      const rows = screen.getAllByRole('row');
      const selectedRow = rows[2]; // Second data row (index 1)
      expect(selectedRow.getAttribute('aria-selected')).toBe('true');
      expect(selectedRow.className).toContain('data-row--selected');
    });

    it('maintains accessibility during dynamic data updates', () => {
      const initialData = mockPatients.slice(0, 2);
      const { rerender } = render(
        <AriaDataGrid 
          data={initialData}
          columns={patientColumns}
          sortConfig={[]}
          aria-label="Dynamic Patient Grid"
        />
      );

      // Initially shows 2 patients
      let rows = screen.getAllByRole('row');
      expect(rows).toHaveLength(3); // Header + 2 data rows

      // Update with full dataset
      rerender(
        <AriaDataGrid 
          data={mockPatients}
          columns={patientColumns}
          sortConfig={[]}
          aria-label="Dynamic Patient Grid"
        />
      );

      // Now shows all patients
      rows = screen.getAllByRole('row');
      expect(rows).toHaveLength(4); // Header + 3 data rows

      // Accessibility structure remains intact
      const table = screen.getByRole('table');
      expect(table.getAttribute('aria-label')).toBe('Dynamic Patient Grid');

      const headers = screen.getAllByRole('columnheader');
      expect(headers).toHaveLength(patientColumns.length);

      const cells = screen.getAllByRole('gridcell');
      expect(cells).toHaveLength(mockPatients.length * patientColumns.length);
    });
  });

  describe('Performance and Scalability for Clinical Systems', () => {
    it('handles large patient census efficiently', () => {
      // Generate large dataset simulating hospital patient census
      const largeCensus = Array.from({ length: 500 }, (_, i) => ({
        nhsNumber: `NHS-${String(i + 1).padStart(6, '0')}`,
        name: `Patient ${i + 1}`,
        age: 18 + (i % 80),
        ward: ['Cardiology', 'Neurology', 'Orthopedics', 'ICU', 'Emergency'][i % 5],
        condition: ['Stable', 'Critical', 'Recovering', 'Monitoring'][i % 4],
        isInpatient: i % 3 !== 0,
        admissionDate: `2024-01-${String((i % 30) + 1).padStart(2, '0')}`,
        riskScore: Math.floor(Math.random() * 100)
      }));

      const censusColumns = [
        { key: 'nhsNumber', label: 'NHS Number' },
        { key: 'name', label: 'Patient Name' },
        { key: 'age', label: 'Age' },
        { key: 'ward', label: 'Ward' },
        { key: 'condition', label: 'Condition' },
        { key: 'isInpatient', label: 'Inpatient' },
        { key: 'riskScore', label: 'Risk Score' }
      ];

      const startTime = performance.now();
      const { container } = render(
        <AriaDataGrid 
          data={largeCensus}
          columns={censusColumns}
          sortConfig={[{ key: 'riskScore', direction: 'desc' }]}
          aria-label="Hospital Patient Census"
        />
      );
      const endTime = performance.now();

      // Should render within reasonable time
      expect(endTime - startTime).toBeLessThan(300);

      // Verify all records rendered
      const rows = container.querySelectorAll('tbody tr');
      expect(rows).toHaveLength(500);

      // Verify accessibility maintained
      const table = screen.getByRole('table');
      expect(table.getAttribute('aria-label')).toBe('Hospital Patient Census');

      // Check sorting indicator
      const riskHeader = screen.getByRole('columnheader', { name: 'Risk Score' });
      expect(riskHeader.getAttribute('aria-sort')).toBe('descending');
    });

    it('maintains responsiveness with frequent updates', async () => {
      let updateCount = 0;
      const getUpdatedData = () => 
        mockPatients.map(patient => ({
          ...patient,
          score: patient.score + (updateCount * 0.1),
          lastUpdated: `Update ${updateCount}`
        }));

      const dynamicColumns = [
        ...patientColumns,
        { key: 'lastUpdated', label: 'Last Updated' }
      ];

      const { rerender } = render(
        <AriaDataGrid 
          data={getUpdatedData()}
          columns={dynamicColumns}
          sortConfig={[]}
          aria-label="Real-time Patient Monitoring"
        />
      );

      // Simulate multiple rapid updates
      for (let i = 0; i < 10; i++) {
        updateCount++;
        const startUpdate = performance.now();
        
        rerender(
          <AriaDataGrid 
            data={getUpdatedData()}
            columns={dynamicColumns}
            sortConfig={[]}
            aria-label="Real-time Patient Monitoring"
          />
        );
        
        const endUpdate = performance.now();
        expect(endUpdate - startUpdate).toBeLessThan(50); // Each update should be fast
        
        // Verify update reflected
        const updateElements = screen.getAllByText(`Update ${updateCount}`);
        expect(updateElements.length).toBeGreaterThan(0);
      }

      // Final verification
      const finalUpdateElements = screen.getAllByText('Update 10');
      expect(finalUpdateElements.length).toBeGreaterThan(0);
      
      // Accessibility maintained
      const table = screen.getByRole('table');
      expect(table.getAttribute('aria-label')).toBe('Real-time Patient Monitoring');
    });
  });

  describe('NHS Digital Compliance and Standards', () => {
    it('meets NHS Digital accessibility standards', () => {
      render(
        <AriaDataGrid 
          data={mockPatients}
          columns={patientColumns}
          sortConfig={[]}
          aria-label="NHS Compliant Patient Grid"
          aria-describedby="grid-help-text"
        />
      );

      const table = screen.getByRole('table');
      
      // Required ARIA attributes
      expect(table.getAttribute('role')).toBe('table');
      expect(table.getAttribute('aria-label')).toBe('NHS Compliant Patient Grid');
      expect(table.getAttribute('aria-describedby')).toBe('grid-help-text');

      // NHS styling compliance
      expect(table.className).toContain('nhsuk-table');

      // Keyboard accessibility
      const headers = screen.getAllByRole('columnheader');
      headers.forEach(header => {
        expect(header.getAttribute('tabIndex')).toBe('0');
      });

      const cells = screen.getAllByRole('gridcell');
      cells.forEach(cell => {
        expect(cell.getAttribute('tabIndex')).toBe('0');
      });

      // Screen reader support for boolean values
      const srOnlyElements = document.querySelectorAll('.sr-only');
      expect(srOnlyElements.length).toBeGreaterThan(0);
    });

    it('supports GDPR-compliant data handling', () => {
      const anonymizedData = mockPatients.map(patient => ({
        ...patient,
        name: `Patient ***${patient.id.slice(-3)}`, // Partially anonymized
        id: patient.id.replace(/\d/g, 'X') // Masked ID
      }));

      render(
        <AriaDataGrid 
          data={anonymizedData}
          columns={patientColumns}
          sortConfig={[]}
          aria-label="Anonymized Patient Data"
        />
      );

      // Verify anonymized data displayed
      expect(screen.getByText('Patient ***001')).toBeTruthy();
      const pxxxElements = screen.getAllByText('PXXX');
      expect(pxxxElements.length).toBeGreaterThan(0);
      
      // Original sensitive data should not be present
      expect(screen.queryByText('John Smith')).toBeNull();
      expect(screen.queryByText('P001')).toBeNull();
    });
  });
});
