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
 * Displays all fields from the Patient Overview table view:
 * Patient Name, Age, Ward, Bed, EWS Score, Specialty, Consultant
 */
export declare const PatientCard: React.FC<HealthcareCardProps>;
/**
 * Appointment Card Template
 * Optimized for appointment scheduling and time-sensitive information
 */
export declare const AppointmentCard: ({ data, onAction }: HealthcareCardProps) => import("react/jsx-runtime").JSX.Element;
/**
 * Medication Card Template
 * Displays all fields from the Medication table view:
 * Medication, Dose, Frequency, Route, Next Due, Prescriber, Patient
 */
export declare const MedicationCard: React.FC<HealthcareCardProps>;
/**
 * Vital Signs Card Template
 * Displays all fields from the Vitals table view:
 * Patient Name, EWS Score, Respiratory Rate, SpO2, Temperature, Systolic BP, Heart Rate, AVPU
 */
export declare const VitalsCard: React.FC<HealthcareCardProps>;
export {};
