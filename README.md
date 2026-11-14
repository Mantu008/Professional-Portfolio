# Mantu Kumar Morya · Portfolio

Personal portfolio of Mantu Kumar Morya, full stack developer (MERN, React, Next.js, TypeScript, Node.js).

- One static page: `index.html` with inline CSS and vanilla JS. No framework, no build step.
- Self-hosted Inter font in `fonts/`; tech logos (Devicon SVGs) in `assets/icons/`. Add `assets/profile.jpg` to replace the "MK" avatar with a photo.
- Resume download in `assets/`, project screenshots in `assets/projects/`.
- Classic professional design: white and navy, Inter, a hero with a profile card, skills, an experience timeline, project cards with screenshots and a contact form. Motion is limited to gentle scroll reveals and hover states, all off under `prefers-reduced-motion`.

## Run locally

Open `index.html` in a browser, or serve the folder with `npx serve .`

## Update content

All content lives in `index.html`. Each section (Hero, About, Skills, Experience, Projects, Contact) is marked with a comment. To change the resume, replace `assets/Mantu_Kumar_Morya_Resume.pdf`.

## Deploy

`vercel.json` tells Vercel to skip the install and copy the static files into `dist/`, so no project settings need changing.
