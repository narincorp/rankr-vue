import vue = require('vue');
import * as vts from 'vue-typescript-component';
import keywordChart from '../components/chart/keyword-chart';
import httpClient from '../../handler/http-client';

@vts.component({components: {keywordChart}})
export default class Keyword extends vue {

  isInitialDataLoaded = false;
  thumbURL: string = '';
  chartData = {};
  newsData = [];

  chartRenderData: any = {
    type: 'line',
    datasets: [{
      label: '네이버',
      data: [],
      backgroundColor: 'rgba(0,199,60,0.1)',
      borderColor: '#00c73c',
      borderWidth: 2,
      fill: 'start',
    }, {
      label: '다음',
      data: [],
      backgroundColor: 'rgba(0,137,255,0.1)',
      borderColor: '#0089ff',
      borderWidth: 2,
      fill: 'start',
    }, {
      label: '줌',
      data: [],
      backgroundColor: 'rgba(34,88,240,0.1)',
      borderColor: '#2258f0',
      borderWidth: 2,
      fill: 'start',
    }],
  };

  async created() {
    const recentResponse = await
      httpClient.get(`/analytics/keyword/${this.$route.params.search}`);

    switch (recentResponse.status) {
      case 200:

        for (const rankType in recentResponse.data) {
          if (recentResponse.data.hasOwnProperty(rankType)) {
            this.chartData[rankType] = [];
            for (const rank of recentResponse.data[rankType])
              this.chartData[rankType].push({
                x: rank.createdAt,
                y: rank.rank,
              });
          }
        }

        this.chartRenderData.datasets[0].data = this.chartData['naver'];
        this.chartRenderData.datasets[1].data = this.chartData['daum'];
        this.chartRenderData.datasets[2].data = this.chartData['zum'];

        break;
    }

    const responseNews = await httpClient.get(`/news/${this.$route.params.search}`);

    switch (responseNews.status) {
      case 200:

        this.newsData = responseNews.data;

        this.isInitialDataLoaded = true;

        break;
    }
  }
}
