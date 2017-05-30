import Vue = require('vue')
import * as vts from 'vue-typescript-component'

@vts.component()
export default class SectionIntro extends Vue {
    name = 'section-intro'
}