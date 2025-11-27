import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InsetText } from './InsetText';

// Client tests: largely same as SSR but ensure DOM queries via Testing Library.

describe('InsetText (client)', () => {
  it('renders text content', () => {
    render(<InsetText text="Client text" />);
    expect(screen.getByText('Client text')).toBeInTheDocument();
  });

  it('renders html content', () => {
    render(<InsetText html="<p>Client <em>html</em></p>" />);
    expect(screen.getByText('html')).toBeInTheDocument();
  });

  it('prefers children', () => {
    render(<InsetText text="t" html="<p>h</p>"><span>Child C</span></InsetText>);
    expect(screen.getByText('Child C')).toBeInTheDocument();
    expect(screen.queryByText('t')).toBeNull();
    expect(screen.queryByText('h')).toBeNull();
  });
});
