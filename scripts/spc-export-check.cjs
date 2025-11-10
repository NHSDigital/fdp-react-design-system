#!/usr/bin/env node
/**
 * Compare current SPC export surface to snapshot.
 * Fails if any previously exported symbol disappears (breaking change).
 */
const { Project } = require('ts-morph');
const { readFileSync } = require('fs');
const path = require('path');

function gatherExports(sourceFile) {
  const names = new Set();
  sourceFile.getExportedDeclarations().forEach((decls, name) => {
    names.add(name);
  });
  return Array.from(names).sort();
}

function main() {
  const snapshotPath = path.resolve(__dirname, '../packages/nhs-fdp-spc/.exports-snapshot.json');
  let snapshot;
  try {
    snapshot = JSON.parse(readFileSync(snapshotPath, 'utf-8'));
  } catch (e) {
    console.log('No snapshot found; create one with npm run spc:exports:snapshot');
    return;
  }
  const project = new Project({ tsConfigFilePath: path.resolve(__dirname, '../tsconfig.build.json') });
  const files = Object.keys(snapshot);
  const breaking = [];
  for (const rel of files) {
    const sf = project.addSourceFileAtPathIfExists(path.resolve(__dirname, '..', rel));
    if (!sf) continue;
    const current = gatherExports(sf);
    const previous = snapshot[rel] || [];
    const missing = previous.filter(p => !current.includes(p));
    if (missing.length) {
      breaking.push({ file: rel, missing });
    }
  }
  if (breaking.length) {
    console.error('Breaking export changes detected:\n' + breaking.map(b => `${b.file}: ${b.missing.join(', ')}`).join('\n'));
    process.exit(1);
  } else {
    console.log('Export surface consistent with snapshot.');
  }
}

main();
