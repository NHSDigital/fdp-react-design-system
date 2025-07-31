#!/usr/bin/env node

/**
 * Visual Testing Snapshot Manager
 * Automatically creates missing snapshots and handles visual test maintenance
 */

import { spawn } from 'child_process';
import { existsSync, readdirSync, statSync } from 'fs';
import path from 'path';

const CONFIG = {
  testDir: './tests/visual',
  playwrightConfig: './playwright.visual.config.ts',
  snapshotThreshold: 0.2, // 20% difference threshold
  timeout: 60000, // 1 minute timeout per test
};

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message: string, color: string = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

/**
 * Find all test files that might need snapshot creation
 */
function findTestFiles(): string[] {
  const testFiles: string[] = [];
  
  function scanDirectory(dir: string) {
    if (!existsSync(dir)) return;
    
    const items = readdirSync(dir);
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = statSync(itemPath);
      
      if (stat.isDirectory() && !item.includes('snapshots') && !item.includes('reports')) {
        scanDirectory(itemPath);
      } else if (item.endsWith('.test.ts') && item.includes('visual')) {
        testFiles.push(itemPath);
      }
    }
  }
  
  scanDirectory(CONFIG.testDir);
  return testFiles;
}

/**
 * Check if a test file has existing snapshots
 */
function hasSnapshots(testFile: string): boolean {
  const snapshotDir = `${testFile}-snapshots`;
  if (!existsSync(snapshotDir)) return false;
  
  const snapshots = readdirSync(snapshotDir).filter(file => file.endsWith('.png'));
  return snapshots.length > 0;
}

/**
 * Run playwright test to create snapshots
 */
function createSnapshots(testFile: string): Promise<{ success: boolean; output: string }> {
  return new Promise((resolve) => {
    log(`📸 Creating snapshots for: ${path.basename(testFile)}`, colors.blue);
    
    const command = 'npx';
    const args = [
      'playwright', 'test',
      '--config', CONFIG.playwrightConfig,
      '--timeout', CONFIG.timeout.toString(),
      '--update-snapshots', 'missing',
      testFile
    ];
    
    log(`⚡ Running: ${command} ${args.join(' ')}`, colors.cyan);
    
    const process = spawn(command, args, {
      stdio: ['inherit', 'pipe', 'pipe']
    });
    
    let output = '';
    
    process.stdout?.on('data', (data) => {
      const text = data.toString();
      output += text;
      console.log(text);
    });
    
    process.stderr?.on('data', (data) => {
      const text = data.toString();
      output += text;
      console.error(text);
    });
    
    process.on('close', (code) => {
      const success = code === 0;
      
      if (success) {
        log(`✅ Snapshots created successfully for ${path.basename(testFile)}`, colors.green);
      } else {
        log(`❌ Failed to create snapshots for ${path.basename(testFile)} (exit code: ${code})`, colors.red);
      }
      
      resolve({ success, output });
    });
    
    process.on('error', (error) => {
      log(`💥 Process error: ${error.message}`, colors.red);
      resolve({ success: false, output: error.message });
    });
  });
}

/**
 * Main function to manage snapshots
 */
async function manageSnapshots() {
  log('🎬 Visual Testing Snapshot Manager', colors.bright);
  log('==================================', colors.cyan);
  
  const testFiles = findTestFiles();
  
  if (testFiles.length === 0) {
    log('⚠️ No visual test files found!', colors.yellow);
    return;
  }
  
  log(`🔍 Found ${testFiles.length} visual test files:`, colors.blue);
  testFiles.forEach(file => {
    const hasSnaps = hasSnapshots(file);
    const status = hasSnaps ? '✅ Has snapshots' : '❌ Missing snapshots';
    log(`  • ${path.basename(file)} - ${status}`, hasSnaps ? colors.green : colors.red);
  });
  
  // Find files that need snapshots
  const filesNeedingSnapshots = testFiles.filter(file => !hasSnapshots(file));
  
  if (filesNeedingSnapshots.length === 0) {
    log('\\n🎉 All test files have snapshots!', colors.green);
    return;
  }
  
  log(`\\n📸 Creating snapshots for ${filesNeedingSnapshots.length} files...`, colors.blue);
  
  const results: Array<{ file: string; success: boolean; output: string }> = [];
  
  // Process files sequentially to avoid conflicts
  for (const testFile of filesNeedingSnapshots) {
    try {
      const result = await createSnapshots(testFile);
      results.push({ file: testFile, ...result });
      
      // Brief pause between files
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      log(`💥 Error processing ${testFile}: ${error}`, colors.red);
      results.push({ 
        file: testFile, 
        success: false, 
        output: error instanceof Error ? error.message : String(error)
      });
    }
  }
  
  // Summary report
  log('\\n📊 Snapshot Creation Summary', colors.bright);
  log('============================', colors.cyan);
  
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  log(`✅ Successful: ${successful.length}`, colors.green);
  log(`❌ Failed: ${failed.length}`, colors.red);
  
  if (successful.length > 0) {
    log('\\n✅ Successfully Created Snapshots:', colors.green);
    successful.forEach(r => {
      log(`  • ${path.basename(r.file)}`, colors.green);
    });
  }
  
  if (failed.length > 0) {
    log('\\n❌ Failed to Create Snapshots:', colors.red);
    failed.forEach(r => {
      log(`  • ${path.basename(r.file)}`, colors.red);
    });
  }
  
  const successRate = Math.round((successful.length / results.length) * 100);
  log(`\\n📈 Success Rate: ${successRate}%`, colors.cyan);
  
  if (failed.length === 0) {
    log('\\n🎉 All snapshots created successfully!', colors.green);
    log('You can now run your visual tests with confidence!', colors.cyan);
  } else {
    log('\\n⚠️ Some snapshots failed to create. Check the output above for details.', colors.yellow);
  }
}

// Handle command line arguments
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  log('Visual Testing Snapshot Manager', colors.bright);
  log('===============================', colors.cyan);
  log('Usage: npx tsx tools/manage-snapshots.ts [options]', colors.blue);
  log('');
  log('Options:', colors.yellow);
  log('  --help, -h     Show this help message');
  log('');
  log('This tool automatically finds visual test files that are missing');
  log('snapshots and creates them using Playwright\'s --update-snapshots flag.');
  log('');
  log('Examples:', colors.yellow);
  log('  npx tsx tools/manage-snapshots.ts');
  log('');
  process.exit(0);
}

// Run the snapshot manager
manageSnapshots().catch((error) => {
  log(`💥 Fatal error: ${error.message}`, colors.red);
  console.error(error);
  process.exit(1);
});
