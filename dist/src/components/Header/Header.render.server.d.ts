import { HeaderProps } from "./Header.types";
import "./Header.scss";
import "./Header.ssr.scss";
export interface RenderHeaderServerOptions {
    variant: "server";
    isClient: false;
}
export declare function renderHeaderMarkupServer(props: HeaderProps, { variant, isClient }: RenderHeaderServerOptions): import("react/jsx-runtime").JSX.Element;
