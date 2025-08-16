import React from 'react';
import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { WarningCallout } from './WarningCallout';

describe('WarningCallout (hydration)', () => {
  it('hydrates basic heading', () => {
    hydrateWithoutMismatch({
      ssr: <WarningCallout heading="Warn" />,
      client: <WarningCallout heading="Warn" />,
    });
  });
  it('hydrates complex content', () => {
    hydrateWithoutMismatch({
      ssr: <WarningCallout heading="Warn" html="<p><strong>HTML</strong> content</p>" />,
      client: <WarningCallout heading="Warn" html="<p><strong>HTML</strong> content</p>" />,
    });
  });
});
