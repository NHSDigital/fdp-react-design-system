/**
 * Comprehensive demo showcasing all AriaTabsDataGrid plugins and configurations
 */

import React, { useState, useMemo } from 'react';
import { AriaTabsDataGrid } from './AriaTabsDataGrid';
import { 
  tchDataConfig, 
  createTCHTabsConfig 
} from './AriaTabsDataGridTCH';
import { 
  createPluginDataGrid,
  type EcommerceProduct,
  type FinancialTransaction 
} from './AriaTabsDataGridPlugins';
import { createGenericTabsConfig } from './AriaTabsDataGridFactory';
import type { DataOperationConfig, EWSPatientData } from './AriaTabsDataGridTypes';

// Sample healthcare data
const samplePatients: EWSPatientData[] = [
  {
    name: 'Sarah Johnson',
    age: 34,
    ews_data: {
      respiratory_rate_bpm: 16,
      sp02: 98,
      temperature: 36.8,
      systolic_bp: 140,
      heart_rate: 82,
      avpu: 'alert'
    },
    ews_score: 3,
    ward_name: 'Cardiology',
    room_name: 'Room A',
    bed_name: 'A-1',
    bed_type: 'bed',
    admin_note: 'Hypertension monitoring',
    pathway: 'Standard',
    speciality: 'Cardiology',
    consultant: 'Dr. Smith',
    local_authority: 'NHS Trust',
    early_discharge_notification: 'not_required',
    needs_based_assessment: false,
    medically_optimised: true,
    criteria_to_reside: true,
    date_medically_optimised: '2024-01-15',
    anticipated_discharge_date: '2024-01-18',
    dru_suitability: false,
    optica_planned_discharge_date: '2024-01-18',
    optica_date_confirmed: '2024-01-16',
    dsum: null,
    medications_tta: 'None required',
    transport_booking: false,
    transport_status: 'Pending',
    transport_date: '',
    transport_mobility: 'Independent',
    fast_track: false,
    initial_therapy_contact: '',
    equipment: 'None',
    district_nurse_referral: false
  },
  {
    name: 'Michael Chen',
    age: 67,
    ews_data: {
      respiratory_rate_bpm: 20,
      sp02: 94,
      temperature: 37.2,
      systolic_bp: 160,
      heart_rate: 95,
      avpu: 'alert'
    },
    ews_score: 7,
    ward_name: 'Surgery',
    room_name: 'Room B',
    bed_name: 'B-3',
    bed_type: 'bed',
    admin_note: 'Post-operative monitoring',
    pathway: 'Surgical',
    speciality: 'General Surgery',
    consultant: 'Dr. Johnson',
    local_authority: 'NHS Trust',
    early_discharge_notification: 'due',
    needs_based_assessment: true,
    medically_optimised: false,
    criteria_to_reside: true,
    date_medically_optimised: '2024-01-17',
    anticipated_discharge_date: '2024-01-20',
    dru_suitability: true,
    optica_planned_discharge_date: '2024-01-20',
    optica_date_confirmed: '2024-01-16',
    dsum: 'Complex discharge',
    medications_tta: 'Pain management',
    transport_booking: true,
    transport_status: 'In Progress',
    transport_date: '2024-01-20',
    transport_mobility: 'Wheelchair',
    fast_track: false,
    initial_therapy_contact: '2024-01-17',
    equipment: 'Walking frame',
    district_nurse_referral: true
  },
  {
    name: 'Emma Thompson',
    age: 28,
    ews_data: {
      respiratory_rate_bpm: 24,
      sp02: 90,
      temperature: 38.5,
      systolic_bp: 110,
      heart_rate: 105,
      avpu: 'alert'
    },
    ews_score: 5,
    ward_name: 'Respiratory',
    room_name: 'Room C',
    bed_name: 'C-2',
    bed_type: 'bed',
    admin_note: 'Pneumonia treatment',
    pathway: 'Respiratory',
    speciality: 'Respiratory Medicine',
    consultant: 'Dr. Williams',
    local_authority: 'NHS Trust',
    early_discharge_notification: 'overdue',
    needs_based_assessment: true,
    medically_optimised: false,
    criteria_to_reside: false,
    date_medically_optimised: '',
    anticipated_discharge_date: '2024-01-22',
    dru_suitability: false,
    optica_planned_discharge_date: '2024-01-22',
    optica_date_confirmed: '',
    dsum: null,
    medications_tta: 'Antibiotics',
    transport_booking: false,
    transport_status: 'Pending',
    transport_date: '',
    transport_mobility: 'Independent',
    fast_track: true,
    initial_therapy_contact: '',
    equipment: 'Oxygen',
    district_nurse_referral: false
  }
];

