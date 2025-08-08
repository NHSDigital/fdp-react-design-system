import { render } from '../../test-utils/ServerRenderer';
import { describe, it, expect } from 'vitest';
import { Fieldset } from './Fieldset';

describe('Fieldset', () => {
  it('renders successfully with children', () => {
    const { getByRole, getByText } = render(
      <Fieldset>
        <div>Test content</div>
      </Fieldset>
    );
    expect(getByRole('group')).toBeTruthy();
    expect(getByText('Test content')).toBeTruthy();
  });

  it('applies custom className', () => {
    const { getByRole } = render(
      <Fieldset className="custom-class">
        <div>Test content</div>
      </Fieldset>
    );
    const fieldset = getByRole('group');
    expect(fieldset!.className.includes('custom-class')).toBeTruthy();
    expect(fieldset!.className.includes('nhsuk-fieldset')).toBeTruthy();
  });

  it('renders with legend text', () => {
    const legend = { text: 'Personal details' };
    const { getByText, getByRole } = render(
      <Fieldset legend={legend}>
        <div>Test content</div>
      </Fieldset>
    );
    expect(getByText('Personal details')).toBeTruthy();
    expect(getByRole('group')).toBeTruthy();
  });

  it('renders with legend HTML', () => {
    const legend = { html: '<strong>Personal</strong> details' };
    const { getByText } = render(
      <Fieldset legend={legend}>
        <div>Test content</div>
      </Fieldset>
    );
    expect(getByText('Personal')).toBeTruthy();
    expect(getByText('details')).toBeTruthy();
  });

  it('renders with legend size modifier', () => {
    const legend = { text: 'Personal details', size: 'xl' as const };
    const { getByText } = render(
      <Fieldset legend={legend}>
        <div>Test content</div>
      </Fieldset>
    );
    const legendElement = getByText('Personal details');
    expect(legendElement!.className.includes('nhsuk-fieldset__legend--xl')).toBeTruthy();
  });

  it('renders with legend custom className', () => {
    const legend = { text: 'Personal details', className: 'custom-legend' };
    const { getByText } = render(
      <Fieldset legend={legend}>
        <div>Test content</div>
      </Fieldset>
    );
    const legendElement = getByText('Personal details');
    expect(legendElement!.className.includes('custom-legend')).toBeTruthy();
  });

  it('renders legend as page heading when specified', () => {
    const legend = { text: 'Personal details', isPageHeading: true };
    const { getByRole } = render(
      <Fieldset legend={legend}>
        <div>Test content</div>
      </Fieldset>
    );
    const heading = getByRole('heading', { level: 1 });
    expect(heading).toBeTruthy();
    expect(heading!.textContent?.includes('Personal details')).toBeTruthy();
  });

  it('renders with describedBy attribute', () => {
    const { getByRole } = render(
      <Fieldset describedBy="hint-id">
        <div>Test content</div>
      </Fieldset>
    );
    const fieldset = getByRole('group');
    expect(fieldset!.getAttribute('aria-describedby')).toBe('hint-id');
  });

  it('passes through additional HTML attributes', () => {
    const { getByTestId } = render(
      <Fieldset data-testid="custom-fieldset" id="test-fieldset">
        <div>Test content</div>
      </Fieldset>
    );
    const fieldset = getByTestId('custom-fieldset');
    expect(fieldset!.getAttribute('id')).toBe('test-fieldset');
  });

  it('renders all legend size variants correctly', () => {
    const sizes = ['xl', 'l', 'm', 's'] as const;
    
    sizes.forEach((size) => {
      const { container } = render(
        <Fieldset legend={{ text: `Legend ${size}`, size }}>
          <div>Content</div>
        </Fieldset>
      );
      
      const legendElement = container.querySelector(`.nhsuk-fieldset__legend--${size}`);
      expect(legendElement).toBeTruthy();
    });
  });
});
