#!/usr/bin/env ts-node

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

// Import your existing theme tokens
// We'll need to adjust this import path to match your actual theme location
import { useNHSTheme } from '../src/components/NHSThemeProvider';

/**
 * NHS Design System Token Compiler
 * 
 * Compiles design tokens into CSS variables and component styles at build time.
 * This replaces runtime style generation with optimized CSS.
 */

interface TokenObject {
  [key: string]: string | number | TokenObject;
}

/**
 * Generate CSS custom properties from token object
 */
function generateCSSVariables(tokens: TokenObject, prefix = '--nhs'): string {
  let css = ':root {\n';
  
  function traverse(obj: TokenObject, path: string[] = []): void {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        traverse(value, [...path, key]);
      } else {
        // Convert camelCase to kebab-case and create CSS variable
        const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        const variable = `${prefix}-${[...path, kebabKey].join('-').toLowerCase()}`;
        css += `  ${variable}: ${value};\n`;
      }
    });
  }
  
  traverse(tokens);
  css += '}\n\n';
  return css;
}

/**
 * Generate component CSS using CSS variables
 */
function generateComponentCSS(): string {
  return `
/* NHS Form Group */
.nhs-form-group {
  margin-bottom: var(--nhs-spacing-spacing5);
}

.nhs-form-group--error {
  margin-bottom: var(--nhs-spacing-spacing3);
}

/* NHS Fieldset */
.nhs-fieldset {
  border: none;
  margin: 0;
  padding: 0;
  min-width: 0;
}

/* NHS Legend */
.nhs-fieldset__legend {
  font-family: var(--nhs-font-fontfamilybase), Arial, Helvetica, sans-serif;
  font-weight: var(--nhs-font-fontweightbold);
  color: var(--nhs-color-colortextprimary);
  margin-bottom: var(--nhs-spacing-spacing3);
  display: block;
  width: 100%;
}

.nhs-fieldset__legend--xl {
  font-size: var(--nhs-font-fontsize48tablet);
  line-height: var(--nhs-font-fontlineheightbase);
}

.nhs-fieldset__legend--l {
  font-size: var(--nhs-font-fontsize36tablet);
  line-height: var(--nhs-font-fontlineheightbase);
}

.nhs-fieldset__legend--m {
  font-size: var(--nhs-font-fontsize26tablet);
  line-height: var(--nhs-font-fontlineheightbase);
}

.nhs-fieldset__legend--s {
  font-size: var(--nhs-font-fontsize22tablet);
  line-height: var(--nhs-font-fontlineheightbase);
}

@media (max-width: 768px) {
  .nhs-fieldset__legend--xl { font-size: var(--nhs-font-fontsize48mobile); }
  .nhs-fieldset__legend--l { font-size: var(--nhs-font-fontsize36mobile); }
  .nhs-fieldset__legend--m { font-size: var(--nhs-font-fontsize26mobile); }
  .nhs-fieldset__legend--s { font-size: var(--nhs-font-fontsize22mobile); }
}

/* NHS Hint */
.nhs-hint {
  font-family: var(--nhs-font-fontfamilybase), Arial, Helvetica, sans-serif;
  font-size: var(--nhs-font-fontsize16tablet);
  line-height: var(--nhs-font-fontlineheightbase);
  color: var(--nhs-color-colortextsecondary);
  margin-bottom: var(--nhs-spacing-spacing3);
  display: block;
}

@media (max-width: 768px) {
  .nhs-hint { font-size: var(--nhs-font-fontsize16mobile); }
}

/* NHS Error Message */
.nhs-error-message {
  font-family: var(--nhs-font-fontfamilybase), Arial, Helvetica, sans-serif;
  font-size: var(--nhs-font-fontsize16tablet);
  line-height: var(--nhs-font-fontlineheightbase);
  color: var(--nhs-color-colorerror);
  font-weight: var(--nhs-font-fontweightbold);
  margin-bottom: var(--nhs-spacing-spacing3);
  display: block;
}

@media (max-width: 768px) {
  .nhs-error-message { font-size: var(--nhs-font-fontsize16mobile); }
}

/* NHS Checkboxes */
.nhs-checkboxes {
  margin-bottom: 0;
}

.nhs-checkboxes--small .nhs-checkboxes__item {
  margin-bottom: 8px; /* NHS spacing-2 */
}

.nhs-checkboxes__item {
  position: relative;
  display: block;
  margin-bottom: 8px; /* NHS spacing-2 - exact NHS value */
  padding: 0;
}

.nhs-checkboxes__item:last-child {
  margin-bottom: 0;
}

/* NHS Checkbox Input */
.nhs-checkboxes__input {
  cursor: pointer;
  position: absolute;
  z-index: 1;
  top: -2px;
  left: -2px;
  width: 44px;
  height: 44px;
  margin: 0;
  opacity: 0;
}

.nhs-checkboxes__input:disabled {
  cursor: not-allowed;
}

/* NHS Checkbox Label */
.nhs-checkboxes__label {
  font-family: var(--nhs-font-fontfamilybase), Arial, Helvetica, sans-serif;
  font-size: var(--nhs-font-fontsize19tablet);
  line-height: var(--nhs-font-fontlineheightbase);
  color: var(--nhs-color-colortextprimary);
  cursor: pointer;
  display: block;
  position: relative;
  min-height: 40px;
  padding-left: 50px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 0;
  touch-action: manipulation;
}

@media (max-width: 768px) {
  .nhs-checkboxes__label { font-size: var(--nhs-font-fontsize19mobile); }
}

.nhs-checkboxes__input:disabled + .nhs-checkboxes__label {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Checkbox box (::before pseudo-element) */
.nhs-checkboxes__label::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 2px solid #4c6272; /* NHS exact: 2px border, #4c6272 color */
  background: transparent;
  border-radius: 0;
  box-sizing: border-box;
}

/* Checkbox tick (::after pseudo-element) */
.nhs-checkboxes__label::after {
  content: "";
  position: absolute;
  top: 13px; /* NHS exact positioning */
  left: 10px; /* NHS exact positioning */
  width: 22px; /* NHS exact size */
  height: 10px; /* NHS exact size */
  transform: rotate(-45deg);
  border: solid;
  border-width: 0 0 4px 4px; /* NHS exact: 4px border width */
  border-top-color: transparent;
  border-color: var(--nhs-color-colortextprimary);
  opacity: 0;
  background: transparent;
  box-sizing: border-box;
}

/* Checked state */
.nhs-checkboxes__input:checked + .nhs-checkboxes__label::after {
  opacity: 1;
}

/* Focus state */
.nhs-checkboxes__input:focus + .nhs-checkboxes__label::before {
  outline: var(--nhs-border-borderwidthformelementerror) solid var(--nhs-color-colorfocusbackground);
  outline-offset: 0;
  box-shadow: inset 0 0 0 var(--nhs-border-borderwidthformelement) var(--nhs-color-colorfocustext);
}

/* Error state */
.nhs-form-group--error .nhs-checkboxes__label::before {
  border-color: var(--nhs-color-colorerror);
}

.nhs-form-group--error .nhs-checkboxes__label::after {
  border-color: var(--nhs-color-colorerror);
}

/* Small variant */
.nhs-checkboxes--small .nhs-checkboxes__label {
  font-size: var(--nhs-font-fontsize16tablet);
  min-height: 34px;
  padding-left: 34px;
  padding-top: 1px;
  padding-bottom: 1px;
}

@media (max-width: 768px) {
  .nhs-checkboxes--small .nhs-checkboxes__label { font-size: var(--nhs-font-fontsize16mobile); }
}

.nhs-checkboxes--small .nhs-checkboxes__label::before {
  top: 1px;
  width: 24px;
  height: 24px;
}

.nhs-checkboxes--small .nhs-checkboxes__label::after {
  top: 8px; /* Scaled from 13px */
  left: 6px; /* Scaled from 10px */
  width: 13px; /* Scaled from 22px */
  height: 6px; /* Scaled from 10px */
}

/* NHS Checkbox Hints */
.nhs-checkboxes__hint {
  font-family: var(--nhs-font-fontfamilybase), Arial, Helvetica, sans-serif;
  font-size: var(--nhs-font-fontsize16tablet);
  line-height: var(--nhs-font-fontlineheightbase);
  color: var(--nhs-color-colortextsecondary);
  margin-top: var(--nhs-spacing-spacing1);
  padding-left: 50px;
}

@media (max-width: 768px) {
  .nhs-checkboxes__hint { font-size: var(--nhs-font-fontsize16mobile); }
}

.nhs-checkboxes--small .nhs-checkboxes__hint {
  padding-left: 34px;
}

/* NHS Conditional Content */
.nhs-checkboxes__conditional {
  margin-top: var(--nhs-spacing-spacing3);
  margin-bottom: var(--nhs-spacing-spacing3);
  padding-left: var(--nhs-spacing-spacing4);
  border-left: var(--nhs-border-borderwidthformelement) solid var(--nhs-color-colorborderdefault);
}

.nhs-checkboxes__conditional--hidden {
  display: none;
}

/* NHS Utility Classes */
.nhs-u-visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
`;
}

