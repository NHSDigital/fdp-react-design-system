import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: 'Components/Header/Navigation Overflow Testing',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Navigation Overflow Testing

This collection of stories specifically tests the overflow behavior of the NHS Header navigation component.

### How Overflow Works

The header navigation dynamically manages menu items based on available space:

1. **Desktop (≥768px)**: Items display horizontally until they overflow, then excess items move to a "More" dropdown
2. **Mobile (<768px)**: All items are accessible via a hamburger menu

### Testing Methodology

- **Progressive Overflow**: Stories with increasing numbers of menu items
- **Responsive Testing**: Same navigation tested across different viewport sizes
- **Edge Cases**: Extremely long text, many items, mixed content types
- **Real-world Scenarios**: Based on actual NHS service navigation patterns

### Key Features Tested

- ✅ Dynamic overflow detection
- ✅ "More" button with chevron icon rotation  
- ✅ Mobile hamburger menu functionality
- ✅ Keyboard navigation and accessibility
- ✅ Focus management
- ✅ ARIA states and screen reader support

### Testing Instructions

1. **Desktop Testing**: Resize browser window to trigger overflow behavior
2. **Mobile Testing**: Use viewport controls or resize below 768px
3. **Console Debugging**: Open browser console to see overflow detection logs
4. **Interaction Testing**: Click "More" button to verify dropdown functionality
        `,
      },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

// Basic overflow test with moderate number of items
export const ModerateOverflow: Story = {
  args: {
    service: {
      text: 'NHS Services',
      href: '/',
    },
    navigation: {
      items: [
        { href: '/', text: 'Home', current: true },
        { href: '/health-a-z', text: 'Health A to Z' },
        { href: '/live-well', text: 'Live Well' },
        { href: '/mental-health', text: 'Mental health' },
        { href: '/care-support', text: 'Care and support' },
        { href: '/pregnancy', text: 'Pregnancy' },
        { href: '/nhs-services', text: 'NHS services' },
        { href: '/appointments', text: 'Appointments' },
        { href: '/test-results', text: 'Test results' },
        { href: '/medicines', text: 'Medicines' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests overflow behavior with 10 navigation items. Resize browser to see items move to "More" dropdown.',
      },
    },
  },
};

// Heavy overflow test
export const HeavyOverflow: Story = {
  args: {
    service: {
      text: 'NHS Digital Platform',
      href: '/',
    },
    search: {
      action: '/search',
      placeholder: 'Search NHS Digital',
    },
    navigation: {
      items: [
        { href: '/', text: 'Dashboard', current: true },
        { href: '/patients', text: 'Patient Records' },
        { href: '/appointments', text: 'Appointment Management' },
        { href: '/prescriptions', text: 'Electronic Prescriptions' },
        { href: '/referrals', text: 'Patient Referrals' },
        { href: '/test-results', text: 'Laboratory Results' },
        { href: '/imaging', text: 'Medical Imaging' },
        { href: '/clinical-notes', text: 'Clinical Documentation' },
        { href: '/care-plans', text: 'Care Planning' },
        { href: '/medication-review', text: 'Medication Reviews' },
        { href: '/discharge-planning', text: 'Discharge Planning' },
        { href: '/quality-measures', text: 'Quality Measures' },
        { href: '/analytics', text: 'Healthcare Analytics' },
        { href: '/reporting', text: 'Clinical Reporting' },
        { href: '/admin', text: 'System Administration' },
        { href: '/support', text: 'Technical Support' },
        { href: '/training', text: 'Staff Training' },
        { href: '/documentation', text: 'Documentation' },
        { href: '/settings', text: 'User Settings' },
        { href: '/help', text: 'Help & Support' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests overflow behavior with 20 navigation items. Multiple items should appear in the "More" dropdown.',
      },
    },
  },
};

// Stress test with many items
export const StressTestOverflow: Story = {
  args: {
    service: {
      text: 'NHS Central Platform',
      href: '/',
    },
    navigation: {
      items: Array.from({ length: 50 }, (_, i) => ({
        href: `/item-${i + 1}`,
        text: `Menu Item ${i + 1}`,
        current: i === 0,
      })),
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Stress tests overflow behavior with 50 navigation items. Only a few items should be visible with most in "More" dropdown.',
      },
    },
  },
};

// Long text overflow test
export const LongTextOverflow: Story = {
  args: {
    service: {
      text: 'NHS Complex Healthcare Management System',
      href: '/',
    },
    navigation: {
      items: [
        { href: '/', text: 'Patient Care Management Dashboard', current: true },
        { href: '/comprehensive-health-assessments', text: 'Comprehensive Health Assessments' },
        { href: '/clinical-decision-support-systems', text: 'Clinical Decision Support Systems' },
        { href: '/electronic-health-record-management', text: 'Electronic Health Record Management' },
        { href: '/medication-administration-records', text: 'Medication Administration Records' },
        { href: '/quality-improvement-initiatives', text: 'Quality Improvement Initiatives' },
        { href: '/patient-safety-incident-reporting', text: 'Patient Safety Incident Reporting' },
        { href: '/healthcare-professional-credentials', text: 'Healthcare Professional Credentials' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests overflow behavior with long menu item text. Text length affects available space calculation.',
      },
    },
  },
};

// Mixed length overflow test
export const MixedLengthOverflow: Story = {
  args: {
    service: {
      text: 'NHS Portal',
      href: '/',
    },
    navigation: {
      items: [
        { href: '/', text: 'Home', current: true },
        { href: '/a', text: 'A' },
        { href: '/comprehensive-patient-care-management', text: 'Comprehensive Patient Care Management' },
        { href: '/b', text: 'B' },
        { href: '/electronic-prescribing-and-medicines-administration', text: 'Electronic Prescribing and Medicines Administration' },
        { href: '/help', text: 'Help' },
        { href: '/clinical-governance-and-quality-assurance-framework', text: 'Clinical Governance and Quality Assurance Framework' },
        { href: '/data', text: 'Data' },
        { href: '/multi-disciplinary-team-collaboration-tools', text: 'Multi-disciplinary Team Collaboration Tools' },
        { href: '/reports', text: 'Reports' },
        { href: '/patient-safety-incident-investigation-and-learning', text: 'Patient Safety Incident Investigation and Learning' },
        { href: '/settings', text: 'Settings' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests overflow with mixed-length menu items. Demonstrates complex layout calculations.',
      },
    },
  },
};

// White header variant overflow test
export const WhiteHeaderOverflow: Story = {
  args: {
    service: {
      text: 'NHS Trust Portal',
      href: '/',
    },
    variant: 'white',
    navigation: {
      white: true,
      items: [
        { href: '/', text: 'Trust Home', current: true },
        { href: '/patient-services', text: 'Patient Services' },
        { href: '/clinical-departments', text: 'Clinical Departments' },
        { href: '/emergency-services', text: 'Emergency Services' },
        { href: '/outpatient-clinics', text: 'Outpatient Clinics' },
        { href: '/surgical-services', text: 'Surgical Services' },
        { href: '/diagnostic-imaging', text: 'Diagnostic Imaging' },
        { href: '/laboratory-services', text: 'Laboratory Services' },
        { href: '/pharmacy-services', text: 'Pharmacy Services' },
        { href: '/rehabilitation', text: 'Rehabilitation Services' },
        { href: '/mental-health', text: 'Mental Health Services' },
        { href: '/maternity-services', text: 'Maternity Services' },
        { href: '/children-services', text: 'Children Services' },
        { href: '/elderly-care', text: 'Elderly Care Services' },
        { href: '/palliative-care', text: 'Palliative Care' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests overflow behavior with white header variant. Verifies styling consistency across themes.',
      },
    },
  },
};

// Real NHS services overflow test
export const RealNHSServicesOverflow: Story = {
  args: {
    service: {
      text: 'NHS.UK',
      href: '/',
    },
    search: {
      action: 'https://www.nhs.uk/search/',
      placeholder: 'Search the NHS website',
    },
    navigation: {
      items: [
        { href: '/', text: 'Home', current: true },
        { href: '/conditions', text: 'Health A to Z' },
        { href: '/live-well', text: 'Live Well' },
        { href: '/mental-health', text: 'Mental health' },
        { href: '/care-support', text: 'Care and support' },
        { href: '/pregnancy', text: 'Pregnancy' },
        { href: '/nhs-services', text: 'NHS services' },
        { href: '/coronavirus', text: 'Coronavirus (COVID-19)' },
        { href: '/nhs-app', text: 'NHS App' },
        { href: '/book-appointment', text: 'Book an appointment' },
        { href: '/find-services', text: 'Find services near you' },
        { href: '/urgent-emergency-care', text: 'Urgent and emergency care' },
        { href: '/prescriptions', text: 'Prescriptions and medicines' },
        { href: '/health-records', text: 'Health records' },
        { href: '/about-nhs', text: 'About the NHS' },
        { href: '/contact-us', text: 'Contact us' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests overflow with realistic NHS.UK navigation structure. Based on actual NHS website navigation.',
      },
    },
  },
};

// Organization header overflow test
export const OrganizationOverflow: Story = {
  args: {
    service: {
      text: 'Health Information Exchange',
      href: '/',
    },
    organisation: {
      name: 'Royal NHS Foundation Trust',
      split: 'Digital Health Services',
      descriptor: 'Connecting Care Communities',
    },
    variant: 'organisation',
    navigation: {
      items: [
        { href: '/', text: 'Trust Dashboard', current: true },
        { href: '/patient-portal', text: 'Patient Portal' },
        { href: '/clinical-systems', text: 'Clinical Systems' },
        { href: '/digital-services', text: 'Digital Services' },
        { href: '/health-records', text: 'Electronic Health Records' },
        { href: '/telemedicine', text: 'Telemedicine Services' },
        { href: '/research', text: 'Clinical Research' },
        { href: '/education', text: 'Medical Education' },
        { href: '/quality-safety', text: 'Quality & Safety' },
        { href: '/innovation', text: 'Healthcare Innovation' },
        { href: '/partnerships', text: 'Strategic Partnerships' },
        { href: '/community', text: 'Community Engagement' },
        { href: '/careers', text: 'Careers & Recruitment' },
        { href: '/contact', text: 'Contact Information' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests overflow with organization header variant. Includes complex service name and organization branding.',
      },
    },
  },
};