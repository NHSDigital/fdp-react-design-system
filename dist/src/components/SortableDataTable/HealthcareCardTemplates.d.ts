import React from 'react';
import './HealthcareCardTemplates.scss';
/**
 * Props for healthcare-specific card templates
 */
interface HealthcareCardProps {
    data: any;
    columns: any[];
    onSelect?: (data: any) => void;
    onAction?: (action: string, data: any) => void;
    variant?: 'patient' | 'appointment' | 'medication' | 'vitals' | 'generic';
    priority?: 'high' | 'medium' | 'low';
    status?: 'active' | 'pending' | 'completed' | 'cancelled';
}
/**
 * Patient Record Card Template
 * Optimized for patient data with NHS number, demographics, and priority
 */
export declare const PatientCard: React.FC<HealthcareCardProps>;
/**
 * Appointment Card Template
 * Optimized for appointment scheduling and time-sensitive information
 */
export declare const AppointmentCard: React.FC<HealthcareCardProps>;
/**
 * Medication Card Template
 * Optimized for medication administration and safety
 */
export declare const MedicationCard: React.FC<HealthcareCardProps>;
/**
 * Vital Signs Card Template
 * Optimized for clinical vital signs monitoring
 */
export declare const VitalsCard: React.FC<HealthcareCardProps>;
export {};
