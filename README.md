# nels-g.github.io

Portfolio scientifique de Kossi Nelson Galley - Candidat au Master 1 Informatique.
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
| Communications, ateliers, workshops | `src/data/talks.ts` |
| Formation, expérience, engagements, distinctions, compétences, langues | `src/data/journey.ts` |
| Coordonnées | `src/data/profile.ts` |

Chaque texte traduisible a la forme `{ fr: '...', en: '...' }`.

## Déploiement

Chaque `git push` sur `main` déclenche `.github/workflows/deploy.yml`, qui construit le site et le publie sur GitHub Pages.
Réglage requis une seule fois : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
