import { externalLinks } from './config/external-links.mjs';

/** @type {import('next').NextConfig} */


const nextConfig = {
    async redirects() {
        return [
          {
            source: '/menu',
            destination: externalLinks.menuLink,
            permanent: false,
            basePath: false
          },
        ]
      },
}

export default nextConfig
