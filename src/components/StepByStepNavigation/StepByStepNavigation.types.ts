import type React from 'react';

export type StepStatus = 'not-started' | 'in-progress' | 'completed' | 'cannot-start-yet';

export type StepItem = {
  id: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  href?: string;
  status?: StepStatus;
  optional?: boolean;
  duration?: string;
  items?: StepItem[]; // one level deep
  meta?: React.ReactNode;
};

export type Variant = 'sidebar' | 'full-width';

export type StepByStepNavigationProps = {
  id?: string;
  className?: string;
  ariaLabel?: string;
  heading?: React.ReactNode; // full-width only
  summary?: React.ReactNode; // full-width only
  headingLevel?: 2 | 3 | 4;
  variant?: Variant;
  items: StepItem[];
  numbered?: boolean;
  collapsible?: boolean; // reserved for future slice
  singleOpen?: boolean; // when true, only one step can be expanded at a time
  currentStepId?: string;
  defaultExpandedIds?: string[];
  expandedIds?: string[];
  onToggle?: (id: string, expanded: boolean) => void;
  onStepClick?: (id: string, event: React.MouseEvent) => void;
  renderLink?: (props: { href: string; children: React.ReactNode; className?: string; 'aria-current'?: 'page' | 'step' | true }) => React.ReactNode;
  density?: 'comfortable' | 'compact';
  truncateTitles?: number;
  showAllControls?: boolean;
  autoFocusExpanded?: boolean;
  analyticsId?: string;
};
