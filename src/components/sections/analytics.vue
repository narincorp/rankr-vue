<template>
    <section class="analytics-content">
        <div class="ui container chart-content-wrapper">
            <div class="ui loader text active" v-if="!isInitialDataLoaded">차트 데이터를 불러오는 중입니다.</div>
            <analytics-chart :height="200" :data="chartData"
                         v-if="isInitialDataLoaded"></analytics-chart>
        </div>
    </section>
</template>

<script>
    module.exports = require('./analytics.ts').default.vueComponentOptions
</script>