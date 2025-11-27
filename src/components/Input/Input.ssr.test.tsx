import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
// Import from SSR-safe surface to ensure no hooks/context leak
import { Input } from '../ssr';

// Server-side rendering focused tests (static markup assertions only)
describe('Input (SSR)', () => {
  it('renders basic text input with id and name', () => {
    const { html, container } = renderSSR(<Input id="basic" name="basic" />);
    expect(html).toContain('id="basic"');
    const input = container.querySelector('input');
    expect(input?.getAttribute('name')).toBe('basic');
    expect(input?.getAttribute('type')).toBe('text');
  });

  it('renders specified type (email)', () => {
    const { container } = renderSSR(<Input id="em" name="em" type="email" />);
    expect(container.querySelector('input')?.getAttribute('type')).toBe('email');
  });

  it('applies error and width classes', () => {
    const { container } = renderSSR(<Input id="w" name="w" hasError width="10" />);
    const cls = container.querySelector('input')?.className || '';
    expect(cls).toContain('nhsuk-input--error');
    expect(cls).toContain('nhsuk-input--width-10');
  });

  it('range variant SSR markup (no JS interaction)', () => {
    const { container } = renderSSR(<Input id="rng" name="rng" type="range" min="0" max="100" defaultValue="50" showValueLabels valueLabels={{ min: 'Low', max: 'High' }} />);
    const slider = container.querySelector('input[type="range"]');
    expect(slider).toBeTruthy();
    expect(container.textContent).toContain('Low');
    expect(container.textContent).toContain('High');
  });
});
