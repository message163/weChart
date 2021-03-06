import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/flexible_css.debug'
import '@/assets/css/flexible.debug'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/mock'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
