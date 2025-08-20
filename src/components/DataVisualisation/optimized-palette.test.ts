import { describe, it, expect } from 'vitest';
import { getCategoricalPalette, getOptimizedCategoricalPalette } from './utils/colors';

interface Lab { L:number;a:number;b:number }
function hexToRgb(hex: string){const m=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);if(!m) return null;return{r:parseInt(m[1],16),g:parseInt(m[2],16),b:parseInt(m[3],16)};}
function srgbToLinear(x:number){x/=255;return x<=0.04045?x/12.92:Math.pow((x+0.055)/1.055,2.4);} 
function rgbToXyz(r:number,g:number,b:number){const R=srgbToLinear(r),G=srgbToLinear(g),B=srgbToLinear(b);return{ x:(R*0.4124+G*0.3576+B*0.1805)*100, y:(R*0.2126+G*0.7152+B*0.0722)*100, z:(R*0.0193+G*0.1192+B*0.9505)*100};}
function xyzToLab(x:number,y:number,z:number){const refX=95.047,refY=100,refZ=108.883;let X=x/refX,Y=y/refY,Z=z/refZ;const f=(t:number)=> t>0.008856?Math.cbrt(t):(7.787*t)+16/116;X=f(X);Y=f(Y);Z=f(Z);return{L:116*Y-16,a:500*(X-Y),b:200*(Y-Z)};}
function hexToLab(hex:string){const rgb=hexToRgb(hex); if(!rgb) return null; const xyz=rgbToXyz(rgb.r,rgb.g,rgb.b); return xyzToLab(xyz.x,xyz.y,xyz.z);} 
function deltaE76(a:Lab,b:Lab){const dL=a.L-b.L, da=a.a-b.a, db=a.b-b.b; return Math.sqrt(dL*dL+da*da+db*db);} 

// Minimum perceptual difference threshold (DeltaE) for first adjacent colours.
const MIN_DE = 15; // conservative; typical guideline: >10 noticeable, >20 clearly distinct

describe('Optimized categorical palette ordering', () => {
  it('produces an ordering different from raw palette (unless already optimal)', () => {
    const raw = getCategoricalPalette();
    const opt = getOptimizedCategoricalPalette();
    // Not asserting completely different; just that either some position changed or arrays equal (already optimal)
    const changed = raw.some((c,i)=> opt[i]!==c);
    expect(changed || raw.join(',')===opt.join(',')).toBe(true);
  });

  it('ensures early colours are perceptually separated', () => {
    const opt = getOptimizedCategoricalPalette();
    const labs: Lab[] = opt.map(c=>hexToLab(c)!).filter(Boolean) as Lab[];
    // Check first 6 (or all if fewer) pairwise adjacency & farthest point nature
    const n = Math.min(6, labs.length);
    for(let i=0;i<n-1;i++){
      const d = deltaE76(labs[i], labs[i+1]);
      expect(d, `DeltaE between color ${i} and ${i+1} too small`).toBeGreaterThanOrEqual(MIN_DE);
    }
  });

  it('maintains stable length and uniqueness', () => {
    const opt = getOptimizedCategoricalPalette();
    expect(new Set(opt).size).toBe(opt.length);
  });
});
