# Portfolio evidence and editorial decisions

Reviewed October 14, 2026. Deployment and outcomes are separate from source implementation.

## Reused source

The existing Work + Career Profile / Portfolio Case Study — Mow Magic:
https://app.notion.com/p/f9f3acdf1d2445209d055a94815e8dc2

Retrieved through the dandyverselabs connected Notion workspace. The other connection could not access this page. The published summary preserves its claim boundaries and gives the existing case study a link rather than recreating a second authoritative career profile.

## Featured selection

- **Mow Magic:** anchor project; strongest confirmed cross-functional responsibility and detailed existing case study. Next.js intake, team operations and microsite remain distinct implementations. No automatic integration is claimed.
- **Everfold:** implementation in development; inspected `package.json`, `src/lib/templates/apply.ts`, `src/lib/invitations/confirmed-save.test.ts`, README and repository tree. The template function copies definitions and pins a version. Tests address failed/delayed saves and publish ordering; their presence is not a claim they were executed here. README is partly an original brief, not a completion report.
- **RunHouse Digital:** frontend prototype; inspected package manifest, repository tree and `client/src/components/ProjectEstimator.tsx`. The estimator computes package/add-on, maintenance and first-year totals. Marketing page claims and pricing are not reused as verified business results.
- **Mow Magic Design System:** reusable source package; inspected public README and team integration documentation. Version pinning is a documented contract; production adoption was not validated.

## Deliberately omitted

Forks, unrelated family applications, small scaffolds, and repositories without enough reviewed evidence are not presented as authored accomplishments. More projects do not automatically make a stronger portfolio. HairAlchemy and other applications can be evaluated later if they add distinct, demonstrable skills.

## Status vocabulary

- **Source implementations:** relevant software exists in inspected source; completeness and production operation are not implied.
- **Application in development:** meaningful application code and structure exist, with unresolved end-to-end verification.
- **Frontend prototype:** interface and interaction source are available; backend completion and real usage are unverified.
- **Reusable source package:** shared presentation code/documentation exists; release and production use require separate checks.
- **Verified live deployment:** reserve for an inspected working URL and deployment evidence. No featured project receives this label in this review.

## Contact and future evidence

Tiffany approved tifflegg93@gmail.com as the public employer contact email on October 14, 2026; it is now the primary contact link, alongside GitHub. No phone, home address or resume PDF was published. The next useful upgrade is sanitized screenshots from a verified running application. A fictional service request traced across screens would demonstrate operational reasoning; label manual handoffs and do not imply an automated integration.

## Verification limits

The portfolio's static content and local references are checked by `scripts/check.py`. This is not a security or accessibility certification. Source application tests and deployments were not run. Browser QA requires an available supported browser-control skill; this managed environment does not expose it. No browser screenshot or visual-render validation is claimed.
