import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SummaryCard } from './SummaryCard';

describe('SummaryCard', () => {
  const defaultProps = {
    title: 'Total Patients',
    value: '1,234',
  };

  describe('Basic Rendering', () => {
    it('renders with required props', () => {
      render(<SummaryCard {...defaultProps} />);
      expect(screen.getByText('Total Patients')).toBeInTheDocument();
      expect(screen.getByText('1,234')).toBeInTheDocument();
    });

    it('renders subtitle when provided', () => {
      render(<SummaryCard {...defaultProps} subtitle="Last 30 days" />);
      expect(screen.getByText('Last 30 days')).toBeInTheDocument();
    });

    it('applies correct CSS classes', () => {
      render(<SummaryCard {...defaultProps} data-testid="summary-card" />);
      const card = screen.getByTestId('summary-card');
      expect(card).toHaveClass('nhs-fdp-summary-card');
    });
  });

  describe('Variants', () => {
    it('applies default variant by default', () => {
      render(<SummaryCard {...defaultProps} data-testid="summary-card" />);
      const card = screen.getByTestId('summary-card');
      expect(card).toHaveClass('nhs-fdp-summary-card--default');
    });

    it('applies success variant', () => {
      render(<SummaryCard {...defaultProps} variant="success" data-testid="summary-card" />);
      const card = screen.getByTestId('summary-card');
      expect(card).toHaveClass('nhs-fdp-summary-card--success');
    });

    it('applies warning variant', () => {
      render(<SummaryCard {...defaultProps} variant="warning" data-testid="summary-card" />);
      const card = screen.getByTestId('summary-card');
      expect(card).toHaveClass('nhs-fdp-summary-card--warning');
    });

    it('applies error variant', () => {
      render(<SummaryCard {...defaultProps} variant="error" data-testid="summary-card" />);
      const card = screen.getByTestId('summary-card');
      expect(card).toHaveClass('nhs-fdp-summary-card--error');
    });
  });

  describe('Clickable Functionality', () => {
    it('renders as link when href is provided', () => {
      render(<SummaryCard {...defaultProps} href="/dashboard" />);
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/dashboard');
    });

    it('renders as div when href is not provided', () => {
      render(<SummaryCard {...defaultProps} data-testid="summary-card" />);
      const card = screen.getByTestId('summary-card');
      expect(card.tagName).toBe('DIV');
    });
  });

  describe('Accessibility', () => {
    it('has proper link role when clickable', () => {
      render(<SummaryCard {...defaultProps} href="/dashboard" />);
      expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it('supports ARIA labels', () => {
      render(<SummaryCard {...defaultProps} ariaLabel="Patient statistics" />);
      expect(screen.getByLabelText('Patient statistics')).toBeInTheDocument();
    });

    it('passes through additional props', () => {
      render(
        <SummaryCard 
          {...defaultProps} 
          data-testid="custom-card"
          aria-describedby="card-description"
        />
      );
      const card = screen.getByTestId('custom-card');
      expect(card).toHaveAttribute('aria-describedby', 'card-description');
    });
  });

  describe('Content Structure', () => {
    it('renders title in correct heading element', () => {
      render(<SummaryCard {...defaultProps} />);
      const title = screen.getByText('Total Patients');
      expect(title.tagName).toBe('H3');
      expect(title).toHaveClass('nhs-fdp-summary-card__title');
    });

    it('renders value with correct class', () => {
      render(<SummaryCard {...defaultProps} />);
      const value = screen.getByText('1,234');
      expect(value).toHaveClass('nhs-fdp-summary-card__value');
    });

    it('renders subtitle with correct class when provided', () => {
      render(<SummaryCard {...defaultProps} subtitle="Test subtitle" />);
      const subtitle = screen.getByText('Test subtitle');
      expect(subtitle).toHaveClass('nhs-fdp-summary-card__subtitle');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty values gracefully', () => {
      render(<SummaryCard title="" value="" />);
      // Should render without crashing
      expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    it('handles long text content', () => {
      const longTitle = 'This is a very long title that might wrap to multiple lines';
      const longValue = '999,999,999';
      const longSubtitle = 'This is a very long subtitle that provides additional context';
      
      render(
        <SummaryCard 
          title={longTitle}
          value={longValue}
          subtitle={longSubtitle}
        />
      );
      
      expect(screen.getByText(longTitle)).toBeInTheDocument();
      expect(screen.getByText(longValue)).toBeInTheDocument();
      expect(screen.getByText(longSubtitle)).toBeInTheDocument();
    });

    it('handles special characters in content', () => {
      render(
        <SummaryCard 
          title="Patients & Visitors"
          value="1,234 £"
          subtitle="Increased by 5% ↗"
        />
      );
      
      expect(screen.getByText('Patients & Visitors')).toBeInTheDocument();
      expect(screen.getByText('1,234 £')).toBeInTheDocument();
      expect(screen.getByText('Increased by 5% ↗')).toBeInTheDocument();
    });
  });
});
