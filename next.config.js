/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'zenphoto.mrweber.ch',
              port: '',
              pathname: '**',
            },
          ],
        },
      }

module.exports = nextConfig
