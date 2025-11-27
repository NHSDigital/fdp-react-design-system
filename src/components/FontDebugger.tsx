import React, { useState, useEffect } from 'react';
import { useFrutigerFonts } from '../hooks/useFrutigerFonts';

/**
 * Component to help debug font loading in Storybook
 */
export const FontDebugger: React.FC = () => {
  const { isLoaded, isLoading, error, fontFamily } = useFrutigerFonts();
  const [detectedFont, setDetectedFont] = useState<string>('Unknown');
  const [fontAvailability, setFontAvailability] = useState<{ w400?: boolean; w600?: boolean }>({});

  useEffect(() => {
    // SSR guard
    if (typeof document === 'undefined') return;

    // Check what font is actually being used by creating a test element
    const testElement = document.createElement('span');
    testElement.style.fontFamily = fontFamily;
    testElement.style.position = 'absolute';
    testElement.style.visibility = 'hidden';
    testElement.textContent = 'Test';
    document.body.appendChild(testElement);

    try {
      const computedStyle = getComputedStyle(testElement);
      setDetectedFont(computedStyle.fontFamily);
    } finally {
      document.body.removeChild(testElement);
    }
  }, [fontFamily]);

  useEffect(() => {
    // SSR guard
    if (typeof document === 'undefined') return;
    try {
      const w400 = (document as any).fonts?.check?.('1em "Frutiger W01"') ?? false;
      const w600 = (document as any).fonts?.check?.('600 1em "Frutiger W01"') ?? false;
      setFontAvailability({ w400, w600 });
    } catch {
      setFontAvailability({});
    }
  }, []);

  return (
    <div style={{ 
      padding: '1rem', 
      margin: '1rem 0', 
      border: '1px solid #ccc', 
      borderRadius: '4px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3 style={{ margin: '0 0 1rem 0' }}>NHS Font Debug Info</h3>
      <div style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
        <div><strong>Font Loading Status:</strong> {isLoading ? 'Loading...' : (isLoaded ? 'Loaded' : 'Failed')}</div>
        <div><strong>Error:</strong> {error || 'None'}</div>
        <div><strong>Expected Font Family:</strong> {fontFamily}</div>
        <div><strong>Detected Font Family:</strong> {detectedFont}</div>
      </div>
      
      <div style={{ marginTop: '1rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0' }}>Font Test Samples:</h4>
        <div style={{ fontFamily, fontSize: '1rem', marginBottom: '0.5rem' }}>
          <strong>Normal weight (400):</strong> The quick brown fox jumps over the lazy dog
        </div>
        <div style={{ fontFamily, fontSize: '1rem', fontWeight: 600 }}>
          <strong>Bold weight (600):</strong> The quick brown fox jumps over the lazy dog
        </div>
      </div>

      {/* Show available fonts */}
      <div style={{ marginTop: '1rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0' }}>Font Availability Check:</h4>
        <div style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
          <div>Frutiger W01 400: {fontAvailability.w400 ? '✅ Available' : '❌ Not available'}</div>
          <div>Frutiger W01 600: {fontAvailability.w600 ? '✅ Available' : '❌ Not available'}</div>
        </div>
      </div>
    </div>
  );
};
