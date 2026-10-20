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
| Biographie, axes de recherche, textes des pages (FR/EN) | `src/i18n/ui.ts` |
| Parcours (formation, expérience, bénévolat, distinctions) | `src/data/journey.ts` |
| Projets | `src/data/projects.ts` |
| Conférences / ateliers | `src/data/talks.ts` |
| Publications | `src/data/publications.ts` |
| Email, LinkedIn, GitHub | `src/components/home/Contact/Contact.astro` |

Design identique au site de Dr. Yvette Gbedevi (Lora + Urbanist, accent `#3457D5`).

Chaque texte traduisible a la forme `{ fr: '...', en: '...' }`.

## Déploiement

Chaque `git push` sur `main` déclenche `.github/workflows/deploy.yml`, qui construit le site et le publie sur GitHub Pages.
Réglage requis une seule fois : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
