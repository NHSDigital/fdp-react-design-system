export type SwatchItem = {
	label: string;
	fill: string; // CSS color or gradient string
	code?: string; // Optional code/hex to display
};

export function SwatchGrid({
	items,
	columns = 4,
}: {
	items: SwatchItem[];
	columns?: number;
}) {
	const size = 64;
	const gap = 16;
	const gridTemplate = `repeat(${columns}, minmax(${size + 24}px, 1fr))`;
	return (
		<div style={{ display: "grid", gridTemplateColumns: gridTemplate, gap }}>
			{items.map((it) => (
				<figure key={`${it.label}-${it.fill}`} style={{ margin: 0 }}>
					<div
						role="img"
						aria-label={it.label}
						style={{
							width: size * 2,
							height: size,
							borderRadius: 6,
							background: it.fill, // Supports linear-gradient() and solid colors
						}}
					/>
					<figcaption style={{ fontSize: 12, marginTop: 4 }}>
						<div style={{ fontWeight: 600 }}>{it.label}</div>
						{it.code && <code style={{ color: "#666" }}>{it.code}</code>}
					</figcaption>
				</figure>
			))}
		</div>
	);
}
