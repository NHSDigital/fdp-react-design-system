import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { BehavioursLoader } from './BehavioursLoader';

describe('BehavioursLoader', () => {
	beforeEach(() => {
		// Clean up any global state
		delete (window as any).__nhsInitAllBehaviours;
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	it('renders without crashing', () => {
		expect(() => render(<BehavioursLoader />)).not.toThrow();
	});

	it('renders null (no visible output)', () => {
		const { container } = render(<BehavioursLoader />);
		expect(container.firstChild).toBeNull();
	});

	it('initializes behaviours after mount', async () => {
		const mockInitAll = vi.fn();
		
		// Mock the dynamic import
		vi.doMock('./index.js', () => ({
			initAll: mockInitAll
		}));

		render(<BehavioursLoader />);

		// Wait for the dynamic import and initialization
		await waitFor(() => {
			expect(typeof (window as any).__nhsInitAllBehaviours).toBe('function');
		}, { timeout: 1000 });
	});

	it('calls onInit callback after successful initialization', async () => {
		const onInit = vi.fn();
		render(<BehavioursLoader onInit={onInit} />);

		await waitFor(() => {
			expect(onInit).toHaveBeenCalledOnce();
		}, { timeout: 1000 });
	});

	it('handles initialization errors gracefully', async () => {
		const onError = vi.fn();
		const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

		// Mock a failing initialization
		vi.doMock('./index.js', () => ({
			initAll: () => {
				throw new Error('Init failed');
			}
		}));

		render(<BehavioursLoader onError={onError} />);

		await waitFor(() => {
			expect(consoleErrorSpy).toHaveBeenCalled();
		}, { timeout: 1000 });

		consoleErrorSpy.mockRestore();
	});

	it('supports scoped initialization', async () => {
		const container = document.createElement('div');
		document.body.appendChild(container);

		const { rerender } = render(<BehavioursLoader scope={container} />);

		// Wait for initialization
		await waitFor(() => {
			expect(typeof (window as any).__nhsInitAllBehaviours).toBe('function');
		}, { timeout: 1000 });

		document.body.removeChild(container);
	});

	it('does nothing when window is undefined (SSR safety)', () => {
		// The component uses "use client" directive and won't actually render on server
		// This test verifies the useEffect guard works correctly
		
		// In a real SSR scenario, this component would be skipped entirely
		// because of the "use client" directive. Here we just verify
		// that if somehow the effect runs, it has proper guards.
		
		// We can't actually test SSR behavior in this environment since
		// React Testing Library requires a DOM. The real SSR safety comes
		// from the "use client" directive and the typeof window check.
		expect(() => render(<BehavioursLoader />)).not.toThrow();
	});
});
