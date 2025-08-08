import { render } from '../../test-utils/ServerRenderer';
import { describe, it, expect } from 'vitest';
import { Hint } from './Hint';

describe('Debug Hint Issues', () => {
  it('debug empty content', () => {
    const { container, querySelector } = render(<Hint>{''}</Hint>);
    
    console.log('Container HTML:', container.outerHTML);
    console.log('Container class:', container.className);
    console.log('Container matches .nhsuk-hint:', container.matches('.nhsuk-hint'));
    console.log('Looking for .nhsuk-hint with smart querySelector:', querySelector('.nhsuk-hint'));
    console.log('All classes in container:', container.querySelectorAll('[class]'));
    
    const hint = querySelector('.nhsuk-hint');
    expect(hint).toBeTruthy();
  });

  it('debug aria-describedby', () => {
    const { container, getByRole } = render(
      <div>
        <Hint id="email-hint">Enter your email address</Hint>
        <input type="email" aria-describedby="email-hint" />
      </div>
    );
    
    console.log('Container HTML:', container.outerHTML);
    const input = getByRole('textbox');
    console.log('Input element:', input);
    console.log('Input attributes:', input?.attributes);
    console.log('aria-describedby value:', input?.getAttribute('aria-describedby'));
  });

  it('debug id selector', () => {
    const { container, querySelector } = render(<Hint id="screen-reader-hint">Screen reader accessible hint</Hint>);
    
    console.log('Container HTML:', container.outerHTML);
    console.log('Looking for #screen-reader-hint with smart querySelector:', querySelector('#screen-reader-hint'));
    console.log('All elements with id:', container.querySelectorAll('[id]'));
    
    const hint = querySelector('#screen-reader-hint');
    expect(hint).toBeTruthy();
  });
});
