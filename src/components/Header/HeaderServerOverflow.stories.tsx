import type { Meta, StoryObj, Decorator } from '@storybook/react';
import React, { useEffect } from 'react';
import { HeaderServer } from '.';
import { initAll } from '../../behaviours';

const withBehaviours: Decorator = (StoryFn) => {
  useEffect(() => { try { initAll(); } catch (e) { /* noop */ } }, []);
  return <StoryFn />;
};

const meta: Meta<typeof HeaderServer> = {
  title: 'NHS/Components/Header/Server Overflow Fallback',
  component: HeaderServer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
  component: `\n# HeaderServer Overflow Fallback\n\nDemonstrates the **server-side deterministic overflow fallback** implemented in \`HeaderServer\`.\n\n## Behaviour (No JS Required)\n- When the number of items exceeds the server threshold (\`maxVisibleItems\`, default 4), **all navigation items are rendered inside a single always-visible dropdown**.\n- The primary inline list is intentionally empty to guarantee determinism and avoid mismatches during hydration.\n- The dropdown container carries \`data-ssr-overflow=\"true\"\` so the behaviour layer can detect and re-distribute items after enhancement.\n- Ensures **every link is available** with or without JavaScript.\n\n## Progressive Enhancement\nWhen the interactive \`Header\` + behaviour layer load on the client they will:\n1. Detect the server fallback via \`data-ssr-overflow\`.\n2. Move items back into the primary list, measure widths and compute a true fit.\n3. Inject a dynamic "More" button & overflow dropdown (hidden by default) only if required.\n\n## Props Used\n- \`maxVisibleItems=4\` to force server fallback.\n- 10 navigation items to ensure overflow.\n\nUse this story to visually confirm deterministic server fallback structure.\n        `
      }
    }
  },
  decorators: [withBehaviours]
};

export default meta;

type Story = StoryObj<typeof HeaderServer>;

export const ServerOverflowFallback: Story = {
  args: {
    maxVisibleItems: 4,
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
        { href: '#', text: 'Privacy' }
      ]
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Server-rendered overflow fallback: first 4 inline, remaining items in immediate dropdown with data-ssr-overflow.'
      }
    }
  }
};
