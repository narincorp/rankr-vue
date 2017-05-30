<template lang="pug">
    section.analytics-content
        .ui.container.chart-wrapper
            canvas#chart
</template>

<script>
    module.exports = require('./analytics.ts').default.vueComponentOptions

    Chart.pluginService.register({
        beforeInit: function (chart) {
            var hasWrappedTicks = chart.config.data.labels.some(function (label) {
                return label.indexOf('\n') !== -1;
            });

            if (hasWrappedTicks) {
                // figure out how many lines we need - use fontsize as the height of one line
                var tickFontSize = Chart.helpers.getValueOrDefault(chart.options.scales.xAxes[0].ticks.fontSize, Chart.defaults.global.defaultFontSize);
                var maxLines = chart.config.data.labels.reduce(function (maxLines, label) {
                    return Math.max(maxLines, label.split('\n').length);
                }, 0);
                var height = (tickFontSize + 2) * maxLines + (chart.options.scales.xAxes[0].ticks.padding || 0);

                // insert a dummy box at the bottom - to reserve space for the labels
                Chart.layoutService.addBox(chart, {
                    draw: Chart.helpers.noop,
                    isHorizontal: function () {
                        return true;
                    },
                    update: function () {
                        return {
                            height: this.height
                        };
                    },
                    height: height,
                    options: {
                        position: 'bottom',
                        fullWidth: 1,
                    }
                });

                // turn off x axis ticks since we are managing it ourselves
                chart.options = Chart.helpers.configMerge(chart.options, {
                    scales: {
                        xAxes: [{
                            ticks: {
                                display: false,
                                // set the fontSize to 0 so that extra labels are not forced on the right side
                                fontSize: 0
                            }
                        }]
                    }
                });

                chart.hasWrappedTicks = {
                    tickFontSize: tickFontSize
                };
            }
        },
        afterDraw: function (chart) {
            if (chart.hasWrappedTicks) {
                // draw the labels and we are done!
                chart.chart.ctx.save();
                var tickFontSize = chart.hasWrappedTicks.tickFontSize;
                var tickFontStyle = Chart.helpers.getValueOrDefault(chart.options.scales.xAxes[0].ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
                var tickFontFamily = Chart.helpers.getValueOrDefault(chart.options.scales.xAxes[0].ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
                var tickLabelFont = Chart.helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
                chart.chart.ctx.font = tickLabelFont;
                chart.chart.ctx.textAlign = 'center';
                var tickFontColor = Chart.helpers.getValueOrDefault(chart.options.scales.xAxes[0].fontColor, Chart.defaults.global.defaultFontColor);
                chart.chart.ctx.fillStyle = tickFontColor;

                var meta = chart.getDatasetMeta(0);
                var xScale = chart.scales[meta.xAxisID];
                var yScale = chart.scales[meta.yAxisID];

                chart.config.data.labels.forEach(function (label, i) {
                    label.split('\n').forEach(function (line, j) {
                        chart.chart.ctx.fillText(line, xScale.getPixelForTick(i + 0.5), (chart.options.scales.xAxes[0].ticks.padding || 0) + yScale.getPixelForValue(yScale.min) +
                            // move j lines down
                            j * (chart.hasWrappedTicks.tickFontSize + 2));
                    });
                });

                chart.chart.ctx.restore();
            }
        }
    });


    $(function () {

        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/analytics/today',
            success: function (response) {

                var datasets = [];

                for (var i = 0; i < response.length; i++) {
                    var element = response[i];
                    var orgCount = element.count;
                    if (element.count > 50) {
                        element.count = 50;
                    }

                    var randomColors = [];
                    randomColors.push(parseInt(Math.random() * 255));
                    randomColors.push(parseInt(Math.random() * 255));
                    randomColors.push(parseInt(Math.random() * 255));

                    var backgroundColor = "rgba(" + randomColors[0] + "," + randomColors[1] + "," + randomColors[2] + ", 0.1)";
                    var borderCorlor = "rgba(" + randomColors[0] + "," + randomColors[1] + "," + randomColors[2] + ", 0.2)";

                    datasets.push({
                        label: element.title + " (평균 순위 : " + element.rank_avg + ")(랭킹 진입 누적수 : " + orgCount + ") ",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: backgroundColor,
                        borderColor: borderCorlor,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBorderWidth: 2,
                        pointRadius: 2,
                        pointHitRadius: 1,
                        // how would the data change ...how can the numbers for y be replaced with strings
                        data: [{x: element.createdAt, y: element.rank_avg, r: element.count}]
                    })
                }

                var bubbleBackgroundColor = function () {
                    return 'rgba(255, 206, 86, 0.2)'
                };
                var bubbleBorderColor = function () {
                    return 'rgba(255, 206, 86, 1)'
                };

                var bubbleChartData = {
                    animation: {
                        duration: 10000
                    },
                    // Documentation says the tick values tick.min & tick.max must be in the Labels array. So thats what I have below
                    datasets: datasets
                };


                var ctx = document.getElementById('chart');
                var bubble = new Chart(ctx, {
                    type: 'bubble',
                    data: bubbleChartData,
                    options: {
                        legend: {
                            display: false
                        },
                        responsive: true,
                        title: {
                            display: true,
                            text: '최근 24시간 전체 키워드 분석'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                            xAxes: [{
                                type: 'time',
                                time: {
                                    displayFormats: {
                                        hour: 'DD일 HH시'
                                    }
                                }
                            }]
                        }

                    }
                });

            }
        });

    })
</script>