import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { expectAccessible } from '../../test-utils/accessibility';
import { Images } from './Images';

describe('Images (a11y)', () => {
  it('no axe violations (image with alt)', async () => {
    const { container } = render(
      <Images src="https://example.com/photo.jpg" alt="Example photo" />
    );
    await expectAccessible(container);
  });

  it('no axe violations (with caption & responsive srcset)', async () => {
    const { container } = render(
      <Images
        src="https://example.com/photo-800.jpg"
        alt="Medical team"
        caption="<strong>Team:</strong> Staff meeting"
        sizes="(min-width: 50em) 800px, 100vw"
        srcset="https://example.com/photo-400.jpg 400w, https://example.com/photo-800.jpg 800w"
      />
    );
    await expectAccessible(container);
  });
});
