import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Select } from './Select';

describe('Select (SSR)', () => {
  it('renders options prop and default selected derived', () => {
    const { html } = renderSSR(<Select id="c" name="c" options={[
      { value: '', text: 'Choose' },
      { value: 'a', text: 'A', selected: true },
      { value: 'b', text: 'B' }
    ]} />);
    expect(html).toContain('nhsuk-select');
    expect(html).toContain('<option value="a"');
  });

  it('renders children options pattern', () => {
    const { html } = renderSSR(<Select id="c2" name="c2"><Select.Option value="x">X</Select.Option></Select>);
    expect(html).toContain('value="x"');
  });

  it('applies error class', () => {
    const { html } = renderSSR(<Select id="e" name="e" hasError options={[]} />);
    expect(html).toContain('nhsuk-select--error');
  });
});
