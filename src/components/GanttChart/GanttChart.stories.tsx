import type { Meta, StoryObj } from '@storybook/react';
import { GanttChart } from './GanttChart';
import { Resource, Task } from './TaskBar';

const meta: Meta<typeof GanttChart> = {
  title: 'NHS Components/GanttChart',
  component: GanttChart,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The GanttChart component provides an accessible way to display project timelines and resource scheduling.
Built with React Aria for keyboard navigation and screen reader support, following NHS design principles.

**Key Features:**
- Accessible keyboard navigation using arrow keys
- Screen reader support with proper ARIA labels
- NHS color palette for task priority indication
- Interactive task bars with focus states
- Responsive design for mobile and desktop
- Progress indicators for task completion

**Accessibility:**
- Full keyboard navigation support
- Focus indicators meet WCAG contrast requirements
- Screen reader descriptions for all tasks
- Role-based ARIA attributes
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    resources: {
      description: 'Array of resources/rows to display in the chart',
      control: { type: 'object' }
    },
    viewStart: {
      description: 'Start date for the timeline view',
      control: { type: 'date' }
    },
    viewEnd: {
      description: 'End date for the timeline view',
      control: { type: 'date' }
    },
    onTaskClick: {
      description: 'Callback fired when a task is clicked',
      action: 'task clicked'
    },
    onTaskDoubleClick: {
      description: 'Callback fired when a task is double-clicked',
      action: 'task double clicked'
    }
  }
};

export default meta;
type Story = StoryObj<typeof GanttChart>;

// Helper function to create dates relative to today
const createDate = (daysFromToday: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + daysFromToday);
  return date;
};

// Sample NHS healthcare scheduling data
const nhsResources: Resource[] = [
  { id: 'ward-a', label: 'Ward A - General Medicine' },
  { id: 'ward-b', label: 'Ward B - Surgery' },
  { id: 'ward-c', label: 'Ward C - Emergency' },
  { id: 'or-1', label: 'Operating Room 1' },
  { id: 'or-2', label: 'Operating Room 2' },
  { id: 'ct-scan', label: 'CT Scanner' },
  { id: 'mri', label: 'MRI Suite' },
  { id: 'physio', label: 'Physiotherapy' }
];

const nhsTasks: Task[] = [
  // Ward A tasks
  { id: 'ward-a-1', title: 'Patient A - Recovery', resourceId: 'ward-a', start: createDate(-2), end: createDate(3), priority: 'medium', progress: 60 },
  { id: 'ward-a-2', title: 'Patient B - Monitoring', resourceId: 'ward-a', start: createDate(1), end: createDate(5), priority: 'high', progress: 20 },
  
  // Ward B tasks
  { id: 'ward-b-1', title: 'Pre-op Preparation', resourceId: 'ward-b', start: createDate(0), end: createDate(1), priority: 'high', progress: 80 },
  { id: 'ward-b-2', title: 'Post-op Care', resourceId: 'ward-b', start: createDate(2), end: createDate(7), priority: 'medium', progress: 0 },
  { id: 'ward-b-3', title: 'Discharge Planning', resourceId: 'ward-b', start: createDate(6), end: createDate(8), priority: 'low', progress: 0 },
  
  // Ward C tasks
  { id: 'ward-c-1', title: 'Emergency Assessment', resourceId: 'ward-c', start: createDate(-1), end: createDate(0), priority: 'high', progress: 100 },
  { id: 'ward-c-2', title: 'Trauma Care', resourceId: 'ward-c', start: createDate(0), end: createDate(2), priority: 'high', progress: 45 },
  
  // Operating Room tasks
  { id: 'or-1-1', title: 'Cardiac Surgery', resourceId: 'or-1', start: createDate(1), end: createDate(1), priority: 'high', progress: 0 },
  { id: 'or-1-2', title: 'Orthopedic Surgery', resourceId: 'or-1', start: createDate(3), end: createDate(3), priority: 'medium', progress: 0 },
  { id: 'or-2-1', title: 'Neurosurgery', resourceId: 'or-2', start: createDate(2), end: createDate(2), priority: 'high', progress: 0 },
  
  // Imaging tasks
  { id: 'ct-1', title: 'CT Scan - Patient X', resourceId: 'ct-scan', start: createDate(0), end: createDate(0), priority: 'medium', progress: 100 },
  { id: 'ct-2', title: 'CT Scan - Patient Y', resourceId: 'ct-scan', start: createDate(1), end: createDate(1), priority: 'low', progress: 0 },
  { id: 'mri-1', title: 'MRI Scan - Brain Study', resourceId: 'mri', start: createDate(2), end: createDate(2), priority: 'medium', progress: 0 },
  
  // Physiotherapy
  { id: 'physio-1', title: 'Rehabilitation Session', resourceId: 'physio', start: createDate(1), end: createDate(14), priority: 'low', progress: 30 }
];

