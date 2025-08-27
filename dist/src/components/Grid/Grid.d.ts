import React from 'react';
import './Grid.scss';
import { ContainerProps, RowProps, ColumnProps, GridProps } from './Grid.types';
/**
 * Grid Container Component
 *
 * Provides a page-width container with responsive margins.
 * Based on NHS UK's width-container object.
 */
export declare const Container: React.FC<ContainerProps>;
/**
 * Grid Row Component
 *
 * Creates a grid row with negative margins to offset column gutters.
 * Based on NHS UK's grid-row object.
 */
export declare const Row: React.FC<RowProps>;
/**
 * Grid Column Component
 *
 * Creates responsive grid columns with CSS Grid layout.
 * Supports different widths at different breakpoints and grid positioning.
 */
export declare const Column: React.FC<ColumnProps>;
/**
 * Grid Wrapper Component
 *
 * Convenience component that combines Container and Row.
 * Automatically wraps children in a Row unless the first child is already a Row component.
 */
export declare const Grid: React.FC<GridProps>;
