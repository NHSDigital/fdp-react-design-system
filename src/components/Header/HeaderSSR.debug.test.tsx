/**
 * Debug test to see actual HTML structure
 */

import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { JSDOM } from 'jsdom';
import HeaderSSR from './HeaderSSR';

describe('Debug HTML Structure', () => {
  it('shows actual HTML structure', () => {
    console.log('=== Basic HeaderSSR HTML ===');
    const basicHeader = renderToString(<HeaderSSR />);
    console.log(basicHeader);
    
    console.log('\n=== HeaderSSR with logo.src ===');
    const logoHeader = renderToString(<HeaderSSR logo={{ src: '/custom-logo.png' }} />);
    console.log(logoHeader);
    
    // Parse the logo HTML specifically
    const logoDom = new JSDOM(`<!DOCTYPE html><html><body>${logoHeader}</body></html>`);
    const logoContainer = logoDom.window.document.body.firstElementChild;
    const logoImg = logoContainer?.querySelector('img');
    console.log('Found img element:', logoImg ? logoImg.outerHTML : 'null');
    console.log('All img elements:', logoContainer?.querySelectorAll('img').length);
    
    console.log('\n=== HeaderSSR with custom aria-label ===');
    const ariaHeader = renderToString(<HeaderSSR logo={{ ariaLabel: 'Custom NHS Service' }} />);
    console.log(ariaHeader);
    
    // Parse and examine structure
    const dom = new JSDOM(`<!DOCTYPE html><html><body>${basicHeader}</body></html>`);
    const container = dom.window.document.body.firstElementChild;
    
    console.log('\n=== Element structure ===');
    console.log('Container tag:', container?.tagName);
    console.log('Container classes:', container?.className);
    console.log('All elements with nhsuk-header__link class:', container?.querySelectorAll('.nhsuk-header__link').length);
    console.log('All elements with nhsuk-logo class:', container?.querySelectorAll('.nhsuk-logo').length);
    console.log('All anchor elements:', container?.querySelectorAll('a').length);
    
    // Check what elements actually exist
    const allElements = container?.querySelectorAll('*');
    console.log('\n=== All elements in structure ===');
    allElements?.forEach((el, i) => {
      console.log(`${i}: <${el.tagName.toLowerCase()}${el.className ? ` class="${el.className}"` : ''}${el.getAttribute('role') ? ` role="${el.getAttribute('role')}"` : ''}>`);
    });
    
    // This test always passes - it's just for debugging
    expect(true).toBe(true);
  });
});
