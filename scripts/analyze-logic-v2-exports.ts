/*
  Analyze the public surface of logic_v2

  What it does:
  - Resolves the barrel at src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/index.ts
  - For each module re-exported there, lists exported declarations
  - Counts references across the whole repo and distinguishes internal (within logic_v2) vs external usage
  - Flags exports not used outside logic_v2 (potential dead public surface)
  - Detects name collisions across modules and marks likely duplicates when signatures match

  Run:
    npx tsx scripts/analyze-logic-v2-exports.ts
*/

import path from "node:path";
import fs from "node:fs";
import {
	Node,
	Project,
	SyntaxKind,
	SourceFile,
	ExportDeclaration,
	ExportedDeclarations,
} from "ts-morph";

type ExportInfo = {
	name: string;
	moduleFile: string;
	kind: string;
	externalRefCount: number;
	totalRefCount: number;
	exampleRefs: string[];
};

function main() {
	const root = process.cwd();

	const tsconfigCandidates = [
		path.join(root, "tsconfig.json"),
		path.join(root, "tsconfig.build.json"),
	];
	const tsconfigPath = tsconfigCandidates.find((p) => fs.existsSync(p));
	if (!tsconfigPath) {
		console.error("Could not find tsconfig.json. Aborting.");
		process.exit(1);
	}

	const project = new Project({
		tsConfigFilePath: tsconfigPath,
		skipAddingFilesFromTsConfig: false,
	});

	const baseDir = path.resolve(
		"src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2"
	);
	const barrelPath = path.join(baseDir, "index.ts");

	const barrel = project.getSourceFile(barrelPath);
	if (!barrel) {
		console.error("Barrel not found:", path.relative(root, barrelPath));
		process.exit(1);
	}

	const exportDecls = barrel.getExportDeclarations();
	const moduleSpecs = exportDecls
		.map((d: ExportDeclaration) => d.getModuleSpecifierValue())
		.filter(Boolean) as string[];

	const moduleFiles: string[] = [];
	for (const spec of moduleSpecs) {
		const file = resolveModuleFile(project, barrel, spec);
		if (file) moduleFiles.push(file);
	}

	const results: ExportInfo[] = [];
	const nameIndex = new Map<
		string,
		{ modules: Set<string>; kinds: Set<string>; sigs: Map<string, Set<string>> }
	>();

	for (const moduleFile of moduleFiles) {
		const sf = project.getSourceFile(moduleFile);
		if (!sf) continue;

		const exported = sf.getExportedDeclarations();
		exported.forEach((decls: ExportedDeclarations[], name: string) => {
			if (!name || name === "default") return;

			const decl = decls[0];
			if (!decl) return;

			const { total, external, examples } = countReferences(
				project,
				decl,
				(filePath) => isExternal(filePath, baseDir)
			);

			const kind = declKind(decl);
			results.push({
				name,
				moduleFile: path.relative(root, moduleFile),
				kind,
				externalRefCount: external,
				totalRefCount: total,
				exampleRefs: examples,
			});

			// Build collision/signature index
			const entry = nameIndex.get(name) ?? {
				modules: new Set<string>(),
				kinds: new Set<string>(),
				sigs: new Map<string, Set<string>>(), // kind -> signatures
			};
			entry.modules.add(path.relative(root, moduleFile));
			entry.kinds.add(kind);
			const sigKey = getSignatureKey(project, decl);
			if (sigKey) {
				const existing = entry.sigs.get(kind) ?? new Set<string>();
				existing.add(sigKey);
				entry.sigs.set(kind, existing);
			}
			nameIndex.set(name, entry);
		});
	}

	// Reporting
	const unused = results
		.filter((r) => r.externalRefCount === 0)
		.sort((a, b) => a.name.localeCompare(b.name));
	const used = results
		.filter((r) => r.externalRefCount > 0)
		.sort((a, b) => a.name.localeCompare(b.name));

	const collisions = Array.from(nameIndex.entries())
		.filter(([, v]) => v.modules.size > 1)
		.map(([name, v]) => ({
			name,
			modules: Array.from(v.modules).sort(),
			kinds: Array.from(v.kinds).sort(),
			likelyDuplicative:
				v.kinds.size === 1 &&
				Array.from(v.sigs.values()).some((sigSet) => sigSet.size === 1),
		}));

	console.log(`\nlogic_v2 public surface size: ${results.length}`);
	console.log(`Used outside logic_v2: ${used.length}`);
	console.log(
		`Unused outside logic_v2 (potential dead public surface): ${unused.length}`
	);
	console.log(`Name collisions across modules: ${collisions.length}`);

	if (unused.length) {
		console.log("\nUnused outside logic_v2:");
		for (const u of unused) {
			console.log(
				`- ${u.name} (${u.kind}) from ${u.moduleFile} [internal refs: ${u.totalRefCount}]`
			);
		}
	}

	if (collisions.length) {
		console.log(
			"\nPotentially duplicative exports (same name in multiple modules):"
		);
		for (const c of collisions) {
			console.log(`- ${c.name} ${c.likelyDuplicative ? "[likely dup]" : ""}`);
			console.log(`  kinds: ${c.kinds.join(", ")}`);
			for (const m of c.modules) console.log(`  • ${m}`);
		}
	}

	if (used.length) {
		console.log("\nSample used exports (top 10):");
		for (const u of used.slice(0, 10)) {
			console.log(
				`- ${u.name} (${u.kind}) from ${u.moduleFile} -> external refs: ${u.externalRefCount} e.g. ${u.exampleRefs.join(", ")}`
			);
		}
	}
	console.log("\nDone.");
}

