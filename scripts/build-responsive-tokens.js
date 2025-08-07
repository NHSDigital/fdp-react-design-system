import StyleDictionary from 'style-dictionary'
import fs from 'fs'
import path from 'path'

// Helper function to load and parse JSON token files
const loadTokens = () => {
  const responsiveTokens = JSON.parse(fs.readFileSync('tokens/semantic-responsive.json', 'utf8'));
  const dynamicTokens = JSON.parse(fs.readFileSync('tokens/semantic-dynamic.json', 'utf8'));
  
  return { responsiveTokens, dynamicTokens };
};

// Helper function to extract values from token structure
const extractTokenValue = (tokenObj) => {
  if (typeof tokenObj === 'object' && tokenObj !== null) {
    if (tokenObj.value !== undefined) {
      return tokenObj.value;
    }
    // If it's an object without a value property, it might be incorrectly accessed
    console.warn('Warning: Attempting to extract value from object without .value property:', JSON.stringify(tokenObj, null, 2));
    return '[object Object]'; // Explicit indication of the issue
  }
  return tokenObj;
};

// Register custom TypeScript format that creates both individual exports and grouped objects
StyleDictionary.registerFormat({
  name: 'typescript/responsive-tokens',
  format: ({ dictionary }) => {
    const header = `/**
 * Do not edit directly, this file was auto-generated.
 */

`;

    // Generate individual token exports
    const individualExports = dictionary.allTokens
      .map(token => `export const ${token.name} = "${token.value}";`)
      .join('\n');

    // Group tokens by category for object exports
    const groupedTokens = {
      responsive: {},
      density: {},
      accessibility: {},
      brand: {}
    };

    dictionary.allTokens.forEach(token => {
      const name = token.name;
      const value = token.value;
      
      if (name.startsWith('Responsive')) {
        if (name.includes('Spacing')) {
          if (!groupedTokens.responsive.spacing) groupedTokens.responsive.spacing = {};
          const key = name.replace('ResponsiveSpacing', '').charAt(0).toLowerCase() + name.replace('ResponsiveSpacing', '').slice(1);
          groupedTokens.responsive.spacing[key] = name;
        } else if (name.includes('Typography')) {
          if (!groupedTokens.responsive.typography) groupedTokens.responsive.typography = {};
          const key = name.replace('ResponsiveTypography', '').charAt(0).toLowerCase() + name.replace('ResponsiveTypography', '').slice(1);
          groupedTokens.responsive.typography[key] = name;
        } else if (name.includes('Component')) {
          if (!groupedTokens.responsive.components) groupedTokens.responsive.components = {};
          const key = name.replace('ResponsiveComponent', '').charAt(0).toLowerCase() + name.replace('ResponsiveComponent', '').slice(1);
          groupedTokens.responsive.components[key] = name;
        }
      } else if (name.startsWith('Density')) {
        const densityType = name.includes('Compact') ? 'compact' : 
                           name.includes('Comfortable') ? 'comfortable' : 
                           name.includes('Spacious') ? 'spacious' : 'default';
        
        if (!groupedTokens.density[densityType]) groupedTokens.density[densityType] = {};
        const key = name.replace(new RegExp(`Density${densityType.charAt(0).toUpperCase() + densityType.slice(1)}`), '').charAt(0).toLowerCase() + 
                   name.replace(new RegExp(`Density${densityType.charAt(0).toUpperCase() + densityType.slice(1)}`), '').slice(1);
        groupedTokens.density[densityType][key] = name;
      } else if (name.startsWith('Accessibility')) {
        if (name.includes('HighContrast')) {
          if (!groupedTokens.accessibility.highContrast) groupedTokens.accessibility.highContrast = {};
          const key = name.replace('AccessibilityHighContrast', '').charAt(0).toLowerCase() + name.replace('AccessibilityHighContrast', '').slice(1);
          groupedTokens.accessibility.highContrast[key] = name;
        } else if (name.includes('Motion')) {
          if (!groupedTokens.accessibility.motion) groupedTokens.accessibility.motion = {};
          const key = name.replace('AccessibilityMotion', '').charAt(0).toLowerCase() + name.replace('AccessibilityMotion', '').slice(1);
          groupedTokens.accessibility.motion[key] = name;
        }
      } else if (name.startsWith('Brand')) {
        const brandType = name.includes('NhsEngland') ? 'nhsEngland' : 
                         name.includes('NhsScotland') ? 'nhsScotland' : 
                         name.includes('NhsWales') ? 'nhsWales' : 'default';
        
        if (!groupedTokens.brand[brandType]) groupedTokens.brand[brandType] = {};
        const key = name.replace(new RegExp(`Brand${brandType.charAt(0).toUpperCase() + brandType.slice(1)}`), '').charAt(0).toLowerCase() + 
                   name.replace(new RegExp(`Brand${brandType.charAt(0).toUpperCase() + brandType.slice(1)}`), '').slice(1);
        groupedTokens.brand[brandType][key] = name;
      }
    });

    // Generate grouped object exports
    const generateObjectExport = (obj, indent = 0) => {
      const spaces = '  '.repeat(indent);
      let result = '{\n';
      
      for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object') {
          result += `${spaces}  ${key}: ${generateObjectExport(value, indent + 1)},\n`;
        } else {
          result += `${spaces}  ${key}: ${value},\n`;
        }
      }
      
      result += `${spaces}}`;
      return result;
    };

    const groupedExports = `
// Grouped token objects
export const responsiveTokens = ${generateObjectExport(groupedTokens.responsive)};

export const densityTokens = ${generateObjectExport(groupedTokens.density)};

export const accessibilityTokens = ${generateObjectExport(groupedTokens.accessibility)};

export const brandTokens = ${generateObjectExport(groupedTokens.brand)};`;

    return header + individualExports + '\n' + groupedExports;
  }
});

// Configuration for responsive tokens
const responsiveConfig = {
  source: [
    "tokens/semantic-responsive.json",
    "tokens/semantic-dynamic.json"
  ],
  platforms: {
    "responsive-css": {
      "transformGroup": "css", 
      "buildPath": "packages/nhs-fdp/dist/css/",
      "files": [
        {
          "destination": "_responsive.css",
          "format": "css/variables",
          "options": {
            "showFileHeader": true
          }
        }
      ]
    },
    "responsive-scss": {
      "transformGroup": "scss",
      "buildPath": "packages/nhs-fdp/dist/scss/",
      "files": [
        {
          "destination": "_responsive.scss",
          "format": "scss/variables",
          "options": {
            "showFileHeader": true
          }
        }
      ]
    },
    "responsive-typescript": {
      "transformGroup": "js",
      "buildPath": "packages/nhs-fdp/dist/typescript/",
      "files": [
        {
          "destination": "responsive-tokens.ts",
          "format": "typescript/responsive-tokens",
          "options": {
            "showFileHeader": true
          }
        }
      ]
    },
    "responsive-react": {
      "transformGroup": "js",
      "buildPath": "packages/nhs-fdp/dist/react/",
      "files": [
        {
          "destination": "ResponsiveTokenProvider.tsx",
          "format": "javascript/es6",
          "options": {
            "showFileHeader": true
          }
        }
      ]
    }
  }
};

// Build responsive tokens
const responsiveSD = new StyleDictionary(responsiveConfig);
responsiveSD.buildAllPlatforms();

console.log('✅ Responsive tokens built successfully!');
