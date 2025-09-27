import type React from 'react';
export type PatternBannerShapeKind = 'rect' | 'hex' | 'circle' | 'svg';
export type PatternBannerShape = {
    kind: PatternBannerShapeKind;
    src?: string;
    width?: number;
    height?: number;
    size?: number;
    x: number;
    y: number;
    rotate?: number;
    depth?: number;
    fill?: string;
    shadow?: 'none' | 'soft' | 'strong';
};
export type PatternBannerProps = {
    seed?: number;
    width?: number | string;
    height?: number | string;
    density?: number;
    gradients?: string[];
    shapes?: PatternBannerShape[];
    feature: React.ReactNode;
    featureWidth?: number | string;
    excludeBoxPct?: {
        w: number;
        h: number;
    };
    className?: string;
    style?: React.CSSProperties;
};
