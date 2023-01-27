module.exports = {
  "title": "testing map",
  "tagline": "The tagline of my site",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "your-org",
  "projectName": "docusaurus",
  "themeConfig": {
    "navbar": {
      "title": "testing map",
      "logo": {
        "alt": "testing map",
        "src": "img/logo.svg"
      },
      "items": []
    },
    "footer": {
      "style": "dark",
      "links": [],
      "copyright": "Copyright © 2023."
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "sidebarPath": require.resolve('./sidebars.js')
        },
        "theme": {
          "customCss": require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  "plugins": []
};