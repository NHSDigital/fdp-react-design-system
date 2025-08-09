#!/usr/bin/env node

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

export interface DesignToken {
  value: string;
  type?: string;
  description?: string;
  attributes?: Record<string, any>;
}

export interface DesignTokens {
  [key: string]: DesignToken | DesignTokens;
}

`
    const tokens = dictionary.allTokens
      .map(token => {
        const name = token.name
        const type = token.type || 'string'
        const comment = token.comment || token.description || ''
        
        return `/** ${comment} */
export declare const ${name}: '${token.value}';`
      })
      .join('\n\n')
    
    const exportAll = `
export declare const tokens: DesignTokens;
export default tokens;
`
    
    return header + tokens + exportAll
  }
})

// Custom format for React Theme Provider
// StyleDictionary.registerFormat({
//   name: 'react/theme-provider',
//   format: ({ dictionary, options, file }) => {
//     const header = `// Do not edit directly, this file was auto-generated.

// import React, { createContext, useContext, ReactNode } from 'react';

// export interface NHSTheme {`

//     const tokenTypes = {}
//     dictionary.allTokens.forEach(token => {
//       const category = token.attributes?.category || 'misc'
//       if (!tokenTypes[category]) tokenTypes[category] = []
//       tokenTypes[category].push(token)
//     })

//     const themeInterface = Object.keys(tokenTypes)
//       .map(category => `  ${category}: {
// ${tokenTypes[category].map(token => `    ${token.name}: string;`).join('\n')}
//   };`)
//       .join('\n')

//     const themeObject = Object.keys(tokenTypes)
//       .map(category => `  ${category}: {
// ${tokenTypes[category].map(token => `    ${token.name}: '${token.value}',`).join('\n')}
//   },`)
//       .join('\n')

//     const provider = `
// }

// export const nhsTheme: NHSTheme = {
// ${themeObject}
// };

// const ThemeContext = createContext<NHSTheme>(nhsTheme);

// export interface ThemeProviderProps {
//   children: ReactNode;
//   theme?: Partial<NHSTheme>;
// }

// export const NHSThemeProvider: React.FC<ThemeProviderProps> = ({ 
//   children, 
//   theme = {} 
// }) => {
//   const mergedTheme = { ...nhsTheme, ...theme };
//   return (
//     <ThemeContext.Provider value={mergedTheme}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useNHSTheme = (): NHSTheme => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useNHSTheme must be used within an NHSThemeProvider');
//   }
//   return context;
// };

// export default nhsTheme;`

//     return header + themeInterface + provider
//   }
// })

// Custom format for React hooks
// StyleDictionary.registerFormat({
//   name: 'react/hooks',
//   format: ({ dictionary, options }) => {
//     const header = `// Do not edit directly, this file was auto-generated.

// import { useMemo } from 'react';
// import * as tokens from '../index';

// `

//     const allTokens = dictionary.allTokens
//     const colorTokens = allTokens.filter(token => 
//       token.type === 'color' || 
//       token.$type === 'color' ||
//       token.name.toLowerCase().includes('color') ||
//       token.name.toLowerCase().includes('border')
//     )
//     const spacingTokens = allTokens.filter(token => 
//       token.type === 'spacing' || 
//       token.$type === 'spacing' ||
//       /^Spacing\d$/.test(token.name)
//     )
//     const fontTokens = allTokens.filter(token => 
//       token.attributes?.category === 'font' ||
//       token.name.toLowerCase().includes('font')
//     )
//     const responsiveSpacingTokens = allTokens.filter(token => 
//       token.name.includes('SpacingResponsive')
//     )
//     const componentSpacingTokens = allTokens.filter(token => 
//       (token.name.includes('ButtonSpacing') || 
//        token.name.includes('CardSpacing') || 
//        token.name.includes('FormSpacing')) &&
//       !token.name.includes('Component')
//     )

//     const borderColors = colorTokens.filter(t => t.name.includes('BorderColor'))
//       .map(token => `    ${token.name}: tokens.${token.name},`).join('\n')
//     const primaryColors = colorTokens.filter(t => t.name.includes('ColorPrimary'))
//       .map(token => `    ${token.name}: tokens.${token.name},`).join('\n')
//     const secondaryColors = colorTokens.filter(t => t.name.includes('ColorSecondary'))
//       .map(token => `    ${token.name}: tokens.${token.name},`).join('\n')
//     const greyColors = colorTokens.filter(t => t.name.includes('ColorGrey'))
//       .map(token => `    ${token.name}: tokens.${token.name},`).join('\n')
//     const coreSpacing = spacingTokens.filter(t => /^Spacing\d$/.test(t.name))
//       .map(token => `    ${token.name}: tokens.${token.name},`).join('\n')
//     const typography = fontTokens.map(token => `    ${token.name}: tokens.${token.name},`).join('\n')
    
