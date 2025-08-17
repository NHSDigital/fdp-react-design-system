// Local shim for `next/navigation` to avoid build-time type errors when `next`
// isn't installed. This provides minimal (loose) typings so the library can
// emit declarations without requiring Next.js as a dev dependency. When used
// inside a real Next.js project the real module's types will override these.
declare module 'next/navigation' {
  export function useSearchParams(): URLSearchParams;
  export function usePathname(): string;
  export interface NextRouterLike {
    push: (url: string, opts?: { scroll?: boolean; shallow?: boolean }) => void;
    replace: (url: string, opts?: { scroll?: boolean; shallow?: boolean }) => void;
  }
  export function useRouter(): NextRouterLike;
}
