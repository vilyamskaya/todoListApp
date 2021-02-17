import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import mixin from './mixins/vue-mq'

Vue.mixin(mixin)
Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
