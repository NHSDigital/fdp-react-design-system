import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Tabs } from './Tabs';
import { TabItem } from './Tabs.types';

const baseItems: TabItem[] = [
  { id: 'tab1', label: 'First Tab', content: <div>Content for first tab</div> },
  { id: 'tab2', label: 'Second Tab', content: <div>Content for second tab</div> },
  { id: 'tab3', label: 'Third Tab', content: <div>Content for third tab</div> },
];

describe('Tabs (client)', () => {
  describe('uncontrolled', () => {
    it('changes active tab on click', async () => {
      const user = userEvent.setup();
      render(<Tabs items={baseItems} />);
      const second = screen.getByRole('tab', { name: 'Second Tab' });
      await user.click(second);
      expect(second.getAttribute('aria-selected')).toBe('true');
    });
    it('calls onTabChange on click', async () => {
      const user = userEvent.setup();
      const onTabChange = vi.fn();
      render(<Tabs items={baseItems} onTabChange={onTabChange} />);
      await user.click(screen.getByRole('tab', { name: 'Second Tab' }));
      expect(onTabChange).toHaveBeenCalledWith('tab2');
    });
  });
  describe('controlled', () => {
    it('invokes onTabChange when clicked', async () => {
      const user = userEvent.setup();
      const onTabChange = vi.fn();
      render(<Tabs items={baseItems} activeTab="tab1" onTabChange={onTabChange} />);
      await user.click(screen.getByRole('tab', { name: 'Second Tab' }));
      expect(onTabChange).toHaveBeenCalledWith('tab2');
    });
  });
  describe('keyboard', () => {
    it('ArrowRight moves focus and selects', async () => {
      const user = userEvent.setup();
      render(<Tabs items={baseItems} />);
      const first = screen.getByRole('tab', { name: 'First Tab' });
      const second = screen.getByRole('tab', { name: 'Second Tab' });
      first.focus();
      await user.keyboard('{ArrowRight}');
      expect(document.activeElement).toBe(second);
      expect(second.getAttribute('aria-selected')).toBe('true');
    });
    it('Home moves to first tab', async () => {
      const user = userEvent.setup();
      render(<Tabs items={baseItems} defaultActiveTab="tab2" />);
      const first = screen.getByRole('tab', { name: 'First Tab' });
      const second = screen.getByRole('tab', { name: 'Second Tab' });
      second.focus();
      await user.keyboard('{Home}');
      expect(document.activeElement).toBe(first);
      expect(first.getAttribute('aria-selected')).toBe('true');
    });
  });
  describe('disabled', () => {
    const itemsWithDisabled: TabItem[] = [
      ...baseItems,
      { id: 'tab4', label: 'Disabled Tab', content: <div>Disabled</div>, disabled: true }
    ];
    it('renders disabled tab', () => {
      render(<Tabs items={itemsWithDisabled} />);
      const disabled = screen.getByRole('tab', { name: 'Disabled Tab' });
      expect(disabled.hasAttribute('disabled')).toBe(true);
    });
    it('does not activate disabled tab', async () => {
      const user = userEvent.setup();
      const onTabChange = vi.fn();
      render(<Tabs items={itemsWithDisabled} onTabChange={onTabChange} />);
      const disabled = screen.getByRole('tab', { name: 'Disabled Tab' });
      await user.click(disabled);
      expect(onTabChange).not.toHaveBeenCalled();
      expect(disabled.getAttribute('aria-selected')).toBe('false');
    });
  });
});
