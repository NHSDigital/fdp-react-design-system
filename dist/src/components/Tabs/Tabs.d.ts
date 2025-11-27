import React from 'react';
import { TabsProps, TabsHandle } from './Tabs.types';
import './Tabs.scss';
export type { TabsHandle } from './Tabs.types';
/**
 * NHS Tabs Component
 *
 * A tabs component for organizing related content into separate views.
 * Follows NHS design guidelines and accessibility standards.
 *
 * @param props - Tabs component props
 * @returns JSX element
 */
export declare const Tabs: React.ForwardRefExoticComponent<Omit<TabsProps, "ref"> & React.RefAttributes<TabsHandle>>;
