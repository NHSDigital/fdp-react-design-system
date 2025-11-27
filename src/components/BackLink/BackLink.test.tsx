import { renderSSR as render } from '../../test-utils/renderSSR';
import { BackLink } from './BackLink';
import { describe, it, expect, vi } from 'vitest';

describe('BackLink', () => {
  it('renders with default text', () => {
    const { getByText } = render(<BackLink />);
    expect(getByText('Back')).toBeTruthy();
  });

  it('renders custom text', () => {
    const { getByText } = render(<BackLink text="Back to previous page" />);
    expect(getByText('Back to previous page')).toBeTruthy();
  });

  it('renders HTML content', () => {
    const { getByText } = render(<BackLink html="Back to <strong>search results</strong>" />);
    expect(getByText('search results')).toBeTruthy();
  });

  it('renders as anchor by default', () => {
    const { getByRole } = render(<BackLink href="/test" />);
    const link = getByRole('link');
    expect(link).toBeTruthy();
    expect(link!.getAttribute('href')).toBe('/test');
  });

  it('renders as button when specified', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(<BackLink element="button" onClick={handleClick} />);
    const button = getByRole('button');
    expect(button).toBeTruthy();
    // Note: Server-side rendering doesn't support event simulation
    // Event handling should be tested in browser integration tests
  });

  it('applies custom className', () => {
    const { getByText } = render(<BackLink className="custom-class" />);
    const backElement = getByText('Back');
    const backContainer = backElement!.closest('.nhsuk-back-link');
    expect(backContainer!.className.includes('custom-class')).toBeTruthy();
  });

  it('includes chevron icon', () => {
    const { container } = render(<BackLink />);
    const icon = container.querySelector('.nhsuk-icon__chevron-left');
    expect(icon).toBeTruthy();
    expect(icon!.classList.contains('nhsuk-icon__chevron-left')).toBeTruthy();
    expect(icon!.getAttribute('aria-hidden')).toBe('true');
  });

  it('passes additional props to the link element', () => {
    const { container } = render(<BackLink data-testid="back-link" />);
    const element = container.querySelector('[data-testid="back-link"]');
    expect(element).toBeTruthy();
  });
});