//     // Backward compatibility - individual exports
//     ${fontTokens.map(token => `    ${token.name}: tokens.${token.name},`).join('\n')}
//     // Dynamic responsive spacing structure
//     const responsiveSpacingStructure = `    // Semantic device-grouped responsive spacing
//     Mobile: {${Array.from({length: 10}, (_, i) => `
//       Size${i}: tokens.SpacingResponsive${i}Mobile,`).join('')}
//     },
//     Tablet: {${Array.from({length: 10}, (_, i) => `
//       Size${i}: tokens.SpacingResponsive${i}Tablet,`).join('')}
//     },
    
//     // Backward compatibility - individual exports
// ${responsiveSpacingTokens.map(token => `    ${token.name}: tokens.${token.name},`).join('\n')}`

//     const buttonSpacing = componentSpacingTokens.filter(t => t.name.includes('ButtonSpacing'))
//       .map(token => `    ${token.name}: tokens.${token.name},`).join('\n')
//     const cardSpacing = componentSpacingTokens.filter(t => t.name.includes('CardSpacing'))
//       .map(token => `    ${token.name}: tokens.${token.name},`).join('\n')
//     const formSpacing = componentSpacingTokens.filter(t => t.name.includes('FormSpacing'))
//       .map(token => `    ${token.name}: tokens.${token.name},`).join('\n')

//     const hooks = `export const useTokens = () => {
//   return useMemo(() => tokens, []);
// };

// export const useColors = () => {
//   return useMemo(() => ({
//     // Border colors
// ${borderColors}
    
//     // Primary colors
// ${primaryColors}
    
//     // Secondary colors
// ${secondaryColors}
    
//     // Grey scale
// ${greyColors}
//   }), []);
// };

// export const useSpacing = () => {
//   return useMemo(() => ({
// ${coreSpacing}
//   }), []);
// };

// export const useTypography = () => {
//   return useMemo(() => ({
// ${typography}
//   }), []);
// };

// export const useResponsiveSpacing = () => {
//   return useMemo(() => ({
// ${responsiveSpacingStructure}
//   }), []);
// };

// export const useComponentSpacing = () => {
//   return useMemo(() => ({
//     // Button spacing
// ${buttonSpacing}
    
//     // Card spacing  
// ${cardSpacing}
    
//     // Form spacing
// ${formSpacing}
//   }), []);
// };`

//     return header + hooks
//   }
// })

// Custom format for styled-components theme
// StyleDictionary.registerFormat({
//   name: 'react/styled-components',
//   format: ({ dictionary, options }) => {
//     const header = `// Do not edit directly, this file was auto-generated.

// export interface StyledTheme {
// ${dictionary.allTokens.map(token => `  ${token.name}: string;`).join('\n')}
// }

// export const styledTheme: StyledTheme = {
// ${dictionary.allTokens.map(token => `  ${token.name}: '${token.value}',`).join('\n')}
// };

// // For use with styled-components ThemeProvider
// export default styledTheme;

// // TypeScript module declaration for styled-components
// declare module 'styled-components' {
//   export interface DefaultTheme extends StyledTheme {}
// }
// `
    
//     return header
//   }
// })

// Build the tokens
async function buildTokens() {
console.log('Building design tokens...')

const buildPath = path.join(__dirname, 'packages/nhs-fdp/dist/')

// Ensure TypeScript and React directories exist
const typescriptDir = path.join(buildPath, 'typescript')
const reactDir = path.join(buildPath, 'react')

if (!fs.existsSync(typescriptDir)) {
  fs.mkdirSync(typescriptDir, { recursive: true })
}
if (!fs.existsSync(reactDir)) {
  fs.mkdirSync(reactDir, { recursive: true })
}

// Load and build
const configPath = path.join(__dirname, 'config.json')
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))

// Override the React hooks format to use our custom format
const reactPlatform = config.platforms.react
if (reactPlatform && reactPlatform.files) {
  const hooksFile = reactPlatform.files.find(file => file.destination === 'hooks/useTokens.ts')
  if (hooksFile) {
    hooksFile.format = 'react/hooks'
  }
}

