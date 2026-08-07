// home-data.ts — Content data for the home page.
//
// This file is the injection contract between astro-golden-template and
// transformerWorker. The template's src/pages/index.astro imports these
// fields and renders them. transformerWorker Step 4 OVERWRITES this file
// with resolved content from the scraped site (LLM-generated JSON written
// as a TypeScript module).
//
// The placeholder values below ensure the template builds standalone
// (npm run dev / npm run build) before the worker runs.

export const homeData = {
  // Navbar
  logo: 'Logo',
  navLinks: '',
  navCta: `<a href="#contact" class="px-4 py-2 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">Get Started</a>`,

  // Hero
  heroHeadline: 'Your Headline Here',
  heroSubheadline: 'Your subheadline goes here.',
  heroCtas: '',

  // Features
  featuresTitle: 'Our Features',
  featuresSubtitle: '',
  featureCards: '',

  // About
  aboutContent: '',

  // Contact
  contactTitle: 'Get in Touch',
  contactContent: '',

  // Footer
  footerContent: '',
  footerLinks: '',
  copyright: '',
};
