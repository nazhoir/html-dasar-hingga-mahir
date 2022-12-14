// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/dracula');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Belajar HTML',
  tagline: 'Belajar HTML dari dasar hingga mahir',
  url: 'https://html-dasar.athia.web.id//',
  baseUrl: '/',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

 
  organizationName: 'html-dasar-hingga-mahir', // Usually your GitHub org/user name.
  projectName: 'html', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath:"/",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/nazhoir/html-dasar-hingga-mahir/tree/master',
        },

        blog:false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
          srcDark:"img/logo-dark.png",
        },
        
        items: [
          {
            href: 'https://github.com/nazhoir/html-dasar-hingga-mahir/',
            label: 'GitHub',
            position: 'right',
          },
          {
            href:'https://saweria.com/nazhoir',
            label:'Saweria',
            position:'right',
          },
          {
            href: 'https://www.buymeacoffee.com/nazhoir',
            label: 'Buy Me Coffe',
            position: 'right',
          },
          {
            href: 'https://www.buymeacoffee.com/nazhoir',
            label: 'Trakteer',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tutorial Lainnya',
            items: [
              {
                label: 'HTML',
                to: '/',
              },
            ],
          },
          {
            title:'Donasi',
            items: [
              {
                href:'https://saweria.com/nazhoir',
                label:'Saweria',
              },
              {
                href: 'https://www.buymeacoffee.com/nazhoir',
                label: 'Buy Me Coffe',
              },
              {
                href: 'https://www.buymeacoffee.com/nazhoir',
                label: 'Trakteer',
              },
            ]
          },        
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/nazhoir/',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/nazhoir_/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/nazhoir',
              },
            ],
          },
        ],
        copyright: `Hak Cipta ?? ${new Date().getFullYear()} Nazhoir. Dibuat dengan ???? di Situbondo`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
