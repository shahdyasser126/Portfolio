# Shahd Elkelany — Developer Portfolio

A responsive, single-page developer portfolio built with React, Vite, Framer Motion and Lucide React.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```
The production output is generated in `dist/`.

## Deploy to Vercel
1. Push this project to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the framework preset as **Vite**.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy. `vercel.json` includes an SPA rewrite for client-side routing if routes are added later.

## Project structure
```text
src/
  components/   Reusable navigation, section, project and skill components
  data/         Portfolio content kept separate from presentation
  sections/     Page sections
  App.jsx
  main.jsx
  styles.css
```

## Updating content
Edit `src/data/portfolio.js` to update the profile, experience, projects or skills. Project links intentionally use only the URLs supplied or confirmed for the portfolio.
