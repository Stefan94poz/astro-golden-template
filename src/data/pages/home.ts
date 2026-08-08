// home.ts — default block plan for the home page.
//
// transformerWorker's Layout Planner + Block Content Filler OVERWRITE this
// file per job. The placeholder plan below ensures the template builds
// standalone (npm run dev / npm run build) before the worker ever runs.
import type { BlockInstance } from '../../lib/blocks';

export const homeBlocks: BlockInstance[] = [
  {
    id: 'navbar',
    component: 'navbar',
    props: {
      logo: 'Logo',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
      ],
      cta: { label: 'Get Started', href: '#contact' },
    },
  },
  {
    id: 'hero',
    component: 'hero',
    variant: 'centered',
    props: {
      headline: 'Your Headline Here',
      subheadline: 'Your subheadline goes here.',
      ctas: [{ label: 'Get Started', href: '#contact', variant: 'primary' }],
    },
  },
  {
    id: 'features',
    component: 'features',
    variant: 'grid-cards',
    props: {
      title: 'Our Features',
      items: [
        { title: 'Quality', description: 'We never compromise on quality.' },
        { title: 'Speed', description: 'Fast, reliable delivery every time.' },
        { title: 'Support', description: 'We are here when you need us.' },
      ],
    },
  },
  {
    id: 'contact',
    component: 'contact',
    variant: 'centered',
    props: {
      title: 'Get in Touch',
      description: 'Have questions? Reach out — we would love to hear from you.',
    },
  },
  {
    id: 'footer',
    component: 'footer',
    props: {
      copyright: '',
      links: [],
    },
  },
];
