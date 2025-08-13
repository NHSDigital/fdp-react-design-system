import React from 'react';
import { Button } from '../Button/Button';
import { Tag } from '../Tag/Tag';
import type { TagColor } from '../Tag/Tag.types';
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
export const PatientCard: React.FC<HealthcareCardProps> = ({
  data,
  columns: _columns,
  onSelect,
  onAction,
  priority = 'medium',
  status = 'active'
}) => {
  // Extract fields exactly as they appear in the table (from TCH overview config)
  const name = data.name;
  const age = data.age;
  const ward = data.ward_name;
  const bed = data.bed_name;
  const ewsScore = data.ews_score;
  const specialty = data.speciality; // Note: spelled 'speciality' in the data
  const consultant = data.consultant;

  return (
    <div 
      className={`healthcare-card healthcare-card--patient healthcare-card--${priority} healthcare-card--${status}`}
      onClick={() => onSelect?.(data)}
      role="button"
      tabIndex={0}
      aria-label={`Patient record for ${name}, Age ${age}, Ward ${ward}, Bed ${bed}`}
    >
      {/* Card Header with Patient Identity */}
      <div className="healthcare-card__header">
        <div className="healthcare-card__identity">
          <h3 className="healthcare-card__patient-name">{name}</h3>
          <p className="healthcare-card__age-info">
            <span className="healthcare-card__label">Age:</span>
            <span className="healthcare-card__value">{age}</span>
          </p>
        </div>
        
        {/* EWS Score Badge */}
        <div className="healthcare-card__badges">
          {ewsScore !== undefined && (
            <Tag 
              color={getAlertTagColor(getAlertLevel(ewsScore))}
              className="healthcare-card__alert"
            >
              EWS: {ewsScore}
            </Tag>
          )}
        </div>
      </div>

      {/* Card Body with All Table Fields */}
      <div className="healthcare-card__body">
        <dl className="healthcare-card__details">
          <div className="healthcare-card__detail">
            <dt>Ward</dt>
            <dd>{ward}</dd>
          </div>
          
          <div className="healthcare-card__detail">
            <dt>Bed</dt>
            <dd>{bed}</dd>
          </div>
          
          <div className="healthcare-card__detail">
            <dt>Specialty</dt>
            <dd>{specialty}</dd>
          </div>
          
          <div className="healthcare-card__detail healthcare-card__detail--prominent">
            <dt>Consultant</dt>
            <dd>{consultant}</dd>
          </div>
        </dl>
      </div>

      {/* Quick Actions */}
      <div className="healthcare-card__actions">
        <Button 
          variant="secondary"
          className="healthcare-card__action"
          onClick={(e) => {
            e.stopPropagation();
            onAction?.('view-notes', data);
          }}
        >
          Notes
        </Button>
        <Button 
          variant="secondary"
          className="healthcare-card__action"
          onClick={(e) => {
            e.stopPropagation();
            onAction?.('view-vitals', data);
          }}
        >
          Vitals
        </Button>
        <Button 
          variant="primary"
          className="healthcare-card__action healthcare-card__action--primary"
          onClick={(e) => {
            e.stopPropagation();
            onAction?.('view-full', data);
          }}
        >
          View Full Record
        </Button>
      </div>
    </div>
  );
};

/**
 * Appointment Card Template
 * Optimized for appointment scheduling and time-sensitive information
 */
