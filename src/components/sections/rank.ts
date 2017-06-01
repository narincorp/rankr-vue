import * as vts from 'vue-typescript-component'
import Vue = require("vue");
import axios from 'axios';
import *  as RankList from "../rank-list/rank-list.vue";
import {RankResult} from "../entities/rank-result";

@vts.component({components: {RankList}})
export default class SectionRank extends Vue {

    name = 'section-rank';
    rankResult: RankResult;
    isDataLoaded: boolean = false;

    async created() {
        let rankResponse = await axios.get(`http://localhost:3000/rank/all`);

        switch (rankResponse.status) {
            case 200:

                for (let data in rankResponse.data) {
                    if (rankResponse.data.hasOwnProperty(data)) {
                        rankResponse.data[data] = rankResponse.data[data].filter((element, idx) => {
                            return idx < 10;
                        })
                    }
                }

                this.rankResult = rankResponse.data;
                this.isDataLoaded = true;

                break;
        }
    }

}