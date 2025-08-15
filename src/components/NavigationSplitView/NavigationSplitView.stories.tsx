import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { NavigationSplitView } from './NavigationSplitView';
import { Button } from '..';
import { BackLink } from '..';
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

export const ForcedThreeColumn: StoryObj = {
  name: 'Desktop Three Column',
  args: { forceLayout: 'three-column' }
};

export const CardListMobile: StoryObj = {
  name: 'Mobile Cards (Forced)',
  args: { forceLayout: 'cards' }
};

export const AutoThreeColumn: StoryObj = {
  name: 'Auto Three Column (Breakpoint)',
  args: { autoEnableThirdColumn: true },
  parameters: {
    docs: { description: { story: 'Automatically enables three-column layout at xlarge breakpoint when secondary content renderer is provided.' } }
  },
  decorators: [Story => (
    <div style={{ minWidth: 1300, border: '1px solid #eee' }}>
      <Story />
    </div>
  )]
};

export const ToggleThirdColumn: StoryObj = {
  name: 'Interactive: Toggle Third Column',
  args: { autoEnableThirdColumn: false },
  render: (args) => {
    const [showThird, setShowThird] = React.useState(false);
    const [selected, setSelected] = React.useState<string | undefined>(demoItems[0].id);
    return (
        <div style={{ minWidth: 1100, padding: 12 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
            <Button onClick={() => setShowThird(s => !s)}>
              {showThird ? 'Hide third column' : 'Show third column'}
            </Button>
            <span style={{ fontSize: 12, opacity: 0.7 }}>Toggle forces layout two ↔ three columns (simulated drill-down).</span>
          </div>
        <NavigationSplitView
          {...args}
          items={demoItems}
          selectedId={selected}
          onSelectionChange={(id) => setSelected(id)}
          forceLayout={showThird ? 'three-column' : 'two-column'}
          renderContent={(item?: DemoItem) => item ? (
            <div>
              <h3 style={{ marginTop: 0 }}>{item.label}</h3>
              <p>{item.detail}</p>
                {!showThird && (
                  <Button onClick={() => setShowThird(true)}>Drill into analytics →</Button>
                )}
            </div>
          ) : <p>Select a patient to view detail.</p>}
          renderSecondaryContent={(item?: DemoItem) => showThird && item ? (
        <div>
          <BackLink element="button" text="Back to two columns" onClick={() => setShowThird(false)} />
              	<h4 style={{ marginTop: 0 }}>Analytics: {item.label}</h4>
              	<p>Extended KPIs and charts could appear here.</p>
            </div>
          ) : <p style={{ opacity: 0.6 }}>Activate drill-down to show analytics.</p>}
        />
      </div>
    );
  },
  parameters: {
    docs: { description: { story: 'Demonstrates a user-triggered drill-down expanding to a third column via forceLayout toggling.' } }
  }
};

export const UrlSync: StoryObj = {
  name: 'URL Sync (Query Params)',
  args: { syncUrl: true, urlParamSelected: 'patient', urlParamDrill: 'drill' },
  render: (args: any) => {
    const [queryString, setQueryString] = React.useState(() => window.location.search);
    // Poll and listen for popstate to reflect updates triggered inside component
    React.useEffect(() => {
      const handler = () => setQueryString(window.location.search);
      window.addEventListener('popstate', handler);
      const interval = setInterval(() => {
        if (window.location.search !== queryString) setQueryString(window.location.search);
      }, 500);
      return () => { window.removeEventListener('popstate', handler); clearInterval(interval); };
    }, [queryString]);

    const paramSelected = args.urlParamSelected || 'patient';
    const paramDrill = args.urlParamDrill || 'drill';

    function clearViaUrl() {
      const sp = new URLSearchParams(window.location.search);
      sp.delete(paramSelected);
      sp.set(paramDrill, '0');
      const url = `${window.location.pathname}?${sp.toString()}${window.location.hash}`;
      window.history.replaceState(null, '', url);
      // Manually dispatch popstate so component re-reads params
      window.dispatchEvent(new PopStateEvent('popstate'));
      setQueryString(window.location.search);
    }

    return (
      <div style={{ padding: 12, maxWidth: 1180 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginBottom: 12 }}>
          <Button onClick={clearViaUrl}>Clear via URL</Button>
          <span style={{ fontSize: 12, opacity: 0.7 }}>Selection & drill state sync to query string (no history spam).</span>
          <code style={{ background: '#f5f5f5', padding: '4px 8px', borderRadius: 4, fontSize: 12 }}>?{queryString.slice(1) || '∅'}</code>
        </div>
        <NavigationSplitView
          {...args}
          items={demoItems}
          renderContent={(item?: DemoItem) => item ? (
            <div>
              <h3 style={{ marginTop: 0 }}>{item.label}</h3>
              <p>{item.detail}</p>
              <p style={{ fontSize: 12, opacity: 0.7 }}>Reload the story or copy the URL to retain selection.</p>
            </div>
          ) : <p>Select a patient to view detail.</p>}
          renderSecondaryContent={(item?: DemoItem) => item ? (
            <div>
              <h4 style={{ marginTop: 0 }}>Secondary Panel</h4>
              <p>Analytics or drill-down content for {item.label}.</p>
            </div>
          ) : <p>No selection.</p>}
        />
      </div>
    );
  },
  parameters: {
    docs: { description: { story: 'Demonstrates syncing selection and three-column drill state into URL query parameters. Uses replaceState to avoid growing the history stack and listens to popstate for back/forward support.' } }
  }
};

export const CollapsibleWithFooter: StoryObj = {
  name: 'Collapsible Nav + Footer',
  args: { collapsibleNav: true, autoEnableThirdColumn: false, persistNavCollapsed: 'localStorage' },
  render: (args) => {
    const [selected, setSelected] = React.useState<string | undefined>(demoItems[0].id);
    const CustomShow = () => <span aria-hidden="true" style={{ display: 'inline-flex' }}>➡️</span>;
    const CustomHide = () => <span aria-hidden="true" style={{ display: 'inline-flex' }}>⬅️</span>;
    return (
      <div style={{ minWidth: 1100, padding: 12 }}>
        <NavigationSplitView
          {...args}
          items={demoItems}
          selectedId={selected}
          onSelectionChange={(id) => setSelected(id)}
          collapseToggleIconShow={<CustomShow />}
          collapseToggleIconHide={<CustomHide />}
          navFooter={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              
            </div>
          }
          renderContent={(item?: DemoItem) => item ? (
            <div>
              <h3 style={{ marginTop: 0 }}>{item.label}</h3>
              <p>{item.detail}</p>
            </div>
          ) : <p>Select a patient to view detail.</p>}
        />
      </div>
    );
  },
  parameters: {
    docs: { description: { story: 'Shows the navigation footer region, collapsible nav behaviour, custom icons, tooltip (title) on the toggle, and persistence via localStorage.' } }
  }
};
