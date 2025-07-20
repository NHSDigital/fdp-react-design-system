import StyleDictionary from 'style-dictionary'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Custom format for TypeScript declarations
StyleDictionary.registerFormat({
  name: 'typescript/es6-declarations',
  format: ({ dictionary, options }) => {
    const header = `// Do not edit directly, this file was auto-generated.

// Base interfaces for tokens
export interface DesignToken {
  value: string;
  type?: string;
  description?: string;
  attributes?: Record<string, any>;
}

export interface DesignTokens {
  [key: string]: DesignToken | DesignTokens;
}

// TypeScript interfaces for NHS composite tokens
export interface ResponsiveProperty<T> {
  mobile: T;
  tablet: T;
  print?: T;
}

export interface NHSHeadingStyle {
  fontFamily: string;
  fontWeight: string;
  fontSize: ResponsiveProperty<string>;
  lineHeight: string;
  marginTop: string;
  marginBottom: ResponsiveProperty<string>;
}

export interface NHSParagraphStyle {
  fontFamily: string;
  fontWeight: string;
  fontSize: ResponsiveProperty<string>;
  lineHeight: string;
  marginTop: string;
  marginBottom: ResponsiveProperty<string>;
}

// NHS Typography System
export interface NHSTypographySystem {
  headings: {
    xl: NHSHeadingStyle;
    l: NHSHeadingStyle;
    m: NHSHeadingStyle;
    s: NHSHeadingStyle;
    xs: NHSHeadingStyle;
  };
  paragraphs: {
    body: NHSParagraphStyle;
    bodyLarge: NHSParagraphStyle;
    bodySmall: NHSParagraphStyle;
    ledeText: NHSParagraphStyle;
    ledeTextSmall: NHSParagraphStyle;
  };
}

`
    const regularTokens = dictionary.allTokens.filter(token => token.$type !== 'composite' && token.type !== 'composite')
    const compositeTokens = dictionary.allTokens.filter(token => token.$type === 'composite' || token.type === 'composite')
    
    // Regular token declarations
    const tokenDeclarations = regularTokens
      .map(token => {
        const name = token.name
        const value = token.value !== undefined ? token.value : token.original?.value || ''
        const comment = token.comment || token.description || ''
        
        return `/** ${comment} */
export declare const ${name}: '${value}';`
      })
      .join('\n\n')
    
    // Composite token declarations
    const compositeDeclarations = compositeTokens
      .map(token => {
        const name = token.name
        const comment = token.comment || token.description || ''
        
        // Determine the type based on the token name
        let tokenType = 'NHSHeadingStyle'
        if (name.includes('Paragraph')) {
          tokenType = 'NHSParagraphStyle'
        }
        
        return `/** ${comment} */
export declare const ${name}: ${tokenType};`
      })
      .join('\n\n')
    
    const exportAll = `
export declare const tokens: DesignTokens;
export default tokens;
`
    
    return header + tokenDeclarations + '\n\n' + compositeDeclarations + exportAll
  }
})

