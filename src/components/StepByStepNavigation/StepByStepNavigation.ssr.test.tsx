import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { StepByStepNavigation } from './StepByStepNavigation';

const items = [
  { id: 'a', title: 'A', href: '#a', status: 'completed' as const },
  { id: 'b', title: 'B', href: '#b' },
];

describe('StepByStepNavigation (SSR)', () => {
  it('renders nav and ordered list (full-width)', () => {
    const { getByRole } = renderSSR(<StepByStepNavigation items={items} heading="Start" summary="Summary" />);
    const nav = getByRole('navigation');
    expect(nav).toBeTruthy();
    const list = nav.querySelector('ol');
    expect(list?.tagName).toBe('OL');
  });

  it('renders aside for sidebar variant', () => {
    const { container } = renderSSR(<StepByStepNavigation items={items} variant="sidebar" ariaLabel="Steps" />);
    const aside = container.querySelector('aside[aria-label="Steps"]');
    expect(aside).toBeTruthy();
  });

  it('marks current step with aria-current', () => {
    const { getByRole } = renderSSR(<StepByStepNavigation items={items} currentStepId="b" />);
    const link = getByRole('link', { name: 'B' });
    expect(link.getAttribute('aria-current')).toBe('step');
  });
});
