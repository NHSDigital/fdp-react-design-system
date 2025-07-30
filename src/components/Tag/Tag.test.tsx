import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders with text content', () => {
    render(<Tag text="Test Tag" />);
    expect(screen.getByText('Test Tag')).toBeInTheDocument();
  });

  it('renders with html content', () => {
    render(<Tag html="<strong>Bold Tag</strong>" />);
    expect(screen.getByText('Bold Tag')).toBeInTheDocument();
  });

  it('applies default color class', () => {
    render(<Tag text="Default" />);
    const tag = screen.getByText('Default');
    expect(tag).toHaveClass('nhsuk-tag');
    expect(tag).not.toHaveClass('nhsuk-tag--default');
  });

  it('applies color variant classes', () => {
    render(<Tag text="Green Tag" color="green" />);
    const tag = screen.getByText('Green Tag');
    expect(tag).toHaveClass('nhsuk-tag', 'nhsuk-tag--green');
  });

  it('applies no border class when noBorder is true', () => {
    render(<Tag text="No Border" noBorder />);
    const tag = screen.getByText('No Border');
    expect(tag).toHaveClass('nhsuk-tag', 'nhsuk-tag--no-border');
  });

  it('applies custom className', () => {
    render(<Tag text="Custom" className="custom-class" />);
    const tag = screen.getByText('Custom');
    expect(tag).toHaveClass('nhsuk-tag', 'custom-class');
  });

  it('renders as a strong element', () => {
    render(<Tag text="Strong Tag" />);
    const tag = screen.getByText('Strong Tag');
    expect(tag.tagName).toBe('STRONG');
  });

  it('prioritizes html over text when both are provided', () => {
    render(<Tag text="Text Content" html="<em>HTML Content</em>" />);
    expect(screen.getByText('HTML Content')).toBeInTheDocument();
    expect(screen.queryByText('Text Content')).not.toBeInTheDocument();
  });

  it('passes through additional props', () => {
    render(<Tag text="Test" data-testid="tag-element" />);
    expect(screen.getByTestId('tag-element')).toBeInTheDocument();
  });

  describe('color variants', () => {
    const colors = [
      'white',
      'grey', 
      'green',
      'aqua-green',
      'blue',
      'purple',
      'pink',
      'red',
      'orange',
      'yellow'
    ] as const;

    colors.forEach(color => {
      it(`renders ${color} color variant correctly`, () => {
        render(<Tag text={`${color} tag`} color={color} />);
        const tag = screen.getByText(`${color} tag`);
        expect(tag).toHaveClass('nhsuk-tag', `nhsuk-tag--${color}`);
      });
    });
  });

  describe('accessibility', () => {
    it('has appropriate role and structure', () => {
      render(<Tag text="Accessible Tag" />);
      const tag = screen.getByText('Accessible Tag');
      expect(tag).toBeInTheDocument();
      expect(tag).toHaveClass('nhsuk-tag');
    });

    it('maintains semantic meaning with different colors', () => {
      render(
        <div>
          <Tag text="Success" color="green" />
          <Tag text="Warning" color="orange" />
          <Tag text="Error" color="red" />
        </div>
      );
      
      expect(screen.getByText('Success')).toBeInTheDocument();
      expect(screen.getByText('Warning')).toBeInTheDocument();
      expect(screen.getByText('Error')).toBeInTheDocument();
    });
  });
});
