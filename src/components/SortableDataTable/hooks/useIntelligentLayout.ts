import { useState, useEffect, useCallback } from 'react';

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
  confidence: number; // 0-1
}

/**
 * Hook for intelligent responsive layout detection
 */
export function useIntelligentLayout(
  dataCharacteristics: DataCharacteristics,
  userPreference?: 'cards' | 'table' | 'auto'
): {
  deviceContext: DeviceContext;
  recommendedLayout: LayoutRecommendation;
  currentLayout: 'cards' | 'table' | 'hybrid';
  layoutHistory: string[];
} {
  const [deviceContext, setDeviceContext] = useState<DeviceContext>({
    viewport: 'mobile',
    orientation: 'portrait',
    touchCapable: false,
    highDensity: false,
    reducedMotion: false,
    forcedColors: false
  });

  const [layoutHistory, setLayoutHistory] = useState<string[]>([]);

  // Detect device capabilities
  const updateDeviceContext = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const newContext: DeviceContext = {
      viewport: width < 768 ? 'mobile' : width < 1200 ? 'tablet' : 'desktop',
      orientation: width > height ? 'landscape' : 'portrait',
      touchCapable: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
      highDensity: window.devicePixelRatio > 1.5,
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      forcedColors: window.matchMedia('(forced-colors: active)').matches
    };
    
    setDeviceContext(newContext);
  }, []);

  // AI-powered layout recommendation
  const getLayoutRecommendation = useCallback((): LayoutRecommendation => {
    const { viewport, touchCapable, orientation } = deviceContext;
    const { columnCount, rowCount, hasComplexData, hasPriorityData } = dataCharacteristics;

    // Mobile-first decision tree
    if (viewport === 'mobile') {
      if (columnCount <= 3 && !hasComplexData) {
        return {
          primary: 'cards',
          fallback: 'cards',
          reason: 'Mobile viewport with simple data structure optimized for cards',
          confidence: 0.95
        };
      }
      
      if (hasPriorityData) {
        return {
          primary: 'cards',
          fallback: 'table',
          reason: 'Priority healthcare data displays better in card format on mobile',
          confidence: 0.9
        };
      }
      
      return {
        primary: 'cards',
        fallback: 'table',
        reason: 'Mobile viewport defaults to card layout for better UX',
        confidence: 0.8
      };
    }

    // Tablet logic
    if (viewport === 'tablet') {
      if (touchCapable && orientation === 'portrait') {
        return {
          primary: 'hybrid',
          fallback: 'cards',
          reason: 'Touch tablet in portrait benefits from hybrid card-table layout',
          confidence: 0.85
        };
      }
      
      if (columnCount > 5) {
        return {
          primary: 'table',
          fallback: 'hybrid',
          reason: 'Many columns require table layout even on tablet',
          confidence: 0.8
        };
      }
      
      return {
        primary: 'hybrid',
        fallback: 'table',
        reason: 'Tablet viewport optimized for hybrid layout',
        confidence: 0.75
      };
    }

    // Desktop logic
    if (columnCount > 3 || rowCount > 20) {
      return {
        primary: 'table',
        fallback: 'hybrid',
        reason: 'Large datasets require full table functionality',
        confidence: 0.9
      };
    }
    
    return {
      primary: 'table',
      fallback: 'table',
      reason: 'Desktop viewport with standard data complexity',
      confidence: 0.8
    };
  }, [deviceContext, dataCharacteristics]);

  // Determine current layout
  const getCurrentLayout = useCallback((): 'cards' | 'table' | 'hybrid' => {
    // User preference override
    if (userPreference && userPreference !== 'auto') {
      return userPreference;
    }
    
    const recommendation = getLayoutRecommendation();
    return recommendation.primary;
  }, [userPreference, getLayoutRecommendation]);

  // Update device context on mount and resize
  useEffect(() => {
    updateDeviceContext();
    
    const handleResize = () => {
      updateDeviceContext();
    };
    
    const handleOrientationChange = () => {
      setTimeout(updateDeviceContext, 100); // Small delay for orientation change
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    
    // Listen for media query changes
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const forcedColorsQuery = window.matchMedia('(forced-colors: active)');
    
    const handleMediaChange = () => updateDeviceContext();
    
    reducedMotionQuery.addEventListener('change', handleMediaChange);
    forcedColorsQuery.addEventListener('change', handleMediaChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
      reducedMotionQuery.removeEventListener('change', handleMediaChange);
      forcedColorsQuery.removeEventListener('change', handleMediaChange);
    };
  }, [updateDeviceContext]);

  // Track layout changes for analytics
  const currentLayout = getCurrentLayout();
  useEffect(() => {
    const layoutId = `${currentLayout}-${deviceContext.viewport}-${Date.now()}`;
    setLayoutHistory(prev => [...prev.slice(-9), layoutId]); // Keep last 10 changes
  }, [currentLayout, deviceContext.viewport]);

  return {
    deviceContext,
    recommendedLayout: getLayoutRecommendation(),
    currentLayout,
    layoutHistory
  };
}

/**
 * Performance monitoring for layout transitions
 */
export function useLayoutPerformance() {
  const [metrics, setMetrics] = useState({
    renderTime: 0,
    layoutShifts: 0,
    interactionTime: 0
  });

  const measureLayoutTransition = useCallback((fromLayout: string, toLayout: string) => {
    const startTime = performance.now();
    
    // Use ResizeObserver to detect layout shifts
    let shiftCount = 0;
    const observer = new ResizeObserver(() => {
      shiftCount++;
    });
    
    // Observe the main container
    const container = document.querySelector('.aria-tabs-datagrid-adaptive');
    if (container) {
      observer.observe(container);
    }
    
    // Measure completion
    requestAnimationFrame(() => {
      const endTime = performance.now();
      
      setMetrics(prev => ({
        ...prev,
        renderTime: endTime - startTime,
        layoutShifts: shiftCount
      }));
      
      observer.disconnect();
      
      // Log for analytics
      console.log(`Layout transition: ${fromLayout} → ${toLayout}`, {
        renderTime: endTime - startTime,
        layoutShifts: shiftCount
      });
    });
  }, []);

  return { metrics, measureLayoutTransition };
}

/**
 * Accessibility helpers for layout transitions
 */
export function useLayoutAccessibility() {
  const announceLayoutChange = useCallback((newLayout: string, reason: string) => {
    // Create live region for screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = `Layout changed to ${newLayout} view. ${reason}`;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  const focusManagement = useCallback((_newLayout: string) => {
    // Maintain focus position across layout changes
    const activeElement = document.activeElement;
    const activeId = activeElement?.id;
    
    if (activeId) {
      // Try to maintain focus after layout change
      requestAnimationFrame(() => {
        const newActiveElement = document.getElementById(activeId);
        if (newActiveElement) {
          newActiveElement.focus();
        } else {
          // Focus first interactive element in new layout
          const firstFocusable = document.querySelector(
            '.aria-tabs-datagrid-adaptive [tabindex="0"], .aria-tabs-datagrid-adaptive button'
          ) as HTMLElement;
          firstFocusable?.focus();
        }
      });
    }
  }, []);

  return { announceLayoutChange, focusManagement };
}
