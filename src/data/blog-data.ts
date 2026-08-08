// blog-data.ts — Content data for blog list + detail pages.
//
// transformerWorker OVERWRITES this file with resolved blog post data from
// the scraped site. The placeholder values below ensure the template builds
// standalone.
import type { ImageRef } from '../lib/blocks';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  content?: string[]; // paragraphs — rendered as real <p> tags, no raw HTML
  author?: string;
  authorRole?: string;
  image?: ImageRef;
}

export const blogData: {
  title: string;
  subtitle: string;
  navLinks: { label: string; href: string }[];
  posts: BlogPost[];
} = {
  title: 'Blog',
  subtitle: 'Insights, updates, and articles from our team.',
  navLinks: [],
  posts: [
    {
      slug: 'sample-post-1',
      title: 'How We Built Our Product',
      date: '2024-01-15',
      excerpt: 'A look behind the scenes at our development process and the decisions that shaped our product.',
      category: 'Product',
    },
    {
      slug: 'sample-post-2',
      title: 'Customer Success Story',
      date: '2024-01-08',
      excerpt: 'How one of our customers achieved remarkable results using our platform in just 30 days.',
      category: 'Case Study',
    },
    {
      slug: 'sample-post-3',
      title: 'Industry Insights for 2024',
      date: '2024-01-02',
      excerpt: 'Our analysis of the key trends shaping the industry this year and what they mean for you.',
      category: 'Insights',
    },
  ],
};
