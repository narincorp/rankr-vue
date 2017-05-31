<template>
    <section class="now-content" @click="getRanks()">
        <!--<div class="api-intro">-->
            <!--<p class="summary">대한민국 포털사이트 비공식 실시간 급상승 검색어 API 공개</p>-->
        <!--</div>-->
        <div class="content-wrapper">
            <div class="content">
                <div class="intro-title">
                    <h1 class="title">실시간 통합 인기검색어</h1>
                    <p class="summary"><b>총 4개의 포털사이트에서 실시간 인기검색어를 크롤합니다.</b><br>최근 1분전 업데이트 됨</p>
                </div>
                <div class="ui stackable four column grid container now-content-grid">
                    <div class="column ranking-column naver">
                        <div class="rank-list-wrapper">
                            <img class="logo" src="images/logos/naver-logo.svg">
                            <ul class="rank-list">
                                <li v-for="rank in naverRank">
                                    <article class="rank-item">
                                        <span class="rank"><a class="ui red circular label">{{rank.rank}}</a></span>
                                        <a class="title"><span>{{rank.title}}</span></a>
                                        <!--<span class="status"><i class="angle up icon"></i> 999</span>-->
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="column ranking-column daum">
                        <div class="rank-list-wrapper">
                            <img class="logo" src="images/logos/daum-logo.svg">
                            <ul class="rank-list">
                                <li v-for="rank in daumRank">
                                    <article class="rank-item">
                                        <span class="rank"><a class="ui red circular label">{{rank.rank}}</a></span>
                                        <a class="title"><span>{{rank.title}}</span></a>
                                        <span class="status" v-if="rank.status"><i class="angle up icon"
                                                                                   v-if="rank.status == 'up'"></i>{{rank.status == 'new' ? 'NEW' : rank.value}}</span>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="column ranking-column nate">
                        <div class="rank-list-wrapper">
                            <img class="logo" src="images/logos/nate-logo.svg">
                            <ul class="rank-list">
                                <li v-for="rank in nateRank">
                                    <article class="rank-item">
                                        <span class="rank"><a class="ui red circular label">{{rank.rank}}</a></span>
                                        <a class="title"><span>{{rank.title}}</span></a>
                                        <span class="status" v-if="rank.status"><i class="angle up icon"
                                                                                   v-if="rank.status == 'up'"></i>{{rank.status == 'new' ? 'NEW' : rank.value}}</span>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="column ranking-column zum">
                        <div class="rank-list-wrapper">
                            <img class="logo" src="images/logos/zum-logo.svg">
                            <ul class="rank-list">
                                <li v-for="rank in zumRank">
                                    <article class="rank-item">
                                        <span class="rank"><a class="ui red circular label">{{rank.rank}}</a></span>
                                        <a class="title"><span>{{rank.title}}</span></a>
                                        <span class="status" v-if="rank.status"><i
                                                class="angle up icon"></i> rank.value</span>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    module.exports = require('./rank.ts').default.vueComponentOptions;
</script>