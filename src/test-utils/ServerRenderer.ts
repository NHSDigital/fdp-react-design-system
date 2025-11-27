import React from 'react';
import { renderToString } from 'react-dom/server';
// @ts-ignore - jsdom types not needed for runtime
import { JSDOM } from 'jsdom';

/**
 * React 19 compatible test utility for server-side rendering
 * Replaces @testing-library/react for React 19.1.0 compatibility
 */
export class ServerRenderer {
  static render(element: React.ReactElement): HTMLElement {
    const htmlString = renderToString(element);
    // Handle preload links that might be included at the start
    const cleanHtml = htmlString.replace(/^<link[^>]*\/?>/, '');
    // Provide a fixed URL so that jsdom enables localStorage/sessionStorage without SecurityError
    const dom = new JSDOM(`<!DOCTYPE html><html><body>${cleanHtml}</body></html>`, {
      url: 'https://test.local/'
    });
    
    // Always return the body as the container, not the first element
    // This ensures that querySelector('input') will work properly
    return dom.window.document.body as HTMLElement;
  }

  static getByRole(container: HTMLElement, role: string, options?: { level?: number, hidden?: boolean }): HTMLElement | null {
    // Check if the container itself has the role
    if (container.getAttribute('role') === role) {
      return container;
    }
    
    // Handle implicit roles for heading elements with level
    if (role === 'heading') {
      const level = options?.level;
      if (level) {
        const headings = container.querySelectorAll(`h${level}`);
        if (headings.length > 0) return headings[0] as HTMLElement;
      } else {
        // Return any heading if no level specified
        const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
        if (headings.length > 0) return headings[0] as HTMLElement;
      }
    }
    
    // Handle implicit roles for input elements
    if (role === 'textbox') {
      // Look for input elements with type text, email, password, etc.
      const inputs = container.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], input[type="search"], input[type="url"], input[type="tel"], input:not([type])');
      if (inputs.length > 0) return inputs[0] as HTMLElement;
      
      // Also check textarea elements
      const textareas = container.querySelectorAll('textarea');
      if (textareas.length > 0) return textareas[0] as HTMLElement;
    }
    
    if (role === 'button') {
      const buttons = container.querySelectorAll('button, input[type="button"], input[type="submit"]');
      if (buttons.length > 0) return buttons[0] as HTMLElement;
    }
    
    if (role === 'navigation') {
      const navs = container.querySelectorAll('nav');
      if (navs.length > 0) return navs[0] as HTMLElement;
    }
    
    if (role === 'banner') {
      const banners = container.querySelectorAll('header, [role="banner"]');
      if (banners.length > 0) return banners[0] as HTMLElement;
    }
    
    if (role === 'group') {
      const groups = container.querySelectorAll('fieldset, [role="group"]');
      if (groups.length > 0) return groups[0] as HTMLElement;
    }
    
    if (role === 'link') {
      const links = container.querySelectorAll('a[href], [role="link"]');
      if (links.length > 0) return links[0] as HTMLElement;
    }
    
    // Otherwise look for children with explicit role attribute
    return container.querySelector(`[role="${role}"]`);
  }

  static queryByRole(container: HTMLElement, role: string, options?: { level?: number, hidden?: boolean }): HTMLElement | null {
    return this.getByRole(container, role, options);
  }

  static getAllByRole(container: HTMLElement, role: string): HTMLElement[] {
    return Array.from(container.querySelectorAll(`[role="${role}"]`));
  }

  static getByText(container: HTMLElement, text: string): HTMLElement | null {
    const walker = container.ownerDocument.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      null,
    );

    let node;
    while ((node = walker.nextNode())) {
      if (node.textContent?.includes(text)) {
        return node.parentElement;
      }
    }
    return null;
  }

  static queryByText(container: HTMLElement, text: string): HTMLElement | null {
    return this.getByText(container, text);
  }

  static getAllByText(container: HTMLElement, text: string): HTMLElement[] {
    const elements: HTMLElement[] = [];
    const walker = container.ownerDocument.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      null,
    );

    let node;
    while ((node = walker.nextNode())) {
      if (node.textContent?.includes(text)) {
        const parentElement = node.parentElement;
        if (parentElement && !elements.includes(parentElement)) {
          elements.push(parentElement);
        }
      }
    }
    return elements;
  }

  static querySelector(container: HTMLElement, selector: string): HTMLElement | null {
    return container.querySelector(selector);
  }

  static querySelectorAll(container: HTMLElement, selector: string): NodeListOf<HTMLElement> {
    return container.querySelectorAll(selector);
  }

  static getByPlaceholderText(container: HTMLElement, text: string): HTMLElement | null {
    return container.querySelector(`[placeholder*="${text}"]`);
  }

  static queryByPlaceholderText(container: HTMLElement, text: string): HTMLElement | null {
    return this.getByPlaceholderText(container, text);
  }

  static getByLabelText(container: HTMLElement, text: string): HTMLElement | null {
    // Look for elements with aria-label or associated labels
    const byAriaLabel = container.querySelector(`[aria-label*="${text}"]`) as HTMLElement;
    if (byAriaLabel) return byAriaLabel;
    
    // Look for labels and find associated inputs
    const labels = container.querySelectorAll('label');
    for (const label of labels) {
      if (label.textContent?.includes(text)) {
        const forAttr = label.getAttribute('for');
        if (forAttr) {
          return container.querySelector(`#${forAttr}`);
        }
        // Check for nested input
        const nestedInput = label.querySelector('input, textarea, select');
        if (nestedInput) return nestedInput as HTMLElement;
      }
    }
    return null;
  }

  static queryByLabelText(container: HTMLElement, text: string): HTMLElement | null {
    return this.getByLabelText(container, text);
  }

  static getByDisplayValue(container: HTMLElement, value: string): HTMLElement | null {
    const inputs = container.querySelectorAll('input, textarea, select');
    for (const input of inputs) {
      if ((input as HTMLInputElement).value === value) {
        return input as HTMLElement;
      }
    }
    return null;
  }

  static queryByDisplayValue(container: HTMLElement, value: string): HTMLElement | null {
    return this.getByDisplayValue(container, value);
  }

  static getByTestId(container: HTMLElement, testId: string): HTMLElement | null {
    return container.querySelector(`[data-testid="${testId}"]`);
  }

  static queryByTestId(container: HTMLElement, testId: string): HTMLElement | null {
    return this.getByTestId(container, testId);
  }

  static getAllByTestId(container: HTMLElement, testId: string): HTMLElement[] {
    return Array.from(container.querySelectorAll(`[data-testid="${testId}"]`));
  }

  static getByTitle(container: HTMLElement, title: string): HTMLElement | null {
    return container.querySelector(`[title*="${title}"]`);
  }

  static queryByTitle(container: HTMLElement, title: string): HTMLElement | null {
    return this.getByTitle(container, title);
  }

  static getByAltText(container: HTMLElement, alt: string): HTMLElement | null {
    return container.querySelector(`[alt*="${alt}"]`);
  }

  static queryByAltText(container: HTMLElement, alt: string): HTMLElement | null {
    return this.getByAltText(container, alt);
  }

  // Event simulation helpers (for basic testing)
  static fireEvent = {
    click: (element: HTMLElement) => {
      // Basic click simulation - just verify element exists and is clickable
      if (!element) throw new Error('Element not found for click event');
      return true;
    },
    change: (element: HTMLElement, eventInit: { target: { value: string } }) => {
      // Basic change simulation - just verify element exists
      if (!element) throw new Error('Element not found for change event');
      if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        (element as HTMLInputElement).value = eventInit.target.value;
      }
      return true;
    },
    focus: (element: HTMLElement) => {
      if (!element) throw new Error('Element not found for focus event');
      return true;
    },
    blur: (element: HTMLElement) => {
      if (!element) throw new Error('Element not found for blur event');
      return true;
    },
    keyDown: (element: HTMLElement, _eventInit?: { key?: string; code?: string }) => {
      if (!element) throw new Error('Element not found for keyDown event');
      return true;
    },
    submit: (element: HTMLElement) => {
      if (!element) throw new Error('Element not found for submit event');
      return true;
    }
  };
}

