import * as React from "react";
import "./Subnav.scss";
export interface SubnavFilterProps {
    id: string;
    name: string;
    label: string;
    value: string;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Array<{
        value: string;
        label: string;
    }>;
}
export interface SubnavProps {
    /** Array of filter configurations */
    filters: SubnavFilterProps[];
    /** Additional CSS classes */
    className?: string;
    /** Background color (default: #f0f4f5) */
    backgroundColor?: string;
    /** Border color (default: #d8dde0) */
    borderColor?: string;
}
export declare const Subnav: React.FC<SubnavProps>;
export default Subnav;
