import * as React from 'react';

export interface VisibilityContextValue {
  hiddenIds: Set<string>;
  isHidden: (id: string) => boolean;
  toggle: (id: string) => void;
  showOnly: (id: string) => void;
  showAll: () => void;
  setHidden: (ids: string[] | Set<string>) => void;
}

const VisibilityContext = React.createContext<VisibilityContextValue | null>(null);
export const useVisibility = () => React.useContext(VisibilityContext);

export interface VisibilityProviderProps {
  initialHiddenIds?: string[];
  children: React.ReactNode;
  /** Optional controlled hidden set (if provided, component becomes controlled) */
  hiddenIds?: string[];
  onChange?: (hidden: string[]) => void;
}

export const VisibilityProvider: React.FC<VisibilityProviderProps> = ({
  initialHiddenIds = [],
  children,
  hiddenIds: controlledHidden,
  onChange
}) => {
  const [uncontrolled, setUncontrolled] = React.useState<Set<string>>(() => new Set(initialHiddenIds));
  const isControlled = controlledHidden !== undefined;
  const hiddenSet = React.useMemo(() => isControlled ? new Set(controlledHidden) : uncontrolled, [isControlled, controlledHidden, uncontrolled]);

  const update = React.useCallback((next: Set<string>) => {
    if (!isControlled) setUncontrolled(new Set(next));
    onChange?.(Array.from(next));
  }, [isControlled, onChange]);

  const api: VisibilityContextValue = React.useMemo(() => ({
    hiddenIds: hiddenSet,
    isHidden: (id: string) => hiddenSet.has(id),
    toggle: (id: string) => {
      const next = new Set(hiddenSet);
      next.has(id) ? next.delete(id) : next.add(id);
      update(next);
    },
  showOnly: (_id: string) => {
      // Future: require full ids set to hide others. For now just clear hidden set making all visible.
      update(new Set());
    },
    showAll: () => update(new Set()),
    setHidden: (ids) => update(new Set(Array.isArray(ids) ? ids : Array.from(ids)))
  }), [hiddenSet, update]);

  return <VisibilityContext.Provider value={api}>{children}</VisibilityContext.Provider>;
};

export default VisibilityContext;
