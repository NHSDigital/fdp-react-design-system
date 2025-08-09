import StyleDictionary from 'style-dictionary';
import Color from 'color';

/**
 * Enhanced Style Dictionary Configuration for Phase 4 Advanced Tokens
 * Supports semantic relationships, calculated values, and advanced token patterns
 */

// Token Calculator (inline for ES module compatibility)
class TokenCalculator {
  static instance = null;
  
  static getInstance() {
    if (!TokenCalculator.instance) {
      TokenCalculator.instance = new TokenCalculator();
    }
    return TokenCalculator.instance;
  }
  
  darken(color, amount = 10) {
    try {
      return Color(color).darken(amount / 100).hex();
    } catch (error) {
      console.warn(`Failed to darken color ${color}:`, error);
      return color;
    }
  }
  
  lighten(color, amount = 10) {
    try {
      return Color(color).lighten(amount / 100).hex();
    } catch (error) {
      console.warn(`Failed to lighten color ${color}:`, error);
      return color;
    }
  }
  
  fade(color, amount = 40) {
    try {
      return Color(color).alpha((100 - amount) / 100).rgb().string();
    } catch (error) {
      console.warn(`Failed to fade color ${color}:`, error);
      return color;
    }
  }
  
  tint(color, amount = 10) {
    try {
      return Color(color).mix(Color('#ffffff'), amount / 100).hex();
    } catch (error) {
      console.warn(`Failed to tint color ${color}:`, error);
      return color;
    }
  }
  
  autoContrast(backgroundColor) {
    try {
      const bgColor = Color(backgroundColor);
      const whiteContrast = bgColor.contrast(Color('#ffffff'));
      const blackContrast = bgColor.contrast(Color('#000000'));
      
      return whiteContrast > blackContrast ? '#ffffff' : '#000000';
    } catch (error) {
      console.warn(`Failed to calculate auto-contrast for ${backgroundColor}:`, error);
      return '#000000';
    }
  }
  
  resolveCalculatedToken(tokenValue, tokenRegistry) {
    const calculationPatterns = {
      darken: /calculated-darken\(([^,]+),\s*(\d+)%?\)/,
      lighten: /calculated-lighten\(([^,]+),\s*(\d+)%?\)/,
      fade: /calculated-fade\(([^,]+),\s*(\d+)%?\)/,
      tint: /calculated-tint\(([^,]+),\s*(\d+)%?\)/,
      autoContrast: /auto-contrast\(([^)]+)\)/,
    };
    
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
    
    return tokenValue;
  }
  
  resolveTokenReference(reference, tokenRegistry) {
    const cleanRef = reference.replace(/[{}]/g, '');
    const path = cleanRef.split('.');
    let current = tokenRegistry;
    
    for (const segment of path) {
      if (current && typeof current === 'object' && segment in current) {
        current = current[segment];
      } else {
        return reference;
      }
    }
    
    if (current && typeof current === 'object' && '$value' in current) {
      return current.$value;
    }
    
    if (typeof current === 'string') {
      return current;
    }
    
    return reference;
  }
}

const tokenCalculator = TokenCalculator.getInstance();

// Custom transform for resolving calculated token values
StyleDictionary.registerTransform({
  name: 'semantic/calculated',
  type: 'value',
  matcher: (token) => {
    return typeof token.value === 'string' && (
      token.value.includes('calculated-') ||
      token.value.includes('auto-contrast')
    );
  },
  transformer: (token, dictionary) => {
    try {
      // Build a registry of all token values for reference resolution
      const tokenRegistry = {};
      
      // Flatten the dictionary for easier access
      dictionary.allTokens.forEach(t => {
        const path = t.path.join('.');
        tokenRegistry[path] = t.value;
      });
      
      // Resolve the calculated value
      return tokenCalculator.resolveCalculatedToken(token.value, tokenRegistry);
    } catch (error) {
      console.warn(`Failed to calculate token ${token.name}:`, error);
      return token.value; // Return original value if calculation fails
    }
  }
});

// Custom transform for semantic color relationships
StyleDictionary.registerTransform({
  name: 'semantic/relationships',
  type: 'value',
  matcher: (token) => {
    return token.path && token.path.includes('relationship');
  },
  transformer: (token, dictionary) => {
    // For relationship tokens, ensure they reference the correct base values
    if (typeof token.value === 'string' && token.value.startsWith('{')) {
      // This is a reference, let Style Dictionary handle it normally
      return token.value;
    }
    
    return token.value;
  }
});

