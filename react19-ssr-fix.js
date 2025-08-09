// react19-ssr-fix.js
// React 19 SSR compatibility fix for recentlyCreatedOwnerStacks error
// Place this file in your Next.js project and import it before using HeaderSSR

if (typeof window === 'undefined') {
  // Server-side only fix
  try {
    const React = require('react');
    
    // Check if React internals exist and add missing properties
    const internals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    
    if (internals && typeof internals.recentlyCreatedOwnerStacks === 'undefined') {
      // Initialize the missing property
      internals.recentlyCreatedOwnerStacks = 0;
      
      console.log('✅ React 19 SSR compatibility fix applied');
    }
    
    // Also check for ReactSharedInternals if it exists separately
    if (React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) {
      const sharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      if (typeof sharedInternals.recentlyCreatedOwnerStacks === 'undefined') {
        sharedInternals.recentlyCreatedOwnerStacks = 0;
      }
    }
    
  } catch (error) {
    console.warn('React 19 SSR fix: Could not apply compatibility patch', error.message);
  }
}

// Also provide an ES module export for modern import syntax
export const applyReact19SSRFix = () => {
  if (typeof window === 'undefined') {
    // Already applied above, but can be called explicitly
    console.log('React 19 SSR fix already applied during import');
  }
};

export default {};
