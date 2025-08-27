import { SummaryCardProps } from '../SummaryCard/SummaryCard.types';
export interface DashboardSummaryGridProps {
    /** Array of summary card data (must contain exactly 4 items) */
    cards: [SummaryCardProps, SummaryCardProps, SummaryCardProps, SummaryCardProps];
    /** Optional custom className */
    className?: string;
}
