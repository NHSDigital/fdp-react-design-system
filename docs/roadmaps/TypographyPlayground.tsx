import React, { useEffect, useMemo, useRef, useState } from "react";
import { BrandThemeProvider } from "../../src/themes/BrandThemeProvider";
import "./TypographyPlayground.scss";

type Brand = "nhs" | "fdp";
type Size = "small" | "body" | "lead" | "display" | "hero";
type LH = "small" | "body" | "lead" | "display" | "hero";
type Tracking = "tight" | "normal" | "wide" | "caps";

export const TypographyDemo: React.FC = () => {
	const [text, setText] = useState(
		"The quick brown fox jumps over the lazy dog 0123456789"
	);
	const [brand, setBrand] = useState<Brand>("fdp");
	const [size, setSize] = useState<Size>("body");
	const [lineHeight, setLineHeight] = useState<LH>("body");
	const [tracking, setTracking] = useState<Tracking>("normal");
	const [weight, setWeight] = useState<number>(400);

	// For smoke validation, expose computed styles from the preview element
	const previewRef = useRef<HTMLDivElement | null>(null);
	const [computedFamily, setComputedFamily] = useState<string>("");
	const [computedSize, setComputedSize] = useState<string>("");
	const [computedLineHeight, setComputedLineHeight] = useState<string>("");

	const classes = useMemo(
		() =>
			`typography typography--size-${size} typography--lh-${lineHeight} typography--track-${tracking}`,
		[size, lineHeight, tracking]
	);

	const preview = (
		<div className="typography-demo__frame">
			<div ref={previewRef} className={classes} style={{ fontWeight: weight }}>
				{text}
			</div>
			<div className="typography-meta" aria-live="polite">
				<span>
					Font family: <code>{computedFamily || "(measuring...)"}</code>
				</span>
				<span>
					Size: <code>{computedSize || ""}</code>
				</span>
				<span>
					Line-height: <code>{computedLineHeight || ""}</code>
				</span>
			</div>
		</div>
	);

	// Measure computed styles whenever relevant inputs change
	useEffect(() => {
		if (!previewRef.current) return;
		const el = previewRef.current;
		const measure = () => {
			const cs = window.getComputedStyle(el);
			setComputedFamily(cs.fontFamily);
			setComputedSize(cs.fontSize);
			setComputedLineHeight(cs.lineHeight);
		};
		// measure on next frame to ensure styles applied
		const raf = requestAnimationFrame(measure);
		return () => cancelAnimationFrame(raf);
	}, [brand, size, lineHeight, tracking, weight, text]);

	return (
		<div className="typography-playground">
			<form
				aria-label="Typography controls"
				className="typography-controls"
				onSubmit={(e) => e.preventDefault()}
			>
				<fieldset>
					<legend>Brand</legend>
					<label>
						<input
							type="radio"
							name="brand"
							value="nhs"
							checked={brand === "nhs"}
							onChange={() => setBrand("nhs")}
						/>
						NHS
					</label>
					<label>
						<input
							type="radio"
							name="brand"
							value="fdp"
							checked={brand === "fdp"}
							onChange={() => setBrand("fdp")}
						/>
						FDP
					</label>
				</fieldset>

				<fieldset>
					<legend>Size</legend>
					{(["small", "body", "lead", "display", "hero"] as Size[]).map(
						(v) => (
							<label key={v}>
								<input
									type="radio"
									name="size"
									value={v}
									checked={size === v}
									onChange={() => setSize(v)}
								/>
								{v}
							</label>
						)
					)}
				</fieldset>

				<fieldset>
					<legend>Line height</legend>
					{(["small", "body", "lead", "display", "hero"] as LH[]).map(
						(v) => (
							<label key={v}>
								<input
									type="radio"
									name="lh"
									value={v}
									checked={lineHeight === v}
									onChange={() => setLineHeight(v)}
								/>
								{v}
							</label>
						)
					)}
				</fieldset>

				<fieldset>
					<legend>Tracking</legend>
					{(["tight", "normal", "wide", "caps"] as Tracking[]).map((v) => (
						<label key={v}>
							<input
								type="radio"
								name="track"
								value={v}
								checked={tracking === v}
								onChange={() => setTracking(v)}
							/>
							{v}
						</label>
					))}
				</fieldset>

				<label>
					Weight
					<input
						type="range"
						min={100}
						max={900}
						step={50}
						value={weight}
						onChange={(e) => setWeight(Number(e.target.value))}
					/>
					<output style={{ marginLeft: 8 }}>{weight}</output>
				</label>

				<label>
					Sample text
					<textarea
						rows={3}
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</label>
			</form>

			{/* Always use a local BrandThemeProvider so brand switching is consistent */}
			<BrandThemeProvider brand={brand} scope="local">
				{preview}
			</BrandThemeProvider>
		</div>
	);
};

export default TypographyDemo;
