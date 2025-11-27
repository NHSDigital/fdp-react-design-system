import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Checkbox } from './Checkbox';

describe('Checkbox (SSR)', () => {
  it('renders with label', () => {
    const { getByRole, getByLabelText } = renderSSR(<Checkbox id="agree">Agree to terms</Checkbox>);
    expect(getByRole('checkbox').getAttribute('id')).toBe('agree');
    expect(getByLabelText('Agree to terms')).toBeTruthy();
  });
  it('includes hint and error describedBy chain', () => {
    const { getByRole } = renderSSR(<Checkbox id="consent" hint="Helpful" errorMessage="Required">Consent</Checkbox>);
    const input = getByRole('checkbox');
    const described = input.getAttribute('aria-describedby');
    expect(described).toContain('consent-hint');
    expect(described).toContain('consent-error');
  });
  it('marks disabled state', () => {
    const { getByRole } = renderSSR(<Checkbox id="d" disabled>Disabled</Checkbox>);
    expect(getByRole('checkbox').hasAttribute('disabled')).toBe(true);
  });
  it('respects defaultChecked initial state (uncontrolled)', () => {
    const { getByRole: g1 } = renderSSR(<Checkbox id="c1" defaultChecked>Checked</Checkbox>);
    expect(g1('checkbox').hasAttribute('checked') || g1('checkbox').getAttribute('checked') === '');
    const { getByRole: g2 } = renderSSR(<Checkbox id="c2">Not Checked</Checkbox>);
    expect(g2('checkbox').getAttribute('checked')).toBeNull();
  });
});
