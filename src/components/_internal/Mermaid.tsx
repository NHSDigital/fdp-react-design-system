import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import "./Mermaid.scss";

// Base init (lean base theme so our SCSS overrides control appearance)
mermaid.initialize({
	startOnLoad: false,
	securityLevel: "loose",
	theme: "base",
	themeCSS: "",
});

export interface MermaidProps {
	code?: string; // Diagram definition
	children?: string; // Alternative to code prop
	className?: string; // Extra wrapper classes
	config?: any; // Optional mermaid configuration override
	inline?: boolean; // If true, render span wrapper instead of block div
	fallbackPlain?: boolean; // If true, show raw text on error instead of error pre
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
	const definition = (code ?? children ?? "").trim();

	function adjustNodeBoxes(
		container: HTMLElement,
		opts?: {
			basePadX?: number;
			basePadY?: number;
			extraPadX?: number;
			extraPadY?: number;
		}
	) {
		try {
			const svg = container.querySelector("svg");
			if (!svg) return;
			const nodes = svg.querySelectorAll<SVGGElement>("g.node");
			nodes.forEach((node) => {
				const fo = node.querySelector<SVGForeignObjectElement>(
					".label foreignObject"
				);
				let reqW: number | null = null;
				let reqH: number | null = null;
				if (fo) {
					const wAttr = fo.getAttribute("width");
					const hAttr = fo.getAttribute("height");
					if (wAttr && hAttr) {
						reqW = parseFloat(wAttr);
						reqH = parseFloat(hAttr);
					} else if (
						(fo as any).width?.baseVal &&
						(fo as any).height?.baseVal
					) {
						reqW = (fo as any).width.baseVal.value;
						reqH = (fo as any).height.baseVal.value;
					}
				} else {
					const text = node.querySelector<SVGTextElement>("text");
					if (text && (text as any).getBBox) {
						const bb = (text as any).getBBox();
						reqW = bb.width;
						reqH = bb.height;
					}
				}
				if (reqW == null || reqH == null) return;
				const paddingX = (opts?.basePadX ?? 12) + (opts?.extraPadX ?? 0); // base + configurable extra
				const paddingY = (opts?.basePadY ?? 8) + (opts?.extraPadY ?? 0); // base + configurable extra
				const neededW = Math.ceil(reqW + paddingX * 2);
				const neededH = Math.ceil(reqH + paddingY * 2);

				// Prefer shape-specific adjustments before touching generic rects
				const polygon = node.querySelector<SVGPolygonElement>("polygon");
				const polyline = node.querySelector<SVGPolylineElement>("polyline");
				const path = node.querySelector<SVGPathElement>("path");
				const hasComplexShape = !!(polygon || polyline || path);

				if (polygon && (polygon as any).getBBox) {
					const bb = (polygon as any).getBBox();
					if (bb.width > 0 && bb.height > 0) {
						const cx = bb.x + bb.width / 2;
						const cy = bb.y + bb.height / 2;
						const s = Math.max(neededW / bb.width, neededH / bb.height);
						if (s > 1.001) {
							const pts = (polygon.getAttribute("points") || "").trim();
							if (pts) {
								const scaled = pts
									.split(/\s+/)
									.map((p) => {
										const [xs, ys] = p.split(",");
										const x = parseFloat(xs);
										const y = parseFloat(ys);
										if (Number.isNaN(x) || Number.isNaN(y)) return p;
										const nx = cx + (x - cx) * s;
										const ny = cy + (y - cy) * s;
										return `${nx},${ny}`;
									})
									.join(" ");
								polygon.setAttribute("points", scaled);
							}
						}
					}
				}

				if (polyline && (polyline as any).getBBox) {
					const bb = (polyline as any).getBBox();
					if (bb.width > 0 && bb.height > 0) {
						const cx = bb.x + bb.width / 2;
						const cy = bb.y + bb.height / 2;
						const s = Math.max(neededW / bb.width, neededH / bb.height);
						if (s > 1.001) {
							const pts = (polyline.getAttribute("points") || "").trim();
							if (pts) {
								const scaled = pts
									.split(/\s+/)
									.map((p) => {
										const [xs, ys] = p.split(",");
										const x = parseFloat(xs);
										const y = parseFloat(ys);
										if (Number.isNaN(x) || Number.isNaN(y)) return p;
										const nx = cx + (x - cx) * s;
										const ny = cy + (y - cy) * s;
										return `${nx},${ny}`;
									})
									.join(" ");
								polyline.setAttribute("points", scaled);
							}
						}
					}
				}

				if (path && (path as any).getBBox) {
					const bb = (path as any).getBBox();
					if (bb.width > 0 && bb.height > 0) {
						const cx = bb.x + bb.width / 2;
						const cy = bb.y + bb.height / 2;
						const s = Math.max(neededW / bb.width, neededH / bb.height);
						if (s > 1.001) {
							const existing = path.getAttribute("transform") || "";
							const extra = ` translate(${cx},${cy}) scale(${s}) translate(${-cx},${-cy})`;
							path.setAttribute("transform", (existing + extra).trim());
						}
					}
				}

				// If node uses a complex shape, don't touch rect/ellipse/circle at all
				if (hasComplexShape) return;

				const rect = node.querySelector<SVGRectElement>("rect");
				if (rect) {
					const w = parseFloat(rect.getAttribute("width") || "0");
					const h = parseFloat(rect.getAttribute("height") || "0");
					const x = parseFloat(rect.getAttribute("x") || "0");
					const y = parseFloat(rect.getAttribute("y") || "0");
					const newW = Math.max(w, neededW);
					const newH = Math.max(h, neededH);
					const dx = (newW - w) / 2;
					const dy = (newH - h) / 2;
					rect.setAttribute("width", String(newW));
					rect.setAttribute("height", String(newH));
					rect.setAttribute("x", String(x - dx));
					rect.setAttribute("y", String(y - dy));
					return;
				}

				const ellipse = node.querySelector<SVGEllipseElement>("ellipse");
				if (ellipse) {
					const rx = parseFloat(ellipse.getAttribute("rx") || "0");
					const ry = parseFloat(ellipse.getAttribute("ry") || "0");
					const targetRx = Math.max(rx, neededW / 2);
					const targetRy = Math.max(ry, neededH / 2);
					ellipse.setAttribute("rx", String(targetRx));
					ellipse.setAttribute("ry", String(targetRy));
					return;
				}

				const circle = node.querySelector<SVGCircleElement>("circle");
				if (circle) {
					const r = parseFloat(circle.getAttribute("r") || "0");
					const targetR = Math.max(r, Math.max(neededW, neededH) / 2);
					circle.setAttribute("r", String(targetR));
					return;
				}
			});
		} catch {
			/* ignore */
		}
	}

