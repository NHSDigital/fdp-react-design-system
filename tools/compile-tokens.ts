#!/usr/bin/env ts-node

import { writeFileSync, mkdirSync, readFileSync, readdirSync } from 'fs';
import { join } from 'path';

/**
 * NHS Design System Token Compiler
 * 
 * Compiles design tokens into CSS variables and component styles at build time.
 * This replaces runtime style generation with optimized CSS.
 */

interface TokenObject {
  [key: string]: string | number | TokenObject;
}

interface TokenValue {
  $value: string | number;
  $type?: string;
  $description?: string;
}

/**
 * Load all design token files from the tokens directory
 */
function loadDesignTokens(): TokenObject {
  const tokensDir = join(process.cwd(), 'packages/nhs-fdp/tokens');
  const tokenFiles = readdirSync(tokensDir).filter(file => file.endsWith('.json'));
  
  // Process base colors first, then semantic tokens
  const orderedFiles = tokenFiles.sort((a, b) => {
    if (a === 'colors.json') return -1;
    if (b === 'colors.json') return 1;
    if (a === 'semantic.json') return 1;
    if (b === 'semantic.json') return -1;
    return a.localeCompare(b);
  });
  
  let allTokens: TokenObject = {};
  
  for (const file of orderedFiles) {
    try {
      const filePath = join(tokensDir, file);
      const fileContent = readFileSync(filePath, 'utf8');
      const tokens = JSON.parse(fileContent);
      
      // Deep merge tokens from this file instead of shallow merge
      allTokens = deepMerge(allTokens, tokens);
    } catch (error) {
      console.warn(`⚠️  Failed to load ${file}:`, error);
    }
  }
  
  return allTokens;
}

/**
 * Deep merge objects, merging nested objects instead of replacing them
 */
function deepMerge(target: TokenObject, source: TokenObject): TokenObject {
  const result = { ...target };
  
  for (const [key, value] of Object.entries(source)) {
    if (value && typeof value === 'object' && !('$value' in value)) {
      // If both target and source have this key and both are objects, merge them
      if (result[key] && typeof result[key] === 'object' && !('$value' in result[key])) {
        result[key] = deepMerge(result[key] as TokenObject, value);
      } else {
        result[key] = value;
      }
    } else {
      result[key] = value;
    }
  }
  
  return result;
}

/**
 * Flatten token structure and extract values
 */
function flattenTokens(tokens: TokenObject, path: string[] = []): Record<string, string | number> {
  const flattened: Record<string, string | number> = {};
  
  function traverse(obj: TokenObject, currentPath: string[] = []): void {
    Object.entries(obj).forEach(([key, value]) => {
      // Skip $type, $description, etc. metadata, but continue traversing
      if (key.startsWith('$')) return;
      
      const newPath = [...currentPath, key];
      
      if (value && typeof value === 'object') {
        // Check if this is a token value object
        if ('$value' in value) {
          const tokenKey = newPath.join('-').toLowerCase();
          flattened[tokenKey] = (value as any).$value;
        } else {
          // Continue traversing even if there's a $type at this level
          traverse(value, newPath);
        }
      }
    });
  }
  
  traverse(tokens, path);
  return flattened;
}

/**
 * Resolve token references (like {color.primary.blue} -> #005eb8)
 */
function resolveTokenReferences(flatTokens: Record<string, string | number>): Record<string, string | number> {
  const resolved: Record<string, string | number> = { ...flatTokens };
  
  // Keep resolving until no more references are found
  let hasReferences = true;
  let maxIterations = 10; // Prevent infinite loops
  
  while (hasReferences && maxIterations > 0) {
    hasReferences = false;
    maxIterations--;
    
    Object.entries(resolved).forEach(([key, value]) => {
      if (typeof value === 'string' && value.includes('{') && value.includes('}')) {
        // Extract all references like {color.primary.blue}
        const references = value.match(/\{([^}]+)\}/g);
        if (references) {
          let newValue = value;
          
          references.forEach(reference => {
            const referencePath = reference.slice(1, -1); // Remove { and }
            const referenceKey = referencePath.replace(/\./g, '-').toLowerCase();
            const referencedValue = resolved[referenceKey];
            
            if (referencedValue !== undefined) {
              // Replace the reference with the actual value
              newValue = newValue.replace(reference, referencedValue.toString());
              hasReferences = true;
            } else {
              console.warn(`⚠️  Could not resolve reference: ${reference} (looking for key: ${referenceKey})`);
            }
          });
          
          if (newValue !== value) {
            resolved[key] = newValue;
          }
        }
      }
    });
  }
  
  if (maxIterations === 0) {
    console.warn('⚠️  Max iterations reached while resolving token references');
  }
  
  return resolved;
}

/**
 * Generate CSS custom properties from flattened tokens
 */
function generateCSSVariables(flatTokens: Record<string, string | number>, prefix = '--nhs'): string {
  let css = ':root {\n';
  
  Object.entries(flatTokens).forEach(([key, value]) => {
    // Convert to CSS variable name
    const cssVar = `${prefix}-${key.replace(/[A-Z]/g, '-$1').toLowerCase()}`;
    css += `  ${cssVar}: ${value};\n`;
  });
  
  css += '}\n\n';
  return css;
}

/**
 * Generate component CSS using CSS variables
 */
function generateComponentCSS(flatTokens: Record<string, string | number>): string {
  
}

/**
 * Generate CSS from NHS theme tokens
 */
async function compileTokens() {
  console.log('🏥 Compiling NHS Design System tokens...');

  try {
    // Load actual design tokens from JSON files
    const designTokens = loadDesignTokens();
    console.log('📁 Loaded token files:', Object.keys(designTokens));

    // Flatten the token structure
    const flatTokens = flattenTokens(designTokens);
    console.log('🔧 Flattened', Object.keys(flatTokens).length, 'tokens');
    
    // Debug: Show some color keys
    const colorKeys = Object.keys(flatTokens).filter(k => k.includes('color'));
    console.log('🎨 Found color tokens:', colorKeys.length);
    const primaryKeys = colorKeys.filter(k => k.includes('primary'));
    if (primaryKeys.length > 0) {
      console.log('🔍 Primary color tokens:', primaryKeys.slice(0, 5));
    }

    // Resolve token references
    const resolvedTokens = resolveTokenReferences(flatTokens);
    console.log('🔗 Resolved token references');

    // Generate CSS variables
    const cssVariables = generateCSSVariables(resolvedTokens);
    
    // Generate component CSS
    const componentCSS = generateComponentCSS(resolvedTokens);
    
    // Combine everything
    const finalCSS = `/* 
 * NHS Design System - Compiled Tokens
 * Generated automatically from design tokens
 * Do not edit this file directly
 */

${cssVariables}${componentCSS}`;

    // Ensure dist directory exists
    const distDir = join(process.cwd(), 'dist');
    mkdirSync(distDir, { recursive: true });

    // Write the compiled CSS
    // const outputPath = join(distDir, 'nhs-design-system.css');
    // writeFileSync(outputPath, finalCSS, 'utf8');

    // console.log('✅ Tokens compiled successfully!');
    // console.log(`📄 Output: ${outputPath}`);
    console.log(`📊 File size: ${(finalCSS.length / 1024).toFixed(1)}KB`);
    console.log('🎨 Design tokens used:', Object.keys(resolvedTokens).slice(0, 10).join(', '), '...');

  } catch (error) {
    console.error('❌ Failed to compile tokens:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  compileTokens();
}

export { compileTokens, generateCSSVariables, generateComponentCSS, loadDesignTokens, flattenTokens, resolveTokenReferences, deepMerge };
