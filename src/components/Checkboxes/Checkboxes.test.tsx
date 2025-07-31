import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkboxes } from './Checkboxes';
import type { CheckboxItem } from './Checkboxes.types';

// Mock design tokens CSS import
vi.mock('../../styles/design-tokens.css', () => ({}));

const mockItems: CheckboxItem[] = [
  { value: 'option1', text: 'Option 1' },
  { value: 'option2', text: 'Option 2' },
  { value: 'option3', text: 'Option 3' },
];

describe('Checkboxes Component', () => {
  describe('Rendering', () => {
    it('should render basic checkboxes', () => {
      render(
        <Checkboxes
          name="test"
          items={mockItems}
        />
      );

      expect(screen.getByRole('checkbox', { name: 'Option 1' })).toBeInTheDocument();
      expect(screen.getByRole('checkbox', { name: 'Option 2' })).toBeInTheDocument();
      expect(screen.getByRole('checkbox', { name: 'Option 3' })).toBeInTheDocument();
    });

    it('should render with legend', () => {
      render(
        <Checkboxes
          name="test"
          legend="Test Legend"
          items={mockItems}
        />
      );

      expect(screen.getByRole('group', { name: 'Test Legend' })).toBeInTheDocument();
      expect(screen.getByText('Test Legend')).toBeInTheDocument();
    });

    it('should render legend as page heading when specified', () => {
      render(
        <Checkboxes
          name="test"
          legend="Page Heading"
          isPageHeading={true}
          items={mockItems}
        />
      );

      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveTextContent('Page Heading');
    });

    it('should render hint text', () => {
      render(
        <Checkboxes
          name="test"
          legend="Test Legend"
          hint="This is a hint"
          items={mockItems}
        />
      );

      expect(screen.getByText('This is a hint')).toBeInTheDocument();
    });

    it('should render error message', () => {
      render(
        <Checkboxes
          name="test"
          legend="Test Legend"
          errorMessage="This is an error"
          items={mockItems}
        />
      );

      expect(screen.getByText(/This is an error/)).toBeInTheDocument();
      expect(screen.getByText('Error:')).toBeInTheDocument();
    });

    it('should render item hints', () => {
      const itemsWithHints: CheckboxItem[] = [
        { value: 'option1', text: 'Option 1', hint: 'Hint for option 1' },
        { value: 'option2', text: 'Option 2' },
      ];

      render(
        <Checkboxes
          name="test"
          items={itemsWithHints}
        />
      );

      expect(screen.getByText('Hint for option 1')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      render(
        <Checkboxes
          name="test"
          legend="Test Legend"
          hint="Test hint"
          errorMessage="Test error"
          items={mockItems}
        />
      );

      const fieldset = screen.getByRole('group');
      expect(fieldset).toHaveAttribute('aria-describedby');
      
      const describedBy = fieldset.getAttribute('aria-describedby');
      expect(describedBy).toContain('test-hint');
      expect(describedBy).toContain('test-error');
    });

    it('should have correct ARIA attributes for conditional checkboxes', () => {
      const itemsWithConditional: CheckboxItem[] = [
        {
          value: 'option1',
          text: 'Option 1',
          conditional: <div data-testid="conditional-content">Conditional content</div>
        },
      ];

      render(
        <Checkboxes
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

    it('should associate labels with inputs correctly', () => {
      render(
        <Checkboxes
          name="test"
          items={mockItems}
        />
      );

      mockItems.forEach((item, index) => {
        const checkbox = screen.getByRole('checkbox', { name: item.text });
        const expectedId = `test-${index + 1}`;
        expect(checkbox).toHaveAttribute('id', expectedId);
        
        const label = screen.getByLabelText(item.text);
        expect(label).toBe(checkbox);
      });
    });

    it('should be keyboard accessible', async () => {
      const user = userEvent.setup();
      render(
        <Checkboxes
          name="test"
          items={mockItems}
        />
      );

      const firstCheckbox = screen.getByRole('checkbox', { name: 'Option 1' });
      
      await user.tab();
      expect(firstCheckbox).toHaveFocus();
      
      await user.keyboard(' ');
      expect(firstCheckbox).toBeChecked();
    });
  });

  describe('States', () => {
    it('should render pre-checked items', () => {
      const checkedItems: CheckboxItem[] = [
        { value: 'option1', text: 'Option 1', checked: true },
        { value: 'option2', text: 'Option 2', checked: false },
      ];

      render(
        <Checkboxes
          name="test"
          items={checkedItems}
        />
      );

      expect(screen.getByRole('checkbox', { name: 'Option 1' })).toBeChecked();
      expect(screen.getByRole('checkbox', { name: 'Option 2' })).not.toBeChecked();
    });

    it('should render disabled items', () => {
      const disabledItems: CheckboxItem[] = [
        { value: 'option1', text: 'Option 1' },
        { value: 'option2', text: 'Option 2', disabled: true },
      ];

      render(
        <Checkboxes
          name="test"
          items={disabledItems}
        />
      );

      expect(screen.getByRole('checkbox', { name: 'Option 1' })).not.toBeDisabled();
      expect(screen.getByRole('checkbox', { name: 'Option 2' })).toBeDisabled();
    });

    it('should apply small variant classes', () => {
      render(
        <Checkboxes
          name="test"
          items={mockItems}
          small={true}
        />
      );

      expect(document.querySelector('.nhsuk-checkboxes--small')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('should handle checkbox changes', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      render(
        <Checkboxes
          name="test"
          items={mockItems}
          onChange={handleChange}
        />
      );

      const checkbox1 = screen.getByRole('checkbox', { name: 'Option 1' });
      const checkbox2 = screen.getByRole('checkbox', { name: 'Option 2' });

      await user.click(checkbox1);
      expect(handleChange).toHaveBeenCalledWith(['option1']);

      await user.click(checkbox2);
      expect(handleChange).toHaveBeenCalledWith(['option1', 'option2']);

      await user.click(checkbox1);
      expect(handleChange).toHaveBeenCalledWith(['option2']);
    });

    it('should handle form submission with selected values', () => {
      render(
        <form data-testid="test-form">
          <Checkboxes
            name="test"
            items={mockItems}
          />
        </form>
      );

      const checkbox1 = screen.getByRole('checkbox', { name: 'Option 1' });
      const checkbox2 = screen.getByRole('checkbox', { name: 'Option 2' });

      fireEvent.click(checkbox1);
      fireEvent.click(checkbox2);

      const formData = new FormData(screen.getByTestId('test-form') as HTMLFormElement);
      const selectedValues = formData.getAll('test');
      
      expect(selectedValues).toContain('option1');
      expect(selectedValues).toContain('option2');
      expect(selectedValues).not.toContain('option3');
    });
  });

  describe('Conditional Content', () => {
    it('should render conditional content when checkbox is selected', async () => {
      const user = userEvent.setup();
      const itemsWithConditional: CheckboxItem[] = [
        {
          value: 'option1',
          text: 'Option 1',
          conditional: <div data-testid="conditional-content">Conditional content</div>
        },
      ];

      render(
        <Checkboxes
          name="test"
          items={itemsWithConditional}
        />
      );

      // Conditional content should be hidden initially
      const conditionalContainer = screen.getByTestId('conditional-content').closest('.nhsuk-checkboxes__conditional');
      expect(conditionalContainer).toHaveClass('nhsuk-checkboxes__conditional--hidden');

      // Click the checkbox
      const checkbox = screen.getByRole('checkbox', { name: 'Option 1' });
      await user.click(checkbox);

      // Conditional content should now be visible
      expect(conditionalContainer).not.toHaveClass('nhsuk-checkboxes__conditional--hidden');
    });

    it('should hide conditional content when checkbox is deselected', async () => {
      const user = userEvent.setup();
      const itemsWithConditional: CheckboxItem[] = [
        {
          value: 'option1',
          text: 'Option 1',
          checked: true,
          conditional: <div data-testid="conditional-content">Conditional content</div>
        },
      ];

      render(
        <Checkboxes
          name="test"
          items={itemsWithConditional}
        />
      );

      // Conditional content should be visible initially
      const conditionalContainer = screen.getByTestId('conditional-content').closest('.nhsuk-checkboxes__conditional');
      expect(conditionalContainer).not.toHaveClass('nhsuk-checkboxes__conditional--hidden');

      // Click the checkbox to deselect
      const checkbox = screen.getByRole('checkbox', { name: 'Option 1' });
      await user.click(checkbox);

      // Conditional content should now be hidden
      expect(conditionalContainer).toHaveClass('nhsuk-checkboxes__conditional--hidden');
    });
  });

  describe('CSS Classes', () => {
    it('should apply correct CSS classes', () => {
      render(
        <Checkboxes
          name="test"
          legend="Test Legend"
          className="custom-class"
          items={mockItems}
        />
      );

      expect(document.querySelector('.nhsuk-checkboxes')).toBeInTheDocument();
      expect(document.querySelector('.nhsuk-fieldset')).toBeInTheDocument();
      expect(document.querySelector('.custom-class')).toBeInTheDocument();
    });

    it('should apply conditional classes when items have conditional content', () => {
      const itemsWithConditional: CheckboxItem[] = [
        {
          value: 'option1',
          text: 'Option 1',
          conditional: <div>Conditional</div>
        },
      ];

      render(
        <Checkboxes
          name="test"
          items={itemsWithConditional}
        />
      );

      expect(document.querySelector('.nhsuk-checkboxes__conditional')).toBeInTheDocument();
    });
  });

  describe('Legend Sizes', () => {
    it.each([
      ['xl', 'nhsuk-fieldset__legend--xl'],
      ['l', 'nhsuk-fieldset__legend--l'],
      ['m', 'nhsuk-fieldset__legend--m'],
      ['s', 'nhsuk-fieldset__legend--s'],
    ])('should apply correct class for legend size %s', (size, expectedClass) => {
      render(
        <Checkboxes
          name="test"
          legend="Test Legend"
          legendSize={size as 'xl' | 'l' | 'm' | 's'}
          items={mockItems}
        />
      );

      expect(document.querySelector(`.${expectedClass}`)).toBeInTheDocument();
    });
  });

  describe('Custom Attributes', () => {
    it('should pass custom attributes to fieldset', () => {
      render(
        <Checkboxes
          name="test"
          legend="Test Legend"
          items={mockItems}
          fieldsetAttributes={{
            'data-testid': 'custom-fieldset',
            'aria-label': 'Custom fieldset label'
          } as React.FieldsetHTMLAttributes<HTMLFieldSetElement>}
        />
      );

      const fieldset = screen.getByTestId('custom-fieldset');
      expect(fieldset).toHaveAttribute('aria-label', 'Custom fieldset label');
    });

    it('should pass custom attributes to individual checkboxes', () => {
      const itemsWithAttributes: CheckboxItem[] = [
        {
          value: 'option1',
          text: 'Option 1',
          attributes: {
            'data-testid': 'custom-checkbox',
            'aria-describedby': 'custom-description'
          } as React.InputHTMLAttributes<HTMLInputElement>
        },
      ];

      render(
        <Checkboxes
          name="test"
          items={itemsWithAttributes}
        />
      );

      const checkbox = screen.getByTestId('custom-checkbox');
      expect(checkbox).toHaveAttribute('aria-describedby', 'custom-description');
    });
  });
});
