import vue = require('vue');
import * as vts from 'vue-typescript-component';
import analyticsChart from '../chart/analytics-chart';
import httpClient from '../../handler/http-client';

@vts.component({ components: { analyticsChart } })
export default class SectionAnalytics extends vue {

  name = 'section-analytics';
  isInitialDataLoaded = false;

  chartData: any = {};

  datasets: any[] = [];

  async created() {
    httpClient.get('/analytics/today')
      .then((recentResponse) => {
        for (const data of recentResponse.data) {
          const orgCount = data.count;
          if (data.count > 50) {
            data.count = 50;
          }

          const randomColors: Number[] = [];
          randomColors.push(SectionAnalytics.getRandomHex());
          randomColors.push(SectionAnalytics.getRandomHex());
          randomColors.push(SectionAnalytics.getRandomHex());

          const backgroundColor =
            `rgba(${randomColors[0]}, ${randomColors[1]}, ${randomColors[2]}, 0.3)`;
          const borderColor =
            `rgba(${randomColors[0]}, ${randomColors[1]}, ${randomColors[2]}, 0.5)`;

          const label = `${data.title} (평균 순위 : ${data.rank_avg})(랭킹 진입 누적수 : ${orgCount})`;

          this.datasets.push({
            backgroundColor,
            borderColor,
            label,
            fill: false,
            lineTension: 0.1,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 1,
            data: [{ x: data.createdAt, y: data.rank_avg, r: data.count }],
          });

        }

        this.chartData = {
          animation: {
            duration: 0,
          },
          datasets: this.datasets,
        };

        this.isInitialDataLoaded = true;
      }).catch((err) => {
        console.log(err);
      });
  }

  private static getRandomHex(): number {
    return Math.floor(Math.random() * 255);
  }

}
