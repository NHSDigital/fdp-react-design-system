import type { Meta, StoryObj, Decorator } from '@storybook/react';
import React, { useEffect } from 'react';
import { HeaderServer } from '.';
import { initAll } from '../../behaviours';

const withBehaviours: Decorator = (StoryFn) => {
  useEffect(() => {
    try { initAll(); } catch {}
  }, []);
  return <StoryFn />;
};

const meta: Meta<typeof HeaderServer> = {
  title: 'NHS/Components/Header/Next.js SSR (progressive enhancement)',
  component: HeaderServer,
  decorators: [withBehaviours],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `\n# HeaderServer in Next.js (SSR + progressive enhancement)\n\nThis story simulates how \`HeaderServer\` is used in a Next.js app:\n\n- The header renders fully on the server with all navigation items inline.\n- On the client, the behaviours layer measures available space and, if needed,\n  injects a "More" button and moves overflow items into a dropdown.\n- There is no server-side overflow guesswork. All redistribution happens client-side after hydration.\n\nIn your Next.js app, ensure the behaviours module is bundled so the inline script in \`HeaderServer\` can initialize:\n\n- Either import \`@nhsdigital/nhs-fdp-design-system/behaviours\` at app-level\n- Or use the provided helper (see \`src/nextjs/InitBehaviours.tsx\`)\n\nThis story constrains the header width to make overflow visible after enhancement.\n        `
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof HeaderServer>;

export const NextSSRWithOverflow: Story = {
  args: {
    service: { text: 'NHS Service', href: '/' },
    navigation: {
      items: [
        { href: '#', text: 'Home', current: true },
        { href: '#', text: 'Appointments' },
        { href: '#', text: 'Results' },
        { href: '#', text: 'Medicines' },
        { href: '#', text: 'Messages' },
        { href: '#', text: 'Conditions' },
        { href: '#', text: 'Settings' },
        { href: '#', text: 'Support' },
        { href: '#', text: 'Help' },
      ]
    },
    responsiveNavigation: true,
  },
  decorators: [
    (StoryFn) => (
      <div style={{ maxWidth: 640, margin: 0 }}>
        {/* Constrain width to force overflow after hydration */}
        <div style={{ width: 320 }}>
          <StoryFn />
        </div>
      </div>
    )
  ],
  parameters: {
    docs: {
      description: {
        story: 'Server-rendered header with client-side overflow enhancement under constrained width. Expect a More button to appear after hydration.'
      }
    }
  }
};
