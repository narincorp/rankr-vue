import Vue = require('vue')
import * as vts from 'vue-typescript-component'

import * as LayoutHeader from './layout/header.vue'
import * as LayoutFooter from './layout/footer.vue'

import * as SectionIntro from './sections/intro.vue'
import * as SectionAnalytics from './sections/analytics.vue'
import * as SectionRank from './sections/rank.vue'

// import IntroChart from './components/chart/intro-chart';

@vts.component({components: {LayoutFooter, LayoutHeader, SectionIntro, SectionAnalytics, SectionRank}})
export default class App extends Vue {

}