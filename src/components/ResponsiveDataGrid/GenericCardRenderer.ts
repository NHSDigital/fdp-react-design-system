import { type CardProps } from '../Card';
import { GenericCardConfig, BadgeConfig } from './ResponsiveDataGridGeneric.types';
import { AriaDataGridColumn } from '../SortableDataTable/AriaDataGridTypes';

/**
 * Generic card creation function that works with any data type and configuration
 */
export function createGenericCard<T = any>(
  data: T, 
  columns: AriaDataGridColumn[], 
  config: GenericCardConfig<T>
): CardProps {
  const {
    primaryField,
    secondaryFields = [],
    badges: badgeConfigs = [],
    hiddenFields = [],
    getPriority,
    getVariant,
    fieldRenderers = {},
    classPrefix = 'adaptive-card'
  } = config;

  // Determine primary content
  const primaryColumn = columns.find(col => col.key === primaryField);
  const primaryValue = primaryColumn?.cardRenderer ? 
    primaryColumn.cardRenderer(data) : 
    primaryColumn?.render ? 
    primaryColumn.render(data) : 
    (data as any)[primaryField || 'name'] || 'Untitled';

  // Create generic description from secondary fields
  const createDescription = () => {
    const relevantFields = secondaryFields
      .filter((fieldKey: string) => !hiddenFields.includes(fieldKey) && (data as any)[fieldKey])
      .slice(0, 3); // Limit to 3 fields for card readability

    return relevantFields.map((fieldKey: string) => {
      const column = columns.find(col => col.key === fieldKey);
      const rawValue = (data as any)[fieldKey];
      
      // Use custom field renderer if available
      const value = fieldRenderers[fieldKey] ? 
        fieldRenderers[fieldKey](rawValue, data) :
        (column?.cardRenderer ? column.cardRenderer(data) : 
         column?.render ? column.render(data) : rawValue);
      
      const label = column?.label || fieldKey;
      return `${label}: ${value}`;
    }).join(' • ');
  };

  // Create badges from configuration
  const createBadges = (): string | null => {
    if (badgeConfigs.length === 0) return null;
    
    return badgeConfigs
      .filter((badgeConfig: BadgeConfig) => (data as any)[badgeConfig.fieldKey] !== undefined)
      .map((badgeConfig: BadgeConfig) => {
        const rawValue = (data as any)[badgeConfig.fieldKey];
        const value = badgeConfig.render ? 
          badgeConfig.render(rawValue, data) : 
          rawValue;
        
        // Determine badge styling based on field and value
        const badgeClass = getBadgeClass(badgeConfig, rawValue);
        
        return `<span class="nhsuk-tag ${badgeClass}">${value}</span>`;
      }).join('');
  };

  // Determine card variant using configuration or fallback logic
  const determineVariant = (): 'default' | 'feature' | 'clickable' | 'secondary' | 'primary' => {
    if (getVariant) {
      return getVariant(data);
    }
    
    // Fallback logic based on priority
    const priority = getPriority?.(data);
    if (priority === 'high') return 'primary';
    return 'default';
  };

  const badgeElements: string | null = createBadges();
  const description = createDescription();
  const enhancedDescription = badgeElements ? 
    `${description}${badgeElements ? `<div class="adaptive-card__badges">${badgeElements}</div>` : ''}` : 
    description;

  return {
    variant: determineVariant(),
    heading: String(primaryValue),
    descriptionHtml: enhancedDescription,
    className: `adaptive-card ${classPrefix}`,
    'aria-label': `Record for ${primaryValue}`
  } as CardProps;
}

/**
 * Determine badge CSS class based on configuration and value
 */
function getBadgeClass(badgeConfig: BadgeConfig, value: any): string {
  const baseClass = badgeConfig.className || 'adaptive-card__badge';
  
  // Handle special cases for common field types
  if (badgeConfig.fieldKey === 'ews_score' || badgeConfig.fieldKey.includes('score')) {
    const score = Number(value);
    if (score >= 7) return `${baseClass} nhsuk-tag--red`;
    if (score >= 3) return `${baseClass} nhsuk-tag--yellow`;
    return `${baseClass} nhsuk-tag--green`;
  }
  
  if (badgeConfig.fieldKey === 'priority') {
    const priority = String(value).toLowerCase();
    if (priority === 'high') return `${baseClass} nhsuk-tag--red`;
    if (priority === 'medium') return `${baseClass} nhsuk-tag--yellow`;
    if (priority === 'low') return `${baseClass} nhsuk-tag--green`;
  }
  
  if (badgeConfig.fieldKey === 'status') {
    const status = String(value).toLowerCase();
    if (status === 'urgent' || status === 'critical') return `${baseClass} nhsuk-tag--red`;
    if (status === 'pending' || status === 'warning') return `${baseClass} nhsuk-tag--yellow`;
    if (status === 'completed' || status === 'success') return `${baseClass} nhsuk-tag--green`;
  }
  
  // Apply color from configuration
  switch (badgeConfig.color) {
    case 'primary': return `${baseClass} nhsuk-tag--blue`;
    case 'secondary': return `${baseClass} nhsuk-tag--grey`;
    case 'success': return `${baseClass} nhsuk-tag--green`;
    case 'warning': return `${baseClass} nhsuk-tag--yellow`;
    case 'danger': return `${baseClass} nhsuk-tag--red`;
    default: return baseClass;
  }
}

/**
 * Default generic configuration for common use cases
 */
export const defaultGenericCardConfig: GenericCardConfig = {
  primaryField: 'name',
  secondaryFields: ['id', 'description', 'status'],
  badges: [
    {
      fieldKey: 'priority',
      render: (value: any) => value.charAt(0).toUpperCase() + value.slice(1),
      className: 'adaptive-card__priority-badge'
    },
    {
      fieldKey: 'status',
      render: (value: any) => value.charAt(0).toUpperCase() + value.slice(1),
      className: 'adaptive-card__status-badge'
    }
  ],
  hiddenFields: [],
  getPriority: (data: any) => data.priority || 'medium',
  getStatus: (data: any) => data.status || 'active',
  getVariant: (data: any) => {
    if (data.priority === 'high') return 'primary';
    return 'default';
  },
  fieldRenderers: {},
  classPrefix: 'adaptive-card--generic'
};