const sd = new StyleDictionary(config)
await sd.buildAllPlatforms()

// Create dynamic semantic typography files using actual token values
const semanticTypographyFormat = {
  name: 'semantic/typescript',
  format: ({ dictionary }) => {
    const header = `// Do not edit directly, this file was auto-generated.

`
    
    // Create a mapping from token keys to values
    const tokenMap = {}
    dictionary.allTokens.forEach(token => {
      if (token.key && token.$value !== undefined) {
        // Convert key format like "{font.family.base}" to "FontFamilyBase"
        const cleanKey = token.key.replace(/[{}]/g, '')
        const nameParts = cleanKey.split('.').map(part => {
          // Handle hyphenated parts like "line-height"
          const hyphenatedParts = part.split('-').map(subPart => 
            subPart.charAt(0).toUpperCase() + subPart.slice(1).toLowerCase()
          )
          return hyphenatedParts.join('')
        })
        const tokenName = nameParts.join('')
        tokenMap[tokenName] = token.$value
      }
    })
    
    // Simple findToken using our mapping
    const findToken = (searchName) => {
      const value = tokenMap[searchName]
      if (value !== undefined) {
        return `"${value}"`
      }
      return `"[${searchName} not found]"`
    }
    
    const exports = `// Semantic Typography Structure - Device-grouped approach
export const Typography = {
  Mobile: {
    Size14: ${findToken('FontSize14Mobile')},
    Size16: ${findToken('FontSize16Mobile')},
    Size19: ${findToken('FontSize19Mobile')},
    Size22: ${findToken('FontSize22Mobile')},
    Size26: ${findToken('FontSize26Mobile')},
    Size36: ${findToken('FontSize36Mobile')},
    Size48: ${findToken('FontSize48Mobile')}
  },
  Tablet: {
    Size14: ${findToken('FontSize14Tablet')},
    Size16: ${findToken('FontSize16Tablet')},
    Size19: ${findToken('FontSize19Tablet')},
    Size22: ${findToken('FontSize22Tablet')},
    Size26: ${findToken('FontSize26Tablet')},
    Size36: ${findToken('FontSize36Tablet')},
    Size48: ${findToken('FontSize48Tablet')}
  },
  Print: {
    Size14: ${findToken('FontSize14Print')},
    Size16: ${findToken('FontSize16Print')},
    Size19: ${findToken('FontSize19Print')},
    Size22: ${findToken('FontSize22Print')},
    Size26: ${findToken('FontSize26Print')},
    Size36: ${findToken('FontSize36Print')},
    Size48: ${findToken('FontSize48Print')}
  },
  Family: {
    Base: ${findToken('FontFamilyBase')},
    Fallback: ${findToken('FontFamilyFallback')},
    Print: ${findToken('FontFamilyPrint')}
  },
  Weight: {
    Normal: ${findToken('FontWeightNormal')},
    Bold: ${findToken('FontWeightBold')},
    Light: ${findToken('FontWeightLight')}
  },
  Base: {
    Size: ${findToken('FontSizeBase')},
    LineHeight: ${findToken('FontLineHeightBase')}
  }
} as const;

export default Typography;

// Individual exports for backward compatibility  
${Object.entries(tokenMap)
  .filter(([name]) => name.includes('Font'))
  .map(([name, value]) => `export const ${name} = "${value}";`)
  .join('\n')}
`
    
    return header + exports
  }
}

