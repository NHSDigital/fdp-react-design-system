import { useState, useCallback, useRef } from 'react';
import { AriaTabsDataGrid, AriaTabsDataGridRef } from './AriaTabsDataGrid';
import { createHealthcareTabsConfig, healthcareDataConfig } from './AriaTabsDataGridHealthcare';
import { EWSPatientData } from './AriaTabsDataGridTypes';
import patientsData from './patients_with_ews.json';
import './AriaTabsDataGrid.scss';

/**
 * Demo component showcasing the AriaTabsDataGrid with real NHS patient data
 */
export function AriaTabsDataGridDemo() {
  // Cast imported JSON to typed patient data
  const patients = patientsData as EWSPatientData[];
  
  // Component state
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [isLoading] = useState(false);
  const [error] = useState<string | null>(null);
  const [selectedPatient, setSelectedPatient] = useState<EWSPatientData | null>(null);

  // Reference to the component for imperative actions
  const tabsRef = useRef<AriaTabsDataGridRef>(null);

  // Create healthcare tabs configuration with patient data
  const healthcareTabs = createHealthcareTabsConfig(patients);

  // Handle tab change
  const handleTabChange = (index: number) => {
    setSelectedTabIndex(index);
    console.log(`Switched to tab: ${healthcareTabs[index]?.label}`);
  };

  // Handle global row selection - persists across tabs
    const handleGlobalRowSelection = useCallback((rowData: EWSPatientData | null) => {
    setSelectedPatient(rowData);
  }, []);

  return (
    <div className="aria-tabs-datagrid-demo">
      <div className="demo-header">
        <h1>NHS Patient Management System</h1>
        <p>Comprehensive patient data with Early Warning Scores (EWS) and discharge planning</p>
      </div>

      {/* Main Tabs Component */}
      <AriaTabsDataGrid
        ref={tabsRef}
        dataConfig={healthcareDataConfig}
        tabPanels={healthcareTabs}
        selectedIndex={selectedTabIndex}
        onTabChange={handleTabChange}
        onGlobalRowSelectionChange={handleGlobalRowSelection}
        ariaLabel="NHS Patient Management System"
        ariaDescription="Comprehensive patient data management with multiple views"
        className="demo-tabs"
        orientation="horizontal"
        isLoading={isLoading}
        error={error}
        data-testid="patient-management-tabs"
      />

      {/* Footer Information */}
      <div className="demo-footer">
        <div className="demo-footer__info">
          <h3>Current View: {healthcareTabs[selectedTabIndex]?.label}</h3>
          <p>{healthcareTabs[selectedTabIndex]?.ariaDescription}</p>
          
          {/* Selected Patient Information */}
          {selectedPatient && (
            <div className="selected-patient-info" style={{ 
              marginTop: '16px', 
              padding: '16px', 
              backgroundColor: '#f0f4f8', 
              borderRadius: '8px',
              border: '2px solid #005eb8'
            }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#005eb8' }}>
                Selected Patient: {selectedPatient.name}
              </h4>
              <p style={{ margin: '0', fontSize: '14px' }}>
                <strong>Age:</strong> {selectedPatient.age} | 
                <strong> Ward:</strong> {selectedPatient.ward_name} | 
                <strong> Bed:</strong> {selectedPatient.bed_name} | 
                <strong> EWS Score:</strong> {selectedPatient.ews_score} |
                <strong> Specialty:</strong> {selectedPatient.speciality}
              </p>
              <p style={{ margin: '4px 0 0 0', fontSize: '12px', fontStyle: 'italic' }}>
                ✨ This selection persists when switching between tabs
              </p>
            </div>
          )}
        </div>
        
        <div className="demo-footer__help">
          <h4>Navigation Help:</h4>
          <ul>
            <li><kbd>Tab</kbd> / <kbd>Shift+Tab</kbd> - Navigate between interactive elements</li>
            <li><kbd>←</kbd> / <kbd>→</kbd> - Switch between tabs</li>
            <li><kbd>Home</kbd> / <kbd>End</kbd> - Go to first/last tab</li>
            <li><kbd>Enter</kbd> / <kbd>Space</kbd> - Activate focused tab</li>
            <li><kbd>↑</kbd> / <kbd>↓</kbd> - Navigate table rows</li>
            <li>Click column headers to sort data</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AriaTabsDataGridDemo;
