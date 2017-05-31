import {Bar, mixins} from 'vue-chartjs'
const { reactiveProp } = mixins;

export default Bar.extend({
    mixins: [reactiveProp],
    props: ["chartData", "options"],
    mounted () {
        this.renderChart(this.chartData, this.options)
    }
})
