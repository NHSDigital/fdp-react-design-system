import type { Meta, StoryObj } from '@storybook/react';
import { ContentsList } from './ContentsList';

const meta: Meta<typeof ContentsList> = {
  title: 'NHS/Components/ContentsList',
  component: ContentsList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'The contents list component helps users navigate through multi-page guides by showing all sections and highlighting the current page.',
      },
    },
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      description: 'Aria label for the navigation',
    },
    classes: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContentsList>;

export const Default: Story = {
  args: {
    items: [
      { text: 'What is depression?', href: '/depression/overview' },
      { text: 'Symptoms', href: '/depression/symptoms' },
      { text: 'Causes', href: '/depression/causes', current: true },
      { text: 'Diagnosis', href: '/depression/diagnosis' },
      { text: 'Treatment', href: '/depression/treatment' },
      { text: 'Living with depression', href: '/depression/living-with' },
    ],
  },
};

export const SimpleGuide: Story = {
  args: {
    items: [
      { text: 'Before you start', href: '/guide/before-start' },
      { text: 'How to apply', href: '/guide/how-to-apply', current: true },
      { text: 'After you apply', href: '/guide/after-apply' },
    ],
  },
};

export const LongSectionTitles: Story = {
  args: {
    items: [
      { text: 'Understanding your mental health and wellbeing', href: '/guide/understanding' },
      { text: 'Recognizing signs and symptoms of mental health conditions', href: '/guide/recognizing', current: true },
      { text: 'Getting professional help and support services', href: '/guide/getting-help' },
      { text: 'Self-care strategies and coping mechanisms', href: '/guide/self-care' },
      { text: 'Supporting family members and friends', href: '/guide/supporting-others' },
    ],
  },
};

export const MedicalGuide: Story = {
  args: {
    items: [
      { text: 'About this medicine', href: '/medicine/about' },
      { text: 'Key facts', href: '/medicine/facts' },
      { text: 'Who can and cannot take it', href: '/medicine/who-can-take' },
      { text: 'How and when to take it', href: '/medicine/how-to-take', current: true },
      { text: 'Side effects', href: '/medicine/side-effects' },
      { text: 'How to cope with side effects', href: '/medicine/coping-side-effects' },
      { text: 'Pregnancy and breastfeeding', href: '/medicine/pregnancy' },
      { text: 'Cautions with other medicines', href: '/medicine/cautions' },
      { text: 'Common questions', href: '/medicine/questions' },
    ],
  },
};

export const CustomAriaLabel: Story = {
  args: {
    items: [
      { text: 'Step 1', href: '/process/step-1' },
      { text: 'Step 2', href: '/process/step-2', current: true },
      { text: 'Step 3', href: '/process/step-3' },
    ],
    ariaLabel: 'Process steps',
  },
};

export const WithItemAttributes: Story = {
  args: {
    items: [
      { 
        text: 'Overview', 
        href: '/overview', 
        attributes: { 'data-tracking': 'overview-link' } 
      },
      { 
        text: 'Details', 
        href: '/details', 
        current: true,
        attributes: { 'data-current-page': 'true' } 
      },
      { 
        text: 'Summary', 
        href: '/summary', 
        attributes: { 'data-tracking': 'summary-link' } 
      },
    ],
  },
};

export const SingleCurrentItem: Story = {
  args: {
    items: [
      { text: 'Current page only', current: true },
    ],
  },
};
