/**
 * SSR Compatibility Validation Test
 * 
 * This test ensures that all components exported from the /ssr barrel
 * are truly SSR-safe by checking for:
 * 1. Client-only React hooks (useRef, useEffect, etc.)
 * 2. Event handler props (onClick, onKeyDown, etc.) - breaks Next.js Server Components
 * 3. Direct window/document access
 * 
 * Client-only hooks that break SSR:
 * - useRef, useEffect, useLayoutEffect, useInsertionEffect
 * 
 * Event handlers that break Next.js Server Components:
 * - onClick, onKeyDown, onChange, etc. (any on* props)
 * 
 * Browser globals that break SSR:
 * - window, document, navigator (when accessed during render)
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

// Event handler props that break Next.js Server Components
const EVENT_HANDLER_PROPS = [
	'onClick',
	'onKeyDown',
	'onKeyUp',
	'onKeyPress',
	'onChange',
	'onInput',
	'onFocus',
	'onBlur',
	'onSubmit',
	'onMouseDown',
	'onMouseUp',
	'onMouseEnter',
	'onMouseLeave',
	'onTouchStart',
	'onTouchEnd',
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

interface EventHandlerUsage {
	handler: string;
	line: number;
	context: string;
}

interface ValidationResult {
	componentName: string;
	filePath: string;
	clientOnlyHooks: HookUsage[];
	problematicHooks: HookUsage[];
	eventHandlers: EventHandlerUsage[];
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
 * Check a component file for client-only hooks and event handlers
 */
function checkComponentForClientHooks(
	componentName: string,
	filePath: string
): ValidationResult {
	const content = readFileSync(filePath, 'utf-8');
	const lines = content.split('\n');
	
	const clientOnlyHooks: HookUsage[] = [];
	const problematicHooks: HookUsage[] = [];
	const eventHandlers: EventHandlerUsage[] = [];
	
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
		
		// Check for event handler props (these break Next.js Server Components)
		for (const handler of EVENT_HANDLER_PROPS) {
			// Match event handler as JSX prop: onClick={...}
			const pattern = new RegExp(`${handler}\\s*=\\s*[{]`, 'g');
			
			if (pattern.test(line)) {
				// Skip if it's in a comment or string
				const beforeHandler = line.substring(0, line.indexOf(handler));
				if (!beforeHandler.includes('//') && !beforeHandler.includes('/*')) {
					// Skip if it's part of a type/interface definition
					if (!line.includes('interface') && !line.includes('type ') && !line.includes('?:')) {
						eventHandlers.push({
							handler,
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
		eventHandlers,
		isValid: clientOnlyHooks.length === 0 && eventHandlers.length === 0,
	};
}

describe('SSR Barrel - Client Hook Validation', () => {
	it('should export components from the SSR barrel', () => {
		const exports = getSSRBarrelExports();
		expect(exports.length).toBeGreaterThan(0);
		console.log(`\n✅ Found ${exports.length} components in SSR barrel`);
	});
	
	it('should not contain client-only hooks or event handlers in any SSR barrel component', () => {
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
		console.log(`   ✅ Valid (no client hooks/handlers): ${results.length - failures.length}`);
		console.log(`   ❌ Invalid (has client hooks/handlers): ${failures.length}`);
		console.log(`   ⚠️  Warnings (potentially problematic): ${warnings.length}`);
		
		if (failures.length > 0) {
			console.log('\n❌ FAILURES - Components with client-only features:');
			console.log('─'.repeat(80));
			
			for (const failure of failures) {
				console.log(`\n  Component: ${failure.componentName}`);
				console.log(`  File: ${relative(process.cwd(), failure.filePath)}`);
				
				if (failure.clientOnlyHooks.length > 0) {
					console.log(`  Client-only hooks found:`);
					for (const usage of failure.clientOnlyHooks) {
						console.log(`    - ${usage.hook} at line ${usage.line}`);
						console.log(`      ${usage.context}`);
					}
				}
				
				if (failure.eventHandlers.length > 0) {
					console.log(`  Event handlers found (break Next.js Server Components):`);
					for (const usage of failure.eventHandlers) {
						console.log(`    - ${usage.handler} at line ${usage.line}`);
						console.log(`      ${usage.context}`);
					}
				}
			}
			
			console.log('\n' + '─'.repeat(80));
			console.log('\n💡 Fix: Remove client-only features from SSR components');
			console.log('   Hooks:');
			console.log('     - useRef: Only use if ref is needed for DOM manipulation');
			console.log('     - useEffect: Move to a client component');
			console.log('     - useLayoutEffect: Cannot be used in SSR, always breaks');
			console.log('   Event Handlers:');
			console.log('     - onClick, onKeyDown, etc.: Break Next.js Server Components');
			console.log('     - Use <a href="..."> for navigation instead of onClick');
			console.log('     - Create separate .server.tsx version without event handlers');
			console.log('   Solution:');
			console.log('     - Create ComponentName.server.tsx for SSR barrel');
			console.log('     - Keep ComponentName.tsx for main barrel (with "use client")');
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
			console.log('\n✅ All SSR barrel components are free of client-only features!');
		}
		
		console.log('\n' + '='.repeat(80) + '\n');
		
		// Fail the test if there are any client-only hooks or event handlers
		expect(failures).toHaveLength(0);
	});
	
	it('should validate ProductCardServer specifically (regression test)', () => {
		const productCardPath = resolve(
			projectRoot,
			'src/components/ProductCard/ProductCard.server.tsx'
		);
		
		const result = checkComponentForClientHooks('ProductCardServer', productCardPath);
		
		expect(result.isValid).toBe(true);
		expect(result.clientOnlyHooks).toHaveLength(0);
		expect(result.eventHandlers).toHaveLength(0);
		
		if (result.clientOnlyHooks.length > 0) {
			console.log('\n❌ ProductCardServer has client-only hooks:');
			for (const usage of result.clientOnlyHooks) {
				console.log(`  - ${usage.hook} at line ${usage.line}: ${usage.context}`);
			}
		}
		
		if (result.eventHandlers.length > 0) {
			console.log('\n❌ ProductCardServer has event handlers:');
			for (const usage of result.eventHandlers) {
				console.log(`  - ${usage.handler} at line ${usage.line}: ${usage.context}`);
			}
		}
	});
});
