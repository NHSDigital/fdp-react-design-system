/**
 * @deprecated These components are deprecated and will be removed in a future version.
 * 
 * Create your own BehavioursInit component in your Next.js app instead.
 * See NHSBehavioursInit.tsx for migration guidance and example code.
 */
import { NHSBehavioursInit } from './NHSBehavioursInit';

/**
 * @deprecated Use your own BehavioursInit component instead.
 * See NHSBehavioursInit.tsx for migration guidance.
 */
export function InitBehaviours() {
	// Forward to the client component. This avoids brittle inline script imports.
	return <NHSBehavioursInit />;
}

/**
 * @deprecated Use your own BehavioursInit component instead.
 * See NHSBehavioursInit.tsx for migration guidance.
 */
export function InitBehavioursInline() {
	return <NHSBehavioursInit />;
}
