import Vue = require('vue')
import * as vts from 'vue-typescript-component'
import AnalyticsChart from '../chart/analytics-chart'
import axios from 'axios'

@vts.component({components: {AnalyticsChart}})
export default class SectionAnalytics extends Vue {

    name = 'section-analytics';
    isInitialDataLoaded = false;

    chartData: any = {};

    datasets: Array<any> = [];

    async created() {

        let recentResponse = await
            axios.get("http://localhost:3000/analytics/today");

        switch (recentResponse.status) {
            case 200:

                for (let data of recentResponse.data) {
                    let orgCount = data.count;
                    if (data.count > 50) {
                        data.count = 50;
                    }

                    let randomColors: Array<Number> = [];
                    randomColors.push(SectionAnalytics.getRandomHex());
                    randomColors.push(SectionAnalytics.getRandomHex());
                    randomColors.push(SectionAnalytics.getRandomHex());

                    let backgroundColor = `rgba(${randomColors[0]}, ${randomColors[1]}, ${randomColors[2]}, 0.3)`;
                    let borderColor = `rgba(${randomColors[0]}, ${randomColors[1]}, ${randomColors[2]}, 0.5)`;

                    let label = `${data.title} (평균 순위 : ${data.rank_avg})(랭킹 진입 누적수 : ${orgCount})`;

                    this.datasets.push({
                        label: label,
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: backgroundColor,
                        borderColor: borderColor,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBorderWidth: 2,
                        pointRadius: 2,
                        pointHitRadius: 1,
                        data: [{x: data.createdAt, y: data.rank_avg, r: data.count}]
                    });

                }

                this.chartData = {
                    animation: {
                        duration: 0
                    },
                    datasets: this.datasets
                };

                this.isInitialDataLoaded = true;

                break;
        }
    }

    private static getRandomHex(): number {
        return Math.floor(Math.random() * 255);
    }

}