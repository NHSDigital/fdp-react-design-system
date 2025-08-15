// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { NavigationSplitView } from './NavigationSplitView';
import type { NavigationSplitItem } from './NavigationSplitView.types';

interface DemoItem extends NavigationSplitItem<string> {
  detail: string;
  category?: string;
}

const demoItems: DemoItem[] = [
  { id: 'patient-1', label: 'Sarah Johnson', description: 'Ward 5B • Stable', detail: 'Detail about Sarah Johnson with clinical notes.' },
  { id: 'patient-2', label: 'Michael Davis', description: 'ICU • Critical', badge: 3, detail: 'Critical status monitoring and escalation actions.' },
  { id: 'patient-3', label: 'Emma Thompson', description: 'Recovery • Improving', detail: 'Recovery trajectory and physiotherapy schedule.' },
  { id: 'patient-4', label: 'James Wilson', description: 'Ward 2A • Observation', detail: 'Observation notes and recent test results.' },
];

const meta: Meta<typeof NavigationSplitView< string, DemoItem>> = {
  title: 'NHS/Navigation/NavigationSplitView',
  component: NavigationSplitView as any,
  args: {
    items: demoItems,
    renderContent: (item?: DemoItem) => item ? (
      <div>
        <h3 style={{ marginTop: 0 }}>{item.label}</h3>
        <p>{item.detail}</p>
      </div>
    ) : <p>Select a patient to view detail.</p>,
    renderSecondaryContent: (item?: DemoItem) => item ? (
      <div>
        <h4 style={{ marginTop: 0 }}>Secondary Panel</h4>
        <p>Additional analytics or context for {item.label}.</p>
      </div>
    ) : <p>No selection.</p>
  },
  argTypes: {
    syncUrl: { control: 'boolean', description: 'Enable URL query param sync for selection & drill state' },
    urlParamSelected: { control: 'text', description: 'Query parameter name storing selected id' },
  urlParamDrill: { control: 'text', description: 'Query parameter name storing drill (three-column) state' },
  collapsibleNav: { control: 'boolean', description: 'Enable collapsible nav (>= medium)' },
  navInitiallyCollapsed: { control: 'boolean', description: 'Initial collapsed state (if not persisted)' },
  persistNavCollapsed: { control: { type: 'select' }, options: ['localStorage','url','both', undefined], description: 'Persist nav collapsed state in chosen medium' },
  navCollapsedStorageKey: { control: 'text', description: 'Storage key for localStorage persistence' },
  navCollapsedUrlParam: { control: 'text', description: 'URL query param for collapsed state (1/0)' },
  collapseToggleLabelShow: { control: 'text', description: 'Aria-label / tooltip when nav is collapsed (action: show)' },
  collapseToggleLabelHide: { control: 'text', description: 'Aria-label / tooltip when nav is expanded (action: hide)' },
  collapseToggleIconShow: { control: false, description: 'Custom icon (ReactNode) when collapsed (default chevron right)' },
  collapseToggleIconHide: { control: false, description: 'Custom icon (ReactNode) when expanded (default chevron left)' },
  navFooter: { control: false, description: 'Custom footer region content (hidden when collapsed)' }
  ,autoContentHeader: { control: 'object', description: 'Automatic content header: boolean or { mobile, tablet, desktop }' }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Mobile-first master-detail navigation that adapts to tablet and desktop layouts.'
      }
    }
  }
};

export default meta;

export const Default: StoryObj = {
  name: 'Default (Responsive)',
};
