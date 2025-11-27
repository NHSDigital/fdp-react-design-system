import StyleDictionary from 'style-dictionary';

/**
 * Simplified Semantic Token Configuration for Phase 4
 * Focus on building semantic relationships first
 */

// Simple format for semantic tokens TypeScript
StyleDictionary.registerFormat({
  name: 'typescript/semantic-simple',
  format: ({ dictionary }) => {
    const header = `// Do not edit directly, this file was auto-generated.

export interface SemanticIntentTokens {
  primary: string;
  secondary: string;
  warning: string;
  success: string;
  neutral: string;
  info: string;
}

export interface SemanticContextTokens {
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
}

export interface SemanticSurfaceTokens {
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
}

export interface SemanticTokens {
  intent: SemanticIntentTokens;
  context: SemanticContextTokens;
  surface: SemanticSurfaceTokens;
}

`;

    // Build the tokens object from the dictionary
    const buildNestedObject = (tokens, prefix = 'semantic') => {
      const result = {};
      
      tokens.forEach(token => {
        if (token.path[0] === 'semantic') {
          const path = token.path.slice(1); // Remove 'semantic' prefix
          let current = result;
          
          // Navigate to the correct nested location
          for (let i = 0; i < path.length - 1; i++) {
            if (!current[path[i]]) {
              current[path[i]] = {};
            }
            current = current[path[i]];
          }
          
          // Set the final value
          current[path[path.length - 1]] = token.value;
        }
      });
      
      return result;
    };
    
    const semanticObj = buildNestedObject(dictionary.allTokens);
    
    const tokenExports = `export const semanticTokens: SemanticTokens = ${JSON.stringify(semanticObj, null, 2)};

export default semanticTokens;
`;
    
    return header + tokenExports;
  }
});

// Simple SCSS format for semantic tokens
StyleDictionary.registerFormat({
  name: 'scss/semantic-simple',
  format: ({ dictionary }) => {
    const header = `// Do not edit directly, this file was auto-generated.

`;

    let variables = '';
    
    // Generate SCSS variables
    dictionary.allTokens.forEach(token => {
      if (token.path[0] === 'semantic') {
        const variableName = token.path.join('-').replace(/_/g, '-');
        variables += `$${variableName}: ${token.value};\n`;
      }
    });
    
    // Add helper functions
    const helpers = `
// Semantic token helper functions
@use "sass:map";
@function semantic-intent($key) {
  $intent-map: (
    primary: $semantic-intent-primary,
    secondary: $semantic-intent-secondary,
    warning: $semantic-intent-warning,
    success: $semantic-intent-success,
    neutral: $semantic-intent-neutral,
    info: $semantic-intent-info
  );
  @return map.get($intent-map, $key);
}

@function semantic-form-border($state: default) {
  $form-border-map: (
    default: $semantic-context-form-border-default,
    focus: $semantic-context-form-border-focus,
    error: $semantic-context-form-border-error,
    success: $semantic-context-form-border-success
  );
  @return map.get($form-border-map, $state);
}

@function semantic-form-text($state: default) {
  $form-text-map: (
    default: $semantic-context-form-text-default,
    placeholder: $semantic-context-form-text-placeholder,
    disabled: $semantic-context-form-text-disabled,
    error: $semantic-context-form-text-error
  );
  @return map.get($form-text-map, $state);
}
`;
    
    return header + variables + helpers;
  }
});

// Configuration
const semanticConfig = {
  source: [
    'packages/nhs-fdp/tokens/colors.json',
    'packages/nhs-fdp/tokens/data-viz.json',
    'packages/nhs-fdp/tokens/semantic-data-viz.json'
  ],
  platforms: {
    // TypeScript semantic tokens
    typescript: {
      transformGroup: 'js',
      buildPath: 'packages/nhs-fdp/dist/typescript/',
      files: [{
        destination: 'semantic-tokens.ts',
        format: 'typescript/semantic-simple'
      }]
    },
    
    // SCSS semantic tokens
    scss: {
      transformGroup: 'scss',
      buildPath: 'packages/nhs-fdp/dist/scss/',
      files: [{
        destination: '_semantic-enhanced.scss',
        format: 'scss/semantic-simple'
      }]
    }
  }
};

export default semanticConfig;
