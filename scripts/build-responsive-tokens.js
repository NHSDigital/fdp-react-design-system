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
          "format": "typescript/es6-declarations",
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
