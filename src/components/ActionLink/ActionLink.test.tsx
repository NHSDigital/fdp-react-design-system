import { render, screen } from '@testing-library/react';
import { ActionLink } from './ActionLink';

describe('ActionLink', () => {
  it('renders with required props', () => {
    render(<ActionLink text="Test Action" href="/test" />);
    expect(screen.getByText('Test Action')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
  });

  it('opens in new window when specified', () => {
    render(
      <ActionLink 
        text="External Link" 
        href="https://example.com" 
        openInNewWindow={true}
      />
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not open in new window by default', () => {
    render(<ActionLink text="Internal Link" href="/internal" />);
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it('applies custom className to link', () => {
    render(
      <ActionLink 
        text="Custom Link" 
        href="/custom" 
        className="custom-class"
      />
    );
    const link = screen.getByRole('link');
    expect(link).toHaveClass('nhsuk-action-link__link', 'custom-class');
  });

  it('includes arrow icon', () => {
    render(<ActionLink text="Test" href="/test" />);
    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toHaveClass('nhsuk-icon__arrow-right-circle');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('wraps text in span with correct class', () => {
    render(<ActionLink text="Test Text" href="/test" />);
    const textSpan = screen.getByText('Test Text');
    expect(textSpan.tagName).toBe('SPAN');
    expect(textSpan).toHaveClass('nhsuk-action-link__text');
  });

  it('passes additional props to link element', () => {
    render(
      <ActionLink 
        text="Test" 
        href="/test" 
        data-testid="action-link"
        id="test-action"
      />
    );
    const link = screen.getByTestId('action-link');
    expect(link).toHaveAttribute('id', 'test-action');
  });

  it('renders within action link container', () => {
    render(<ActionLink text="Test" href="/test" />);
    const container = screen.getByText('Test').closest('.nhsuk-action-link');
    expect(container).toBeInTheDocument();
  });
});
