import React from "react";
export interface ParityBlockProps {
    children: React.ReactNode;
    macroCode: string;
    staticHtml: string;
    titles?: {
        react?: string;
        macro?: string;
        static?: string;
    };
}
export declare function ParityBlock({ children, macroCode, staticHtml, titles, }: ParityBlockProps): import("react/jsx-runtime").JSX.Element;
export declare function toNunjucksMacro(macroName: string, props: Record<string, unknown>): string;
export default ParityBlock;
