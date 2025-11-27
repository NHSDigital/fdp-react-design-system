import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tag } from './Tag';

describe('Tag (client)', () => {
  it('prioritises children over html/text', () => {
    render(<Tag text="Text" html="<em>H</em>"><span>Child</span></Tag>);
    expect(screen.getByText('Child')).toBeInTheDocument();
    expect(screen.queryByText('Text')).not.toBeInTheDocument();
  });

  it('applies modifiers (noBorder, closable, disabled)', () => {
    render(<Tag text="X" noBorder closable disabled />);
    const el = screen.getByText('X');
    expect(el.className).toContain('nhsuk-tag--no-border');
    expect(el.className).toContain('nhsuk-tag--closable');
    expect(el.className).toContain('nhsuk-tag--disabled');
  });

  it('fires onClose when close button clicked (not disabled)', () => {
    const fn = vi.fn();
    render(<Tag text="Close" closable onClose={fn} />);
    fireEvent.click(screen.getByRole('button', { name: 'Remove' }));
    expect(fn).toHaveBeenCalled();
  });

  it('does not fire onClose when disabled', () => {
    const fn = vi.fn();
    render(<Tag text="Close" closable disabled onClose={fn} />);
    fireEvent.click(screen.getByRole('button', { name: 'Remove' }));
    expect(fn).not.toHaveBeenCalled();
  });
});