const semanticScssFormat = {
  name: 'semantic/scss',
  format: ({ dictionary }) => {
    const header = `// Do not edit directly, this file was auto-generated.

`
    
    // Create the same token mapping for SCSS
    const tokenMap = {}
    dictionary.allTokens.forEach(token => {
      if (token.key && token.$value !== undefined) {
        const cleanKey = token.key.replace(/[{}]/g, '')
        const nameParts = cleanKey.split('.').map(part => {
          const hyphenatedParts = part.split('-').map(subPart => 
            subPart.charAt(0).toUpperCase() + subPart.slice(1).toLowerCase()
          )
          return hyphenatedParts.join('')
        })
        const tokenName = nameParts.join('')
        tokenMap[tokenName] = token.$value
      }
    })
    
    const findToken = (searchName) => {
      const value = tokenMap[searchName]
      return value !== undefined ? value : `[${searchName} not found]`
    }
    
    const variables = `// Semantic Typography Variables - Device-grouped approach
$typography-mobile-size14: ${findToken('FontSize14Mobile')};
$typography-mobile-size16: ${findToken('FontSize16Mobile')};
$typography-mobile-size19: ${findToken('FontSize19Mobile')};
$typography-mobile-size22: ${findToken('FontSize22Mobile')};
$typography-mobile-size26: ${findToken('FontSize26Mobile')};
$typography-mobile-size36: ${findToken('FontSize36Mobile')};
$typography-mobile-size48: ${findToken('FontSize48Mobile')};

$typography-tablet-size14: ${findToken('FontSize14Tablet')};
$typography-tablet-size16: ${findToken('FontSize16Tablet')};
$typography-tablet-size19: ${findToken('FontSize19Tablet')};
$typography-tablet-size22: ${findToken('FontSize22Tablet')};
$typography-tablet-size26: ${findToken('FontSize26Tablet')};
$typography-tablet-size36: ${findToken('FontSize36Tablet')};
$typography-tablet-size48: ${findToken('FontSize48Tablet')};

$typography-print-size14: ${findToken('FontSize14Print')};
$typography-print-size16: ${findToken('FontSize16Print')};
$typography-print-size19: ${findToken('FontSize19Print')};
$typography-print-size22: ${findToken('FontSize22Print')};
$typography-print-size26: ${findToken('FontSize26Print')};
$typography-print-size36: ${findToken('FontSize36Print')};
$typography-print-size48: ${findToken('FontSize48Print')};

$typography-family-base: ${findToken('FontFamilyBase')};
$typography-family-fallback: ${findToken('FontFamilyFallback')};
$typography-family-print: ${findToken('FontFamilyPrint')};

$typography-weight-normal: ${findToken('FontWeightNormal')};
$typography-weight-bold: ${findToken('FontWeightBold')};
$typography-weight-light: ${findToken('FontWeightLight')};

$typography-base-size: ${findToken('FontSizeBase')};
$typography-base-line-height: ${findToken('FontLineHeightBase')};

// Individual variables for backward compatibility
${Object.entries(tokenMap)
  .filter(([name]) => name.includes('Font'))
  .map(([name, value]) => `$${name.replace(/([A-Z])/g, '-$1').toLowerCase().slice(1)}: ${value};`)
  .join('\n')}
`
    
    return header + variables
  }
}

const semanticSpacingFormat = {
  name: 'semantic/spacing-typescript',
  format: ({ dictionary }) => {
    const header = `// Do not edit directly, this file was auto-generated.

`
    
    // Create a mapping from token keys to values (same approach as typography)
    const tokenMap = {}
    dictionary.allTokens.forEach(token => {
      if (token.key && token.$value !== undefined) {
        const cleanKey = token.key.replace(/[{}]/g, '')
        const nameParts = cleanKey.split('.').map(part => {
          const hyphenatedParts = part.split('-').map(subPart => 
            subPart.charAt(0).toUpperCase() + subPart.slice(1).toLowerCase()
          )
          return hyphenatedParts.join('')
        })
        const tokenName = nameParts.join('')
        tokenMap[tokenName] = token.$value
      }
    })
    
    const findToken = (searchName) => {
      const value = tokenMap[searchName]
      if (value !== undefined) {
        return `"${value}"`
      }
      return `"[${searchName} not found]"`
    }
    
    const exports = `// Semantic Responsive Spacing Structure - Device-grouped approach
export const Spacing = {
  Mobile: {
    Size0: ${findToken('SpacingResponsive0Mobile')},
    Size1: ${findToken('SpacingResponsive1Mobile')},
    Size2: ${findToken('SpacingResponsive2Mobile')},
    Size3: ${findToken('SpacingResponsive3Mobile')},
    Size4: ${findToken('SpacingResponsive4Mobile')},
    Size5: ${findToken('SpacingResponsive5Mobile')},
    Size6: ${findToken('SpacingResponsive6Mobile')},
    Size7: ${findToken('SpacingResponsive7Mobile')},
    Size8: ${findToken('SpacingResponsive8Mobile')},
    Size9: ${findToken('SpacingResponsive9Mobile')}
  },
  Tablet: {
    Size0: ${findToken('SpacingResponsive0Tablet')},
    Size1: ${findToken('SpacingResponsive1Tablet')},
    Size2: ${findToken('SpacingResponsive2Tablet')},
    Size3: ${findToken('SpacingResponsive3Tablet')},
    Size4: ${findToken('SpacingResponsive4Tablet')},
    Size5: ${findToken('SpacingResponsive5Tablet')},
    Size6: ${findToken('SpacingResponsive6Tablet')},
    Size7: ${findToken('SpacingResponsive7Tablet')},
    Size8: ${findToken('SpacingResponsive8Tablet')},
    Size9: ${findToken('SpacingResponsive9Tablet')}
  },
  Core: {
    Size0: ${findToken('Spacing0')},
    Size1: ${findToken('Spacing1')},
    Size2: ${findToken('Spacing2')},
    Size3: ${findToken('Spacing3')},
    Size4: ${findToken('Spacing4')},
    Size5: ${findToken('Spacing5')},
    Size6: ${findToken('Spacing6')},
    Size7: ${findToken('Spacing7')},
    Size8: ${findToken('Spacing8')},
    Size9: ${findToken('Spacing9')}
  }
} as const;

export default Spacing;

// Individual exports for backward compatibility  
${Object.entries(tokenMap)
  .filter(([name]) => name.includes('Spacing'))
  .map(([name, value]) => `export const ${name} = "${value}";`)
  .join('\n')}
`
    
    return header + exports
  }
}

