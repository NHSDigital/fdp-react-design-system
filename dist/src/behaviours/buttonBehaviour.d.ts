export interface ButtonBehaviourOptions {
    preventDoubleClick?: boolean;
    onClick?: (ev: MouseEvent) => void;
}
export interface ButtonBehaviourHandles {
    attach: (el: HTMLElement) => void;
    detach: () => void;
}
/**
 * Provides progressive enhancement behaviour for buttons / links that use
 * data-module="nhs-button". Mirrors logic in the React implementation so that
 * SSR + static HTML + Nunjucks macros remain consistent.
 */
export declare function createButtonBehaviour(options?: ButtonBehaviourOptions): ButtonBehaviourHandles;
export declare function initButtons(scope?: ParentNode): void;
export declare function detachButtons(scope?: ParentNode): void;
