import { render, screen } from '@testing-library/react';
import { Container, Row, Column, Grid } from './Grid';

describe('Grid Components', () => {
  describe('Container', () => {
    it('renders with default width container class', () => {
      render(
        <Container>
          <div>Test content</div>
        </Container>
      );
      
      const container = screen.getByText('Test content').parentElement;
      expect(container).toHaveClass('nhsuk-width-container');
    });

    it('renders with fluid container class when fluid prop is true', () => {
      render(
        <Container fluid>
          <div>Test content</div>
        </Container>
      );
      
      const container = screen.getByText('Test content').parentElement;
      expect(container).toHaveClass('nhsuk-width-container-fluid');
      expect(container).not.toHaveClass('nhsuk-width-container');
    });

    it('applies custom className', () => {
      render(
        <Container className="custom-class">
          <div>Test content</div>
        </Container>
      );
      
      const container = screen.getByText('Test content').parentElement;
      expect(container).toHaveClass('nhsuk-width-container');
      expect(container).toHaveClass('custom-class');
    });

    it('applies custom maxWidth style', () => {
      render(
        <Container maxWidth="1200px">
          <div>Test content</div>
        </Container>
      );
      
      const container = screen.getByText('Test content').parentElement;
      expect(container).toHaveStyle({ maxWidth: '1200px' });
    });
  });

  describe('Row', () => {
    it('renders with grid row class', () => {
      render(
        <Row>
          <div>Test content</div>
        </Row>
      );
      
      const row = screen.getByText('Test content').parentElement;
      expect(row).toHaveClass('nhsuk-grid-row');
    });

    it('applies custom className', () => {
      render(
        <Row className="custom-row">
          <div>Test content</div>
        </Row>
      );
      
      const row = screen.getByText('Test content').parentElement;
      expect(row).toHaveClass('nhsuk-grid-row');
      expect(row).toHaveClass('custom-row');
    });
  });

  describe('Column', () => {
    it('renders with default full width column class', () => {
      render(
        <Column>
          <div>Test content</div>
        </Column>
      );
      
      const column = screen.getByText('Test content').parentElement;
      expect(column).toHaveClass('nhsuk-grid-column-full');
    });

    it('renders with specified width class', () => {
      render(
        <Column width="one-half">
          <div>Test content</div>
        </Column>
      );
      
      const column = screen.getByText('Test content').parentElement;
      expect(column).toHaveClass('nhsuk-grid-column-one-half');
    });

    it('renders with utility class when forceWidth is true', () => {
      render(
        <Column width="one-third" forceWidth>
          <div>Test content</div>
        </Column>
      );
      
      const column = screen.getByText('Test content').parentElement;
      expect(column).toHaveClass('nhsuk-u-one-third');
      expect(column).not.toHaveClass('nhsuk-grid-column-one-third');
    });

    it('applies custom className', () => {
      render(
        <Column className="custom-column">
          <div>Test content</div>
        </Column>
      );
      
      const column = screen.getByText('Test content').parentElement;
      expect(column).toHaveClass('nhsuk-grid-column-full');
      expect(column).toHaveClass('custom-column');
    });
  });

  describe('Grid', () => {
    it('renders container and row wrapper', () => {
      render(
        <Grid>
          <Column width="one-half">
            <div>Column 1</div>
          </Column>
          <Column width="one-half">
            <div>Column 2</div>
          </Column>
        </Grid>
      );
      
      const column1 = screen.getByText('Column 1').parentElement;
      const column2 = screen.getByText('Column 2').parentElement;
      
      // Both columns should be in the same row
      expect(column1?.parentElement).toBe(column2?.parentElement);
      
      // Row should be in a container
      const row = column1?.parentElement;
      expect(row).toHaveClass('nhsuk-grid-row');
      expect(row?.parentElement).toHaveClass('nhsuk-width-container');
    });

    it('applies custom className to container', () => {
      render(
        <Grid className="custom-grid">
          <div>Test content</div>
        </Grid>
      );
      
      const container = screen.getByText('Test content').parentElement?.parentElement;
      expect(container).toHaveClass('nhsuk-width-container');
      expect(container).toHaveClass('custom-grid');
    });
  });

  describe('Grid layout examples', () => {
    it('renders two-column layout correctly', () => {
      render(
        <Container>
          <Row>
            <Column width="two-thirds">
              <div>Main content</div>
            </Column>
            <Column width="one-third">
              <div>Sidebar</div>
            </Column>
          </Row>
        </Container>
      );
      
      const mainContent = screen.getByText('Main content').parentElement;
      const sidebar = screen.getByText('Sidebar').parentElement;
      
      expect(mainContent).toHaveClass('nhsuk-grid-column-two-thirds');
      expect(sidebar).toHaveClass('nhsuk-grid-column-one-third');
    });

    it('renders three-column layout correctly', () => {
      render(
        <Container>
          <Row>
            <Column width="one-third">
              <div>Column 1</div>
            </Column>
            <Column width="one-third">
              <div>Column 2</div>
            </Column>
            <Column width="one-third">
              <div>Column 3</div>
            </Column>
          </Row>
        </Container>
      );
      
      const col1 = screen.getByText('Column 1').parentElement;
      const col2 = screen.getByText('Column 2').parentElement;
      const col3 = screen.getByText('Column 3').parentElement;
      
      expect(col1).toHaveClass('nhsuk-grid-column-one-third');
      expect(col2).toHaveClass('nhsuk-grid-column-one-third');
      expect(col3).toHaveClass('nhsuk-grid-column-one-third');
    });
  });
});
