/**
 * SSR Compatibility Validation Test
 * 
 * This test ensures that all components exported from the /ssr barrel
 * are truly SSR-safe by checking for client-only React hooks.
 * 
 * Client-only hooks that break SSR:
 * - useRef
 * - useState (technically works but needs careful handling)
 * - useEffect / useLayoutEffect
 * - useReducer
 * - useCallback (usually fine, but can cause issues)
 * - Custom hooks that use the above
 */

import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, join, relative } from 'node:path';

// Get the project root directory
const projectRoot = process.cwd();

// Client-only hooks that should NOT be in SSR components
const CLIENT_ONLY_HOOKS = [
	'useRef',
	'useEffect',
	'useLayoutEffect',
	'useInsertionEffect',
];

// Hooks that might be problematic but we'll warn about
const POTENTIALLY_PROBLEMATIC_HOOKS = [
	'useState',
	'useReducer',
	'useCallback',
];

interface SSRBarrelExport {
	name: string;
	filePath: string;
}

interface HookUsage {
	hook: string;
	line: number;
	context: string;
}

interface ValidationResult {
	componentName: string;
	filePath: string;
	clientOnlyHooks: HookUsage[];
	problematicHooks: HookUsage[];
	isValid: boolean;
}

/**
 * Parse the SSR barrel file to get all exported components
 */
function getSSRBarrelExports(): SSRBarrelExport[] {
	const ssrBarrelPath = resolve(projectRoot, 'src/components/ssr.ts');
	const content = readFileSync(ssrBarrelPath, 'utf-8');
	
	const exports: SSRBarrelExport[] = [];
	const lines = content.split('\n');
	
	for (const line of lines) {
		// Match: export { ComponentName } from './ComponentName'
		const match = line.match(/export\s+\{\s*([^}]+)\s*\}\s+from\s+['"]\.\/([^'"]+)['"]/);
		if (match) {
			const exportNames = match[1].split(',').map((name: string) => name.trim());
			const fromPath = match[2];
			
			for (const exportName of exportNames) {
				const componentPath = resolve(
					projectRoot,
					'src/components',
					`${fromPath}.tsx`
				);
				
				if (existsSync(componentPath)) {
					exports.push({
						name: exportName,
						filePath: componentPath,
					});
				}
			}
		}
	}
	
	return exports;
}

/**
 * Check a component file for client-only hooks
 */
function checkComponentForClientHooks(
	componentName: string,
	filePath: string
): ValidationResult {
	const content = readFileSync(filePath, 'utf-8');
	const lines = content.split('\n');
	
	const clientOnlyHooks: HookUsage[] = [];
	const problematicHooks: HookUsage[] = [];
	
	lines.forEach((line: string, index: number) => {
		// Check for client-only hooks
		for (const hook of CLIENT_ONLY_HOOKS) {
			// Match React.useRef or just useRef
			const patterns = [
				new RegExp(`React\\.${hook}\\s*[(<]`, 'g'),
				new RegExp(`\\b${hook}\\s*[(<]`, 'g'),
			];
			
			for (const pattern of patterns) {
				if (pattern.test(line)) {
					// Skip if it's in a comment
					const beforeHook = line.substring(0, line.indexOf(hook));
					if (!beforeHook.includes('//') && !beforeHook.includes('/*')) {
						clientOnlyHooks.push({
							hook,
							line: index + 1,
							context: line.trim(),
						});
					}
				}
			}
		}
		
		// Check for potentially problematic hooks
		for (const hook of POTENTIALLY_PROBLEMATIC_HOOKS) {
			const patterns = [
				new RegExp(`React\\.${hook}\\s*[(<]`, 'g'),
				new RegExp(`\\b${hook}\\s*[(<]`, 'g'),
			];
			
			for (const pattern of patterns) {
				if (pattern.test(line)) {
					const beforeHook = line.substring(0, line.indexOf(hook));
					if (!beforeHook.includes('//') && !beforeHook.includes('/*')) {
						problematicHooks.push({
							hook,
							line: index + 1,
							context: line.trim(),
						});
					}
				}
			}
		}
	});
	
	return {
		componentName,
		filePath,
		clientOnlyHooks,
		problematicHooks,
		isValid: clientOnlyHooks.length === 0,
	};
}

