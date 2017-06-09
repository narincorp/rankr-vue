import { Bubble } from 'vue-chartjs';

export default Bubble.extend({
  props: [`data`],
  mounted () {
    this.renderChart(this.data, {
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: true,
        text: '최근 24시간 전체 키워드 분석',
      },
      scales: {
        yAxes: [{
          ticks: {
            reverse: true,
            beginAtZero: true,
          },
          gridLines: {
            display: true,
          },
        }],
        xAxes: [{
          type: 'time',
          gridLines: {
            display: true,
          },
          time: {
            displayFormats: {
              hour: 'DD일 HH시',
            },
          },
        }],
      },
    });
  },
});
