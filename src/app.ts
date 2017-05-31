import Vue = require('vue')
import * as vts from 'vue-typescript-component'

import * as LayoutHeader from './components/layout/header.vue'
import * as LayoutFooter from './components/layout/footer.vue'

import * as SectionIntro from './components/sections/intro.vue'
import * as SectionAnalytics from './components/sections/analytics.vue'
import * as SectionRank from './components/sections/rank.vue'

// import IntroChart from './components/chart/intro-chart';

@vts.component({components: {LayoutFooter, LayoutHeader, SectionIntro, SectionAnalytics, SectionRank}})
export default class App extends Vue {

}