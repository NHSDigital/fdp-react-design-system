import React from "react";
import { HeaderProps } from "./Header.types";
import "./Header.scss";
import "./Header.ssr.scss";
export interface RenderHeaderOptions {
    variant: "client" | "server";
    isClient: boolean;
    menuOpen?: boolean;
    showMoreButton?: boolean;
    visibleItems?: number;
    dropdownVisible?: boolean;
    toggleMenu?: (e?: React.MouseEvent) => void;
    navContainerRef?: React.RefObject<HTMLDivElement>;
    navListRef?: React.RefObject<HTMLUListElement>;
    /**
     * Optional pre-rendered search node. Used by the client Header to inject the
     * interactive HeaderSearch without importing it in this SSR-shared module.
     */
    searchNode?: React.ReactNode;
}
export declare function renderHeaderMarkup(props: HeaderProps, { variant, isClient, menuOpen, showMoreButton, visibleItems, dropdownVisible, toggleMenu, navContainerRef, navListRef, searchNode, }: RenderHeaderOptions): import("react/jsx-runtime").JSX.Element;
