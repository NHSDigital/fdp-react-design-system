import { render, screen, fireEvent } from '@testing-library/react';
import { BackLink } from './BackLink';
import { vi } from 'vitest';

describe('BackLink', () => {
  it('renders with default text', () => {
    render(<BackLink />);
    expect(screen.getByText('Back')).toBeInTheDocument();
  });

  it('renders custom text', () => {
    render(<BackLink text="Back to previous page" />);
    expect(screen.getByText('Back to previous page')).toBeInTheDocument();
  });

  it('renders HTML content', () => {
    render(<BackLink html="Back to <strong>search results</strong>" />);
    expect(screen.getByText('search results')).toBeInTheDocument();
  });

  it('renders as anchor by default', () => {
    render(<BackLink href="/test" />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('renders as button when specified', () => {
    const handleClick = vi.fn();
    render(<BackLink element="button" onClick={handleClick} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<BackLink className="custom-class" />);
    const container = screen.getByText('Back').closest('.nhsuk-back-link');
    expect(container).toHaveClass('custom-class');
  });

  it('includes chevron icon', () => {
    render(<BackLink />);
    const icon = document.querySelector('.nhsuk-icon__chevron-left');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('nhsuk-icon__chevron-left');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('passes additional props to the link element', () => {
    render(<BackLink data-testid="back-link" />);
    expect(screen.getByTestId('back-link')).toBeInTheDocument();
  });
});
