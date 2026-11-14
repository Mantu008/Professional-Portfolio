# Mantu Kumar Morya · Portfolio

Personal portfolio of Mantu Kumar Morya, full stack developer (MERN, React, Next.js, TypeScript, Node.js).

- One static page: `index.html` with inline CSS and vanilla JS. No framework, no build step.
- Self-hosted Geist and Geist Mono fonts in `fonts/` (OFL, see `fonts/GEIST-LICENSE.txt`); tech logos (Devicon SVGs) in `assets/icons/`. Add `assets/profile.jpg` to replace the "MK" avatar with a photo.
- Resume download in `assets/`, project screenshots in `assets/projects/`.
- Developer-native design: a status bar with live IST clock, an interactive terminal in the hero, a ⌘K / Ctrl K command menu (also the mobile menu), projects shown as repos, experience as a git log, skills as `stack.ts`, and a contact form that previews its JSON request. Warm paper and ink with one blue accent, blueprint hairlines framing the page. Motion is limited to typing, reveals and hover states, all off under `prefers-reduced-motion`.

## Run locally

Open `index.html` in a browser, or serve the folder with `npx serve .`

## Update content

All content lives in `index.html`. Each section (Hero, About, Work, Experience, Stack, Contact) is marked with a comment. To change the resume, replace `assets/Mantu_Kumar_Morya_Resume.pdf`.

## Deploy

`vercel.json` tells Vercel to skip the install and copy the static files into `dist/`, so no project settings need changing.
