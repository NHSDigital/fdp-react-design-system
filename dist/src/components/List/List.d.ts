import React from 'react';
import './List.scss';
import { ListProps, ListItemProps } from './List.types';
/**
 * List Component
 *
 * Creates accessible lists with NHS styling.
 * Based on NHS UK Frontend list styles with NHS FDP design tokens.
 */
declare const ListComponent: React.FC<ListProps>;
/**
 * List Item Component
 *
 * Individual list item with proper NHS styling and spacing.
 */
export declare const ListItem: React.FC<ListItemProps>;
interface ListComponent extends React.FC<ListProps> {
    Item: React.FC<ListItemProps>;
}
export declare const List: ListComponent;
export {};
