import { describe, it, expect } from 'vitest';
import { render } from '../../test-utils/ServerRenderer';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders with text content', () => {
    const { getByText } = render(<Tag text="Test Tag" />);
    expect(getByText('Test Tag')).toBeTruthy();
  });

  it('renders with html content', () => {
    const { getByText } = render(<Tag html="<strong>Bold Tag</strong>" />);
    expect(getByText('Bold Tag')).toBeTruthy();
  });

  it('applies default color class', () => {
    const { getByText } = render(<Tag text="Default" />);
    const tag = getByText('Default');
    expect(tag?.className).toContain('nhsuk-tag');
    expect(tag?.className).not.toContain('nhsuk-tag--default');
  });

  it('applies color variant classes', () => {
    const { getByText } = render(<Tag text="Green Tag" color="green" />);
    const tag = getByText('Green Tag');
    expect(tag?.className).toContain('nhsuk-tag');
    expect(tag?.className).toContain('nhsuk-tag--green');
  });

  it('applies no border class when noBorder is true', () => {
    const { getByText } = render(<Tag text="No Border" noBorder />);
    const tag = getByText('No Border');
    expect(tag?.className).toContain('nhsuk-tag--no-border');
  });

  it('applies custom className', () => {
    const { getByText } = render(<Tag text="Custom" className="custom-tag" />);
    const tag = getByText('Custom');
    expect(tag?.className).toContain('custom-tag');
  });

  it('renders with strong tag wrapper', () => {
    const { getByText } = render(<Tag text="Strong Tag" />);
    const tag = getByText('Strong Tag');
    expect(tag?.tagName).toBe('STRONG');
  });

  it('prioritizes html over text when both are provided', () => {
    const { getByText, queryByText } = render(<Tag text="Text Content" html="<em>HTML Content</em>" />);
    expect(getByText('HTML Content')).toBeTruthy();
    expect(queryByText('Text Content')).not.toBeTruthy();
  });

  it('passes through additional props', () => {
    const { getByTestId } = render(<Tag text="Test" data-testid="tag-element" />);
    expect(getByTestId('tag-element')).toBeTruthy();
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
        const { getByText } = render(<Tag text={`${color} tag`} color={color} />);
        const tag = getByText(`${color} tag`);
        expect(tag?.className).toContain('nhsuk-tag');
        expect(tag?.className).toContain(`nhsuk-tag--${color}`);
      });
    });
  });

  describe('accessibility', () => {
    it('has appropriate role and structure', () => {
      const { getByText } = render(<Tag text="Accessible Tag" />);
      const tag = getByText('Accessible Tag');
      expect(tag).toBeTruthy();
      expect(tag?.className).toContain('nhsuk-tag');
    });

    it('maintains semantic meaning with different colors', () => {
      const { getByText } = render(
        <div>
          <Tag text="Success" color="green" />
          <Tag text="Warning" color="orange" />
          <Tag text="Error" color="red" />
        </div>
      );
      
      expect(getByText('Success')).toBeTruthy();
      expect(getByText('Warning')).toBeTruthy();
      expect(getByText('Error')).toBeTruthy();
    });
  });
});
