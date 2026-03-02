import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const repository = process.env.GITHUB_REPOSITORY;
const [ownerFromRepository, repoName] = repository ? repository.split("/") : [];
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? ownerFromRepository;

const inferredSite = owner ? `https://${owner}.github.io` : "https://link-trust.github.io";
const inferredBase =
  repoName && owner && repoName === `${owner}.github.io`
    ? "/"
    : repoName
      ? `/${repoName}`
      : "/contributors-showcase";

export default defineConfig({
  output: "static",
  site: process.env.SITE_URL ?? inferredSite,
  base: process.env.BASE_PATH ?? inferredBase,
  vite: {
    plugins: [tailwindcss()],
  },
});
