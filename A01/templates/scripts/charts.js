/*global define */
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $:false, jQuery:false, _:false, Highcharts: true
 */

(function () {
    'use strict';
    var data = [{
        "name": "Antigua and Barbuda",
        "rate": 11.2
    }, {
        "name": "Barbados",
        "rate": 10.8
    }, {
        "name": "Guyana",
        "rate": 7.8
    }, {
        "name": "Jamaica",
        "rate": 5.6
    }, {
        "name": "St Lucia",
        "rate": 10.9
    }, {
        "name": "Suriname",
        "rate": 9.7
    }, {
        "name": "Trinidad and Tobago",
        "rate": 10.2
    }];

    var names = _.map(data, 'name'),
        points = _.map(data, 'rate');
    console.log(names);
    console.log(points);

    $('#chartContainer2').highcharts({
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

        series: [{
            name: '',
            data: points
        }]
    });
}());

$(function () {
    'use strict';
    $('#chartContainer1').highcharts({
        title: {
            text: 'Firearm-Related Offences Per 100,000 Population, Selected Caribbean Countries, 1990-2010',
            x: -20 //center
        },
        subtitle: {
            text: 'Sources - Royal Antigua and Barbuda Police Force, Royal Barbados Police Force, Jamaica Constabulary Force, Statistics division, Trinidad and Tobago',
            x: -20
        },
        xAxis: {
            categories: ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001',
                '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010'
                ]
        },
        yAxis: {
            title: {
                text: 'Rate '
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Barbados',
            data: [21, 50, 63, 31, 50, 55, 30, 39, 49, 61, 57, 58, 40, 40, 38, 49, 29, 41, 38, 31]
        }, {
            name: 'Jamaica',
            data: [59, 50, 57, 58, 52, 63, 70, 59, 50, 40, 41, 47, 50, 48, 62, 61, 50, 53, 58, 61, 57]
        }, {
            name: 'Trinidad & Tobago',
            data: [21, 40, 49, 62, 57, 34, 46, 47, 48, 23, 45, 34, 45, 48, 34, 50, 38, 49, 59, 40]
        }]
    });
});