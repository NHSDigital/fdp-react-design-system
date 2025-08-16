import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { TaskList } from './TaskList';

const items = [
  { title: { text: 'One' }, href: '#1', status: { text: 'Done' } },
  { title: { html: '<strong>Two</strong>' }, status: { tag: { text: 'Tag', color: 'blue' } } }
];

describe('TaskList (SSR)', () => {
  it('renders list and items', () => {
    const { html } = renderSSR(<TaskList items={items} />);
    expect(html).toContain('One');
    expect(html).toContain('<strong>Two</strong>');
    expect(html).toContain('nhsuk-task-list');
  });

  it('renders tag variant', () => {
    const { html } = renderSSR(<TaskList items={[items[1]]} />);
    expect(html).toContain('nhsuk-tag');
  });
});
