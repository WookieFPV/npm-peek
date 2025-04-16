import { describe, expect, it } from "bun:test";
import { getPackageUrl } from "./getPackageUrl";
import {
	type PackageTestData,
	invalidTestData,
	validTestData,
} from "./packageTestData";

describe("getPackageUrl", () => {
	it.each(validTestData)(
		"return url for %o",
		(
			packageName: PackageTestData[0],
			input: PackageTestData[1],
			expectedUrl: PackageTestData[2],
		) => {
			const pkgUrl = getPackageUrl(input);
			expect(pkgUrl).toBeDefined();

			expect(pkgUrl).toEqual(expectedUrl ?? ":(");
			expect(pkgUrl).toInclude("github.com/");
			expect(pkgUrl).toInclude("https://");
		},
	);

	it.each(invalidTestData)(
		"return undefined for invalid packages or without url for %o",
		(
			packageName: PackageTestData[0],
			input: PackageTestData[1],
			expectedUrl: PackageTestData[2],
		) => {
			const pkgUrl = getPackageUrl(input);

			expect(pkgUrl).toBeUndefined();
		},
	);
});
