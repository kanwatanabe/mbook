import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import router from './routes/route'
import store from './store/store.js'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

new Vue({
  store,
  router,
  axios,
  vuetify,
  render: h => h(App)
}).$mount('#app')