const semanticSpacingScssFormat = {
  name: 'semantic/spacing-scss',
  format: ({ dictionary }) => {
    const header = `// Do not edit directly, this file was auto-generated.

`
    
    // Create the same token mapping for SCSS
    const tokenMap = {}
    dictionary.allTokens.forEach(token => {
      // Use the token name directly as Style Dictionary already processes the values
      if (token.name && token.value !== undefined) {
        tokenMap[token.name] = token.value
      }
      // Also try to map using the key format for complex references
      if (token.key && token.$value !== undefined) {
        const cleanKey = token.key.replace(/[{}]/g, '')
        const nameParts = cleanKey.split('.').map(part => {
          const hyphenatedParts = part.split('-').map(subPart => 
            subPart.charAt(0).toUpperCase() + subPart.slice(1).toLowerCase()
          )
          return hyphenatedParts.join('')
        })
        const tokenName = nameParts.join('')
        tokenMap[tokenName] = token.$value
      }
    })
    
    const findToken = (searchName) => {
      const value = tokenMap[searchName]
      if (value !== undefined) {
        return value
      }
      // Try alternative mappings for component tokens
      const alternativeName = searchName
        .replace('ButtonSpacingPaddingVerticalMobile', 'ComponentButtonPaddingMobileVertical')
        .replace('ButtonSpacingPaddingHorizontalMobile', 'ComponentButtonPaddingMobileHorizontal')
        .replace('ButtonSpacingPaddingVerticalDesktop', 'ComponentButtonPaddingDesktopVertical')
        .replace('ButtonSpacingPaddingHorizontalDesktop', 'ComponentButtonPaddingDesktopHorizontal')
        .replace('CardSpacingPaddingMobile', 'ComponentCardPaddingMobile')
        .replace('CardSpacingPaddingDesktop', 'ComponentCardPaddingDesktop')
        .replace('CardSpacingHeadingMargin', 'ComponentCardHeadingMargin')
        .replace('FormSpacingInputPadding', 'ComponentFormInputPadding')
        .replace('FormSpacingInputMinHeight', 'ComponentFormInputMinHeight')
        .replace('FormSpacingCheckboxSize', 'ComponentFormCheckboxSize')
        .replace('FormSpacingCheckboxLabelPadding', 'ComponentFormCheckboxLabelPadding')
      
      const alternativeValue = tokenMap[alternativeName]
      return alternativeValue !== undefined ? alternativeValue : `[${searchName} not found]`
    }
    
    const variables = `// Semantic Responsive Spacing Variables - Device-grouped approach
$spacing-mobile-size0: ${findToken('SpacingResponsive0Mobile')};
$spacing-mobile-size1: ${findToken('SpacingResponsive1Mobile')};
$spacing-mobile-size2: ${findToken('SpacingResponsive2Mobile')};
$spacing-mobile-size3: ${findToken('SpacingResponsive3Mobile')};
$spacing-mobile-size4: ${findToken('SpacingResponsive4Mobile')};
$spacing-mobile-size5: ${findToken('SpacingResponsive5Mobile')};
$spacing-mobile-size6: ${findToken('SpacingResponsive6Mobile')};
$spacing-mobile-size7: ${findToken('SpacingResponsive7Mobile')};
$spacing-mobile-size8: ${findToken('SpacingResponsive8Mobile')};
$spacing-mobile-size9: ${findToken('SpacingResponsive9Mobile')};

$spacing-tablet-size0: ${findToken('SpacingResponsive0Tablet')};
$spacing-tablet-size1: ${findToken('SpacingResponsive1Tablet')};
$spacing-tablet-size2: ${findToken('SpacingResponsive2Tablet')};
$spacing-tablet-size3: ${findToken('SpacingResponsive3Tablet')};
$spacing-tablet-size4: ${findToken('SpacingResponsive4Tablet')};
$spacing-tablet-size5: ${findToken('SpacingResponsive5Tablet')};
$spacing-tablet-size6: ${findToken('SpacingResponsive6Tablet')};
$spacing-tablet-size7: ${findToken('SpacingResponsive7Tablet')};
$spacing-tablet-size8: ${findToken('SpacingResponsive8Tablet')};
$spacing-tablet-size9: ${findToken('SpacingResponsive9Tablet')};

$spacing-core-size0: ${findToken('Spacing0')};
$spacing-core-size1: ${findToken('Spacing1')};
$spacing-core-size2: ${findToken('Spacing2')};
$spacing-core-size3: ${findToken('Spacing3')};
$spacing-core-size4: ${findToken('Spacing4')};
$spacing-core-size5: ${findToken('Spacing5')};
$spacing-core-size6: ${findToken('Spacing6')};
$spacing-core-size7: ${findToken('Spacing7')};
$spacing-core-size8: ${findToken('Spacing8')};
$spacing-core-size9: ${findToken('Spacing9')};

// Individual variables for backward compatibility
${Object.entries(tokenMap)
  .filter(([name]) => name.includes('Spacing') && !name.includes('Button') && !name.includes('Card') && !name.includes('Form'))
  .map(([name, value]) => {
    // Regular spacing token transformation
    const cssVarName = name.replace(/([A-Z])/g, '-$1').toLowerCase().slice(1)
    return `$${cssVarName}: ${value};`
  })
  .join('\n')}
`
    
    return header + variables
  }
}

