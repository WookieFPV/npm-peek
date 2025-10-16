import type { PackageJson } from "../filesystem/getPackageVersion";

export const getPackageUrl = (repo: PackageJson["repository"]) => {
	const rawUrl = getRepoUrl(repo);
	if (!rawUrl) return undefined;
	return cleanUpUrl(rawUrl);
};
export const getRepoUrl = (
	repo: PackageJson["repository"],
): string | undefined => {
	if (!repo) return undefined;
	if (typeof repo === "string") return repo;
	if (typeof repo === "object") return repo.url;
	return undefined;
};
const cleanUpUrl = (_url: string): string => {
	const url = _url
		.replace(/^git\+/, "")
		.replace(/^(\+)?ssh:\/\//, "")
		.replace(/^git:\/\//, "")
		.replace(/^git@/, "")
		.replace(/^http:\/\//, "")
		.replace("www.", "")
		.replace(/^github.com:/, "")
		.replace(/\.git$/, "")
		.replace(/\/$/, "");

	if (!url.includes("github.com/") && !url.includes(".com/"))
		return `https://github.com/${url}`;
	if (url.startsWith("https://")) return url;
	return `https://${url}`;
};
