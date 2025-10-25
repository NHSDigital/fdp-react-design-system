/**
 * Header behaviour: progressive enhancement for navigation overflow & dropdown toggle.
 * Works on markup produced by Header (client) or HeaderServer (server) variants.
 */
interface HeaderBehaviourInstance {
    root: HTMLElement;
    destroy(): void;
}
export declare function initHeaders(scope?: ParentNode): HeaderBehaviourInstance[];
export declare function detachHeaders(scope?: ParentNode): void;
export {};
