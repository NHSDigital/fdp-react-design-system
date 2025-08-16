import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Radios } from './Radios';

const opts = [
  { value: 'email', text: 'Email' },
  { value: 'phone', text: 'Phone' }
];

describe('Radios (SSR)', () => {
  it('renders radios and labels', () => {
    const { html } = renderSSR(<Radios name="contact" options={opts} />);
    expect(html).toContain('nhsuk-radios');
    expect(html).toContain('Email');
    expect(html).toContain('Phone');
  });

  it('applies small + error + inline modifiers', () => {
    const { html } = renderSSR(<Radios name="c2" options={opts} size="small" hasError inline />);
    expect(html).toContain('nhsuk-radios--small');
    expect(html).toContain('nhsuk-radios--error');
    expect(html).toContain('nhsuk-radios--inline');
  });
});
