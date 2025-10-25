import * as React from 'react';
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
export declare const ReviewAnswers: React.FC<ReviewAnswersProps>;
export default ReviewAnswers;
