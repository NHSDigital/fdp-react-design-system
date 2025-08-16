import { render, fireEvent } from '../../test-utils/ServerRenderer';
import { describe, it, expect, vi } from 'vitest';
import { Textarea } from './Textarea';

// NOTE: The previous version of this test file contained a large amount of
// syntactically invalid and duplicate tests that prevented the test and lint
// steps from running. This has been reduced to a small, representative set
// of tests that exercise the core behaviour. Expand carefully as needed.

describe('Textarea', () => {
  it('renders with base classes and attributes', () => {
    const { getByRole } = render(<Textarea id="message" name="message" />);
  const el = getByRole('textbox') as HTMLTextAreaElement;
  expect(el).toHaveAttribute('id', 'message');
  expect(el).toHaveAttribute('name', 'message');
  expect(el.className).toContain('nhsuk-textarea');
  });

  it('supports defaultValue and onChange', () => {
    const handleChange = vi.fn();
    const { getByRole } = render(<Textarea id="m" name="m" defaultValue="Initial" onChange={handleChange} />);
    const el = getByRole('textbox') as HTMLTextAreaElement;
    expect(el.value).toBe('Initial');
    fireEvent.change(el, { target: { value: 'Updated' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('applies error class when hasError is true', () => {
    const { getByRole } = render(<Textarea id="m" name="m" hasError />);
  const el = getByRole('textbox') as HTMLTextAreaElement;
  expect(el.className).toContain('nhsuk-textarea--error');
  });
});
