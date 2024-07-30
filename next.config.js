/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/menu',
            destination: 'https://utfs.io/f/83b6086e-f498-4a0f-9024-8413de091645-a0646z.pdf',
            permanent: false,
            basePath: false
          },
        ]
      },
}

module.exports = nextConfig
