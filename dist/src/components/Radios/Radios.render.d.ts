import React from "react";
import { RadiosProps } from "./Radios.types";
import "./Radios.scss";
import type { InputProps } from "../Input/Input.types";
export interface RenderRadiosOptions {
    variant: "client" | "server";
    selectedValue: string;
    enableBehaviourAttr?: boolean;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    itemsRef?: React.MutableRefObject<HTMLInputElement[]>;
    /** Input component to use for conditional content; injected to avoid importing client Input in SSR. */
    InputComponent: React.ComponentType<InputProps>;
}
export declare function renderRadiosMarkup(props: RadiosProps, { variant, selectedValue, enableBehaviourAttr, handleChange, handleBlur, handleFocus, handleKeyDown, itemsRef, InputComponent, }: RenderRadiosOptions): import("react/jsx-runtime").JSX.Element;
