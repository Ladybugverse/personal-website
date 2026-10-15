# Portfolio design comparison — preview only

This branch preserves the existing production files. Do not merge or publish a replacement until Tiffany approves a design.

Open previews/portfolio-directions.html as a standalone HTML file, or use the hosted comparison URL provided in the handoff. The HTML includes all required portfolio content, CSS, and interaction code. Google Fonts are optional remote resources; system fallback fonts remain available offline.

## Recovered directions
- Bold Creative Technologist: dark/electric, condensed scale, persistent side navigation, alternating project rows.
- Luxury Editorial: plum/peach, Bodoni display typography, arch composition, staggered project gallery.
- Expressive Digital Studio: cobalt/pink/yellow, Syne display typography, playful geometry, featured-project layout.

## Content provenance
Complete body markup was copied from the current docs/index.html and docs/work/{mow-magic,everfold,runhouse,design-system}/index.html retrieved on October 15, 2026. The existing production base CSS is embedded. The original portfolio wording, accurate statuses, Capital One experience, Mow Magic responsibilities, and tifflegg93@gmail.com are preserved. Project exhibits are conceptual structures, not screenshots. The original evidence sections become expandable disclosures; destinations and content are retained.

## Interaction and review
- Switch directions without losing the selected project.
- Use Homepage or any of the four complete project case studies.
- Select 1280px desktop, 390px mobile, paired views, or actual responsive width.
- Scroll within each preview frame.
- Project filtering, mobile navigation, case-study links and evidence disclosures are functional.
- Concept/page are encoded in the URL hash and restored on reload; viewport mode defaults to device size.
- Source/evidence links open separately; private project sources may require authorized repository access.
- No form backend, analytics, production write, or publishing control is included.
- Mobile paired mode stacks the desktop and mobile previews to avoid outer overflow.
- Desktop/mobile preview frames are scaled to fit available review space; actual responsive mode avoids scaling.
- No generated photos, fabricated project screenshots, invented customer metrics, or unapproved contact details were added.

## Verification
Embedded JavaScript parses successfully. Original source pages are retained verbatim as content inputs. Hosted automated browser workflow results are reported in the handoff; deployment success alone is not a visual-quality claim. Public GitHub Pages accessibility could not be established through the available web fetch.

## Files
Only previews/portfolio-directions.html, previews/tests.json and this README are added to this branch. docs/ and master remain unchanged.
