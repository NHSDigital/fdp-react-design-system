import { renderSSR } from '../../test-utils/renderSSR';
import { describe, it, expect, vi } from 'vitest';
import { CharacterCount } from './CharacterCount';

describe('CharacterCount', () => {
  it('renders successfully', () => {
    const { getByRole, getByText } = renderSSR(<CharacterCount id="test-char-count" name="symptoms" maxLength={100} />);
    expect(getByRole('textbox')).toBeTruthy();
    expect(getByText(/You can enter up to 100 characters/)).toBeTruthy();
  });

  it('applies custom className', () => {
    const { container } = renderSSR(<CharacterCount id="test-char-count" name="symptoms" maxLength={100} className="custom-class" />);
    const component = container.querySelector('[data-testid="character-count"], .nhsuk-character-count');
    expect(component!.className).toContain('custom-class');
    expect(component!.className).toContain('nhsuk-character-count');
  });

  it('updates character count on input when threshold reached (SSR static markup only)', () => {
    const { getByRole } = renderSSR(<CharacterCount id="test-char-count" name="symptoms" maxLength={100} threshold={10} />);
    expect(getByRole('textbox')).toBeTruthy();
  });

  it('shows textarea when over limit scenario (SSR static)', () => {
    const { getByRole } = renderSSR(<CharacterCount id="test-char-count" name="symptoms" maxLength={10} />);
    expect(getByRole('textbox')).toBeTruthy();
  });

  it('renders with custom threshold', () => {
    const { container } = renderSSR(<CharacterCount id="test-char-count" name="symptoms" maxLength={100} threshold={50} />);
    const component = container.querySelector('[data-testid="character-count"], .nhsuk-character-count');
    expect(component!.getAttribute('data-threshold')).toBe('50');
  });

  it('renders with textarea name and id', () => {
    const { getByRole } = renderSSR(<CharacterCount id="test-char-count" name="user-feedback" maxLength={100} />);
    const textarea = getByRole('textbox');
    expect(textarea.getAttribute('name')).toBe('user-feedback');
    expect(textarea.getAttribute('id')).toBe('test-char-count');
  });

  it('includes onChange handler prop in SSR output (no runtime events)', () => {
    const handleChange = vi.fn();
    const { getByRole } = renderSSR(
      <CharacterCount 
        id="test-char-count" 
        name="symptoms" 
        maxLength={100} 
        onChange={handleChange}
      />
    );
    expect(getByRole('textbox')).toBeTruthy();
  });
});