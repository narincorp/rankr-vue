import {Bar, mixins} from 'vue-chartjs'
const { reactiveProp } = mixins;

export default Bar.extend({
    mixins: [reactiveProp],
    props: ["chartData"],
    mounted () {
        this.renderChart(this.chartData, {
            title: {
                display: true,
                text: '최근 1시간 검색어 평균 통계'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    barPercentage: 1,
                    gridLines: {
                        display: true
                    },
                    ticks : {
                        autoSkip: false,
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: true
                    },
                    ticks: {
                        reverse: true,
                        beginAtZero: true,
                    }
                }]
            }
        })
    }
})
