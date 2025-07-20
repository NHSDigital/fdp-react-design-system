import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { 
  checkFrutigerLoaded, 
  preloadFrutigerFonts, 
  getFontStack, 
  createFontFaceCSS, 
  injectFontCSS 
} from '../styles/font-loader';
import { useFrutigerFonts } from '../hooks/useFrutigerFonts';

// Mock document and fonts API
const mockFonts = {
  load: vi.fn(),
  check: vi.fn(),
  ready: Promise.resolve(new Set())
};

interface MockLink {
  rel: string;
  as: string;
  type: string;
  href: string;
  crossOrigin: string;
  id: string;
  textContent: string;
  onload: (() => void) | null;
  onerror: (() => void) | null;
}

const mockDocument = {
  fonts: mockFonts,
  createElement: vi.fn(),
  head: {
    appendChild: vi.fn()
  },
  getElementById: vi.fn()
};

// Mock global document
Object.defineProperty(global, 'document', {
  value: mockDocument,
  writable: true
});

describe('Font Loading Utilities', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockDocument.createElement.mockReturnValue({
      rel: '',
      as: '',
      type: '',
      href: '',
      crossOrigin: '',
      id: '',
      textContent: '',
      onload: null,
      onerror: null
    });
  });

  describe('checkFrutigerLoaded', () => {
    it('returns false when document.fonts is not available', async () => {
      const mockDoc = { ...mockDocument, fonts: undefined };
      Object.defineProperty(global, 'document', { value: mockDoc, writable: true });

      const result = await checkFrutigerLoaded();
      expect(result).toBe(false);
    });

    it('returns true when fonts are loaded successfully', async () => {
      mockFonts.load.mockResolvedValue([]);
      mockFonts.check.mockReturnValue(true);

      const result = await checkFrutigerLoaded();
      
      expect(mockFonts.load).toHaveBeenCalledWith('1em "Frutiger W01"');
      expect(mockFonts.load).toHaveBeenCalledWith('600 1em "Frutiger W01"');
      expect(mockFonts.check).toHaveBeenCalledWith('1em "Frutiger W01"');
      expect(mockFonts.check).toHaveBeenCalledWith('600 1em "Frutiger W01"');
      expect(result).toBe(true);
    });

    it('returns false when font loading fails', async () => {
      mockFonts.load.mockRejectedValue(new Error('Font not found'));
      
      const result = await checkFrutigerLoaded();
      expect(result).toBe(false);
    });

    it('returns false when fonts are not available after loading', async () => {
      mockFonts.load.mockResolvedValue([]);
      mockFonts.check.mockReturnValue(false);

      const result = await checkFrutigerLoaded();
      expect(result).toBe(false);
    });
  });

  describe('preloadFrutigerFonts', () => {
    it('returns SSR error when document is not available', async () => {
      Object.defineProperty(global, 'document', { value: undefined, writable: true });
      
      const result = await preloadFrutigerFonts();
      
      expect(result).toEqual({
        isLoaded: false,
        isLoading: false,
        error: 'SSR environment'
      });
      
      // Restore document
      Object.defineProperty(global, 'document', { value: mockDocument, writable: true });
    });

    it('successfully preloads fonts', async () => {
      const mockLink: MockLink = {
        rel: '',
        as: '',
        type: '',
        href: '',
        crossOrigin: '',
        id: '',
        textContent: '',
        onload: null,
        onerror: null
      };
      
      mockDocument.createElement.mockReturnValue(mockLink);
      mockFonts.load.mockResolvedValue([]);
      mockFonts.check.mockReturnValue(true);

      // Mock successful preloading by calling onload immediately
      mockDocument.createElement.mockImplementation(() => {
        const link: MockLink = { ...mockLink };
        setTimeout(() => {
          if (link.onload) link.onload();
        }, 0);
        return link;
      });

      const result = await preloadFrutigerFonts();
      
      expect(result.isLoaded).toBe(true);
      expect(result.isLoading).toBe(false);
      expect(result.error).toBe(null);
      expect(mockDocument.head.appendChild).toHaveBeenCalledTimes(2);
    });

    it('handles preload failure gracefully', async () => {
      const mockLink: MockLink = {
        rel: '',
        as: '',
        type: '',
        href: '',
        crossOrigin: '',
        id: '',
        textContent: '',
        onload: null,
        onerror: null
      };
      
      // Mock failed preloading by calling onerror
      mockDocument.createElement.mockImplementation(() => {
        const link: MockLink = { ...mockLink };
        setTimeout(() => {
          if (link.onerror) link.onerror();
        }, 0);
        return link;
      });

      const result = await preloadFrutigerFonts();
      
      expect(result.isLoaded).toBe(false);
      expect(result.isLoading).toBe(false);
      expect(result.error).toContain('Failed to preload');
    });
  });

  describe('getFontStack', () => {
    it('returns full font stack when fonts are loaded', () => {
      const result = getFontStack(true);
      expect(result).toBe('"Frutiger W01", Arial, Helvetica, sans-serif');
    });

    it('returns fallback font stack when fonts are not loaded', () => {
      const result = getFontStack(false);
      expect(result).toBe('Arial, Helvetica, sans-serif');
    });

    it('defaults to fallback when no parameter is provided', () => {
      const result = getFontStack();
      expect(result).toBe('Arial, Helvetica, sans-serif');
    });
  });

  describe('createFontFaceCSS', () => {
    it('generates correct CSS for font face declarations', () => {
      const css = createFontFaceCSS();
      
      expect(css).toContain('@font-face');
      expect(css).toContain('font-family: "Frutiger W01"');
      expect(css).toContain('font-weight: 400');
      expect(css).toContain('font-weight: 600');
      expect(css).toContain('font-display: swap');
      expect(css).toContain('FrutigerLTW01-55Roman.woff2');
      expect(css).toContain('FrutigerLTW01-65Bold.woff2');
    });
  });

  describe('injectFontCSS', () => {
    it('injects font CSS into document head', () => {
      const mockStyle = {
        id: '',
        textContent: ''
      };
      
      mockDocument.createElement.mockReturnValue(mockStyle);
      mockDocument.getElementById.mockReturnValue(null);

      injectFontCSS();

      expect(mockDocument.createElement).toHaveBeenCalledWith('style');
      expect(mockStyle.id).toBe('nhs-fonts');
      expect(mockStyle.textContent).toContain('@font-face');
      expect(mockDocument.head.appendChild).toHaveBeenCalledWith(mockStyle);
    });

    it('does not inject CSS if already present', () => {
      mockDocument.getElementById.mockReturnValue({ id: 'nhs-fonts' });

      injectFontCSS();

      expect(mockDocument.createElement).not.toHaveBeenCalled();
      expect(mockDocument.head.appendChild).not.toHaveBeenCalled();
    });

    it('handles SSR environment gracefully', () => {
      Object.defineProperty(global, 'document', { value: undefined, writable: true });
      
      expect(() => injectFontCSS()).not.toThrow();
      
      // Restore document
      Object.defineProperty(global, 'document', { value: mockDocument, writable: true });
    });
  });
});

