import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import 'material-design-icons/iconfont/material-icons.css'
import 'typeface-roboto/index.css'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDK1bVAp3Hr85KCrFR9xGUiI9Sm-J5P-fY',
    libraries: 'places', 
  },

})