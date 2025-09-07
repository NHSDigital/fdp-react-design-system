import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import './Mermaid.scss';

// Base init (lean base theme so our SCSS overrides control appearance)
mermaid.initialize({ startOnLoad: false, securityLevel: 'loose', theme: 'base', themeCSS: '' });

export interface MermaidProps {
  code?: string;              // Diagram definition
  children?: string;          // Alternative to code prop
  className?: string;         // Extra wrapper classes
  config?: any;               // Optional mermaid configuration override
  inline?: boolean;           // If true, render span wrapper instead of block div
  fallbackPlain?: boolean;    // If true, show raw text on error instead of error pre
}

export const Mermaid: React.FC<MermaidProps> = ({
  code,
  children,
  className,
  config,
  inline = false,
  fallbackPlain = false,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const definition = (code ?? children ?? '').trim();

  useEffect(() => {
    let cancelled = false;
    if (!definition) return;
    if (config) {
      try { mermaid.initialize({ startOnLoad: false, ...config }); } catch { /* noop */ }
    }
    (async () => {
      if (!ref.current) return;
      try {
        const id = 'mermaid-' + Math.random().toString(36).slice(2);
        const { svg } = await mermaid.render(id, definition);
        if (cancelled) return;
        ref.current.innerHTML = svg;
        setError(null);
      } catch (e: any) {
        if (cancelled) return;
        setError(e?.message || 'Mermaid render failed');
      }
    })();
    return () => { cancelled = true; };
  }, [definition, JSON.stringify(config)]);

  if (!definition) return null;

  if (error) {
    if (fallbackPlain) return <pre className={className}>{definition}</pre>;
    return <pre className={`mermaid-error ${className || ''}`.trim()}>Mermaid error: {error}\n{definition}</pre>;
  }

  const Wrapper: any = inline ? 'span' : 'div';
  // Include core 'mermaid' class so library default theme selectors (e.g. .mermaid .node) still attach;
  // we layer our custom styling via .mermaid-diagram.
  return <Wrapper ref={ref} className={`mermaid mermaid-diagram ${className || ''}`.trim()} data-mermaid>{/* SVG injected */}</Wrapper>;
};

export default Mermaid;
