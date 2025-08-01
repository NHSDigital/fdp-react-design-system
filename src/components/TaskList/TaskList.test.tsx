import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';
import { TaskList } from './TaskList';

describe('TaskList', () => {
  const basicItems = [
    {
      title: { text: 'Check eligibility' },
      href: '#',
      status: {
        text: 'Completed',
        classes: 'nhsuk-task-list__status--completed'
      }
    },
    {
      title: { text: 'Personal details' },
      href: '#',
      status: {
        tag: {
          text: 'Incomplete',
          color: 'blue' as const
        }
      }
    }
  ];

  describe('Basic functionality', () => {
    it('should render a task list with items', () => {
      render(<TaskList items={basicItems} />);
      
      expect(screen.getByRole('list')).toBeInTheDocument();
      expect(screen.getByText('Check eligibility')).toBeInTheDocument();
      expect(screen.getByText('Personal details')).toBeInTheDocument();
    });

    it('should render as unordered list element', () => {
      render(<TaskList items={basicItems} />);
      
      const taskList = screen.getByRole('list');
      expect(taskList.tagName).toBe('UL');
    });

    it('should apply correct default classes', () => {
      render(<TaskList items={basicItems} />);
      
      const taskList = screen.getByRole('list');
      expect(taskList).toHaveClass('nhsuk-task-list');
    });

    it('should render correct number of task items', () => {
      render(<TaskList items={basicItems} />);
      
      const listItems = screen.getAllByRole('listitem');
      expect(listItems).toHaveLength(2);
    });
  });

  describe('Task items with links', () => {
    it('should render task items with links when href is provided', () => {
      render(<TaskList items={basicItems} />);
      
      const eligibilityLink = screen.getByRole('link', { name: /check eligibility/i });
      const detailsLink = screen.getByRole('link', { name: /personal details/i });
      
      expect(eligibilityLink).toHaveAttribute('href', '#');
      expect(detailsLink).toHaveAttribute('href', '#');
    });

    it('should apply link classes to linked items', () => {
      render(<TaskList items={basicItems} />);
      
      const eligibilityLink = screen.getByRole('link', { name: /check eligibility/i });
      expect(eligibilityLink).toHaveClass('nhsuk-task-list__link');
    });

    it('should apply with-link class to items with links', () => {
      render(<TaskList items={basicItems} />);
      
      const listItems = screen.getAllByRole('listitem');
      listItems.forEach(item => {
        expect(item).toHaveClass('nhsuk-task-list__item--with-link');
      });
    });

    it('should not render links for items without href', () => {
      const itemsWithoutLinks = [
        {
          title: { text: 'Submit application' },
          status: {
            text: 'Cannot start yet',
            classes: 'nhsuk-task-list__status--cannot-start-yet'
          }
        }
      ];

      render(<TaskList items={itemsWithoutLinks} />);
      
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
      expect(screen.getByText('Submit application')).toBeInTheDocument();
    });

    it('should not apply with-link class to items without links', () => {
      const itemsWithoutLinks = [
        {
          title: { text: 'Submit application' },
          status: { text: 'Cannot start yet' }
        }
      ];

      render(<TaskList items={itemsWithoutLinks} />);
      
      const listItem = screen.getByRole('listitem');
      expect(listItem).not.toHaveClass('nhsuk-task-list__item--with-link');
    });
  });

  describe('Task titles', () => {
    it('should render task titles as text', () => {
      render(<TaskList items={basicItems} />);
      
      expect(screen.getByText('Check eligibility')).toBeInTheDocument();
      expect(screen.getByText('Personal details')).toBeInTheDocument();
    });

    it('should render task titles as HTML when provided', () => {
      const itemsWithHtmlTitles = [
        {
          title: { html: '<strong>Important</strong> task' },
          href: '#',
          status: { text: 'Completed' }
        }
      ];

      render(<TaskList items={itemsWithHtmlTitles} />);
      
      expect(screen.getByText('Important')).toBeInTheDocument();
      expect(screen.getByText('task')).toBeInTheDocument();
      expect(screen.getByRole('strong')).toHaveTextContent('Important');
    });

    it('should prioritize HTML over text in titles', () => {
      const itemsWithBoth = [
        {
          title: { 
            text: 'This should not appear',
            html: '<em>This should appear</em>'
          },
          href: '#',
          status: { text: 'Completed' }
        }
      ];

      render(<TaskList items={itemsWithBoth} />);
      
      expect(screen.queryByText('This should not appear')).not.toBeInTheDocument();
      expect(screen.getByText('This should appear')).toBeInTheDocument();
      expect(screen.getByRole('emphasis')).toHaveTextContent('This should appear');
    });

    it('should apply custom classes to titles', () => {
      const itemsWithTitleClasses = [
        {
          title: { 
            text: 'Custom title',
            classes: 'custom-title-class'
          },
          href: '#',
          status: { text: 'Completed' }
        }
      ];

      render(<TaskList items={itemsWithTitleClasses} />);
      
      const link = screen.getByRole('link', { name: /custom title/i });
      expect(link).toHaveClass('custom-title-class');
    });
  });

  describe('Task hints', () => {
    it('should render hint text when provided', () => {
      const itemsWithHints = [
        {
          title: { text: 'Personal details' },
          hint: { text: 'Your name, address and contact details' },
          href: '#',
          status: { text: 'Incomplete' }
        }
      ];

      render(<TaskList items={itemsWithHints} />);
      
      expect(screen.getByText('Your name, address and contact details')).toBeInTheDocument();
    });

    it('should render hint HTML when provided', () => {
      const itemsWithHtmlHints = [
        {
          title: { text: 'Personal details' },
          hint: { html: 'Your <strong>name</strong>, address and contact details' },
          href: '#',
          status: { text: 'Incomplete' }
        }
      ];

      render(<TaskList items={itemsWithHtmlHints} />);
      
      // Use getByText with a function matcher that looks across multiple nodes
      expect(screen.getByText((content, element) => {
        return element?.textContent === 'Your name, address and contact details';
      })).toBeInTheDocument();
      expect(screen.getByRole('strong')).toHaveTextContent('name');
    });

    it('should prioritize HTML over text in hints', () => {
      const itemsWithBothHints = [
        {
          title: { text: 'Personal details' },
          hint: { 
            text: 'This should not appear',
            html: '<em>This should appear</em>'
          },
          href: '#',
          status: { text: 'Incomplete' }
        }
      ];

      render(<TaskList items={itemsWithBothHints} />);
      
      expect(screen.queryByText('This should not appear')).not.toBeInTheDocument();
      expect(screen.getByText('This should appear')).toBeInTheDocument();
      expect(screen.getByRole('emphasis')).toHaveTextContent('This should appear');
    });

    it('should apply hint class to hint elements', () => {
      const itemsWithHints = [
        {
          title: { text: 'Personal details' },
          hint: { text: 'Your details' },
          href: '#',
          status: { text: 'Incomplete' }
        }
      ];

      render(<TaskList items={itemsWithHints} />);
      
      const hintElement = document.querySelector('.nhsuk-task-list__hint');
      expect(hintElement).toBeInTheDocument();
      expect(hintElement).toHaveTextContent('Your details');
    });

    it('should not render hint elements when no hint provided', () => {
      render(<TaskList items={basicItems} />);
      
      const hintElement = document.querySelector('.nhsuk-task-list__hint');
      expect(hintElement).not.toBeInTheDocument();
    });
  });

  describe('Task statuses', () => {
    it('should render status text when provided', () => {
      render(<TaskList items={basicItems} />);
      
      expect(screen.getByText('Completed')).toBeInTheDocument();
    });

    it('should render status HTML when provided', () => {
      const itemsWithHtmlStatus = [
        {
          title: { text: 'Task with HTML status' },
          href: '#',
          status: { html: '<strong>Important</strong> status' }
        }
      ];

      render(<TaskList items={itemsWithHtmlStatus} />);
      
      expect(screen.getByText('Important')).toBeInTheDocument();
      expect(screen.getByText('status')).toBeInTheDocument();
      expect(screen.getByRole('strong')).toHaveTextContent('Important');
    });

    it('should render status tags when provided', () => {
      render(<TaskList items={basicItems} />);
      
      expect(screen.getByText('Incomplete')).toBeInTheDocument();
      
      // Check that the tag has the correct class
      const tagElement = document.querySelector('.nhsuk-tag');
      expect(tagElement).toBeInTheDocument();
      expect(tagElement).toHaveClass('nhsuk-tag--blue');
    });

    it('should prioritize tags over text and HTML in status', () => {
      const itemsWithPriorityStatus = [
        {
          title: { text: 'Priority test' },
          href: '#',
          status: {
            tag: { text: 'Tag status' },
            text: 'This should not appear',
            html: '<em>This should also not appear</em>'
          }
        }
      ];

      render(<TaskList items={itemsWithPriorityStatus} />);
      
      expect(screen.getByText('Tag status')).toBeInTheDocument();
      expect(screen.queryByText('This should not appear')).not.toBeInTheDocument();
      expect(screen.queryByText('This should also not appear')).not.toBeInTheDocument();
    });

    it('should apply custom status classes', () => {
      const itemsWithStatusClasses = [
        {
          title: { text: 'Custom status' },
          status: {
            text: 'Cannot start yet',
            classes: 'nhsuk-task-list__status--cannot-start-yet'
          }
        }
      ];

      render(<TaskList items={itemsWithStatusClasses} />);
      
      const statusElement = document.querySelector('.nhsuk-task-list__status--cannot-start-yet');
      expect(statusElement).toBeInTheDocument();
      expect(statusElement).toHaveTextContent('Cannot start yet');
    });
  });

  describe('Accessibility', () => {
    it('should generate correct IDs for hints and statuses', () => {
      const itemsWithHints = [
        {
          title: { text: 'Task with hint' },
          hint: { text: 'This is a hint' },
          href: '#',
          status: { text: 'Incomplete' }
        }
      ];

      render(<TaskList items={itemsWithHints} idPrefix="custom-prefix" />);
      
      const hintElement = document.querySelector('#custom-prefix-1-hint');
      const statusElement = document.querySelector('#custom-prefix-1-status');
      
      expect(hintElement).toBeInTheDocument();
      expect(statusElement).toBeInTheDocument();
    });

    it('should use default ID prefix when not provided', () => {
      const itemsWithHints = [
        {
          title: { text: 'Task with hint' },
          hint: { text: 'This is a hint' },
          href: '#',
          status: { text: 'Incomplete' }
        }
      ];

      render(<TaskList items={itemsWithHints} />);
      
      const hintElement = document.querySelector('#task-list-1-hint');
      const statusElement = document.querySelector('#task-list-1-status');
      
      expect(hintElement).toBeInTheDocument();
      expect(statusElement).toBeInTheDocument();
    });

    it('should connect task links to hints and statuses via aria-describedby', () => {
      const itemsWithHints = [
        {
          title: { text: 'Task with hint' },
          hint: { text: 'This is a hint' },
          href: '#',
          status: { text: 'Incomplete' }
        }
      ];

      render(<TaskList items={itemsWithHints} />);
      
      const link = screen.getByRole('link', { name: /task with hint/i });
      expect(link).toHaveAttribute('aria-describedby', 'task-list-1-hint task-list-1-status');
    });

    it('should connect task links to status only when no hint present', () => {
      render(<TaskList items={basicItems} />);
      
      const link = screen.getByRole('link', { name: /check eligibility/i });
      expect(link).toHaveAttribute('aria-describedby', 'task-list-1-status');
    });

    it('should have correct semantic structure', () => {
      render(<TaskList items={basicItems} />);
      
      const list = screen.getByRole('list');
      const listItems = screen.getAllByRole('listitem');
      
      expect(list).toBeInTheDocument();
      expect(listItems).toHaveLength(2);
    });
  });

  describe('Custom styling and attributes', () => {
    it('should apply custom className', () => {
      render(<TaskList items={basicItems} className="custom-task-list" />);
      
      const taskList = screen.getByRole('list');
      expect(taskList).toHaveClass('custom-task-list');
      expect(taskList).toHaveClass('nhsuk-task-list');
    });

    it('should apply custom id', () => {
      render(<TaskList items={basicItems} id="custom-task-list-id" />);
      
      const taskList = screen.getByRole('list');
      expect(taskList).toHaveAttribute('id', 'custom-task-list-id');
    });

    it('should apply custom item classes', () => {
      const itemsWithClasses = [
        {
          title: { text: 'Custom item' },
          status: { text: 'Completed' },
          classes: 'custom-item-class'
        }
      ];

      render(<TaskList items={itemsWithClasses} />);
      
      const listItem = screen.getByRole('listitem');
      expect(listItem).toHaveClass('custom-item-class');
      expect(listItem).toHaveClass('nhsuk-task-list__item');
    });

    it('should pass through additional props', () => {
      render(
        <TaskList
          items={basicItems}
          data-testid="task-list"
          aria-label="Application tasks"
        />
      );
      
      const taskList = screen.getByTestId('task-list');
      expect(taskList).toHaveAttribute('aria-label', 'Application tasks');
    });
  });

  describe('Edge cases', () => {
    it('should handle empty items array', () => {
      render(<TaskList items={[]} />);
      
      const taskList = screen.getByRole('list');
      expect(taskList).toBeInTheDocument();
      expect(taskList.children).toHaveLength(0);
    });

    it('should handle items with empty titles', () => {
      const itemsWithEmptyTitles = [
        {
          title: { text: '' },
          status: { text: 'Status' }
        }
      ];

      render(<TaskList items={itemsWithEmptyTitles} />);
      
      const listItem = screen.getByRole('listitem');
      expect(listItem).toBeInTheDocument();
    });

    it('should handle items with empty statuses', () => {
      const itemsWithEmptyStatus = [
        {
          title: { text: 'Task' },
          status: { text: '' }
        }
      ];

      render(<TaskList items={itemsWithEmptyStatus} />);
      
      const listItem = screen.getByRole('listitem');
      expect(listItem).toBeInTheDocument();
    });

    it('should handle mixed content types', () => {
      const mixedItems = [
        {
          title: { text: 'Text title' },
          hint: { text: 'Text hint' },
          href: '#',
          status: { text: 'Text status' }
        },
        {
          title: { html: '<strong>HTML title</strong>' },
          hint: { html: '<em>HTML hint</em>' },
          status: { html: '<span>HTML status</span>' }
        },
        {
          title: { text: 'Tag status' },
          status: {
            tag: { text: 'Tag', color: 'blue' as const }
          }
        }
      ];

      render(<TaskList items={mixedItems} />);
      
      expect(screen.getByText('Text title')).toBeInTheDocument();
      expect(screen.getByText('HTML title')).toBeInTheDocument();
      expect(screen.getByText('Tag status')).toBeInTheDocument();
    });
  });

  describe('Ref forwarding', () => {
    it('should forward ref to ul element', () => {
      const ref = React.createRef<HTMLUListElement>();
      render(<TaskList ref={ref} items={basicItems} />);
      
      expect(ref.current).toBeInstanceOf(HTMLUListElement);
      expect(ref.current?.tagName).toBe('UL');
    });
  });
});
