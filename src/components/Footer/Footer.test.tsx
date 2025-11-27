import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from './Footer';
import { FooterLinkItem } from './Footer.types';

describe('Footer', () => {
  const defaultLinks: FooterLinkItem[] = [
    { URL: '/privacy', label: 'Privacy policy' },
    { URL: '/cookies', label: 'Cookies' },
  ];

  it('renders with default props', () => {
    render(<Footer />);
    
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText('© NHS England')).toBeInTheDocument();
    expect(screen.getByText('Support links')).toBeInTheDocument();
  });

  it('renders with custom copyright text', () => {
    render(<Footer copyright="© Custom Copyright" />);
    
    expect(screen.getByText('© Custom Copyright')).toBeInTheDocument();
  });

  it('renders single column layout with links', () => {
    render(<Footer links={defaultLinks} />);
    
    expect(screen.getByText('Privacy policy')).toBeInTheDocument();
    expect(screen.getByText('Cookies')).toBeInTheDocument();
    
    const privacyLink = screen.getByRole('link', { name: 'Privacy policy' });
    expect(privacyLink).toHaveAttribute('href', '/privacy');
  });

  it('renders multi-column layout when linksColumn2 is provided', () => {
    const column2Links: FooterLinkItem[] = [
      { URL: '/terms', label: 'Terms and conditions' },
    ];
    
    render(<Footer links={defaultLinks} linksColumn2={column2Links} />);
    
    expect(screen.getByText('Privacy policy')).toBeInTheDocument();
    expect(screen.getByText('Terms and conditions')).toBeInTheDocument();
  });

  it('renders links with newWindow property', () => {
    const externalLinks: FooterLinkItem[] = [
      { URL: 'https://example.com', label: 'External Link', newWindow: true },
    ];
    
    render(<Footer links={externalLinks} />);
    
    const externalLink = screen.getByRole('link', { name: 'External Link' });
    expect(externalLink).toHaveAttribute('target', '_blank');
    expect(externalLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders meta links separately', () => {
    const metaLinks: FooterLinkItem[] = [
      { URL: '/accessibility', label: 'Accessibility statement' },
    ];
    
    render(<Footer links={defaultLinks} metaLinks={metaLinks} />);
    
    expect(screen.getByText('Accessibility statement')).toBeInTheDocument();
  });

  it('applies custom CSS classes', () => {
    const { container } = render(
      <Footer 
        className="custom-footer" 
        containerClasses="custom-container"
      />
    );
    
    expect(container.querySelector('.nhsuk-footer')).toHaveClass('custom-footer');
    expect(container.querySelector('.nhsuk-width-container')).toHaveClass('custom-container');
  });

  it('passes through additional attributes', () => {
    render(<Footer attributes={{ 'data-testid': 'custom-footer' }} />);
    
    expect(screen.getByTestId('custom-footer')).toBeInTheDocument();
  });

  it('renders visually hidden heading for accessibility', () => {
    render(<Footer />);
    
    const heading = screen.getByText('Support links');
    expect(heading).toHaveClass('nhsuk-u-visually-hidden');
    expect(heading.tagName).toBe('H2');
  });
});
