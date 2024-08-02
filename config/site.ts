import { externalLinks } from './external-links.mjs';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'ShoCoffeeBar',
  description: 'ShoCoffeeBar',
  mainNav: [
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Menu',
      href: externalLinks.menuLink,
    },
    {
      title: 'Blog',
      href: '/blog'
    },
    {
      title: 'Contact',
      href: '/contact',
    },
    {
      title: 'Feedback',
      href: '/feedback',
    },
    {
      title: 'Join The Team',
      href: '/join',
    }
  ],
};
