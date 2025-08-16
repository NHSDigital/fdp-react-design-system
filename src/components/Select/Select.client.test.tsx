import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from './Select';

describe('Select (client)', () => {
  const opts = [
    { value: '', text: 'Choose' },
    { value: 'eng', text: 'England' },
    { value: 'sco', text: 'Scotland', disabled: true },
  ];

  it('handles controlled value & change', () => {
    const onChange = vi.fn();
    render(<Select id="c" name="c" value="eng" onChange={onChange} options={opts} />);
    const sel = screen.getByRole('combobox');
    expect(sel).toHaveValue('eng');
    fireEvent.change(sel, { target: { value: '' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('applies required + describedBy + custom class', () => {
    render(<Select id="c2" name="c2" required describedBy="d" className="extra" options={opts} />);
    const sel = screen.getByRole('combobox');
    expect(sel).toHaveAttribute('required');
    expect(sel).toHaveAttribute('aria-describedby', 'd');
    expect(sel).toHaveClass('extra');
  });

  it('renders disabled option & disabled select', () => {
    render(<Select id="c3" name="c3" disabled options={opts} />);
    const sel = screen.getByRole('combobox');
    expect(sel).toBeDisabled();
    expect(screen.getByRole('option', { name: 'Scotland' })).toBeDisabled();
  });

  it('multiple select changes role to listbox', () => {
    render(<Select id="m" name="m" multiple size={4} options={opts} />);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });
});
