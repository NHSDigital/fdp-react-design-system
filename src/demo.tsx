import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button, NHSThemeProvider } from './index';
import { checkFrutigerLoaded } from './styles/font-loader';

const App: React.FC = () => {
  const [fontLoadingState, setFontLoadingState] = React.useState({
    isLoaded: false,
    isChecking: true,
    error: null as string | null
  });

  const checkFonts = async () => {
    try {
      setFontLoadingState(prev => ({ ...prev, isChecking: true }));
      const isLoaded = await checkFrutigerLoaded();
      setFontLoadingState({
        isLoaded,
        isChecking: false,
        error: isLoaded ? null : 'Fonts not detected as loaded'
      });
    } catch (error) {
      setFontLoadingState({
        isLoaded: false,
        isChecking: false,
        error: error instanceof Error ? error.message : 'Font check failed'
      });
    }
  };

  React.useEffect(() => {
    checkFonts();
  }, []);

  return (
    <NHSThemeProvider>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ color: '#005eb8' }}>NHS FDP Design System Demo</h1>
        
        {/* Font Status */}
        <div style={{ 
          backgroundColor: fontLoadingState.isLoaded ? '#d4edda' : '#f8d7da',
          color: fontLoadingState.isLoaded ? '#155724' : '#721c24',
          padding: '15px',
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          <h3>Font Loading Status</h3>
          <p><strong>Checking:</strong> {fontLoadingState.isChecking ? 'Yes' : 'No'}</p>
          <p><strong>Frutiger Loaded:</strong> {fontLoadingState.isLoaded ? '✅ Yes' : '❌ No'}</p>
          {fontLoadingState.error && <p><strong>Error:</strong> {fontLoadingState.error}</p>}
          <button onClick={checkFonts} style={{ marginTop: '10px', padding: '5px 10px' }}>
            Check Again
          </button>
        </div>

        {/* Button Examples */}
        <div style={{ marginBottom: '40px' }}>
          <h2>NHS Button Components</h2>
          <p>These buttons use the enhanced theme provider with automatic font loading:</p>
          
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="warning">Warning Button</Button>
            <Button variant="reverse">Reverse Button</Button>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <Button variant="primary" size="small">Small Button</Button>
            <Button variant="primary" size="default">Default Button</Button>
            <Button variant="primary" size="large">Large Button</Button>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Button variant="primary" disabled>Disabled Button</Button>
            <Button variant="primary" fullWidth>Full Width Button</Button>
          </div>
        </div>

        {/* Font Comparison */}
        <div style={{ marginBottom: '40px' }}>
          <h2>Font Comparison</h2>
          
          <div style={{ marginBottom: '15px' }}>
            <h3>With NHS Font Stack (via Button styles)</h3>
            <div style={{ 
              fontFamily: '"Frutiger W01", Arial, Helvetica, sans-serif',
              fontSize: '19px',
              padding: '15px',
              border: '1px solid #ccc',
              backgroundColor: '#f9f9f9'
            }}>
              NHS Health Service - This text uses the same font stack as our Button components
            </div>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <h3>With Arial (for comparison)</h3>
            <div style={{ 
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: '19px',
              padding: '15px',
              border: '1px solid #ccc',
              backgroundColor: '#f9f9f9'
            }}>
              NHS Health Service - This text uses Arial for comparison
            </div>
          </div>
        </div>

        {/* Debug Info */}
        <div style={{ 
          backgroundColor: '#f0f4f5',
          padding: '15px',
          borderRadius: '4px',
          fontFamily: 'monospace',
          fontSize: '12px'
        }}>
          <h3>Debug Information</h3>
          <p><strong>Enhanced Theme Provider:</strong> Active</p>
          <p><strong>Font CSS:</strong> Imported and injected</p>
          <p><strong>Button Font Stack:</strong> Applied via inline styles</p>
          <p><strong>Fallback Strategy:</strong> Frutiger W01 → Arial → sans-serif</p>
          
          <h4>Instructions:</h4>
          <ul style={{ marginLeft: '20px' }}>
            <li>Compare the button text rendering with the font comparison sections</li>
            <li>If Frutiger is loading, buttons should look different from the Arial comparison</li>
            <li>Check browser Network tab to see if font files are being loaded</li>
            <li>Open browser DevTools and inspect button elements to see computed styles</li>
          </ul>
        </div>
      </div>
    </NHSThemeProvider>
  );
};

// Mount the app
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
