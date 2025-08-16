import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { DateInput } from './DateInput';

describe('DateInput (SSR)', () => {
  it('renders three inputs with labels', () => {
    const { getByLabelText } = renderSSR(<DateInput id="d1" />);
    expect(getByLabelText('Day')).toBeTruthy();
    expect(getByLabelText('Month')).toBeTruthy();
    expect(getByLabelText('Year')).toBeTruthy();
  });
  it('applies custom class', () => {
    const { container } = renderSSR(<DateInput id="d2" className="extra" />);
    const root = container.querySelector('.nhsuk-date-input');
    expect(root?.className).toContain('extra');
  });
  it('renders values', () => {
    const { getByDisplayValue } = renderSSR(<DateInput id="d3" values={{ day: '01', month: '02', year: '2024' }} />);
    expect(getByDisplayValue('01')).toBeTruthy();
  });
  it('renders hint and error', () => {
    const { getByText } = renderSSR(<DateInput id="d4" hint={{ text: 'H' }} errorMessage={{ text: 'E' }} />);
    expect(getByText('H')).toBeTruthy();
    expect(getByText('E')).toBeTruthy();
  });
});
