import * as React from 'react';

// useLayoutEffect runs after paint on the client, but warns on the server.
// This hook swaps to useEffect during SSR to avoid React warnings.
export const useIsomorphicLayoutEffect: typeof React.useLayoutEffect =
  typeof window !== 'undefined' && !!window.document
    ? React.useLayoutEffect
    : React.useEffect;

export default useIsomorphicLayoutEffect;
