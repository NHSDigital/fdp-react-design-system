#!/usr/bin/env node
// Conditionally runs multi-render build steps if DS_MULTI_RENDER=1
if (process.env.DS_MULTI_RENDER === '1') {
  const { execSync } = require('child_process');
  try {
    console.log('[multi-render] Building behaviours...');
    execSync('npm run build:behaviours', { stdio: 'inherit' });
    console.log('[multi-render] Extracting component schemas...');
    execSync('npm run schemas:extract', { stdio: 'inherit' });
    console.log('[multi-render] Generating nunjucks macros (schema)...');
    execSync('npm run generate:nunjucks -- --generate', { stdio: 'inherit' });
    console.log('[multi-render] Macro parity check...');
    execSync('npm run verify:macro-parity', { stdio: 'inherit' });
    console.log('[multi-render] Schema vs Macro consistency...');
    execSync('npm run verify:schema-macro', { stdio: 'inherit' });
  } catch (e) {
    console.error('Multi-render optional step failed', e.message);
    process.exit(1);
  }
} else {
  console.log('[multi-render] Skipped (set DS_MULTI_RENDER=1 to enable).');
}
