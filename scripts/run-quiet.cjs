#!/usr/bin/env node
/**
 * Wrapper to run npm scripts with cleaner output by suppressing known warnings
 * Usage: node scripts/run-quiet.cjs <npm script name>
 */

const { spawn } = require('child_process');
const readline = require('readline');

const scriptName = process.argv[2];
if (!scriptName) {
  console.error('Usage: node scripts/run-quiet.cjs <npm-script-name>');
  process.exit(1);
}

const npm = spawn('npm', ['run', scriptName], {
  stdio: ['inherit', 'pipe', 'pipe'],
  shell: true
});

const suppressPatterns = [
  /npm warn Unknown user config "always-auth"/,
  /npm warn Unknown env config "always-auth"/,
  /This will stop working in the next major version/
];

function shouldSuppress(line) {
  return suppressPatterns.some(pattern => pattern.test(line));
}

// Stream stdout
const stdoutReader = readline.createInterface({
  input: npm.stdout,
  terminal: false
});

stdoutReader.on('line', (line) => {
  if (!shouldSuppress(line)) {
    console.log(line);
  }
});

// Stream stderr
const stderrReader = readline.createInterface({
  input: npm.stderr,
  terminal: false
});

stderrReader.on('line', (line) => {
  if (!shouldSuppress(line)) {
    console.error(line);
  }
});

npm.on('close', (code) => {
  process.exit(code);
});
