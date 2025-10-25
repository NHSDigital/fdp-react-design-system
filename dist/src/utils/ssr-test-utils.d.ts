import { vi } from 'vitest';
/**
 * SSR-Safe Testing Utilities
 *
 * This module provides utilities for testing React components
 * in SSR-compatible environments, particularly useful for CI/CD.
 */
export interface MockedDOMElement {
    getAttribute: ReturnType<typeof vi.fn>;
    setAttribute: ReturnType<typeof vi.fn>;
    hasAttribute: ReturnType<typeof vi.fn>;
    removeAttribute: ReturnType<typeof vi.fn>;
    focus: ReturnType<typeof vi.fn>;
    addEventListener: ReturnType<typeof vi.fn>;
    removeEventListener: ReturnType<typeof vi.fn>;
    classList: {
        add: ReturnType<typeof vi.fn>;
        remove: ReturnType<typeof vi.fn>;
        contains: ReturnType<typeof vi.fn>;
    };
}
export interface MockedDocument {
    querySelector: ReturnType<typeof vi.fn>;
    querySelectorAll: ReturnType<typeof vi.fn>;
    addEventListener: ReturnType<typeof vi.fn>;
    removeEventListener: ReturnType<typeof vi.fn>;
    createElement: ReturnType<typeof vi.fn>;
}
export interface MockedWindow {
    addEventListener: ReturnType<typeof vi.fn>;
    removeEventListener: ReturnType<typeof vi.fn>;
    setTimeout: any;
    clearTimeout: ReturnType<typeof vi.fn>;
}
/**
 * Creates a mock DOM element with all necessary methods
 */
export declare const createMockElement: () => MockedDOMElement;
/**
 * Creates a mock document object with essential methods
 */
export declare const createMockDocument: () => MockedDocument;
/**
 * Creates a mock window object with essential methods
 */
export declare const createMockWindow: () => MockedWindow;
/**
 * Checks if the current environment has full DOM support
 */
export declare const hasFullDOMSupport: () => boolean;
/**
 * Sets up a minimal DOM environment for SSR testing
 */
export declare const setupSSRTestEnvironment: () => void;
/**
 * Wraps a test function to run safely in SSR environments
 */
export declare const ssrSafeTest: (testFn: () => void | Promise<void>) => () => Promise<void>;
/**
 * Conditionally runs a test only if full DOM support is available
 */
export declare const domOnlyTest: (testFn: () => void | Promise<void>) => () => void | Promise<void>;
/**
 * Enhanced render function that sets up SSR-safe environment
 */
export declare const ssrSafeRender: (component: React.ReactElement) => Promise<import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>>;
declare const _default: {
    setupSSRTestEnvironment: () => void;
    ssrSafeTest: (testFn: () => void | Promise<void>) => () => Promise<void>;
    domOnlyTest: (testFn: () => void | Promise<void>) => () => void | Promise<void>;
    ssrSafeRender: (component: React.ReactElement) => Promise<import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>>;
    hasFullDOMSupport: () => boolean;
    createMockElement: () => MockedDOMElement;
    createMockDocument: () => MockedDocument;
    createMockWindow: () => MockedWindow;
};
export default _default;
