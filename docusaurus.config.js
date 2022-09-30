// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/dracula');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Belajar HTML',
  tagline: 'Belajar HTML dari dasar hingga mahir',
  url: 'https://belajar-html-dasar-sampai-mahir.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

 
  organizationName: 'nazhoir', // Usually your GitHub org/user name.
  projectName: 'html', // Usually your repo name.

  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
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
            'https://github.com/nazhoir/html/tree/master/',
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
        // title: 'Belajar HTML',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
          srcDark:"img/logo-dark.png",
        },
        
        items: [
          {
            href: 'https://github.com/nazhoir/html',
            label: 'GitHub',
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
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'HTML',
                to: '/docs/intro',
              },
            ],
          },

          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/nazhoir_/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nazhoir/',
              },
            ],
          },
        ],
        copyright: `Hak Cipta © ${new Date().getFullYear()} Nazhoir. Dibuat dengan 💖 di Situbondo`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
