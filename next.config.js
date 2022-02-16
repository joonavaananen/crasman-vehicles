const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
  experimental: {
    styledComponents: true,
  },
  images: {
    domains: ['picsum.photos'],
  },
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: `/`,
      destination: `/vehicles/1`,
    },
    {
      source: '/:route(\\d{1,})',
      destination: '/vehicles/:route',
    },
  ],
  swcMinify: true,
});