// Custom format for React Theme Provider
StyleDictionary.registerFormat({
  name: 'react/theme-provider',
  format: ({ dictionary, options, file }) => {
    const header = `// Do not edit directly, this file was auto-generated.

import React, { createContext, useContext, ReactNode } from 'react';

// TypeScript interfaces for composite tokens
export interface ResponsiveProperty<T> {
  mobile: T;
  tablet: T;
  print?: T;
}

export interface NHSHeadingStyle {
  fontFamily: string;
  fontWeight: string;
  fontSize: ResponsiveProperty<string>;
  lineHeight: string;
  marginTop: string;
  marginBottom: ResponsiveProperty<string>;
}

export interface NHSParagraphStyle {
  fontFamily: string;
  fontWeight: string;
  fontSize: ResponsiveProperty<string>;
  lineHeight: string;
  marginTop: string;
  marginBottom: ResponsiveProperty<string>;
}

export interface NHSTheme {`

    const tokenTypes = {}
    const compositeTokens = {}
    
    dictionary.allTokens.forEach(token => {
      const category = token.attributes?.category || 'misc'
      
      // Handle composite tokens separately
      if (token.$type === 'composite' || token.type === 'composite') {
        if (token.name.includes('Headings')) {
          if (!compositeTokens.headings) compositeTokens.headings = []
          compositeTokens.headings.push(token)
        } else if (token.name.includes('Paragraphs')) {
          if (!compositeTokens.paragraphs) compositeTokens.paragraphs = []
          compositeTokens.paragraphs.push(token)
        }
      } else {
        // Handle regular tokens
        if (!tokenTypes[category]) tokenTypes[category] = []
        tokenTypes[category].push(token)
      }
    })

    // Build interface for regular tokens
    const regularTokensInterface = Object.keys(tokenTypes)
      .map(category => {
        const safeCategory = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(category) ? category : `'${category}'`
        return `  ${safeCategory}: {
${tokenTypes[category].map(token => `    ${token.name}: string;`).join('\n')}
  };`
      })
      .join('\n')

    // Build interface for composite tokens
    const compositeInterface = `  // NHS Typography System
  headings: {
    xl: NHSHeadingStyle;
    l: NHSHeadingStyle;
    m: NHSHeadingStyle;
    s: NHSHeadingStyle;
    xs: NHSHeadingStyle;
  };
  paragraphs: {
    body: NHSParagraphStyle;
    bodyLarge: NHSParagraphStyle;
    bodySmall: NHSParagraphStyle;
    ledeText: NHSParagraphStyle;
    ledeTextSmall: NHSParagraphStyle;
  };`

    const themeInterface = regularTokensInterface + '\n' + compositeInterface

    // Build theme object for regular tokens
    const regularTokensObject = Object.keys(tokenTypes)
      .map(category => {
        const safeCategory = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(category) ? category : `'${category}'`
        return `  ${safeCategory}: {
${tokenTypes[category].map(token => {
  const value = token.value !== undefined ? token.value : (token.original?.value || token.$value || '')
  return `    ${token.name}: '${value}',`
}).join('\n')}
  },`
      })
      .join('\n')

    // Build theme object for composite tokens dynamically
    const headingComposites = dictionary.allTokens.filter(token => 
      token.$type === 'composite' && token.name.includes('HeadingsNhsuk')
    )
    const paragraphComposites = dictionary.allTokens.filter(token => 
      token.$type === 'composite' && token.name.includes('Paragraphs')
    )

    // Generate headings object dynamically
    const headingsObject = headingComposites.map(token => {
      const key = token.name.replace('HeadingsNhsuk', '').replace('Heading', '').toLowerCase()
      const value = token.value || token.$value
      
      return `    ${key}: {
      fontFamily: "${value.fontFamily}",
      fontWeight: "${value.fontWeight}",
      fontSize: { mobile: "${value.fontSize.mobile}", tablet: "${value.fontSize.tablet}", print: "${value.fontSize.print}" },
      lineHeight: "${value.lineHeight}",
      marginTop: "${value.marginTop}",
      marginBottom: { mobile: "${value.marginBottom.mobile}", tablet: "${value.marginBottom.tablet}" },
    },`
    }).join('\n')

    // Generate paragraphs object dynamically
    const paragraphsObject = paragraphComposites.map(token => {
      const key = token.name.replace('Paragraphs', '')
      // Convert to camelCase: "BodyLarge" -> "bodyLarge"
      const camelCaseKey = key.charAt(0).toLowerCase() + key.slice(1)
      const value = token.value || token.$value
      
      return `    ${camelCaseKey}: {
      fontFamily: "${value.fontFamily}",
      fontWeight: "${value.fontWeight}",
      fontSize: { mobile: "${value.fontSize.mobile}", tablet: "${value.fontSize.tablet}", print: "${value.fontSize.print}" },
      lineHeight: "${value.lineHeight}",
      marginTop: "${value.marginTop}",
      marginBottom: { mobile: "${value.marginBottom.mobile}", tablet: "${value.marginBottom.tablet}" },
    },`
    }).join('\n')

    const compositeTokensObject = `  // NHS Typography System
  headings: {
${headingsObject}
  },
  paragraphs: {
${paragraphsObject}
  },`

    const provider = `
}

export const nhsTheme: NHSTheme = {
${regularTokensObject}
${compositeTokensObject}
};

const ThemeContext = createContext<NHSTheme>(nhsTheme);

export interface ThemeProviderProps {
  children: ReactNode;
  theme?: Partial<NHSTheme>;
}

export const NHSThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  theme = {} 
}) => {
  const mergedTheme = { ...nhsTheme, ...theme };
  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useNHSTheme = (): NHSTheme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useNHSTheme must be used within an NHSThemeProvider');
  }
  return context;
};

export default nhsTheme;`

    return header + themeInterface + provider
  }
})

