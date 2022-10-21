import Vue from 'vue'
import App from './App.vue'
// import Vuex from 'vuex'

// Vue.use(Vuex) // quero usar o Vuex de forma global
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