// Sample e-commerce data
const sampleProducts: EcommerceProduct[] = [
  {
    id: 'PROD001',
    name: 'Wireless Headphones',
    price: 199.99,
    discountedPrice: 149.99,
    inStock: true,
    category: 'Electronics',
    rating: 4.5,
    reviews: 1247,
    tags: ['wireless', 'bluetooth', 'premium']
  },
  {
    id: 'PROD002',
    name: 'Running Shoes',
    price: 129.99,
    inStock: true,
    category: 'Sports',
    rating: 4.8,
    reviews: 892,
    tags: ['running', 'athletic', 'comfortable']
  },
  {
    id: 'PROD003',
    name: 'Coffee Maker',
    price: 89.99,
    discountedPrice: 59.99,
    inStock: false,
    category: 'Kitchen',
    rating: 4.2,
    reviews: 456,
    tags: ['kitchen', 'coffee', 'appliance']
  },
  {
    id: 'PROD004',
    name: 'Smartphone Case',
    price: 24.99,
    inStock: true,
    category: 'Accessories',
    rating: 4.0,
    reviews: 234,
    tags: ['protection', 'mobile', 'durable']
  }
];

// Sample financial data
const sampleTransactions: FinancialTransaction[] = [
  {
    id: 'TXN001',
    date: new Date('2024-01-15'),
    amount: 2500.00,
    type: 'credit',
    category: 'Salary',
    description: 'Monthly salary payment',
    accountId: 'ACC001',
    pending: false,
    recurring: true
  },
  {
    id: 'TXN002',
    date: new Date('2024-01-14'),
    amount: 89.50,
    type: 'debit',
    category: 'Groceries',
    description: 'Supermarket shopping',
    accountId: 'ACC001',
    pending: false,
    recurring: false
  },
  {
    id: 'TXN003',
    date: new Date('2024-01-16'),
    amount: 1200.00,
    type: 'debit',
    category: 'Rent',
    description: 'Monthly rent payment',
    accountId: 'ACC001',
    pending: true,
    recurring: true
  },
  {
    id: 'TXN004',
    date: new Date('2024-01-13'),
    amount: 150.00,
    type: 'credit',
    category: 'Refund',
    description: 'Product return refund',
    accountId: 'ACC001',
    pending: false,
    recurring: false
  }
];

// Sample business data for custom configuration
interface BusinessLead {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  status: 'new' | 'contacted' | 'qualified' | 'closed-won' | 'closed-lost';
  value: number;
  lastContact: Date;
  source: string;
  isHotLead: boolean;
}

const sampleLeads: BusinessLead[] = [
  {
    id: 'LEAD001',
    companyName: 'Tech Solutions Inc',
    contactPerson: 'John Smith',
    email: 'john@techsolutions.com',
    status: 'qualified',
    value: 50000,
    lastContact: new Date('2024-01-15'),
    source: 'Website',
    isHotLead: true
  },
  {
    id: 'LEAD002',
    companyName: 'Global Industries',
    contactPerson: 'Maria Garcia',
    email: 'maria@globalind.com',
    status: 'contacted',
    value: 25000,
    lastContact: new Date('2024-01-14'),
    source: 'Referral',
    isHotLead: false
  },
  {
    id: 'LEAD003',
    companyName: 'StartupXYZ',
    contactPerson: 'Alex Johnson',
    email: 'alex@startupxyz.com',
    status: 'new',
    value: 15000,
    lastContact: new Date('2024-01-16'),
    source: 'Cold Call',
    isHotLead: true
  }
];

// Custom business leads configuration
const businessLeadsConfig: DataOperationConfig<BusinessLead> = {
  dataComparator: (a, b) => a.id === b.id,
  filterFunction: (data, filters) => {
    if (!filters) return data;
    return data.filter(lead => {
      if (filters.status && !filters.status.includes(lead.status)) return false;
      if (filters.minValue && lead.value < filters.minValue) return false;
      if (filters.hotLeadsOnly && !lead.isHotLead) return false;
      return true;
    });
  },
  booleanRenderer: (value) => (
    <span style={{ 
      color: value ? '#dc2626' : '#6b7280',
      fontWeight: value ? 'bold' : 'normal'
    }}>
      {value ? '🔥 Hot Lead' : '📋 Standard'}
    </span>
  ),
  getDataId: (lead) => `business-${lead.id}`
};

type DemoMode = 'healthcare' | 'ecommerce' | 'financial' | 'business';

