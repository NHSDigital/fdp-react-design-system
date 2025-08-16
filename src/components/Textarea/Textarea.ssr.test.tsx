import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Textarea } from './Textarea';

describe('Textarea (SSR)', () => {
  it('renders base element with classes', () => {
    const { getByRole } = renderSSR(<Textarea id="msg" name="msg" defaultValue="Hi" />);
    const el = getByRole('textbox') as HTMLTextAreaElement;
    expect(el.className).toContain('nhsuk-textarea');
    expect(el.value).toBe('Hi');
  });

  it('applies error modifier', () => {
    const { getByRole } = renderSSR(<Textarea id="e" name="e" hasError />);
    expect(getByRole('textbox').className).toContain('nhsuk-textarea--error');
  });
});