export const Default: Story = {
  args: {
    resources: nhsResources,
    tasks: nhsTasks,
    viewStart: createDate(-7),
    viewEnd: createDate(21)
  },
  parameters: {
    docs: {
      description: {
        story: 'Default NHS healthcare scheduling view showing various departments and patient care activities.'
      }
    }
  }
};

export const CurrentWeek: Story = {
  args: {
    resources: nhsResources.slice(0, 4), // Show fewer resources
    tasks: nhsTasks.filter(task => 
      task.start >= createDate(-2) && task.start <= createDate(5)
    ),
    viewStart: createDate(-2),
    viewEnd: createDate(5)
  },
  parameters: {
    docs: {
      description: {
        story: 'Focused view showing just the current week of activities with critical care tasks.'
      }
    }
  }
};

export const SurgicalSchedule: Story = {
  args: {
    resources: [
      { id: 'or-1', label: 'Operating Room 1' },
      { id: 'or-2', label: 'Operating Room 2' },
      { id: 'or-3', label: 'Operating Room 3' },
      { id: 'recovery', label: 'Recovery Bay' }
    ],
    tasks: [
      { id: 'or1-morning', title: 'Appendectomy', resourceId: 'or-1', start: createDate(0), end: createDate(0), priority: 'high', progress: 100 },
      { id: 'or1-afternoon', title: 'Gallbladder Surgery', resourceId: 'or-1', start: createDate(0), end: createDate(0), priority: 'medium', progress: 0 },
      { id: 'or2-emergency', title: 'Emergency Surgery', resourceId: 'or-2', start: createDate(0), end: createDate(0), priority: 'high', progress: 50 },
      { id: 'or3-elective', title: 'Hip Replacement', resourceId: 'or-3', start: createDate(1), end: createDate(1), priority: 'medium', progress: 0 },
      { id: 'recovery-1', title: 'Post-op Monitoring', resourceId: 'recovery', start: createDate(0), end: createDate(2), priority: 'high', progress: 75 }
    ],
    viewStart: createDate(-1),
    viewEnd: createDate(3)
  },
  parameters: {
    docs: {
      description: {
        story: 'Surgical scheduling view focusing on operating rooms and recovery management.'
      }
    }
  }
};