function resolveModuleFile(
	project: Project,
	fromFile: SourceFile,
	spec: string
): string | undefined {
	const fromDir = path.dirname(fromFile.getFilePath());
	const resolved = path.resolve(fromDir, spec);
	const candidates = [
		`${resolved}.ts`,
		`${resolved}.tsx`,
		`${resolved}.mts`,
		`${resolved}.cts`,
		path.join(resolved, "index.ts"),
		path.join(resolved, "index.tsx"),
	];
	for (const p of candidates) {
		const sf = project.getSourceFile(p);
		if (sf) return sf.getFilePath();
	}
	return undefined;
}

function declKind(d: Node): string {
	if (Node.isFunctionDeclaration(d)) return "function";
	if (Node.isClassDeclaration(d)) return "class";
	if (Node.isInterfaceDeclaration(d)) return "interface";
	if (Node.isTypeAliasDeclaration(d)) return "type";
	if (Node.isEnumDeclaration(d)) return "enum";
	if (Node.isVariableDeclaration(d)) return "const";
	if (Node.isExportAssignment(d)) return "default";
	return SyntaxKind[d.getKind()] ?? "unknown";
}

function isExternal(filePath: string, baseDir: string) {
	const norm = filePath.replace(/\\/g, "/");
	const base = baseDir.replace(/\\/g, "/");
	return !norm.startsWith(base + "/");
}

function countReferences(
	project: Project,
	decl: Node,
	externalTest: (filePath: string) => boolean
): { total: number; external: number; examples: string[] } {
	let total = 0;
	let external = 0;
	const examples: string[] = [];
	try {
		const referencedSymbols = (decl as any).findReferences?.() ?? [];
		for (const rs of referencedSymbols) {
			const refEntries = rs.getReferences?.() ?? [];
			for (const ref of refEntries) {
				if (ref.isDefinition?.()) continue;
				const refFile = ref.getSourceFile().getFilePath();
				total++;
				if (externalTest(refFile)) {
					external++;
					if (examples.length < 3) {
						const root = process.cwd();
						const node = ref.getNode?.();
						const line = node?.getStartLineNumber?.() ?? "?";
						examples.push(`${path.relative(root, refFile)}:${line}`);
					}
				}
			}
		}
	} catch {
		// ignore reference scanning errors to keep the script robust
	}
	return { total, external, examples };
}

function getSignatureKey(project: Project, node: Node): string | undefined {
	try {
		const tc = project.getTypeChecker();
		if (Node.isFunctionDeclaration(node) || Node.isVariableDeclaration(node)) {
			const type = tc.getTypeAtLocation(node);
			return type.getText().replace(/\s+/g, " ").trim();
		}
		if (
			Node.isClassDeclaration(node) ||
			Node.isInterfaceDeclaration(node) ||
			Node.isTypeAliasDeclaration(node)
		) {
			const type = tc.getTypeAtLocation(node);
			return type.getText().replace(/\s+/g, " ").trim();
		}
	} catch {
		// ignore type errors for signature comparison
	}
	return undefined;
}

main();
