// Resolve a public-folder asset path against Vite's base URL.
// Works in both dev (base="/") and project-page prod (base="/portfolio/").
//
// Usage: asset("/assets/portrait.jpg")  -> "/assets/portrait.jpg" (dev)
//                                      -> "/portfolio/assets/portrait.jpg" (prod)
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, "")}`;
