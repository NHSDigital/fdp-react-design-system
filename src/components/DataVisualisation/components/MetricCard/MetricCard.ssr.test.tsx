import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../../../test-utils/renderSSR';
import { MetricCard } from './MetricCard';

describe('MetricCard (SSR)', () => {
  it('renders label and value', () => {
    const { getByText } = renderSSR(<MetricCard label="Admissions" value={123} />);
    expect(getByText('Admissions')).toBeDefined();
    expect(getByText('123')).toBeDefined();
  });
});
