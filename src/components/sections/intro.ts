import vue = require('vue');
import * as vts from 'vue-typescript-component';
import httpClient from '../../handler/http-client';
import introChart from '../chart/intro-chart';

@vts.component({ components: { introChart } })
export default class SectionIntro extends vue {

  name = 'section-intro';

  isInitialDataLoaded = false;

  chartLabels: string[] = [];
  chartData: number[] = [];
  chartDataCount: number[] = [];

  chartRenderData: any = {
    labels: [],
    datasets: [{
      type: 'bar',
      label: '평균 순위',
      data: [],
      backgroundColor: '#E0F2F1',
      borderColor: '#B2DFDB',
      borderWidth: 2,
      reverse: true,
    }, {
      label: '평균 진입값',
      data: [],
      backgroundColor: '#ECEFF1',
      borderColor: '#CFD8DC',
      borderWidth: 2,
      // Changes this dataset to become a line
      type: 'line',
    }],
  };


  async created() {

    httpClient.get('/analytics/recent')
      .then((recentResponse) => {
        for (const data of recentResponse.data) {
          this.chartLabels.push(data.title);
          this.chartData.push(data.rank_avg);
          this.chartDataCount.push(data.rank_count / 500);
        }

        this.chartRenderData.labels = this.chartLabels;

        this.chartRenderData.datasets[0].data = this.chartData;
        this.chartRenderData.datasets[1].data = this.chartDataCount;

        this.isInitialDataLoaded = true;
      }).catch((err) => {
        console.log(err);
      });

  }
}
