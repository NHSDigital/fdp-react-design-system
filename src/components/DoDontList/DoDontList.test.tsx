import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DoDontList } from './DoDontList';

describe('DoDontList', () => {
  const mockItems = [
    { item: 'wash your hands regularly' },
    { item: 'cover your mouth when coughing' },
    { item: 'get plenty of rest' }
  ];

  it('renders without crashing', () => {
    render(
      <DoDontList
        title="Do"
        type="tick"
        items={mockItems}
      />
    );
  });

  it('renders the title correctly', () => {
    render(
      <DoDontList
        title="Do"
        type="tick"
        items={mockItems}
      />
    );
    
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Do');
  });

  it('renders with custom heading level', () => {
    render(
      <DoDontList
        title="Important Guidelines"
        type="tick"
        items={mockItems}
        headingLevel={2}
      />
    );
    
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Important Guidelines');
  });

  it('renders all list items', () => {
    render(
      <DoDontList
        title="Do"
        type="tick"
        items={mockItems}
      />
    );
    
    expect(screen.getByText('wash your hands regularly')).toBeInTheDocument();
    expect(screen.getByText('cover your mouth when coughing')).toBeInTheDocument();
    expect(screen.getByText('get plenty of rest')).toBeInTheDocument();
  });

  it('renders tick icons for do lists', () => {
    const { container } = render(
      <DoDontList
        title="Do"
        type="tick"
        items={mockItems}
      />
    );
    
    const tickIcons = container.querySelectorAll('.nhsuk-icon__tick');
    expect(tickIcons).toHaveLength(mockItems.length);
    tickIcons.forEach(icon => {
      expect(icon).toHaveClass('nhsuk-icon__tick');
    });
  });

  it('renders cross icons for don\'t lists', () => {
    const { container } = render(
      <DoDontList
        title="Don't"
        type="cross"
        items={mockItems}
      />
    );
    
    const crossIcons = container.querySelectorAll('.nhsuk-icon__cross');
    expect(crossIcons).toHaveLength(mockItems.length);
    crossIcons.forEach(icon => {
      expect(icon).toHaveClass('nhsuk-icon__cross');
    });
  });

  it('adds "do not" prefix to cross list items by default', () => {
    render(
      <DoDontList
        title="Don't"
        type="cross"
        items={[{ item: 'touch your face' }]}
      />
    );
    
    expect(screen.getByText('do not touch your face')).toBeInTheDocument();
  });

  it('does not add "do not" prefix when hidePrefix is true', () => {
    render(
      <DoDontList
        title="Don't"
        type="cross"
        items={[{ item: 'touch your face' }]}
        hidePrefix={true}
      />
    );
    
    expect(screen.getByText('touch your face')).toBeInTheDocument();
    expect(screen.queryByText('do not touch your face')).not.toBeInTheDocument();
  });

  it('does not add prefix to tick list items', () => {
    render(
      <DoDontList
        title="Do"
        type="tick"
        items={[{ item: 'wash your hands' }]}
      />
    );
    
    expect(screen.getByText('wash your hands')).toBeInTheDocument();
    expect(screen.queryByText('do not wash your hands')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <DoDontList
        title="Do"
        type="tick"
        items={mockItems}
        className="custom-class"
      />
    );
    
    expect(container.firstChild).toHaveClass('nhsuk-do-dont-list', 'custom-class');
  });

  it('applies the correct list type classes', () => {
    const { container: tickContainer } = render(
      <DoDontList
        title="Do"
        type="tick"
        items={mockItems}
      />
    );
    
    expect(tickContainer.querySelector('.nhsuk-list')).toHaveClass('nhsuk-list--tick');

    const { container: crossContainer } = render(
      <DoDontList
        title="Don't"
        type="cross"
        items={mockItems}
      />
    );
    
    expect(crossContainer.querySelector('.nhsuk-list')).toHaveClass('nhsuk-list--cross');
  });

  it('has proper accessibility attributes', () => {
    const { container } = render(
      <DoDontList
        title="Do"
        type="tick"
        items={mockItems}
      />
    );
    
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    
    const icons = container.querySelectorAll('svg[aria-hidden="true"]');
    expect(icons).toHaveLength(mockItems.length);
    icons.forEach(icon => {
      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <DoDontList
        ref={ref}
        title="Do"
        type="tick"
        items={mockItems}
      />
    );
    
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveClass('nhsuk-do-dont-list');
  });

  it('passes through additional props', () => {
    render(
      <DoDontList
        title="Do"
        type="tick"
        items={mockItems}
        data-testid="do-dont-list"
        aria-label="Guidance list"
      />
    );
    
    const component = screen.getByTestId('do-dont-list');
    expect(component).toHaveAttribute('aria-label', 'Guidance list');
  });

  it('handles empty items array', () => {
    render(
      <DoDontList
        title="Empty List"
        type="tick"
        items={[]}
      />
    );
    
    expect(screen.getByRole('heading')).toHaveTextContent('Empty List');
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('renders all heading levels correctly', () => {
    const headingLevels = [1, 2, 3, 4, 5, 6] as const;
    
    headingLevels.forEach(level => {
      const { unmount } = render(
        <DoDontList
          title={`Heading Level ${level}`}
          type="tick"
          items={mockItems}
          headingLevel={level}
        />
      );
      
      expect(screen.getByRole('heading', { level })).toHaveTextContent(`Heading Level ${level}`);
      unmount();
    });
  });
});
