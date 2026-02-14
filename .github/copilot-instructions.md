# Copilot / AI Agent Instructions for surveilans-rs

Short, actionable guidance to help an AI agent be productive in this repo.

- **Project type:** Next.js (App Router) application created with `create-next-app` (see `app/page.tsx`, `app/layout.tsx`).
- **Start (dev):** `npm run dev` (runs `next dev`). Build: `npm run build` and `npm start` for production.
- **Key dependencies:** Supabase (`@supabase/supabase-js`, `@supabase/auth-helpers-nextjs`), TailwindCSS, `shadcn` UI helpers, `next/font` usage in `app/layout.tsx`.

- **Big picture / architecture:**
  - UI is located under the `app` directory (app-router). Edit routes and components there. `app/layout.tsx` provides global fonts and `globals.css`.
  - Small helper utilities live in `lib/` (see `lib/utils.ts` — `cn()` is the project-wide className merge helper using `clsx` + `tailwind-merge`).
  - Integrations: Supabase is used for backend/auth; any change to auth flows should look for Supabase client usage or `@supabase/auth-helpers-nextjs` patterns.

- **Conventions & patterns (observable):**
  - Tailwind classes are used inline in JSX; prefer the `cn()` helper for conditional class composition (example: `className={cn("p-4", condition && "text-red")}`).
  - TypeScript is strict (`tsconfig.json`): preserve types and keep `noEmit` semantics.
  - Path aliasing: `@/*` → project root (see `tsconfig.json` `paths`). Use it when adding new imports.

- **Where to change UI:** edit `app/page.tsx` or add new folders under `app/` (e.g., `app/dashboard/page.tsx`). Keep layouts in `app/layout.tsx`.

- **Build & debug tips:**
  - Local dev: `npm run dev` opens http://localhost:3000.
  - Linting: `npm run lint` runs `eslint` (no explicit args in package.json; run from project root).
  - If adding server-side code, prefer Next.js conventions (app directory server components, `export const metadata`, etc.).

- **Integration notes:**
  - Supabase client usage: search for `createClient` or `@supabase/supabase-js` imports to find initialization points.
  - Fonts: project uses `next/font` in `app/layout.tsx`. Avoid moving font initialization out of layout without updating layout consumers.

- **Testing assumptions for changes:**
  - Quick smoke test: run `npm run dev` and open the page; UI edits in `app/` update with fast refresh.
  - For production build checks: run `npm run build` then `npm start`.

- **Files to inspect for context when making changes:**
  - `package.json` — scripts & dependencies
  - `app/layout.tsx`, `app/page.tsx` — layout and entry page
  - `lib/utils.ts` — helper utilities (e.g., `cn`)
  - `globals.css` — global styles (Tailwind base/utilities)

- **What not to assume:**
  - There are no repository-specific CI or agent rules files (`.github/copilot-instructions.md` did not exist before this write). Don't assume extra tooling beyond what `package.json` lists.

If any area above is unclear or you want the instructions to include examples for tests, Supabase usage, or layout/component scaffolding, tell me which section to expand.
