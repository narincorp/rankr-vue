import Vue = require('vue')
import App = require('./app.vue')
import router from './router/index';

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');