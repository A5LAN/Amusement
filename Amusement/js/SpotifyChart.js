$(function () {
    $('#container').highcharts({
        title: {
            text: 'March Playlist chart'
        },
        xAxis: {
            categories: ['March 1st-7th ', 'March 8th-14th', 'March 15th-21st', 'March 22nd-28th', 'March 29th-31st']
        },
        labels: {
            items: [{
                html: 'Average Genre Chart',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Mellow',
            data: [3, 2, 1, 3, 4]
        }, {
            type: 'column',
            name: 'Hyped',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: 'Neutral',
            data: [4, 3, 3, 9, 0]
        }, {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Total consumption',
            data: [{
                name: 'Mellow',
                y: 13,
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: 'Hyped',
                y: 23,
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: 'Neutral',
                y: 19,
                color: Highcharts.getOptions().colors[2] // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });
});
