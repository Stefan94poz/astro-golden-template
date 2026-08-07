import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Optimized for Cloudflare Workers / Pages (static output)
export default defineConfig({
  // Static output — fully compatible with Cloudflare Workers Assets.
  // Switch to 'server' + @astrojs/cloudflare adapter if you need SSR.
  output: 'static',

  // Compress HTML for smaller page transfers
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Split CSS per page so only what's needed is loaded
      cssCodeSplit: true,
      // Target modern browsers supported by Cloudflare's edge network
      target: 'es2022',
    },
  },

  // Image optimization — restrict remote sources to HTTPS only
  image: {
    domains: [],
    remotePatterns: [{ protocol: 'https' }],
  },
});
