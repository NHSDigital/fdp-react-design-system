import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Hero } from './Hero';

describe('Hero (SSR)', () => {
  it('renders empty hero without content sections', () => {
    const { html } = renderSSR(<Hero />);
    expect(html).toContain('role="banner"');
    expect(html).not.toContain('nhsuk-hero__wrapper');
  });

  it('renders heading + text variant', () => {
    const { html } = renderSSR(<Hero heading="Hello" text="World" />);
    expect(html).toContain('<h1');
    expect(html).toContain('Hello');
    expect(html).toContain('World');
  });

  it('renders image variant with overlay + arrow', () => {
    const { html } = renderSSR(<Hero heading="Img" imageURL="https://ex.com/a.jpg" text="t" />);
    expect(html).toContain('nhsuk-hero--image');
    expect(html).toContain('nhsuk-hero__arrow');
  });
});
