# portfolio

Personal portfolio for **Samrat Alam** — Backend Engineer. Built with Vite + React, plain CSS with design-token theming, and a dark/light theme toggle.

Live (once deployed): `https://samratalamshanto.github.io/portfolio/`

## Stack

|           |                                                                |
| --------- | -------------------------------------------------------------- |
| Framework | React 18                                                       |
| Bundler   | Vite 5                                                         |
| Styling   | Plain CSS with CSS custom properties (`src/styles/tokens.css`) |
| Theme     | Dark default + light mode, persisted in `localStorage`         |
| Hosting   | GitHub Pages via the bundled GitHub Actions workflow           |

No CSS framework, no UI library — small bundle, fast load.

## Local development

```sh
npm install
npm run dev          # http://localhost:5173
npm run build        # outputs to dist/
npm run preview      # serve the production build locally
```

## Deploying to GitHub Pages

The repo name determines the URL and the Vite `base` path:

### Project page (current setup)

1. Create a GitHub repo named **`portfolio`** and push to `main`.
2. In **Settings → Pages**, set "Source" to **GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds with `VITE_BASE=/portfolio/` (the default) and deploys on every push to `main`. To deploy under a different repo name, set a repo variable **Settings → Secrets and variables → Actions → Variables** named `VITE_BASE` to `/<repo-name>/`.

Site URL: `https://samratalamshanto.github.io/portfolio/`

> The canonical and Open Graph URLs in `index.html` are hardcoded to this address — update them if you deploy elsewhere.

### Alternative — User page (root URL)

1. Create a GitHub repo named **`samratalamshanto.github.io`** and push to `main`.
2. In **Settings → Pages**, set "Source" to **GitHub Actions**.
3. Add a repo variable `VITE_BASE` with value `/`, and update the hardcoded URLs in `index.html` to `https://samratalamshanto.github.io/`.

Site URL: `https://samratalamshanto.github.io/`

## Project structure

```
portfolio/
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
│       ├── Education/     # education data in educationData.js
│       ├── Background/    # competitive programming
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

Hero, About, and Contact are inline in their JSX files. The displayed year in the footer is generated from `new Date()`.

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
