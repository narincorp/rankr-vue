import Vue = require('vue');
import VueRouter = require('vue-router');
import * as App from "../pages/index.vue";
import * as Keyword from "../pages/keyword.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: App
        },
        {
            path: '/keyword',
            component: Keyword
        }
    ]
});

export default router;