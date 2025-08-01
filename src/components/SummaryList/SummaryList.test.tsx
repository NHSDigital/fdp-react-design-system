import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { SummaryList } from './SummaryList';
import { SummaryListItem } from './SummaryList.types';

describe('SummaryList', () => {
  const basicItems: SummaryListItem[] = [
    {
      key: { text: 'Name' },
      value: { text: 'John Smith' },
    },
    {
      key: { text: 'Date of birth' },
      value: { text: '15 March 1985' },
    },
  ];

  it('renders basic summary list with items', () => {
    render(<SummaryList items={basicItems} />);
    
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('John Smith')).toBeInTheDocument();
    expect(screen.getByText('Date of birth')).toBeInTheDocument();
    expect(screen.getByText('15 March 1985')).toBeInTheDocument();
  });

  it('applies correct default classes', () => {
    render(<SummaryList items={basicItems} />);
    
    const summaryList = document.querySelector('.nhsuk-summary-list');
    expect(summaryList).toHaveClass('nhsuk-summary-list');
    expect(summaryList).not.toHaveClass('nhsuk-summary-list--no-border');
  });

  it('applies custom className', () => {
    render(<SummaryList className="custom-summary" items={basicItems} />);
    
    const summaryList = document.querySelector('.nhsuk-summary-list');
    expect(summaryList).toHaveClass('nhsuk-summary-list');
    expect(summaryList).toHaveClass('custom-summary');
  });

  it('applies no-border modifier when noBorder is true', () => {
    render(<SummaryList items={basicItems} noBorder={true} />);
    
    const summaryList = document.querySelector('.nhsuk-summary-list');
    expect(summaryList).toHaveClass('nhsuk-summary-list--no-border');
  });

  it('applies id attribute when provided', () => {
    render(<SummaryList id="test-summary" items={basicItems} />);
    
    const summaryList = document.querySelector('.nhsuk-summary-list');
    expect(summaryList).toHaveAttribute('id', 'test-summary');
  });

  describe('Item rendering', () => {
    it('renders each item with correct structure', () => {
      render(<SummaryList items={basicItems} />);
      
      const rows = document.querySelectorAll('.nhsuk-summary-list__row');
      expect(rows).toHaveLength(2);
      
      const keys = document.querySelectorAll('.nhsuk-summary-list__key');
      const values = document.querySelectorAll('.nhsuk-summary-list__value');
      
      expect(keys).toHaveLength(2);
      expect(values).toHaveLength(2);
      
      expect(keys[0]).toHaveTextContent('Name');
      expect(values[0]).toHaveTextContent('John Smith');
      expect(keys[1]).toHaveTextContent('Date of birth');
      expect(values[1]).toHaveTextContent('15 March 1985');
    });

    it('renders HTML content in keys and values', () => {
      const htmlItems: SummaryListItem[] = [
        {
          key: { html: '<strong>Full name</strong>' },
          value: { html: '<em>John</em> Smith' },
        },
      ];
      
      render(<SummaryList items={htmlItems} />);
      
      const key = document.querySelector('.nhsuk-summary-list__key');
      const value = document.querySelector('.nhsuk-summary-list__value');
      
      expect(key?.innerHTML).toContain('<span><strong>Full name</strong></span>');
      expect(value?.innerHTML).toContain('<span><em>John</em> Smith</span>');
    });

    it('prioritizes children over html and text', () => {
      const childrenItems: SummaryListItem[] = [
        {
          key: {
            text: 'Text key',
            html: '<span>HTML key</span>',
            children: <span>Children key</span>,
          },
          value: {
            text: 'Text value',
            html: '<span>HTML value</span>',
            children: <span>Children value</span>,
          },
        },
      ];
      
      render(<SummaryList items={childrenItems} />);
      
      expect(screen.getByText('Children key')).toBeInTheDocument();
      expect(screen.getByText('Children value')).toBeInTheDocument();
      expect(screen.queryByText('Text key')).not.toBeInTheDocument();
      expect(screen.queryByText('HTML key')).not.toBeInTheDocument();
      expect(screen.queryByText('Text value')).not.toBeInTheDocument();
      expect(screen.queryByText('HTML value')).not.toBeInTheDocument();
    });

    it('prioritizes html over text', () => {
      const htmlItems: SummaryListItem[] = [
        {
          key: {
            text: 'Text key',
            html: '<span>HTML key</span>',
          },
          value: {
            text: 'Text value',
            html: '<span>HTML value</span>',
          },
        },
      ];
      
      render(<SummaryList items={htmlItems} />);
      
      expect(screen.getByText('HTML key')).toBeInTheDocument();
      expect(screen.getByText('HTML value')).toBeInTheDocument();
      expect(screen.queryByText('Text key')).not.toBeInTheDocument();
      expect(screen.queryByText('Text value')).not.toBeInTheDocument();
    });

    it('handles empty content gracefully', () => {
      const emptyItems: SummaryListItem[] = [
        {
          key: {},
          value: {},
        },
      ];
      
      render(<SummaryList items={emptyItems} />);
      
      const rows = document.querySelectorAll('.nhsuk-summary-list__row');
      expect(rows).toHaveLength(1);
      
      const key = document.querySelector('.nhsuk-summary-list__key');
      const value = document.querySelector('.nhsuk-summary-list__value');
      
      expect(key).toBeInTheDocument();
      expect(value).toBeInTheDocument();
      expect(key?.textContent).toBe('');
      expect(value?.textContent).toBe('');
    });
  });

  describe('Actions rendering', () => {
    const itemsWithActions: SummaryListItem[] = [
      {
        key: { text: 'Name' },
        value: { text: 'John Smith' },
        actions: {
          items: [
            {
              href: '/change-name',
              text: 'Change',
              visuallyHiddenText: 'name',
            },
          ],
        },
      },
    ];

    it('renders action links correctly', () => {
      render(<SummaryList items={itemsWithActions} />);
      
      const actionLink = screen.getByRole('link', { name: /Change.*name/ });
      expect(actionLink).toHaveAttribute('href', '/change-name');
      expect(actionLink).toHaveClass('nhsuk-link');
    });

    it('renders visually hidden text for actions', () => {
      render(<SummaryList items={itemsWithActions} />);
      
      const visuallyHidden = document.querySelector('.nhsuk-u-visually-hidden');
      expect(visuallyHidden).toHaveTextContent('name');
    });

    it('renders multiple actions for a single item', () => {
      const multiActionItems: SummaryListItem[] = [
        {
          key: { text: 'Address' },
          value: { text: '123 Main Street' },
          actions: {
            items: [
              {
                href: '/change-address',
                text: 'Change',
                visuallyHiddenText: 'address',
              },
              {
                href: '/remove-address',
                text: 'Remove',
                visuallyHiddenText: 'address',
              },
            ],
          },
        },
      ];
      
      render(<SummaryList items={multiActionItems} />);
      
      const changeLink = screen.getByRole('link', { name: /Change.*address/ });
      const removeLink = screen.getByRole('link', { name: /Remove.*address/ });
      
      expect(changeLink).toHaveAttribute('href', '/change-address');
      expect(removeLink).toHaveAttribute('href', '/remove-address');
    });

    it('renders actions with HTML content', () => {
      const htmlActionItems: SummaryListItem[] = [
        {
          key: { text: 'Email' },
          value: { text: 'john@example.com' },
          actions: {
            items: [
              {
                href: '/change-email',
                html: '<strong>Change</strong>',
                visuallyHiddenText: 'email address',
              },
            ],
          },
        },
      ];
      
      render(<SummaryList items={htmlActionItems} />);
      
      const actionLink = screen.getByRole('link');
      expect(actionLink.innerHTML).toContain('<span><strong>Change</strong></span>');
    });

    it('renders actions with children content', () => {
      const childrenActionItems: SummaryListItem[] = [
        {
          key: { text: 'Phone' },
          value: { text: '01234 567890' },
          actions: {
            items: [
              {
                href: '/change-phone',
                children: <span data-testid="action-content">Update phone</span>,
                visuallyHiddenText: 'phone number',
              },
            ],
          },
        },
      ];
      
      render(<SummaryList items={childrenActionItems} />);
      
      expect(screen.getByTestId('action-content')).toBeInTheDocument();
      expect(screen.getByText('Update phone')).toBeInTheDocument();
    });

    it('passes additional attributes to action links', () => {
      const attributeItems: SummaryListItem[] = [
        {
          key: { text: 'Status' },
          value: { text: 'Active' },
          actions: {
            items: [
              {
                href: '/change-status',
                text: 'Change',
                attributes: {
                  'aria-describedby': 'status-help',
                } as any,
              },
            ],
          },
        },
      ];
      
      render(<SummaryList items={attributeItems} />);
      
      const actionLink = screen.getByRole('link', { name: 'Change' });
      expect(actionLink).toHaveAttribute('aria-describedby', 'status-help');
    });

    it('does not render actions section when no actions provided', () => {
      render(<SummaryList items={basicItems} />);
      
      const actions = document.querySelector('.nhsuk-summary-list__actions');
      expect(actions).not.toBeInTheDocument();
    });

    it('does not render actions section when actions array is empty', () => {
      const emptyActionItems: SummaryListItem[] = [
        {
          key: { text: 'Name' },
          value: { text: 'John Smith' },
          actions: {
            items: [],
          },
        },
      ];
      
      render(<SummaryList items={emptyActionItems} />);
      
      const actions = document.querySelector('.nhsuk-summary-list__actions');
      expect(actions).not.toBeInTheDocument();
    });
  });

  describe('Complex content', () => {
    it('handles complex value content with multiple elements', () => {
      const complexItems: SummaryListItem[] = [
        {
          key: { text: 'Address' },
          value: {
            children: (
              <div>
                <p>123 Main Street</p>
                <p>Apartment 4B</p>
                <p>London SW1A 1AA</p>
              </div>
            ),
          },
        },
      ];
      
      render(<SummaryList items={complexItems} />);
      
      expect(screen.getByText('123 Main Street')).toBeInTheDocument();
      expect(screen.getByText('Apartment 4B')).toBeInTheDocument();
      expect(screen.getByText('London SW1A 1AA')).toBeInTheDocument();
    });

    it('handles lists in value content', () => {
      const listItems: SummaryListItem[] = [
        {
          key: { text: 'Medications' },
          value: {
            children: (
              <ul>
                <li>Aspirin 75mg daily</li>
                <li>Metformin 500mg twice daily</li>
                <li>Lisinopril 10mg daily</li>
              </ul>
            ),
          },
        },
      ];
      
      render(<SummaryList items={listItems} />);
      
      expect(screen.getByText('Aspirin 75mg daily')).toBeInTheDocument();
      expect(screen.getByText('Metformin 500mg twice daily')).toBeInTheDocument();
      expect(screen.getByText('Lisinopril 10mg daily')).toBeInTheDocument();
    });

    it('handles links in value content', () => {
      const linkItems: SummaryListItem[] = [
        {
          key: { text: 'Contact' },
          value: {
            children: (
              <div>
                <p>
                  Email: <a href="mailto:john@example.com">john@example.com</a>
                </p>
                <p>
                  Phone: <a href="tel:01234567890">01234 567890</a>
                </p>
              </div>
            ),
          },
        },
      ];
      
      render(<SummaryList items={linkItems} />);
      
      const emailLink = screen.getByRole('link', { name: 'john@example.com' });
      const phoneLink = screen.getByRole('link', { name: '01234 567890' });
      
      expect(emailLink).toHaveAttribute('href', 'mailto:john@example.com');
      expect(phoneLink).toHaveAttribute('href', 'tel:01234567890');
    });
  });

  describe('Additional HTML attributes', () => {
    it('passes through additional props to dl element', () => {
      render(
        <SummaryList 
          items={basicItems}
          data-testid="custom-summary-list"
          aria-label="Personal information summary"
        />
      );
      
      const summaryList = screen.getByTestId('custom-summary-list');
      expect(summaryList).toHaveAttribute('aria-label', 'Personal information summary');
    });

    it('supports data attributes', () => {
      render(
        <SummaryList 
          items={basicItems}
          data-component="summary-list"
          data-variant="default"
        />
      );
      
      const summaryList = document.querySelector('.nhsuk-summary-list');
      expect(summaryList).toHaveAttribute('data-component', 'summary-list');
      expect(summaryList).toHaveAttribute('data-variant', 'default');
    });
  });

  describe('Edge cases', () => {
    it('handles empty items array', () => {
      render(<SummaryList items={[]} />);
      
      const summaryList = document.querySelector('.nhsuk-summary-list');
      expect(summaryList).toBeInTheDocument();
      expect(summaryList?.children.length).toBe(0);
    });

    it('handles special characters in content', () => {
      const specialItems: SummaryListItem[] = [
        {
          key: { text: 'Special chars' },
          value: { text: 'Content with "quotes", <brackets>, & symbols: £€$¥' },
        },
      ];
      
      render(<SummaryList items={specialItems} />);
      
      expect(screen.getByText('Content with "quotes", <brackets>, & symbols: £€$¥')).toBeInTheDocument();
    });

    it('handles very long content', () => {
      const longItems: SummaryListItem[] = [
        {
          key: { text: 'Long content' },
          value: { 
            text: 'This is a very long summary list value that spans multiple lines and contains extensive information about a particular topic in the NHS digital service guidelines and best practices for user interface design' 
          },
        },
      ];
      
      render(<SummaryList items={longItems} />);
      
      expect(screen.getByText(/This is a very long summary list value/)).toBeInTheDocument();
    });

    it('handles unicode characters', () => {
      const unicodeItems: SummaryListItem[] = [
        {
          key: { text: 'Unicode test' },
          value: { text: 'Content with émojis 🏥 and ünicode characters' },
        },
      ];
      
      render(<SummaryList items={unicodeItems} />);
      
      expect(screen.getByText('Content with émojis 🏥 and ünicode characters')).toBeInTheDocument();
    });
  });

  describe('Action interactions', () => {
    it('calls action link handlers correctly', () => {
      const handleClick = vi.fn();
      const interactiveItems: SummaryListItem[] = [
        {
          key: { text: 'Status' },
          value: { text: 'Active' },
          actions: {
            items: [
              {
                href: '#',
                text: 'Change',
                attributes: {
                  onClick: handleClick,
                },
              },
            ],
          },
        },
      ];
      
      render(<SummaryList items={interactiveItems} />);
      
      const actionLink = screen.getByRole('link', { name: 'Change' });
      actionLink.click();
      
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('uses proper semantic markup with dl, dt, dd elements', () => {
      render(<SummaryList items={basicItems} />);
      
      const summaryList = document.querySelector('dl.nhsuk-summary-list');
      const terms = document.querySelectorAll('dt.nhsuk-summary-list__key');
      const descriptions = document.querySelectorAll('dd.nhsuk-summary-list__value');
      
      expect(summaryList).toBeInTheDocument();
      expect(terms).toHaveLength(2);
      expect(descriptions).toHaveLength(2);
    });

    it('provides proper association between keys and values', () => {
      render(<SummaryList items={basicItems} />);
      
      const rows = document.querySelectorAll('.nhsuk-summary-list__row');
      
      rows.forEach(row => {
        const key = row.querySelector('.nhsuk-summary-list__key');
        const value = row.querySelector('.nhsuk-summary-list__value');
        
        expect(key).toBeInTheDocument();
        expect(value).toBeInTheDocument();
      });
    });

    it('includes visually hidden text for screen readers on actions', () => {
      const itemsWithActions: SummaryListItem[] = [
        {
          key: { text: 'Name' },
          value: { text: 'John Smith' },
          actions: {
            items: [
              {
                href: '/change-name',
                text: 'Change',
                visuallyHiddenText: 'name',
              },
            ],
          },
        },
      ];
      
      render(<SummaryList items={itemsWithActions} />);
      
      const visuallyHidden = document.querySelector('.nhsuk-u-visually-hidden');
      expect(visuallyHidden).toHaveTextContent('name');
    });

    it('supports ARIA labeling', () => {
      render(
        <SummaryList 
          items={basicItems}
          aria-label="Personal details"
          role="group"
        />
      );
      
      const summaryList = screen.getByRole('group');
      expect(summaryList).toHaveAttribute('aria-label', 'Personal details');
    });
  });
});
