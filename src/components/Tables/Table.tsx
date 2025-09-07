import React from 'react';
import classNames from 'classnames';
import { TableProps, TableCellData, TableHeaderCell } from './Table.types';
import './Table.scss';
import { Panel } from '../Panel';
import { Heading } from '../Heading';

/**
 * Table component for displaying structured data
 * 
 * Features:
 * - Responsive design with mobile-friendly stacked layout
 * - Accessible table structure with proper headers
 * - Support for complex cell types (headers, numeric, spans)
 * - Optional panel wrapper with heading
 * - Customizable caption and styling
 * 
 * @param props - Table component props
 * @returns JSX element
 */
const Table: React.FC<TableProps> = ({
	rows,
	head,
	caption,
	captionSize,
	firstCellIsHeader = false,
	responsive = false,
	heading,
	headingLevel = 3,
	panel = false,
	panelClasses,
	tableClasses,
	classes,
	attributes,
	'data-testid': testId,
}) => {
  // Build caption classes
	const captionClass = `nhsuk-table__caption ${captionSize ? `nhsuk-table__caption--${captionSize}` : ''}`.trim();

  // Build table classes
  const tableClassList = classNames(
	'nhsuk-table',
	{
	  'nhsuk-table-responsive': responsive,
	},
	tableClasses
  );

  // Build container classes
  const containerClassList = classNames(classes);

	// Prism + highlighting utilities (shared by header & body cells)
	const prismRef = React.useRef<any | null>(null);
	const ensurePrism = () => {
		if (prismRef.current) return prismRef.current;
		try {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			prismRef.current = require('prismjs');
			try { require('prismjs/components/prism-typescript'); } catch { /* ignore */ }
			try { require('prismjs/components/prism-tsx'); } catch { /* ignore */ }
			try { require('prismjs/components/prism-json'); } catch { /* ignore */ }
		} catch {
			prismRef.current = null;
		}
		return prismRef.current;
	};

	const fallbackHighlight = (code: string) => {
		const patterns: { regex: RegExp; cls: string }[] = [
			{ regex: /\b(import|from|export|const|let|var|return|if|else|for|while|switch|case|break|new|throw|try|catch|finally|class|extends|implements|interface|type|as|async|await|function)\b/g, cls: 'kw' },
			{ regex: /(['"`])(?:\\.|(?!\1).)*\1/g, cls: 'str' },
			{ regex: /\/\*[^]*?\*\/|\/\/.*$/gm, cls: 'com' },
			{ regex: /\b([0-9]+(?:\.[0-9]+)?)\b/g, cls: 'num' },
		];
		let html = code;
		patterns.forEach(p => { html = html.replace(p.regex, m => `<span class=\"nhsuk-code-${p.cls}\">${m}</span>`); });
		return html;
	};

	const highlightCode = (code: string, lang?: string, disable?: boolean) => {
		if (disable) return code;
		if (!lang) return code;
		const Prism = ensurePrism();
		if (Prism && Prism.languages) {
			const resolvedLang = Prism.languages[lang]
				? lang
				: (Prism.languages.typescript && (lang === 'ts' || lang === 'tsx' || lang === 'typescript')
					? 'typescript'
					: (Prism.languages.json && lang === 'json' ? 'json' : undefined));
			if (resolvedLang) {
				try {
					return Prism.highlight(code, Prism.languages[resolvedLang], resolvedLang);
				} catch { /* swallow & fallback */ }
			}
		}
		return fallbackHighlight(code);
	};

	const renderHeaderCell = (cell: TableHeaderCell, index: number) => {
	const headerClasses = classNames('nhsuk-table__header', {
	  [`nhsuk-table__header--${cell.format}`]: cell.format,
	}, cell.classes);

	const headerAttributes = {
		scope: 'col' as const,
		...(cell.colspan && { colSpan: cell.colspan }),
		...(cell.rowspan && { rowSpan: cell.rowspan }),
		...(responsive && { role: 'columnheader' }),
		...cell.attributes,
	};

	// Determine content precedence: node > html > code > text
	let content: React.ReactNode;
	if (cell.node != null) {
		content = <>{cell.node}</>;
	} else if (cell.html) {
		content = <span dangerouslySetInnerHTML={{ __html: cell.html }} />;
	} else if (cell.code != null) {
		const isArray = Array.isArray(cell.code);
		const codeString = isArray ? (cell.code as string[]).join('\n') : (cell.code as string);
		const isMultiline = isArray || codeString.includes('\n');
		const codeProps = {
			className: classNames('nhsuk-table__code', cell.codeClassName, {
				'nhsuk-table__code--block': isMultiline,
				'nhsuk-table__code--inline': !isMultiline,
			}),
			...(cell.codeLanguage ? { 'data-language': cell.codeLanguage } : {}),
		};
		const highlighted = highlightCode(codeString, (cell as any).codeLanguage); // header cells don't support disableHighlight currently
		content = isMultiline ? (
			<pre className="nhsuk-table__pre"><code {...codeProps} dangerouslySetInnerHTML={{ __html: highlighted }} /></pre>
		) : (
			<code {...codeProps} dangerouslySetInnerHTML={{ __html: highlighted }} />
		);
	} else {
		content = cell.text;
	}
	return (
	  <th key={index} className={headerClasses} {...headerAttributes}>
		{content}
	  </th>
	);
  };

	const renderCell = (cell: TableCellData, cellIndex: number, isFirstCell: boolean) => {
	const isHeaderCell = firstCellIsHeader && isFirstCell;
	
	const cellClasses = classNames(
	  isHeaderCell ? 'nhsuk-table__header' : 'nhsuk-table__cell',
	  {
		[`nhsuk-table__${isHeaderCell ? 'header' : 'cell'}--${cell.format}`]: cell.format,
	  },
	  cell.classes
	);

	const cellAttributes = {
		...(isHeaderCell && { scope: 'row' as const }),
		...(cell.colspan && { colSpan: cell.colspan }),
		...(cell.rowspan && { rowSpan: cell.rowspan }),
		...(responsive && { 
		role: isHeaderCell ? 'rowheader' : 'cell',
		...(cell.header && { 'data-label': cell.header })
		}),
		...cell.attributes,
	};

	let inner: React.ReactNode;
	// (highlighting utilities now hoisted above)

	if (cell.node != null) {
		inner = <>{cell.node}</>;
	} else if (cell.html) {
		inner = <span dangerouslySetInnerHTML={{ __html: cell.html }} />;
	} else if (cell.code != null) {
		const isArray = Array.isArray(cell.code);
		const codeString = isArray ? (cell.code as string[]).join('\n') : (cell.code as string);
		const isMultiline = isArray || codeString.includes('\n');
		const codeProps = {
			className: classNames('nhsuk-table__code', cell.codeClassName, {
				'nhsuk-table__code--block': isMultiline,
				'nhsuk-table__code--inline': !isMultiline,
			}),
			...(cell.codeLanguage ? { 'data-language': cell.codeLanguage } : {}),
		};
		const highlighted = highlightCode(codeString, cell.codeLanguage, cell.disableHighlight);
		inner = isMultiline ? (
			<pre className="nhsuk-table__pre"><code {...codeProps} dangerouslySetInnerHTML={{ __html: highlighted }} /></pre>
		) : (
			<code {...codeProps} dangerouslySetInnerHTML={{ __html: highlighted }} />
		);
	} else {
		inner = cell.text;
	}

	const cellContent = (
	  <>
		{responsive && cell.header && (
		  <span className="nhsuk-table-responsive__heading" aria-hidden="true">
			{cell.header}{' '}
		  </span>
		)}
		{inner}
	  </>
	);

	const Component = isHeaderCell ? 'th' : 'td';

	return (
	  <Component key={cellIndex} className={cellClasses} {...cellAttributes}>
		{cellContent}
	  </Component>
	);
  };

  const renderTable = () => (
	<table 
	  className={tableClassList}
	  {...(responsive && { role: 'table' })}
	  {...attributes}
	  {...(testId && { 'data-testid': testId })}
	>
	  { caption && (
		<caption className={captionClass}>
		  {caption}
		</caption>
	  )}
	  
	  { head && head.length > 0 && (
		<thead 
		  className="nhsuk-table__head"
		  {...(responsive && { role: 'rowgroup' })}
		>
		  <tr {...(responsive && { role: 'row' })}>
			{head.map((cell: any, index: number) => renderHeaderCell(cell, index))}
		  </tr>
		</thead>
	  )}
	  
	  <tbody className="nhsuk-table__body">
		{rows && rows.map((row: any, rowIndex: number) => (
		  <tr 
			key={rowIndex} 
			className="nhsuk-table__row"
			{...(responsive && { role: 'row' })}
		  >
			{row.map((cell: any, cellIndex: number) => 
				renderCell(cell, cellIndex, cellIndex === 0)
			)}
		  </tr>
		))}
	  </tbody>
	</table>
  );

if (panel) {
	return (
		<Panel className={panelClasses}>
			{ heading && (
				<Heading level={headingLevel} className="nhsuk-table__heading-tab">
					{heading}
				</Heading>
			)}
			{ renderTable() }
		</Panel>
	);
}

  if (containerClassList) {
	return (
	  <div className={containerClassList}>
		{ renderTable() }
	  </div>
	);
  }

  return renderTable();
};

export default Table;
