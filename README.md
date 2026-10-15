# Tiffany Legg — Professional Portfolio

An evidence-backed portfolio for operations leadership, business systems, CRM, web development, and brand work. The original GitHub Jekyll starter remains in the repository for reference; the new portfolio is generated into `docs/` and published independently of Jekyll.

## Why this implementation

Keep this repository and its history. The original starter is a generic repository feed with a Ruby/Jekyll plugin build chain. This portfolio needs a curated narrative and a small set of static case studies, not a server or a client-side application framework. A dependency-free Python generator provides a shared layout and one project-data file, with readable HTML output and minimal progressive-enhancement JavaScript. No npm or Ruby installation is required for the new site.

## Local use

Requires Python 3.10 or later. From this repository:

```sh
python scripts/build.py
python scripts/check.py
python -m http.server 8000 --directory docs
```

Open `http://localhost:8000`. Navigation and case studies work without JavaScript; JavaScript enables project filters. No analytics, account system, contact backend, or external font service is required.

## Editing

- `portfolio/projects.json`: project descriptions, roles, evidence and boundaries.
- `scripts/build.py`: shared templates, home introduction, experience and contact content.
- `docs/assets/style.css`: responsive visual system.
- `docs/assets/site.js`: accessible project filtering.
- `docs/assets/mark.svg`: monogram favicon.
- `docs/`: generated pages plus maintained assets; commit this directory after rebuilding.
- `portfolio/EVIDENCE.md`: editorial provenance and publishing limits.

Do not edit generated HTML directly; it is overwritten on build. To add a case study, add a project object and a corresponding conceptual diagram label set in `graphic()` in the generator. Run build and check, then commit both source and output.

## Publishing

The workflow validates pull requests and deploys `docs/` on pushes to `master`. It never publishes the legacy starter. In GitHub **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**. The workflow requires Pages to be enabled and GitHub Actions/environment deployment permissions to allow the default branch. If organization or repository policy blocks deployment, resolve that policy rather than weakening permissions.

Expected address after a successful deployment: `https://ladybugverse.github.io/personal-website/`. This is an expected address, not a verified live deployment. At review on October 14, 2026, it returned 404; an unauthenticated Pages API read also returned 404, which cannot distinguish disabled Pages from permission restrictions. No custom domain or DNS change has been made.

A completed Actions deployment and a successful HTTP check of the returned URL are required before claiming the portfolio is live. The workflow output supplies the actual URL.

## Editorial boundaries

Mow Magic reuses the existing Notion case study. Other projects were selected based on inspected implementation evidence. No fabricated metrics, certifications, client engagements or sole-authorship claims are included. Private repository links are marked as restricted; the public portfolio contains summaries, not private source or business records. Conceptual diagrams are not screenshots.

The contact section offers the user-approved public employer email, tifflegg93@gmail.com, plus a GitHub profile link. The email was confirmed October 14, 2026. Add a resume only after reviewing its public contact information and confirming the version to publish.

## Legacy starter

The root `_config.yml`, `_layouts/`, `_includes/`, `_sass/`, `_posts/`, root `index.html`, Gemfile and original assets are retained. The GitHub Pages artifact includes only `docs/`, with `.nojekyll`. They do not enter the new published site. Git history preserves the original README and all earlier starter content. No legacy license has been removed.
