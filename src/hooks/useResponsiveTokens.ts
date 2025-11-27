import React, { useState, useEffect, useCallback } from 'react';

export type DensityMode = 'compact' | 'comfortable' | 'spacious';
export type ContrastMode = 'normal' | 'high';
export type MotionMode = 'normal' | 'reduced';
export type BrandVariant = 'nhs-england' | 'nhs-scotland' | 'nhs-wales';

export interface ResponsiveTokenValue {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface DynamicTokensState {
  density: DensityMode;
  contrast: ContrastMode;
  motion: MotionMode;
  brand: BrandVariant;
}

export interface ResponsiveTokensManager {
  // State
  density: DensityMode;
  contrast: ContrastMode;
  motion: MotionMode;
  brand: BrandVariant;
  
  // Actions
  setDensity: (mode: DensityMode) => void;
  setContrast: (mode: ContrastMode) => void;
  setMotion: (mode: MotionMode) => void;
  setBrand: (variant: BrandVariant) => void;
  
  // Utilities
  getResponsiveToken: (tokenPath: string) => ResponsiveTokenValue | string;
  applySystemPreferences: () => void;
  resetToDefaults: () => void;
}

/**
 * Hook for managing responsive and dynamic design tokens
 * 
 * Features:
 * - Density modes (compact, comfortable, spacious)
 * - Contrast preferences (normal, high contrast)
 * - Motion preferences (normal, reduced motion)
 * - Brand variants (NHS England, Scotland, Wales)
 * - Responsive token values (mobile, tablet, desktop)
 * - System preference detection
 */
export function useResponsiveTokens(): ResponsiveTokensManager {
  const [state, setState] = useState<DynamicTokensState>({
    density: 'comfortable',
    contrast: 'normal',
    motion: 'normal',
    brand: 'nhs-england'
  });

  // Apply data attributes to document element
  const applyAttributes = useCallback((newState: DynamicTokensState) => {
    const root = document.documentElement;
    
    root.setAttribute('data-density', newState.density);
    root.setAttribute('data-contrast', newState.contrast);
    root.setAttribute('data-motion', newState.motion);
    root.setAttribute('data-brand', newState.brand);
  }, []);

  // Detect system preferences
  const applySystemPreferences = useCallback(() => {
    const updates: Partial<DynamicTokensState> = {};
    
    // Detect high contrast preference
    if (window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches) {
      updates.contrast = 'high' as ContrastMode;
    }
    
    // Detect reduced motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      updates.motion = 'reduced' as MotionMode;
    }
    
    if (Object.keys(updates).length > 0) {
      setState(prev => {
        const newState = { ...prev, ...updates };
        applyAttributes(newState);
        return newState;
      });
    }
  }, [applyAttributes]);

  // Initialize and set up listeners
  useEffect(() => {
    // Apply initial state
    applyAttributes(state);
    
    // Apply system preferences
    applySystemPreferences();
    
    // Set up media query listeners
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setState(prev => {
        const newState = { ...prev, contrast: (e.matches ? 'high' : 'normal') as ContrastMode };
        applyAttributes(newState);
        return newState;
      });
    };
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setState(prev => {
        const newState = { ...prev, motion: (e.matches ? 'reduced' : 'normal') as MotionMode };
        applyAttributes(newState);
        return newState;
      });
    };
    
    contrastQuery.addEventListener('change', handleContrastChange);
    motionQuery.addEventListener('change', handleMotionChange);
    
    return () => {
      contrastQuery.removeEventListener('change', handleContrastChange);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, [state, applyAttributes, applySystemPreferences]);

  // State setters
  const setDensity = useCallback((mode: DensityMode) => {
    setState(prev => {
      const newState = { ...prev, density: mode };
      applyAttributes(newState);
      
      // Store preference
      localStorage.setItem('nhs-density-preference', mode);
      
      return newState;
    });
  }, [applyAttributes]);

  const setContrast = useCallback((mode: ContrastMode) => {
    setState(prev => {
      const newState = { ...prev, contrast: mode };
      applyAttributes(newState);
      
      // Store preference
      localStorage.setItem('nhs-contrast-preference', mode);
      
      return newState;
    });
  }, [applyAttributes]);

  const setMotion = useCallback((mode: MotionMode) => {
    setState(prev => {
      const newState = { ...prev, motion: mode };
      applyAttributes(newState);
      
      // Store preference
      localStorage.setItem('nhs-motion-preference', mode);
      
      return newState;
    });
  }, [applyAttributes]);

  const setBrand = useCallback((variant: BrandVariant) => {
    setState(prev => {
      const newState = { ...prev, brand: variant };
      applyAttributes(newState);
      
      // Store preference
      localStorage.setItem('nhs-brand-preference', variant);
      
      return newState;
    });
  }, [applyAttributes]);

  // Token utilities
  const getResponsiveToken = useCallback((tokenPath: string): ResponsiveTokenValue | string => {
    // This would typically fetch from a token registry
    // For now, return a placeholder that demonstrates the structure
    const cssVar = `var(--nhs-${tokenPath.replace(/\./g, '-')})`;
    
    // Check if we have responsive values for this token
    const responsiveTokens: Record<string, ResponsiveTokenValue> = {
      'spacing.md': {
        mobile: '1rem',
        tablet: '1.5rem',
        desktop: '2rem'
      },
      'typography.base.size': {
        mobile: '1rem',
        tablet: '1.125rem',
        desktop: '1.25rem'
      },
      'component.button.height': {
        mobile: '2.75rem',
        tablet: '3rem',
        desktop: '3.25rem'
      }
    };
    
    return responsiveTokens[tokenPath] || cssVar;
  }, []);

  const resetToDefaults = useCallback(() => {
    const defaultState: DynamicTokensState = {
      density: 'comfortable',
      contrast: 'normal',
      motion: 'normal',
      brand: 'nhs-england'
    };
    
    setState(defaultState);
    applyAttributes(defaultState);
    
    // Clear stored preferences
    localStorage.removeItem('nhs-density-preference');
    localStorage.removeItem('nhs-contrast-preference');
    localStorage.removeItem('nhs-motion-preference');
    localStorage.removeItem('nhs-brand-preference');
  }, [applyAttributes]);

  return {
    // State
    density: state.density,
    contrast: state.contrast,
    motion: state.motion,
    brand: state.brand,
    
    // Actions
    setDensity,
    setContrast,
    setMotion,
    setBrand,
    
    // Utilities
    getResponsiveToken,
    applySystemPreferences,
    resetToDefaults
  };
}

/**
 * Higher-order component for providing responsive token context
 */
export function withResponsiveTokens<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.ComponentType<P> {
  return function ResponsiveTokensWrapper(props: P) {
    const tokens = useResponsiveTokens();
    
    // Apply initial setup
    React.useEffect(() => {
      tokens.applySystemPreferences();
    }, [tokens]);
    
    return React.createElement(WrappedComponent, props);
  };
}

export default useResponsiveTokens;
