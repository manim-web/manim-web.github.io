const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  mdxOptions: {},
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
});

/**
 * @type {import('next').NextConfig}
 */
const config = {};

module.exports = withNextra(config);
