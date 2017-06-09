import * as vts from 'vue-typescript-component';
import vue = require('vue');
import httpClient from '../../../handler/http-client';
import *  as RankList from '../rank-list/rank-list.vue';
import { RankResult } from '../entities/rank-result';

@vts.component({ components: { RankList } })
export default class SectionRank extends vue {

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
    const rankResponse = await httpClient.get(`/rank/all`);
    switch (rankResponse.status) {
      case 200:

        for (const data in rankResponse.data) {
          if (rankResponse.data.hasOwnProperty(data)) {
            rankResponse.data[data] = await rankResponse.data[data].filter((element, idx) => {
              return idx < 10;
            });
          }
        }

        this.dataLoadedSecond = 0;

        if (this.intervalId) {
          clearInterval(this.intervalId);
        }

        this.intervalId = setInterval(() => {
          this.dataLoadedSecond += 1;
        },                            1000);

        this.rankResult = rankResponse.data;
        this.isInitialDataLoaded = true;
        this.isDataLoaded = true;

        break;
    }
  }
}
