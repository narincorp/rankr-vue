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
                    <canvas id="myChart" height="300"></canvas>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    module.exports = require('./intro.ts').default.vueComponentOptions;

    $(function () {
        Typed.new(".typing-text", {
            strings: ["Realtime Search Keyword","What is happening <strong>now</strong>", "Portal Sites Ranking"],
            contentType: 'html',
            typeSpeed: 70,
            loop: true,
            backDelay: 3000
        });
        $('.top-content').particleground({
            dotColor: '#e0e0e0',
            lineColor: '#e0e0e0'
        });
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/analytics/recent',
            success: function (response) {

                let labels = [];
                let data = [];
                let dataa = [];

                for (let i = 0; i < 10; i++) {
                    let element = response[i];
                    labels.push(element.title);
                    data.push(element.rank_avg);
                    dataa.push(element.count / 10)
                }

                console.log(data)

                var ctx = document.getElementById("myChart").getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: "전체 순위",
                            data: data,
                            backgroundColor: '#E0F2F1',
                            borderColor: '#B2DFDB',
                            borderWidth: 2,
                            reverse: true
                        }, {
                            label: '전체 진입값',
                            data: dataa,
                            backgroundColor: '#ECEFF1',
                            borderColor: '#CFD8DC',
                            borderWidth: 2,
                            // Changes this dataset to become a line
                            type: 'line'
                        }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: '최근 1시간 검색어 평균 통계'
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    reverse : true,
                                    beginAtZero: true,
                                }
                            }]
                        }
                    }
                });
            }
        });
    });
</script>
