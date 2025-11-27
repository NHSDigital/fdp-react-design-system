import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { BrandThemeProvider } from '../../themes/BrandThemeProvider';

describe('Header (brand theming, client)', () => {
  it('applies document-scope brand (fdp) via data-brand on documentElement', () => {
    // Reset any previous brand attribute
    document.documentElement.removeAttribute('data-brand');

    render(
      <BrandThemeProvider brand="fdp" scope="document">
        <Header service={{ text: 'Service', href: '/' }} />
      </BrandThemeProvider>
    );

    expect(document.documentElement.getAttribute('data-brand')).toBe('fdp');
    // Basic smoke: service text present
    expect(screen.getByText('Service')).toBeInTheDocument();
  });

  it('wraps a local subtree with data-brand for FDP without affecting documentElement', () => {
    // Ensure clean document brand state
    document.documentElement.removeAttribute('data-brand');

    const { container } = render(
      <BrandThemeProvider brand="fdp" scope="local">
        <Header service={{ text: 'Local FDP', href: '/' }} />
      </BrandThemeProvider>
    );

    // Document remains unbranded by default
    expect(document.documentElement.getAttribute('data-brand')).toBeNull();

    // Local wrapper should carry data-brand="fdp"
    const wrapper = container.querySelector('[data-brand="fdp"]');
    expect(wrapper).toBeTruthy();
    expect(screen.getByText('Local FDP')).toBeInTheDocument();
  });
});
