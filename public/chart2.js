Highcharts.chart('container-2', {
  chart: {
    plotBackgroundColor: '#2c2e3a',
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Requests Overview'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: 'Number of Firewall Requests',
      y: 49.5,
      sliced: true,
      selected: true
    },  {
      name: 'Number of Wireless Access Requests',
      y: 11.3,
      sliced: true,
      selected: false
    },{
      name: 'Number of Firewall Requests',
      y: 30.2,
      sliced: true,
      selected: false
    }]
  }]
});
