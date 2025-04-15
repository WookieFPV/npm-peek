export const getLatestPackageVersion = async (pkgName: string) => {
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
