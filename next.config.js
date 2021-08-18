const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  mdxOptions: {},
  unstable_staticImage: true,
});

/**
 * @type {import('next').NextConfig}
 */
const config = {};

module.exports = withNextra(config);
