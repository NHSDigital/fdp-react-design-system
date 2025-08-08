import { render } from '../../test-utils/ServerRenderer';
import { Heading } from './Heading';
import { describe, it, expect } from 'vitest';

describe('Heading', () => {
  describe('level prop precedence', () => {
    it('should use explicit level when provided', () => {
      const { container } = render(
        <Heading level={3} size="xl" text="Test Heading" />
      );
      
      const heading = container.querySelector('h3');
      expect(heading).toBeTruthy();
      expect(heading?.className).toContain('nhsuk-heading--xl');
    });

    it('should derive level from size when level is not provided', () => {
      const { container } = render(
        <Heading size="xl" text="Test Heading" />
      );
      
      const heading = container.querySelector('h1');
      expect(heading).toBeTruthy();
      expect(heading?.className).toContain('nhsuk-heading--xl');
    });
  });

  describe('size to level mapping', () => {
    it('should map xxl size to h1', () => {
      const { container } = render(
        <Heading size="xxl" text="XXL Heading" />
      );
      
      expect(container.querySelector('h1')).toBeTruthy();
    });

    it('should map xl size to h1', () => {
      const { container } = render(
        <Heading size="xl" text="XL Heading" />
      );
      
      expect(container.querySelector('h1')).toBeTruthy();
    });

    it('should map l size to h2', () => {
      const { container } = render(
        <Heading size="l" text="L Heading" />
      );
      
      expect(container.querySelector('h2')).toBeTruthy();
    });

    it('should map m size to h3', () => {
      const { container } = render(
        <Heading size="m" text="M Heading" />
      );
      
      expect(container.querySelector('h3')).toBeTruthy();
    });

    it('should map s size to h4', () => {
      const { container } = render(
        <Heading size="s" text="S Heading" />
      );
      
      expect(container.querySelector('h4')).toBeTruthy();
    });

    it('should map xs size to h5', () => {
      const { container } = render(
        <Heading size="xs" text="XS Heading" />
      );
      
      expect(container.querySelector('h5')).toBeTruthy();
    });
  });

  describe('fallback behavior', () => {
    it('should default to h2 when neither level nor size is provided', () => {
      const { container } = render(
        <Heading text="Default Heading" />
      );
      
      expect(container.querySelector('h2')).toBeTruthy();
    });

    it('should default to h2 when size is undefined', () => {
      const { container } = render(
        <Heading size={undefined} text="Undefined Size Heading" />
      );
      
      expect(container.querySelector('h2')).toBeTruthy();
    });
  });

  describe('existing functionality', () => {
    it('should still work with marginBottom prop', () => {
      const { container } = render(
        <Heading size="l" text="Test" marginBottom="32px" />
      );
      
      const heading = container.querySelector('h2');
      expect(heading).toHaveStyle('margin-bottom: 32px');
    });

    it('should apply CSS classes correctly', () => {
      const { container } = render(
        <Heading size="m" text="Test" className="custom-class" />
      );
      
      const heading = container.querySelector('h3');
      expect(heading?.className).toContain('nhsuk-heading');
      expect(heading?.className).toContain('nhsuk-heading--m');
      expect(heading?.className).toContain('custom-class');
    });
  });
});
