import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Input Range (Slider)', () => {
  it('renders range input with basic props', () => {
    render(
      <Input
        id="test-range"
        name="test-range"
        type="range"
        min="0"
        max="100"
        defaultValue="50"
      />
    );

    const input = screen.getByRole('slider');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'range');
    expect(input).toHaveAttribute('min', '0');
    expect(input).toHaveAttribute('max', '100');
    expect(input).toHaveValue('50');
  });

  it('renders range input with value labels', () => {
    render(
      <Input
        id="test-range-labels"
        name="test-range-labels"
        type="range"
        min="1"
        max="10"
        defaultValue="5"
        showValueLabels
        valueLabels={{
          min: 'Low',
          max: 'High'
        }}
      />
    );

    expect(screen.getByText('Low')).toBeInTheDocument();
    expect(screen.getByText('High')).toBeInTheDocument();
  });

  it('renders range input with current value display', () => {
    render(
      <Input
        id="test-range-current"
        name="test-range-current"
        type="range"
        min="0"
        max="100"
        defaultValue="75"
        showCurrentValue
        valueLabels={{
          current: 'Current:'
        }}
      />
    );

    expect(screen.getByText(/Current:/)).toBeInTheDocument();
    expect(screen.getByText('75')).toBeInTheDocument();
  });

  it('updates current value when slider changes', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    
    render(
      <Input
        id="test-range-change"
        name="test-range-change"
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        showCurrentValue
        onChange={onChange}
      />
    );

    const slider = screen.getByRole('slider');
    await user.type(slider, '75');
    
    expect(onChange).toHaveBeenCalled();
  });

  it('applies error styles when hasError is true', () => {
    render(
      <Input
        id="test-range-error"
        name="test-range-error"
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        hasError
      />
    );

    const slider = screen.getByRole('slider');
    expect(slider).toHaveClass('nhsuk-input--error');
  });

  it('applies disabled state correctly', () => {
    render(
      <Input
        id="test-range-disabled"
        name="test-range-disabled"
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        disabled
      />
    );

    const slider = screen.getByRole('slider');
    expect(slider).toBeDisabled();
  });

  it('renders regular text input when type is not range', () => {
    render(
      <Input
        id="test-text"
        name="test-text"
        type="text"
        placeholder="Text input"
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('placeholder', 'Text input');
  });
});
