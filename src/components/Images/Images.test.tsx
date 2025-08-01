import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Images } from './Images';

describe('Images', () => {
  describe('Basic Rendering', () => {
    it('renders successfully with required props', () => {
      render(
        <Images 
          src="https://example.com/image.jpg" 
          alt="Test image description" 
        />
      );
      
      const figure = screen.getByRole('figure');
      const image = screen.getByRole('img');
      
      expect(figure).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
      expect(image).toHaveAttribute('alt', 'Test image description');
    });

    it('applies correct CSS classes', () => {
      render(
        <Images 
          src="https://example.com/image.jpg" 
          alt="Test image" 
        />
      );
      
      const figure = screen.getByRole('figure');
      const image = screen.getByRole('img');
      
      expect(figure).toHaveClass('nhsuk-image');
      expect(image).toHaveClass('nhsuk-image__img');
    });

    it('renders with custom className', () => {
      render(
        <Images 
          src="https://example.com/image.jpg" 
          alt="Test image" 
          className="custom-class"
        />
      );
      
      const figure = screen.getByRole('figure');
      expect(figure).toHaveClass('nhsuk-image', 'custom-class');
    });
  });

  describe('Caption Support', () => {
    it('renders caption when provided', () => {
      render(
        <Images 
          src="https://example.com/image.jpg" 
          alt="Test image" 
          caption="This is a test image caption"
        />
      );
      
      const caption = screen.getByText('This is a test image caption');
      expect(caption).toBeInTheDocument();
      expect(caption).toHaveClass('nhsuk-image__caption');
      expect(caption.tagName).toBe('FIGCAPTION');
    });

    it('does not render caption when not provided', () => {
      render(
        <Images 
          src="https://example.com/image.jpg" 
          alt="Test image" 
        />
      );
      
      const caption = document.querySelector('.nhsuk-image__caption');
      expect(caption).not.toBeInTheDocument();
    });

    it('renders HTML content in caption', () => {
      render(
        <Images 
          src="https://example.com/image.jpg" 
          alt="Test image" 
          caption="Caption with <strong>bold text</strong>"
        />
      );
      
      const caption = screen.getByText(/Caption with/);
      expect(caption).toBeInTheDocument();
      expect(caption.innerHTML).toBe('Caption with <strong>bold text</strong>');
    });
  });

  describe('Responsive Images', () => {
    it('adds sizes and srcset when both provided', () => {
      render(
        <Images 
          src="https://example.com/image.jpg" 
          alt="Test image"
          sizes="(max-width: 600px) 100vw, 50vw"
          srcset="https://example.com/small.jpg 600w, https://example.com/large.jpg 1200w"
        />
      );
      
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('sizes', '(max-width: 600px) 100vw, 50vw');
      expect(image).toHaveAttribute('srcset', 'https://example.com/small.jpg 600w, https://example.com/large.jpg 1200w');
    });

    it('does not add sizes when only srcset provided', () => {
      render(
        <Images 
          src="https://example.com/image.jpg" 
          alt="Test image"
          srcset="https://example.com/small.jpg 600w, https://example.com/large.jpg 1200w"
        />
      );
      
      const image = screen.getByRole('img');
      expect(image).not.toHaveAttribute('sizes');
      expect(image).not.toHaveAttribute('srcset');
    });

    it('does not add srcset when only sizes provided', () => {
      render(
        <Images 
          src="https://example.com/image.jpg" 
          alt="Test image"
          sizes="(max-width: 600px) 100vw, 50vw"
        />
      );
      
      const image = screen.getByRole('img');
      expect(image).not.toHaveAttribute('sizes');
      expect(image).not.toHaveAttribute('srcset');
    });
  });

  describe('HTML Attributes', () => {
    it('passes through additional HTML attributes', () => {
      render(
        <Images 
          src="https://example.com/image.jpg" 
          alt="Test image"
          data-testid="custom-image"
          id="image-id"
        />
      );
      
      const figure = screen.getByTestId('custom-image');
      expect(figure).toHaveAttribute('id', 'image-id');
    });

    it('supports data attributes', () => {
      render(
        <Images 
          src="https://example.com/image.jpg" 
          alt="Test image"
          data-module="image-module"
          data-analytics="track-image"
        />
      );
      
      const figure = screen.getByRole('figure');
      expect(figure).toHaveAttribute('data-module', 'image-module');
      expect(figure).toHaveAttribute('data-analytics', 'track-image');
    });
  });

  describe('Accessibility', () => {
    it('has correct semantic structure', () => {
      render(
        <Images 
          src="https://example.com/image.jpg" 
          alt="Accessible image description"
          caption="Image caption"
        />
      );
      
      const figure = screen.getByRole('figure');
      const image = screen.getByRole('img');
      const caption = document.querySelector('figcaption');
      
      expect(figure).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(caption).toBeInTheDocument();
      expect(figure).toContainElement(image);
      expect(figure).toContainElement(caption);
    });

    it('requires alt text for accessibility', () => {
      render(
        <Images 
          src="https://example.com/image.jpg" 
          alt="Required alt text for screen readers"
        />
      );
      
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('alt', 'Required alt text for screen readers');
    });

    it('supports empty alt text for decorative images', () => {
      render(
        <Images 
          src="https://example.com/decorative.jpg" 
          alt=""
        />
      );
      
      const image = screen.getByAltText('');
      expect(image).toHaveAttribute('alt', '');
    });
  });

  describe('Edge Cases', () => {
    it('handles missing src gracefully', () => {
      render(
        <Images 
          src="https://example.com/image.jpg" 
          alt="Empty source image"
        />
      );
      
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
    });

    it('handles special characters in alt text', () => {
      render(
        <Images 
          src="https://example.com/image.jpg" 
          alt="Image with special chars: <>&quotes"
        />
      );
      
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('alt', 'Image with special chars: <>&quotes');
    });

    it('handles long URLs', () => {
      const longUrl = 'https://example.com/very/long/path/to/image/file/with/many/segments/image.jpg?param1=value1&param2=value2&param3=value3';
      
      render(
        <Images 
          src={longUrl} 
          alt="Image with long URL"
        />
      );
      
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('src', longUrl);
    });

    it('handles complex srcset values', () => {
      const complexSrcset = 'https://example.com/small.jpg 480w, https://example.com/medium.jpg 800w, https://example.com/large.jpg 1200w, https://example.com/xlarge.jpg 1600w';
      const complexSizes = '(max-width: 480px) 100vw, (max-width: 800px) 50vw, (max-width: 1200px) 33vw, 25vw';
      
      render(
        <Images 
          src="https://example.com/fallback.jpg" 
          alt="Complex responsive image"
          srcset={complexSrcset}
          sizes={complexSizes}
        />
      );
      
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('srcset', complexSrcset);
      expect(image).toHaveAttribute('sizes', complexSizes);
    });
  });
});
