module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/todoListApp/' : '/',
  pwa: {
    name: 'todo list',
    themeColor: '#fff8f2',
    msTileColor: '#fff8f2',
    appleMobileWebAppTitle: 'todo list',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#fff8f2',
    manifestOptions: {
      display: 'standalone',
      background_color: '#fff8f2',
    },
    workboxPluginMode: 'GenerateSW',
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import '@/assets/scss/vars';
          @import '@/assets/scss/mixins';
        `,
      },
    },
  },
}
