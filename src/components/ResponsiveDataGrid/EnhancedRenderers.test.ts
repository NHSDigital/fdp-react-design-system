/**
 * Tests for Enhanced Column Renderers
 */

import { describe, it, expect } from 'vitest';
import { ColumnDefinition } from '../SortableDataTable/AriaDataGridTypes';

describe('Enhanced Column Renderers', () => {
  const sampleData = {
    id: 1,
    name: 'JOHN DOE',
    amount: 1250.75,
    date: '2024-01-15T14:30:00',
    status: 'pending'
  };

  const testColumn: ColumnDefinition = {
    key: 'amount',
    label: 'Amount',
    // General render function (fallback)
    render: (data) => `$${data.amount}`,
    // Table-specific renderer
    tableRenderer: (data) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(data.amount);
    },
    // Card-specific renderer
    cardRenderer: (data) => {
      const amount = data.amount;
      if (amount >= 1000) {
        return `$${(amount / 1000).toFixed(1)}K`;
      }
      return `$${amount}`;
    }
  };

  describe('Column Definition Interface', () => {
    it('should support tableRenderer property', () => {
      expect(testColumn.tableRenderer).toBeDefined();
      expect(typeof testColumn.tableRenderer).toBe('function');
    });

    it('should support cardRenderer property', () => {
      expect(testColumn.cardRenderer).toBeDefined();
      expect(typeof testColumn.cardRenderer).toBe('function');
    });

    it('should maintain backward compatibility with render property', () => {
      expect(testColumn.render).toBeDefined();
      expect(typeof testColumn.render).toBe('function');
    });
  });

  describe('Table Renderer', () => {
    it('should format currency properly for table view', () => {
      const result = testColumn.tableRenderer!(sampleData);
      expect(result).toBe('$1,250.75');
    });

    it('should provide detailed formatting for table display', () => {
      const dateColumn: ColumnDefinition = {
        key: 'date',
        label: 'Date',
        tableRenderer: (data) => {
          const date = new Date(data.date);
          return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        }
      };

      const result = dateColumn.tableRenderer!(sampleData);
      expect(result).toContain('Monday'); // Date should include weekday
      expect(result).toContain('January'); // Date should include full month
    });
  });

  describe('Card Renderer', () => {
    it('should format amount compactly for card view', () => {
      const result = testColumn.cardRenderer!(sampleData);
      expect(result).toBe('$1.3K'); // Should abbreviate large numbers
    });

    it('should provide concise formatting for card display', () => {
      const statusColumn: ColumnDefinition = {
        key: 'status',
        label: 'Status',
        tableRenderer: (data) => {
          const statusMap: Record<string, string> = {
            'pending': '⏳ Pending Review',
            'approved': '✅ Approved',
            'rejected': '❌ Rejected'
          };
          return statusMap[data.status] || data.status;
        },
        cardRenderer: (data) => {
          const iconMap: Record<string, string> = {
            'pending': '⏳',
            'approved': '✅',
            'rejected': '❌'
          };
          return iconMap[data.status] || data.status;
        }
      };

      const tableResult = statusColumn.tableRenderer!(sampleData);
      const cardResult = statusColumn.cardRenderer!(sampleData);

      expect(tableResult).toBe('⏳ Pending Review'); // Detailed for table
      expect(cardResult).toBe('⏳'); // Icon only for card
    });
  });

  describe('Fallback Behavior', () => {
    it('should use render function when specific renderer not provided', () => {
      const fallbackColumn: ColumnDefinition = {
        key: 'name',
        label: 'Name',
        render: (data) => data.name.toLowerCase()
      };

      // Should work for both table and card contexts
      const result = fallbackColumn.render!(sampleData);
      expect(result).toBe('john doe');
    });

    it('should handle missing renderers gracefully', () => {
      const basicColumn: ColumnDefinition = {
        key: 'id',
        label: 'ID'
        // No render functions defined
      };

      expect(basicColumn.tableRenderer).toBeUndefined();
      expect(basicColumn.cardRenderer).toBeUndefined();
      expect(basicColumn.render).toBeUndefined();
    });
  });

  describe('Healthcare-Specific Examples', () => {
    const healthcareData = {
      patient_name: 'JANE SMITH',
      ews_score: 6,
      appointment_time: '2024-01-15T16:00:00',
      vital_signs: {
        bp_systolic: 150,
        heart_rate: 95
      }
    };

    it('should format EWS scores differently for table vs card', () => {
      const ewsColumn: ColumnDefinition = {
        key: 'ews_score',
        label: 'EWS Score',
        tableRenderer: (data) => {
          const score = Number(data.ews_score);
          const level = score >= 7 ? 'HIGH RISK' : score >= 3 ? 'MEDIUM RISK' : 'LOW RISK';
          return `${score} (${level})`;
        },
        cardRenderer: (data) => {
          const score = Number(data.ews_score);
          const indicator = score >= 7 ? '🔴' : score >= 3 ? '🟡' : '🟢';
          return `${indicator} ${score}`;
        }
      };

      const tableResult = ewsColumn.tableRenderer!(healthcareData);
      const cardResult = ewsColumn.cardRenderer!(healthcareData);

      expect(tableResult).toBe('6 (MEDIUM RISK)');
      expect(cardResult).toBe('🟡 6');
    });

    it('should format patient names appropriately for each context', () => {
      const nameColumn: ColumnDefinition = {
        key: 'patient_name',
        label: 'Patient Name',
        tableRenderer: (data) => {
          const name = data.patient_name || 'Unknown';
          return name.split(' ')
            .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
            .join(' ');
        },
        cardRenderer: (data) => {
          const name = data.patient_name || 'Unknown';
          const parts = name.split(' ');
          if (parts.length > 1) {
            return `${parts[0].charAt(0)}${parts[0].slice(1).toLowerCase()} ${parts[parts.length - 1].charAt(0)}.`;
          }
          return parts[0].charAt(0) + parts[0].slice(1).toLowerCase();
        }
      };

      const tableResult = nameColumn.tableRenderer!(healthcareData);
      const cardResult = nameColumn.cardRenderer!(healthcareData);

      expect(tableResult).toBe('Jane Smith'); // Full name for table
      expect(cardResult).toBe('Jane S.'); // Abbreviated for card
    });
  });
});
