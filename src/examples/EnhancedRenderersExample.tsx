/**
 * ResponsiveDataGrid Enhanced Renderers Example
 * 
 * This example demonstrates the new enhanced column renderers that provide
 * different formatting for table and card views.
 */

import React from 'react';
import { ResponsiveDataGrid } from '../components/ResponsiveDataGrid';
import { ColumnDefinition } from '../components/SortableDataTable/AriaDataGridTypes';

// Sample healthcare data
const sampleHealthcareData = [
  {
    id: 1,
    patient_name: 'JANE DOE',
    nhs_number: '123 456 7890',
    age: 45,
    ward: 'Cardiology',
    ews_score: 8,
    appointment_time: '2024-01-15T14:30:00',
    vital_signs: {
      bp_systolic: 165,
      bp_diastolic: 95,
      heart_rate: 110,
      temperature: 38.2
    },
    medications: [
      { name: 'Warfarin', dose: '5mg', critical: true },
      { name: 'Atenolol', dose: '50mg', critical: false },
      { name: 'Simvastatin', dose: '20mg', critical: false }
    ],
    condition: 'Atrial Fibrillation'
  },
  {
    id: 2,
    patient_name: 'JOHN SMITH',
    nhs_number: '987 654 3210',
    age: 67,
    ward: 'Emergency',
    ews_score: 3,
    appointment_time: '2024-01-15T16:00:00',
    vital_signs: {
      bp_systolic: 140,
      bp_diastolic: 85,
      heart_rate: 75,
      temperature: 36.8
    },
    medications: [
      { name: 'Paracetamol', dose: '500mg', critical: false }
    ],
    condition: 'Chest Pain Investigation'
  }
];

