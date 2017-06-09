import vue = require('vue');
import * as vts from 'vue-typescript-component';

@vts.component()
export default class LayoutHeader extends vue {
  name = 'layout-header';
  searchKeyword: string;
}
