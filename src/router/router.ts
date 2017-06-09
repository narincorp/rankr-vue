import vue = require('vue');
import vueRouter = require('vue-router');
import * as App from '../pages/index.vue';
import * as Keyword from '../pages/keyword.vue';

vue.use(vueRouter);

const routes = [
  {
    path: '/',
    component: App,
  }, {
    name: 'keyword',
    path: '/keyword/:search',
    component: Keyword,
  },
];

const router : vueRouter = new vueRouter({
  routes,
});

export default router;