	function adjustEdgeLabels(
		container: HTMLElement,
		opts?: { padX?: number; padY?: number }
	) {
		try {
			const svg = container.querySelector("svg");
			if (!svg) return;
			const labels = svg.querySelectorAll<SVGGElement>("g.edgeLabel");
			labels.forEach((g) => {
				// Prefer foreignObject measurement if present
				const fo = g.querySelector<SVGForeignObjectElement>("foreignObject");
				let reqW: number | null = null;
				let reqH: number | null = null;
				if (fo) {
					const wAttr = fo.getAttribute("width");
					const hAttr = fo.getAttribute("height");
					if (wAttr && hAttr) {
						reqW = parseFloat(wAttr);
						reqH = parseFloat(hAttr);
					} else if (
						(fo as any).width?.baseVal &&
						(fo as any).height?.baseVal
					) {
						reqW = (fo as any).width.baseVal.value;
						reqH = (fo as any).height.baseVal.value;
					}
				}
				if (reqW == null || reqH == null) {
					const text = g.querySelector<SVGTextElement>("text");
					if (text && (text as any).getBBox) {
						const bb = (text as any).getBBox();
						reqW = bb.width;
						reqH = bb.height;
					}
				}
				if (reqW == null || reqH == null) return;

				const padX = opts?.padX ?? 4;
				const padY = opts?.padY ?? 2;
				const w = Math.ceil(reqW + padX * 2);
				const h = Math.ceil(reqH + padY * 2);

				// Center the background rect around label group's origin (Mermaid centers edge labels)
				let bg = g.querySelector<SVGRectElement>(":scope > rect.__edgeLabelBg");
				if (!bg) {
					bg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
					bg.classList.add("__edgeLabelBg");
					// Insert as first child so it sits behind the text
					g.insertBefore(bg, g.firstChild);
				}
				bg.setAttribute("x", String(-w / 2));
				bg.setAttribute("y", String(-h / 2));
				bg.setAttribute("width", String(w));
				bg.setAttribute("height", String(h));
				bg.setAttribute("rx", "3");
				bg.setAttribute("ry", "3");
				bg.setAttribute(
					"fill",
					getComputedStyle(container).getPropertyValue(
						"--mermaid-edge-label-bg"
					) || "white"
				);
				bg.setAttribute("stroke", "transparent");
			});
		} catch {
			/* ignore */
		}
	}

