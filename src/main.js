import Vue from 'vue'
import App from './App.vue'
import Counter from './Counter.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(Counter),
}).$mount('#counter')
