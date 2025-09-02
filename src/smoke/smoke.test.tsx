import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from '../components/Button';
import { Header } from '../components/Header/Header';
import { HeaderServer } from '../components/Header';

// Minimal smoke tests to ensure core components render without crashing.

describe('Smoke', () => {
  it('renders Button', () => {
    const { getByRole } = render(<Button>Hi</Button>);
    expect(getByRole('button')).toBeTruthy();
  });

  it('renders Header (client variant) SSR-safe', () => {
    const { getByRole } = render(<Header service={{ text: 'Portal', href: '/' }} />);
    expect(getByRole('banner')).toBeTruthy();
  });

  it('renders HeaderServer (pure server variant)', () => {
    const { container } = render(<HeaderServer service={{ text: 'Portal', href: '/' }} /> as any);
    expect(container.querySelector('.nhsuk-header')).toBeTruthy();
  });
});
