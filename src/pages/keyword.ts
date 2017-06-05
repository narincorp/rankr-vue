import Vue = require('vue')
import * as vts from 'vue-typescript-component'
import KeywordChart from '../components/chart/keyword-chart';
import axios from 'axios';

@vts.component({components: {KeywordChart}})
export default class Keyword extends Vue {

    isInitialDataLoaded = false;
    chartData = {};
    newsData = [];

    chartRenderData: any = {
        type: 'line',
        datasets: [{
            label: "네이버",
            data: [],
            backgroundColor: '#E8F5E9',
            borderColor: '#C8E6C9',
            borderWidth: 2,
            fill: 'start'
        }, {
            label: '다음',
            data: [],
            backgroundColor: '#E3F2FD',
            borderColor: '#BBDEFB',
            borderWidth: 2,
            fill: 'start'
        }, {
            label: '줌',
            data: [],
            backgroundColor: '#E0F7FA',
            borderColor: '#B2EBF2',
            borderWidth: 2,
            fill: 'start'
        }]
    };

    async created() {
        let recentResponse = await
            axios.get(`http://api.rankr.narin.us/analytics/keyword/${this.$route.params.search}`);

        switch (recentResponse.status) {
            case 200:

                for (let rankType in recentResponse.data) {
                    if (recentResponse.data.hasOwnProperty(rankType)) {
                        this.chartData[rankType] = [];
                        for (let rank of recentResponse.data[rankType])
                            this.chartData[rankType].push({
                                x: rank.createdAt,
                                y: rank.rank
                            });
                    }
                }

                this.chartRenderData.datasets[0].data = this.chartData['naver'];
                this.chartRenderData.datasets[1].data = this.chartData['daum'];
                this.chartRenderData.datasets[2].data = this.chartData['zum'];


                break;
        }

        let responseNews = await axios.get(`http://api.rankr.narin.us/news/${this.$route.params.search}`);
        switch (responseNews.status) {
            case 200:

                this.newsData = responseNews.data;
                this.isInitialDataLoaded = true;

                break;
        }

    }
}