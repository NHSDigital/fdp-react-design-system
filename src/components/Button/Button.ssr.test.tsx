import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Button } from './Button';

describe('Button (SSR)', () => {
  it('renders default primary button', () => {
    const { getByRole } = renderSSR(<Button>Primary</Button>);
    const btn = getByRole('button');
    expect(btn.className).toContain('nhs-aria-button');
    expect(btn.className).toContain('nhs-aria-button--primary');
  });
  it('applies variant classes', () => {
    const { getByRole: g1 } = renderSSR(<Button variant="secondary">Secondary</Button>);
    expect(g1('button').className).toContain('nhs-aria-button--secondary');
    const { getByRole: g2 } = renderSSR(<Button variant="warning">Warning</Button>);
    expect(g2('button').className).toContain('nhs-aria-button--warning');
    const { getByRole: g3 } = renderSSR(<Button variant="reverse">Reverse</Button>);
    expect(g3('button').className).toContain('nhs-aria-button--reverse');
  });
  it('applies size modifiers', () => {
    const { getByRole: gSmall } = renderSSR(<Button size="small">Small</Button>);
    expect(gSmall('button').className).toContain('nhs-aria-button--small');
    const { getByRole: gLarge } = renderSSR(<Button size="large">Large</Button>);
    expect(gLarge('button').className).toContain('nhs-aria-button--large');
  });
  it('applies full width class', () => {
    const { getByRole } = renderSSR(<Button fullWidth>Full</Button>);
    expect(getByRole('button').className).toContain('nhs-aria-button--full-width');
  });
  it('accepts custom className & passes props', () => {
    const { getByRole } = renderSSR(<Button className="extra" data-testid="b" aria-label="Label">X</Button>);
    const btn = getByRole('button');
    expect(btn.className).toContain('extra');
    expect(btn.getAttribute('aria-label')).toBe('Label');
  });
  it('supports type attribute', () => {
    const { getByRole } = renderSSR(<Button type="submit">Submit</Button>);
    expect(getByRole('button').getAttribute('type')).toBe('submit');
  });
  it('renders complex children content', () => {
    const { getByRole } = renderSSR(<Button><span>Complex</span> <strong>Content</strong></Button>);
    expect(getByRole('button').textContent).toContain('Complex');
    expect(getByRole('button').textContent).toContain('Content');
  });
  it('marks disabled state', () => {
    const { getByRole } = renderSSR(<Button disabled>Disabled</Button>);
    const btn = getByRole('button');
    expect(btn.hasAttribute('disabled')).toBe(true);
  });
});
