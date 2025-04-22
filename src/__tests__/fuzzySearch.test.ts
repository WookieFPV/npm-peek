import { describe, expect, it } from "bun:test";
import { fuzzySearch } from "../FuzzySearch";

describe("Filter packages (fuzzySearch)", () => {
	const packages = ["react", "react-dom", "vue", "angular", "regex-foo"];

	it('handles input "" (empty string', () => {
		const result = fuzzySearch(packages, "");
		const expected = [...packages];

		for (const pkg of expected) expect(result).toContain(pkg);
	});

	it("handles input undefined", () => {
		const result = fuzzySearch(packages, undefined);
		const expected = [...packages];

		for (const pkg of expected) expect(result).toContain(pkg);
	});

	it('handles input "r"', () => {
		const result = fuzzySearch(packages, "r");
		const expected = ["react", "react-dom", "regex-foo"];

		for (const pkg of expected) expect(result).toContain(pkg);
	});

	it('handles input "re"', () => {
		const result = fuzzySearch(packages, "re");
		const expected = ["react", "react-dom", "regex-foo"];

		for (const pkg of expected) expect(result).toContain(pkg);
	});

	it('handles input "rea"', () => {
		const result = fuzzySearch(packages, "rea");
		const expected = ["react", "react-dom", "regex-foo"];

		for (const pkg of expected) expect(result).toContain(pkg);
	});

	it('handles input "reac"', () => {
		const result = fuzzySearch(packages, "reac");
		const expected = ["react", "react-dom"];

		for (const pkg of expected) expect(result).toContain(pkg);
	});

	it('handles input "react"', () => {
		const result = fuzzySearch(packages, "react");
		const expected = ["react", "react-dom"];

		for (const pkg of expected) expect(result).toContain(pkg);
	});

	it('handles input "react-"', () => {
		const result = fuzzySearch(packages, "react-");
		const expected = ["react", "react-dom"];

		for (const pkg of expected) expect(result).toContain(pkg);
	});

	it('handles input "react-d"', () => {
		const result = fuzzySearch(packages, "react-d");
		const expected = ["react", "react-dom"];

		for (const pkg of expected) expect(result).toContain(pkg);
	});

	it('handles input "react-do"', () => {
		const result = fuzzySearch(packages, "react-do");
		const expected = ["react", "react-dom"];

		for (const pkg of expected) expect(result).toContain(pkg);
	});

	it('handles input "react-dom"', () => {
		const result = fuzzySearch(packages, "react-dom");
		const expected = ["react", "react-dom"];

		for (const pkg of expected) expect(result).toContain(pkg);
	});

	it('handles input "REAC"', () => {
		const result = fuzzySearch(packages, "REAC");
		const expected = ["react", "react-dom"];

		for (const pkg of expected) expect(result).toContain(pkg);
	});

	it('handles input "reeact"', () => {
		const result = fuzzySearch(packages, "reeact");
		const expected = ["react", "react-dom"];

		for (const pkg of expected) expect(result).toContain(pkg);
	});

	it('handles input "riact"', () => {
		const result = fuzzySearch(packages, "riact");
		const expected = ["react", "react-dom"];

		for (const pkg of expected) expect(result).toContain(pkg);
	});
});
