import * as vts from 'vue-typescript-component'
import Vue = require("vue");
import axios from 'axios';

@vts.component()
export default class SectionRank extends Vue {

    name = 'section-rank';

    naverRank = [];
    daumRank = [];
    zumRank = [];
    nateRank = [];

    getRanks() {
        axios.get('http://rankr.narin.us/rank/all').then(data => {
            console.log(data.data);
            this.naverRank = data.data.naver.data.filter((value, index, element) => {
                return index < 10;
            });
            this.daumRank = data.data.daum.data;
            this.nateRank = data.data.nate.data;
            this.zumRank = data.data.zum.data.filter((value, index, element) => {
                return index < 10;
            });
        });
    }
}