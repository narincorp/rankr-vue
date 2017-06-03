import * as vts from 'vue-typescript-component'
import Vue = require("vue");
import axios from 'axios';
import *  as RankList from "../rank-list/rank-list.vue";
import {RankResult} from "../entities/rank-result";

@vts.component({components: {RankList}})
export default class SectionRank extends Vue {

    name = 'section-rank';
    rankResult: RankResult;
    isInitialDataLoaded: boolean = false;
    isDataLoaded: boolean = false;
    dataLoadedSecond: number = 0;

    intervalId: number;


    async created() {
        await this.updateRankData();
    }

    @vts.watch('rankResult')
    async updateRankData() {
        this.isDataLoaded = false;
        let rankResponse = await axios.get(`http://localhost:3000/rank/all`);
        switch (rankResponse.status) {
            case 200:

                for (let data in rankResponse.data) {
                    if (rankResponse.data.hasOwnProperty(data)) {
                        rankResponse.data[data] = await rankResponse.data[data].filter((element, idx) => {
                            return idx < 10;
                        })
                    }
                }

                this.dataLoadedSecond = 0;

                if(this.intervalId){
                    clearInterval(this.intervalId);
                }

                this.intervalId = setInterval(() => {
                    this.dataLoadedSecond++;
                }, 1000);

                this.rankResult = rankResponse.data;
                this.isInitialDataLoaded = true;
                this.isDataLoaded = true;

                break;
        }
    }

}