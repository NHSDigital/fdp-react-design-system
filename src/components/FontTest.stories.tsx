import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FontDebugger } from './FontDebugger';

/**
 * Font debugging story to help diagnose font loading issues
 */
const FontTest: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontFamily: '"Frutiger W01", Arial, sans-serif', fontSize: '2rem', marginBottom: '1rem' }}>
        NHS Font Test - Large Heading
      </h1>
      
      <h2 style={{ fontFamily: '"Frutiger W01", Arial, sans-serif', fontSize: '1.5rem', marginBottom: '1rem' }}>
        Medium Heading (Normal Weight)
      </h2>
      
      <h3 style={{ fontFamily: '"Frutiger W01", Arial, sans-serif', fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
        Smaller Heading (Bold Weight 600)
      </h3>
      
      <p style={{ fontFamily: '"Frutiger W01", Arial, sans-serif', fontSize: '1rem', lineHeight: '1.5', marginBottom: '1rem' }}>
        This is a paragraph using the NHS Frutiger font. The quick brown fox jumps over the lazy dog. 
        This text should appear in Frutiger W01 if the fonts are loading correctly.
      </p>
      
      <p style={{ fontFamily: '"Frutiger W01", Arial, sans-serif', fontSize: '1rem', fontWeight: 600, lineHeight: '1.5', marginBottom: '2rem' }}>
        This is <strong>bold text</strong> using font-weight: 600. It should appear bolder than the regular text above.
      </p>
      
      <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '2rem' }}>
        <h4 style={{ marginTop: 0 }}>Fallback Comparison</h4>
        <div style={{ fontFamily: 'Arial, sans-serif', marginBottom: '0.5rem' }}>
          Arial fallback: The quick brown fox jumps over the lazy dog
        </div>
        <div style={{ fontFamily: '"Frutiger W01", Arial, sans-serif' }}>
          Frutiger (with fallback): The quick brown fox jumps over the lazy dog
        </div>
      </div>
      
      <FontDebugger />
    </div>
  );
};

const meta: Meta<typeof FontTest> = {
  title: 'Development/Font Test',
  component: FontTest,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Font Loading Test

This story helps debug NHS Frutiger font loading issues in Storybook.

## What to look for:

1. **Font Debug Info**: Check if fonts are loaded successfully
2. **Visual Comparison**: Compare Frutiger text with Arial fallback
3. **Console Logs**: Check browser console for font loading messages
4. **Network Tab**: Verify font files are being downloaded

## Common Issues:

- **CORS errors**: Check if font URLs are accessible
- **Font not loaded**: Check if @font-face declarations are present
- **Fallback fonts**: If Frutiger fails, Arial should be used

## Expected Behavior:

- Fonts should load within a few seconds
- Text should appear noticeably different from Arial
- Debug info should show "Loaded" status
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FontTest>;

export const Default: Story = {};
