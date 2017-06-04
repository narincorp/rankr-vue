import Vue = require('vue')
import * as vts from 'vue-typescript-component'
import KeywordChart from '../components/chart/keyword-chart';
import axios from 'axios';

@vts.component({components: {KeywordChart}})
export default class Keyword extends Vue {

    isInitialDataLoaded = false;
    chartData = {};

    chartRenderData: any = {
        datasets: [{
            label: "네이버",
            data: [],
            backgroundColor: '#E8F5E9',
            borderColor: '#C8E6C9',
            borderWidth: 2,
            type: 'line'
        }, {
            label: '다음',
            data: [],
            backgroundColor: '#E3F2FD',
            borderColor: '#BBDEFB',
            borderWidth: 2,
            type: 'line'
        }, {
            label: '줌',
            data: [],
            backgroundColor: '#E0F7FA',
            borderColor: '#B2EBF2',
            borderWidth: 2,
            type: 'line'
        }]
    };

    async created() {
        let recentResponse = await
            axios.get(`http://localhost:3000/analytics/keyword/${this.$route.params.search}`);

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

                this.isInitialDataLoaded = true;

                break;
        }
    }
}