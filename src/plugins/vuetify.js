import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import VueMask from 'v-mask'

Vue.use(VueMask);
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
      },
});
