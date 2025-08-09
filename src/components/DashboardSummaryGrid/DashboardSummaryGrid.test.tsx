import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DashboardSummaryGrid } from './DashboardSummaryGrid';
import { SummaryCardProps } from '../SummaryCard/SummaryCard.types';

describe('DashboardSummaryGrid', () => {
  const createCards = (): [SummaryCardProps, SummaryCardProps, SummaryCardProps, SummaryCardProps] => [
    { title: 'Total Patients', value: '1,234' },
    { title: 'New Admissions', value: '56', variant: 'success' },
    { title: 'Pending Tests', value: '23', variant: 'warning' },
    { title: 'Critical Cases', value: '3', variant: 'error' },
  ];

  describe('Basic Rendering', () => {
    it('renders with four summary cards', () => {
      const cards = createCards();
      render(<DashboardSummaryGrid cards={cards} />);
      
      expect(screen.getByText('Total Patients')).toBeInTheDocument();
      expect(screen.getByText('1,234')).toBeInTheDocument();
      expect(screen.getByText('New Admissions')).toBeInTheDocument();
      expect(screen.getByText('56')).toBeInTheDocument();
      expect(screen.getByText('Pending Tests')).toBeInTheDocument();
      expect(screen.getByText('23')).toBeInTheDocument();
      expect(screen.getByText('Critical Cases')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
    });

    it('applies correct CSS classes', () => {
      const cards = createCards();
      render(<DashboardSummaryGrid cards={cards} data-testid="dashboard-grid" />);
      const grid = screen.getByTestId('dashboard-grid');
      expect(grid).toHaveClass('nhs-fdp-dashboard-summary-grid');
    });

    it('renders NHS Grid structure', () => {
      const cards = createCards();
      render(<DashboardSummaryGrid cards={cards} />);
      
      // Should have Grid container
      const gridContainer = document.querySelector('.nhs-fdp-grid');
      expect(gridContainer).toBeInTheDocument();
      
      // Should have Row
      const row = document.querySelector('.nhs-fdp-grid__row');
      expect(row).toBeInTheDocument();
      
      // Should have four Columns
      const columns = document.querySelectorAll('.nhs-fdp-grid__column--one-half');
      expect(columns).toHaveLength(4);
    });
  });

  describe('Summary Card Variants', () => {
    it('renders cards with correct variants', () => {
      const cards = createCards();
      render(<DashboardSummaryGrid cards={cards} />);
      
      // Default variant (first card)
      const defaultCard = screen.getByText('Total Patients').closest('.nhs-fdp-summary-card');
      expect(defaultCard).toHaveClass('nhs-fdp-summary-card--default');
      
      // Success variant (second card)
      const successCard = screen.getByText('New Admissions').closest('.nhs-fdp-summary-card');
      expect(successCard).toHaveClass('nhs-fdp-summary-card--success');
      
      // Warning variant (third card)
      const warningCard = screen.getByText('Pending Tests').closest('.nhs-fdp-summary-card');
      expect(warningCard).toHaveClass('nhs-fdp-summary-card--warning');
      
      // Error variant (fourth card)
      const errorCard = screen.getByText('Critical Cases').closest('.nhs-fdp-summary-card');
      expect(errorCard).toHaveClass('nhs-fdp-summary-card--error');
    });

    it('handles cards with subtitles', () => {
      const cardsWithSubtitles: [SummaryCardProps, SummaryCardProps, SummaryCardProps, SummaryCardProps] = [
        { title: 'Total Patients', value: '1,234', subtitle: 'Active patients' },
        { title: 'New Admissions', value: '56', subtitle: 'Last 24 hours' },
        { title: 'Pending Tests', value: '23', subtitle: 'Awaiting results' },
        { title: 'Critical Cases', value: '3', subtitle: 'Requires attention' },
      ];
      
      render(<DashboardSummaryGrid cards={cardsWithSubtitles} />);
      
      expect(screen.getByText('Active patients')).toBeInTheDocument();
      expect(screen.getByText('Last 24 hours')).toBeInTheDocument();
      expect(screen.getByText('Awaiting results')).toBeInTheDocument();
      expect(screen.getByText('Requires attention')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('maintains proper heading hierarchy', () => {
      const cards = createCards();
      render(<DashboardSummaryGrid cards={cards} />);
      
      // All card titles should be h3 elements
      const headings = screen.getAllByRole('heading', { level: 3 });
      expect(headings).toHaveLength(4);
      
      // Check content
      expect(headings[0]).toHaveTextContent('Total Patients');
      expect(headings[1]).toHaveTextContent('New Admissions');
      expect(headings[2]).toHaveTextContent('Pending Tests');
      expect(headings[3]).toHaveTextContent('Critical Cases');
    });
  });

  describe('Edge Cases', () => {
    it('handles exactly four cards as expected', () => {
      const cards = createCards();
      render(<DashboardSummaryGrid cards={cards} />);
      
      // Should render exactly 4 cards
      const cardElements = document.querySelectorAll('.nhs-fdp-summary-card');
      expect(cardElements).toHaveLength(4);
    });
  });

  describe('Custom Styling', () => {
    it('accepts custom className', () => {
      const cards = createCards();
      render(
        <DashboardSummaryGrid 
          cards={cards}
          className="custom-dashboard"
          data-testid="dashboard-grid"
        />
      );
      
      const grid = screen.getByTestId('dashboard-grid');
      expect(grid).toHaveClass('nhs-fdp-dashboard-summary-grid');
      expect(grid).toHaveClass('custom-dashboard');
    });
  });
});
