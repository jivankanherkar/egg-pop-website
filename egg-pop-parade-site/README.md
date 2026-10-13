# Egg Pop Parade — Official Website

A responsive, multi-route game website using the supplied gameplay screenshots. Lightweight vanilla JavaScript frontend, CSS, and a Node.js built-in HTTP server/API. No third-party runtime dependencies.

## Run locally

Requires Node.js 20+.

```bash
npm start
```

Open http://localhost:4173. The server serves the frontend and exposes optional JSON endpoints:

- `GET /api/game`
- `GET /api/worlds`
- `GET /api/features`
- `GET /api/faq`
- `POST /api/contact` (returns 501 until delivery is configured)

## Routes

`/`, `/about`, `/worlds`, `/features`, `/how-to-play`, `/faq`, `/contact`, `/terms`, `/privacy`; unknown routes show a branded 404.

## Central configuration

Edit `config.js` only for game links, support email, socials, analytics toggle, and canonical URL. All Play CTAs use `PLAY_STORE_URL`. Social links are inert/disabled until configured. Analytics is disabled.

## Assets

`public/assets/` contains the uploaded game screenshots. These screenshots are reused without distorting their aspect ratio. Some world themes have no distinct uploaded background artwork in the provided set; cards identify the intended world, but reuse available screenshots as illustrative placeholders. Replace those image references with actual world assets when available.

## Contact and legal status

The contact form validates in the browser but clearly reports that delivery is not connected. Terms and Privacy pages are drafts with explicit placeholders. Complete and obtain appropriate review before publishing. Do not treat these templates as legal advice.

## Production checklist

- Set `CONFIG.CANONICAL_URL` and update canonical/OG URLs in `index.html`.
- Add actual world-specific art and favicon/social preview assets.
- Configure real support email and social profile URLs.
- Connect contact submission to a secured backend/email provider before claiming delivery.
- Review legal copy and fill developer/company/jurisdiction/effective-date placeholders.
- Run accessibility, browser, and deployment QA in the target hosting environment.
