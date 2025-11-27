import type React from "react";

export type ParallaxMode = "scroll" | "timed";

export type ParallaxShapeKind = "circle" | "hexagon" | "rect" | "svg";

export type ParallaxShapeSpec = {
  kind: ParallaxShapeKind;
  // Size for circle/hexagon (diameter/width). For rect, use width/height.
  size?: number;
  width?: number;
  height?: number;
  // For kind: 'svg' provide a source URL (e.g. imported via Vite ?url)
  // Example: import shapeUrl from './shape.svg?url'
  //          { kind: 'svg', src: shapeUrl, width: 48, height: 48, x: 50, y: 50 }
  src?: string;
  // Position as percentage of scene (0-100)
  x: number;
  y: number;
  rotate?: number;
  depth?: number; // 0 (far) -> 1 (near)
  fillToken?: string; // SCSS token/class hook or CSS variable name
  strokeToken?: string;
  shadow?: "none" | "soft" | "strong";
};

export type ParallaxCallout = {
  content: React.ReactNode;
  position?: "center" | "left" | "right";
  width?: number | string;
  backgroundToken?: string;
  padding?: "s" | "m" | "l";
  elevation?: "none" | "soft" | "medium";
};

export type ParallaxSceneProps = {
  seed?: number;
  mode?: ParallaxMode;
  height?: number | string; // e.g. 480 or "60vh"
  axis?: "y" | "x" | "xy"; // 'xy' enables diagonal motion
  // When axis = 'xy', choose the diagonal direction
  direction?: "ne" | "nw" | "se" | "sw";
  density?: number; // approx shapes count hint
  // Motion tuning
  strength?: number; // scales parallax movement in viewBox units (default ~24)
  scrub?: boolean | number; // GSAP scrub value (default 0.3)
  scrollStart?: string; // GSAP start (default "top bottom")
  scrollEnd?: string; // GSAP end (default "bottom top")
  debugMarkers?: boolean; // show ScrollTrigger markers
  pin?: boolean; // pin the scene during scroll
  pinSpacing?: boolean; // preserve layout space when pinned (default true)
  // If provided, shapes are used as-is (still parallaxed). Otherwise generated.
  shapes?: ParallaxShapeSpec[];
  gradients?: string[]; // list of token class names or CSS variables for fills
  reducedMotion?: "auto" | "off" | "minimal";
  callout: ParallaxCallout;
  // Responsive overrides
  responsive?: {
    tablet?: Partial<ParallaxSceneProps>;
    desktop?: Partial<ParallaxSceneProps>;
  };
  className?: string;
  style?: React.CSSProperties;
};
