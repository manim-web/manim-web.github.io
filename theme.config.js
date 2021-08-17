export default {
  github: 'https://github.com/manim-web/manim-web', // GitHub link in the navbar
  docsRepositoryBase:
    'https://github.com/manim-web/manim-web.github.io/blob/master', // base URL for the docs repository
  titleSuffix: '',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Hugo SALOU.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: <span>Manim Web: Mathematical Animation Engine, for the web</span>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Manim Web: Mathematical Animation Engine, for the web"
      />
      <meta
        name="og:title"
        content="Manim Web: Mathematical Animation Engine, for the web"
      />
      <meta
        name="google-site-verification"
        content="J7lM49tFJ8e1d0Qte2uweuO9VkJgRIJ0SKyg89qfO-A"
      />
    </>
  ),
};
