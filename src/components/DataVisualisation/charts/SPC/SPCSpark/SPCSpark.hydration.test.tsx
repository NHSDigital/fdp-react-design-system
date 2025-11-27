import { hydrateRoot } from 'react-dom/client';
import { renderToString } from 'react-dom/server';
import { SPCSpark } from './SPCSpark';

// Basic hydration smoke test

describe('SPCSpark hydration', () => {
  it('hydrates client after SSR markup', () => {
    // simulate SSR html container
    const container = document.createElement('div');
    container.innerHTML = '<div id="root"></div>';
    document.body.appendChild(container);
    const rootEl = document.getElementById('root')!;
    // produce real server markup
  const serverHtml = renderToString(<SPCSpark data={[{value:1},{value:2},{value:3}]} showMean />);
    rootEl.innerHTML = serverHtml;
    expect(()=>{
  hydrateRoot(rootEl, <SPCSpark data={[{value:1},{value:2},{value:3}]} showMean />);
    }).not.toThrow();
  });
});
