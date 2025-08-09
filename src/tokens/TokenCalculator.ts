/**
 * Advanced Token Calculation System
 * Handles mathematical relationships, auto-contrast, and derived token values
 */

const Color = require('color');

export interface TokenCalculationOptions {
  // Color calculation options
  darkenAmount?: number;
  lightenAmount?: number;
  fadeAmount?: number;
  tintAmount?: number;
  
  // Contrast calculation options
  contrastRatio?: number;
  preferredTextColor?: 'light' | 'dark' | 'auto';
  
  // Spacing calculation options
  scaleRatio?: number;
  baseUnit?: number;
}

export class TokenCalculator {
  private static instance: TokenCalculator;
  
  public static getInstance(): TokenCalculator {
    if (!TokenCalculator.instance) {
      TokenCalculator.instance = new TokenCalculator();
    }
    return TokenCalculator.instance;
  }
  
  // Color calculation methods
  
  /**
   * Darken a color by a percentage
   */
  darken(color: string, amount: number = 10): string {
    try {
      return Color(color).darken(amount / 100).hex();
    } catch (error) {
      console.warn(`Failed to darken color ${color}:`, error);
      return color;
    }
  }
  
  /**
   * Lighten a color by a percentage
   */
  lighten(color: string, amount: number = 10): string {
    try {
      return Color(color).lighten(amount / 100).hex();
    } catch (error) {
      console.warn(`Failed to lighten color ${color}:`, error);
      return color;
    }
  }
  
  /**
   * Fade a color by reducing opacity
   */
  fade(color: string, amount: number = 40): string {
    try {
      return Color(color).alpha((100 - amount) / 100).rgb().string();
    } catch (error) {
      console.warn(`Failed to fade color ${color}:`, error);
      return color;
    }
  }
  
  /**
   * Tint a color by mixing with white
   */
  tint(color: string, amount: number = 10): string {
    try {
      return Color(color).mix(Color('#ffffff'), amount / 100).hex();
    } catch (error) {
      console.warn(`Failed to tint color ${color}:`, error);
      return color;
    }
  }
  
  /**
   * Calculate optimal contrast color (black or white) for a background
   */
  autoContrast(backgroundColor: string, options: TokenCalculationOptions = {}): string {
    try {
      const bgColor = Color(backgroundColor);
      const contrastRatio = options.contrastRatio || 4.5; // WCAG AA standard
      
      // Test contrast with white and black
      const whiteContrast = bgColor.contrast(Color('#ffffff'));
      const blackContrast = bgColor.contrast(Color('#000000'));
      
      // If both meet the ratio, prefer based on background luminance
      if (whiteContrast >= contrastRatio && blackContrast >= contrastRatio) {
        if (options.preferredTextColor === 'light') return '#ffffff';
        if (options.preferredTextColor === 'dark') return '#000000';
        
        // Auto-select based on background luminance
        return bgColor.luminosity() > 0.5 ? '#000000' : '#ffffff';
      }
      
      // Return the option that meets the contrast ratio
      if (whiteContrast >= contrastRatio) return '#ffffff';
      if (blackContrast >= contrastRatio) return '#000000';
      
      // If neither meets the ratio, return the better option
      return whiteContrast > blackContrast ? '#ffffff' : '#000000';
      
    } catch (error) {
      console.warn(`Failed to calculate auto-contrast for ${backgroundColor}:`, error);
      return '#000000'; // Safe fallback
    }
  }
  
  /**
   * Calculate a color that meets specific contrast requirements
   */
  calculateContrastColor(
    backgroundColor: string, 
    targetContrast: number = 4.5,
    baseColor: string = '#000000'
  ): string {
    try {
      const bgColor = Color(backgroundColor);
      let testColor = Color(baseColor);
      
      // If the base color already meets contrast, return it
      if (bgColor.contrast(testColor) >= targetContrast) {
        return testColor.hex();
      }
      
      // Adjust lightness to meet contrast requirement
      const bgLuminance = bgColor.luminosity();
      
      if (bgLuminance > 0.5) {
        // Bright background, darken the text color
        while (bgColor.contrast(testColor) < targetContrast && testColor.lightness() > 0) {
          testColor = testColor.darken(0.05);
        }
      } else {
        // Dark background, lighten the text color
        while (bgColor.contrast(testColor) < targetContrast && testColor.lightness() < 100) {
          testColor = testColor.lighten(0.05);
        }
      }
      
      return testColor.hex();
      
    } catch (error) {
      console.warn(`Failed to calculate contrast color:`, error);
      return baseColor;
    }
  }
  
  // Spacing calculation methods
  
