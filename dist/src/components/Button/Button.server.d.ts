import * as React from "react";
import type { ButtonAsButtonProps, ButtonAsLinkProps } from "./Button";
import "./Button.scss";
/**
 * Server-first Button component
 * - Pure render: no client state, no browser APIs, no event wiring
 * - Emits stable markup and behaviour contract (data-module, data-prevent-double-click)
 * - Behaviours can enhance this markup on the client (progressive enhancement)
 */
export type ButtonServerProps = ButtonAsButtonProps | ButtonAsLinkProps;
export declare const ButtonServer: React.ForwardRefExoticComponent<ButtonServerProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
export default ButtonServer;
