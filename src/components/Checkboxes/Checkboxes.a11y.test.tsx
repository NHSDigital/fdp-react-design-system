import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { expectAccessible } from '../../test-utils/accessibility';
import { Checkboxes } from './Checkboxes';

// Basic a11y coverage for checkbox group using items prop

describe('Checkboxes (group a11y)', () => {
  it('no axe violations (basic group)', async () => {
    const { container } = render(
      <Checkboxes
        name="fruits"
        legend="Select fruits"
        items={[
          { value: 'apple', text: 'Apple' },
          { value: 'banana', text: 'Banana' }
        ]}
      />
    );
    await expectAccessible(container);
  });

  it('no axe violations (with hint + conditional + error)', async () => {
    const { container } = render(
      <Checkboxes
        name="prefs"
        legend="Preferences"
        hint="Pick at least one"
        errorMessage="Required"
        items={[
          { value: 'one', text: 'One', hint: 'First option' },
          { value: 'two', text: 'Two', conditional: <div>Conditional content</div> }
        ]}
      />
    );
    await expectAccessible(container);
  });
});
