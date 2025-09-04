import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProductRoadmap } from './ProductRoadmap';

// Adjust the import path as needed to point to the correct JSON file location
import Roadmap from './design-system.json';

const meta: Meta<typeof ProductRoadmap> = {
  title: 'Navigation/ProductRoadmap',
  component: ProductRoadmap,
  parameters: {
    docs: {
      description: {
        component: 'ProductRoadmap visualises planned work across time columns. Adapted from legacy nhsd roadmap.'
      }
    }
  },
  args: {
    dateHeadings: Roadmap.dateHeadings,
    categories: Roadmap.categories
  }
};

export default meta;
type Story = StoryObj<typeof ProductRoadmap>;

export const Default: Story = {};

export const Drilldown: Story = {
  args: {
    enableDrilldown: true
  },
  parameters: {
    docs: {
      description: { story: 'Roadmap with drill-down overlay enabled for items that have children.' }
    }
  }
};

export const InlineDrilldown: Story = {
  args: {
    enableDrilldown: true,
    drilldownMode: 'inline'
  },
  parameters: {
    docs: {
      description: { story: 'Roadmap with inline drill-down: child tasks rendered directly beneath the active parent item on the timeline.' }
    }
  }
};
