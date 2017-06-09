import vue = require('vue');
import * as vts from 'vue-typescript-component';
// import axios from 'axios';
import {RankType} from "../entities/rank-type";
import {Rank} from "../entities/rank";

@vts.component()
export default class RankList extends vue {

  name = 'rank-list';

  @vts.prop() type: RankType;
  @vts.prop() rankData: Rank[];

}