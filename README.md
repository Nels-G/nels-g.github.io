# nels-g.github.io

Portfolio de Nelson Galley - Développeur Web & UX/UI Designer.
Site statique Astro, bilingue (FR sur `/`, EN sur `/en/...`), hébergé sur GitHub Pages : https://nels-g.github.io

## Développement

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```

## Modifier le contenu

| Quoi | Où |
| --- | --- |
| Textes de l'interface (FR/EN) | `src/i18n/ui.ts` |
| Projets | `src/data/projects.ts` (+ images dans `public/projects/`) |
| Expériences, formations, compétences, certifications | `src/data/journey.ts` |
| Coordonnées, chiffres du hero | `src/data/profile.ts` |

Chaque texte traduisible a la forme `{ fr: '...', en: '...' }`.

## Déploiement

Chaque `git push` sur `main` déclenche `.github/workflows/deploy.yml`, qui construit le site et le publie sur GitHub Pages.
Réglage requis une seule fois : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
