module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/todoListApp/' : '/',
  pwa: {
    name: 'to do',
    themeColor: '#26262d',
    msTileColor: '#26262d',
    appleMobileWebAppTitle: 'to do',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#26262d',
    manifestOptions: {
      display: 'standalone',
      background_color: '#26262d',
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
