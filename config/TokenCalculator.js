/**
 * Advanced Token Calculation System (JavaScript version for Style Dictionary)
 * Handles mathematical relationships, auto-contrast, and derived token values
 */

const Color = require('color');

class TokenCalculator {
  static instance = null;
  
  static getInstance() {
    if (!TokenCalculator.instance) {
      TokenCalculator.instance = new TokenCalculator();
    }
    return TokenCalculator.instance;
  }
  
  // Color calculation methods
  
  /**
   * Darken a color by a percentage
   */
  darken(color, amount = 10) {
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
  lighten(color, amount = 10) {
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
  fade(color, amount = 40) {
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
  tint(color, amount = 10) {
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
  autoContrast(backgroundColor, options = {}) {
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
  calculateContrastColor(backgroundColor, targetContrast = 4.5, baseColor = '#000000') {
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
  
  /**
   * Resolve calculated token values from token definitions
   */
  resolveCalculatedToken(tokenValue, tokenRegistry) {
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
  resolveTokenReference(reference, tokenRegistry) {
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
const tokenCalculator = TokenCalculator.getInstance();

module.exports = {
  TokenCalculator,
  tokenCalculator
};
