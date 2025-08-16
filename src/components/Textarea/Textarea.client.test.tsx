import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Textarea } from './Textarea';

describe('Textarea (client)', () => {
  it('fires onChange', () => {
    const fn = vi.fn();
    render(<Textarea id="a" name="a" onChange={fn} />);
    const el = screen.getByRole('textbox');
    fireEvent.change(el, { target: { value: 'X' } });
    expect(fn).toHaveBeenCalled();
  });

  it('supports resize variant class', () => {
    render(<Textarea id="r" name="r" resize="none" />);
    expect(screen.getByRole('textbox').className).toContain('nhsuk-textarea--resize-none');
  });
});
