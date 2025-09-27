import type React from "react";
export type PatternBannerShapeKind = "rect" | "hex" | "circle" | "svg";
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
    shadow?: "none" | "soft" | "strong";
};
export type PatternBannerProps = {
    seed?: number;
    width?: number | string;
    height?: number | string;
    density?: number;
    centrality?: number;
    gradients?: string[];
    shapes?: PatternBannerShape[];
    allowOverlaps?: boolean;
    overlapColorPolicy?: 'recolor' | 'skip';
    hexAspectRatio?: number;
    neighbors?: number;
    connectorColor?: string;
    connectorWidth?: number;
    connectorDasharray?: string;
    feature: React.ReactNode;
    featureWidth?: number | string;
    featureLayer?: 'over' | 'under';
    excludeBoxPct?: {
        w: number;
        h: number;
    };
    excludeCirclePct?: {
        r: number;
    };
    excludeEllipsePct?: {
        rx: number;
        ry: number;
    };
    uniformDistribution?: boolean;
    className?: string;
    style?: React.CSSProperties;
};