export const EmergencyDepartment: Story = {
  args: {
    resources: [
      { id: 'triage', label: 'Triage' },
      { id: 'minors', label: 'Minors Unit' },
      { id: 'majors', label: 'Majors Unit' },
      { id: 'resus', label: 'Resuscitation' },
      { id: 'observation', label: 'Observation Ward' }
    ],
    tasks: [
      { id: 'triage-1', title: 'Patient Assessment', resourceId: 'triage', start: createDate(0), end: createDate(0), priority: 'high', progress: 100 },
      { id: 'minors-1', title: 'Minor Injury Treatment', resourceId: 'minors', start: createDate(0), end: createDate(0), priority: 'low', progress: 80 },
      { id: 'majors-1', title: 'Chest Pain Investigation', resourceId: 'majors', start: createDate(0), end: createDate(1), priority: 'high', progress: 60 },
      { id: 'resus-1', title: 'Cardiac Arrest', resourceId: 'resus', start: createDate(0), end: createDate(0), priority: 'high', progress: 100 },
      { id: 'obs-1', title: '24hr Observation', resourceId: 'observation', start: createDate(0), end: createDate(1), priority: 'medium', progress: 40 }
    ],
    viewStart: createDate(-1),
    viewEnd: createDate(2)
  },
  parameters: {
    docs: {
      description: {
        story: 'Emergency department workflow showing patient flow through different treatment areas.'
      }
    }
  }
};

export const LongTermCare: Story = {
  args: {
    resources: [
      { id: 'rehabilitation', label: 'Rehabilitation Unit' },
      { id: 'elderly-care', label: 'Elderly Care Ward' },
      { id: 'mental-health', label: 'Mental Health Unit' }
    ],
    tasks: [
      { id: 'rehab-1', title: 'Stroke Recovery Program', resourceId: 'rehabilitation', start: createDate(-14), end: createDate(14), priority: 'medium', progress: 65 },
      { id: 'elderly-1', title: 'Long-term Care Plan', resourceId: 'elderly-care', start: createDate(-21), end: createDate(7), priority: 'low', progress: 80 },
      { id: 'mental-1', title: 'Therapy Program', resourceId: 'mental-health', start: createDate(-7), end: createDate(21), priority: 'medium', progress: 35 }
    ],
    viewStart: createDate(-28),
    viewEnd: createDate(28)
  },
  parameters: {
    docs: {
      description: {
        story: 'Long-term care planning view showing extended treatment programs and rehabilitation schedules.'
      }
    }
  }
};

export const EmptySchedule: Story = {
  args: {
    resources: [
      { id: 'ward-1', label: 'General Ward 1' },
      { id: 'ward-2', label: 'General Ward 2' },
      { id: 'ward-3', label: 'General Ward 3' }
    ],
    tasks: [],
    viewStart: createDate(0),
    viewEnd: createDate(7)
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty schedule view showing how the component handles no tasks.'
      }
    }
  }
};

export const SingleDay: Story = {
  args: {
    resources: nhsResources.slice(0, 3),
    tasks: nhsTasks.filter(task => {
      const today = createDate(0);
      return task.start <= today && task.end >= today;
    }),
    viewStart: createDate(0),
    viewEnd: createDate(0)
  },
  parameters: {
    docs: {
      description: {
        story: 'Single day view focusing on today\'s activities only.'
      }
    }
  }
};

// Interactive story for testing accessibility
export const AccessibilityDemo: Story = {
  args: {
    resources: [
      { id: 'demo-1', label: 'Demo Resource 1' },
      { id: 'demo-2', label: 'Demo Resource 2' }
    ],
    tasks: [
      { id: 'task-1', title: 'High Priority Task', resourceId: 'demo-1', start: createDate(0), end: createDate(2), priority: 'high', progress: 50 },
      { id: 'task-2', title: 'Medium Priority Task', resourceId: 'demo-2', start: createDate(1), end: createDate(3), priority: 'medium', progress: 75 }
    ],
    viewStart: createDate(-1),
    viewEnd: createDate(4)
  },
  parameters: {
    docs: {
      description: {
        story: `
Accessibility demonstration with focus on keyboard navigation:

**Testing Instructions:**
1. Use Tab key to navigate to the chart
2. Use Arrow keys to move between tasks
3. Press Space or Enter to activate tasks
4. Test with screen reader enabled
5. Verify focus indicators are visible

**Keyboard Controls:**
- Tab/Shift+Tab: Enter/exit chart
- Arrow keys: Navigate between tasks
- Space/Enter: Activate task (fires click event)
- Escape: Return focus to container
        `
      }
    }
  }
};
