# Mantu Kumar Morya · Portfolio

Personal portfolio of Mantu Kumar Morya, full stack developer (MERN, React, Next.js, TypeScript, Node.js).

- One static page: `index.html` with inline CSS and vanilla JS. No framework, no build step.
- Self-hosted fonts in `fonts/` (Inter and Instrument Serif).
- Resume download in `assets/`, project screenshots in `assets/projects/`.
- Editorial, minimal design with light and dark themes (follows the system, with a toggle). Motion is kept subtle: line-by-line hero entrance, gentle scroll reveals and hover details, all off under `prefers-reduced-motion`.

## Run locally

Open `index.html` in a browser, or serve the folder with `npx serve .`

## Update content

All content lives in `index.html`. Each section (Work, Experience, Capabilities, Education, Contact) is marked with a comment. To change the resume, replace `assets/Mantu_Kumar_Morya_Resume.pdf`.

## Deploy

`vercel.json` tells Vercel to skip the install and copy the static files into `dist/`, so no project settings need changing.
