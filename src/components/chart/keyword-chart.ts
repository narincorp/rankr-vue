import { Line } from 'vue-chartjs';

export default Line.extend({
  props: ['data'],
  mounted() {
    this.renderChart(this.data, {
      bezierCurve: true,
      title: {
        display: true,
        text: '각 포털사이트별 순위 진입 통계',
      },
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        position: 'average',
        mode: 'index',
        intersect: false,
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            reverse: true,
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
              hour: 'HH시 MM분',
            },
          },
        }],
      },
    });
  },
});
