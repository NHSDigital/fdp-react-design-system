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
	{ id: 'patient-1', label: 'Sarah Johnson', description: 'Ward 5B • Stable', detail: 'This is a comprehensive detailed clinical assessment of Sarah Johnson who is currently admitted to Ward 5B with a stable condition following her recent surgical procedure. Her recovery has been progressing remarkably well with all vital signs remaining within normal parameters throughout her stay. The nursing staff has documented excellent patient cooperation with prescribed treatments and medications. Daily physiotherapy sessions have shown significant improvement in mobility and strength. Laboratory results from this morning indicate normal blood counts and kidney function. The patient has expressed satisfaction with the care received and is looking forward to discharge planning discussions scheduled for tomorrow morning with the multidisciplinary team including her consultant surgeon, physiotherapist, and social worker.' },
	{ id: 'patient-2', label: 'Michael Davis', description: 'ICU • Critical', badge: 3, detail: 'Michael Davis remains in the Intensive Care Unit under critical care monitoring following complications from his emergency cardiac surgery performed three days ago. His condition requires continuous cardiovascular monitoring with frequent adjustments to his medication regimen based on real-time hemodynamic parameters. The cardiothoracic surgery team has implemented a comprehensive treatment protocol including advanced life support measures and specialized cardiac medications. Regular consultations with the cardiac rehabilitation team are being coordinated to prepare for the eventual transition to step-down care. Family members have been kept informed of his progress through daily updates from the attending intensivist. The next 48 hours will be crucial in determining his trajectory toward recovery.' },
	{ id: 'patient-3', label: 'Emma Thompson', description: 'Recovery • Improving', detail: 'Emma Thompson is making excellent progress in the recovery ward following her successful orthopedic surgery to repair a complex fracture sustained in a motor vehicle accident last week. Her pain management has been effectively controlled through a multimodal approach combining oral medications with targeted physical therapy interventions. The orthopedic team is pleased with the healing progress visible on recent X-ray imaging studies. Daily occupational therapy sessions are helping her regain independence in activities of daily living. Her family has been actively involved in discharge planning discussions and has arranged for appropriate home modifications to accommodate her temporary mobility limitations. Expected discharge date is within the next three to four days pending final clearance from the orthopedic consultant.' },
	{ id: 'patient-4', label: 'James Wilson', description: 'Ward 2A • Observation', detail: 'James Wilson is currently under observation in Ward 2A following his admission through the emergency department with suspected pneumonia symptoms that developed over the past week. Initial chest X-rays and laboratory studies have confirmed the presence of a lower respiratory tract infection requiring intravenous antibiotic therapy. His response to treatment has been closely monitored with serial vital sign assessments and daily chest examinations by the respiratory medicine team. Oxygen saturation levels have shown steady improvement over the past 48 hours, allowing for a reduction in supplemental oxygen requirements. The infectious disease specialist has reviewed his case and approved the current antibiotic regimen. Plans are underway for transition to oral antibiotics once he demonstrates sustained clinical improvement and tolerance of oral intake.' },
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
