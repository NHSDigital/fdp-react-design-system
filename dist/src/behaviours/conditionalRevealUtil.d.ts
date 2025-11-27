export interface ConditionalConfig {
    inputSelector: string;
    hiddenClass: string;
    container: HTMLElement;
    eventName: string;
    exclusive?: boolean;
}
export interface ConditionalHandles {
    detach: () => void;
}
export declare function attachConditionalReveals(cfg: ConditionalConfig): ConditionalHandles;
