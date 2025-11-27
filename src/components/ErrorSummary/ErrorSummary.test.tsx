import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { ErrorSummary } from './ErrorSummary';

describe('ErrorSummary', () => {
  const mockErrorList = [
    { text: 'Enter your full name', href: '#name' },
    { text: 'Enter a valid email address', href: '#email' },
    { text: 'Select your date of birth', href: '#dob' }
  ];

  it('renders successfully with error list', () => {
    render(<ErrorSummary errorList={mockErrorList} />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Enter your full name')).toBeInTheDocument();
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument();
    expect(screen.getByText('Select your date of birth')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<ErrorSummary errorList={mockErrorList} className="custom-class" />);
    const errorSummary = screen.getByRole('alert');
    expect(errorSummary).toHaveClass('custom-class');
    expect(errorSummary).toHaveClass('nhsuk-error-summary');
  });

  it('renders with custom title text', () => {
    render(
      <ErrorSummary 
        errorList={mockErrorList} 
        titleText="There are problems with your form"
      />
    );
    expect(screen.getByText('There are problems with your form')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('There are problems with your form');
  });

  it('renders with custom title HTML', () => {
    render(
      <ErrorSummary 
        errorList={mockErrorList} 
        titleHtml="<strong>Problems</strong> found"
      />
    );
    expect(screen.getByText('Problems')).toBeInTheDocument();
    expect(screen.getByText('found')).toBeInTheDocument();
  });

  it('renders with description text', () => {
    render(
      <ErrorSummary 
        errorList={mockErrorList} 
        descriptionText="Please fix the following errors before continuing"
      />
    );
    expect(screen.getByText('Please fix the following errors before continuing')).toBeInTheDocument();
  });

  it('renders with description HTML', () => {
    render(
      <ErrorSummary 
        errorList={mockErrorList} 
        descriptionHtml="Please fix the <em>following errors</em> before continuing"
      />
    );
    expect(screen.getByText('following errors')).toBeInTheDocument();
  });

  it('renders error items with links when href is provided', () => {
    render(<ErrorSummary errorList={mockErrorList} />);
    
    const nameLink = screen.getByRole('link', { name: 'Enter your full name' });
    const emailLink = screen.getByRole('link', { name: 'Enter a valid email address' });
    const dobLink = screen.getByRole('link', { name: 'Select your date of birth' });
    
    expect(nameLink).toHaveAttribute('href', '#name');
    expect(emailLink).toHaveAttribute('href', '#email');
    expect(dobLink).toHaveAttribute('href', '#dob');
  });

  it('renders error items without links when href is not provided', () => {
    const errorListWithoutHref = [
      { text: 'Enter your full name' },
      { text: 'Enter a valid email address' }
    ];
    
    render(<ErrorSummary errorList={errorListWithoutHref} />);
    
    expect(screen.getByText('Enter your full name')).toBeInTheDocument();
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument();
    
    // Should not be links
    expect(screen.queryByRole('link', { name: 'Enter your full name' })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Enter a valid email address' })).not.toBeInTheDocument();
  });

  it('renders error items with HTML content', () => {
    const errorListWithHtml = [
      { html: 'Enter your <strong>full name</strong>', href: '#name' },
      { html: 'Select a <em>valid</em> date', href: '#date' }
    ];
    
    render(<ErrorSummary errorList={errorListWithHtml} />);
    
    expect(screen.getByText('full name')).toBeInTheDocument();
    expect(screen.getByText('valid')).toBeInTheDocument();
  });

  it('handles click events on error links', () => {
    render(<ErrorSummary errorList={mockErrorList} />);
    
    const nameLink = screen.getByRole('link', { name: 'Enter your full name' });
    
    // Mock preventDefault to test click handling
    const clickEvent = { preventDefault: vi.fn() };
    fireEvent.click(nameLink, clickEvent);
    
    // Link should be clickable
    expect(nameLink).toHaveAttribute('href', '#name');
  });

  it('renders children content', () => {
    render(
      <ErrorSummary errorList={mockErrorList}>
        <div>Additional help text</div>
      </ErrorSummary>
    );
    
    expect(screen.getByText('Additional help text')).toBeInTheDocument();
  });

  it('passes through additional HTML attributes', () => {
    render(
      <ErrorSummary 
        errorList={mockErrorList} 
        data-testid="error-summary" 
        id="form-errors"
      />
    );
    
    const errorSummary = screen.getByTestId('error-summary');
    expect(errorSummary).toHaveAttribute('id', 'form-errors');
  });

  it('renders with default title when none provided', () => {
    render(<ErrorSummary errorList={mockErrorList} />);
    expect(screen.getByText('There is a problem')).toBeInTheDocument();
  });

  it('focuses the error summary when rendered', () => {
    render(<ErrorSummary errorList={mockErrorList} />);
    const errorSummary = screen.getByRole('alert');
    expect(errorSummary).toHaveAttribute('tabindex', '-1');
  });

  it('renders empty list gracefully', () => {
    render(<ErrorSummary errorList={[]} />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('There is a problem')).toBeInTheDocument();
  });
});
