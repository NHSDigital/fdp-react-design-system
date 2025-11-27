import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Tag } from './Tag';

describe('Tag (SSR)', () => {
  it('renders text variant', () => {
    const { html } = renderSSR(<Tag text="Alpha" />);
    expect(html).toContain('nhsuk-tag');
    expect(html).toContain('Alpha');
  });

  it('renders html variant and color modifier', () => {
    const { html } = renderSSR(<Tag html="<strong>Bold</strong>" color="green" />);
    expect(html).toContain('<strong>Bold</strong>');
    expect(html).toContain('nhsuk-tag--green');
  });
});
