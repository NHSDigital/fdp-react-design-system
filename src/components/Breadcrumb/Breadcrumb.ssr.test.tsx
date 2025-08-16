import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Breadcrumb } from './Breadcrumb';

const items = [
  { text: 'Home', href: '/' },
  { text: 'Section', href: '/section' },
  { text: 'Current', href: '/current' },
];

describe('Breadcrumb (SSR)', () => {
  it('renders nav with default label', () => {
    const { getByRole } = renderSSR(<Breadcrumb />);
    const nav = getByRole('navigation');
    expect(nav.getAttribute('aria-label')).toBe('Breadcrumb');
  });

  it('renders items with hrefs', () => {
    const { getAllByText, getByText } = renderSSR(<Breadcrumb items={items} />);
    expect(getByText('Home').closest('a')?.getAttribute('href')).toBe('/');
    expect(getByText('Section').closest('a')?.getAttribute('href')).toBe('/section');
    const currents = getAllByText('Current');
    expect(currents.length).toBeGreaterThanOrEqual(1);
  });

  it('supports direct href + text props', () => {
    const { getAllByText } = renderSSR(<Breadcrumb href="/only" text="Only" />);
    // should render for nav trail and mobile back link
    expect(getAllByText('Only').length).toBeGreaterThanOrEqual(1);
  });

  it('applies reverse class', () => {
    const { container } = renderSSR(<Breadcrumb reverse items={items} />);
    expect(container.querySelector('.nhsuk-breadcrumb')?.className).toContain('nhsuk-breadcrumb--reverse');
  });

  it('passes custom classes and attributes', () => {
    const { container, getByTestId } = renderSSR(<Breadcrumb classes="extra" attributes={{ 'data-testid': 'crumb' }} />);
    expect(container.querySelector('.nhsuk-breadcrumb')?.className).toContain('extra');
    expect(getByTestId('crumb')).toBeTruthy();
  });

  it('filters items without href unless active', () => {
    const { queryByText, getAllByText, getByText } = renderSSR(<Breadcrumb items={[{ text: 'Home', href: '/' }, { text: 'NoLink' }, { text: 'Next', href: '/n' }]} />);
    expect(getByText('Home')).toBeTruthy();
    expect(getAllByText('Next').length).toBeGreaterThanOrEqual(1);
    expect(queryByText('NoLink')).toBeNull();
  });
});
