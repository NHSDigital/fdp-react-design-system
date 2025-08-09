import React from 'react';
/**
 * React 19 compatible test utility for server-side rendering
 * Replaces @testing-library/react for React 19.1.0 compatibility
 */
export declare class ServerRenderer {
    static render(element: React.ReactElement): HTMLElement;
    static getByRole(container: HTMLElement, role: string, options?: {
        level?: number;
        hidden?: boolean;
    }): HTMLElement | null;
    static queryByRole(container: HTMLElement, role: string, options?: {
        level?: number;
        hidden?: boolean;
    }): HTMLElement | null;
    static getAllByRole(container: HTMLElement, role: string): HTMLElement[];
    static getByText(container: HTMLElement, text: string): HTMLElement | null;
    static queryByText(container: HTMLElement, text: string): HTMLElement | null;
    static getAllByText(container: HTMLElement, text: string): HTMLElement[];
    static querySelector(container: HTMLElement, selector: string): HTMLElement | null;
    static querySelectorAll(container: HTMLElement, selector: string): NodeListOf<HTMLElement>;
    static getByPlaceholderText(container: HTMLElement, text: string): HTMLElement | null;
    static queryByPlaceholderText(container: HTMLElement, text: string): HTMLElement | null;
    static getByLabelText(container: HTMLElement, text: string): HTMLElement | null;
    static queryByLabelText(container: HTMLElement, text: string): HTMLElement | null;
    static getByDisplayValue(container: HTMLElement, value: string): HTMLElement | null;
    static queryByDisplayValue(container: HTMLElement, value: string): HTMLElement | null;
    static getByTestId(container: HTMLElement, testId: string): HTMLElement | null;
    static queryByTestId(container: HTMLElement, testId: string): HTMLElement | null;
    static getAllByTestId(container: HTMLElement, testId: string): HTMLElement[];
    static getByTitle(container: HTMLElement, title: string): HTMLElement | null;
    static queryByTitle(container: HTMLElement, title: string): HTMLElement | null;
    static getByAltText(container: HTMLElement, alt: string): HTMLElement | null;
    static queryByAltText(container: HTMLElement, alt: string): HTMLElement | null;
    static fireEvent: {
        click: (element: HTMLElement) => boolean;
        change: (element: HTMLElement, eventInit: {
            target: {
                value: string;
            };
        }) => boolean;
        focus: (element: HTMLElement) => boolean;
        blur: (element: HTMLElement) => boolean;
        keyDown: (element: HTMLElement, _eventInit?: {
            key?: string;
            code?: string;
        }) => boolean;
        submit: (element: HTMLElement) => boolean;
    };
}
export declare const render: (element: React.ReactElement) => {
    container: HTMLElement;
    getByRole: (role: string, options?: {
        level?: number;
        hidden?: boolean;
    }) => HTMLElement | null;
    queryByRole: (role: string, options?: {
        level?: number;
        hidden?: boolean;
    }) => HTMLElement | null;
    getAllByRole: (role: string) => HTMLElement[];
    getByText: (text: string) => HTMLElement | null;
    queryByText: (text: string) => HTMLElement | null;
    getAllByText: (text: string) => HTMLElement[];
    getByLabelText: (text: string) => HTMLElement | null;
    queryByLabelText: (text: string) => HTMLElement | null;
    getByPlaceholderText: (text: string) => HTMLElement | null;
    queryByPlaceholderText: (text: string) => HTMLElement | null;
    getByDisplayValue: (value: string) => HTMLElement | null;
    queryByDisplayValue: (value: string) => HTMLElement | null;
    getByTestId: (testId: string) => HTMLElement | null;
    queryByTestId: (testId: string) => HTMLElement | null;
    getAllByTestId: (testId: string) => HTMLElement[];
    getByTitle: (title: string) => HTMLElement | null;
    queryByTitle: (title: string) => HTMLElement | null;
    getByAltText: (alt: string) => HTMLElement | null;
    queryByAltText: (alt: string) => HTMLElement | null;
    querySelector: (selector: string) => Element | null;
    querySelectorAll: (selector: string) => HTMLElement[];
    unmount: () => void;
    rerender: (ui: React.ReactElement) => HTMLElement;
};
export declare const fireEvent: {
    click: (element: HTMLElement) => boolean;
    change: (element: HTMLElement, eventInit: {
        target: {
            value: string;
        };
    }) => boolean;
    focus: (element: HTMLElement) => boolean;
    blur: (element: HTMLElement) => boolean;
    keyDown: (element: HTMLElement, _eventInit?: {
        key?: string;
        code?: string;
    }) => boolean;
    submit: (element: HTMLElement) => boolean;
};
export declare const screen: {
    getByRole: (_role: string) => never;
    getByText: (_text: string) => never;
};
