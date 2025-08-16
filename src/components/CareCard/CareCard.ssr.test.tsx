import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { CareCard } from './CareCard';

describe('CareCard (SSR)', () => {
  it('renders non-urgent with heading + description', () => {
    const { getByRole, getByText } = renderSSR(<CareCard type="non-urgent" heading="H" description="Desc" />);
    expect(getByRole('heading', { level: 3 }).textContent).toContain('H');
    expect(getByText('Desc')).toBeTruthy();
  });
  it('renders urgent variant visually hidden prefix', () => {
    const { getByText } = renderSSR(<CareCard type="urgent" heading="Urgent case" />);
    expect(getByText('Urgent advice:', { selector: '.nhsuk-u-visually-hidden' })).toBeTruthy();
  });
  it('renders emergency variant prefix', () => {
    const { getByText } = renderSSR(<CareCard type="emergency" heading="Emergency" />);
    expect(getByText('Immediate action required:', { selector: '.nhsuk-u-visually-hidden' })).toBeTruthy();
  });
  it('supports custom heading level', () => {
    const { getByRole } = renderSSR(<CareCard type="non-urgent" heading="Custom" headingLevel={2} />);
    expect(getByRole('heading', { level: 2 }).textContent).toContain('Custom');
  });
  it('renders HTML description', () => {
    const { getByText } = renderSSR(<CareCard type="urgent" heading="Html" descriptionHtml="<p><strong>X</strong></p>" />);
    expect(getByText('X')).toBeTruthy();
  });
});
