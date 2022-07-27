import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import router from './router'
import './mixins'
Vue.prototype.$bus = new Vue()
import store from './store'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

