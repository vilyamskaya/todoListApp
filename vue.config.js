module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/todoListApp/' : '/',
  pwa: {
    name: 'Твой список задач',
    themeColor: '#fff8f2',
    msTileColor: '#fff8f2',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#fff8f2',
    manifestOptions: {
      display: 'standalone',
      background_color: '#fff8f2',
    },
    workboxPluginMode: 'GenerateSW',
  },
}
