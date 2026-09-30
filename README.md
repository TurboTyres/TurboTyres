# Turbo Tyres Hull

The original static website for [Turbo Tyres Hull](https://www.turbotyreshull.com/), hosted by GitHub Pages from the root of `main` in `TurboTyres/TurboTyres`.

## Run locally

No package installation or build step is required. From the repository root:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/. The local server does not automatically use `404.html` for missing URLs; open that file directly to preview it. GitHub Pages serves it for missing pages after publishing.

## Pages and assets

- `index.html`: existing homepage, services, gallery, reviews and contact details.
- `mobile-tyres-{hull,driffield,scarborough,beverley}.html`: individual service-area pages.
- `mobile-tyre-fitting.html`: general advertising destination.
- `404.html`: branded missing-page response, with root-relative assets for nested URLs.
- `css/landing-pages.css`: shared landing-page layout and homepage coverage links.
- `css/main.css`, `css/bootstrap.min.css`, `css/animations.css`, `css/fonts.css`: existing theme styles.
- `js/compressed.js`, `js/main.js`, `js/vendor/modernizr-2.6.2.min.js`: legacy homepage runtime. The landing pages and 404 page require no JavaScript.
- `sitemap.xml` and `robots.txt`: public indexing information. Update the sitemap when adding or removing public pages.
- `CNAME`: production domain. Preserve it unless an intentional domain change is approved.

The homepage retains its legacy bundled plugins for the menu, gallery and testimonials. Removing the unused builder and standalone plugin copies does not upgrade that runtime. Preserve third-party notices when changing dependencies.

## Editing and checking

Keep phone numbers, factual services and contact details consistent across all six public pages. Service areas are not separate branch addresses. Confirm availability, prices and timing by phone; do not invent guarantees or testimonials.

Before publishing, check direct page URLs, local assets, titles, descriptions, canonicals, sitemap entries and phone links. Test the homepage menu with mouse and keyboard, gallery and reviews, landing-page navigation, and layouts at phone and desktop widths. Test the 404 response on the hosted site after deployment.

GitHub Pages publishes changes merged into `main`. Prepare changes on a review branch and obtain publishing approval before merging. Creating a draft or preview is separate from deploying the site or activating Google Ads.
