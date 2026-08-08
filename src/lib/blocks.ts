// blocks.ts — The block contract between transformerWorker and this template.
//
// A page is now an ORDERED ARRAY of BlockInstance objects, not a fixed
// skeleton. The worker's "Layout Planner" LLM call decides which blocks to
// use, in what order, with what variant and props. PageAssembler.astro
// renders that array by dispatching to the matching Astro component.
//
// Every prop is OPTIONAL and every block component provides safe fallbacks —
// a malformed or partial block instance degrades gracefully instead of
// crashing the build. This is the core guarantee that replaces "the LLM
// writes raw markup" with "the LLM chooses from vetted components".

export type ImageRef = {
  /** Path under /public, e.g. "/hero-photo.jpg". Omit to use a fallback visual. */
  src?: string;
  alt: string;
  width?: number;
  height?: number;
};

export type LinkItem = {
  label: string;
  href: string;
  variant?: 'link' | 'primary' | 'secondary' | 'ghost';
};

export type IconRef = {
  /** Small inline SVG string OR a short emoji/glyph. Never raw arbitrary HTML blobs. */
  svg?: string;
  emoji?: string;
};

// ── Block type union ────────────────────────────────────────────────
export type BlockType =
  | 'navbar'
  | 'hero'
  | 'features'
  | 'gallery'
  | 'stats'
  | 'logo-cloud'
  | 'testimonials'
  | 'news-list'
  | 'cta'
  | 'prose'
  | 'contact'
  | 'footer';

export interface BlockInstance<TProps = Record<string, unknown>> {
  id: string;
  component: BlockType;
  /** Variant name — see BLOCK_VARIANTS below. Falls back to the first variant if omitted/unknown. */
  variant?: string;
  props: TProps;
}

// ── Variant catalog (also mirrored in worker/src/blockRegistry.ts) ──
export const BLOCK_VARIANTS: Record<BlockType, string[]> = {
  navbar: ['standard'],
  hero: ['centered', 'split-image-left', 'split-image-right', 'bg-image-overlay', 'minimal'],
  features: ['grid-cards', 'bento', 'icon-row', 'zigzag'],
  gallery: ['grid', 'masonry', 'strip'],
  stats: ['band'],
  'logo-cloud': ['row'],
  testimonials: ['grid', 'single-quote', 'carousel'],
  'news-list': ['list', 'grid'],
  cta: ['centered', 'split-image'],
  prose: ['standard'],
  contact: ['centered', 'split'],
  footer: ['standard'],
};

// ── Per-block prop shapes (documentation + worker prompt reference) ──

export interface NavbarProps {
  logo?: string;
  links?: LinkItem[];
  cta?: LinkItem;
}

export interface HeroProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  ctas?: LinkItem[];
  image?: ImageRef;
}

export interface FeatureItem {
  title: string;
  description?: string;
  icon?: IconRef;
  image?: ImageRef;
}
export interface FeaturesProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: FeatureItem[];
}

export interface GalleryProps {
  title?: string;
  subtitle?: string;
  images: ImageRef[];
}

export interface StatItem {
  value: string;
  label: string;
}
export interface StatsProps {
  title?: string;
  items: StatItem[];
}

export interface LogoCloudProps {
  title?: string;
  logos: ImageRef[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role?: string;
  avatar?: ImageRef;
}
export interface TestimonialsProps {
  title?: string;
  items: TestimonialItem[];
}

export interface NewsItem {
  title: string;
  date?: string;
  excerpt?: string;
  href?: string;
  image?: ImageRef;
}
export interface NewsListProps {
  title?: string;
  subtitle?: string;
  items: NewsItem[];
}

export interface CtaProps {
  title: string;
  subtitle?: string;
  ctas?: LinkItem[];
  image?: ImageRef;
}

export interface ProseProps {
  title?: string;
  /** Plain paragraphs — rendered as <p> tags, never raw arbitrary HTML. */
  paragraphs: string[];
}

export interface ContactProps {
  title?: string;
  description?: string;
  email?: string;
  phone?: string;
  address?: string;
  image?: ImageRef;
}

export interface FooterProps {
  copyright?: string;
  links?: LinkItem[];
}
