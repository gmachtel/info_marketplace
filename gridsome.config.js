// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'THREEFOLD',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : ''),
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/docs/', title: 'Now' }
      ]
    },
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/docs/',
              '/docs/why-threefold-now/',
              '/docs/how-threefold-now/',
            ]
          },
          {
            title: 'Decentralized Cloud',
            items: [
              '/docs/tfgrid/',		                  
            ]
          },
          {
            title: 'Decentralized Me',
            items: [
              '/docs/digitalme/',
              '/docs/digitalme-id/',
              '/docs/crystaltwin/',	
            ]
          },
          {
            title: 'Decentralized We',
            items: [
              '/docs/decentralized-we-intro/',
              '/docs/publishing-tool/',
              '/docs/video-sharing/',
              '/docs/video-conf/',
              '/docs/discourse/',
              '/docs/virtual-spaces/',
              '/docs/knowledge-base/',
              '/docs/commento/',
            ]
          },
          {
            title: 'Decentralized Office',
            items: [
              '/docs/decentralized-office-intro/',
              '/docs/dmcircles/',
              '/docs/onlyoffice/',
              '/docs/file-browser/',
              '/docs/dmcollab/',
              '/docs/mattermost/',
              '/docs/dmcustomers/',
            ]
          },
          {
            title: 'Decentralized Developer',
            items: [
              '/docs/decentralized-dev-intro/',
              '/docs/gitea/',
              '/docs/zeroci/',
              '/docs/serverless/',	
	            '/docs/gridsome/',
            ]
          },
          {
            title: 'Blockchain Solutions',
            items: [
              '/docs/blockchain-solutions-intro/',
              '/docs/dash/',	
              '/docs/digibyte/',
              '/docs/elrond/',
              '/docs/harmony/',
              '/docs/matic/',
              '/docs/neo/',
              '/docs/skalelabs/',
              '/docs/tomochain/',	
              '/docs/waykichain/',
              '/docs/upcoming-projects/',
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {  
      }
    }

  ]
}
