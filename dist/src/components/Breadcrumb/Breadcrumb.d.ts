import React from 'react';
import './Breadcrumb.scss';
import { BreadcrumbProps, BreadcrumbItemProps } from './Breadcrumb.types';
interface BreadcrumbComponent extends React.FC<BreadcrumbProps> {
    Item: React.FC<BreadcrumbItemProps>;
}
export declare const Breadcrumb: BreadcrumbComponent;
export {};
