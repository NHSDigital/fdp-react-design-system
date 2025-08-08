import { render } from '../../test-utils/ServerRenderer';
import { describe, it, expect } from 'vitest';
import { ActionLink } from './ActionLink';

describe('ActionLink', () => {
  it('renders with required props', () => {
    const { getByText, container } = render(<ActionLink text="Test Action" href="/test" />);
    expect(getByText('Test Action')).toBeTruthy();
    const link = container.querySelector('a');
    expect(link!.getAttribute('href')).toBe('/test');
  });

  it('opens in new window when specified', () => {
    const { container } = render(
      <ActionLink 
        text="External Link" 
        href="https://example.com" 
        openInNewWindow={true}
      />
    );
    const link = container.querySelector('a');
    expect(link!.getAttribute('target')).toBe('_blank');
    expect(link!.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('does not open in new window by default', () => {
    const { container } = render(<ActionLink text="Internal Link" href="/internal" />);
    const link = container.querySelector('a');
    expect(link!.hasAttribute('target')).toBeFalsy();
    expect(link!.hasAttribute('rel')).toBeFalsy();
  });

  it('applies custom className to link', () => {
    const { container } = render(
      <ActionLink 
        text="Custom Link" 
        href="/custom" 
        className="custom-class"
      />
    );
    const link = container.querySelector('a');
    expect(link!.className.includes('nhsuk-action-link__link')).toBeTruthy();
    expect(link!.className.includes('custom-class')).toBeTruthy();
  });

  it('includes arrow icon', () => {
    const { container } = render(<ActionLink text="Test" href="/test" />);
    const icon = container.querySelector('.nhsuk-icon__arrow-right-circle');
    expect(icon).toBeTruthy();
    expect(icon!.getAttribute('class')?.includes('nhsuk-icon__arrow-right-circle')).toBeTruthy();
    expect(icon!.getAttribute('aria-hidden')).toBe('true');
  });

  it('wraps text in span with correct class', () => {
    const { getByText } = render(<ActionLink text="Test Text" href="/test" />);
    const textSpan = getByText('Test Text');
    expect(textSpan!.tagName).toBe('SPAN');
    expect(textSpan!.className.includes('nhsuk-action-link__text')).toBeTruthy();
  });

  it('passes additional props to link element', () => {
    const { getByTestId } = render(
      <ActionLink 
        text="Test" 
        href="/test" 
        data-testid="action-link"
        id="test-action"
      />
    );
    const link = getByTestId('action-link');
    expect(link!.getAttribute('id')).toBe('test-action');
  });

  it('renders within action link container', () => {
    const { getByText } = render(<ActionLink text="Test" href="/test" />);
    const textElement = getByText('Test');
    const container = textElement!.closest('.nhsuk-action-link');
    expect(container).toBeTruthy();
  });
});
