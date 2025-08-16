import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { CharacterCount } from './CharacterCount';

describe('CharacterCount (SSR)', () => {
  it('renders textarea and initial message', () => {
    const { getByRole, getByText } = renderSSR(<CharacterCount id="cc1" name="f" maxLength={100} />);
    expect(getByRole('textbox').getAttribute('id')).toBe('cc1');
    expect(getByText(/You can enter up to 100 characters/)).toBeTruthy();
  });
  it('applies custom class', () => {
    const { container } = renderSSR(<CharacterCount id="cc2" name="f" maxLength={50} className="extra" />);
    const root = container.querySelector('.nhsuk-character-count');
    expect(root?.className).toContain('extra');
  });
  it('sets threshold attribute', () => {
    const { container } = renderSSR(<CharacterCount id="cc3" name="f" maxLength={150} threshold={50} />);
    const root = container.querySelector('.nhsuk-character-count');
    expect(root?.getAttribute('data-threshold')).toBe('50');
  });
  it('renders word counting variant', () => {
    const { getByText } = renderSSR(<CharacterCount id="cc4" name="w" maxWords={10} />);
    expect(getByText(/You can enter up to 10 words/)).toBeTruthy();
  });
});
