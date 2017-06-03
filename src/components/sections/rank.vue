<template>
    <section class="now-content">
        <!--<div class="api-intro">-->
            <!--<p class="summary">대한민국 포털사이트 비공식 실시간 급상승 검색어 API 공개</p>-->
        <!--</div>-->
        <div class="content-wrapper">
            <div class="content">
                <div class="intro-title">
                    <h1 class="title">실시간 통합 인기검색어</h1>
                    <p class="summary"><b>총 4개의 포털사이트에서 상시로 실시간 인기검색어를 크롤합니다.</b>
                        <br>
                        {{dataLoadedSecond}}초 전 업데이트 됨
                        <button class="ui basic small button" v-bind:class="{ loading: isDataLoaded==false }" v-on:click="updateRankData()">
                            <i class="icon refresh"></i>
                            새로고침
                        </button>
                    </p>
                </div>
                <div class="ui stackable four column grid container now-content-grid">
                    <div class="column ranking-column naver">
                        <rank-list type="naver" :rankData="rankResult.naver" v-if="isInitialDataLoaded"></rank-list>
                    </div>
                    <div class="column ranking-column daum">
                        <rank-list type="daum" :rankData="rankResult.daum" v-if="isInitialDataLoaded"></rank-list>
                    </div>
                    <div class="column ranking-column nate">
                        <rank-list type="nate" :rankData="rankResult.nate" v-if="isInitialDataLoaded"></rank-list>
                    </div>
                    <div class="column ranking-column zum">
                        <rank-list type="zum" :rankData="rankResult.zum" v-if="isInitialDataLoaded"></rank-list>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    module.exports = require('./rank.ts').default.vueComponentOptions;
</script>