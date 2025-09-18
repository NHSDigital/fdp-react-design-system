/*
  Analyze the public surface of SPC (component + engine exports)

  What it does:
  - Resolves the SPC barrel at src/components/DataVisualisation/charts/SPC/index.ts
  - For each module re-exported there, lists exported declarations
  - Counts references across the whole repo and distinguishes internal (within SPC folder) vs external usage
  - Flags exports not used outside SPC (potential dead public surface)
  - Detects name collisions across modules and marks likely duplicates when signatures match

  Run:
    npx tsx scripts/analyze-spc-exports.ts
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

// Folder representing the SPC feature boundary
const SPC_BASE_DIR = path.resolve(
	"src/components/DataVisualisation/charts/SPC"
);
// The primary public barrel for SPC
const SPC_BARREL_RELATIVE =
	"src/components/DataVisualisation/charts/SPC/index.ts";

type ExportInfo = {
	name: string;
	moduleFile: string;
	kind: string;
	externalRefCount: number; // usage outside SPC folder
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

	const barrelPath = path.resolve(SPC_BARREL_RELATIVE);
	const barrel = project.getSourceFile(barrelPath);
	if (!barrel) {
		console.error("SPC barrel not found:", path.relative(root, barrelPath));
		process.exit(1);
	}

	const exportDecls = barrel.getExportDeclarations();
	const moduleSpecs = exportDecls
		.map((d: ExportDeclaration) => d.getModuleSpecifierValue())
		.filter(Boolean) as string[];

	// Deduplicate resolved module files (barrel may re-export from the same module multiple times)
	const moduleFileSet = new Set<string>();
	for (const spec of moduleSpecs) {
		const file = resolveModuleFile(project, barrel, spec);
		if (file) moduleFileSet.add(file);
	}
	const moduleFiles = Array.from(moduleFileSet.values());

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
				(filePath) => isExternalToSPC(filePath, SPC_BASE_DIR)
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

	console.log(`\nSPC public surface size: ${results.length}`);
	console.log(`Used outside SPC folder: ${used.length}`);
	console.log(
		`Unused outside SPC (potential dead public surface): ${unused.length}`
	);
	console.log(`Name collisions across modules: ${collisions.length}`);

	if (unused.length) {
		console.log("\nUnused outside SPC:");
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

function isExternalToSPC(filePath: string, spcBaseDir: string) {
	const norm = filePath.replace(/\\/g, "/");
	const base = spcBaseDir.replace(/\\/g, "/");
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
