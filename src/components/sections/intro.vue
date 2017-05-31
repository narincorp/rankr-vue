<template>
    <section class="top-content">
        <div class="ui stackable two column grid container top-content-grid">
            <div class="column intro-column">
                <div class="intro-column-wrapper">
                    <h1 class="title"><b>The Intergration of</b><br><span class="typing-text"></span></h1>
                    <p class="summary">실시간으로 여러 포털사이트의 검색 동향을 한눈에 살펴보세요.<br>더 이상 한 포털사이트에 의존하지 않아도 됩니다.</p>
                    <button class="ui button icon large teal"><i class="arrow right icon"></i> 지금 한 눈에 보기</button>
                </div>
            </div>
            <div class="column">
                <div class="chart-wrapper">
                    <!--<canvas id="myChart" height="300"></canvas>-->
                    <intro-chart  :chartData="chartRenderData" :options="chartRenderOptions" v-if="isInitialDataLoaded"></intro-chart>
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
            dotColor: '#e0e0e0',
            lineColor: '#e0e0e0'
        });

        Typed.new(".typing-text", {
            strings: ["Realtime Search Keyword", "What is happening <strong>now</strong>", "Portal Sites Ranking"],
            contentType: 'html',
            typeSpeed: 70,
            loop: true,
            backDelay: 3000
        });
    });
</script>