  /**
   * Calculate modular spacing scale
   */
  calculateSpacingScale(baseUnit: number = 8, ratio: number = 1.25, steps: number = 10): number[] {
    const scale = [];
    for (let i = 0; i < steps; i++) {
      scale.push(Math.round(baseUnit * Math.pow(ratio, i)));
    }
    return scale;
  }
  
  /**
   * Calculate fluid spacing value for CSS clamp()
   */
  calculateFluidSpacing(
    minValue: number,
    maxValue: number,
    minViewport: number = 320,
    maxViewport: number = 1200
  ): string {
    const slope = (maxValue - minValue) / (maxViewport - minViewport);
    const yIntercept = minValue - slope * minViewport;
    
    return `clamp(${minValue}px, ${yIntercept.toFixed(2)}px + ${(slope * 100).toFixed(2)}vw, ${maxValue}px)`;
  }
  
  // Typography calculation methods
  
  /**
   * Calculate type scale based on ratio
   */
  calculateTypeScale(baseSize: number = 16, ratio: number = 1.25, steps: number = 8): number[] {
    const scale = [];
    
    // Generate smaller sizes (negative steps)
    for (let i = -2; i <= steps; i++) {
      const size = Math.round(baseSize * Math.pow(ratio, i));
      scale.push(size);
    }
    
    return scale;
  }
  
  /**
   * Calculate optimal line height for font size
   */
  calculateLineHeight(fontSize: number): number {
    // Use golden ratio-based calculation with constraints
    const goldenRatio = 1.618;
    let lineHeight = fontSize * goldenRatio;
    
    // Apply constraints for readability
    const minLineHeight = fontSize * 1.2;
    const maxLineHeight = fontSize * 1.8;
    
    lineHeight = Math.max(minLineHeight, Math.min(maxLineHeight, lineHeight));
    
    return Math.round(lineHeight * 100) / 100; // Round to 2 decimal places
  }
  
  // Token resolution methods
  
  /**
   * Resolve calculated token values from token definitions
   */
  resolveCalculatedToken(tokenValue: string, tokenRegistry: Record<string, any>): string {
    // Match calculation patterns
    const calculationPatterns = {
      darken: /calculated-darken\(([^,]+),\s*(\d+)%?\)/,
      lighten: /calculated-lighten\(([^,]+),\s*(\d+)%?\)/,
      fade: /calculated-fade\(([^,]+),\s*(\d+)%?\)/,
      tint: /calculated-tint\(([^,]+),\s*(\d+)%?\)/,
      autoContrast: /auto-contrast\(([^)]+)\)/,
    };
    
    // Check each pattern
    for (const [operation, pattern] of Object.entries(calculationPatterns)) {
      const match = tokenValue.match(pattern);
      if (match) {
        const baseValue = this.resolveTokenReference(match[1], tokenRegistry);
        const amount = match[2] ? parseInt(match[2]) : undefined;
        
        switch (operation) {
          case 'darken':
            return this.darken(baseValue, amount);
          case 'lighten':
            return this.lighten(baseValue, amount);
          case 'fade':
            return this.fade(baseValue, amount);
          case 'tint':
            return this.tint(baseValue, amount);
          case 'autoContrast':
            return this.autoContrast(baseValue);
        }
      }
    }
    
    return tokenValue; // Return unchanged if no calculation pattern matched
  }
  
  /**
   * Resolve token references like {semantic.intent.primary}
   */
  private resolveTokenReference(reference: string, tokenRegistry: Record<string, any>): string {
    // Remove braces if present
    const cleanRef = reference.replace(/[{}]/g, '');
    
    // Split path and traverse the token registry
    const path = cleanRef.split('.');
    let current = tokenRegistry;
    
    for (const segment of path) {
      if (current && typeof current === 'object' && segment in current) {
        current = current[segment];
      } else {
        console.warn(`Token reference not found: ${reference}`);
        return reference; // Return original if not found
      }
    }
    
    // If the resolved value has a $value property, use that
    if (current && typeof current === 'object' && '$value' in current) {
      return current.$value;
    }
    
    // If it's a string, return it
    if (typeof current === 'string') {
      return current;
    }
    
    console.warn(`Invalid token value for: ${reference}`);
    return reference;
  }
}

// Create and export singleton instance
export const tokenCalculator = TokenCalculator.getInstance();

// Export convenient methods
export const {
  darken,
  lighten,
  fade,
  tint,
  autoContrast,
  calculateContrastColor,
  calculateSpacingScale,
  calculateFluidSpacing,
  calculateTypeScale,
  calculateLineHeight,
  resolveCalculatedToken
} = tokenCalculator;
