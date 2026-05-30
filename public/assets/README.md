# Assets

Drop image files here matching these names — the site picks them up automatically. While files are missing, the page renders a clean placeholder (no broken-image icons).

## Required filenames

| File | Where it appears | Recommended size | Notes |
|---|---|---|---|
| `portrait.jpg`            | Hero — right side       | 480 × 600 (4:5)  | Professional headshot |
| `logo-bs23.svg`           | Experience — Brain Station 23 | 44 × 44 square | SVG preferred, PNG ok |
| `logo-reddigital.svg`     | Experience — Red.Digital       | 44 × 44 square | SVG preferred, PNG ok |
| `project-ecommerce.png`   | Projects — P-01 thumbnail | 800 × 500 (16:10) | Architecture diagram or screenshot |
| `project-banking.png`     | Projects — P-02 thumbnail | 800 × 500 (16:10) | Architecture diagram or screenshot |
| `project-goapi.png`       | Projects — P-03 thumbnail | 800 × 500 (16:10) | Architecture diagram or screenshot |
| `og-cover.png` (optional) | Social share preview      | 1200 × 630       | Used by `og:image` |

## Tips

- Keep file sizes reasonable: target < 200 KB per image. Use [Squoosh](https://squoosh.app/) or `cwebp` to compress.
- Prefer `.webp` or `.avif` if you can — rename in `*Data.js` files accordingly.
- The site uses explicit `width`/`height` on every `<img>` so layout never shifts when an image finishes loading.
