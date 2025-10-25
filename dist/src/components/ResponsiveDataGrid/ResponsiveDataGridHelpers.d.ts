import { ResponsiveDataGridProps } from './ResponsiveDataGridTypes';
import { GenericCardConfig } from './ResponsiveDataGridGeneric.types';
/**
 * Legacy ResponsiveDataGrid props with backward compatibility
 */
export interface LegacyResponsiveDataGridProps extends ResponsiveDataGridProps {
    /** Legacy card configuration (will be converted to generic format) */
    cardConfig?: {
        primaryField?: string;
        secondaryFields?: string[];
        badgeFields?: string[];
        hiddenFields?: string[];
        cardTemplate?: (data: any, columns: any[]) => React.ReactNode;
    };
}
/**
 * Convert legacy cardConfig to generic configuration
 */
export declare function convertLegacyCardConfig(legacyConfig: any): GenericCardConfig;
/**
 * Auto-detect if data is healthcare-related
 */
export declare function isHealthcareData(data: any[]): boolean;
