var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

$('.top-content').particleground({
    dotColor: '#e0e0e0',
    lineColor: '#e0e0e0'
});

var bubbleBackgroundColor = function() {
    return 'rgba(255, 206, 86, 0.2)'
};
var bubbleBorderColor = function() {
    return 'rgba(255, 206, 86, 1)'
};


var bubbleChartData = {
    animation: {
        duration: 10000
    },
    // Documentation says the tick values tick.min & tick.max must be in the Labels array. So thats what I have below
    yLabels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    datasets: [{
        label: "Requests and bookings",
        fill: false,
        lineTension: 0.1,
        backgroundColor: bubbleBackgroundColor(),
        borderColor: bubbleBorderColor(),
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(153, 102, 155, 0.2)",
        pointHoverBorderColor: "rgba(153, 102, 155, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        // how would the data change ...how can the numbers for y be replaced with strings
        data:[{x: "2017-12-34",y: 0,r: 15},{x: 3,y: 1,r: 19}, {x: 5,y: 2,r: 15}, {x: 4, y: 3,r: 18}]
    }]
};


var ctx = document.getElementById('chart');
var bubble = new Chart(ctx, {
    type: 'bubble',
    data: bubbleChartData,
    options: {
        responsive: true,
        title: {
            display: true,
            text:'최근 24시간 키워드 분포'
        },
        scales: {
            yAxes: [{
                // will this create y-axis with days of week?
                type: 'category',
                position: 'left',
                ticks: {
                    min: "1",
                    max: "20"
                }
            }],
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'day'
                },
                displayFormats: {
                    day: 'h:mm:ss a'
                }
            }]
        }

    }
});