import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Card, CardGroup, CardGroupItem } from './Card';

describe('Card (SSR)', () => {
  it('renders heading and description', () => {
    const { getByRole, getByText } = renderSSR(<Card heading="A" description="Desc" />);
    expect(getByRole('heading', { level: 2 }).textContent).toBe('A');
    expect(getByText('Desc')).toBeTruthy();
  });
  it('renders custom heading level', () => {
    const { getByRole } = renderSSR(<Card heading="Lvl" headingLevel={3} />);
    expect(getByRole('heading', { level: 3 }).textContent).toBe('Lvl');
  });
  it('renders clickable variant with link', () => {
    const { getByRole } = renderSSR(<Card variant="clickable" heading="Go" href="/go" />);
    expect(getByRole('link').getAttribute('href')).toBe('/go');
  });
  it('renders feature variant classes', () => {
    const { container } = renderSSR(<Card variant="feature" heading="Feat" />);
    const card = container.querySelector('.nhsuk-card');
    expect(card?.className).toContain('nhsuk-card--feature');
  });
  it('renders image', () => {
    const { container } = renderSSR(<Card heading="Img" imgURL="/i.jpg" imgAlt="Alt" />);
    const img = container.querySelector('img');
    expect(img?.getAttribute('src')).toBe('/i.jpg');
    expect(img?.getAttribute('alt')).toBe('Alt');
  });
  it('renders group with items', () => {
    const { getByText } = renderSSR(
      <CardGroup>
        <CardGroupItem><Card heading="One" /></CardGroupItem>
        <CardGroupItem><Card heading="Two" /></CardGroupItem>
      </CardGroup>
    );
    expect(getByText('One')).toBeTruthy();
    expect(getByText('Two')).toBeTruthy();
  });
});
