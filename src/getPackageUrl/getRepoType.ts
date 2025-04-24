export type RepoType = "github" | "gitlab" | "bitbucket" | "unknown";

export const getRepoType = (url: string): RepoType => {
	if (url.includes("github.com")) return "github";
	if (url.includes("bitbucket")) return "bitbucket";
	if (url.includes("gitlab")) return "gitlab";
	return "unknown";
};
