module.exports = {
    globDirectory: './',
    globPatterns: [
      '**/*.{html,js,css,png,jpg,svg}'
    ],
    swDest: 'sw.js',
    runtimeCaching: [
      {
        urlPattern: /\.(?:html|js|css)$/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'pages-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 24 * 60 * 60,
          },
        },
      },
    ],
  };
  