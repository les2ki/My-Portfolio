# Portfolio

A template-driven portfolio built with Next.js, React, and TypeScript.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

```text
portfolio/
├── DESC/                         # Original source reports and reference images
├── public/
│   ├── documents/                # Downloadable documents
│   └── images/
│       ├── profile/              # Profile photography
│       └── projects/             # Project media grouped by project
├── src/
│   ├── app/                      # App Router, metadata, global styles
│   ├── components/
│   │   ├── layout/               # Header and footer
│   │   ├── sections/              # Page sections
│   │   └── ui/                    # Reusable visual components
│   ├── data/                     # Editable profile, project, and site content
│   ├── lib/                      # Small shared utilities
│   └── types/                    # Shared TypeScript models
└── package.json
```

## Customize this portfolio

- Edit personal information in `src/data/profile.ts`.
- Add or update case studies in `src/data/projects.ts`.
- Keep each project organized as `what`, `how`, and `result`.
- Add project images under `public/images/projects/<project-name>/`.
- Add downloadable documents under `public/documents/`.
- Update visual styling in `src/app/globals.css`.

## Validation

```bash
npm run lint
npm run build
```
