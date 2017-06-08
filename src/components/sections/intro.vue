<template>
    <section class="top-content">
        <div class="top-content-grid-wrapper">
            <div class="ui stackable two column grid container top-content-grid">
                <div class="column intro-column">
                    <div class="intro-column-wrapper">
                        <h1 class="title"><b>The Integration of</b><br><span class="typing-text"></span></h1>
                        <p class="summary">실시간으로 여러 포털사이트의 검색 동향을 한눈에 살펴보세요.<br>더 이상 한 포털사이트에 의존하지 않아도 됩니다.</p>
                        <button class="ui button icon large teal"><i class="arrow right icon"></i> 지금 한 눈에 보기</button>
                    </div>
                </div>
                <div class="column chart-column">
                    <div class="chart-wrapper">
                        <div class="ui loader text active" v-if="!isInitialDataLoaded">차트 데이터를 불러오는 중입니다.</div>
                        <intro-chart :chartData="chartRenderData"
                                     v-if="isInitialDataLoaded">
                        </intro-chart>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    module.exports = require('./intro.ts').default.vueComponentOptions;

    $(function () {
        $(".now-content").click();

        $('.top-content').particleground({
            dotColor: '#CFD8DC',
            lineColor: '#CFD8DC'
        });

        Typed.new(".typing-text", {
            strings: [
                "Realtime Search Keyword",
                "What is happening <strong>now</strong>",
                "실시간 급상승 검색어",
                "현재 일어나고 있는 모든 일"
            ],
            contentType: 'html',
            typeSpeed: 70,
            loop: true,
            backDelay: 3000
        });
    });
</script>
