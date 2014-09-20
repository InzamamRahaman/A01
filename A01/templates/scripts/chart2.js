(function () {

    var data = [
        {"name" :  "Antigua and Barbuda", "rate" :  11.2},
        {"name" :  "Barbados", "rate" :  10.8},
        {"name" :  "Guyana", "rate" :  7.8},
        {"name" :  "Jamaica", "rate" :  5.6},
        {"name" :  "St Lucia", "rate" :  10.9},
        {"name" :  "Suriname", "rate" :  9.7},
        {"name" :  "Trinidad and Tobago", "rate" :  10.2 }];

    var names = _.map(data, 'name');
    var points = _.map(data, 'rate');
    console.log(names);
    console.log(points);

    $('#chartContainer').highcharts({
        chart: {
            type: 'bar'
        },

        title: {
            text: null
        },

        subtitle: {
            text: 'Source: UNDP Caribbean Report 2012'
        },

        xAxis: {
            categories: names,
            title: {
                text: 'Countries'
            }
        },

        yAxis: {
            min: 0,
            title: {
                text: 'Percentage',
                align: 'high'
            },

            labels: {
                overflow: 'justify'
            }
        },

        tooltip: {
            valueSuffix: ' %'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
           
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },

        series: [
            {
                name: '',
                data: points
            }
        ]


    });

})();