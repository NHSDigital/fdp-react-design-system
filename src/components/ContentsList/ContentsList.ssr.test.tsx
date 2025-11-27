import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { ContentsList } from './ContentsList';

const items = [
  { text: 'Intro', href: '#intro' },
  { text: 'Middle', href: '#mid' },
  { text: 'Current', href: '#cur', current: true },
];

describe('ContentsList (SSR)', () => {
  it('renders nav, hidden heading, and list', () => {
    const { getByRole, getByText } = renderSSR(<ContentsList items={items} />);
    expect(getByRole('navigation').getAttribute('aria-label')).toBe('Pages in this guide');
    const hidden = getByText('Contents');
    expect(hidden.className).toContain('nhsuk-u-visually-hidden');
    expect(getByRole('list').tagName).toBe('OL');
  });
  it('marks current item without link', () => {
    const { getByText, queryByRole } = renderSSR(<ContentsList items={items} />);
    const current = getByText('Current');
    expect(current.className).toContain('nhsuk-contents-list__current');
    expect(queryByRole('link', { name: 'Current' })).toBeNull();
  });
  it('applies custom classes and attributes', () => {
    const { container, getByTestId } = renderSSR(<ContentsList items={items} classes="extra" attributes={{ 'data-testid': 'cl' }} />);
    expect(container.querySelector('.nhsuk-contents-list')?.className).toContain('extra');
    expect(getByTestId('cl')).toBeTruthy();
  });
  it('renders empty list gracefully', () => {
    const { getByRole } = renderSSR(<ContentsList items={[]} />);
    expect(getByRole('list').children.length).toBe(0);
  });
});