// Custom format for React hooks
StyleDictionary.registerFormat({
  name: 'react/hooks',
  format: ({ dictionary, options }) => {
    const header = `// Do not edit directly, this file was auto-generated.

import { useMemo } from 'react';
import * as tokens from '../index';

// TypeScript interfaces for composite tokens
export interface ResponsiveProperty<T> {
  mobile: T;
  tablet: T;
  print?: T;
}

export interface NHSHeadingStyle {
  fontFamily: string;
  fontWeight: string;
  fontSize: ResponsiveProperty<string>;
  lineHeight: string;
  marginTop: string;
  marginBottom: ResponsiveProperty<string>;
}

export interface NHSParagraphStyle {
  fontFamily: string;
  fontWeight: string;
  fontSize: ResponsiveProperty<string>;
  lineHeight: string;
  marginTop: string;
  marginBottom: ResponsiveProperty<string>;
}

export interface NHSTypographySystem {
  headings: {
    xl: NHSHeadingStyle;
    l: NHSHeadingStyle;
    m: NHSHeadingStyle;
    s: NHSHeadingStyle;
    xs: NHSHeadingStyle;
  };
  paragraphs: {
    body: NHSParagraphStyle;
    bodyLarge: NHSParagraphStyle;
    bodySmall: NHSParagraphStyle;
    ledeText: NHSParagraphStyle;
    ledeTextSmall: NHSParagraphStyle;
  };
  fonts: {
    family: {
      base: string;
      fallback: string;
      print: string;
    };
    weight: {
      normal: string;
      bold: string;
      light: string;
    };
    sizes: {
      mobile: Record<string, string>;
      tablet: Record<string, string>;
      print: Record<string, string>;
    };
  };
}

`

    const allTokens = dictionary.allTokens
    const colorTokens = allTokens.filter(token => 
      token.type === 'color' || 
      token.$type === 'color' ||
      token.name.toLowerCase().includes('color') ||
      token.name.toLowerCase().includes('border')
    )
    const spacingTokens = allTokens.filter(token => 
      token.type === 'spacing' || 
      token.$type === 'spacing' ||
      /^Spacing\d$/.test(token.name)
    )
    const fontTokens = allTokens.filter(token => 
      token.attributes?.category === 'font' ||
      token.name.toLowerCase().includes('font')
    )
    const responsiveSpacingTokens = allTokens.filter(token => 
      token.name.includes('SpacingResponsive')
    )
    const componentSpacingTokens = allTokens.filter(token => 
      (token.name.includes('ButtonSpacing') || 
       token.name.includes('CardSpacing') || 
       token.name.includes('FormSpacing')) &&
      !token.name.includes('Component')
    )
    
    // Extract composite tokens for dynamic generation
    const headingTokens = allTokens.filter(token => 
      (token.$type === 'composite' || token.type === 'composite') && token.name.includes('Heading')
    )
    const paragraphTokens = allTokens.filter(token => 
      (token.$type === 'composite' || token.type === 'composite') && token.name.includes('Paragraph')
    )

    const borderColors = colorTokens.filter(t => t.name.includes('BorderColor'))
      .map(token => `    ${token.name}: tokens.${token.name},`).join('\n')
    const primaryColors = colorTokens.filter(t => t.name.includes('ColorPrimary'))
      .map(token => `    ${token.name}: tokens.${token.name},`).join('\n')
    const secondaryColors = colorTokens.filter(t => t.name.includes('ColorSecondary'))
      .map(token => `    ${token.name}: tokens.${token.name},`).join('\n')
    const greyColors = colorTokens.filter(t => t.name.includes('ColorGrey'))
      .map(token => `    ${token.name}: tokens.${token.name},`).join('\n')
    const coreSpacing = spacingTokens.filter(t => /^Spacing\d$/.test(t.name))
      .map(token => `    ${token.name}: tokens.${token.name},`).join('\n')
    
    // Dynamic typography structure
    const typography = `    // Semantic device-grouped typography
    Mobile: {${Array.from({length: 7}, (_, i) => {
      const sizes = [14, 16, 19, 22, 26, 36, 48]
      return `
      Size${sizes[i]}: tokens.FontSize${sizes[i]}Mobile,`
    }).join('')}
    },
    Tablet: {${Array.from({length: 7}, (_, i) => {
      const sizes = [14, 16, 19, 22, 26, 36, 48]
      return `
      Size${sizes[i]}: tokens.FontSize${sizes[i]}Tablet,`
    }).join('')}
    },
    Print: {${Array.from({length: 7}, (_, i) => {
      const sizes = [14, 16, 19, 22, 26, 36, 48]
      return `
      Size${sizes[i]}: tokens.FontSize${sizes[i]}Print,`
    }).join('')}
    },
    Family: {
      Base: tokens.FontFamilyBase,
      Fallback: tokens.FontFamilyFallback,
      Print: tokens.FontFamilyPrint,
    },
    Weight: {
      Normal: tokens.FontWeightNormal,
      Bold: tokens.FontWeightBold,
      Light: tokens.FontWeightLight,
    },
    Base: {
      Size: tokens.FontSizeBase,
      LineHeight: tokens.FontLineHeightBase,
    },
    
    // Backward compatibility - individual exports
${fontTokens.map(token => `    ${token.name}: tokens.${token.name},`).join('\n')}`

    // Dynamic responsive spacing structure
    const responsiveSpacingStructure = `    // Semantic device-grouped responsive spacing
    Mobile: {${Array.from({length: 10}, (_, i) => `
      Size${i}: tokens.SpacingResponsive${i}Mobile,`).join('')}
    },
    Tablet: {${Array.from({length: 10}, (_, i) => `
      Size${i}: tokens.SpacingResponsive${i}Tablet,`).join('')}
    },
    
    // Backward compatibility - individual exports
${responsiveSpacingTokens.map(token => `    ${token.name}: tokens.${token.name},`).join('\n')}`

    const buttonSpacing = componentSpacingTokens.filter(t => t.name.includes('ButtonSpacing'))
      .map(token => `    ${token.name}: tokens.${token.name},`).join('\n')
    const cardSpacing = componentSpacingTokens.filter(t => t.name.includes('CardSpacing'))
      .map(token => `    ${token.name}: tokens.${token.name},`).join('\n')
    const formSpacing = componentSpacingTokens.filter(t => t.name.includes('FormSpacing'))
      .map(token => `    ${token.name}: tokens.${token.name},`).join('\n')

    const hooks = `export const useTokens = () => {
  return useMemo(() => tokens, []);
};

export const useColors = () => {
  return useMemo(() => ({
    // Border colors
${borderColors}
    
    // Primary colors
${primaryColors}
    
    // Secondary colors
${secondaryColors}
    
    // Grey scale
${greyColors}
  }), []);
};

export const useSpacing = () => {
  return useMemo(() => ({
${coreSpacing}
  }), []);
};

export const useTypography = () => {
  return useMemo(() => ({
${typography}
  }), []);
};

export const useResponsiveSpacing = () => {
  return useMemo(() => ({
${responsiveSpacingStructure}
  }), []);
};

export const useComponentSpacing = () => {
  return useMemo(() => ({
    // Button spacing
${buttonSpacing}
    
    // Card spacing  
${cardSpacing}
    
    // Form spacing
${formSpacing}
  }), []);
};

// NHS Typography System Hooks
export const useNHSHeadings = () => {
  return useMemo(() => ({
    xl: tokens.HeadingsNhsukHeadingXl,
    l: tokens.HeadingsNhsukHeadingL,
    m: tokens.HeadingsNhsukHeadingM,
    s: tokens.HeadingsNhsukHeadingS,
    xs: tokens.HeadingsNhsukHeadingXs,
  }), []);
};

export const useNHSParagraphs = () => {
  return useMemo(() => ({
    body: tokens.ParagraphsBody,
    bodyLarge: tokens.ParagraphsBodyLarge,
    bodySmall: tokens.ParagraphsBodySmall,
    ledeText: tokens.ParagraphsLedeText,
    ledeTextSmall: tokens.ParagraphsLedeTextSmall,
  }), []);
};

export const useNHSTypographySystem = (): NHSTypographySystem => {
  return useMemo(() => ({
    headings: {
      xl: tokens.HeadingsNhsukHeadingXl,
      l: tokens.HeadingsNhsukHeadingL,
      m: tokens.HeadingsNhsukHeadingM,
      s: tokens.HeadingsNhsukHeadingS,
      xs: tokens.HeadingsNhsukHeadingXs,
    },
    paragraphs: {
      body: tokens.ParagraphsBody,
      bodyLarge: tokens.ParagraphsBodyLarge,
      bodySmall: tokens.ParagraphsBodySmall,
      ledeText: tokens.ParagraphsLedeText,
      ledeTextSmall: tokens.ParagraphsLedeTextSmall,
    },
    fonts: {
      family: {
        base: tokens.FontFamilyBase,
        fallback: tokens.FontFamilyFallback,
        print: tokens.FontFamilyPrint,
      },
      weight: {
        normal: tokens.FontWeightNormal,
        bold: tokens.FontWeightBold,
        light: tokens.FontWeightLight,
      },
      sizes: {
        mobile: {
          size14: tokens.FontSize14Mobile,
          size16: tokens.FontSize16Mobile,
          size19: tokens.FontSize19Mobile,
          size22: tokens.FontSize22Mobile,
          size26: tokens.FontSize26Mobile,
          size36: tokens.FontSize36Mobile,
          size48: tokens.FontSize48Mobile,
        },
        tablet: {
          size14: tokens.FontSize14Tablet,
          size16: tokens.FontSize16Tablet,
          size19: tokens.FontSize19Tablet,
          size22: tokens.FontSize22Tablet,
          size26: tokens.FontSize26Tablet,
          size36: tokens.FontSize36Tablet,
          size48: tokens.FontSize48Tablet,
        },
        print: {
          size14: tokens.FontSize14Print,
          size16: tokens.FontSize16Print,
          size19: tokens.FontSize19Print,
          size22: tokens.FontSize22Print,
          size26: tokens.FontSize26Print,
          size36: tokens.FontSize36Print,
          size48: tokens.FontSize48Print,
        },
      },
    },
  }), []);
};`

    return header + hooks
  }
})

