import React from 'react';
import { renderToString } from 'react-dom/server';
import { JSDOM } from 'jsdom';
import { HeaderSSR } from './src/components/Header/HeaderSSR.js';

const defaultProps = {
  service: {
    text: 'NHS App',
    href: '/app'
  }
};

try {
  const htmlString = renderToString(React.createElement(HeaderSSR, defaultProps));
  console.log('Raw HTML:', htmlString);
  
  const cleanHtml = htmlString.replace(/^<link[^>]*\/?>/, '');
  const dom = new JSDOM(`<!DOCTYPE html><html><body>${cleanHtml}</body></html>`);
  const container = dom.window.document.body.firstElementChild;
  
  console.log('Container tag:', container?.tagName);
  console.log('Container role:', container?.getAttribute('role'));
  console.log('Container class:', container?.className);
  console.log('Has banner role:', !!container?.querySelector('[role="banner"]'));
  
} catch (error) {
  console.error('Error:', error.message);
}
