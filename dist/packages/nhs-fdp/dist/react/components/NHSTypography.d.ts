import React from 'react';
import { CSSProperties } from 'react';
export declare const getResponsiveStyles: (fontSize: {
    mobile: string;
    tablet: string;
    print?: string;
}, marginBottom: {
    mobile: string;
    tablet: string;
}) => CSSProperties & {
    "@media (min-width: 768px)": CSSProperties;
    "@media print": CSSProperties;
};
export declare const NHSHeading1: React.FC<{
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}>;
export declare const NHSHeading2: React.FC<{
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}>;
export declare const NHSHeading3: React.FC<{
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}>;
export declare const NHSHeading4: React.FC<{
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}>;
export declare const NHSHeading5: React.FC<{
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}>;
export declare const NHSBodyText: React.FC<{
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}>;
export declare const NHSBodyTextLarge: React.FC<{
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}>;
export declare const NHSBodyTextSmall: React.FC<{
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}>;
export declare const NHSLedeText: React.FC<{
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}>;
export declare const NHSLedeTextSmall: React.FC<{
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}>;
