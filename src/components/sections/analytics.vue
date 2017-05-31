<template lang="pug">
    section.analytics-content
        .ui.container.chart-wrapper
            canvas#chart
</template>

<script>
    module.exports = require('./analytics.ts').default.vueComponentOptions

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

                    var backgroundColor = "rgba(" + randomColors[0] + "," + randomColors[1] + "," + randomColors[2] + ", 0.3)";
                    var borderCorlor = "rgba(" + randomColors[0] + "," + randomColors[1] + "," + randomColors[2] + ", 0.5)";

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
                        duration: 0
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
                                    reverse : true,
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