<template>
    <div id="keyword-app">
        <section class="intro keyword-section">
            <div class="thumb"></div>
            <div class="content">
                <div class="content-wrapper ui container">
                    <div class="chart-column">
                        <div class="chart-wrapper">
                            <keyword-chart :data="chartRenderData"
                                           v-if="isInitialDataLoaded"></keyword-chart>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    module.exports = require('./keyword.ts').default.vueComponentOptions
    Typed.new(".typing-text", {
        strings: [
            "트와이스",
            "인기가요",
            "씨스타 해체",
        ],
        contentType: 'html',
        typeSpeed: 70,
        loop: true,
        backDelay: 3000
    });
</script>