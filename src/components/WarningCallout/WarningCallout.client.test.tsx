import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { WarningCallout } from './WarningCallout';

describe('WarningCallout (client)', () => {
  it('renders default heading', () => {
    const { getByRole } = render(<WarningCallout heading="Heading" />);
    expect(getByRole('heading')).toBeTruthy();
  });
  it('supports custom heading level', () => {
    const { getByRole } = render(<WarningCallout heading="Heading" headingLevel={2} />);
    expect(getByRole('heading', { level: 2 })).toBeTruthy();
  });
  it('renders text content', () => {
    const { getByText } = render(<WarningCallout heading="Warn" text="Content" />);
    expect(getByText('Content')).toBeTruthy();
  });
  it('prioritises html over text', () => {
    const { queryByText, container } = render(<WarningCallout heading="Warn" text="Text" html="<p><strong>HTML</strong> content</p>" />);
    expect(queryByText('Text')).toBeNull();
    expect(container.querySelector('strong')?.textContent).toBe('HTML');
  });
});
