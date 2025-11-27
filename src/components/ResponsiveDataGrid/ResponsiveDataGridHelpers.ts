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
export function convertLegacyCardConfig(legacyConfig: any): GenericCardConfig {
  return {
    primaryField: legacyConfig?.primaryField || 'name',
    secondaryFields: legacyConfig?.secondaryFields || [],
    badges: legacyConfig?.badgeFields?.map((field: string) => ({
      fieldKey: field,
      className: 'adaptive-card__badge'
    })) || [],
    hiddenFields: legacyConfig?.hiddenFields || [],
    cardTemplate: legacyConfig?.cardTemplate ? 
      (data: any, columns: any[], _config: GenericCardConfig) => 
        legacyConfig.cardTemplate(data, columns) : 
      undefined,
    classPrefix: 'adaptive-card--generic'
  };
}

/**
 * Auto-detect if data is healthcare-related
 */
export function isHealthcareData(data: any[]): boolean {
  if (!data || data.length === 0) return false;
  
  const firstItem = data[0];
  return !!(
    firstItem.ews_score !== undefined ||
    firstItem.nhs_number !== undefined ||
    firstItem.patient_name !== undefined ||
    firstItem.ward !== undefined ||
    firstItem.consultant !== undefined
  );
}