// Custom format for styled-components theme
StyleDictionary.registerFormat({
  name: 'react/styled-components',
  format: ({ dictionary, options }) => {
    const header = `// Do not edit directly, this file was auto-generated.

export interface StyledTheme {
${dictionary.allTokens.map(token => `  ${token.name}: string;`).join('\n')}
}

export const styledTheme: StyledTheme = {
${dictionary.allTokens.map(token => `  ${token.name}: '${token.value}',`).join('\n')}
};

// For use with styled-components ThemeProvider
export default styledTheme;

// TypeScript module declaration for styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends StyledTheme {}
}
`
    
    return header
  }
})

// Custom format for React component utilities
StyleDictionary.registerFormat({
  name: 'react/component-utilities',
  format: ({ dictionary, options }) => {
    const header = `// Do not edit directly, this file was auto-generated.

import React from 'react';
import { CSSProperties } from 'react';
import * as tokens from '../index';

// Helper function to convert composite token to CSS properties
export const getResponsiveStyles = (
  fontSize: { mobile: string; tablet: string; print?: string },
  marginBottom: { mobile: string; tablet: string }
): CSSProperties & { 
  '@media (min-width: 768px)': CSSProperties;
  '@media print': CSSProperties;
} => ({
  fontSize: fontSize.mobile,
  marginBottom: marginBottom.mobile,
  '@media (min-width: 768px)': {
    fontSize: fontSize.tablet,
    marginBottom: marginBottom.tablet,
  },
  '@media print': {
    fontSize: fontSize.print || fontSize.tablet,
  },
});

`

    // Get composite tokens
    const headingComposites = dictionary.allTokens.filter(token => 
      token.$type === 'composite' && token.name.includes('HeadingsNhsuk')
    )
    const paragraphComposites = dictionary.allTokens.filter(token => 
      token.$type === 'composite' && token.name.includes('Paragraphs')
    )

    // Generate heading components dynamically
    const headingComponents = headingComposites.map((token, index) => {
      const componentName = `NHSHeading${index + 1}`
      const elementTag = `h${index + 1}`
      const tokenName = token.name
      
      return `export const ${componentName}: React.FC<{ children: React.ReactNode; className?: string; style?: CSSProperties }> = ({ 
  children, 
  className = '', 
  style = {} 
}) => (
  <${elementTag} 
    className={className}
    style={{
      fontFamily: tokens.${tokenName}.fontFamily,
      fontWeight: tokens.${tokenName}.fontWeight,
      fontSize: tokens.${tokenName}.fontSize.mobile,
      lineHeight: tokens.${tokenName}.lineHeight,
      marginTop: tokens.${tokenName}.marginTop,
      marginBottom: tokens.${tokenName}.marginBottom.mobile,
      ...style,
    }}
  >
    {children}
  </${elementTag}>
);`
    }).join('\n\n')

    // Generate paragraph components dynamically
    const paragraphComponents = paragraphComposites.map(token => {
      const baseName = token.name.replace('Paragraphs', '')
      let componentName = `NHS${baseName}`
      
      // Handle special cases for better component names
      if (baseName === 'Body') {
        componentName = 'NHSBodyText'
      } else if (baseName === 'BodyLarge') {
        componentName = 'NHSBodyTextLarge'
      } else if (baseName === 'BodySmall') {
        componentName = 'NHSBodyTextSmall'
      } else if (baseName === 'LedeText') {
        componentName = 'NHSLedeText'
      } else if (baseName === 'LedeTextSmall') {
        componentName = 'NHSLedeTextSmall'
      }
      
      const tokenName = token.name
      
      return `export const ${componentName}: React.FC<{ children: React.ReactNode; className?: string; style?: CSSProperties }> = ({ 
  children, 
  className = '', 
  style = {} 
}) => (
  <p 
    className={className}
    style={{
      fontFamily: tokens.${tokenName}.fontFamily,
      fontWeight: tokens.${tokenName}.fontWeight,
      fontSize: tokens.${tokenName}.fontSize.mobile,
      lineHeight: tokens.${tokenName}.lineHeight,
      marginTop: tokens.${tokenName}.marginTop,
      marginBottom: tokens.${tokenName}.marginBottom.mobile,
      ...style,
    }}
  >
    {children}
  </p>
);`
    }).join('\n\n')

    return header + '// NHS Heading Components\n' + headingComponents + '\n\n// NHS Paragraph Components\n' + paragraphComponents + '\n'
  }
})

