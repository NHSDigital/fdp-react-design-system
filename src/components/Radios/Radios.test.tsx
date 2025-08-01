import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Radios } from './Radios';
import { Input } from '../Input';

describe('Radios', () => {
  const basicOptions = [
    { value: 'email', text: 'Email' },
    { value: 'phone', text: 'Phone' },
    { value: 'post', text: 'Post' },
  ];

  const optionsWithHints = [
    { value: 'email', text: 'Email', hint: 'We will send you updates via email' },
    { value: 'phone', text: 'Phone', hint: 'We will call you with updates' },
    { value: 'post', text: 'Post', hint: 'We will send letters to your home address' },
  ];

  const optionsWithConditionalText = [
    { 
      value: 'face-to-face', 
      text: 'Face to face appointment',
      conditional: 'Please arrive 10 minutes early for your appointment.'
    },
    { 
      value: 'phone', 
      text: 'Phone appointment',
      conditional: 'We will call you at your preferred time.'
    },
  ];

  const optionsWithConditionalInput = [
    { 
      value: 'email', 
      text: 'Email',
      conditional: (
        <div>
          <Input
            id="email-address"
            name="email-address"
            type="email"
            placeholder="Enter your email address"
          />
        </div>
      )
    },
    { 
      value: 'phone', 
      text: 'Phone',
      conditional: (
        <div>
          <Input
            id="phone-number"
            name="phone-number"
            type="tel"
            placeholder="Enter your phone number"
          />
        </div>
      )
    },
  ];

  it('renders basic radio group correctly', () => {
    render(<Radios name="contact-method" options={basicOptions} />);
    
    const radioContainer = document.querySelector('.nhsuk-radios');
    expect(radioContainer).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Email' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Phone' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Post' })).toBeInTheDocument();
  });

  it('applies correct name attribute to all radio inputs', () => {
    render(<Radios name="contact-method" options={basicOptions} />);
    
    const radios = screen.getAllByRole('radio');
    radios.forEach(radio => {
      expect(radio).toHaveAttribute('name', 'contact-method');
    });
  });

  it('renders with preselected value', () => {
    render(<Radios name="contact-method" options={basicOptions} value="email" />);
    
    expect(screen.getByRole('radio', { name: 'Email' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'Phone' })).not.toBeChecked();
    expect(screen.getByRole('radio', { name: 'Post' })).not.toBeChecked();
  });

  it('handles selection changes correctly', () => {
    const handleChange = vi.fn();
    render(<Radios name="contact-method" options={basicOptions} onChange={handleChange} />);
    
    const phoneRadio = screen.getByRole('radio', { name: 'Phone' });
    fireEvent.click(phoneRadio);
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({
        value: 'phone'
      })
    }));
  });

  it('calls onFocus and onBlur handlers', () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();
    render(
      <Radios 
        name="contact-method" 
        options={basicOptions} 
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );
    
    const emailRadio = screen.getByRole('radio', { name: 'Email' });
    fireEvent.focus(emailRadio);
    expect(handleFocus).toHaveBeenCalledTimes(1);
    
    fireEvent.blur(emailRadio);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('renders hint text for options', () => {
    render(<Radios name="contact-method" options={optionsWithHints} />);
    
    expect(screen.getByText('We will send you updates via email')).toBeInTheDocument();
    expect(screen.getByText('We will call you with updates')).toBeInTheDocument();
    expect(screen.getByText('We will send letters to your home address')).toBeInTheDocument();
  });

  it('handles disabled options correctly', () => {
    const optionsWithDisabled = [
      { value: 'email', text: 'Email' },
      { value: 'phone', text: 'Phone', disabled: true },
      { value: 'post', text: 'Post' },
    ];
    
    render(<Radios name="contact-method" options={optionsWithDisabled} />);
    
    expect(screen.getByRole('radio', { name: 'Email' })).not.toBeDisabled();
    expect(screen.getByRole('radio', { name: 'Phone' })).toBeDisabled();
    expect(screen.getByRole('radio', { name: 'Post' })).not.toBeDisabled();
  });

  describe('Size variants', () => {
    it('applies small size class', () => {
      render(<Radios name="contact-method" options={basicOptions} size="small" />);
      
      const radioContainer = document.querySelector('.nhsuk-radios');
      expect(radioContainer).toHaveClass('nhsuk-radios--small');
    });

    it('applies default size when no size specified', () => {
      render(<Radios name="contact-method" options={basicOptions} />);
      
      const radioContainer = document.querySelector('.nhsuk-radios');
      expect(radioContainer).not.toHaveClass('nhsuk-radios--small');
    });
  });

  describe('Inline layout', () => {
    it('applies inline class when inline prop is true', () => {
      render(<Radios name="contact-method" options={basicOptions} inline />);
      
      const radioContainer = document.querySelector('.nhsuk-radios');
      expect(radioContainer).toHaveClass('nhsuk-radios--inline');
    });

    it('does not apply inline class by default', () => {
      render(<Radios name="contact-method" options={basicOptions} />);
      
      const radioContainer = document.querySelector('.nhsuk-radios');
      expect(radioContainer).not.toHaveClass('nhsuk-radios--inline');
    });
  });

  describe('Error state', () => {
    it('applies error class when hasError is true', () => {
      render(<Radios name="contact-method" options={basicOptions} hasError />);
      
      const radioContainer = document.querySelector('.nhsuk-radios');
      expect(radioContainer).toHaveClass('nhsuk-radios--error');
    });

    it('does not apply error class by default', () => {
      render(<Radios name="contact-method" options={basicOptions} />);
      
      const radioContainer = document.querySelector('.nhsuk-radios');
      expect(radioContainer).not.toHaveClass('nhsuk-radios--error');
    });
  });

  describe('Conditional content', () => {
    it('shows conditional text content when option is selected', () => {
      render(<Radios name="appointment-type" options={optionsWithConditionalText} value="face-to-face" />);
      
      expect(screen.getByText('Please arrive 10 minutes early for your appointment.')).toBeInTheDocument();
    });

    it('hides conditional content when option is not selected', () => {
      render(<Radios name="appointment-type" options={optionsWithConditionalText} value="phone" />);
      
      const hiddenConditional = document.querySelector('.nhsuk-radios__conditional--hidden');
      expect(hiddenConditional).toBeInTheDocument();
      expect(hiddenConditional).toHaveTextContent('Please arrive 10 minutes early for your appointment.');
      expect(screen.getByText('We will call you at your preferred time.')).toBeInTheDocument();
    });

    it('shows conditional input content when option is selected', () => {
      render(<Radios name="contact-preference" options={optionsWithConditionalInput} value="email" />);
      
      expect(screen.getByPlaceholderText('Enter your email address')).toBeInTheDocument();
      const phoneInput = document.querySelector('input[placeholder="Enter your phone number"]');
      expect(phoneInput).toBeInTheDocument();
      expect(phoneInput?.closest('.nhsuk-radios__conditional')).toHaveClass('nhsuk-radios__conditional--hidden');
    });

    it('dynamically shows conditional content on selection change', () => {
      render(<Radios name="contact-preference" options={optionsWithConditionalInput} />);
      
      // Initially all conditional content should be hidden
      const emailInput = document.querySelector('input[placeholder="Enter your email address"]');
      const phoneInput = document.querySelector('input[placeholder="Enter your phone number"]');
      expect(emailInput?.closest('.nhsuk-radios__conditional')).toHaveClass('nhsuk-radios__conditional--hidden');
      expect(phoneInput?.closest('.nhsuk-radios__conditional')).toHaveClass('nhsuk-radios__conditional--hidden');
      
      // Select email option
      fireEvent.click(screen.getByRole('radio', { name: 'Email' }));
      expect(emailInput?.closest('.nhsuk-radios__conditional')).not.toHaveClass('nhsuk-radios__conditional--hidden');
      expect(phoneInput?.closest('.nhsuk-radios__conditional')).toHaveClass('nhsuk-radios__conditional--hidden');
      
      // Switch to phone option
      fireEvent.click(screen.getByRole('radio', { name: 'Phone' }));
      expect(emailInput?.closest('.nhsuk-radios__conditional')).toHaveClass('nhsuk-radios__conditional--hidden');
      expect(phoneInput?.closest('.nhsuk-radios__conditional')).not.toHaveClass('nhsuk-radios__conditional--hidden');
    });
  });

  describe('Accessibility', () => {
    it('has proper radio button structure', () => {
      render(<Radios name="contact-method" options={basicOptions} />);
      
      const radioContainer = document.querySelector('.nhsuk-radios');
      expect(radioContainer).toBeInTheDocument();
      
      const radios = screen.getAllByRole('radio');
      radios.forEach((radio, index) => {
        expect(radio).toHaveAttribute('type', 'radio');
        expect(radio).toHaveAttribute('value', basicOptions[index].value);
      });
    });

    it('applies describedBy attribute to radio inputs when provided', () => {
      render(<Radios name="contact-method" options={basicOptions} describedBy="error-message" />);
      
      const radios = screen.getAllByRole('radio');
      radios.forEach(radio => {
        expect(radio).toHaveAttribute('aria-describedby', 'error-message');
      });
    });

    it('associates labels with radio inputs correctly', () => {
      render(<Radios name="contact-method" options={basicOptions} />);
      
      const emailRadio = screen.getByRole('radio', { name: 'Email' });
      const phoneRadio = screen.getByRole('radio', { name: 'Phone' });
      const postRadio = screen.getByRole('radio', { name: 'Post' });
      
      expect(emailRadio).toHaveAccessibleName('Email');
      expect(phoneRadio).toHaveAccessibleName('Phone');
      expect(postRadio).toHaveAccessibleName('Post');
    });
  });

  describe('Custom styling', () => {
    it('applies custom className', () => {
      render(<Radios name="contact-method" options={basicOptions} className="custom-radios" />);
      
      const radioContainer = document.querySelector('.nhsuk-radios');
      expect(radioContainer).toHaveClass('custom-radios');
    });

    it('combines custom className with NHS classes', () => {
      render(<Radios name="contact-method" options={basicOptions} className="custom-radios" hasError />);
      
      const radioContainer = document.querySelector('.nhsuk-radios');
      expect(radioContainer).toHaveClass('custom-radios');
      expect(radioContainer).toHaveClass('nhsuk-radios');
      expect(radioContainer).toHaveClass('nhsuk-radios--error');
    });
  });

  describe('Keyboard navigation', () => {
    it('focuses radio buttons correctly', () => {
      render(<Radios name="contact-method" options={basicOptions} />);
      
      const emailRadio = screen.getByRole('radio', { name: 'Email' });
      const phoneRadio = screen.getByRole('radio', { name: 'Phone' });
      
      emailRadio.focus();
      expect(emailRadio).toHaveFocus();
      
      phoneRadio.focus();
      expect(phoneRadio).toHaveFocus();
    });

    it('selects radio button with click', () => {
      const handleChange = vi.fn();
      render(<Radios name="contact-method" options={basicOptions} onChange={handleChange} />);
      
      const emailRadio = screen.getByRole('radio', { name: 'Email' });
      fireEvent.click(emailRadio);
      
      expect(emailRadio).toBeChecked();
    });
  });

  describe('Uncontrolled component', () => {
    it('works as uncontrolled component with defaultValue', () => {
      render(<Radios name="contact-method" options={basicOptions} defaultValue="phone" />);
      
      expect(screen.getByRole('radio', { name: 'Phone' })).toBeChecked();
      expect(screen.getByRole('radio', { name: 'Email' })).not.toBeChecked();
      expect(screen.getByRole('radio', { name: 'Post' })).not.toBeChecked();
    });

    it('allows changing selection in uncontrolled mode', () => {
      render(<Radios name="contact-method" options={basicOptions} defaultValue="phone" />);
      
      expect(screen.getByRole('radio', { name: 'Phone' })).toBeChecked();
      
      fireEvent.click(screen.getByRole('radio', { name: 'Email' }));
      expect(screen.getByRole('radio', { name: 'Email' })).toBeChecked();
      expect(screen.getByRole('radio', { name: 'Phone' })).not.toBeChecked();
    });
  });

  describe('Edge cases', () => {
    it('handles empty options array', () => {
      render(<Radios name="contact-method" options={[]} />);
      
      const radioContainer = document.querySelector('.nhsuk-radios');
      expect(radioContainer).toBeInTheDocument();
      expect(screen.queryAllByRole('radio')).toHaveLength(0);
    });

    it('handles ReactNode text content', () => {
      const optionsWithJSX = [
        { value: 'email', text: <span>Email <em>(recommended)</em></span> },
        { value: 'phone', text: <span>Phone</span> },
      ];
      
      render(<Radios name="contact-method" options={optionsWithJSX} />);
      
      expect(screen.getByText('(recommended)')).toBeInTheDocument();
      expect(screen.getByRole('radio', { name: /Email/ })).toBeInTheDocument();
    });

    it('handles long option text gracefully', () => {
      const longTextOptions = [
        { 
          value: 'long', 
          text: 'This is a very long option text that might wrap to multiple lines and should still be accessible and properly formatted according to NHS design standards' 
        },
      ];
      
      render(<Radios name="contact-method" options={longTextOptions} />);
      
      expect(screen.getByRole('radio')).toBeInTheDocument();
      expect(screen.getByText(/This is a very long option text/)).toBeInTheDocument();
    });
  });
});
