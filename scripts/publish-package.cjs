#!/usr/bin/env node

/**
 * Smart publish script that automatically detects prerelease versions
 * and applies the correct --tag parameter.
 * 
 * This prevents the common error:
 * "You must specify a tag using --tag when publishing a prerelease version"
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Read package.json to get current version
const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const version = packageJson.version;

console.log(`\n📦 Publishing ${packageJson.name}@${version}`);

// Determine the appropriate tag based on version
let tag = 'latest';

if (version.includes('-alpha')) {
  tag = 'alpha';
  console.log('🏷️  Detected alpha prerelease version');
} else if (version.includes('-beta')) {
  tag = 'beta';
  console.log('🏷️  Detected beta prerelease version');
} else if (version.includes('-rc')) {
  tag = 'next';
  console.log('🏷️  Detected release candidate version');
} else if (/-(dev|pre|preview|canary|experimental)/.test(version)) {
  tag = version.match(/-(dev|pre|preview|canary|experimental)/)[1];
  console.log(`🏷️  Detected ${tag} prerelease version`);
} else {
  console.log('🏷️  Publishing as latest (stable release)');
}

// Build the publish command
const publishCommand = `npm publish --registry=https://npm.pkg.github.com --tag ${tag}`;

console.log(`\n🚀 Running: ${publishCommand}\n`);

try {
  // Execute the publish command
  execSync(publishCommand, { stdio: 'inherit' });
  
  console.log(`\n✅ Successfully published ${packageJson.name}@${version} with tag "${tag}"`);
  console.log(`\n📥 Install with: npm install ${packageJson.name}@${tag}`);
  
} catch (error) {
  console.error(`\n❌ Failed to publish ${packageJson.name}@${version}`);
  process.exit(1);
}
