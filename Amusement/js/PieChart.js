$(function () {
    $('#container').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Average Moods March of 2015' 
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Happiness',   45.0],
                ['Stressed',       26.8],
                {
                    name: 'Neutral',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Worried',    8.5],
                ['Other',     0.7],
                ['Anger',   6.2]
            ]
        }]
    });
});