// Custom CSS format that handles composite tokens by flattening them
StyleDictionary.registerFormat({
  name: 'css/variables-flat',
  format: ({ dictionary, options }) => {
    const header = options.showFileHeader ? `/**
 * Do not edit directly, this file was auto-generated.
 */

` : ''

    const selector = options.selector || ':root'
    
    const cssVars = dictionary.allTokens
      .filter(token => {
        // Skip composite tokens as they can't be represented as single CSS custom properties
        return token.type !== 'composite'
      })
      .map(token => {
        const name = token.name
        const value = token.value !== undefined ? token.value : token.original?.value
        const comment = token.comment || token.description || ''
        
        // Convert camelCase to kebab-case
        const cssName = name.replace(/([A-Z])/g, '-$1').toLowerCase()
        
        return `  --${cssName}: ${value};${comment ? ` /** ${comment} */` : ''}`
      })
      .join('\n')
    
    return `${header}${selector} {\n${cssVars}\n}\n`
  }
})

// Load the main config and export it
const configPath = path.join(__dirname, 'config.json')
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))

// Enhance the React platform with custom formats
if (config.platforms && config.platforms.react) {
  config.platforms.react.files.push(
    {
      "destination": "theme/NHSThemeProvider.tsx",
      "format": "react/theme-provider",
      "options": {
        "showFileHeader": true
      }
    },
    {
      "destination": "theme/styled-components.ts",
      "format": "react/styled-components",
      "options": {
        "showFileHeader": true
      }
    },
    {
      "destination": "hooks/useTokens.ts",
      "format": "react/hooks",
      "options": {
        "showFileHeader": true
      }
    },
    {
      "destination": "components/NHSTypography.tsx",
      "format": "react/component-utilities",
      "options": {
        "showFileHeader": true
      }
    }
  )
}

export default config
