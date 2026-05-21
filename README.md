# GitHub Copilot webinar presentation

A bilingual Reveal.js slide deck about GitHub Copilot usage, context discipline, prompting, CLI workflows, and skills. The presentation is built with React, TypeScript, Vite, and Tailwind, then deployed to GitHub Pages.

## Commands

```bash
pnpm install
pnpm dev
pnpm lint
pnpm test
pnpm build
pnpm preview
```

Use the pinned pnpm version from `package.json` via Corepack:

```bash
corepack enable
pnpm install
```

## Project structure

```text
src/
  App.tsx                     # app composition only
  i18n/                       # translation types, provider, and EN/TR content
  presentation/
    components.tsx            # reusable slide primitives
    Presentation.tsx          # Reveal deck shell
    slides/                   # grouped slide modules
  index.css                   # Reveal/Tailwind presentation styling
  assets/                     # slide images
```

## Editing slides

1. Update shared copy in `src/i18n/translations/en.ts` and `src/i18n/translations/tr.ts`.
2. Keep both languages structurally aligned; the translation parity test enforces this.
3. Update or add slide layouts under `src/presentation/slides/`.
4. Reuse the shared presentation components before adding new slide-specific markup patterns.

## Quality gates

- `pnpm lint` runs ESLint with type-aware TypeScript rules.
- `pnpm test` runs a smoke test for the deck composition and a translation parity check.
- `pnpm build` runs TypeScript project builds and a production Vite bundle.

## Deployment

GitHub Actions publishes the built deck to GitHub Pages on pushes to `main`. CI also runs lint, test, and build on pushes and pull requests.
