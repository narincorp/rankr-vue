import Vue = require('vue')
import * as vts from 'vue-typescript-component'

import * as SectionIntro from '../components/sections/intro.vue'
import * as SectionAnalytics from '../components/sections/analytics.vue'
import * as SectionRank from '../components/sections/rank.vue'


@vts.component({components: {SectionIntro, SectionAnalytics, SectionRank}})
export default class App extends Vue {

}