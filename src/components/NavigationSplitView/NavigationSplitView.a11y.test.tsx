import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { expectAccessible } from '../../test-utils/accessibility';
import { NavigationSplitView } from './NavigationSplitView';

describe('NavigationSplitView (a11y)', () => {
  const items = [
    { id: 'a', label: 'Patients' },
    { id: 'b', label: 'Appointments', description: 'Manage upcoming visits' },
    { id: 'c', label: 'Reports', disabled: true }
  ];

  it('no axe violations (list layout basic selection)', async () => {
    const { container } = render(
      <NavigationSplitView
        items={items}
        defaultSelectedId="a"
        renderContent={(item) => item ? <div data-testid="detail">Detail: {item.label}</div> : <div>No selection</div>}
      />
    );
    await expectAccessible(container);
  });

  it('no axe violations (with secondary content + auto header)', async () => {
    const { container } = render(
      <NavigationSplitView
        items={items}
        defaultSelectedId="b"
        autoContentHeader={{ mobile: true, tablet: true, desktop: true }}
        renderContent={(item) => item ? <div data-testid="detail">{item.label} main</div> : null}
        renderSecondaryContent={(item) => item ? <div data-testid="secondary">Secondary for {item.label}</div> : null}
        forceLayout="three-column"
      />
    );
    await expectAccessible(container);
  });
});
