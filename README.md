# Turbo Tyres Hull

The original static website for [Turbo Tyres Hull](https://www.turbotyreshull.com/), hosted by GitHub Pages from the root of `main` in `TurboTyres/TurboTyres`.

## Run locally

No package installation or build step is required. From the repository root:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/. The local server does not automatically use `404.html` for missing URLs; open that file directly to preview it. GitHub Pages serves it for missing pages after publishing.

## Pages and assets

- `index.html`: homepage with services, how it works, the van, reviews, areas and contact details.
- `mobile-tyres-{hull,driffield,scarborough,beverley}.html`: individual service-area pages.
- `mobile-tyre-fitting.html`: general advertising destination.
- `404.html`: branded missing-page response, with root-relative assets for nested URLs.
- `css/site.css`: the only stylesheet. All seven pages share its header, hero, sections, reviews, footer and the phone-width Call/WhatsApp bar. No page needs JavaScript.
- `fonts/archivo/`: self-hosted Archivo variable font (widths 100–125%, weights 400–800, Latin subset) with its SIL Open Font License. Headings use the 125% width.
- `favicon.ico` (16, 32 and 48px), `icon.svg` and `apple-touch-icon.png`: site icon, a tyre tread in amber and charcoal. `images/logo-512.png` is the same mark for structured data.
- `images/van-*.jpg`: Craig's van photos, also used as Google Ads image assets. `images/og-van.jpg` is the share preview.
- `sitemap.xml` and `robots.txt`: public indexing information. Update the sitemap when adding or removing public pages.
- `CNAME`: production domain. Preserve it unless an intentional domain change is approved.

The original 2023 theme files (`css/main.css`, `css/bootstrap.min.css`, `css/animations.css`, `css/fonts.css`, `js/`, `img/`, `fonts/` other than `archivo/`, and the old images in `images/faces`, `images/gallery` and `images/icons`, plus `images/logo.png` and `images/slide01.jpg`) are no longer referenced by any page. They are kept until their removal is approved.

## Editing and checking

Keep phone numbers, factual services and contact details consistent across all six public pages. The WhatsApp links use the mobile number with a pre-filled message. Service areas are not separate branch addresses. Confirm availability, prices and timing by phone; do not invent guarantees or testimonials.

Before publishing, check direct page URLs, local assets, titles, descriptions, canonicals, sitemap entries and phone links. Test navigation with mouse and keyboard, the Call and WhatsApp links, and layouts at 320, 375 and 1280px. Test the 404 response on the hosted site after deployment.

GitHub Pages publishes changes merged into `main`. Prepare changes on a review branch and obtain publishing approval before merging. Creating a draft or preview is separate from deploying the site or activating Google Ads.
