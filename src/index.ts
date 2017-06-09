import * as Vue from 'vue';
import * as App from './app.vue';
import router from './router/router';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
