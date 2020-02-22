import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import axios from 'axios'
import store from './store'

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
  mounted() {
    let currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      console.log(JSON.parse(currentUser))
      store.authenticateUser(JSON.parse(currentUser));
    }
  }
})