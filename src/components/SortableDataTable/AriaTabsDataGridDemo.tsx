import { useState, useRef } from 'react';
import { AriaTabsDataGrid, createHealthcareTabsConfig, AriaTabsDataGridRef } from './AriaTabsDataGrid';
import { EWSPatientData, HealthcareFilter } from './AriaTabsDataGridTypes';
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
  const [filters, setFilters] = useState<HealthcareFilter>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Reference to the component for imperative actions
  const tabsRef = useRef<AriaTabsDataGridRef>(null);

  // Create healthcare tabs configuration with patient data
  const healthcareTabs = createHealthcareTabsConfig(patients);

  // Sample filter presets
  const filterPresets = {
    highRisk: {
      ewsScoreRange: [6, 20] as [number, number],
      avpuLevels: ['verbal', 'pain', 'unresponsive'] as Array<'alert' | 'verbal' | 'pain' | 'unresponsive'>
    },
    readyForDischarge: {
      medicallyOptimised: true,
      criteria_to_reside: false
    },
    fastTrack: {
      fastTrack: true
    },
    icuPatients: {
      wards: ['ICU', 'HDU', 'CCU']
    }
  };

  // Apply filter preset
  const applyFilterPreset = (preset: keyof typeof filterPresets) => {
    const newFilters = filterPresets[preset];
    setFilters(newFilters);
    tabsRef.current?.applyFilters(newFilters);
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({});
    tabsRef.current?.applyFilters({});
  };

  // Export current tab data
  const exportData = () => {
    const data = tabsRef.current?.exportData();
    console.log('Exported data:', data);
    
    // In a real application, this would trigger a file download
    alert(`Exported ${data?.length || 0} records from current tab`);
  };

  // Refresh data (simulation)
  const refreshData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      tabsRef.current?.refreshData();
    } catch (err) {
      setError('Failed to refresh data');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle tab change
  const handleTabChange = (index: number) => {
    setSelectedTabIndex(index);
    console.log(`Switched to tab: ${healthcareTabs[index]?.label}`);
  };

  return (
    <div className="aria-tabs-datagrid-demo">
      <div className="demo-header">
        <h1>NHS Patient Management System</h1>
        <p>Comprehensive patient data with Early Warning Scores (EWS) and discharge planning</p>
        
        {/* Control Panel */}
        <div className="demo-controls">
          <div className="demo-controls__section">
            <h3>Quick Filters</h3>
            <div className="demo-controls__buttons">
              <button 
                className="nhsuk-button nhsuk-button--secondary"
                onClick={() => applyFilterPreset('highRisk')}
              >
                High Risk Patients (EWS ≥6)
              </button>
              <button 
                className="nhsuk-button nhsuk-button--secondary"
                onClick={() => applyFilterPreset('readyForDischarge')}
              >
                Ready for Discharge
              </button>
              <button 
                className="nhsuk-button nhsuk-button--secondary"
                onClick={() => applyFilterPreset('fastTrack')}
              >
                Fast Track
              </button>
              <button 
                className="nhsuk-button nhsuk-button--secondary"
                onClick={() => applyFilterPreset('icuPatients')}
              >
                ICU Patients
              </button>
              <button 
                className="nhsuk-button"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>
          </div>

          <div className="demo-controls__section">
            <h3>Actions</h3>
            <div className="demo-controls__buttons">
              <button 
                className="nhsuk-button nhsuk-button--secondary"
                onClick={refreshData}
                disabled={isLoading}
              >
                {isLoading ? 'Refreshing...' : 'Refresh Data'}
              </button>
              <button 
                className="nhsuk-button nhsuk-button--secondary"
                onClick={exportData}
              >
                Export Current View
              </button>
              <button 
                className="nhsuk-button nhsuk-button--secondary"
                onClick={() => tabsRef.current?.clearSelection()}
              >
                Clear Selection
              </button>
            </div>
          </div>
        </div>

        {/* Filter Status */}
        {Object.keys(filters).length > 0 && (
          <div className="demo-filter-status">
            <h4>Active Filters:</h4>
            <ul>
              {filters.ewsScoreRange && (
                <li>EWS Score: {filters.ewsScoreRange[0]} - {filters.ewsScoreRange[1]}</li>
              )}
              {filters.wards && (
                <li>Wards: {filters.wards.join(', ')}</li>
              )}
              {filters.avpuLevels && (
                <li>AVPU Levels: {filters.avpuLevels.join(', ')}</li>
              )}
              {filters.medicallyOptimised !== undefined && (
                <li>Medically Optimised: {filters.medicallyOptimised ? 'Yes' : 'No'}</li>
              )}
              {filters.fastTrack !== undefined && (
                <li>Fast Track: {filters.fastTrack ? 'Yes' : 'No'}</li>
              )}
            </ul>
          </div>
        )}

        {/* Statistics */}
        <div className="demo-stats">
          <div className="demo-stat">
            <span className="demo-stat__value">{patients.length}</span>
            <span className="demo-stat__label">Total Patients</span>
          </div>
          <div className="demo-stat">
            <span className="demo-stat__value">
              {patients.filter(p => p.ews_score >= 6).length}
            </span>
            <span className="demo-stat__label">High Risk (EWS ≥6)</span>
          </div>
          <div className="demo-stat">
            <span className="demo-stat__value">
              {patients.filter(p => p.medically_optimised).length}
            </span>
            <span className="demo-stat__label">Medically Optimised</span>
          </div>
          <div className="demo-stat">
            <span className="demo-stat__value">
              {patients.filter(p => p.fast_track).length}
            </span>
            <span className="demo-stat__label">Fast Track</span>
          </div>
        </div>
      </div>

      {/* Main Tabs Component */}
      <AriaTabsDataGrid
        ref={tabsRef}
        tabPanels={healthcareTabs}
        selectedIndex={selectedTabIndex}
        onTabChange={handleTabChange}
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
