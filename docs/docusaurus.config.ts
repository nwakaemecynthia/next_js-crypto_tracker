import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Crypto Tracker',
  tagline: 'This is an awesome test',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nwakaemecynthia', // Usually your GitHub org/user name.
  projectName: 'next_js-crypto_tracker', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Crypto Tracker',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/nwakaemecynthia/next_js-crypto_tracker',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tutorial',
          items: [
            {
              label: 'Docs',
              to: '/docs/project-overview',
            },
          ]
        },
        {
          title: 'Project Information',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/nwakaemecynthia',
            },
          ],
        },
        {
          title: 'Contact Me',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/nwakaemecynthia',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/berryblings_',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/share/1A2SZ8FWUd/?mibextid=wwXIfr',
            },
            {
              label: 'X',
              href: 'https://x.com/berryblings_',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Crypto Tracker, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
