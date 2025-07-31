#!/usr/bin/env node

/**
 * NHS FDP Visual Testing - Chunked Test Runner
 * Runs visual tests in chunks to avoid timeouts and improve performance
 */

import { spawn } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';

const testChunks = [
  {
    name: 'Core Components',
    file: 'components-core.test.ts',
    description: 'Tests core NHS components (Button, Footer, Breadcrumb, Tag, Pagination)',
    priority: 1
  },
  {
    name: 'Navigation Components', 
    file: 'components-navigation.test.ts',
    description: 'Tests navigation and wayfinding components (Header, BackLink, etc.)',
    priority: 2
  },
  {
    name: 'Form Components',
    file: 'components-form.test.ts', 
    description: 'Tests form inputs and validation components',
    priority: 3
  },
  {
    name: 'Content Components',
    file: 'components-content.test.ts',
    description: 'Tests content display and information components',
    priority: 4
  },
  {
    name: 'Error Components',
    file: 'components-error.test.ts',
    description: 'Tests error handling and validation feedback components',
    priority: 5
  }
];

const CONFIG = {
  baseDir: './tests/visual',
  playwrightConfig: './playwright.visual.config.ts',
  maxRetries: 2,
  timeout: 30000,
  browsers: ['chromium', 'firefox', 'webkit']
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

function validateTestFiles(): boolean {
  log('\n🔍 Validating test files...', colors.cyan);
  
  let allFilesExist = true;
  
  for (const chunk of testChunks) {
    const filePath = path.join(CONFIG.baseDir, chunk.file);
    if (!existsSync(filePath)) {
      log(`❌ Missing test file: ${filePath}`, colors.red);
      allFilesExist = false;
    } else {
      log(`✅ Found: ${chunk.file}`, colors.green);
    }
  }
  
  // Check config file
  if (!existsSync(CONFIG.playwrightConfig)) {
    log(`❌ Missing Playwright config: ${CONFIG.playwrightConfig}`, colors.red);
    allFilesExist = false;
  } else {
    log(`✅ Found: ${CONFIG.playwrightConfig}`, colors.green);
  }
  
  return allFilesExist;
}

function runTestChunk(chunk: any): Promise<{ success: boolean; output: string }> {
  return new Promise((resolve) => {
    log(`\n🧪 Running ${chunk.name}...`, colors.blue);
    log(`📝 ${chunk.description}`, colors.yellow);
    
    const testCommand = 'npx';
    const testArgs = [
      'playwright', 'test',
      '--config', CONFIG.playwrightConfig,
      '--timeout', CONFIG.timeout.toString(),
      '--retries', CONFIG.maxRetries.toString(),
      path.join(CONFIG.baseDir, chunk.file)
    ];
    
    log(`⚡ Command: ${testCommand} ${testArgs.join(' ')}`, colors.cyan);
    
    const process = spawn(testCommand, testArgs, {
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
        log(`✅ ${chunk.name} completed successfully!`, colors.green);
      } else {
        log(`❌ ${chunk.name} failed with exit code ${code}`, colors.red);
      }
      
      resolve({ success, output });
    });
  });
}

async function runAllTests() {
  log('🎉 NHS FDP Visual Testing - Chunked Runner', colors.bright);
  log('================================================', colors.cyan);
  
  // Validate files exist
  if (!validateTestFiles()) {
    log('\n❌ Test validation failed. Please ensure all test files exist.', colors.red);
    process.exit(1);
  }
  
  // Sort by priority
  const sortedChunks = testChunks.sort((a, b) => a.priority - b.priority);
  
  log(`\n🎯 Running ${sortedChunks.length} test chunks across ${CONFIG.browsers.length} browsers...`, colors.blue);
  
  const results: Array<{ chunk: any; success: boolean; output: string }> = [];
  
  // Run each chunk sequentially to avoid resource conflicts
  for (const chunk of sortedChunks) {
    const result = await runTestChunk(chunk);
    results.push({ chunk, ...result });
    
    // Brief pause between chunks
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  // Summary report
  log('\n🏁 Test Summary Report', colors.bright);
  log('===================', colors.cyan);
  
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  log(`✅ Successful chunks: ${successful.length}`, colors.green);
  log(`❌ Failed chunks: ${failed.length}`, colors.red);
  
  if (successful.length > 0) {
    log('\n✅ Successful Test Chunks:', colors.green);
    successful.forEach(r => {
      log(`  • ${r.chunk.name}`, colors.green);
    });
  }
  
  if (failed.length > 0) {
    log('\n❌ Failed Test Chunks:', colors.red);
    failed.forEach(r => {
      log(`  • ${r.chunk.name}`, colors.red);
    });
  }
  
  log(`\n📊 Overall Success Rate: ${Math.round((successful.length / results.length) * 100)}%`, colors.cyan);
  
  if (failed.length === 0) {
    log('\n🎉 All visual tests completed successfully!', colors.green);
    process.exit(0);
  } else {
    log('\n⚠️ Some visual tests failed. Check the output above for details.', colors.yellow);
    process.exit(1);
  }
}

// Handle command line arguments
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  log('NHS FDP Visual Testing - Chunked Runner', colors.bright);
  log('========================================', colors.cyan);
  log('Usage: npx tsx tools/run-visual-tests.ts [options]', colors.blue);
  log('');
  log('Options:', colors.yellow);
  log('  --help, -h     Show this help message');
  log('  --list, -l     List available test chunks');
  log('');
  log('Test Chunks:', colors.yellow);
  testChunks.forEach(chunk => {
    log(`  ${chunk.priority}. ${chunk.name} - ${chunk.description}`, colors.cyan);
  });
  process.exit(0);
}

if (args.includes('--list') || args.includes('-l')) {
  log('Available Test Chunks:', colors.bright);
  log('=====================', colors.cyan);
  testChunks.forEach(chunk => {
    log(`${chunk.priority}. ${chunk.name}`, colors.blue);
    log(`   File: ${chunk.file}`, colors.yellow);
    log(`   Description: ${chunk.description}`, colors.cyan);
    log('');
  });
  process.exit(0);
}

// Run the tests
runAllTests().catch((error) => {
  log(`💥 Fatal error: ${error.message}`, colors.red);
  process.exit(1);
});
