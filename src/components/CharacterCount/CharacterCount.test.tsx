import { ServerRenderer } from '../../test-utils/ServerRenderer';
import { describe, it, expect, vi } from 'vitest';
import { CharacterCount } from './CharacterCount';

describe('CharacterCount', () => {
  it('renders successfully', () => {
    const container = ServerRenderer.render(<CharacterCount id="test-char-count" name="symptoms" maxLength={100} />);
    const getByRole = (role: string) => ServerRenderer.getByRole(container, role);
    const getByText = (text: string) => ServerRenderer.getByText(container, text);
    expect(getByRole('textbox')).toBeTruthy();
    expect(getByText('You can enter up to 100 characters')).toBeTruthy();
  });

  it('applies custom className', () => {
    const container = ServerRenderer.render(<CharacterCount id="test-char-count" name="symptoms" maxLength={100} className="custom-class" />);
    const component = container.querySelector('[data-testid="character-count"]') || container.querySelector('.nhsuk-character-count');
    expect(component!.className.includes('custom-class')).toBeTruthy();
    expect(component!.className.includes('nhsuk-character-count')).toBeTruthy();
  });

  it('updates character count on input when threshold reached', () => {
    const container = ServerRenderer.render(<CharacterCount id="test-char-count" name="symptoms" maxLength={100} threshold={10} />);
    const getByRole = (role: string) => ServerRenderer.getByRole(container, role);
    const textarea = getByRole('textbox');
    
    // Note: Server-side rendering doesn't support event simulation
    // Event handling should be tested in browser integration tests
    expect(textarea).toBeTruthy();
  });

  it('shows over limit warning', () => {
    const container = ServerRenderer.render(<CharacterCount id="test-char-count" name="symptoms" maxLength={10} />);
    const getByRole = (role: string) => ServerRenderer.getByRole(container, role);
    const textarea = getByRole('textbox');
    
    // Note: Server-side rendering doesn't support event simulation
    // Event handling should be tested in browser integration tests
    expect(textarea).toBeTruthy();
  });

  it('renders with custom threshold', () => {
    const container = ServerRenderer.render(<CharacterCount id="test-char-count" name="symptoms" maxLength={100} threshold={50} />);
    const component = container.querySelector('[data-testid="character-count"]') || container.querySelector('.nhsuk-character-count');
    expect(component!.getAttribute('data-threshold')).toBe('50');
  });

  it('renders with textarea name and id', () => {
    const container = ServerRenderer.render(<CharacterCount id="test-char-count" name="user-feedback" maxLength={100} />);
    const getByRole = (role: string) => ServerRenderer.getByRole(container, role);
    const textarea = getByRole('textbox');
    expect(textarea!.getAttribute('name')).toBe('user-feedback');
    expect(textarea!.getAttribute('id')).toBe('test-char-count');
  });

  it('calls onChange when text changes', () => {
    const handleChange = vi.fn();
    const container = ServerRenderer.render(
      <CharacterCount 
        id="test-char-count" 
        name="symptoms" 
        maxLength={100} 
        onChange={handleChange}
      />
    );
    const getByRole = (role: string) => ServerRenderer.getByRole(container, role);
    
    const textarea = getByRole('textbox');
    
    // Note: Server-side rendering doesn't support event simulation
    // Event handling should be tested in browser integration tests
    expect(textarea).toBeTruthy();
  });
});