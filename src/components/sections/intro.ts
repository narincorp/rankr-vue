import Vue = require('vue')
import * as vts from 'vue-typescript-component'
import axios from 'axios'
import IntroChart from '../chart/intro-chart'

@vts.component({components: {IntroChart}})
export default class SectionIntro extends Vue {

    name = 'section-intro';

    isInitialDataLoaded = false;

    chartLabels: Array<string> = [];
    chartData: Array<number> = [];
    chartDataCount: Array<number> = [];

    chartRenderOptions: any = {
        title: {
            display: true,
            text: '최근 1시간 검색어 평균 통계'
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
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
    };

    chartRenderData: any = {
        labels: [],
        datasets: [{
            type: 'bar',
            label: "전체 순위",
            data: [],
            backgroundColor: '#E0F2F1',
            borderColor: '#B2DFDB',
            borderWidth: 2,
            reverse: true
        }, {
            label: '전체 진입값',
            data: [],
            backgroundColor: '#ECEFF1',
            borderColor: '#CFD8DC',
            borderWidth: 2,
            // Changes this dataset to become a line
            type: 'line'
        }]
    };


    async created() {

        let recentResponse = await
            axios.get("http://localhost:3000/analytics/recent");

        switch (recentResponse.status) {
            case 200:

                for (let data of recentResponse.data) {
                    this.chartLabels.push(data.title);
                    this.chartData.push(data.rank_avg);
                    this.chartDataCount.push(data.count / 10);
                }

                this.chartRenderData.labels = this.chartLabels;

                this.chartRenderData.datasets[0].data = this.chartData;
                this.chartRenderData.datasets[1].data = this.chartDataCount;

                this.isInitialDataLoaded = true;

                break;
        }
    }
}