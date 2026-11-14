# Mantu Kumar Morya · Portfolio

Personal portfolio of Mantu Kumar Morya, full stack developer (MERN, React, Next.js, TypeScript, Node.js).

- One static page: `index.html` with inline CSS and vanilla JS. No framework, no build step.
- Self-hosted Geist and Geist Mono fonts in `fonts/` (OFL, see `fonts/GEIST-LICENSE.txt`); tech logos (Devicon SVGs) in `assets/icons/`. Add `assets/profile.jpg` to replace the "MK" avatar with a photo.
- Resume download in `assets/`, project screenshots in `assets/projects/`.
- Developer-native design: a status bar with live IST clock, an interactive terminal in the hero, a ⌘K / Ctrl K command menu (also the mobile menu), projects shown as repos, experience as a git log, skills as `stack.ts`, and a contact form that previews its JSON request. Warm paper and ink with one blue accent, blueprint hairlines framing the page. Motion is limited to typing, reveals and hover states, all off under `prefers-reduced-motion`.

## Design tokens

Colors, radii, shadows and easing live as CSS custom properties at the top of `index.html` (`:root`). Text colors are tiered by contrast on the paper background: `--ink` headings, `--text` body, `--muted` secondary copy (6.4:1), `--subtle` small meta text (4.6:1, the lightest allowed under 24px), `--faint` large display text and decoration only. Radii: `--r-sm` 6px, `--r-md` 8px, `--r-lg` 12px.

## Behaviour notes

- The command menu is a modal dialog: focus is trapped, Esc returns focus to where you were, and jumping to a section moves focus there. On touch screens it opens without the keyboard.
- The contact form validates inline, then opens the visitor's email app (static site, no backend). It shows a fallback link and copy button in case no mail app is set up.
- Copy, download and send actions all report through one toast.
- `404.html` is served by Vercel for unknown paths. `vercel.json` adds security headers and caching for fonts and assets.

## Run locally

Open `index.html` in a browser, or serve the folder with `npx serve .`

## Update content

All content lives in `index.html`. Each section (Hero, About, Work, Experience, Stack, Contact) is marked with a comment. To change the resume, replace `assets/Mantu_Kumar_Morya_Resume.pdf`.

## Deploy

`vercel.json` tells Vercel to skip the install and copy the static files into `dist/`, so no project settings need changing.
