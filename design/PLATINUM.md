# Platinum portfolio redesign

Visual changes only. The generator, four case studies, project data, navigation, filters, contact details and professional claims are preserved. The only generated HTML change is the browser theme color.

The visual system uses charcoal, platinum, restrained warm metal details, self-hosted Manrope variable typography, metallic diagram panels, focus outlines and subtle hover and scroll effects. No external font requests or new production dependencies. Manrope's OFL license is included with its font asset.

## Validation

- `python scripts/build.py`
- `python scripts/check.py`: all six generated pages pass.
- Visible HTML text compared with the original master commit: unchanged on all six pages. `portfolio/projects.json` unchanged.
- Browser verification: all six pages at 360, 390, 768, 1024 and 1440 pixels without horizontal overflow; all filter states, keyboard filter activation, navigation, reduced-motion preference, no-JavaScript fallback and browser errors checked.
- Desktop, full-page, mobile and case-study captures in `design/previews/`.

Optional browser regression check: install Playwright in a temporary directory, install its Chromium browser, serve `docs/` at port 8000, then run `scripts/verify-browser.cjs`. Set `PLAYWRIGHT_MODULE` to the installed Playwright module path if it is not on the normal Node module path. `BROWSER_EXECUTABLE` can select an existing Chromium installation. Screenshots are written relative to the repository root.

These are local build and browser results, not proof of public deployment. This branch is intended for visual review before merging; pushes to master may trigger the existing Pages publishing workflow.

## Review next

Review the desktop hero and mobile capture before merging. Actual product screenshots could eventually replace conceptual diagrams once reviewed for private data and accurate implementation status; this redesign adds no unverified product imagery or claims.
