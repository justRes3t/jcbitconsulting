# JCBIT Consulting Website

A static marketing site built with [Astro](https://astro.build/) and configured for deployment to [Cloudflare Pages](https://pages.cloudflare.com/).

## Quick Start

### Prerequisites
- Node.js 18+ and npm (or pnpm/yarn)

### Install & Run Locally

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:4321)
npm run dev
```

### Build for Production

```bash
npm run build
```

The built output will be in the `dist/` directory.

### Preview the Production Build

```bash
npm run preview
```

---

## Deploy to Cloudflare Pages

### Option A: Connect via Git (Recommended)

1. Push this repository to GitHub or GitLab.
2. Go to **Cloudflare Dashboard → Pages → Create a project → Connect to Git**.
3. Select your repository.
4. Set the build configuration:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `18` (set under Environment Variables → `NODE_VERSION = 18`)
5. Click **Save and Deploy**.

Cloudflare will automatically rebuild and deploy whenever you push to your main branch.

### Option B: Direct Upload

```bash
# Install Wrangler CLI
npm install -g wrangler

# Authenticate
wrangler login

# Build the site
npm run build

# Deploy
wrangler pages deploy dist --project-name=jcbit-consulting
```

---

## Project Structure

```
jcbit-consulting/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro        # Home
│   │   ├── services.astro     # Services
│   │   ├── about.astro        # About
│   │   └── contact.astro      # Contact
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

## Contact Form

The contact form on `/contact` currently submits to `/api/contact` as a placeholder. To make it functional, you have a few options:

- **Cloudflare Worker**: Create a Worker that handles the POST, sends an email (e.g., via Mailgun, SendGrid, or Cloudflare Email Routing), and returns a response.
- **Formspree / Formcarry**: Change the `action` attribute to your form endpoint URL (e.g., `https://formspree.io/f/YOUR_ID`).
- **Cloudflare Pages Functions**: Add a `functions/api/contact.ts` file to handle submissions server-side.

---

## Customization Checklist

- [ ] Replace placeholder phone number and email in `contact.astro` and `Footer.astro`
- [ ] Update team member names and bios in `about.astro`
- [ ] Replace the trust-bar stats on the home page with real numbers
- [ ] Update `site` in `astro.config.mjs` to your actual domain
- [ ] Add your logo SVG or image to replace the text-based logo
- [ ] Connect the contact form to a real backend
- [ ] Add a `robots.txt` and `sitemap.xml` (Astro has a `@astrojs/sitemap` integration)

---

## Tech Stack

- **Astro 5** — static site generator, zero JS shipped by default
- **Pure CSS** — scoped component styles + global design tokens
- **Cloudflare Pages** — edge-deployed static hosting
