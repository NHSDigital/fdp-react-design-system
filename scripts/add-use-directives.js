#!/usr/bin/env node

/**
 * Post-processing script to add @use 'sass:color'; directive to SCSS files
 * that contain color.adjust() functions
 */

import fs from 'fs';
import path from 'path';

const filesToProcess = [
  'packages/nhs-fdp/dist/scss/_colors.scss',
  'packages/nhs-fdp/dist/scss/_tokens.scss'
];

function addUseDirective(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file contains color.adjust() functions
    if (content.includes('color.adjust(')) {
      // Check if @use directive is already present
      if (!content.includes('@use \'sass:color\';')) {
        // Add @use directive at the top
        const lines = content.split('\n');
        const firstLineIndex = lines.findIndex(line => line.trim() !== '');
        
        if (firstLineIndex !== -1) {
          lines.splice(firstLineIndex, 0, '@use \'sass:color\';', '');
          const newContent = lines.join('\n');
          fs.writeFileSync(filePath, newContent, 'utf8');
          console.log(`✅ Added @use directive to ${filePath}`);
        }
      } else {
        console.log(`⏭️  @use directive already present in ${filePath}`);
      }
    } else {
      console.log(`⏭️  No color.adjust() functions found in ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Process each file
filesToProcess.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    addUseDirective(filePath);
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});

console.log('🎉 Post-processing complete!');
