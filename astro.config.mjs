import { defineConfig } from 'astro/config';

// For static output deployed to Cloudflare Pages, no adapter is needed.
// If you later need server-side rendering (SSR), install @astrojs/cloudflare:
//   npm install @astrojs/cloudflare
// Then uncomment the lines below.

// import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  // adapter: cloudflare(),
  site: 'https://jcbitconsulting.com',
});