	useEffect(() => {
		let cancelled = false;
		if (!definition) return;
		// Build a config that aligns Mermaid's text measurement with actual CSS
		const wrapperEl = ref.current;
		const computed =
			typeof window !== "undefined" && wrapperEl
				? window.getComputedStyle(wrapperEl)
				: (null as any);
		const computedFontFamily = computed?.fontFamily || undefined;
		const computedFontSize = computed?.fontSize || undefined;
		// Allow consumers to tune padding via CSS custom properties on the wrapper
		const extraPadXVar = computed?.getPropertyValue?.(
			"--mermaid-node-extra-padding-x"
		);
		const extraPadYVar = computed?.getPropertyValue?.(
			"--mermaid-node-extra-padding-y"
		);
		const basePadXVar = computed?.getPropertyValue?.(
			"--mermaid-node-base-padding-x"
		);
		const basePadYVar = computed?.getPropertyValue?.(
			"--mermaid-node-base-padding-y"
		);
		// Also allow slight expansion of the SVG viewBox to prevent edge clipping
		const svgPadXVar = computed?.getPropertyValue?.(
			"--mermaid-svg-extra-padding-x"
		);
		const svgPadYVar = computed?.getPropertyValue?.(
			"--mermaid-svg-extra-padding-y"
		);
		// Edge label padding controls
		const edgePadXVar = computed?.getPropertyValue?.(
			"--mermaid-edge-label-padding-x"
		);
		const edgePadYVar = computed?.getPropertyValue?.(
			"--mermaid-edge-label-padding-y"
		);
		const extraPadX = extraPadXVar ? parseFloat(extraPadXVar) : undefined;
		const extraPadY = extraPadYVar ? parseFloat(extraPadYVar) : undefined;
		const basePadX = basePadXVar ? parseFloat(basePadXVar) : undefined;
		const basePadY = basePadYVar ? parseFloat(basePadYVar) : undefined;
		const svgPadX = svgPadXVar ? parseFloat(svgPadXVar) : undefined;
		const svgPadY = svgPadYVar ? parseFloat(svgPadYVar) : undefined;
		const edgePadX = edgePadXVar ? parseFloat(edgePadXVar) : undefined;
		const edgePadY = edgePadYVar ? parseFloat(edgePadYVar) : undefined;
		const baseFlowchart = { htmlLabels: true, useMaxWidth: true } as any;
		const mergedFlowchart = { ...baseFlowchart, ...(config?.flowchart || {}) };
		const baseThemeVars: any = {
			...(config?.themeVariables || {}),
		};
		if (computedFontFamily && !baseThemeVars.fontFamily) {
			baseThemeVars.fontFamily = computedFontFamily;
		}
		if (computedFontSize && !baseThemeVars.fontSize) {
			baseThemeVars.fontSize = computedFontSize;
		}
		try {
			mermaid.initialize({
				startOnLoad: false,
				securityLevel: "loose",
				theme: "base",
				themeCSS: "",
				...(config || {}),
				flowchart: mergedFlowchart,
				themeVariables: baseThemeVars,
			});
		} catch {
			/* noop */
		}
		(async () => {
			if (!ref.current) return;
			try {
				const id = "mermaid-" + Math.random().toString(36).slice(2);
				const { svg } = await mermaid.render(id, definition);
				if (cancelled) return;
				ref.current.innerHTML = svg;
				// Post-process to ensure shapes fit label text more generously
				adjustNodeBoxes(ref.current, {
					basePadX,
					basePadY,
					extraPadX,
					extraPadY,
				});
				// Post-process edge labels so backgrounds match text size with padding
				adjustEdgeLabels(ref.current, { padX: edgePadX, padY: edgePadY });

				// Slightly expand the SVG viewBox to avoid edge clipping from tight bounds
				try {
					const svgEl = ref.current.querySelector("svg");
					if (svgEl) {
						const vb = svgEl.getAttribute("viewBox");
						// viewBox format: "minX minY width height"
						if (vb) {
							const parts = vb.split(/\s+/).map((s) => parseFloat(s));
							if (
								parts.length === 4 &&
								parts.every((n) => Number.isFinite(n))
							) {
								const [minX, minY, w, h] = parts as [
									number,
									number,
									number,
									number,
								];
								const padX = Math.max(
									Number.isFinite(svgPadX as number) ? (svgPadX as number) : 2,
									Number.isFinite(edgePadX as number) ? (edgePadX as number) : 0
								);
								const padY = Math.max(
									Number.isFinite(svgPadY as number) ? (svgPadY as number) : 2,
									Number.isFinite(edgePadY as number) ? (edgePadY as number) : 0
								);
								svgEl.setAttribute(
									"viewBox",
									`${minX - padX} ${minY - padY} ${w + padX * 2} ${h + padY * 2}`
								);
							}
						}
					}
				} catch {
					/* ignore viewBox adjust errors */
				}
				setError(null);
			} catch (e: any) {
				if (cancelled) return;
				setError(e?.message || "Mermaid render failed");
			}
		})();
		return () => {
			cancelled = true;
		};
	}, [definition, JSON.stringify(config)]);

	if (!definition) return null;

	if (error) {
		if (fallbackPlain) return <pre className={className}>{definition}</pre>;
		return (
			<pre className={`mermaid-error ${className || ""}`.trim()}>
				Mermaid error: {error}\n{definition}
			</pre>
		);
	}

	const Wrapper: any = inline ? "span" : "div";
	// Include core 'mermaid' class so library default theme selectors (e.g. .mermaid .node) still attach;
	// we layer our custom styling via .mermaid-diagram.
	return (
		<Wrapper
			ref={ref}
			className={`mermaid mermaid-diagram ${className || ""}`.trim()}
			data-mermaid
		>
			{/* SVG injected */}
		</Wrapper>
	);
};

export default Mermaid;
