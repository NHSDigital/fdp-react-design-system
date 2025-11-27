import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { SlotMatrix } from './SlotMatrix';
import { generateSessions, generateSlots } from './generateSlotMatrixMocks';

const meta: Meta<typeof SlotMatrix> = {
  title: 'Clinical Workflows/SlotMatrix',
  component: SlotMatrix,
  parameters: {
    docs: {
      description: {
        component: 'Early scaffold for an appointment slot discovery grid. Not production ready. Demonstrates ARIA grid and selection.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof SlotMatrix>;

export const SingleDayBasic: Story = {
  render: () => {
    const date = new Date();
    const sessions = generateSessions({ date });
    const slots = generateSlots(sessions, { date });
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <SlotMatrix
        slots={slots}
        sessions={sessions}
        dateRange={{ start: date, end: date }}
        value={selected}
        onChange={(ids) => setSelected(ids)}
      />
    );
  }
};

export const WithToolbarAndLegend: Story = {
  name: 'With Toolbar + Legend (Scaffold)',
  render: () => {
    const date = new Date();
    const sessions = generateSessions({ date });
    const slots = generateSlots(sessions, { date });
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <SlotMatrix
        slots={slots}
        sessions={sessions}
        dateRange={{ start: date, end: date }}
        value={selected}
        onChange={(ids) => setSelected(ids)}
        enableDefaultToolbar
        enableDefaultLegend
        legendPlacement="top"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates scaffold toolbar (date + density + mode toggles placeholder) and an auto-derived legend from slot statuses. In the wider system this would sit above patient booking flows, feeding selected slots into referral allocation or waiting list management actions.'
      }
    }
  }
};
