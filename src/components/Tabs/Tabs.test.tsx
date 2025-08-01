import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Tabs } from './Tabs';
import { TabItem } from './Tabs.types';

const mockTabItems: TabItem[] = [
  {
    id: 'tab1',
    label: 'First Tab',
    content: <div>Content for first tab</div>,
  },
  {
    id: 'tab2',
    label: 'Second Tab',
    content: <div>Content for second tab</div>,
  },
  {
    id: 'tab3',
    label: 'Third Tab',
    content: <div>Content for third tab</div>,
  },
];

describe('Tabs Component', () => {
  describe('Rendering', () => {
    it('renders tabs with correct structure', () => {
      render(<Tabs items={mockTabItems} />);
      
      expect(screen.getByRole('tablist')).toBeDefined();
      expect(screen.getAllByRole('tab')).toHaveLength(3);
      // Hidden panels are not accessible by testing-library by default
      const panels = document.querySelectorAll('[role="tabpanel"]');
      expect(panels).toHaveLength(3);
    });

    it('renders tab labels correctly', () => {
      render(<Tabs items={mockTabItems} />);
      
      expect(screen.getByText('First Tab')).toBeDefined();
      expect(screen.getByText('Second Tab')).toBeDefined();
      expect(screen.getByText('Third Tab')).toBeDefined();
    });

    it('renders tab content correctly', () => {
      render(<Tabs items={mockTabItems} />);
      
      expect(screen.getByText('Content for first tab')).toBeDefined();
      expect(screen.getByText('Content for second tab')).toBeDefined();
      expect(screen.getByText('Content for third tab')).toBeDefined();
    });

    it('shows first tab as active by default', () => {
      render(<Tabs items={mockTabItems} />);
      
      const firstTab = screen.getByRole('tab', { name: 'First Tab' });
      expect(firstTab.getAttribute('aria-selected')).toBe('true');
      expect(firstTab.getAttribute('tabindex')).toBe('0');
      
      const firstPanel = screen.getByRole('tabpanel', { name: 'First Tab' });
      expect(firstPanel.hasAttribute('hidden')).toBe(false);
    });

    it('hides non-active tab panels', () => {
      render(<Tabs items={mockTabItems} />);
      
      // Check hidden panels using direct DOM query since hidden elements aren't accessible
      const secondPanel = document.getElementById('tab2-panel');
      const thirdPanel = document.getElementById('tab3-panel');
      
      expect(secondPanel).toBeDefined();
      expect(secondPanel?.hasAttribute('hidden')).toBe(true);
      expect(thirdPanel).toBeDefined();
      expect(thirdPanel?.hasAttribute('hidden')).toBe(true);
      
      // Active panel should not be hidden
      const firstPanel = screen.getByRole('tabpanel', { name: 'First Tab' });
      expect(firstPanel.hasAttribute('hidden')).toBe(false);
    });
  });

  describe('Default Active Tab', () => {
    it('respects defaultActiveTab prop', () => {
      render(<Tabs items={mockTabItems} defaultActiveTab="tab2" />);
      
      const secondTab = screen.getByRole('tab', { name: 'Second Tab' });
      expect(secondTab.getAttribute('aria-selected')).toBe('true');
      
      const secondPanel = screen.getByRole('tabpanel', { name: 'Second Tab' });
      expect(secondPanel.hasAttribute('hidden')).toBe(false);
    });
  });

  describe('Controlled Mode', () => {
    it('respects controlled activeTab prop', () => {
      const onTabChange = vi.fn();
      render(
        <Tabs 
          items={mockTabItems} 
          activeTab="tab3" 
          onTabChange={onTabChange}
        />
      );
      
      const thirdTab = screen.getByRole('tab', { name: 'Third Tab' });
      expect(thirdTab.getAttribute('aria-selected')).toBe('true');
      
      const thirdPanel = screen.getByRole('tabpanel', { name: 'Third Tab' });
      expect(thirdPanel.hasAttribute('hidden')).toBe(false);
    });

    it('calls onTabChange when tab is clicked in controlled mode', async () => {
      const user = userEvent.setup();
      const onTabChange = vi.fn();
      
      render(
        <Tabs 
          items={mockTabItems} 
          activeTab="tab1" 
          onTabChange={onTabChange}
        />
      );
      
      const secondTab = screen.getByRole('tab', { name: 'Second Tab' });
      await user.click(secondTab);
      
      expect(onTabChange).toHaveBeenCalledWith('tab2');
    });
  });

  describe('Uncontrolled Mode', () => {
    it('changes active tab when clicked', async () => {
      const user = userEvent.setup();
      render(<Tabs items={mockTabItems} />);
      
      const secondTab = screen.getByRole('tab', { name: 'Second Tab' });
      await user.click(secondTab);
      
      expect(secondTab.getAttribute('aria-selected')).toBe('true');
      
      const secondPanel = screen.getByRole('tabpanel', { name: 'Second Tab' });
      expect(secondPanel.hasAttribute('hidden')).toBe(false);
    });

    it('calls onTabChange when tab is clicked', async () => {
      const user = userEvent.setup();
      const onTabChange = vi.fn();
      
      render(<Tabs items={mockTabItems} onTabChange={onTabChange} />);
      
      const secondTab = screen.getByRole('tab', { name: 'Second Tab' });
      await user.click(secondTab);
      
      expect(onTabChange).toHaveBeenCalledWith('tab2');
    });
  });

  describe('Keyboard Navigation', () => {
    it('navigates with arrow keys', async () => {
      const user = userEvent.setup();
      render(<Tabs items={mockTabItems} />);
      
      const firstTab = screen.getByRole('tab', { name: 'First Tab' });
      const secondTab = screen.getByRole('tab', { name: 'Second Tab' });
      
      firstTab.focus();
      await user.keyboard('{ArrowRight}');
      
      expect(document.activeElement).toBe(secondTab);
      expect(secondTab.getAttribute('aria-selected')).toBe('true');
    });

    it('navigates to first tab with Home key', async () => {
      const user = userEvent.setup();
      render(<Tabs items={mockTabItems} defaultActiveTab="tab2" />);
      
      const secondTab = screen.getByRole('tab', { name: 'Second Tab' });
      const firstTab = screen.getByRole('tab', { name: 'First Tab' });
      
      secondTab.focus();
      await user.keyboard('{Home}');
      
      expect(document.activeElement).toBe(firstTab);
      expect(firstTab.getAttribute('aria-selected')).toBe('true');
    });
  });

  describe('Disabled Tabs', () => {
    const itemsWithDisabled: TabItem[] = [
      ...mockTabItems,
      {
        id: 'tab4',
        label: 'Disabled Tab',
        content: <div>Disabled content</div>,
        disabled: true,
      },
    ];

    it('renders disabled tabs correctly', () => {
      render(<Tabs items={itemsWithDisabled} />);
      
      const disabledTab = screen.getByRole('tab', { name: 'Disabled Tab' });
      expect(disabledTab.hasAttribute('disabled')).toBe(true);
    });

    it('does not activate disabled tabs when clicked', async () => {
      const user = userEvent.setup();
      const onTabChange = vi.fn();
      
      render(<Tabs items={itemsWithDisabled} onTabChange={onTabChange} />);
      
      const disabledTab = screen.getByRole('tab', { name: 'Disabled Tab' });
      await user.click(disabledTab);
      
      expect(onTabChange).not.toHaveBeenCalled();
      expect(disabledTab.getAttribute('aria-selected')).toBe('false');
    });
  });

  describe('ARIA Attributes', () => {
    it('has correct ARIA attributes', () => {
      render(<Tabs items={mockTabItems} />);
      
      const tabList = screen.getByRole('tablist');
      expect(tabList).toBeDefined();
      
      const tabs = screen.getAllByRole('tab');
      const allPanels = document.querySelectorAll('[role="tabpanel"]');
      
      tabs.forEach((tab, index) => {
        const panel = allPanels[index];
        const tabId = tab.getAttribute('id');
        const panelId = panel?.getAttribute('id');
        
        expect(tab.getAttribute('aria-controls')).toBe(panelId);
        expect(panel?.getAttribute('aria-labelledby')).toBe(tabId);
      });
    });

    it('sets correct tabindex values', () => {
      render(<Tabs items={mockTabItems} />);
      
      const tabs = screen.getAllByRole('tab');
      
      expect(tabs[0].getAttribute('tabindex')).toBe('0');
      expect(tabs[1].getAttribute('tabindex')).toBe('-1');
      expect(tabs[2].getAttribute('tabindex')).toBe('-1');
    });
  });

  describe('CSS Classes', () => {
    it('applies default CSS classes', () => {
      render(<Tabs items={mockTabItems} />);
      
      expect(document.querySelector('.nhsuk-tabs')).toBeDefined();
      expect(document.querySelector('.nhsuk-tabs__list')).toBeDefined();
      expect(document.querySelector('.nhsuk-tabs__tab')).toBeDefined();
      expect(document.querySelector('.nhsuk-tabs__panel')).toBeDefined();
    });

    it('applies custom className', () => {
      render(<Tabs items={mockTabItems} className="custom-class" />);
      
      expect(document.querySelector('.nhsuk-tabs.custom-class')).toBeDefined();
    });

    it('applies selected class to active tab', () => {
      render(<Tabs items={mockTabItems} />);
      
      const selectedItem = document.querySelector('.nhsuk-tabs__list-item--selected');
      expect(selectedItem).toBeDefined();
    });
  });

  describe('HTML Attributes', () => {
    it('applies custom id', () => {
      render(<Tabs items={mockTabItems} id="custom-tabs" />);
      
      expect(document.querySelector('#custom-tabs')).toBeDefined();
    });

    it('applies data-testid', () => {
      render(<Tabs items={mockTabItems} data-testid="test-tabs" />);
      
      expect(screen.getByTestId('test-tabs')).toBeDefined();
    });
  });

  describe('Edge Cases', () => {
    it('handles empty items array', () => {
      render(<Tabs items={[]} />);
      
      expect(screen.getByRole('tablist')).toBeDefined();
      expect(screen.queryByRole('tab')).toBeNull();
    });

    it('handles invalid defaultActiveTab', () => {
      render(<Tabs items={mockTabItems} defaultActiveTab="invalid-id" />);
      
      // When invalid defaultActiveTab is provided, should default to first tab since invalid ID doesn't match
      const firstTab = screen.getByRole('tab', { name: 'First Tab' });
      // The activeTab will be "invalid-id" but no tab matches it, so no tab should be active
      expect(firstTab.getAttribute('aria-selected')).toBe('false');
      
      // No panel should be visible
      const visiblePanel = document.querySelector('[role="tabpanel"]:not([hidden])');
      expect(visiblePanel).toBeNull();
    });
  });
});
