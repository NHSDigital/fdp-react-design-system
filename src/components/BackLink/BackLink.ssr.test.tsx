import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { BackLink } from './BackLink';

describe('BackLink (SSR)', () => {
  it('renders default text', () => {
    const { getByText } = renderSSR(<BackLink />);
    expect(getByText('Back')).toBeTruthy();
  });
  it('renders custom text', () => {
    const { getByText } = renderSSR(<BackLink text="Prev" />);
    expect(getByText('Prev')).toBeTruthy();
  });
  it('renders as anchor', () => {
    const { getByRole } = renderSSR(<BackLink href="/p" />);
    expect(getByRole('link').getAttribute('href')).toBe('/p');
  });
});
