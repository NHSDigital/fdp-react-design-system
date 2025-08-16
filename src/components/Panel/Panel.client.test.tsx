import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Panel } from './Panel';

describe('Panel (client)', () => {
  it('prioritises headingHtml over headingText', () => {
    render(<Panel headingText="Text" headingHtml="<em>HTML</em>" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading.innerHTML).toContain('<em>HTML</em>');
    expect(heading).not.toHaveTextContent('Text');
  });

  it('renders children over bodyHtml/bodyText', () => {
    render(<Panel bodyText="BT" bodyHtml="<div>BH</div>"><span>Child</span></Panel>);
    const body = document.querySelector('.nhsuk-panel__body');
    expect(body?.textContent).toBe('Child');
    expect(body?.innerHTML).not.toContain('BH');
  });

  it('applies custom classes & id', () => {
    render(<Panel className="extra" id="pid" bodyText="B" />);
    const panel = document.getElementById('pid');
    expect(panel).toHaveClass('nhsuk-panel');
    expect(panel).toHaveClass('extra');
  });
});
