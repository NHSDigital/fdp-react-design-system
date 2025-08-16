import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Tabs } from './Tabs';
import { TabItem } from './Tabs.types';

const items: TabItem[] = [
  { id: 'tab1', label: 'First Tab', content: <div>Content for first tab</div> },
  { id: 'tab2', label: 'Second Tab', content: <div>Content for second tab</div> },
  { id: 'tab3', label: 'Third Tab', content: <div>Content for third tab</div> },
];

describe('Tabs (SSR)', () => {
  it('renders tablist, tabs and panels', () => {
    const { container, getByText, getAllByRole, getByRole } = renderSSR(<Tabs items={items} />);
    expect(getByRole('tablist')).toBeTruthy();
    const tabs = getAllByRole('tab');
    expect(tabs.length).toBe(3);
    // Panels: query directly (role applied SSR)
    const panels = container.querySelectorAll('[role="tabpanel"]');
    expect(panels.length).toBe(3);
    expect(getByText('First Tab')).toBeTruthy();
    expect(getByText('Content for first tab')).toBeTruthy();
  });
  it('respects defaultActiveTab prop', () => {
    const { container } = renderSSR(<Tabs items={items} defaultActiveTab="tab2" />);
    const secondTab = container.querySelector('[role="tab"][aria-selected="true"][id^="tab2"]');
    expect(secondTab).toBeTruthy();
  });
  it('controlled activeTab marks correct tab selected', () => {
    const { container } = renderSSR(<Tabs items={items} activeTab="tab3" />);
    const selected = container.querySelector('[role="tab"][aria-selected="true"][id^="tab3"]');
    expect(selected).toBeTruthy();
  });
  it('invalid defaultActiveTab results in no selected tab', () => {
    const { container } = renderSSR(<Tabs items={items} defaultActiveTab="nope" />);
    const selected = container.querySelector('[role="tab"][aria-selected="true"]');
    expect(selected).toBeNull();
  });
  it('applies custom id & className', () => {
    const { container } = renderSSR(<Tabs items={items} id="custom-tabs" className="extra" />);
    const root = container.querySelector('#custom-tabs');
    expect(root?.className).toContain('nhsuk-tabs');
    expect(root?.className).toContain('extra');
  });
});
