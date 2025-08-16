export interface BuildRadiosOptionsArgs {
    count?: number;
    withConditional?: boolean;
    disabledIndex?: number;
}
export declare function buildRadiosOptions({ count, withConditional, disabledIndex }?: BuildRadiosOptionsArgs): any[];
export interface BuildNavItemsArgs {
    length?: number;
    currentIndex?: number;
}
export declare function buildNavItems({ length, currentIndex }?: BuildNavItemsArgs): any[];
