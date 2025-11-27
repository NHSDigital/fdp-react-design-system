import { HeaderProps } from "./Header.types";
import "./Header.scss";
import "./Header.ssr.scss";
export interface RenderHeaderServerOptions {
    variant: "server";
    isClient: false;
    /** Optional brand provided by the caller (supports SSR BrandThemeProvider context). */
    brand?: 'nhs' | 'fdp';
}
export declare function renderHeaderMarkupServer(props: HeaderProps, { isClient, brand: providedBrand }: RenderHeaderServerOptions): import("react/jsx-runtime").JSX.Element;
