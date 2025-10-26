import { DomainPlugin, GenericCardConfig } from './ResponsiveDataGridGeneric.types';
/**
 * Healthcare-specific data interface (for type safety)
 */
export interface HealthcareData {
    ews_score?: number;
    priority?: string;
    status?: string;
    nhs_number?: string;
    patient_name?: string;
    name?: string;
    condition?: string;
    ward?: string;
    consultant?: string;
    [key: string]: any;
}
/**
 * Healthcare domain plugin
 */
export declare const healthcarePlugin: DomainPlugin<HealthcareData>;
/**
 * Utility function to create healthcare-specific responsive data grid props
 */
export declare const createHealthcareDataGridProps: <T extends HealthcareData>(baseProps: any, customConfig?: Partial<GenericCardConfig<T>>) => any;
