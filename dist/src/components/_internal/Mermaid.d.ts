import React from "react";
import "./Mermaid.scss";
export interface MermaidProps {
    code?: string;
    children?: string;
    className?: string;
    config?: any;
    inline?: boolean;
    fallbackPlain?: boolean;
}
export declare const Mermaid: React.FC<MermaidProps>;
export default Mermaid;
