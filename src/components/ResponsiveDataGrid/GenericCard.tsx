import { Card } from '../Card';
import { createGenericCard, defaultGenericCardConfig } from './GenericCardRenderer';
import { GenericCardConfig } from './ResponsiveDataGridGeneric.types';
import { AriaDataGridColumn } from '../SortableDataTable/AriaDataGridTypes';

export interface GenericCardProps<T = any> {
  data: T;
  columns: AriaDataGridColumn[];
  config?: Partial<GenericCardConfig<T>>;
  className?: string;
  /**
   * Override heading (else computed from primaryField)
   */
  headingOverride?: string;
}

/**
 * Lightweight wrapper component that produces a <Card> using the same generic
 * card creation logic as ResponsiveDataGrid. It preserves focus/selection styles
 * when used inside the grid wrappers, but can also be used standalone.
 */
export function GenericCard<T = any>({ data, columns, config, className, headingOverride }: GenericCardProps<T>) {
  const mergedConfig: GenericCardConfig<T> = { ...defaultGenericCardConfig as GenericCardConfig<T>, ...(config as GenericCardConfig<T>) };
  const cardProps = createGenericCard<T>(data, columns, mergedConfig);
  return (
    <Card
      {...cardProps}
      heading={headingOverride ?? cardProps.heading}
      className={[cardProps.className, className].filter(Boolean).join(' ')}
    />
  );
}

export default GenericCard;
