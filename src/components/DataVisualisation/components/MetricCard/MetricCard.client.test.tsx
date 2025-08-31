import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MetricCard } from './MetricCard';

describe('MetricCard (client)', () => {
	it('shows positive delta with plus sign (no arrow)', () => {
		const { getByText } = render(<MetricCard label="Discharges" value={100} delta={{ value: 12 }} />);
		expect(getByText('+12')).toBeTruthy();
	});
	it('shows negative delta with minus sign (no arrow)', () => {
		const { getByText } = render(<MetricCard label="Wait time" value={30} delta={{ value: -5 }} />);
		expect(getByText('-5')).toBeTruthy();
	});
	it('announces improvement when invert true and negative delta', () => {
		const { container } = render(<MetricCard label="Infection" value={1.2} unit="%" delta={{ value: -0.2, isPercent: true, invert: true }} />);
		const live = container.querySelector('[aria-live="polite"]');
		expect(live?.textContent).toMatch(/improvement/);
	});
});
