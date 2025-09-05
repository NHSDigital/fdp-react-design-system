import { hydrateRoot } from "react-dom/client";
import { act } from "react";
import { vi, expect } from "vitest";
import React from "react";
import { renderSSR } from "./renderSSR";

/**
 * hydrateWithoutMismatch
 * Renders a React element to HTML via SSR helper, injects into a detached container,
 * hydrates with the provided client element, and asserts (optionally) that console.error
 * was not called (indicating no hydration mismatch warnings from React).
 */
export function hydrateWithoutMismatch(options: {
	ssr: React.ReactElement;
	client: React.ReactElement;
	assert?: (container: HTMLElement) => void;
	expectNoMismatch?: boolean;
}) {
	const { ssr, client, assert, expectNoMismatch = true } = options;
	const { html } = renderSSR(ssr);
	const container = document.createElement("div");
	container.innerHTML = html;
	const spy = vi.spyOn(console, "error").mockImplementation(() => {});
	let root: any;
	act(() => {
		root = hydrateRoot(container, client);
	});
		try {
			assert?.(container);
			if (expectNoMismatch) {
				const calls = spy.mock.calls as unknown as any[][];
				const benign = (msg: any) => typeof msg === 'string' && msg.includes('not configured to support act');
				if ((globalThis as any).__ALLOW_ACT_WARNING__ && calls.length && calls.every(c => benign(c[0]))) {
					// Ignore only-act related warnings
				} else {
					expect(spy).not.toHaveBeenCalled();
				}
			}
		} finally {
		act(() => {
			root?.unmount?.();
		});
		spy.mockRestore();
	}
	return container;
}