export const AppointmentCard = ({ data, onAction }: HealthcareCardProps) => (
  <div className="fdp-healthcare-card fdp-appointment-card" role="article" tabIndex={0}>
    <div className="fdp-card-header">
      <h3 className="fdp-card-title">{data.appointment_type}</h3>
      <span className="fdp-badge fdp-badge--high">{data.status}</span>
    </div>
    <div className="fdp-card-content">
      <div className="fdp-card-field">
        <span className="fdp-field-label">Time:</span>
        <span className="fdp-field-value">{new Date(data.appointment_time).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
      <div className="fdp-card-field">
        <span className="fdp-field-label">Patient:</span>
        <span className="fdp-field-value">{data.patient_name}</span>
      </div>
      <div className="fdp-card-field">
        <span className="fdp-field-label">Type:</span>
        <span className="fdp-field-value">{data.appointment_type}</span>
      </div>
      <div className="fdp-card-field">
        <span className="fdp-field-label">Consultant:</span>
        <span className="fdp-field-value">{data.consultant}</span>
      </div>
      <div className="fdp-card-field">
        <span className="fdp-field-label">Location:</span>
        <span className="fdp-field-value">{data.location}</span>
      </div>
      <div className="fdp-card-field">
        <span className="fdp-field-label">Duration (min):</span>
        <span className="fdp-field-value">{data.duration}</span>
      </div>
      <div className="fdp-card-field">
        <span className="fdp-field-label">Status:</span>
        <span className="fdp-field-value">{data.status}</span>
      </div>
    </div>
    <div className="fdp-card-actions">
      <button onClick={() => onAction?.('view', data)} className="fdp-button fdp-button--secondary">
        View Details
      </button>
      <button onClick={() => onAction?.('edit', data)} className="fdp-button fdp-button--primary">
        Reschedule
      </button>
    </div>
  </div>
);

/**
 * Medication Card Template  
 * Displays all fields from the Medication table view:
 * Medication, Dose, Frequency, Route, Next Due, Prescriber, Patient
 */
export const MedicationCard: React.FC<HealthcareCardProps> = ({
  data,
  onAction
}) => (
  <div className="fdp-healthcare-card fdp-medication-card" role="article" tabIndex={0}>
    <div className="fdp-card-header">
      <h3 className="fdp-card-title">{data.medication}</h3>
      <span className="fdp-badge fdp-badge--high">{data.priority}</span>
    </div>
    <div className="fdp-card-content">
      <div className="fdp-card-field">
        <span className="fdp-field-label">Medication:</span>
        <span className="fdp-field-value">{data.medication}</span>
      </div>
      <div className="fdp-card-field">
        <span className="fdp-field-label">Dose:</span>
        <span className="fdp-field-value">{data.dose}</span>
      </div>
      <div className="fdp-card-field">
        <span className="fdp-field-label">Frequency:</span>
        <span className="fdp-field-value">{data.frequency}</span>
      </div>
      <div className="fdp-card-field">
        <span className="fdp-field-label">Route:</span>
        <span className="fdp-field-value">{data.route}</span>
      </div>
      <div className="fdp-card-field">
        <span className="fdp-field-label">Next Due:</span>
        <span className="fdp-field-value">{new Date(data.next_due).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
      <div className="fdp-card-field">
        <span className="fdp-field-label">Prescriber:</span>
        <span className="fdp-field-value">{data.prescriber}</span>
      </div>
      <div className="fdp-card-field">
        <span className="fdp-field-label">Patient:</span>
        <span className="fdp-field-value">{data.patient_name}</span>
      </div>
      {data.allergies && (
        <div className="fdp-card-field fdp-card-field--alert">
          <span className="fdp-field-label">Allergies:</span>
          <span className="fdp-field-value fdp-field-value--warning">{data.allergies}</span>
        </div>
      )}
    </div>
    <div className="fdp-card-actions">
      <button onClick={() => onAction?.('view', data)} className="fdp-button fdp-button--secondary">
        View Details
      </button>
      <button onClick={() => onAction?.('edit', data)} className="fdp-button fdp-button--primary">
        Adjust Dose
      </button>
    </div>
  </div>
);

/**
 * Vital Signs Card Template
 * Displays all fields from the Vitals table view:
 * Patient Name, EWS Score, Respiratory Rate, SpO2, Temperature, Systolic BP, Heart Rate, AVPU
 */
export const VitalsCard: React.FC<HealthcareCardProps> = ({
  data,
  onSelect,
  onAction,
  priority = 'medium'
}) => {
  // Extract fields exactly as they appear in the vitals table
  const name = data.name;
  const ewsScore = data.ews_score;
  const respiratoryRate = data.ews_data?.respiratory_rate_bpm;
  const sp02 = data.ews_data?.sp02;
  const temperature = data.ews_data?.temperature;
  const systolicBp = data.ews_data?.systolic_bp;
  const heartRate = data.ews_data?.heart_rate;
  const avpu = data.ews_data?.avpu;

  return (
    <div 
      className={`healthcare-card healthcare-card--vitals healthcare-card--${priority}`}
      onClick={() => onSelect?.(data)}
      role="button"
      tabIndex={0}
      aria-label={`Vital signs for ${name}, EWS Score ${ewsScore}`}
    >
      <div className="healthcare-card__header">
        <div className="healthcare-card__vitals-summary">
          <h3 className="healthcare-card__patient-name">{name}</h3>
          {ewsScore !== undefined && (
            <p className={`healthcare-card__ews-score healthcare-card__ews-score--${getEWSLevel(ewsScore)}`}>
              EWS: {ewsScore}
            </p>
          )}
        </div>
        
        <div className="healthcare-card__badges">
          {avpu && (
            <Tag 
              color="blue"
              className="healthcare-card__avpu"
            >
              AVPU: {avpu.toUpperCase()}
            </Tag>
          )}
        </div>
      </div>

      <div className="healthcare-card__body">
        <div className="healthcare-card__vitals-grid">
          {respiratoryRate !== undefined && (
            <div className="healthcare-card__vital">
              <span className="healthcare-card__vital-label">Respiratory Rate</span>
              <span className="healthcare-card__vital-value">{respiratoryRate} bpm</span>
            </div>
          )}
          
          {sp02 !== undefined && (
            <div className="healthcare-card__vital">
              <span className="healthcare-card__vital-label">SpO2</span>
              <span className="healthcare-card__vital-value">{sp02}%</span>
            </div>
          )}
          
          {temperature !== undefined && (
            <div className="healthcare-card__vital">
              <span className="healthcare-card__vital-label">Temperature</span>
              <span className="healthcare-card__vital-value">{temperature}°C</span>
            </div>
          )}
          
          {systolicBp !== undefined && (
            <div className="healthcare-card__vital">
              <span className="healthcare-card__vital-label">Systolic BP</span>
              <span className="healthcare-card__vital-value">{systolicBp}</span>
            </div>
          )}
          
          {heartRate !== undefined && (
            <div className="healthcare-card__vital">
              <span className="healthcare-card__vital-label">Heart Rate</span>
              <span className="healthcare-card__vital-value">{heartRate} bpm</span>
            </div>
          )}
        </div>
      </div>

      <div className="healthcare-card__actions">
        <Button 
          variant="secondary"
          className="healthcare-card__action"
          onClick={(e) => {
            e.stopPropagation();
            onAction?.('view-trend', data);
          }}
        >
          Trend
        </Button>
        <Button 
          variant="primary"
          className="healthcare-card__action healthcare-card__action--primary"
          onClick={(e) => {
            e.stopPropagation();
            onAction?.('record-new', data);
          }}
        >
          Record New
        </Button>
      </div>
    </div>
  );
};

// Utility functions
function getAlertLevel(score: number | string): string {
  const numScore = typeof score === 'string' ? parseInt(score, 10) : score;
  if (numScore >= 7) return 'critical';
  if (numScore >= 5) return 'high';
  if (numScore >= 3) return 'medium';
  return 'low';
}

function getEWSLevel(score: number | string): string {
  return getAlertLevel(score);
}

function getAlertTagColor(alertLevel: string): TagColor {
  switch (alertLevel) {
    case 'critical': return 'red';
    case 'high': return 'orange';
    case 'medium': return 'yellow';
    case 'low': return 'grey';
    default: return 'grey';
  }
}