describe('SSR Barrel - Client Hook Validation', () => {
	it('should export components from the SSR barrel', () => {
		const exports = getSSRBarrelExports();
		expect(exports.length).toBeGreaterThan(0);
		console.log(`\n✅ Found ${exports.length} components in SSR barrel`);
	});
	
	it('should not contain client-only hooks in any SSR barrel component', () => {
		const exports = getSSRBarrelExports();
		const results: ValidationResult[] = [];
		
		for (const exp of exports) {
			const result = checkComponentForClientHooks(exp.name, exp.filePath);
			results.push(result);
		}
		
		// Collect all failures
		const failures = results.filter(r => !r.isValid);
		const warnings = results.filter(r => r.problematicHooks.length > 0);
		
		// Log results
		console.log('\n' + '='.repeat(80));
		console.log('SSR BARREL VALIDATION RESULTS');
		console.log('='.repeat(80));
		
		console.log(`\n📊 Summary:`);
		console.log(`   Total components: ${results.length}`);
		console.log(`   ✅ Valid (no client hooks): ${results.length - failures.length}`);
		console.log(`   ❌ Invalid (has client hooks): ${failures.length}`);
		console.log(`   ⚠️  Warnings (potentially problematic): ${warnings.length}`);
		
		if (failures.length > 0) {
			console.log('\n❌ FAILURES - Components with client-only hooks:');
			console.log('─'.repeat(80));
			
			for (const failure of failures) {
				console.log(`\n  Component: ${failure.componentName}`);
				console.log(`  File: ${relative(process.cwd(), failure.filePath)}`);
				console.log(`  Client-only hooks found:`);
				
				for (const usage of failure.clientOnlyHooks) {
					console.log(`    - ${usage.hook} at line ${usage.line}`);
					console.log(`      ${usage.context}`);
				}
			}
			
			console.log('\n' + '─'.repeat(80));
			console.log('\n💡 Fix: Remove or replace client-only hooks with SSR-safe alternatives');
			console.log('   - useRef: Only use if the ref is actually needed for DOM manipulation');
			console.log('   - useEffect: Move to a client component or use in a non-blocking way');
			console.log('   - useLayoutEffect: Cannot be used in SSR, always breaks');
			console.log('   - Consider splitting into separate client/server components');
		}
		
		if (warnings.length > 0) {
			console.log('\n⚠️  WARNINGS - Components with potentially problematic hooks:');
			console.log('─'.repeat(80));
			
			for (const warning of warnings) {
				console.log(`\n  Component: ${warning.componentName}`);
				console.log(`  File: ${relative(process.cwd(), warning.filePath)}`);
				console.log(`  Hooks to review:`);
				
				for (const usage of warning.problematicHooks) {
					console.log(`    - ${usage.hook} at line ${usage.line}`);
					console.log(`      ${usage.context}`);
				}
			}
			
			console.log('\n' + '─'.repeat(80));
			console.log('\n💡 Note: These hooks can work in SSR but may cause issues:');
			console.log('   - useState: Can cause hydration mismatches if initial state differs');
			console.log('   - useReducer: Similar concerns to useState');
			console.log('   - useCallback: Usually fine, but check dependencies carefully');
		}
		
		if (failures.length === 0 && warnings.length === 0) {
			console.log('\n✅ All SSR barrel components are client-hook free!');
		}
		
		console.log('\n' + '='.repeat(80) + '\n');
		
		// Fail the test if there are any client-only hooks
		expect(failures).toHaveLength(0);
	});
	
	it('should validate ProductCard specifically (regression test)', () => {
		const productCardPath = resolve(
			projectRoot,
			'src/components/ProductCard/ProductCard.tsx'
		);
		
		const result = checkComponentForClientHooks('ProductCard', productCardPath);
		
		expect(result.isValid).toBe(true);
		expect(result.clientOnlyHooks).toHaveLength(0);
		
		if (result.clientOnlyHooks.length > 0) {
			console.log('\n❌ ProductCard has client-only hooks:');
			for (const usage of result.clientOnlyHooks) {
				console.log(`  - ${usage.hook} at line ${usage.line}: ${usage.context}`);
			}
		}
	});
});
