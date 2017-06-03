import Vue = require('vue')
import * as vts from 'vue-typescript-component'

@vts.component()
export default class LayoutHeader extends Vue {
    name = 'layout-header';

    searchKeyword: string;

    moveToSearchPage() {

    }
}