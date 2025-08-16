import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { expectAccessible } from '../../test-utils/accessibility';
import { NavigationSplitView } from './index';
import type { NavigationSplitItem } from './NavigationSplitView.types';

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
	const { getByRole } = render(<NavigationSplitView items={items} getId={i => i.id} initialFocus="first" renderContent={() => <div data-testid="content" />} />);
	const list = getByRole('listbox');
	fireEvent.keyDown(list, { key: 'a' });
	fireEvent.keyDown(list, { key: 'l' });
	const focused = document.activeElement as HTMLElement;
	expect(focused?.id).toBe('alpha');
	await expectAccessible(list as HTMLElement);
  });

  it('cycles among same starting letter when repeating char quickly', () => {
	const { getByRole } = render(<NavigationSplitView items={items} getId={i => i.id} initialFocus="first" renderContent={() => <div />} />);
	const list = getByRole('listbox');
	fireEvent.keyDown(list, { key: 'a' });
	const afterFirst = document.activeElement as HTMLElement;
	expect(afterFirst.id).toBe('alpine');
	fireEvent.keyDown(list, { key: 'a' });
	const afterSecond = document.activeElement as HTMLElement;
	expect(afterSecond.id).toBe('alpha');
  });

  it('falls back gracefully when no multi-character match', () => {
	const { getByRole } = render(<NavigationSplitView items={items} getId={i => i.id} initialFocus="first" renderContent={() => <div />} />);
	const list = getByRole('listbox');
	fireEvent.keyDown(list, { key: 'a' });
	fireEvent.keyDown(list, { key: 'x' });
	// Focus should remain on first matching single char (alpine) since no 'ax' prefix
	const focused = document.activeElement as HTMLElement;
	expect(focused.id).toBe('alpine');
  });
});
