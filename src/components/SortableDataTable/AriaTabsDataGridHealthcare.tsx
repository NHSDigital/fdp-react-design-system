import { 
  EWSPatientData,
  HealthcareViewConfig,
  HealthcareFilter,
  TabPanelConfig
} from './AriaTabsDataGridTypes';
import { booleanIcon } from './icons';
import React from 'react';

/**
 * Healthcare-specific data comparison function
 * Uses name + bed_name as unique identifier for healthcare data
 */
export const healthcareDataComparator = (data1: EWSPatientData, data2: EWSPatientData): boolean => {
  if (!data1 || !data2) return data1 === data2;
  
  // For healthcare data with name and bed_name
  if (data1.name && data1.bed_name && data2.name && data2.bed_name) {
    return data1.name === data2.name && data1.bed_name === data2.bed_name;
  }
  
  // Fallback to JSON comparison
  return JSON.stringify(data1) === JSON.stringify(data2);
};

/**
 * Healthcare-specific data filtering function
 */
export const healthcareFilterFunction = (data: EWSPatientData[], filters?: HealthcareFilter): EWSPatientData[] => {
  if (!filters) return data;

  return data.filter(patient => {
    // EWS Score range filter
    if (filters.ewsScoreRange) {
      const [min, max] = filters.ewsScoreRange;
      if (patient.ews_score < min || patient.ews_score > max) return false;
    }

    // Ward filter
    if (filters.wards && filters.wards.length > 0) {
      if (!filters.wards.includes(patient.ward_name)) return false;
    }

    // Specialty filter
    if (filters.specialties && filters.specialties.length > 0) {
      if (!filters.specialties.includes(patient.speciality)) return false;
    }

    // Discharge status filter
    if (filters.dischargeStatuses && filters.dischargeStatuses.length > 0) {
      if (!filters.dischargeStatuses.includes(patient.early_discharge_notification)) return false;
    }

    // AVPU filter
    if (filters.avpuLevels && filters.avpuLevels.length > 0) {
      if (!filters.avpuLevels.includes(patient.ews_data.avpu)) return false;
    }

    // Medical optimization filter
    if (filters.medicallyOptimised !== null && filters.medicallyOptimised !== undefined) {
      if (patient.medically_optimised !== filters.medicallyOptimised) return false;
    }

    // Fast track filter
    if (filters.fastTrack !== null && filters.fastTrack !== undefined) {
      if (patient.fast_track !== filters.fastTrack) return false;
    }

    return true;
  });
};

/**
 * NHS-compliant boolean rendering function
 */
export const nhsBooleanRenderer = (value: boolean): React.ReactNode => {
  const iconEntry = booleanIcon.find(icon => icon.value === value);
  return iconEntry ? iconEntry.icon : null;
};

/**
 * Healthcare-specific unique ID function
 */
export const healthcareGetDataId = (data: EWSPatientData): string => {
  return `${data.name}-${data.bed_name}`;
};

/**
 * Healthcare column configurations for EWS patient data
 */
const createHealthcareViewConfig = (): HealthcareViewConfig => ({
  overview: [
    { key: 'name', label: 'Patient Name' },
    { key: 'age', label: 'Age' },
    { key: 'ward_name', label: 'Ward' },
    { key: 'bed_name', label: 'Bed' },
    { key: 'ews_score', label: 'EWS Score' },
    { key: 'speciality', label: 'Specialty' },
    { key: 'consultant', label: 'Consultant' }
  ],
  vitals: [
    { key: 'name', label: 'Patient Name' },
    { key: 'ews_score', label: 'EWS Score' },
    { key: 'respiratory_rate_bpm', label: 'Respiratory Rate', render: (data: EWSPatientData) => data.ews_data.respiratory_rate_bpm },
    { key: 'sp02', label: 'SpO2 %', render: (data: EWSPatientData) => data.ews_data.sp02 },
    { key: 'temperature', label: 'Temperature °C', render: (data: EWSPatientData) => data.ews_data.temperature },
    { key: 'systolic_bp', label: 'Systolic BP', render: (data: EWSPatientData) => data.ews_data.systolic_bp },
    { key: 'heart_rate', label: 'Heart Rate', render: (data: EWSPatientData) => data.ews_data.heart_rate },
    { key: 'avpu', label: 'AVPU', render: (data: EWSPatientData) => data.ews_data.avpu.toUpperCase() }
  ],
  discharge: [
    { key: 'name', label: 'Patient Name' },
    { key: 'anticipated_discharge_date', label: 'Anticipated Discharge', render: (data: EWSPatientData) => new Date(data.anticipated_discharge_date).toLocaleDateString() },
    { key: 'early_discharge_notification', label: 'Discharge Status' },
    { key: 'medically_optimised', label: 'Medically Optimised' },
    { key: 'criteria_to_reside', label: 'Criteria to Reside' },
    { key: 'fast_track', label: 'Fast Track' },
    { key: 'transport_status', label: 'Transport Status' },
    { key: 'pathway', label: 'Pathway' }
  ],
  logistics: [
    { key: 'name', label: 'Patient Name' },
    { key: 'ward_name', label: 'Ward' },
    { key: 'room_name', label: 'Room' },
    { key: 'bed_name', label: 'Bed' },
    { key: 'bed_type', label: 'Bed Type' },
    { key: 'transport_booking', label: 'Transport Booked' },
    { key: 'transport_mobility', label: 'Transport Type' },
    { key: 'district_nurse_referral', label: 'District Nurse' },
    { key: 'equipment', label: 'Equipment' }
  ]
});

/**
 * Factory function to create healthcare-specific tabs configuration
 */
export const createHealthcareTabsConfig = (patients: EWSPatientData[]): TabPanelConfig<EWSPatientData>[] => {
  const viewConfig = createHealthcareViewConfig();
  
  return [
    {
      id: 'overview',
      label: 'Patient Overview',
      data: patients,
      columns: viewConfig.overview,
      ariaLabel: 'Patient Overview Data Grid',
      ariaDescription: 'Overview of all patients with basic information'
    },
    {
      id: 'vitals',
      label: 'Vital Signs & EWS',
      data: patients,
      columns: viewConfig.vitals,
      sortConfig: [
        { key: 'ews_score', direction: 'desc' },
        { key: 'name', direction: 'asc' },
        { key: 'ward_name', direction: 'asc' }
      ],
      ariaLabel: 'Patient Vital Signs Data Grid',
      ariaDescription: 'Patient vital signs and Early Warning Scores'
    },
    {
      id: 'discharge',
      label: 'Discharge Planning',
      data: patients.filter(p => p.anticipated_discharge_date),
      columns: viewConfig.discharge,
      sortConfig: [
        { key: 'anticipated_discharge_date', direction: 'asc' },
        { key: 'discharge_status', direction: 'desc' }
      ],
      ariaLabel: 'Discharge Planning Data Grid',
      ariaDescription: 'Patient discharge planning and status information'
    },
    {
      id: 'logistics',
      label: 'Bed Management',
      data: patients,
      columns: viewConfig.logistics,
      sortConfig: [{ key: 'ward_name', direction: 'asc' }],
      ariaLabel: 'Bed Management Data Grid',
      ariaDescription: 'Patient location and logistics information'
    }
  ];
};

/**
 * Healthcare-specific data operation configuration
 */
export const healthcareDataConfig = {
  dataComparator: healthcareDataComparator,
  filterFunction: healthcareFilterFunction,
  booleanRenderer: nhsBooleanRenderer,
  getDataId: healthcareGetDataId
};
