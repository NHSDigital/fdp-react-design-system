import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { expectAccessible } from '../src/test-utils/accessibility';
import { NavigationSplitView } from '../src/components/NavigationSplitView';
import type { NavigationSplitItem } from '../src/components/NavigationSplitView/NavigationSplitView.types';
import { describe, it, expect } from 'vitest';

const items: NavigationSplitItem<string>[] = [
	{ id: 'alpha', label: 'Alpha' },
	{ id: 'alpine', label: 'Alpine' },
	{ id: 'beta', label: 'Beta' },
	{ id: 'charlie', label: 'Charlie' },
	{ id: 'charlotte', label: 'Charlotte' },
	{ id: 'delta', label: 'Delta' },
];

describe('NavigationSplitView typeahead buffered', () => {
	it('jumps with multi-character sequence', async () => {
		const { getByRole } = render(
			<NavigationSplitView
				items={items}
				getId={(i) => i.id}
				initialFocus="first"
				renderContent={() => <div data-testid="content" />}
			/>
		);
		const list = getByRole('listbox');

		// Focus on first (Alpha)
		fireEvent.keyDown(list, { key: 'a' }); // stays on Alpha (buffer 'a')
		fireEvent.keyDown(list, { key: 'l' }); // buffer 'al' should move to Alpine (starts with al)

		const focused = document.activeElement as HTMLElement;
		expect(focused?.id).toBe('alpine');
		await expectAccessible(list as HTMLElement);
	});

	it('cycles among same starting letter when repeating char', () => {
		const { getByRole } = render(
			<NavigationSplitView
				items={items}
				getId={(i) => i.id}
				initialFocus="first"
				renderContent={() => <div />}
			/>
		);
		const list = getByRole('listbox');

		// Start at Alpha, press 'a' again quickly -> cycle to Alpine
		fireEvent.keyDown(list, { key: 'a' });
		const afterFirst = document.activeElement as HTMLElement;
		expect(afterFirst.id).toBe('alpine');

		// Press 'a' again -> wraps back to Alpha (next match)
		fireEvent.keyDown(list, { key: 'a' });
		const afterSecond = document.activeElement as HTMLElement;
		expect(afterSecond.id).toBe('alpha');
	});

	it('falls back to last character when multi-character has no match', () => {
		const { getByRole } = render(
			<NavigationSplitView
				items={items}
				getId={(i) => i.id}
				initialFocus="first"
				renderContent={() => <div />}
			/>
		);
		const list = getByRole('listbox');

		fireEvent.keyDown(list, { key: 'a' }); // buffer 'a'
		fireEvent.keyDown(list, { key: 'x' }); // buffer 'ax' -> no match, fallback to last char 'x' (none) so focus unchanged
		const focused = document.activeElement as HTMLElement;
		expect(focused.id).toBe('alpha');
	});
});
