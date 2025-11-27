import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Tabs } from './Tabs';
import { expectAccessible } from '../../test-utils/accessibility';

describe('Tabs (a11y)', () => {
  it('no axe violations (basic)', async () => {
    const { container } = render(
      <Tabs
        items={[
          { id: 'tab1', label: 'Tab one', content: <p>Content one</p> },
          { id: 'tab2', label: 'Tab two', content: <p>Content two</p> },
          { id: 'tab3', label: 'Tab three', content: <p>Content three</p> },
        ]}
      />
    );
    await expectAccessible(container);
  });

  it('no axe violations (disabled tab)', async () => {
    const { container } = render(
      <Tabs
        items={[
          { id: 'a', label: 'Active', content: <p>A</p> },
          { id: 'b', label: 'Disabled', content: <p>B</p>, disabled: true },
          { id: 'c', label: 'Another', content: <p>C</p> },
        ]}
        defaultActiveTab="a"
      />
    );
    await expectAccessible(container);
  });
});
