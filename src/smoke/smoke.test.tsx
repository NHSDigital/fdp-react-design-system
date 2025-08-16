import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from '../components/Button';

// Minimal smoke tests to ensure core components render without crashing.

describe('Smoke', () => {
  it('renders Button', () => {
    const { getByRole } = render(<Button>Hi</Button>);
    expect(getByRole('button')).toBeTruthy();
  });
});
