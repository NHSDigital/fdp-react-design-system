import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CheckboxesCSS } from './CheckboxesCSS';
import type { CheckboxItem } from './Checkboxes.types';

const mockItems: CheckboxItem[] = [
  { value: 'option1', text: 'Option 1' },
  { value: 'option2', text: 'Option 2' },
  { value: 'option3', text: 'Option 3' },
];

describe('CheckboxesCSS Component', () => {
  it('should render basic checkboxes', () => {
    render(
      <CheckboxesCSS
        name="test"
        items={mockItems}
      />
    );

    expect(screen.getByRole('checkbox', { name: 'Option 1' })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Option 2' })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Option 3' })).toBeInTheDocument();
  });

  it('should handle checkbox changes', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <CheckboxesCSS
        name="test"
        items={mockItems}
        onChange={handleChange}
      />
    );

    const checkbox1 = screen.getByRole('checkbox', { name: 'Option 1' });
    await user.click(checkbox1);
    
    expect(handleChange).toHaveBeenCalledWith(['option1']);
  });

  it('should render with legend and hint', () => {
    render(
      <CheckboxesCSS
        name="test"
        legend="Test Legend"
        hint="This is a hint"
        items={mockItems}
      />
    );

    expect(screen.getByText('Test Legend')).toBeInTheDocument();
    expect(screen.getByText('This is a hint')).toBeInTheDocument();
  });

  it('should handle conditional content', async () => {
    const user = userEvent.setup();
    const itemsWithConditional: CheckboxItem[] = [
      {
        value: 'option1',
        text: 'Option 1',
        conditional: <div data-testid="conditional-content">Conditional content</div>
      },
    ];

    render(
      <CheckboxesCSS
        name="test"
        items={itemsWithConditional}
      />
    );

    // Conditional content should be hidden initially
    const conditionalContainer = screen.getByTestId('conditional-content').closest('.nhs-checkboxes__conditional');
    expect(conditionalContainer).toHaveClass('nhs-checkboxes__conditional--hidden');

    // Click the checkbox
    const checkbox = screen.getByRole('checkbox', { name: 'Option 1' });
    await user.click(checkbox);

    // Conditional content should now be visible
    expect(conditionalContainer).not.toHaveClass('nhs-checkboxes__conditional--hidden');
  });

  it('should apply correct ARIA attributes for conditional checkboxes', () => {
    const itemsWithConditional: CheckboxItem[] = [
      {
        value: 'option1',
        text: 'Option 1',
        conditional: <div data-testid="conditional-content">Conditional content</div>
      },
    ];

    render(
      <CheckboxesCSS
        name="test"
        items={itemsWithConditional}
      />
    );

    const checkbox = screen.getByRole('checkbox', { name: 'Option 1' });
    expect(checkbox).toHaveAttribute('aria-controls', 'test-1-conditional');
    expect(checkbox).toHaveAttribute('aria-expanded', 'false');
    
    // After checking the box, aria-expanded should be true
    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute('aria-expanded', 'true');
  });

  it('should apply small variant classes', () => {
    render(
      <CheckboxesCSS
        name="test"
        items={mockItems}
        small={true}
      />
    );

    expect(document.querySelector('.nhs-checkboxes--small')).toBeInTheDocument();
  });
});
