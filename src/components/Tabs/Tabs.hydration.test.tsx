import { describe, it } from 'vitest';
import { Tabs } from './Tabs';
import { TabItem } from './Tabs.types';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';

const items: TabItem[] = [
  { id: 'tab1', label: 'First Tab', content: <div>Content for first tab</div> },
  { id: 'tab2', label: 'Second Tab', content: <div>Content for second tab</div> },
];

describe('Tabs (hydration)', () => {
  it('hydrates default first tab selected without mismatch', () => {
    hydrateWithoutMismatch({
      ssr: <Tabs items={items} />,
      client: <Tabs items={items} />,
    });
  });
  it('hydrates controlled activeTab without mismatch', () => {
    hydrateWithoutMismatch({
      ssr: <Tabs items={items} activeTab="tab2" />,
      client: <Tabs items={items} activeTab="tab2" />,
    });
  });
});
