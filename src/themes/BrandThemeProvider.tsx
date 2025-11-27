import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Brand = 'nhs' | 'fdp'

interface BrandContextValue {
  brand: Brand
  setBrand: (b: Brand) => void
}

const BrandContext = createContext<BrandContextValue | undefined>(undefined)

export interface BrandThemeProviderProps {
  brand?: Brand
  scope?: 'document' | 'local'
  children: React.ReactNode
}

/**
 * BrandThemeProvider sets `data-brand` either on documentElement (default)
 * or on a local wrapper to enable subtree branding. NHS remains default.
 */
export function BrandThemeProvider({ brand = 'nhs', scope = 'document', children }: BrandThemeProviderProps) {
  const [current, setCurrent] = useState<Brand>(brand)

  // Keep internal state in sync when the `brand` prop changes (controlled updates)
  useEffect(() => {
    setCurrent(brand)
  }, [brand])

  // Apply to document on mount and when brand changes
  useEffect(() => {
    if (scope === 'document') {
      const el = document.documentElement
      el.setAttribute('data-brand', current)
      return () => {
        // Do not remove attribute on unmount if other code might rely on it.
        // Instead, leave last-set value; callers can override.
      }
    }
  }, [current, scope])

  const value = useMemo(() => ({ brand: current, setBrand: setCurrent }), [current])

  if (scope === 'local') {
    return (
      <BrandContext.Provider value={value}>
        <div data-brand={current}>{children}</div>
      </BrandContext.Provider>
    )
  }

  return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
}

export function useBrand() {
  const ctx = useContext(BrandContext)
  if (!ctx) throw new Error('useBrand must be used within BrandThemeProvider')
  return ctx
}
