import { SpcWarningSeverity, SpcWarningCode, SpcWarningCategory } from "../logic/spc";
export interface DiagnosticsItem {
    code: SpcWarningCode;
    severity: SpcWarningSeverity;
    category: SpcWarningCategory;
    message: string;
    context?: Record<string, unknown>;
}
export interface DiagnosticsFilter {
    severities?: SpcWarningSeverity[];
    categories?: SpcWarningCategory[];
    codes?: SpcWarningCode[];
}
export declare function DiagnosticsPanel({ warnings, show, formatWarningCategory, formatWarningCode, }: {
    warnings: DiagnosticsItem[];
    show: boolean;
    formatWarningCategory: (c: SpcWarningCategory | string) => string;
    formatWarningCode: (c: SpcWarningCode | string) => string;
}): import("react/jsx-runtime").JSX.Element | null;
