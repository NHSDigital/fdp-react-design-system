import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Label } from './Label';

describe('Label (client)', () => {
  it('associates label and input via htmlFor/id', async () => {
  render(<><Label htmlFor="name">Name</Label><input id="name" /></>);
    const input = screen.getByLabelText('Name');
    expect(input).toBeInTheDocument();
    await userEvent.click(screen.getByText('Name'));
    expect(input).toHaveFocus();
  });
  it('renders as page heading when isPageHeading', () => {
  render(<Label htmlFor="h" isPageHeading size="l">Section title</Label>);
  const heading = screen.getByRole('heading', { name: 'Section title', level: 1 });
  expect(heading).toBeInTheDocument();
  // The heading itself receives the size modifier; inner label is a wrapper
  expect(heading).toHaveClass('nhsuk-label', 'nhsuk-label--l');
  const inner = heading.querySelector('label');
  expect(inner).toHaveClass('nhsuk-label-wrapper');
  });
});
