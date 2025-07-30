import { render, screen } from '@testing-library/react';
import { Fieldset } from './Fieldset';

describe('Fieldset', () => {
  it('renders successfully with children', () => {
    render(
      <Fieldset>
        <div>Test content</div>
      </Fieldset>
    );
    expect(screen.getByRole('group')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Fieldset className="custom-class">
        <div>Test content</div>
      </Fieldset>
    );
    const fieldset = screen.getByRole('group');
    expect(fieldset).toHaveClass('custom-class');
    expect(fieldset).toHaveClass('nhsuk-fieldset');
  });

  it('renders with legend text', () => {
    const legend = { text: 'Personal details' };
    render(
      <Fieldset legend={legend}>
        <div>Test content</div>
      </Fieldset>
    );
    expect(screen.getByText('Personal details')).toBeInTheDocument();
    expect(screen.getByRole('group')).toHaveAccessibleName('Personal details');
  });

  it('renders with legend HTML', () => {
    const legend = { html: '<strong>Personal</strong> details' };
    render(
      <Fieldset legend={legend}>
        <div>Test content</div>
      </Fieldset>
    );
    expect(screen.getByText('Personal')).toBeInTheDocument();
    expect(screen.getByText('details')).toBeInTheDocument();
  });

  it('renders with legend size modifier', () => {
    const legend = { text: 'Personal details', size: 'xl' as const };
    render(
      <Fieldset legend={legend}>
        <div>Test content</div>
      </Fieldset>
    );
    const legendElement = screen.getByText('Personal details');
    expect(legendElement).toHaveClass('nhsuk-fieldset__legend--xl');
  });

  it('renders with legend custom className', () => {
    const legend = { text: 'Personal details', className: 'custom-legend' };
    render(
      <Fieldset legend={legend}>
        <div>Test content</div>
      </Fieldset>
    );
    const legendElement = screen.getByText('Personal details');
    expect(legendElement).toHaveClass('custom-legend');
  });

  it('renders legend as page heading when specified', () => {
    const legend = { text: 'Personal details', isPageHeading: true };
    render(
      <Fieldset legend={legend}>
        <div>Test content</div>
      </Fieldset>
    );
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Personal details');
  });

  it('renders with describedBy attribute', () => {
    render(
      <Fieldset describedBy="hint-id">
        <div>Test content</div>
      </Fieldset>
    );
    const fieldset = screen.getByRole('group');
    expect(fieldset).toHaveAttribute('aria-describedby', 'hint-id');
  });

  it('passes through additional HTML attributes', () => {
    render(
      <Fieldset data-testid="custom-fieldset" id="test-fieldset">
        <div>Test content</div>
      </Fieldset>
    );
    const fieldset = screen.getByTestId('custom-fieldset');
    expect(fieldset).toHaveAttribute('id', 'test-fieldset');
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
      expect(legendElement).toBeInTheDocument();
    });
  });
});
