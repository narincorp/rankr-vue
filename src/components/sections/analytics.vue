<template>
    <section class="analytics-content">
        <div class="ui container chart-content-wrapper">
            <analytics-chart :height="200" :data="chartData"
                         v-if="isInitialDataLoaded"></analytics-chart>
        </div>
    </section>
</template>

<script>
    module.exports = require('./analytics.ts').default.vueComponentOptions
</script>