import * as React from 'react';
import { SummaryList } from '../../../components/SummaryList';
import type { SummaryListItem } from '../../../components/SummaryList/SummaryList.types';

export interface ReviewAnswersItem {
  nodeId: string;
  question?: string;
  value: string | string[];
}

export interface ReviewAnswersProps {
  items: ReviewAnswersItem[];
  onChange?: (index: number) => void;
}

/**
 * ReviewAnswers shows a SummaryList of prior answers with a Change link for each,
 * plus a Start again button to clear all answers.
 */
export const ReviewAnswers: React.FC<ReviewAnswersProps> = ({ items, onChange }) => {
  const list: SummaryListItem[] = items.map((a, i) => ({
    key: { text: a.question || a.nodeId },
    value: { text: Array.isArray(a.value) ? a.value.join(', ') : a.value },
    actions: onChange
      ? {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: a.question || a.nodeId,
              attributes: {
                onClick: (e: any) => {
                  e.preventDefault();
                  onChange(i);
                },
              } as any,
            },
          ],
        }
      : undefined,
  }));

  return (
    <div>
      <SummaryList items={list} />
      {/* {onReset && (
        <div style={{ marginTop: 16 }}>
          <Button variant="secondary" onClick={onReset}>
            Start again
          </Button>
        </div>
      )} */}
    </div>
  );
};

export default ReviewAnswers;
