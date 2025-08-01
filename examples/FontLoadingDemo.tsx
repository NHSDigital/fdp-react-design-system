import React, { useState, useEffect } from 'react';
import { Button } from './src/components/Button/Button';
import { NHSThemeProvider } from './packages/nhs-fdp/dist/react/theme/NHSThemeProvider';
import { checkFrutigerLoaded } from './src/styles/font-loader';

/**
 * Font Loading Demo Component
 * 
 * This component demonstrates font loading and helps debug font issues
 */
const FontLoadingDemo: React.FC = () => {
  const [fontLoadingState, setFontLoadingState] = useState({
    isChecking: true,
    isLoaded: false,
    error: null as string | null,
    attemptCount: 0
  });

  const checkFonts = async () => {
    try {
      setFontLoadingState(prev => ({ 
        ...prev, 
        isChecking: true, 
        attemptCount: prev.attemptCount + 1 
      }));

      const isLoaded = await checkFrutigerLoaded();
      
      setFontLoadingState(prev => ({
        ...prev,
        isChecking: false,
        isLoaded,
        error: isLoaded ? null : 'Fonts not detected as loaded'
      }));
      
    } catch (error) {
      setFontLoadingState(prev => ({
        ...prev,
        isChecking: false,
        isLoaded: false,
        error: error instanceof Error ? error.message : 'Font check failed'
      }));
    }
  };

  useEffect(() => {
    checkFonts();
    
    // Check again after a delay to see if fonts load later
    const timer = setTimeout(() => {
      checkFonts();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const testText = "NHS Health Service - Testing Frutiger Font Loading";

  return (
    <NHSThemeProvider>
      <div style={{ 
        padding: '20px', 
        fontFamily: 'Arial, sans-serif',
        lineHeight: 1.6,
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{ color: '#005eb8' }}>Font Loading Test</h1>
        
        <div style={{ 
          backgroundColor: '#f0f4f5', 
          padding: '20px', 
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          <h2>Font Loading Status</h2>
          <p><strong>Checking:</strong> {fontLoadingState.isChecking ? 'Yes' : 'No'}</p>
          <p><strong>Fonts Loaded:</strong> {fontLoadingState.isLoaded ? '✅ Yes' : '❌ No'}</p>
          <p><strong>Attempts:</strong> {fontLoadingState.attemptCount}</p>
          {fontLoadingState.error && (
            <p style={{ color: '#d5281b' }}>
              <strong>Error:</strong> {fontLoadingState.error}
            </p>
          )}
          
          <button 
            onClick={checkFonts}
            style={{
              backgroundColor: '#005eb8',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Check Fonts Again
          </button>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2>Font Rendering Test</h2>
          
          <div style={{ marginBottom: '15px' }}>
            <h3>With Frutiger Font Stack</h3>
            <p style={{ 
              fontFamily: '"Frutiger W01", Arial, Helvetica, sans-serif',
              fontSize: '19px',
              fontWeight: '400',
              border: '1px solid #ccc',
              padding: '10px',
              backgroundColor: 'white'
            }}>
              {testText}
            </p>
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <h3>With Arial Fallback</h3>
            <p style={{ 
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: '19px',
              fontWeight: '400',
              border: '1px solid #ccc',
              padding: '10px',
              backgroundColor: 'white'
            }}>
              {testText}
            </p>
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <h3>Computed Font Family (Inspector Check)</h3>
            <p 
              id="computed-font-test"
              style={{ 
                fontFamily: '"Frutiger W01", Arial, Helvetica, sans-serif',
                fontSize: '19px',
                fontWeight: '400',
                border: '1px solid #ccc',
                padding: '10px',
                backgroundColor: 'white'
              }}
            >
              {testText}
            </p>
            <small style={{ color: '#666' }}>
              Open browser dev tools and inspect this element to see the computed font-family
            </small>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2>Button Component Test</h2>
          <p>These buttons use the NHS Button component with theme provider:</p>
          
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="warning">Warning Button</Button>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2>Font Loading Info</h2>
          <ul>
            <li>The NHS uses Frutiger W01 as its official font</li>
            <li>Font files are loaded from: <code>https://assets.nhs.uk/fonts/</code></li>
            <li>If Frutiger fails to load, Arial is used as fallback</li>
            <li>Font loading is detected using the browser's Font Loading API</li>
            <li>Some browsers may block external font loading for security</li>
          </ul>
        </div>

        <div style={{ 
          backgroundColor: '#ffe3e3', 
          padding: '15px', 
          borderRadius: '4px',
          border: '1px solid #d5281b'
        }}>
          <h3 style={{ color: '#d5281b', margin: '0 0 10px 0' }}>Troubleshooting</h3>
          <p>If fonts aren't loading:</p>
          <ul>
            <li>Check if external resources are blocked</li>
            <li>Verify internet connection</li>
            <li>Check browser console for CORS errors</li>
            <li>Try accessing NHS font URLs directly in browser</li>
          </ul>
        </div>
      </div>
    </NHSThemeProvider>
  );
};

export default FontLoadingDemo;