// Custom format for generating advanced semantic token types
StyleDictionary.registerFormat({
  name: 'typescript/semantic-advanced',
  formatter: ({ dictionary }) => {
    const header = `// Do not edit directly, this file was auto-generated.

export interface SemanticTokens {
  intent: {
    primary: string;
    secondary: string;
    warning: string;
    success: string;
    neutral: string;
    info: string;
  };
  
  context: {
    form: {
      border: {
        default: string;
        focus: string;
        error: string;
        success: string;
      };
      background: {
        default: string;
        disabled: string;
        readonly: string;
      };
      text: {
        default: string;
        placeholder: string;
        disabled: string;
        error: string;
      };
    };
    
    navigation: {
      background: {
        header: string;
        footer: string;
        sidebar: string;
      };
      text: {
        primary: string;
        secondary: string;
        active: string;
      };
      accent: {
        hover: string;
        active: string;
        border: string;
      };
    };
    
    content: {
      background: {
        primary: string;
        secondary: string;
        elevated: string;
      };
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      accent: {
        link: string;
        highlight: string;
        border: string;
      };
    };
  };
  
  surface: {
    elevation: {
      0: string;
      1: string;
      2: string;
      3: string;
    };
    interactive: {
      default: string;
      hover: string;
      active: string;
      selected: string;
    };
  };
}

`;

    // Generate the semantic tokens object
    const semanticTokens = {};
    
    // Group tokens by semantic categories
    dictionary.allTokens.forEach(token => {
      if (token.path[0] === 'semantic') {
        const category = token.path[1];
        const subcategory = token.path[2];
        const property = token.path.slice(3).join('.');
        
        if (!semanticTokens[category]) {
          semanticTokens[category] = {};
        }
        
        if (!semanticTokens[category][subcategory]) {
          semanticTokens[category][subcategory] = {};
        }
        
        // Handle nested properties
        const keys = property.split('.');
        let current = semanticTokens[category][subcategory];
        
        for (let i = 0; i < keys.length - 1; i++) {
          if (!current[keys[i]]) {
            current[keys[i]] = {};
          }
          current = current[keys[i]];
        }
        
        current[keys[keys.length - 1]] = `"${token.value}"`;
      }
    });
    
    // Generate the export
    const exportObject = `export const semanticTokens: SemanticTokens = ${JSON.stringify(semanticTokens, null, 2).replace(/"/g, '')};\n\nexport default semanticTokens;`;
    
    return header + exportObject;
  }
});

// Custom format for advanced SCSS semantic tokens
StyleDictionary.registerFormat({
  name: 'scss/semantic-advanced',
  formatter: ({ dictionary }) => {
    const header = `// Do not edit directly, this file was auto-generated.

`;

    let output = header;
    
    // Generate semantic token variables
    dictionary.allTokens.forEach(token => {
      if (token.path[0] === 'semantic') {
        const variableName = token.path.join('-').replace(/_/g, '-');
        output += `$${variableName}: ${token.value};\n`;
      }
    });
    
    // Generate semantic maps for easier access
    output += `
// Semantic token maps for programmatic access
$semantic-intent: (
  primary: $semantic-intent-primary,
  secondary: $semantic-intent-secondary,
  warning: $semantic-intent-warning,
  success: $semantic-intent-success,
  neutral: $semantic-intent-neutral,
  info: $semantic-intent-info
);

$semantic-context-form: (
  border-default: $semantic-context-form-border-default,
  border-focus: $semantic-context-form-border-focus,
  border-error: $semantic-context-form-border-error,
  border-success: $semantic-context-form-border-success,
  background-default: $semantic-context-form-background-default,
  background-disabled: $semantic-context-form-background-disabled,
  background-readonly: $semantic-context-form-background-readonly,
  text-default: $semantic-context-form-text-default,
  text-placeholder: $semantic-context-form-text-placeholder,
  text-disabled: $semantic-context-form-text-disabled,
  text-error: $semantic-context-form-text-error
);

// Helper functions for semantic token access
@function semantic-intent($key) {
  @return map-get($semantic-intent, $key);
}

@function semantic-form($key) {
  @return map-get($semantic-context-form, $key);
}
`;
    
    return output;
  }
});

