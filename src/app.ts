import Vue = require('vue')
import * as vts from 'vue-typescript-component'

import * as LayoutHeader from './components/layout/header.vue'
import * as LayoutFooter from './components/layout/footer.vue'

import * as index from './pages/index.vue';
import * as keyword from './pages/keyword.vue';


@vts.component({components: {LayoutFooter, LayoutHeader, index, keyword}})
export default class App extends Vue {

}