export const AriaTabsDataGridComprehensiveDemo: React.FC = () => {
  const [demoMode, setDemoMode] = useState<DemoMode>('healthcare');

  // Memoized configurations for each demo mode
  const demoConfigurations = useMemo(() => ({
    healthcare: {
      title: 'Healthcare Patient Management',
      description: 'NHS Early Warning System with patient monitoring',
      dataConfig: tchDataConfig,
      tabPanels: createTCHTabsConfig(samplePatients),
      data: samplePatients
    },
    ecommerce: {
      title: 'E-commerce Product Catalog',
      description: 'Product management with pricing and inventory',
      ...createPluginDataGrid('ecommerce', sampleProducts),
      data: sampleProducts
    },
    financial: {
      title: 'Financial Transaction Dashboard',
      description: 'Banking and financial data management',
      ...createPluginDataGrid('financial', sampleTransactions),
      data: sampleTransactions
    },
    business: {
      title: 'Sales Lead Management',
      description: 'Custom CRM configuration with business logic',
      dataConfig: businessLeadsConfig,
      tabPanels: createGenericTabsConfig(sampleLeads, [
        {
          id: 'all-leads',
          label: 'All Leads',
          columns: [
            { key: 'companyName', label: 'Company' },
            { key: 'contactPerson', label: 'Contact' },
            { key: 'status', label: 'Status' },
            { 
              key: 'value', 
              label: 'Value',
              render: (lead) => `$${lead.value.toLocaleString()}`
            },
            { key: 'isHotLead', label: 'Priority' }
          ],
          ariaLabel: 'All Sales Leads Grid',
          ariaDescription: 'Complete sales pipeline with lead information'
        },
        {
          id: 'hot-leads',
          label: 'Hot Leads',
          columns: [
            { key: 'companyName', label: 'Company' },
            { key: 'contactPerson', label: 'Contact' },
            { 
              key: 'value', 
              label: 'Value',
              render: (lead) => `$${lead.value.toLocaleString()}`
            },
            { 
              key: 'lastContact', 
              label: 'Last Contact',
              render: (lead) => lead.lastContact.toLocaleDateString()
            }
          ],
          filter: (leads) => leads.filter(lead => lead.isHotLead),
          sortConfig: [{ key: 'value', direction: 'desc' }],
          ariaLabel: 'Hot Leads Grid',
          ariaDescription: 'High-priority leads requiring immediate attention'
        },
        {
          id: 'pipeline',
          label: 'Active Pipeline',
          columns: [
            { key: 'companyName', label: 'Company' },
            { key: 'status', label: 'Status' },
            { 
              key: 'value', 
              label: 'Value',
              render: (lead) => `$${lead.value.toLocaleString()}`
            },
            { key: 'source', label: 'Source' }
          ],
          filter: (leads) => leads.filter(lead => 
            ['contacted', 'qualified'].includes(lead.status)
          ),
          ariaLabel: 'Active Pipeline Grid',
          ariaDescription: 'Leads currently in the sales pipeline'
        }
      ]),
      data: sampleLeads
    }
  }), []);

  const currentConfig = demoConfigurations[demoMode];

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          color: '#1f2937'
        }}>
          AriaTabsDataGrid - Comprehensive Demo
        </h1>
        
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#6b7280', 
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          This demo showcases the component's versatility across different domains:
          healthcare, e-commerce, financial services, and custom business applications.
          Each configuration demonstrates domain-specific data operations, custom renderers,
          and specialized filtering logic.
        </p>

        {/* Mode Selection */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          {(Object.keys(demoConfigurations) as DemoMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => setDemoMode(mode)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #d1d5db',
                backgroundColor: demoMode === mode ? '#3b82f6' : '#ffffff',
                color: demoMode === mode ? '#ffffff' : '#374151',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.2s',
                textTransform: 'capitalize'
              }}
              onMouseOver={(e) => {
                if (demoMode !== mode) {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                }
              }}
              onMouseOut={(e) => {
                if (demoMode !== mode) {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }
              }}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Current Configuration Info */}
        <div style={{
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '0.5rem',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            marginBottom: '0.5rem',
            color: '#1e293b'
          }}>
            {currentConfig.title}
          </h2>
          <p style={{ 
            color: '#64748b', 
            marginBottom: '1rem' 
          }}>
            {currentConfig.description}
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            fontSize: '0.9rem'
          }}>
            <div>
              <strong>Data Records:</strong> {currentConfig.data.length}
            </div>
            <div>
              <strong>Tab Panels:</strong> {currentConfig.tabPanels.length}
            </div>
            <div>
              <strong>Features:</strong> {
                [
                  'Row Selection',
                  'Custom Filtering',
                  'Domain-Specific Renderers',
                  'Keyboard Navigation',
                  'ARIA Compliance'
                ].join(', ')
              }
            </div>
          </div>
        </div>
      </div>

      {/* Data Grid Component */}
      <AriaTabsDataGrid
        dataConfig={currentConfig.dataConfig}
        tabPanels={currentConfig.tabPanels}
        ariaLabel={`${currentConfig.title} Data Grid`}
        ariaDescription={`Interactive data grid for ${currentConfig.description.toLowerCase()}`}
      />
      
      {/* Technical Implementation Notes */}
      <div style={{
        marginTop: '3rem',
        padding: '1.5rem',
        backgroundColor: '#f1f5f9',
        borderRadius: '0.5rem',
        border: '1px solid #cbd5e1'
      }}>
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: '600', 
          marginBottom: '1rem',
          color: '#334155'
        }}>
          Implementation Details
        </h3>
        
        <div style={{ display: 'grid', gap: '1rem', fontSize: '0.9rem' }}>
          <div>
            <strong>Current Mode:</strong> {demoMode} configuration
          </div>
          <div>
            <strong>Data Operations:</strong> Custom comparator, filter function, and boolean renderer
          </div>
          <div>
            <strong>Architecture:</strong> Generic core with domain-specific plugins and factory helpers
          </div>
          <div>
            <strong>State Management:</strong> Global row selection with data-object persistence
          </div>
          <div>
            <strong>Accessibility:</strong> Full ARIA support with dynamic labels and descriptions
          </div>
        </div>
      </div>
    </div>
  );
};
