import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import InlineSvg from 'vue-inline-svg'
import '@/assets/scss/global.scss'

createApp(App).use(store).component('inline-svg', InlineSvg).mount('#app')
