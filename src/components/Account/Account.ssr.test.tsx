import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Account } from './Account';

describe('Account (SSR)', () => {
  it('renders navigation with items', () => {
    const { getByRole, getByText } = renderSSR(<Account items={[{ text: 'Profile', href: '/p' }]} />);
    expect(getByRole('navigation')).toBeTruthy();
    expect(getByText('Profile')).toBeTruthy();
  });
  it('renders white variant', () => {
    const { getByRole } = renderSSR(<Account items={[{ text: 'P', href: '/p' }]} variant="white" />);
    expect(getByRole('navigation').className).toContain('nhsuk-account--white');
  });
  it('omits output when no items', () => {
    const { container } = renderSSR(<Account items={[]} />);
    expect(container.firstChild).toBeNull();
  });
  it('renders logout form method/action', () => {
    const { getByRole } = renderSSR(<Account items={[{ text: 'Logout', action: '/logout', method: 'post' }]} />);
    const btn = getByRole('button', { name: 'Logout' });
    const form = btn.closest('form');
    expect(form?.getAttribute('action')).toBe('/logout');
    expect(form?.getAttribute('method')).toBe('post');
  });
});
