import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Fieldset } from './Fieldset';
import { Radios } from '../Radios/Radios';
import { expectAccessible } from '../../test-utils/accessibility';

describe('Fieldset (a11y)', () => {
  it('no axe violations (with legend)', async () => {
    const { container } = render(
      <Fieldset legend={{ text: 'Choose an option', size: 'm' }}>
        <Radios name="opt" options={[{ value: 'a', text: 'Option A' }, { value: 'b', text: 'Option B' }]} />
      </Fieldset>
    );
    await expectAccessible(container);
  });

  it('no axe violations (page heading legend)', async () => {
    const { container } = render(
      <Fieldset legend={{ text: 'Main question', isPageHeading: true }}>
        <Radios name="q" options={[{ value: 'y', text: 'Yes' }, { value: 'n', text: 'No' }]} />
      </Fieldset>
    );
    await expectAccessible(container);
  });
});