// Enhanced column definitions with separate table and card renderers
const enhancedColumns: ColumnDefinition[] = [
  {
    key: 'patient_name',
    label: 'Patient Name',
    sortable: true,
    // Table view: Show full name in proper case with NHS number
    tableRenderer: (data) => {
      const name = data.patient_name || 'Unknown';
      const formattedName = name.split(' ')
        .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join(' ');
      return `${formattedName} (${data.nhs_number})`;
    },
    // Card view: Show abbreviated name for space efficiency
    cardRenderer: (data) => {
      const name = data.patient_name || 'Unknown';
      const parts = name.split(' ');
      if (parts.length > 1) {
        return `${parts[0].charAt(0)}${parts[0].slice(1).toLowerCase()} ${parts[parts.length - 1].charAt(0)}.`;
      }
      return parts[0].charAt(0) + parts[0].slice(1).toLowerCase();
    }
  },
  {
    key: 'age',
    label: 'Age',
    sortable: true,
    align: 'center',
    // Table view: Show age with years label
    tableRenderer: (data) => `${data.age} years`,
    // Card view: Show compact format
    cardRenderer: (data) => `${data.age}y`
  },
  {
    key: 'ews_score',
    label: 'EWS Score',
    sortable: true,
    align: 'center',
    // Table view: Show detailed score with risk assessment
    tableRenderer: (data) => {
      const score = Number(data.ews_score);
      let riskLevel = 'LOW RISK';
      let colorClass = 'text-success';
      
      if (score >= 7) {
        riskLevel = 'HIGH RISK';
        colorClass = 'text-danger';
      } else if (score >= 3) {
        riskLevel = 'MEDIUM RISK';
        colorClass = 'text-warning';
      }
      
      return `<span class="${colorClass}"><strong>${score}</strong> (${riskLevel})</span>`;
    },
    // Card view: Show compact visual indicator
    cardRenderer: (data) => {
      const score = Number(data.ews_score);
      const indicator = score >= 7 ? '🔴' : score >= 3 ? '🟡' : '🟢';
      return `${indicator} ${score}`;
    }
  },
  {
    key: 'appointment_time',
    label: 'Appointment',
    sortable: true,
    // Table view: Show full date and time with day of week
    tableRenderer: (data) => {
      const date = new Date(data.appointment_time);
      return date.toLocaleString('en-GB', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    // Card view: Show relative time for quick scanning
    cardRenderer: (data) => {
      const date = new Date(data.appointment_time);
      const now = new Date();
      const diffMinutes = Math.round((date.getTime() - now.getTime()) / (1000 * 60));
      
      if (Math.abs(diffMinutes) < 60) {
        return diffMinutes > 0 ? `In ${diffMinutes}m` : `${Math.abs(diffMinutes)}m ago`;
      }
      
      const diffHours = Math.round(diffMinutes / 60);
      if (Math.abs(diffHours) < 24) {
        return diffHours > 0 ? `In ${diffHours}h` : `${Math.abs(diffHours)}h ago`;
      }
      
      return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    }
  },
  {
    key: 'vital_signs',
    label: 'Vital Signs',
    // Table view: Show comprehensive vital signs
    tableRenderer: (data) => {
      const { vital_signs } = data;
      if (!vital_signs) return 'Not recorded';
      
      const { bp_systolic, bp_diastolic, heart_rate, temperature } = vital_signs;
      return `BP: ${bp_systolic}/${bp_diastolic} mmHg, HR: ${heart_rate} bpm, Temp: ${temperature}°C`;
    },
    // Card view: Show alert status and key metrics
    cardRenderer: (data) => {
      const { vital_signs } = data;
      if (!vital_signs) return 'No vitals';
      
      const { bp_systolic, heart_rate, temperature } = vital_signs;
      const alerts = [];
      
      if (bp_systolic > 140) alerts.push('⚠️ High BP');
      if (heart_rate > 100) alerts.push('⚠️ High HR');
      if (temperature > 37.5) alerts.push('⚠️ Fever');
      
      if (alerts.length > 0) {
        return alerts.join(' ');
      }
      
      return `BP: ${bp_systolic}, HR: ${heart_rate}`;
    }
  },
  {
    key: 'medications',
    label: 'Medications',
    // Table view: Show full medication list with doses
    tableRenderer: (data) => {
      if (!data.medications || data.medications.length === 0) return 'No medications';
      
      return data.medications
        .map((med: any) => `${med.name} ${med.dose}${med.critical ? ' (Critical)' : ''}`)
        .join(', ');
    },
    // Card view: Show medication count and critical alerts
    cardRenderer: (data) => {
      if (!data.medications || data.medications.length === 0) return 'No meds';
      
      const critical = data.medications.filter((med: any) => med.critical);
      if (critical.length > 0) {
        return `${data.medications.length} meds (⚠️ ${critical.length} critical)`;
      }
      
      return `${data.medications.length} medication${data.medications.length !== 1 ? 's' : ''}`;
    }
  },
  {
    key: 'ward',
    label: 'Ward',
    sortable: true,
    // Table view: Show full ward name
    tableRenderer: (data) => `${data.ward} Ward`,
    // Card view: Show abbreviated ward
    cardRenderer: (data) => data.ward
  }
];

// Component demonstrating enhanced renderers
export const EnhancedRenderersExample: React.FC = () => {
  return (
    <div className="enhanced-renderers-example">
      <h2>Enhanced Column Renderers Example</h2>
      <p>
        This example shows how the same data is rendered differently in table and card views
        using the new <code>tableRenderer</code> and <code>cardRenderer</code> properties.
      </p>
      
      <div className="example-notes">
        <h3>Key Differences:</h3>
        <ul>
          <li><strong>Patient Names:</strong> Full name + NHS number in table, abbreviated in cards</li>
          <li><strong>EWS Scores:</strong> Detailed risk assessment in table, visual indicators in cards</li>
          <li><strong>Appointments:</strong> Full date/time in table, relative time in cards</li>
          <li><strong>Vital Signs:</strong> Complete measurements in table, alert status in cards</li>
          <li><strong>Medications:</strong> Full list with doses in table, counts + alerts in cards</li>
        </ul>
      </div>

      <ResponsiveDataGrid
        ariaLabel="Enhanced renderers example data grid"
        tabPanels={[
          {
            id: 'patients',
            label: 'Patients',
            ariaLabel: 'Patient data grid',
            data: sampleHealthcareData,
            columns: enhancedColumns
          }
        ]}
        breakpoints={{
          mobile: 768,
          tablet: 1024,
          desktop: 1200
        }}
        cardConfig={{
          primaryField: 'patient_name',
          secondaryFields: ['ward', 'condition', 'ews_score']
        }}
      />
    </div>
  );
};

export default EnhancedRenderersExample;
