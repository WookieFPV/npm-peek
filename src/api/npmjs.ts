export const fetchLatestPackageVersion = async (pkgName: string) => {
	const response = await fetch(`https://registry.npmjs.org/${pkgName}/latest`);
	if (!response.ok) throw new Error("getLatestVersion fetch failed");
	const data = await response.json();
	if (
		!data ||
		typeof data !== "object" ||
		!("version" in data) ||
		typeof data.version !== "string"
	)
		throw new Error("getLatestVersion invalid data");
	return data.version;
};

type PkgInfo = {
	"dist-tags": Record<string, string>;
	versions: Record<string, unknown>;
};

export type VersionItem = [label: string, version: string];

export const fetchPackageVersions = async (
	pkgName: string,
): Promise<VersionItem[]> => {
	const response = await fetch(`https://registry.npmjs.org/${pkgName}`);
	if (!response.ok) throw new Error("getAllPackageVersions fetch failed");
	const data = (await response.json()) as PkgInfo;

	const distTags = Object.entries(data["dist-tags"]);
	const versions = Object.entries(data.versions)
		.map<VersionItem>(([version, _meta]) => [version, version])
		.reverse();

	return [...distTags, ...versions];
};
