import React from 'react';
/**
 * hydrateWithoutMismatch
 * Renders a React element to HTML via SSR helper, injects into a detached container,
 * hydrates with the provided client element, and asserts (optionally) that console.error
 * was not called (indicating no hydration mismatch warnings from React).
 */
export declare function hydrateWithoutMismatch(options: {
    ssr: React.ReactElement;
    client: React.ReactElement;
    assert?: (container: HTMLElement) => void;
    expectNoMismatch?: boolean;
}): HTMLDivElement;