describe('useFrutigerFonts Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockFonts.load.mockResolvedValue([]);
    mockFonts.check.mockReturnValue(true);
    mockDocument.getElementById.mockReturnValue(null);
  });

  it('starts with loading state', () => {
    const { result } = renderHook(() => useFrutigerFonts());
    
    expect(result.current.isLoading).toBe(true);
    expect(result.current.isLoaded).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.fontFamily).toBe('Arial, Helvetica, sans-serif');
  });

  it('updates state when fonts are loaded successfully', async () => {
    mockFonts.check.mockReturnValue(true);
    
    const { result } = renderHook(() => useFrutigerFonts());

    // Wait for the effect to complete
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isLoaded).toBe(true);
    expect(result.current.error).toBe(null);
    expect(result.current.fontFamily).toBe('"Frutiger W01", Arial, Helvetica, sans-serif');
  });

  it('handles font loading failure', async () => {
    mockFonts.load.mockRejectedValue(new Error('Network error'));
    
    const { result } = renderHook(() => useFrutigerFonts());

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isLoaded).toBe(false);
    expect(result.current.error).toBe('Network error');
    expect(result.current.fontFamily).toBe('Arial, Helvetica, sans-serif');
  });

  it('cleans up properly on unmount', () => {
    const { unmount } = renderHook(() => useFrutigerFonts());
    
    expect(() => unmount()).not.toThrow();
  });
});
