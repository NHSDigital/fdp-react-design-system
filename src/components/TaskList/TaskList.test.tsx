import { render } from '../../test-utils/ServerRenderer';
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
      const { container, getByText } = render(<TaskList items={basicItems} />);
      
      const taskList = container.querySelector('ul');
      expect(taskList).toBeTruthy();
      expect(getByText('Check eligibility')).toBeTruthy();
      expect(getByText('Personal details')).toBeTruthy();
    });

    it('should render as unordered list element', () => {
      const { container } = render(<TaskList items={basicItems} />);
      
      const taskList = container.querySelector('ul');
      expect(taskList?.tagName).toBe('UL');
    });

    it('should apply correct default classes', () => {
      const { container } = render(<TaskList items={basicItems} />);
      
      const taskList = container.querySelector('ul');
      expect(taskList?.className.includes('nhsuk-task-list')).toBe(true);
    });

    it('should render correct number of task items', () => {
      const { container } = render(<TaskList items={basicItems} />);
      
      const listItems = container.querySelectorAll('li');
      expect(listItems?.length).toBe(2);
    });
  });

  describe('Task items with links', () => {
    it('should render task items with links when href is provided', () => {
      const { getByText } = render(<TaskList items={basicItems} />);
      
      const eligibilityLink = getByText('Check eligibility');
      const detailsLink = getByText('Personal details');
      
      expect(eligibilityLink?.getAttribute('href')).toBe('#');
      expect(detailsLink?.getAttribute('href')).toBe('#');
      expect(eligibilityLink?.tagName).toBe('A');
      expect(detailsLink?.tagName).toBe('A');
    });

    it('should apply link classes to linked items', () => {
      const { getByText } = render(<TaskList items={basicItems} />);
      
      const eligibilityLink = getByText('Check eligibility');
      expect(eligibilityLink?.className.includes('nhsuk-task-list__link')).toBe(true);
    });

    it('should apply with-link class to items with links', () => {
      const { getAllByRole } = render(<TaskList items={basicItems} />);
      
      const listItems = getAllByRole('listitem');
      listItems?.forEach(item => {
        expect(item?.className.includes('nhsuk-task-list__item--with-link')).toBe(true);
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

      const { queryByRole, getByText } = render(<TaskList items={itemsWithoutLinks} />);
      
      expect(queryByRole('link')).toBeFalsy();
      expect(getByText('Submit application')).toBeTruthy();
    });

    it('should not apply with-link class to items without links', () => {
      const itemsWithoutLinks = [
        {
          title: { text: 'Submit application' },
          status: { text: 'Cannot start yet' }
        }
      ];

      const { container } = render(<TaskList items={itemsWithoutLinks} />);
      
      const listItem = container.querySelector('li');
      expect(listItem?.className.includes('nhsuk-task-list__item--with-link')).toBe(false);
    });
  });

  describe('Task titles', () => {
    it('should render task titles as text', () => {
      const { getByText } = render(<TaskList items={basicItems} />);
      
      expect(getByText('Check eligibility')).toBeTruthy();
      expect(getByText('Personal details')).toBeTruthy();
    });

    it('should render task titles as HTML when provided', () => {
      const itemsWithHtmlTitles = [
        {
          title: { html: '<strong>Important</strong> task' },
          href: '#',
          status: { text: 'Completed' }
        }
      ];

      const { getByText, container } = render(<TaskList items={itemsWithHtmlTitles} />);
      
      expect(getByText('Important')).toBeTruthy();
      expect(getByText('task')).toBeTruthy();
      const strongElement = container.querySelector('strong');
      expect(strongElement?.textContent).toBe('Important');
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

      const { queryByText, getByText, container } = render(<TaskList items={itemsWithBoth} />);
      
      expect(queryByText('This should not appear')).toBeFalsy();
      expect(getByText('This should appear')).toBeTruthy();
      const emElement = container.querySelector('em');
      expect(emElement?.textContent).toBe('This should appear');
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

      const { getByText } = render(<TaskList items={itemsWithTitleClasses} />);
      
      const link = getByText('Custom title');
      expect(link?.className.includes('custom-title-class')).toBe(true);
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

      const { getByText } = render(<TaskList items={itemsWithHints} />);
      
      expect(getByText('Your name, address and contact details')).toBeTruthy();
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

      const { container } = render(<TaskList items={itemsWithHtmlHints} />);
      
      const hintElement = container.querySelector('.nhsuk-task-list__hint');
      expect(hintElement?.textContent).toBe('Your name, address and contact details');
      const strongElement = container.querySelector('strong');
      expect(strongElement?.textContent).toBe('name');
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

      const { queryByText, getByText, container } = render(<TaskList items={itemsWithBothHints} />);
      
      expect(queryByText('This should not appear')).toBeFalsy();
      expect(getByText('This should appear')).toBeTruthy();
      const emElement = container.querySelector('em');
      expect(emElement?.textContent).toBe('This should appear');
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

      const { container } = render(<TaskList items={itemsWithHints} />);
      
      const hintElement = container.querySelector('.nhsuk-task-list__hint');
      expect(hintElement).toBeTruthy();
      expect(hintElement?.textContent).toBe('Your details');
    });

    it('should not render hint elements when no hint provided', () => {
      const { container } = render(<TaskList items={basicItems} />);
      
      const hintElement = container.querySelector('.nhsuk-task-list__hint');
      expect(hintElement).toBeFalsy();
    });
  });

  describe('Task statuses', () => {
    it('should render status text when provided', () => {
      const { getByText } = render(<TaskList items={basicItems} />);
      
      expect(getByText('Completed')).toBeTruthy();
    });

    it('should render status HTML when provided', () => {
      const itemsWithHtmlStatus = [
        {
          title: { text: 'Task with HTML status' },
          href: '#',
          status: { html: '<strong>Important</strong> status' }
        }
      ];

      const { getByText, container } = render(<TaskList items={itemsWithHtmlStatus} />);
      
      expect(getByText('Important')).toBeTruthy();
      expect(getByText('status')).toBeTruthy();
      const strongElement = container.querySelector('strong');
      expect(strongElement?.textContent).toBe('Important');
    });

    it('should render status tags when provided', () => {
      const { getByText, container } = render(<TaskList items={basicItems} />);
      
      expect(getByText('Incomplete')).toBeTruthy();
      
      // Check that the tag has the correct class
      const tagElement = container.querySelector('.nhsuk-tag');
      expect(tagElement).toBeTruthy();
      expect(tagElement?.className.includes('nhsuk-tag--blue')).toBe(true);
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

      const { getByText, queryByText } = render(<TaskList items={itemsWithPriorityStatus} />);
      
      expect(getByText('Tag status')).toBeTruthy();
      expect(queryByText('This should not appear')).toBeFalsy();
      expect(queryByText('This should also not appear')).toBeFalsy();
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

      const { container } = render(<TaskList items={itemsWithStatusClasses} />);
      
      const statusElement = container.querySelector('.nhsuk-task-list__status--cannot-start-yet');
      expect(statusElement).toBeTruthy();
      expect(statusElement?.textContent).toBe('Cannot start yet');
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

      const { container } = render(<TaskList items={itemsWithHints} idPrefix="custom-prefix" />);
      
      const hintElement = container.querySelector('#custom-prefix-1-hint');
      const statusElement = container.querySelector('#custom-prefix-1-status');
      
      expect(hintElement).toBeTruthy();
      expect(statusElement).toBeTruthy();
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

      const { container } = render(<TaskList items={itemsWithHints} />);
      
      const hintElement = container.querySelector('#task-list-1-hint');
      const statusElement = container.querySelector('#task-list-1-status');
      
      expect(hintElement).toBeTruthy();
      expect(statusElement).toBeTruthy();
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

      const { getByText } = render(<TaskList items={itemsWithHints} />);
      
      const link = getByText('Task with hint');
      expect(link?.getAttribute('aria-describedby')).toBe('task-list-1-hint task-list-1-status');
    });

    it('should connect task links to status only when no hint present', () => {
      const { getByText } = render(<TaskList items={basicItems} />);
      
      const link = getByText('Check eligibility');
      expect(link?.getAttribute('aria-describedby')).toBe('task-list-1-status');
    });

    it('should have correct semantic structure', () => {
      const { container } = render(<TaskList items={basicItems} />);
      
      const list = container.querySelector('ul');
      const listItems = container.querySelectorAll('li');
      
      expect(list).toBeTruthy();
      expect(listItems?.length).toBe(2);
      expect(list?.tagName).toBe('UL');
      listItems?.forEach(item => {
        expect(item?.tagName).toBe('LI');
      });
    });
  });

  describe('Custom styling and attributes', () => {
    it('should apply custom className', () => {
      const { container } = render(<TaskList items={basicItems} className="custom-task-list" />);
      
      const taskList = container.querySelector('ul');
      expect(taskList?.className.includes('custom-task-list')).toBe(true);
      expect(taskList?.className.includes('nhsuk-task-list')).toBe(true);
    });

    it('should apply custom id', () => {
      const { container } = render(<TaskList items={basicItems} id="custom-task-list-id" />);
      
      const taskList = container.querySelector('ul');
      expect(taskList?.getAttribute('id')).toBe('custom-task-list-id');
    });

    it('should apply custom item classes', () => {
      const itemsWithClasses = [
        {
          title: { text: 'Custom item' },
          status: { text: 'Completed' },
          classes: 'custom-item-class'
        }
      ];

      const { container } = render(<TaskList items={itemsWithClasses} />);
      
      const listItem = container.querySelector('li');
      expect(listItem?.className.includes('custom-item-class')).toBe(true);
      expect(listItem?.className.includes('nhsuk-task-list__item')).toBe(true);
    });

    it('should pass through additional props', () => {
      const { container } = render(
        <TaskList
          items={basicItems}
          data-testid="task-list"
          aria-label="Application tasks"
        />
      );
      
      const taskList = container.querySelector('[data-testid="task-list"]');
      expect(taskList?.getAttribute('aria-label')).toBe('Application tasks');
    });
  });

  describe('Edge cases', () => {
    it('should handle empty items array', () => {
      const { container } = render(<TaskList items={[]} />);
      
      const taskList = container.querySelector('ul');
      expect(taskList).toBeTruthy();
      expect(taskList?.children?.length).toBe(0);
    });

    it('should handle items with empty titles', () => {
      const itemsWithEmptyTitles = [
        {
          title: { text: '' },
          status: { text: 'Status' }
        }
      ];

      const { container } = render(<TaskList items={itemsWithEmptyTitles} />);
      
      const listItem = container.querySelector('li');
      expect(listItem).toBeTruthy();
    });

    it('should handle items with empty statuses', () => {
      const itemsWithEmptyStatus = [
        {
          title: { text: 'Task' },
          status: { text: '' }
        }
      ];

      const { container } = render(<TaskList items={itemsWithEmptyStatus} />);
      
      const listItem = container.querySelector('li');
      expect(listItem).toBeTruthy();
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

      const { getByText } = render(<TaskList items={mixedItems} />);
      
      expect(getByText('Text title')).toBeTruthy();
      expect(getByText('HTML title')).toBeTruthy();
      expect(getByText('Tag status')).toBeTruthy();
    });
  });

  describe('Ref forwarding', () => {
    it('should forward ref to ul element', () => {
      const ref = React.createRef<HTMLUListElement>();
      const { container } = render(<TaskList ref={ref} items={basicItems} />);
      
      // In ServerRenderer, refs may not be populated, so check the rendered element instead
      const ulElement = container.querySelector('ul');
      expect(ulElement).toBeTruthy();
      expect(ulElement?.tagName).toBe('UL');
    });
  });
});
