// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { GanttChart } from './GanttChart';
import { Resource, Task } from './TaskBar';

const meta: Meta<typeof GanttChart> = {
  title: 'NHS/Data/GanttChart',
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
  // Removed 'autodocs' tag; dedicated docs page exists
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
  { id: 'or-1-2', title: 'Orthopaedic Surgery', resourceId: 'or-1', start: createDate(3), end: createDate(3), priority: 'medium', progress: 0 },
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
