#!/usr/bin/env node
/**
 * Snapshot current SPC export surface from the source barrels.
 * Output: packages/nhs-fdp-spc/.exports-snapshot.json
 */
const { Project } = require('ts-morph');
const { writeFileSync, existsSync, mkdirSync } = require('fs');
const path = require('path');

function gatherExports(sourceFile) {
  const names = new Set();
  sourceFile.getExportedDeclarations().forEach((decls, name) => {
    names.add(name);
  });
  return Array.from(names).sort();
}

function main() {
  const project = new Project({ tsConfigFilePath: path.resolve(__dirname, '../tsconfig.build.json') });
  const files = [
    'src/components/DataVisualisation/charts/SPC/index.ts',
    'src/components/DataVisualisation/charts/SPC/engine/index.ts',
    'src/components/DataVisualisation/charts/SPC/icons/index.ts'
  ];
  const result = {};
  for (const rel of files) {
    const sf = project.addSourceFileAtPathIfExists(path.resolve(__dirname, '..', rel));
    if (!sf) continue;
    result[rel] = gatherExports(sf);
  }
  const outDir = path.resolve(__dirname, '../packages/nhs-fdp-spc');
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, '.exports-snapshot.json');
  writeFileSync(outPath, JSON.stringify(result, null, 2));
  console.log(`Wrote snapshot to ${outPath}`);
}

main();
