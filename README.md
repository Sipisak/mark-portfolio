# Mark — Portfolio

Personal portfolio site built with **Vite + React + TypeScript**.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build locally
```

## Stack

- **Vite** — build tooling and dev server
- **React 18** + **TypeScript**
- **lucide-react** — icons
- Fonts (Space Grotesk, Inter, JetBrains Mono) loaded via Google Fonts in `index.html`

## Project structure

```
mark-portfolio/
├── index.html          # entry HTML, font preloads
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.tsx        # React entry point
    ├── App.tsx         # the full portfolio
    ├── index.css       # resets, keyframes, reduced-motion
    └── vite-env.d.ts
```

## Before you ship

- Replace `your@email.com` in `src/App.tsx` (Contact section) with your real email.
- Add more projects in the `Projects` component if you want.

## Deploy

The `dist/` folder is fully static. Easy options:

- **Vercel** — `vercel` or connect the repo; framework preset = Vite.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — push `dist/` or use an action.
