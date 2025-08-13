import React from 'react';
import { DomainPlugin, GenericCardConfig, BadgeConfig, PriorityLevel, StatusType } from './ResponsiveDataGridGeneric.types';
import { PatientCard, AppointmentCard, MedicationCard, VitalsCard } from './HealthcareCardTemplates';

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
 * Healthcare-specific badge configurations
 */
const healthcareBadges: BadgeConfig[] = [
  {
    fieldKey: 'ews_score',
    render: (value: any) => `EWS: ${value}`,
    className: 'adaptive-card__ews-badge',
    color: 'default' // Will be overridden by custom logic
  },
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
];

/**
 * Healthcare priority determination logic
 */
const getHealthcarePriority = (data: HealthcareData): PriorityLevel => {
  if (data.ews_score && Number(data.ews_score) >= 7) return 'high';
  if (data.ews_score && Number(data.ews_score) >= 3) return 'medium';
  if (data.priority === 'high' || data.status === 'urgent') return 'high';
  if (data.priority === 'low') return 'low';
  return 'medium';
};

/**
 * Healthcare status determination logic
 */
const getHealthcareStatus = (data: HealthcareData): StatusType => {
  if (data.status) {
    const status = data.status.toLowerCase();
    if (['active', 'pending', 'completed', 'cancelled', 'urgent'].includes(status)) {
      return status as StatusType;
    }
  }
  return 'active';
};

/**
 * Healthcare card variant determination logic
 */
const getHealthcareVariant = (data: HealthcareData): 'default' | 'feature' | 'clickable' | 'secondary' | 'primary' => {
  const priority = getHealthcarePriority(data);
  if (priority === 'high') return 'primary';
  if (data.status === 'urgent') return 'primary';
  return 'default';
};

/**
 * Healthcare-specific field renderers
 */
const healthcareFieldRenderers: Record<string, (value: any, data: HealthcareData) => string> = {
  nhs_number: (value: any) => value ? `NHS: ${value}` : '',
  ews_score: (value: any) => {
    const score = Number(value);
    const level = score >= 7 ? 'HIGH' : score >= 3 ? 'MEDIUM' : 'LOW';
    return `EWS: ${value} (${level})`;
  },
  age: (value: any, data: HealthcareData) => {
    if (data.dob) {
      const age = new Date().getFullYear() - new Date(data.dob).getFullYear();
      return `${age}y`;
    }
    return value ? `${value}y` : '';
  }
};

/**
 * Default healthcare card configuration
 */
const defaultHealthcareCardConfig: GenericCardConfig<HealthcareData> = {
  primaryField: 'name',
  secondaryFields: ['nhs_number', 'ward', 'condition', 'consultant'],
  badges: healthcareBadges,
  hiddenFields: [],
  getPriority: getHealthcarePriority,
  getStatus: getHealthcareStatus,
  getVariant: getHealthcareVariant,
  fieldRenderers: healthcareFieldRenderers,
  classPrefix: 'adaptive-card--healthcare'
};

/**
 * Healthcare card templates
 */
const healthcareCardTemplates = {
  patient: (data: HealthcareData, columns: any[], config: GenericCardConfig<HealthcareData>) => {
    const priority = config.getPriority?.(data) || 'medium';
    const status = config.getStatus?.(data) || 'active';
    return (
      <PatientCard
        data={data}
        columns={columns}
        priority={priority}
        status={status}
        onSelect={(selectedData: any) => console.log('Patient selected:', selectedData)}
        onAction={(action: string, actionData: any) => console.log('Patient action:', action, actionData)}
      />
    );
  },
  appointment: (data: HealthcareData, columns: any[], config: GenericCardConfig<HealthcareData>) => {
    const status = config.getStatus?.(data) || 'pending';
    return (
      <AppointmentCard
        data={data}
        columns={columns}
        status={status}
        onSelect={(selectedData: any) => console.log('Appointment selected:', selectedData)}
        onAction={(action: string, actionData: any) => console.log('Appointment action:', action, actionData)}
      />
    );
  },
  medication: (data: HealthcareData, columns: any[], config: GenericCardConfig<HealthcareData>) => {
    const priority = config.getPriority?.(data) || 'medium';
    return (
      <MedicationCard
        data={data}
        columns={columns}
        priority={priority}
        onSelect={(selectedData: any) => console.log('Medication selected:', selectedData)}
        onAction={(action: string, actionData: any) => console.log('Medication action:', action, actionData)}
      />
    );
  },
  vitals: (data: HealthcareData, columns: any[], config: GenericCardConfig<HealthcareData>) => {
    const priority = config.getPriority?.(data) || 'medium';
    return (
      <VitalsCard
        data={data}
        columns={columns}
        priority={priority}
        onSelect={(selectedData: any) => console.log('Vitals selected:', selectedData)}
        onAction={(action: string, actionData: any) => console.log('Vitals action:', action, actionData)}
      />
    );
  }
};

/**
 * Healthcare field type detection
 */
const healthcareFieldTypes = {
  isNHSNumber: (value: any): boolean => {
    return typeof value === 'string' && /^\d{3}\s?\d{3}\s?\d{4}$/.test(value.replace(/\s/g, ''));
  },
  isEWSScore: (value: any): boolean => {
    return typeof value === 'number' && value >= 0 && value <= 20;
  },
  isMedicalDate: (value: any): boolean => {
    return typeof value === 'string' && !isNaN(Date.parse(value));
  }
};

/**
 * Healthcare domain plugin
 */
export const healthcarePlugin: DomainPlugin<HealthcareData> = {
  name: 'healthcare',
  defaultCardConfig: defaultHealthcareCardConfig,
  cssImport: './HealthcareCardTemplates.scss',
  cardTemplates: healthcareCardTemplates,
  fieldTypes: healthcareFieldTypes
};

/**
 * Utility function to create healthcare-specific responsive data grid props
 */
export const createHealthcareDataGridProps = <T extends HealthcareData>(
  baseProps: any,
  customConfig?: Partial<GenericCardConfig<T>>
) => {
  return {
    ...baseProps,
    domainPlugin: healthcarePlugin,
    cardConfig: {
      ...defaultHealthcareCardConfig,
      ...customConfig
    }
  };
};
