import React from "react";

export interface ParityBlockProps {
	children: React.ReactNode; // React live render
	macroCode: string; // Nunjucks macro invocation string
	staticHtml: string; // Generated static HTML snippet (normalised)
	titles?: {
		react?: string;
		macro?: string;
		static?: string;
	};
}

const baseMonospace =
	'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export function ParityBlock({
	children,
	macroCode,
	staticHtml,
	titles,
}: ParityBlockProps) {
	const codeBlockStyle: React.CSSProperties = {
		fontFamily: baseMonospace,
		fontSize: 12,
		background: "#0b0c0c",
		color: "white",
		padding: 12,
		borderRadius: 4,
		overflowX: "auto",
		lineHeight: 1.5,
		whiteSpace: "pre",
	};

	const columnStyle: React.CSSProperties = {
		flex: 1,
		minWidth: 280,
		maxWidth: 520,
	};
	const headingStyle: React.CSSProperties = {
		margin: "0 0 8px 0",
		fontSize: 14,
	};
	const panelStyle: React.CSSProperties = {
		border: "1px solid #d8dde0",
		borderRadius: 6,
		padding: 12,
	};
	const gridStyle: React.CSSProperties = {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
		gap: 16,
		alignItems: "start",
	};

	return (
		<div style={gridStyle}>
			<div style={columnStyle}>
				<h4 style={headingStyle}>{titles?.react ?? "React"}</h4>
				<div style={panelStyle}>{children}</div>
			</div>
			<div style={columnStyle}>
				<h4 style={headingStyle}>{titles?.macro ?? "Nunjucks Macro"}</h4>
				<div style={panelStyle}>
					<pre style={codeBlockStyle}>
						<code>{macroCode}</code>
					</pre>
				</div>
			</div>
			<div style={columnStyle}>
				<h4 style={headingStyle}>
					{titles?.static ?? "Static HTML (generated)"}
				</h4>
				<div style={panelStyle}>
					<div dangerouslySetInnerHTML={{ __html: staticHtml }} />
				</div>
			</div>
		</div>
	);
}

// Utility: convert props object to a readable Nunjucks macro call with single quotes and unquoted keys
export function toNunjucksMacro(
	macroName: string,
	props: Record<string, unknown>
) {
	const jsonLike = JSON.stringify(props, null, 2)
		.replace(/"(\w+)":/g, "$1:")
		.replace(/"/g, "'");
	return `{% from '${macroName}.njk' import ${macroName} %}\n{{ ${macroName}(${jsonLike}) }}`;
}

export default ParityBlock;
