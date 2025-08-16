import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Checkboxes } from './Checkboxes';

const baseItems = [
  { value: 'one', text: 'One' },
  { value: 'two', text: 'Two', hint: 'Second' },
];

describe('Checkboxes (SSR)', () => {
  it('renders items & legend', () => {
    const { getByRole, getByText } = renderSSR(<Checkboxes name="grp" legend="Legend" items={baseItems} />);
    expect(getByRole('group')).toBeTruthy();
    expect(getByText('Legend')).toBeTruthy();
    expect(getByRole('checkbox', { name: 'One' })).toBeTruthy();
  });
  it('renders hint & error with describedBy', () => {
    const { getByRole, getByText, getAllByText } = renderSSR(<Checkboxes name="grp2" legend="L" hint="H" errorMessage="E" items={baseItems} />);
    const fieldset = getByRole('group');
    const described = fieldset.getAttribute('aria-describedby');
    expect(described).toContain('grp2-hint');
    expect(described).toContain('grp2-error');
    expect(getByText('H')).toBeTruthy();
    expect(getAllByText(/E/).length).toBeGreaterThan(0);
  });
  it('marks pre-checked item', () => {
    const { getByRole } = renderSSR(<Checkboxes name="grp3" items={[{ value: 'one', text: 'One', checked: true }]} />);
    const cb = getByRole('checkbox', { name: 'One' });
    expect(cb.getAttribute('checked') !== null || cb.hasAttribute('checked')).toBe(true);
  });
  it('renders conditional hidden by default', () => {
    const { getByTestId } = renderSSR(<Checkboxes name="grp4" items={[{ value: 'one', text: 'One', conditional: <div data-testid="cond">C</div> }]} />);
    const wrapper = getByTestId('cond').closest('.nhsuk-checkboxes__conditional');
    expect(wrapper?.className).toContain('hidden');
  });
  it('applies small variant class', () => {
    const { container } = renderSSR(<Checkboxes name="grp5" items={baseItems} small />);
    expect(container.querySelector('.nhsuk-checkboxes--small')).toBeTruthy();
  });
});
