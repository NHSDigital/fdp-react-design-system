import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { Checkboxes } from './Checkboxes';

describe('Checkboxes (hydration)', () => {
  it('hydrates basic group', () => {
    hydrateWithoutMismatch({ ssr: <Checkboxes name="hgrp" items={[{ value: 'a', text: 'A' }]} />, client: <Checkboxes name="hgrp" items={[{ value: 'a', text: 'A' }]} /> });
  });
  it('hydrates with pre-checked + conditional', () => {
    hydrateWithoutMismatch({ ssr: <Checkboxes name="hgrp2" items={[{ value: 'a', text: 'A', checked: true }, { value: 'b', text: 'B', conditional: <div>Cond</div> }]} />, client: <Checkboxes name="hgrp2" items={[{ value: 'a', text: 'A', checked: true }, { value: 'b', text: 'B', conditional: <div>Cond</div> }]} /> });
  });
  it('hydrates small variant with legend/error/hint', () => {
    hydrateWithoutMismatch({ ssr: <Checkboxes name="hgrp3" legend="L" hint="H" errorMessage="E" small items={[{ value: 'a', text: 'A' }]} />, client: <Checkboxes name="hgrp3" legend="L" hint="H" errorMessage="E" small items={[{ value: 'a', text: 'A' }]} /> });
  });
});
