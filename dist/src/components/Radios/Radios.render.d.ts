import React from 'react';
import { RadiosProps } from './Radios.types';
import './Radios.scss';
export interface RenderRadiosOptions {
    variant: 'client' | 'server';
    selectedValue: string;
    enableBehaviourAttr?: boolean;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    itemsRef?: React.MutableRefObject<HTMLInputElement[]>;
}
export declare function renderRadiosMarkup(props: RadiosProps, { variant, selectedValue, enableBehaviourAttr, handleChange, handleBlur, handleFocus, handleKeyDown, itemsRef, }: RenderRadiosOptions): import("react/jsx-runtime").JSX.Element;
