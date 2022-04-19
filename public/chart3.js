Highcharts.chart('container-3', {
  chart: {
    plotBackgroundColor: '#2c2e3a',
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Datacenter Overview'
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
      name: 'Number of Hosts Deployed',
      y: 54.1,
      sliced: true,
      selected: true
    },  {
      name: 'Number of Networksd',
      y: 16.6,
      sliced: true,
      selected: false
    },{
      name: 'Number of Interfaces',
      y: 29.1,
      sliced: true,
      selected: false
    }]
  }]
});