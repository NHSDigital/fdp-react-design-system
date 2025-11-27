import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Label } from './Label';
import { Input } from '../Input/Input';
import { expectAccessible } from '../../test-utils/accessibility';

describe('Label (a11y)', () => {
  it('no axe violations (standard label)', async () => {
    const { container } = render(
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" />
      </div>
    );
    await expectAccessible(container);
  });

  it('no axe violations (page heading label)', async () => {
    const { container } = render(
      <div>
        <Label htmlFor="nhs" isPageHeading>Name</Label>
        <Input id="nhs" name="nhs" />
      </div>
    );
    await expectAccessible(container);
  });
});
