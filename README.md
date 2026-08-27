# Fula Africa

Website for Fula Africa, a nonprofit working to end human trafficking in
the SADC region. Built with Next.js (App Router) and Tailwind CSS,
exported as static HTML/CSS/JS for shared hosting.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before going live

- **Contact form** — `src/lib/site.ts` has `formspreeEndpoint` set to a
  placeholder. Create a form at [formspree.io](https://formspree.io) and
  replace it with your real endpoint (`https://formspree.io/f/xxxxxxx`),
  or the contact form will not deliver messages.
- **Email/phone/bank details** — also in `src/lib/site.ts`, in one place
  so they're easy to update everywhere at once.

## Build & deploy (Afrihost / any shared cPanel hosting)

This project is configured for static export (`output: "export"` in
`next.config.ts`) — no Node.js server required on the host.

```bash
npm run build
```

This produces a static site in the `out/` folder. Upload the **contents**
of `out/` (not the folder itself) to `public_html` on Afrihost via
cPanel's File Manager or FTP. That's it — no build step runs on the
server.

To preview the exported site locally before uploading:

```bash
npx serve out
```

## Project structure

- `src/app/` — pages (`/`, `/about`, `/contact`, `/donate`)
- `src/components/` — Header, Footer, ContactForm, Counter
- `src/lib/site.ts` — shared site content (contact info, nav, bank details)
- `public/images/` — logo and photos pulled from the original site