// Custom format for React hooks with semantic tokens
StyleDictionary.registerFormat({
  name: 'javascript/semantic-hooks',
  formatter: ({ dictionary }) => {
    const header = `// Do not edit directly, this file was auto-generated.

import { useMemo } from 'react';
import type { SemanticTokens } from './semantic-tokens';

`;

    // Generate semantic tokens object
    const semanticTokens = {};
    
    dictionary.allTokens.forEach(token => {
      if (token.path[0] === 'semantic') {
        const category = token.path[1];
        const subcategory = token.path[2];
        const property = token.path.slice(3).join('.');
        
        if (!semanticTokens[category]) {
          semanticTokens[category] = {};
        }
        
        if (!semanticTokens[category][subcategory]) {
          semanticTokens[category][subcategory] = {};
        }
        
        // Handle nested properties
        const keys = property.split('.');
        let current = semanticTokens[category][subcategory];
        
        for (let i = 0; i < keys.length - 1; i++) {
          if (!current[keys[i]]) {
            current[keys[i]] = {};
          }
          current = current[keys[i]];
        }
        
        current[keys[keys.length - 1]] = token.value;
      }
    });
    
    const hooks = `
/**
 * Hook for accessing semantic intent tokens
 */
export function useSemanticIntent() {
  return useMemo(() => ${JSON.stringify(semanticTokens.intent || {}, null, 4)}, []);
}

/**
 * Hook for accessing semantic context tokens
 */
export function useSemanticContext() {
  return useMemo(() => ${JSON.stringify(semanticTokens.context || {}, null, 4)}, []);
}

/**
 * Hook for accessing semantic surface tokens
 */
export function useSemanticSurface() {
  return useMemo(() => ${JSON.stringify(semanticTokens.surface || {}, null, 4)}, []);
}

/**
 * Hook for accessing all semantic tokens
 */
export function useSemanticTokens(): SemanticTokens {
  const intent = useSemanticIntent();
  const context = useSemanticContext();
  const surface = useSemanticSurface();
  
  return useMemo(() => ({
    intent,
    context,
    surface
  }), [intent, context, surface]);
}

/**
 * Hook for accessing semantic tokens with theme support
 */
export function useSemanticTokensWithTheme(theme?: 'light' | 'dark' | 'auto'): SemanticTokens {
  const tokens = useSemanticTokens();
  
  return useMemo(() => {
    if (!theme || theme === 'light') {
      return tokens;
    }
    
    // For dark theme, return modified tokens
    // This would be expanded with actual dark theme calculations
    return tokens;
  }, [tokens, theme]);
}
`;
    
    return header + hooks;
  }
});

// Enhanced configuration for semantic tokens
const semanticConfig = {
  source: [
    'packages/nhs-fdp/tokens/semantic-enhanced.json'
  ],
  platforms: {
    // TypeScript semantic tokens
    typescript: {
      transformGroup: 'js',
      transforms: ['semantic/calculated', 'semantic/relationships', 'attribute/cti', 'name/cti/camel', 'size/px', 'color/hex'],
      buildPath: 'packages/nhs-fdp/dist/typescript/',
      files: [{
        destination: 'semantic-tokens.ts',
        format: 'typescript/semantic-advanced'
      }]
    },
    
    // SCSS semantic tokens
    scss: {
      transformGroup: 'scss',
      transforms: ['semantic/calculated', 'semantic/relationships', 'attribute/cti', 'name/cti/kebab', 'time/seconds', 'content/icon', 'size/px', 'color/css'],
      buildPath: 'packages/nhs-fdp/dist/scss/',
      files: [{
        destination: '_semantic-enhanced.scss',
        format: 'scss/semantic-advanced'
      }]
    },
    
    // React hooks
    reactHooks: {
      transformGroup: 'js',
      transforms: ['semantic/calculated', 'semantic/relationships', 'attribute/cti', 'name/cti/camel', 'size/px', 'color/hex'],
      buildPath: 'packages/nhs-fdp/dist/react/hooks/',
      files: [{
        destination: 'useSemanticTokens.ts',
        format: 'javascript/semantic-hooks'
      }]
    }
  }
};

export default semanticConfig;
