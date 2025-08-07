import { EWSPatientData, HealthcareFilter, TabPanelConfig } from './AriaTabsDataGridTypes';
import React from 'react';
/**
 * Healthcare-specific data comparison function
 * Uses name + bed_name as unique identifier for healthcare data
 */
export declare const healthcareDataComparator: (data1: EWSPatientData, data2: EWSPatientData) => boolean;
/**
 * Healthcare-specific data filtering function
 */
export declare const healthcareFilterFunction: (data: EWSPatientData[], filters?: HealthcareFilter) => EWSPatientData[];
/**
 * NHS-compliant boolean rendering function with SVG icons
 */
export declare const nhsBooleanRenderer: (value: boolean | string) => React.ReactNode;
/**
 * Healthcare-specific unique ID function
 */
export declare const healthcareGetDataId: (data: EWSPatientData) => string;
/**
 * Factory function to create healthcare-specific tabs configuration
 */
export declare const createTCHTabsConfig: (patients: EWSPatientData[]) => TabPanelConfig<EWSPatientData>[];
/**
 * Healthcare-specific data operation configuration
 */
export declare const tchDataConfig: {
    dataComparator: (data1: EWSPatientData, data2: EWSPatientData) => boolean;
    filterFunction: (data: EWSPatientData[], filters?: HealthcareFilter) => EWSPatientData[];
    booleanRenderer: (value: boolean | string) => React.ReactNode;
    getDataId: (data: EWSPatientData) => string;
};
