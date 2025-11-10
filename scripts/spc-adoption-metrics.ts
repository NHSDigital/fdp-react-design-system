import { glob } from 'glob';
import fs from 'fs/promises';
import path from 'path';

type Counts = {
  newPath: number;
  legacyPathAlias: number;
  legacyDesignSystemNamed: number;
};

function countInText(text: string, re: RegExp): number {
  let m: RegExpExecArray | null;
  let c = 0;
  // eslint-disable-next-line no-cond-assign
  while ((m = re.exec(text)) !== null) c++;
  return c;
}

async function main() {
  const files = await glob([
    'src/**/*.{ts,tsx,js,jsx}',
    'packages/**/*.{ts,tsx,js,jsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/.storybook/**',
  ], { nodir: true });

  const counts: Counts = { newPath: 0, legacyPathAlias: 0, legacyDesignSystemNamed: 0 };

  const reNew = /from\s+['"]@nhs-fdp\/spc(?:\W|$)/g;
  const reLegacyAlias = /from\s+['"][^'"\n]*charts\/SPC[^'"\n]*['"]/g; // deep alias imports
  const reDsNamedLine = /import\s+\{[^}]*SPC[^}]*\}\s+from\s+['"]@nhs-fdp\/design-system['"]/g; // named SPC imports from DS

  for (const file of files) {
    try {
      const text = await fs.readFile(file, 'utf8');
      counts.newPath += countInText(text, reNew);
      counts.legacyPathAlias += countInText(text, reLegacyAlias);
      counts.legacyDesignSystemNamed += countInText(text, reDsNamedLine);
    } catch (e) {
      // ignore unreadable files
    }
  }

  const legacyTotal = counts.legacyPathAlias + counts.legacyDesignSystemNamed;
  const totalRelevant = counts.newPath + legacyTotal;
  const adoptionPct = totalRelevant > 0 ? (counts.newPath / totalRelevant) * 100 : 100;

  const rows = [
    ['Metric', 'Count'],
    ['New imports (@nhs-fdp/spc*)', String(counts.newPath)],
    ['Legacy deep alias (charts/SPC...)', String(counts.legacyPathAlias)],
    ['Legacy DS named imports containing "SPC"', String(counts.legacyDesignSystemNamed)],
    ['—', '—'],
    ['Total relevant import lines', String(totalRelevant)],
    ['Adoption % (new / total relevant)', `${adoptionPct.toFixed(2)}%`],
  ];

  // Pretty print simple table
  const col1 = Math.max(...rows.map(r => r[0].length)) + 2;
  for (const [k, v] of rows) {
    console.log(k.padEnd(col1, ' '), v);
  }

  console.log('\nNotes:');
  console.log('- This is an approximate metric based on import lines.');
  console.log('- "Legacy DS named" counts imports from @nhs-fdp/design-system that include symbols containing "SPC".');
  console.log('- For deep alias usage, any path containing charts/SPC is treated as legacy.');
  console.log('- Consider running the codemod (spc:codemod:imports) to migrate safe cases.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
