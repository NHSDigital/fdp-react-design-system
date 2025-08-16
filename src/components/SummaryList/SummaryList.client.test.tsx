import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SummaryList } from './SummaryList';

const baseItems = [
  { key: { text: 'Key A' }, value: { text: 'Value A' } },
];

describe('SummaryList (client)', () => {
  it('prioritises children over html/text', () => {
    render(<SummaryList items={[{ key: { text: 'T', html: '<i>H</i>', children: <span>ChildK</span> }, value: { text: 'VT', html: '<b>VH</b>', children: <span>ChildV</span> } }]} />);
    expect(screen.getByText('ChildK')).toBeInTheDocument();
    expect(screen.getByText('ChildV')).toBeInTheDocument();
    expect(screen.queryByText('T')).not.toBeInTheDocument();
  });

  it('renders actions with visually hidden text', () => {
    render(<SummaryList items={[{ key: { text: 'Name' }, value: { text: 'John' }, actions: { items: [{ href: '/edit', text: 'Change', visuallyHiddenText: 'name' }] } }]} />);
    const link = screen.getByRole('link', { name: /Change.*name/ });
    expect(link).toHaveAttribute('href', '/edit');
  });

  it('applies custom class + id', () => {
    render(<SummaryList id="sl" className="extra" items={baseItems} />);
    const dl = document.getElementById('sl');
    expect(dl).toHaveClass('nhsuk-summary-list');
    expect(dl).toHaveClass('extra');
  });
});
