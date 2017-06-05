import Vue = require('vue');
import VueRouter = require('vue-router');
import * as App from "../pages/index.vue";
import * as Keyword from "../pages/keyword.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: App,
    }, {
        name: 'keyword',
        path: '/keyword/:search',
        component: Keyword
    }
];

const router = new VueRouter({
    routes: routes
});

export default router;