// Register the formats
StyleDictionary.registerFormat(semanticTypographyFormat)
StyleDictionary.registerFormat(semanticScssFormat)
StyleDictionary.registerFormat(semanticSpacingFormat)
StyleDictionary.registerFormat(semanticSpacingScssFormat)

// Create semantic files using Style Dictionary
const semanticConfig = {
  source: config.source,
  platforms: {
    semanticTypescript: {
      transformGroup: 'js',
      buildPath: 'packages/nhs-fdp/dist/typescript/',
      files: [{
        destination: 'semantic-typography.ts',
        format: 'semantic/typescript'
        // Remove filter to access all tokens
      }]
    },
    semanticScss: {
      transformGroup: 'scss',
      buildPath: 'packages/nhs-fdp/dist/scss/',
      files: [{
        destination: '_semantic-typography.scss',
        format: 'semantic/scss'
        // Remove filter to include all tokens
      }]
    }
  }
}

// Use the main dictionary instead of creating a new one
console.log('Building semantic files using main dictionary...')
const semanticTsContent = semanticTypographyFormat.format({ dictionary: sd })
const semanticTsPath = './packages/nhs-fdp/dist/typescript/semantic-typography.ts'
fs.writeFileSync(semanticTsPath, semanticTsContent)
console.log('✔︎', semanticTsPath)

const semanticScssContent = semanticScssFormat.format({ dictionary: sd })
const semanticScssPath = './packages/nhs-fdp/dist/scss/_semantic-typography.scss'
fs.writeFileSync(semanticScssPath, semanticScssContent)
console.log('✔︎', semanticScssPath)

// Create semantic spacing files
const semanticSpacingTsContent = semanticSpacingFormat.format({ dictionary: sd })
const semanticSpacingTsPath = './packages/nhs-fdp/dist/typescript/semantic-spacing.ts'
fs.writeFileSync(semanticSpacingTsPath, semanticSpacingTsContent)
console.log('✔︎', semanticSpacingTsPath)

const semanticSpacingScssContent = semanticSpacingScssFormat.format({ dictionary: sd })
const semanticSpacingScssPath = './packages/nhs-fdp/dist/scss/_semantic-spacing.scss'
fs.writeFileSync(semanticSpacingScssPath, semanticSpacingScssContent)
console.log('✔︎', semanticSpacingScssPath)

console.log('✅ Design tokens built successfully!')
console.log('✅ React-specific token files created!')
}

buildTokens().catch(console.error)
