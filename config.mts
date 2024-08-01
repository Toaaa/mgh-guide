import { defineConfig, HeadConfig } from 'vitepress'

const umamiScript: HeadConfig = ["script", {
  defer: "true",
  src: "https://a.galaxycrow.de/script.js",
  "data-website-id": "bd74b547-3df6-4fd7-8c4d-0419f69ea8a6"
}]

const baseHeaders: HeadConfig = ['link', { rel: 'icon', href: '/favicon.ico' }]

const headers = [baseHeaders, umamiScript]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "MGH Server Guide",
  description: "Comprehensive guide to the Midnight Ghost Hunt Dedicated Server 👻",
  head: headers,
  cleanUrls: true,
  ignoreDeadLinks: true,
  rewrites: {
    'source/:page': 'destination/:page'
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    // de: {
    //   label: 'Deutsch',
    //   lang: 'de', // optional, will be added  as `lang` attribute on `html` tag
    //   link: '/de/' // default /de/ -- shows on navbar translations menu, can be external
    // }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/i/8a5d189d042482d800101866b8e4fb4356474713-Enhanced-SR.png',
    externalLinkIcon: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' }
    ],

    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Introduction / Getting Started', link: '/getting-started' },
          { text: 'Running on Windows', link: '/running-mgh-server-windows' },
          { text: 'Running on Linux', link: '/running-mgh-server-linux' },
          { text: 'Server files & directories', link: '/server-structure' },
          { text: 'Custom Rules', link: '/custom-rules' },
          { text: 'Command Line Launch Options', link: '/command-line-launch-options' },
          { text: 'Server Tools', link: '/server-tools' },
        ],
      }
    ],

    search: {
      provider: 'local'
    },

    // editLink: {
    //   pattern: 'https://github.com/Toaaa/mgh-guide/edit/main/:path',
    //   text: 'Edit this page on GitHub'
    // },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/Toaaa/mgh-guide' },
      { icon: 'discord', link: 'https://discord.gg/midnightghosthunt' }
    ],

    footer: {
      message: 'This site may include trademarks of their respective owners. All trademarks are the property of their owners and are used for identification purposes only. No endorsement or affiliation is implied.',
    }
  }
})
