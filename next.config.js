const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  mdxOptions: {},
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
});

module.exports = withNextra();
