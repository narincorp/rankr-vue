import vue = require('vue');
import * as vts from 'vue-typescript-component';

import * as LayoutHeader from './components/layout/header.vue';
import * as LayoutFooter from './components/layout/footer.vue';

@vts.component({ components: { LayoutFooter, LayoutHeader } })
export default class App extends vue {

}