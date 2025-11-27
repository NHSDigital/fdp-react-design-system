import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Fieldset } from './Fieldset';

describe('Fieldset (client)', () => {
  it('renders group role and legend', () => {
    render(<Fieldset legend={{ text: 'Personal details' }}><div>Content</div></Fieldset>);
    expect(screen.getByRole('group')).toBeInTheDocument();
    expect(screen.getByText('Personal details')).toBeInTheDocument();
  });
  it('applies size modifier class', () => {
    render(<Fieldset legend={{ text: 'Legend xl', size: 'xl' }}>{null}</Fieldset>);
    const legend = screen.getByText('Legend xl');
    expect(legend.className).toContain('nhsuk-fieldset__legend--xl');
  });
});
