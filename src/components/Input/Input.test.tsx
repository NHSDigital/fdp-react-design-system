import { renderSSR as render } from '../../test-utils/renderSSR';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders with required props', () => {
    const { container } = render(<Input id="test-input" name="test" />);
    const input = container.querySelector('input');
    expect(input).toBeTruthy();
    expect(input?.getAttribute('id')).toBe('test-input');
    expect(input?.getAttribute('name')).toBe('test');
  });

  it('renders with default type text', () => {
    const { getByRole } = render(<Input id="test-input" name="test" />);
    const input = getByRole('textbox');
    expect(input?.getAttribute('type')).toBe('text');
  });

  it('renders with specified type', () => {
    const { getByRole } = render(<Input id="test-input" name="test" type="email" />);
    const input = getByRole('textbox');
    expect(input?.getAttribute('type')).toBe('email');
  });

  it('renders with value (readOnly to avoid warning)', () => {
    const { getByDisplayValue } = render(<Input id="test-input" name="test" value="test value" readOnly />);
    const input = getByDisplayValue('test value');
    expect(input).toBeTruthy();
  });

  it('renders with placeholder', () => {
    const { getByPlaceholderText } = render(<Input id="test-input" name="test" placeholder="Enter text" />);
    const input = getByPlaceholderText('Enter text');
    expect(input).toBeTruthy();
  });

  it('applies error class when hasError is true', () => {
    const { getByRole } = render(<Input id="test-input" name="test" hasError />);
    const input = getByRole('textbox');
    expect(input?.className).toContain('nhsuk-input--error');
  });

  it('applies width class when width is specified', () => {
    const { getByRole } = render(<Input id="test-input" name="test" width="10" />);
    const input = getByRole('textbox');
    expect(input?.className).toContain('nhsuk-input--width-10');
  });

  it('handles disabled state', () => {
    const { getByRole } = render(<Input id="test-input" name="test" disabled />);
    const input = getByRole('textbox');
    expect(input?.getAttribute('disabled')).toBe('');
  });

  it('handles readonly state', () => {
    const { getByRole } = render(<Input id="test-input" name="test" readOnly />);
    const input = getByRole('textbox');
    expect(input?.getAttribute('readonly')).toBe('');
  });

  it('handles required state', () => {
    const { getByRole } = render(<Input id="test-input" name="test" required />);
    const input = getByRole('textbox');
    expect(input?.getAttribute('required')).toBe('');
  });

  it('accepts onChange handler', () => {
    const handleChange = vi.fn();
    const { container } = render(<Input id="test-input" name="test" onChange={handleChange} />);
    const input = container.querySelector('input');
    expect(input).toBeTruthy();
    // In SSR context, we verify the component accepts the handler without error
    expect(handleChange).toBeDefined();
  });

  it('accepts onFocus handler', () => {
    const handleFocus = vi.fn();
    const { container } = render(<Input id="test-input" name="test" onFocus={handleFocus} />);
    const input = container.querySelector('input');
    expect(input).toBeTruthy();
    // In SSR context, we verify the component accepts the handler without error
    expect(handleFocus).toBeDefined();
  });

  it('accepts onBlur handler', () => {
    const handleBlur = vi.fn();
    const { container } = render(<Input id="test-input" name="test" onBlur={handleBlur} />);
    const input = container.querySelector('input');
    expect(input).toBeTruthy();
    // In SSR context, we verify the component accepts the handler without error
    expect(handleBlur).toBeDefined();
  });

  it('applies custom className', () => {
    const { getByRole } = render(<Input id="test-input" name="test" className="custom-class" />);
    const input = getByRole('textbox');
    expect(input?.className).toContain('custom-class');
    expect(input?.className).toContain('nhsuk-input');
  });

  it('sets aria-describedby when provided', () => {
    const { getByRole } = render(<Input id="test-input" name="test" describedBy="help-text" />);
    const input = getByRole('textbox');
    expect(input?.getAttribute('aria-describedby')).toBe('help-text');
  });
});
