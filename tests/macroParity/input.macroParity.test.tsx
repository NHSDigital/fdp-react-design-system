import React from "react";
import { describe, it, expect } from "vitest";
import { Input } from "../../src/components/Input/Input";
import { buildParity } from "./utils/parityHarness";

const { react, macro } = buildParity({
	react: (p) => <Input {...p} />,
	macroName: "input",
});

describe("Input macro parity", () => {
	it("basic text input (uncontrolled)", () => {
		expect(
			macro({
				id: "example",
				name: "example",
				defaultValue: "Hello",
				placeholder: "Enter",
			})
		).toEqual(
			react({
				id: "example",
				name: "example",
				defaultValue: "Hello",
				placeholder: "Enter",
			})
		);
	});

	it("basic text input (controlled value)", () => {
		expect(macro({ id: "example2", name: "example2", value: "Hello" })).toEqual(
			react({ id: "example2", name: "example2", value: "Hello" })
		);
	});

	it("error state", () => {
		expect(
			macro({ id: "email", name: "email", type: "email", hasError: true })
		).toEqual(
			react({ id: "email", name: "email", type: "email", hasError: true })
		);
	});

	it("width variant", () => {
		expect(
			macro({ id: "code", name: "code", width: "10", defaultValue: "ABC123" })
		).toEqual(
			react({ id: "code", name: "code", width: "10", defaultValue: "ABC123" })
		);
	});

	it("range basic", () => {
		expect(
			macro({ id: "range1", name: "range1", type: "range", min: 0, max: 100 })
		).toEqual(
			react({ id: "range1", name: "range1", type: "range", min: 0, max: 100 })
		);
	});

	it("range with labels and current value", () => {
		expect(
			macro({
				id: "range2",
				name: "range2",
				type: "range",
				min: 0,
				max: 10,
				showValueLabels: true,
				showCurrentValue: true,
				valueLabels: { min: "Low", max: "High", current: "Current:" },
			})
		).toEqual(
			react({
				id: "range2",
				name: "range2",
				type: "range",
				min: 0,
				max: 10,
				showValueLabels: true,
				showCurrentValue: true,
				valueLabels: { min: "Low", max: "High", current: "Current:" },
			})
		);
	});
});
