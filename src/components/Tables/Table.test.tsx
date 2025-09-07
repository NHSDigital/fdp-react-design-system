import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Table from './Table';

describe('Table', () => {
  it('renders basic table with rows', () => {
    const rows = [
      [{ text: 'Cell 1' }, { text: 'Cell 2' }],
      [{ text: 'Cell 3' }, { text: 'Cell 4' }]
    ];
    
    render(<Table rows={rows} />);
    
    expect(screen.getByText('Cell 1')).toBeInTheDocument();
    expect(screen.getByText('Cell 2')).toBeInTheDocument();
    expect(screen.getByText('Cell 3')).toBeInTheDocument();
    expect(screen.getByText('Cell 4')).toBeInTheDocument();
  });

  it('renders table with header row', () => {
    const head = [
      { text: 'Header 1' },
      { text: 'Header 2' }
    ];
    const rows = [
      [{ text: 'Cell 1' }, { text: 'Cell 2' }]
    ];
    
    render(<Table head={head} rows={rows} />);
    
    expect(screen.getByText('Header 1')).toBeInTheDocument();
    expect(screen.getByText('Header 2')).toBeInTheDocument();
    expect(screen.getByText('Cell 1')).toBeInTheDocument();
  });

  it('renders table with caption', () => {
    const rows = [[{ text: 'Cell 1' }]];
    const caption = 'Test table caption';
    
    render(<Table rows={rows} caption={caption} />);
    
    expect(screen.getByText(caption)).toBeInTheDocument();
  });

  it('applies responsive classes when responsive prop is true', () => {
    const rows = [[{ text: 'Cell 1' }]];
    
    render(<Table rows={rows} responsive data-testid="table" />);
    
    const table = screen.getByTestId('table');
    expect(table).toHaveClass('nhsuk-table-responsive');
  });

  it('renders first cell as header when firstCellIsHeader is true', () => {
    const rows = [
      [{ text: 'Header Cell' }, { text: 'Data Cell' }]
    ];
    
    render(<Table rows={rows} firstCellIsHeader />);
    
    const headerCell = screen.getByText('Header Cell').closest('th');
    const dataCell = screen.getByText('Data Cell').closest('td');
    
    expect(headerCell).toBeInTheDocument();
    expect(dataCell).toBeInTheDocument();
  });

  it('renders table wrapped in panel when panel prop is true', () => {
    const rows = [[{ text: 'Cell 1' }]];
    
    render(<Table rows={rows} panel />);
    
    const panelElement = document.querySelector('.nhsuk-panel');
    expect(panelElement).toBeInTheDocument();
  });

  it('renders heading when panel and heading are provided', () => {
    const rows = [[{ text: 'Cell 1' }]];
    const heading = 'Table Heading';
    
    render(<Table rows={rows} panel heading={heading} />);
    
    expect(screen.getByText(heading)).toBeInTheDocument();
  });

  it('renders cells with HTML content when html property is provided', () => {
    const rows = [
      [{ html: '<strong>Bold Cell</strong>' }]
    ];
    
    render(<Table rows={rows} />);
    
    const strongElement = screen.getByText('Bold Cell');
    expect(strongElement.tagName).toBe('STRONG');
  });

  it('applies custom classes to table', () => {
    const rows = [[{ text: 'Cell 1' }]];
    
    render(<Table rows={rows} tableClasses="custom-table-class" data-testid="table" />);
    
    const table = screen.getByTestId('table');
    expect(table).toHaveClass('custom-table-class');
  });

  it('handles empty rows gracefully', () => {
    const rows: any[] = [];
    
    render(<Table rows={rows} />);
    
    const table = document.querySelector('table');
    expect(table).toBeInTheDocument();
  });

  it('renders node-based cell content with code block', () => {
    const rows = [
      [{ node: <div><code>npm run build</code><pre><code>{`line1\nline2`}</code></pre></div> }]
    ];
    render(<Table rows={rows} />);
    expect(screen.getByText('npm run build')).toBeInTheDocument();
    // Multiline pre content: assert combined textContent contains both lines
    const pre = screen.getByText(/line1[\n\s]+line2/);
    expect(pre).toBeInTheDocument();
  });

  it('renders inline code when code prop single line provided', () => {
    const rows = [[{ code: 'npm install nhs-fdp-design-system', codeLanguage: 'bash' }]];
    render(<Table rows={rows} />);
    const codeEl = screen.getByText('npm install nhs-fdp-design-system');
    expect(codeEl.tagName).toBe('CODE');
    expect(codeEl).toHaveClass('nhsuk-table__code--inline');
  });

  it('renders block code when multi-line code string provided', () => {
    const rows = [[{ code: 'line1\nline2', codeLanguage: 'text' }]];
    render(<Table rows={rows} />);
  // Entire multiline code is a single text node; assert via regex
  const codeEl = screen.getByText(/line1[\n\s]+line2/);
  expect(codeEl.tagName).toBe('CODE');
  expect(codeEl.closest('pre')).toBeInTheDocument();
  });

  it('renders block code when code array provided', () => {
    const rows = [[{ code: ['alpha', 'beta', 'gamma'] }]];
    render(<Table rows={rows} />);
  const codeEl = screen.getByText(/alpha[\n\s]+beta[\n\s]+gamma/);
  expect(codeEl.tagName).toBe('CODE');
  expect(codeEl.closest('pre')).toBeInTheDocument();
  });
});