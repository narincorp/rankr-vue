<template>
    <section class="analytics-content">
        <div class="ui container chart-content-wrapper">
            <analytics-chart :height="300" :data="chartData" :options="chartOptions"
                         v-if="isInitialDataLoaded"></analytics-chart>
        </div>
    </section>
</template>

<script>
    module.exports = require('./analytics.ts').default.vueComponentOptions
</script>