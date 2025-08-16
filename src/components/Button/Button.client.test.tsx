import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button (client)', () => {
  it('invokes onClick handler', () => {
    const fn = vi.fn();
    const { getByRole } = render(<Button onClick={fn}>Click</Button>);
    fireEvent.click(getByRole('button'));
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('does not invoke onClick when disabled', () => {
    const fn = vi.fn();
    const { getByRole } = render(<Button disabled onClick={fn}>Disabled</Button>);
    fireEvent.click(getByRole('button'));
    expect(fn).not.toHaveBeenCalled();
  });
  it('supports keyboard activation (Enter)', async () => {
    const fn = vi.fn();
    const { getByRole } = render(<Button onClick={fn}>Key</Button>);
    const btn = getByRole('button');
    await act(async () => { btn.focus(); await userEvent.keyboard('{Enter}'); });
    expect(fn).toHaveBeenCalledTimes(1);
  });
  
  it('supports Space activation for anchor variant (custom handler)', async () => {
    const fn = vi.fn();
    const { getByRole } = render(<Button href="#" onClick={fn}>Link</Button>);
    const linkButton = getByRole('button');
    await act(async () => { linkButton.focus(); await userEvent.keyboard(' '); });
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
