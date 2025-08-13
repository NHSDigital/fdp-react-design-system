import { ResponsiveDataGrid } from './ResponsiveDataGrid';
import { GenericResponsiveDataGridProps } from './ResponsiveDataGridGeneric.types';
import { healthcarePlugin } from './HealthcarePlugin';
import { defaultGenericCardConfig } from './GenericCardRenderer';

/**
 * Generic Responsive Data Grid Component
 * 
 * A fully generic version of ResponsiveDataGrid that supports domain plugins
 * and configurable card rendering for any data type.
 */
export const GenericResponsiveDataGrid = <T = any>({
  domainPlugin,
  cardConfig,
  ...props
}: GenericResponsiveDataGridProps<T>) => {
  // Use domain plugin configuration or fallback to generic defaults
  const effectiveCardConfig = domainPlugin ? 
    { ...domainPlugin.defaultCardConfig, ...cardConfig } : 
    { ...defaultGenericCardConfig, ...cardConfig };

  // Convert generic props to legacy ResponsiveDataGrid props format
  const legacyCardConfig = {
    primaryField: effectiveCardConfig.primaryField,
    secondaryFields: effectiveCardConfig.secondaryFields,
    badgeFields: effectiveCardConfig.badges?.map(badge => badge.fieldKey) || [],
    hiddenFields: effectiveCardConfig.hiddenFields,
    // Adapt the 3-parameter cardTemplate to 2-parameter legacy format
    cardTemplate: effectiveCardConfig.cardTemplate ? 
      (data: any, columns: any[]) => effectiveCardConfig.cardTemplate!(data, columns, effectiveCardConfig) :
      undefined
  };

  return (
        <ResponsiveDataGrid
      {...rest}
      tabPanels={tabPanels as any}
  );
};

/**
 * Pre-configured Healthcare Responsive Data Grid
 * 
 * A convenience component pre-configured with healthcare-specific
 * card templates, styling, and field handling.
 */
export const HealthcareResponsiveDataGrid = (props: Omit<GenericResponsiveDataGridProps, 'domainPlugin'>) => {
  return (
    <GenericResponsiveDataGrid
      {...props}
      domainPlugin={healthcarePlugin}
    />
  );
};

// Re-export the original component for backward compatibility
export { ResponsiveDataGrid } from './ResponsiveDataGrid';

// Export plugins and utilities
export { healthcarePlugin } from './HealthcarePlugin';
export { defaultGenericCardConfig, createGenericCard } from './GenericCardRenderer';
export * from './ResponsiveDataGridGeneric.types';

export default GenericResponsiveDataGrid;
