import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import axios from 'axios'

Vue.config.performance = true
Vue.use(CoreuiVue)

axios.defaults.baseURL = 'https://stack-attack-bed.herokuapp.com/'

new Vue({
  el: '#app',
  router,
  icons,
  template: '<App/>',
  components: {
    App
  },
})