/**
 * Generate CSS from NHS theme tokens
 */
async function compileTokens() {
  console.log('🏥 Compiling NHS Design System tokens...');

  try {
    // For now, we'll create a mock theme structure based on what we've seen
    // In a real implementation, you'd import your actual theme
    const mockTheme = {
      color: {
        ColorTextPrimary: '#212b32',
        ColorTextSecondary: '#4c6272', 
        ColorError: '#d5281b',
        ColorBorderDefault: '#4c6272',
        ColorFocusBackground: '#ffdd00',
        ColorFocusText: '#212b32'
      },
      font: {
        FontFamilyBase: 'Frutiger W01',
        FontSize16Mobile: '16px',
        FontSize16Tablet: '16px',
        FontSize19Mobile: '18px',
        FontSize19Tablet: '19px',
        FontSize22Mobile: '20px',
        FontSize22Tablet: '22px',
        FontSize26Mobile: '24px',
        FontSize26Tablet: '26px',
        FontSize36Mobile: '32px',
        FontSize36Tablet: '36px',
        FontSize48Mobile: '40px',
        FontSize48Tablet: '48px',
        FontWeightBold: '600',
        FontLineHeightBase: '1.5'
      },
      spacing: {
        Spacing1: '4px',
        Spacing2: '8px', 
        Spacing3: '16px',
        Spacing4: '24px',
        Spacing5: '32px'
      },
      border: {
        BorderWidthFormElement: '2px',
        BorderWidthFormElementError: '4px'
      }
    };

    // Generate CSS variables
    const cssVariables = generateCSSVariables(mockTheme);
    
    // Generate component CSS
    const componentCSS = generateComponentCSS();
    
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
    const outputPath = join(distDir, 'nhs-design-system.css');
    writeFileSync(outputPath, finalCSS, 'utf8');

    console.log('✅ Tokens compiled successfully!');
    console.log(`📄 Output: ${outputPath}`);
    console.log(`📊 File size: ${(finalCSS.length / 1024).toFixed(1)}KB`);

  } catch (error) {
    console.error('❌ Failed to compile tokens:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  compileTokens();
}

export { compileTokens, generateCSSVariables, generateComponentCSS };
