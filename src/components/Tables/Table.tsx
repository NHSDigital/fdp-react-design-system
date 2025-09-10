import React from "react";
import classNames from "classnames";
import type {
	TableProps,
	TableCellData,
	TableHeaderCellType,
	TableCaptionProps,
	TableBodyRowProps,
	TableHeaderCellComponentProps,
	TableDataCellComponentProps,
} from "./Table.types";
import "./Table.scss";
import { Panel } from "../Panel";
import { Heading } from "../Heading";

/**
 * Table component for displaying structured data
 *
 * Features:
 * - Responsive design with mobile-friendly stacked layout
 * - Accessible table structure with proper headers
 * - Support for complex cell types (headers, numeric, spans)
 * - Optional panel wrapper with heading
 * - Customisable caption and styling
 *
 * @param props - Table component props
 * @returns JSX element
 */
// Shared highlighting utilities (module scope so all sub-components can use)
const prismGlobalRef: { current: any | null } = { current: null };
const ensurePrismGlobal = () => {
	if (prismGlobalRef.current) return prismGlobalRef.current;
	try {
		prismGlobalRef.current = require('prismjs');
		try { require('prismjs/components/prism-typescript'); } catch {}
		try { require('prismjs/components/prism-tsx'); } catch {}
		try { require('prismjs/components/prism-json'); } catch {}
	} catch { prismGlobalRef.current = null; }
	return prismGlobalRef.current;
};
export const fallbackHighlight = (code: string) => {
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
export const highlightCode = (code: string, lang?: string, disable?: boolean) => {
	if (disable) return code;
	if (!lang) return code;
	const Prism = ensurePrismGlobal();
	if (Prism && Prism.languages) {
		const resolvedLang = Prism.languages[lang]
			? lang
			: (Prism.languages.typescript && (lang === 'ts' || lang === 'tsx' || lang === 'typescript')
				? 'typescript'
				: (Prism.languages.json && lang === 'json' ? 'json' : undefined));
		if (resolvedLang) {
			try { return Prism.highlight(code, Prism.languages[resolvedLang], resolvedLang); } catch {}
		}
	}
	return fallbackHighlight(code);
};

const TableBase: React.FC<TableProps> = ({
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
	"data-testid": testId,
	columns,
	data,
	visuallyHiddenCaption = false,
}) => {
	// Build caption classes
	const captionClass =
		`nhsuk-table__caption ${captionSize ? `nhsuk-table__caption--${captionSize}` : ""}`.trim();

	// Build table classes
	const tableClassList = classNames(
		"nhsuk-table",
		{
			"nhsuk-table-responsive": responsive,
		},
		tableClasses
	);

	// Build container classes
	const containerClassList = classNames(classes);


	const renderHeaderCell = (cell: TableHeaderCellType, index: number) => {
	const headerClasses = classNames(
		"nhsuk-table__header",
		{
			[`nhsuk-table__header--${cell.format}`]: cell.format,
		},
		cell.classes
	);

	const headerAttributes = {
		scope: "col" as const,
		...(cell.colspan && { colSpan: cell.colspan }),
		...(cell.rowspan && { rowSpan: cell.rowspan }),
		...(responsive && { role: "columnheader" }),
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
			const codeString = isArray
				? (cell.code as string[]).join("\n")
				: (cell.code as string);
			const isMultiline = isArray || codeString.includes("\n");
			const codeProps = {
				className: classNames("nhsuk-table__code", cell.codeClassName, {
					"nhsuk-table__code--block": isMultiline,
					"nhsuk-table__code--inline": !isMultiline,
				}),
				...(cell.codeLanguage ? { "data-language": cell.codeLanguage } : {}),
			};
			const highlighted = highlightCode(codeString, (cell as any).codeLanguage); // header cells don't support disableHighlight currently
			content = isMultiline ? (
				<pre className="nhsuk-table__pre">
					<code
						{...codeProps}
						dangerouslySetInnerHTML={{ __html: highlighted }}
					/>
				</pre>
			) : (
				<code
					{...codeProps}
					dangerouslySetInnerHTML={{ __html: highlighted }}
				/>
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

	const renderCell = (
		cell: TableCellData,
		cellIndex: number,
		isFirstCell: boolean
	) => {
		// Determine if this cell should be a row header either via global firstCellIsHeader or per-cell rowHeader flag
		const isHeaderCell = (firstCellIsHeader && isFirstCell) || (cell as any).rowHeader;

		const cellClasses = classNames(
			isHeaderCell ? "nhsuk-table__header" : "nhsuk-table__cell",
			{
				[`nhsuk-table__${isHeaderCell ? "header" : "cell"}--${cell.format}`]:
					cell.format,
			},
			cell.classes
		);

		const cellAttributes = {
			...(isHeaderCell && { scope: "row" as const }),
			...(cell.colspan && { colSpan: cell.colspan }),
			...(cell.rowspan && { rowSpan: cell.rowspan }),
			...(responsive && {
				role: isHeaderCell ? "rowheader" : "cell",
				...(cell.header && { "data-label": cell.header }),
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
			const codeString = isArray
				? (cell.code as string[]).join("\n")
				: (cell.code as string);
			const isMultiline = isArray || codeString.includes("\n");
			const codeProps = {
				className: classNames("nhsuk-table__code", cell.codeClassName, {
					"nhsuk-table__code--block": isMultiline,
					"nhsuk-table__code--inline": !isMultiline,
				}),
				...(cell.codeLanguage ? { "data-language": cell.codeLanguage } : {}),
			};
			const highlighted = highlightCode(
				codeString,
				cell.codeLanguage,
				cell.disableHighlight
			);
			inner = isMultiline ? (
				<pre className="nhsuk-table__pre">
					<code
						{...codeProps}
						dangerouslySetInnerHTML={{ __html: highlighted }}
					/>
				</pre>
			) : (
				<code
					{...codeProps}
					dangerouslySetInnerHTML={{ __html: highlighted }}
				/>
			);
		} else {
			inner = cell.text;
		}

		const cellContent = (
			<>
				{responsive && cell.header && (
					<span className="nhsuk-table-responsive__heading" aria-hidden="true">
						{cell.header}{" "}
					</span>
				)}
				{inner}
			</>
		);

		const Component = isHeaderCell ? "th" : "td";

		return (
			<Component key={cellIndex} className={cellClasses} {...cellAttributes}>
				{cellContent}
			</Component>
		);
	};

	// Auto-build head/rows from columns + data if provided and explicit head/rows absent
	let derivedHead = head;
	let derivedRows = rows;
	if (!derivedHead && columns && columns.length) {
		derivedHead = columns.map((c) => ({
			text: c.title,
			format: c.format,
			classes: c.headerClasses,
			attributes: c.headerAttributes,
		}));
	}
	if (!derivedRows && columns && data && data.length) {
		derivedRows = data.map((rowObj, rIdx) => {
			return columns.map((c) => {
				const raw = c.accessor ? c.accessor(rowObj, rIdx) : (rowObj as any)[c.key];
				let base: any = { format: c.format, classes: c.cellClasses, attributes: c.cellAttributes };
				if (c.rowHeader) base.rowHeader = true;
				if (c.render) {
					const rendered = c.render(raw, rowObj, rIdx, c);
					if (rendered == null || typeof rendered === 'boolean') return { ...base, text: '' };
					if (typeof rendered === 'string' || typeof rendered === 'number') {
						return { ...base, text: String(rendered) };
					}
					return { ...base, ...(rendered as any) };
				}
				return { ...base, text: raw != null ? String(raw) : '' };
			});
		});
	}

	const renderTable = () => (
		<table
			className={tableClassList}
			{...(responsive && { role: "table" })}
			{...attributes}
			{...(testId && { "data-testid": testId })}
		>
			{caption && (
				<caption className={classNames(captionClass, visuallyHiddenCaption && 'nhsuk-u-visually-hidden')}>
					{caption}
				</caption>
			)}

			{derivedHead && derivedHead.length > 0 && (
				<thead
					className="nhsuk-table__head"
					{...(responsive && { role: "rowgroup" })}
				>
					<tr {...(responsive && { role: "row" })}>
						{derivedHead.map((cell: any, index: number) =>
							renderHeaderCell(cell, index)
						)}
					</tr>
				</thead>
			)}

			<tbody className="nhsuk-table__body">
				{derivedRows &&
					derivedRows.map((row: any, rowIndex: number) => (
						<tr
							key={rowIndex}
							className="nhsuk-table__row"
							{...(responsive && { role: "row" })}
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
				{heading && (
					<Heading level={headingLevel} className="nhsuk-table__heading-tab">
						{heading}
					</Heading>
				)}
				{renderTable()}
			</Panel>
		);
	}

	if (containerClassList) {
		return <div className={containerClassList}>{renderTable()}</div>;
	}

	return renderTable();
};

// --- Sub-components ---

export const TableCaption: React.FC<TableCaptionProps> = ({
	children,
	size,
	className,
}) => {
	const cls = classNames(
		"nhsuk-table__caption",
		size && `nhsuk-table__caption--${size}`,
		className
	);
	return <caption className={cls}>{children}</caption>;
};

export const TableBodyRow: React.FC<TableBodyRowProps> = ({
	responsive,
	className,
	children,
	...rest
}) => {
	const roleAttrs = responsive ? { role: "row" } : {};
	return (
		<tr className={className} {...roleAttrs} {...rest}>
			{children}
		</tr>
	);
};

export const TableHeaderCell: React.FC<TableHeaderCellComponentProps> = ({
	text,
	html,
	node,
	code,
	codeLanguage,
	codeClassName,
	disableHighlight,
	format,
	classes,
	colspan,
	rowspan,
	attributes,
	responsive,
	as = "th",
}) => {
	// Uses shared highlightCode / fallbackHighlight utilities declared above
	const headerClasses = classNames(
		"nhsuk-table__header",
		{ [`nhsuk-table__header--${format}`]: format },
		classes
	);
	const headerAttributes: any = {
		scope: "col",
		...(colspan && { colSpan: colspan }),
		...(rowspan && { rowSpan: rowspan }),
		...(responsive && { role: "columnheader" }),
		...attributes,
	};
	let content: React.ReactNode;
	if (node != null) content = <>{node}</>;
	else if (html) content = <span dangerouslySetInnerHTML={{ __html: html }} />;
	else if (code != null) {
		const isArray = Array.isArray(code);
		const codeString = isArray
			? (code as string[]).join("\n")
			: (code as string);
		const isMultiline = isArray || codeString.includes("\n");
		const codeProps = {
			className: classNames("nhsuk-table__code", codeClassName, {
				"nhsuk-table__code--block": isMultiline,
				"nhsuk-table__code--inline": !isMultiline,
			}),
			...(codeLanguage ? { "data-language": codeLanguage } : {}),
		};
		const highlighted = highlightCode(
			codeString,
			codeLanguage,
			disableHighlight
		);
		content = isMultiline ? (
			<pre className="nhsuk-table__pre">
				<code
					{...codeProps}
					dangerouslySetInnerHTML={{ __html: highlighted }}
				/>
			</pre>
		) : (
			<code {...codeProps} dangerouslySetInnerHTML={{ __html: highlighted }} />
		);
	} else content = text;
	const Component: any = as;
	return (
		<Component className={headerClasses} {...headerAttributes}>
			{content}
		</Component>
	);
};

export const TableCell: React.FC<TableDataCellComponentProps> = ({
	text,
	html,
	node,
	code,
	codeLanguage,
	codeClassName,
	disableHighlight,
	format,
	classes,
	colspan,
	rowspan,
	attributes,
	responsive,
	rowHeader,
}) => {
	const isHeader = !!rowHeader;
	const Tag: any = isHeader ? 'th' : 'td';
	const cls = classNames(
		isHeader ? 'nhsuk-table__header' : 'nhsuk-table__cell',
		format && `nhsuk-table__${isHeader ? 'header' : 'cell'}--${format}`,
		classes
	);
	const cellAttrs: any = {
		...(colspan && { colSpan: colspan }),
		...(rowspan && { rowSpan: rowspan }),
		...(isHeader && { scope: 'row' }),
		...(responsive && { role: isHeader ? 'rowheader' : 'cell' }),
		...attributes,
	};
	let content: React.ReactNode;
	if (node != null) content = <>{node}</>;
	else if (html) content = <span dangerouslySetInnerHTML={{ __html: html }} />;
	else if (code != null) {
		const isArray = Array.isArray(code);
		const codeString = isArray ? (code as string[]).join('\n') : (code as string);
		const isMultiline = isArray || codeString.includes('\n');
		const codeProps = {
			className: classNames('nhsuk-table__code', codeClassName, {
				'nhsuk-table__code--block': isMultiline,
				'nhsuk-table__code--inline': !isMultiline,
			}),
			...(codeLanguage ? { 'data-language': codeLanguage } : {}),
		};
		const highlighted = highlightCode(codeString, codeLanguage, disableHighlight);
		content = isMultiline ? (
			<pre className="nhsuk-table__pre"><code {...codeProps} dangerouslySetInnerHTML={{ __html: highlighted }} /></pre>
		) : (
			<code {...codeProps} dangerouslySetInnerHTML={{ __html: highlighted }} />
		);
	} else content = text;
	return <Tag className={cls} {...cellAttrs}>{content}</Tag>;
};

// Compose export with static properties for ergonomics: Table.Caption / Table.BodyRow / Table.HeaderCell / Table.Cell
export interface TableComposite extends React.FC<TableProps> {
	Caption: typeof TableCaption;
	BodyRow: typeof TableBodyRow;
	HeaderCell: typeof TableHeaderCell;
	Cell: typeof TableCell;
	// Backwards compat (deprecated) aliases
	Row: typeof TableBodyRow;
	TH: typeof TableHeaderCell;
}

const Table = TableBase as TableComposite;
Table.Caption = TableCaption;
Table.BodyRow = TableBodyRow;
Table.HeaderCell = TableHeaderCell;
Table.Cell = TableCell;
// Legacy aliases
Table.Row = TableBodyRow;
Table.TH = TableHeaderCell;

if (process.env.NODE_ENV !== 'production') {
	if ((Table as any).Row) {
		console.warn('Table.Row is deprecated. Use Table.BodyRow instead.');
	}
	if ((Table as any).TH) {
		console.warn('Table.TH is deprecated. Use Table.HeaderCell instead.');
	}
}

export default Table;
