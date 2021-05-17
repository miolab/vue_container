import Vue from 'vue'
import App from './App.vue'
import Counter from './Counter.vue'
import AxiosSample from './axios_sample/AxiosSample.vue'
import Forms from './components/Forms.vue'

Vue.config.productionTip = false

Vue.component('Forms', Forms);

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  el: '#counter',
  render: h => h(Counter),
})

new Vue({
  render: h => h(AxiosSample),
}).$mount('#axios-sample')
