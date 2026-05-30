# samrat-alam-portfolio

Personal portfolio for **Samrat Alam** — Backend Engineer. Built with Vite + React, plain CSS with design-token theming, and a dark/light theme toggle.

Live (once deployed): `https://samratalam.github.io/`

## Stack

| | |
|---|---|
| Framework | React 18 |
| Bundler | Vite 5 |
| Styling | Plain CSS with CSS custom properties (`src/styles/tokens.css`) |
| Theme | Dark default + light mode, persisted in `localStorage` |
| Hosting | GitHub Pages via the bundled GitHub Actions workflow |

No CSS framework, no UI library — small bundle, fast load.

## Local development

```sh
npm install
npm run dev          # http://localhost:5173
npm run build        # outputs to dist/
npm run preview      # serve the production build locally
```

## Deploying to GitHub Pages

Two repo-naming options — they affect the URL and the Vite `base` path:

### Option A — User page (root URL, recommended)

1. Create a GitHub repo named **`samratalam.github.io`**.
2. `git remote add origin git@github.com:samratalam/samratalam.github.io.git`
3. `git push -u origin main`
4. In the repo's **Settings → Pages**, set "Source" to **GitHub Actions**.
5. The included workflow (`.github/workflows/deploy.yml`) builds with `VITE_BASE=/` and deploys on every push to `main`.

Site URL: `https://samratalam.github.io/`

### Option B — Project page (subpath URL)

1. Create a GitHub repo named **`samrat-alam-portfolio`**.
2. Push to `main`.
3. In **Settings → Pages**, set "Source" to **GitHub Actions**.
4. In **Settings → Secrets and variables → Actions → Variables**, add a repo variable:
   - Name: `VITE_BASE`
   - Value: `/samrat-alam-portfolio/`
5. Workflow auto-deploys on push.

Site URL: `https://samratalam.github.io/samrat-alam-portfolio/`

## Project structure

```
samrat-alam-portfolio/
├── public/
│   ├── .nojekyll                 # disables Jekyll on GH Pages
│   ├── favicon.svg
│   └── assets/                   # images go here — see assets/README.md
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── contexts/ThemeContext.jsx # dark / light theme
│   ├── hooks/useReveal.js        # IntersectionObserver scroll reveal
│   ├── styles/
│   │   ├── tokens.css            # design tokens (colours, type, spacing)
│   │   └── global.css            # reset + base + .container + .section
│   └── components/
│       ├── Header/
│       ├── Hero/
│       ├── Stats/
│       ├── About/
│       ├── Experience/   # role data in experienceData.js
│       ├── Skills/       # skills data in skillsData.js
│       ├── Projects/     # project data in projectsData.js
│       ├── Publications/ # paper data in publicationsData.js
│       ├── Background/   # education + competitive programming
│       ├── Contact/
│       └── Footer/
├── index.html
├── vite.config.js
├── package.json
└── .github/workflows/deploy.yml
```

## Editing content

All copy lives in plain JS data files alongside each component:

- `src/components/Experience/experienceData.js` — roles, bullets, tags
- `src/components/Skills/skillsData.js` — skill groups
- `src/components/Projects/projectsData.js` — projects, links, tags
- `src/components/Publications/publicationsData.js` — papers

Hero, About, Background (education + CP), and Contact are inline in their JSX files. The displayed year in the footer is generated from `new Date()`.

## Adding images

See `public/assets/README.md` for the required filenames and dimensions. The page renders cleanly when images are missing — broken `<img>` references are auto-hidden by an `onError` handler.

## Theming

Tokens live in `src/styles/tokens.css`. To change accent colour, edit `--accent` (dark) and the `[data-theme="light"] { --accent }` value.

The theme toggle is in the header. The initial theme is chosen by:
1. Previous user choice from `localStorage`
2. `prefers-color-scheme`
3. Default to dark

The inline script in `index.html` runs before React mounts to prevent a flash of the wrong theme.

## License

Personal portfolio — no license. Don't copy the content; the code structure is fair game.
