/**
 * Enhanced viewport detection with device context
 */
interface DeviceContext {
    viewport: 'mobile' | 'tablet' | 'desktop';
    orientation: 'portrait' | 'landscape';
    touchCapable: boolean;
    highDensity: boolean;
    reducedMotion: boolean;
    forcedColors: boolean;
}
/**
 * Layout preferences based on data characteristics
 */
interface DataCharacteristics {
    columnCount: number;
    rowCount: number;
    hasComplexData: boolean;
    hasPriorityData: boolean;
    primaryDataType: 'text' | 'numeric' | 'mixed';
}
/**
 * Intelligent layout recommendation
 */
interface LayoutRecommendation {
    primary: 'cards' | 'table' | 'hybrid';
    fallback: 'cards' | 'table' | 'hybrid';
    reason: string;
    confidence: number;
}
/**
 * Hook for intelligent responsive layout detection
 */
export declare function useIntelligentLayout(dataCharacteristics: DataCharacteristics, userPreference?: 'cards' | 'table' | 'auto'): {
    deviceContext: DeviceContext;
    recommendedLayout: LayoutRecommendation;
    currentLayout: 'cards' | 'table' | 'hybrid';
    layoutHistory: string[];
};
/**
 * Performance monitoring for layout transitions
 */
export declare function useLayoutPerformance(): {
    metrics: {
        renderTime: number;
        layoutShifts: number;
        interactionTime: number;
    };
    measureLayoutTransition: (fromLayout: string, toLayout: string) => void;
};
/**
 * Accessibility helpers for layout transitions
 */
export declare function useLayoutAccessibility(): {
    announceLayoutChange: (newLayout: string, reason: string) => void;
    focusManagement: (_newLayout: string) => void;
};
export {};
