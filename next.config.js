const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
  images: {
    domains: ['picsum.photos'],
  },
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: `/`,
      destination: `/1`,
    },
  ],
});
