import { describe, expect, it } from "bun:test";
import { getPackageUrl } from "./getPackageUrl";
import { getRepoType } from "./getRepoType";
import {
	invalidTestData,
	type PackageTestData,
	validTestData,
	validTestData2,
} from "./packageTestData";

describe("getPackageUrl", () => {
	it.each(
		validTestData,
	)("return url for %o", (_packageName: PackageTestData[0], input: PackageTestData[1], expectedData: PackageTestData[2]) => {
		const pkgUrl = getPackageUrl(input);
		if (!pkgUrl) throw new Error("pkgUrl is missing");
		if (!expectedData) throw new Error("expectedData is missing");

		const { url, repoType } = expectedData;
		expect(pkgUrl).toEqual(url);
		expect(pkgUrl).toInclude("https://");
		expect(getRepoType(pkgUrl)).toEqual(repoType);
	});

	it.each(
		validTestData2,
	)("return url for %o", (_packageName: PackageTestData[0], input: PackageTestData[1], expectedData: PackageTestData[2]) => {
		const pkgUrl = getPackageUrl(input);
		if (!pkgUrl) throw new Error("pkgUrl is missing");
		if (!expectedData) throw new Error("expectedData is missing");

		const { url, repoType } = expectedData;
		expect(pkgUrl).toEqual(url);
		expect(pkgUrl).toInclude("https://");
		expect(getRepoType(pkgUrl)).toEqual(repoType);
	});

	it.each(
		invalidTestData,
	)("return undefined for invalid packages or without url for %o", (_packageName: PackageTestData[0], input: PackageTestData[1], _expectedUrl: PackageTestData[2]) => {
		const pkgUrl = getPackageUrl(input);

		expect(pkgUrl).toBeUndefined();
	});
});
