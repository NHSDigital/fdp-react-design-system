import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Footer } from './Footer';
import { expectAccessible } from '../../test-utils/accessibility';

const sampleLinks = [
  { URL: '#a', label: 'Accessibility' },
  { URL: '#b', label: 'Cookies' },
];

describe('Footer (a11y)', () => {
  it('no axe violations (single column)', async () => {
    const { container } = render(<Footer links={sampleLinks} copyright="© Test" />);
    await expectAccessible(container);
  });

  it('no axe violations (multi-column)', async () => {
    const { container } = render(
      <Footer
        links={sampleLinks}
        linksColumn2={[{ URL: '#c', label: 'Contact' }]}
        metaLinks={[{ URL: '#d', label: 'Privacy' }]}
      />
    );
    await expectAccessible(container);
  });
});
