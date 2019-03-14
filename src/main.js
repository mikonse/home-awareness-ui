import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

import router from './router'

import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.green,
    secondary: colors.lightGreen,
    accent: '#fd7400'

  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
