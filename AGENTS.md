# AGENTS.md - Contributors Showcase Repository Guide
This document defines repository-specific guidance for agentic coding tools working in `/root/contributors-showcase`.

## 1) Repository Purpose
This project is a static contributors showcase site built with Astro and Tailwind CSS.
Contributor data is maintained as Markdown entries under `src/content/contributors/`.
Primary concerns in this repo:
- Astro pages, layouts, and components
- Content schema and Markdown frontmatter validity
- Styling via Tailwind CSS + `src/styles/global.css`
- Build correctness for static export

## 2) Tech Stack and Structure
- Framework: Astro 5 (`astro`)
- Language: TypeScript (strict Astro config)
- Styling: Tailwind CSS v4 (`@tailwindcss/vite`)
- Content: Astro Content Collections (`src/content/config.ts`)

Key paths:
- `src/pages/` - route entrypoints (including `[slug].astro`)
- `src/components/` - reusable Astro UI components
- `src/layouts/` - shared layouts
- `src/content/config.ts` - content schema definitions
- `src/content/contributors/*.md` - contributor profiles
- `src/styles/global.css` - global styles and reusable classes
- `astro.config.mjs` - Astro + Vite plugin setup
- `tsconfig.json` - strict TypeScript config

## 3) Build, Check, and Validation Commands
### Environment setup
- Install dependencies: `npm install`

### Development
- Start local dev server: `npm run dev`

### Build and preview
- Production build: `npm run build`
- Preview built site: `npm run preview`

### Lint/type/test status
- There is no ESLint script configured.
- There is no Prettier script configured.
- There is no unit/integration test runner (`npm test` does not exist).
- Main static/type validation command: `npm run check`.

### Single-test equivalents (important)
Because there is no formal test suite, use focused checks as single-test substitutes:

1. Changed one `.astro`/`.ts` file:
   - Run `npm run check`

2. Changed one contributor Markdown entry:
   - Run `npm run check`
   - Then run `npm run build` to validate schema + route generation

3. Changed only CSS or visual markup:
   - Run `npm run build`
   - Optionally run `npm run preview` for manual smoke checks

4. Quick patch sanity check before handoff:
   - Run `git diff --check`

### Recommended pre-completion command set
For most non-trivial changes, run:
1. `npm run check`
2. `npm run build`
3. `git diff --check`
If a command cannot run, report the blocker and provide a manual verification path.

## 4) Cursor and Copilot Rules
Checked locations:
- `.cursor/rules/`
- `.cursorrules`
- `.github/copilot-instructions.md`

Current status:
- No Cursor rules or Copilot instruction file are present in this repository.

If these files are added later:
- Merge their instructions into this AGENTS guide.
- Treat those instructions as mandatory for future edits.

## 5) Code Style Guidelines
### General editing behavior
- Keep diffs minimal and task-focused.
- Preserve project structure unless refactor is explicitly required.
- Prefer updating existing files over introducing new abstractions.
- Do not edit generated outputs (`dist/`, `.astro/`) unless requested.

### Formatting conventions
- Use 2-space indentation for JSON, TS/JS, Astro frontmatter, and CSS.
- Use double quotes for strings in TS/JS/Astro frontmatter.
- Keep semicolons in TS/JS where existing code uses them.
- Keep trailing newlines at end of files.
- Break long attributes/class strings across lines for readability.

### Import conventions
- Use ESM import syntax only (`import ... from ...`).
- Prefer import grouping in this order:
  1) external/runtime modules (`astro:content`)
  2) local components/layouts/styles
  3) type-only imports (`import type`)
- Prefer explicit named imports over wildcard imports.

### TypeScript and typing rules
- Maintain compatibility with `astro/tsconfigs/strict`.
- Avoid `any`; use concrete interfaces/types or `unknown` + narrowing.
- In Astro files, define `Props` and cast `Astro.props` explicitly.
- Keep content entry types explicit (for example `CollectionEntry<"contributors">`).
- When adding schema fields, update both `src/content/config.ts` and relevant Markdown entries.

### Astro component conventions
- Keep frontmatter logic concise and readable.
- Use conditional rendering for optional fields (avatar, links, location).
- Provide meaningful `alt` text for images.
- For external links with `target="_blank"`, include `rel="noopener noreferrer"`.

### Tailwind and CSS conventions
- Prefer Tailwind utility classes for one-off styling.
- Keep reusable visual patterns in `src/styles/global.css` component classes.
- Reuse existing classes (`card-shell`, `chip`, `tag-pill`) before adding new ones.
- Preserve existing `:root` design tokens and extend intentionally.

### Content and Markdown conventions
- Contributor files belong in `src/content/contributors/`.
- Use kebab-case filenames for contributor slugs.
- Keep frontmatter keys aligned with `src/content/config.ts`.
- Required fields must remain present and correctly typed.
- Keep dates parseable by `z.coerce.date()` (ISO-like strings recommended).

### Naming conventions
- Astro components/layouts: PascalCase (`ContributorCard.astro`, `BaseLayout.astro`).
- Route files: Astro routing convention (`index.astro`, `[slug].astro`).
- Local variables/functions: camelCase.
- Shared immutable constants: descriptive names, avoid cryptic abbreviations.

### Error handling and resilience
- Fail fast on invalid content/schema rather than silently ignoring bad data.
- Do not swallow errors in catch blocks.
- Handle missing optional fields explicitly when transforming content.
- Keep error messages actionable and specific to file/field.

### Security and secrets
- Never commit secrets, API keys, or tokens.
- Never add private credentials into Markdown frontmatter.
- Treat external URLs as untrusted input; keep validation in schema where possible.

## 6) Agent Workflow Expectations
For non-trivial tasks:
1. Summarize objective and non-goals.
2. Inspect relevant files before editing.
3. Apply minimal, focused changes.
4. Run relevant validation commands from Section 3.
5. Report exactly what was validated and any remaining manual checks.

Before finishing:
- Ensure modified files follow conventions in this guide.
- Ensure checks pass (or blockers are documented).
- Ensure no generated files or secrets were accidentally introduced.