// Export both the class and a render function for compatibility
export const render = (element: React.ReactElement) => {
  const container = ServerRenderer.render(element);
  
  // Enhanced querySelector that can find the container itself
  const smartQuerySelector = (selector: string) => {
    // First check if the container itself matches
    if (container.matches && container.matches(selector)) {
      return container;
    }
    // Then check children
    return container.querySelector(selector);
  };
  
  const smartQuerySelectorAll = (selector: string) => {
    const results: HTMLElement[] = [];
    // Check if container itself matches
    if (container.matches && container.matches(selector)) {
      results.push(container);
    }
    // Add children that match
    const children = Array.from(container.querySelectorAll(selector)) as HTMLElement[];
    results.push(...children);
    return results;
  };
  
  return {
    container,
    getByRole: (role: string, options?: { level?: number, hidden?: boolean }) => ServerRenderer.getByRole(container, role, options),
    queryByRole: (role: string, options?: { level?: number, hidden?: boolean }) => ServerRenderer.queryByRole(container, role, options),
    getAllByRole: (role: string) => ServerRenderer.getAllByRole(container, role),
    getByText: (text: string) => ServerRenderer.getByText(container, text),
    queryByText: (text: string) => ServerRenderer.queryByText(container, text),
    getAllByText: (text: string) => ServerRenderer.getAllByText(container, text),
    getByLabelText: (text: string) => ServerRenderer.getByLabelText(container, text),
    queryByLabelText: (text: string) => ServerRenderer.queryByLabelText(container, text),
    getByPlaceholderText: (text: string) => ServerRenderer.getByPlaceholderText(container, text),
    queryByPlaceholderText: (text: string) => ServerRenderer.queryByPlaceholderText(container, text),
    getByDisplayValue: (value: string) => ServerRenderer.getByDisplayValue(container, value),
    queryByDisplayValue: (value: string) => ServerRenderer.queryByDisplayValue(container, value),
    getByTestId: (testId: string) => ServerRenderer.getByTestId(container, testId),
    queryByTestId: (testId: string) => ServerRenderer.queryByTestId(container, testId),
    getAllByTestId: (testId: string) => ServerRenderer.getAllByTestId(container, testId),
    getByTitle: (title: string) => ServerRenderer.getByTitle(container, title),
    queryByTitle: (title: string) => ServerRenderer.queryByTitle(container, title),
    getByAltText: (alt: string) => ServerRenderer.getByAltText(container, alt),
    queryByAltText: (alt: string) => ServerRenderer.queryByAltText(container, alt),
    querySelector: smartQuerySelector,
    querySelectorAll: (selector: string) => Array.from(smartQuerySelectorAll(selector)),
    unmount: () => {
      // No-op for SSR context, but provided for compatibility
    },
    rerender: (ui: React.ReactElement) => {
      // For SSR context, rerender is effectively a new render
      return ServerRenderer.render(ui);
    }
  };
};

// Export fireEvent for compatibility
export const fireEvent = ServerRenderer.fireEvent;

// Export screen-like object for compatibility
export const screen = {
  getByRole: (_role: string) => {
    throw new Error('Use render() and destructure methods instead of screen in React 19 tests');
  },
  getByText: (_text: string) => {
    throw new Error('Use render() and destructure methods instead of screen in React 19 tests');
  },
  // Add other methods as needed...
};
