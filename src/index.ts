import vue = require('vue');
import appVue = require('./app.vue');
import index from './router/index';

new vue({
  index,
  render: (h) => { h(appVue); },
}).$mount('#app');
