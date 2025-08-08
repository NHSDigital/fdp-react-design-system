import React, { useState, useEffect } from 'react';
import { HeaderSSR } from './HeaderSSR';
import type { HeaderProps } from './Header.types';

/**
 * Test component to demonstrate HeaderSSR hydration states
 */
export const HeaderSSRHydrationTest: React.FC = () => {
  const [cssLoaded, setCssLoaded] = useState(false);
  const [jsLoaded, setJsLoaded] = useState(false);
  const [currentState, setCurrentState] = useState<'ssr' | 'html' | 'css' | 'js'>('ssr');

  useEffect(() => {
    // Simulate CSS loading after 1 second
    const cssTimer = setTimeout(() => {
      setCssLoaded(true);
      setCurrentState('css');
    }, 1000);

    // Simulate JS hydration after 2 seconds
    const jsTimer = setTimeout(() => {
      setJsLoaded(true);
      setCurrentState('js');
    }, 2000);

    return () => {
      clearTimeout(cssTimer);
      clearTimeout(jsTimer);
    };
  }, []);

  const headerProps: HeaderProps = {
    service: {
      text: 'NHS App',
      href: '/app'
    },
    navigation: {
      items: [
        { text: 'Health A-Z', href: '/health-a-to-z' },
        { text: 'Live Well', href: '/live-well' },
        { text: 'Mental health', href: '/mental-health' },
        { text: 'Care and support', href: '/care-and-support' },
        { text: 'Pregnancy', href: '/pregnancy' },
        { text: 'NHS services', href: '/nhs-services' }
      ]
    },
    search: {
      action: '/search',
      placeholder: 'Search the NHS website'
    }
  };

  const stateStyles = {
    ssr: {
      backgroundColor: '#f0f4f5', // Light gray to simulate no CSS
      color: '#212b32'
    },
    html: {
      backgroundColor: '#f0f4f5',
      color: '#212b32'
    },
    css: {
      // Let CSS take over
    },
    js: {
      // Fully hydrated
    }
  };

  return (
    <div>
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f0f4f5',
        borderBottom: '1px solid #ccc',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <h2>HeaderSSR Hydration Test</h2>
        <p><strong>Current State:</strong> {currentState.toUpperCase()}</p>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <button onClick={() => setCurrentState('ssr')}>SSR State</button>
          <button onClick={() => setCurrentState('html')}>HTML Only</button>
          <button onClick={() => setCurrentState('css')}>CSS Loaded</button>
          <button onClick={() => setCurrentState('js')}>JS Hydrated</button>
        </div>
        <p>
          <strong>Expected:</strong> Blue background and white text should appear when CSS loads.
          <br />
          <strong>Reality:</strong> {currentState === 'css' || currentState === 'js' ? 
            '✅ NHS Blue background with white text' : 
            '⏳ Plain styling until CSS loads'
          }
        </p>
      </div>
      
      <div style={currentState === 'ssr' || currentState === 'html' ? stateStyles[currentState] : {}}>
        <HeaderSSR 
          {...headerProps}
          className={currentState === 'ssr' || currentState === 'html' ? 'no-nhs-styles' : ''}
        />
      </div>
      
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f0f4f5',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <h3>State Descriptions:</h3>
        <ul>
          <li><strong>SSR:</strong> Server-side rendered HTML only, no CSS yet</li>
          <li><strong>HTML:</strong> Basic HTML loaded in browser, no CSS</li>
          <li><strong>CSS:</strong> NHS styles loaded - should show blue background!</li>
          <li><strong>JS:</strong> Fully hydrated with any interactive features</li>
        </ul>
        
        <h3>Key Test Points:</h3>
        <ul>
          <li>Logo should use <code>fill="currentcolor"</code> to inherit white color</li>
          <li>Background should be NHS blue once CSS loads</li>
          <li>All navigation items should be visible (no responsive hiding on SSR)</li>
          <li>Component should be fully functional even without JavaScript</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderSSRHydrationTest;
