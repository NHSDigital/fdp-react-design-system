import * as React from 'react';
export interface VisibilityContextValue {
    hiddenIds: Set<string>;
    isHidden: (id: string) => boolean;
    toggle: (id: string) => void;
    showOnly: (id: string) => void;
    showAll: () => void;
    setHidden: (ids: string[] | Set<string>) => void;
}
declare const VisibilityContext: React.Context<VisibilityContextValue | null>;
export declare const useVisibility: () => VisibilityContextValue | null;
export interface VisibilityProviderProps {
    initialHiddenIds?: string[];
    children: React.ReactNode;
    /** Optional controlled hidden set (if provided, component becomes controlled) */
    hiddenIds?: string[];
    onChange?: (hidden: string[]) => void;
}
export declare const VisibilityProvider: React.FC<VisibilityProviderProps>;
export default VisibilityContext;
