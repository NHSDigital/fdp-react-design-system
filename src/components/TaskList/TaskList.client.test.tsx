import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TaskList } from './TaskList';

describe('TaskList (client)', () => {
  it('applies with-link class when href present', () => {
    const items = [
      { title: { text: 'Check' }, href: '#', status: { text: 'Done' } }
    ];
    const { container } = render(<TaskList items={items} />);
    const li = container.querySelector('li');
    expect(li).toHaveClass('nhsuk-task-list__item--with-link');
  });

  it('adds aria-describedby with hint + status', () => {
    const items = [
      { title: { text: 'T' }, href: '#', hint: { text: 'Hint' }, status: { text: 'Stat' } }
    ];
    render(<TaskList items={items} idPrefix="x" />);
    const link = screen.getByText('T');
    expect(link).toHaveAttribute('aria-describedby', 'x-1-hint x-1-status');
  });

  it('uses status only when no hint', () => {
    const items = [ { title: { text: 'A' }, href: '#', status: { text: 'S' } } ];
    render(<TaskList items={items} />);
    const link = screen.getByText('A');
    expect(link.getAttribute('aria-describedby')).toMatch(/-1-status$/);
  });
});
