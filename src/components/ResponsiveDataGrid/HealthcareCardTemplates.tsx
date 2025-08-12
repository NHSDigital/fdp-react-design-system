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
 * Optimized for patient data with NHS number, demographics, and priority
 */
export const PatientCard: React.FC<HealthcareCardProps> = ({
  data,
  columns: _columns,
  onSelect,
  onAction,
  priority = 'medium',
  status = 'active'
}) => {
  // Extract key patient fields
  const nhsNumber = data.nhs_number || data.nhsNumber || data.patient_id;
  const name = data.name || data.patient_name || `${data.first_name || ''} ${data.last_name || ''}`.trim();
  const dob = data.dob || data.date_of_birth || data.birth_date;
  const ward = data.ward || data.location || data.current_ward;
  const condition = data.condition || data.diagnosis || data.primary_condition;
  const alertLevel = data.alert_level || data.ews_score || data.priority_level;

  return (
    <div 
      className={`healthcare-card healthcare-card--patient healthcare-card--${priority} healthcare-card--${status}`}
      onClick={() => onSelect?.(data)}
      role="button"
      tabIndex={0}
      aria-label={`Patient record for ${name}, NHS number ${nhsNumber}`}
    >
      {/* Card Header with Patient Identity */}
      <div className="healthcare-card__header">
        <div className="healthcare-card__identity">
          <h3 className="healthcare-card__patient-name">{name}</h3>
          <p className="healthcare-card__nhs-number">
            <span className="healthcare-card__label">NHS:</span>
            <span className="healthcare-card__value">{nhsNumber}</span>
          </p>
        </div>
        
        {/* Priority and Alert Badges */}
        <div className="healthcare-card__badges">
          {alertLevel && (
            <Tag 
              color={getAlertTagColor(getAlertLevel(alertLevel))}
              className="healthcare-card__alert"
            >
              EWS: {alertLevel}
            </Tag>
          )}
          {priority === 'high' && (
            <Tag 
              color={getPriorityTagColor(priority)}
              className="healthcare-card__priority"
            >
              High Priority
            </Tag>
          )}
        </div>
      </div>

      {/* Card Body with Key Information */}
      <div className="healthcare-card__body">
        <dl className="healthcare-card__details">
          {dob && (
            <div className="healthcare-card__detail">
              <dt>DOB</dt>
              <dd>{formatDate(dob)} ({calculateAge(dob)}y)</dd>
            </div>
          )}
          
          {ward && (
            <div className="healthcare-card__detail">
              <dt>Ward</dt>
              <dd>{ward}</dd>
            </div>
          )}
          
          {condition && (
            <div className="healthcare-card__detail healthcare-card__detail--prominent">
              <dt>Condition</dt>
              <dd>{condition}</dd>
            </div>
          )}
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
export const AppointmentCard: React.FC<HealthcareCardProps> = ({
  data,
  onSelect,
  onAction,
  status = 'pending'
}) => {
  const time = data.appointment_time || data.time || data.scheduled_time;
  const patient = data.patient_name || data.name;
  const type = data.appointment_type || data.type || data.service;
  const consultant = data.consultant || data.doctor || data.practitioner;
  const location = data.room || data.location || data.clinic;
  const duration = data.duration || data.estimated_duration;

  return (
    <div 
      className={`healthcare-card healthcare-card--appointment healthcare-card--${status}`}
      onClick={() => onSelect?.(data)}
      role="button"
      tabIndex={0}
    >
      <div className="healthcare-card__header">
        <div className="healthcare-card__time-info">
          <h3 className="healthcare-card__time">{formatTime(time)}</h3>
          <p className="healthcare-card__type">{type}</p>
        </div>
        
        <div className="healthcare-card__badges">
          <Tag 
            color={getStatusTagColor(status)}
            className="healthcare-card__status"
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Tag>
          {duration && (
            <Tag 
              color="blue"
              className="healthcare-card__duration"
            >
              {duration} min
            </Tag>
          )}
        </div>
      </div>

      <div className="healthcare-card__body">
        <dl className="healthcare-card__details">
          <div className="healthcare-card__detail">
            <dt>Patient</dt>
            <dd>{patient}</dd>
          </div>
          
          {consultant && (
            <div className="healthcare-card__detail">
              <dt>Consultant</dt>
              <dd>{consultant}</dd>
            </div>
          )}
          
          {location && (
            <div className="healthcare-card__detail">
              <dt>Location</dt>
              <dd>{location}</dd>
            </div>
          )}
        </dl>
      </div>

      <div className="healthcare-card__actions">
        <Button 
          variant="secondary"
          className="healthcare-card__action"
          onClick={(e) => {
            e.stopPropagation();
            onAction?.('reschedule', data);
          }}
        >
          Reschedule
        </Button>
        <Button 
          variant="primary"
          className="healthcare-card__action healthcare-card__action--primary"
          onClick={(e) => {
            e.stopPropagation();
            onAction?.('check-in', data);
          }}
        >
          Check In
        </Button>
      </div>
    </div>
  );
};

/**
 * Medication Card Template
 * Optimized for medication administration and safety
 */
export const MedicationCard: React.FC<HealthcareCardProps> = ({
  data,
  onSelect,
  onAction,
  priority = 'medium'
}) => {
  const medication = data.medication || data.drug_name || data.name;
  const dose = data.dose || data.dosage || data.amount;
  const frequency = data.frequency || data.schedule;
  const route = data.route || data.administration_route;
  const nextDue = data.next_due || data.next_administration;
  const prescriber = data.prescriber || data.doctor;
  const allergies = data.allergies || data.contraindications;

  return (
    <div 
      className={`healthcare-card healthcare-card--medication healthcare-card--${priority}`}
      onClick={() => onSelect?.(data)}
      role="button"
      tabIndex={0}
    >
      <div className="healthcare-card__header">
        <div className="healthcare-card__medication-info">
          <h3 className="healthcare-card__medication-name">{medication}</h3>
          <p className="healthcare-card__dose">{dose} - {frequency}</p>
        </div>
        
        <div className="healthcare-card__badges">
          {route && (
            <Tag 
              color="blue"
              className="healthcare-card__route"
            >
              {route}
            </Tag>
          )}
          {allergies && (
            <Tag 
              color="red"
              className="healthcare-card__warning"
            >
              ⚠️ Allergies
            </Tag>
          )}
        </div>
      </div>

      <div className="healthcare-card__body">
        <dl className="healthcare-card__details">
          {nextDue && (
            <div className="healthcare-card__detail healthcare-card__detail--urgent">
              <dt>Next Due</dt>
              <dd>{formatTime(nextDue)}</dd>
            </div>
          )}
          
          {prescriber && (
            <div className="healthcare-card__detail">
              <dt>Prescriber</dt>
              <dd>{prescriber}</dd>
            </div>
          )}
        </dl>
      </div>

      <div className="healthcare-card__actions">
        <Button 
          variant="secondary"
          className="healthcare-card__action"
          onClick={(e) => {
            e.stopPropagation();
            onAction?.('view-history', data);
          }}
        >
          History
        </Button>
        <Button 
          variant="primary"
          className="healthcare-card__action healthcare-card__action--primary"
          onClick={(e) => {
            e.stopPropagation();
            onAction?.('administer', data);
          }}
        >
          Administer
        </Button>
      </div>
    </div>
  );
};

/**
 * Vital Signs Card Template
 * Optimized for clinical vital signs monitoring
 */
export const VitalsCard: React.FC<HealthcareCardProps> = ({
  data,
  onSelect,
  onAction,
  priority = 'medium'
}) => {
  const temperature = data.temperature || data.temp;
  const bloodPressure = data.blood_pressure || data.bp || `${data.systolic}/${data.diastolic}`;
  const heartRate = data.heart_rate || data.pulse || data.hr;
  const respiratoryRate = data.respiratory_rate || data.resp_rate || data.rr;
  const oxygenSaturation = data.oxygen_saturation || data.spo2 || data.o2_sat;
  const ewsScore = data.ews_score || data.news_score || data.alert_score;
  const timestamp = data.recorded_time || data.timestamp || data.time;

  return (
    <div 
      className={`healthcare-card healthcare-card--vitals healthcare-card--${priority}`}
      onClick={() => onSelect?.(data)}
      role="button"
      tabIndex={0}
    >
      <div className="healthcare-card__header">
        <div className="healthcare-card__vitals-summary">
          <h3 className="healthcare-card__timestamp">{formatTime(timestamp)}</h3>
          {ewsScore && (
            <p className={`healthcare-card__ews-score healthcare-card__ews-score--${getEWSLevel(ewsScore)}`}>
              EWS: {ewsScore}
            </p>
          )}
        </div>
      </div>

      <div className="healthcare-card__body">
        <div className="healthcare-card__vitals-grid">
          {temperature && (
            <div className="healthcare-card__vital">
              <span className="healthcare-card__vital-label">Temp</span>
              <span className="healthcare-card__vital-value">{temperature}°C</span>
            </div>
          )}
          
          {bloodPressure && (
            <div className="healthcare-card__vital">
              <span className="healthcare-card__vital-label">BP</span>
              <span className="healthcare-card__vital-value">{bloodPressure}</span>
            </div>
          )}
          
          {heartRate && (
            <div className="healthcare-card__vital">
              <span className="healthcare-card__vital-label">HR</span>
              <span className="healthcare-card__vital-value">{heartRate} bpm</span>
            </div>
          )}
          
          {respiratoryRate && (
            <div className="healthcare-card__vital">
              <span className="healthcare-card__vital-label">RR</span>
              <span className="healthcare-card__vital-value">{respiratoryRate}</span>
            </div>
          )}
          
          {oxygenSaturation && (
            <div className="healthcare-card__vital">
              <span className="healthcare-card__vital-label">SpO₂</span>
              <span className="healthcare-card__vital-value">{oxygenSaturation}%</span>
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

function getStatusTagColor(status: string): TagColor {
  switch (status) {
    case 'active': return 'green';
    case 'pending': return 'orange';
    case 'completed': return 'aqua-green';
    case 'cancelled': return 'grey';
    default: return 'default';
  }
}

function getPriorityTagColor(priority: string): TagColor {
  switch (priority) {
    case 'high': return 'red';
    case 'medium': return 'orange';
    case 'low': return 'grey';
    default: return 'default';
  }
}

function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  } catch {
    return dateString;
  }
}

function formatTime(timeString: string): string {
  try {
    return new Date(timeString).toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch {
    return timeString;
  }
}

function calculateAge(dobString: string): number {
  try {
    const dob = new Date(dobString);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    
    return age;
  } catch {
    return 0;
  }
}
