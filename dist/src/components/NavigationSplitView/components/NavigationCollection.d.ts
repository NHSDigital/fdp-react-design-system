import * as React from "react";
interface ItemLike<ID> {
    id: ID;
    label: string;
    description?: string;
    icon?: React.ReactNode;
    badge?: React.ReactNode | number | string;
    disabled?: boolean;
}
export interface NavigationCollectionProps<ID = string, T extends ItemLike<ID> = ItemLike<ID>> {
    layout: "list" | "cards";
    items: T[];
    getId: (item: T) => ID;
    selectedId?: ID;
    isLoading?: boolean;
    emptyState?: React.ReactNode;
    renderItemContent?: (item: T) => React.ReactNode;
    onSelect: (id: ID, item: T, index: number) => void;
    orientation: "vertical" | "horizontal";
    initialFocus: "first" | "none";
    onFocusChange?: (id: ID | undefined, item: T | undefined, index: number) => void;
    justSelectedId?: ID;
    listRef?: React.RefObject<HTMLUListElement>;
    onKeyDownList?: (e: React.KeyboardEvent) => void;
    navigationInstructions?: string;
    controlledFocusedIndex?: number;
}
export declare function NavigationCollection<ID = string, T extends ItemLike<ID> = ItemLike<ID>>({ layout, items, getId, selectedId, isLoading, emptyState, renderItemContent, onSelect, orientation, initialFocus, onFocusChange, justSelectedId, listRef, onKeyDownList, navigationInstructions, controlledFocusedIndex, }: NavigationCollectionProps<ID, T>): import("react/jsx-runtime").JSX.Element;
export {};
