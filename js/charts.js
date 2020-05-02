Chart.defaults.global.plugins.datalabels.display = false

const statsChart = new Chart($('#statsChart'), {
  type: 'line',
  data: {
    labels: date,
    datasets: [
      {
        label: 'Confirmed',
        backgroundColor: chartColors.orange,
        borderColor: chartColors.orange,
        fill: false,
        borderWidth: 2,
        data: confirmed
      },
      {
        label: 'Recovered',
        backgroundColor: chartColors.green,
        borderColor: chartColors.green,
        fill: false,
        borderWidth: 2,
        data: recovered
      },
      {
        label: 'Deaths',
        backgroundColor: chartColors.red,
        borderColor: chartColors.red,
        fill: false,
        borderWidth: 2,
        data: deaths
      }
    ]
  },
  options: {
    response: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          parser: 'M/D/YY',
	  tooltipFormat: 'll'
	},
        gridLines: {
          drawOnChartArea: false
        }
      }]
    },
    title: {
      display: true,
      text: 'Cases evolution'
    },
    elements: {
      point: {
        radius: 0
      }
    },
    tooltips: {
      mode: 'index',
      intersect: false
    }
  }
})

const genderChart = new Chart($('#genderChart'), {
  type: 'doughnut',
  data: {
    labels: gender,
    datasets: [
      {
        data: genderData,
        backgroundColor: [
          chartColors.green,
          chartColors.blue
        ]
      }
    ]
  },
  options: {
    response: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Cases by gender'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    },
    plugins: {
      datalabels: {
        display: true,
        color: 'white',
        font: {
	  weight: 'bold'
	},
        formatter: (value, ctx) => {
          let sum = 0
          let dataArr = ctx.chart.data.datasets[0].data
          dataArr.map(data => {
            sum += data
          })
          return `${(value*100 / sum).toFixed(2)}%`
        },
      }
    }
  }
})

const ageChart = new Chart($('#ageChart'), {
  type: 'bar',
  data: {
    labels: age,
    datasets: [
      {
        label: 'Confirmed',
        backgroundColor: chartColors.orange,
        borderColor: chartColors.orange,
        borderWidth: 2,
        data: ageConfirmedData
      },
      {
        label: 'Deaths',
        backgroundColor: chartColors.red,
        borderColor: chartColors.red,
        borderWidth: 2,
        data: ageDeathsData
      }
    ]
  },
  options: {
    response: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    legend: {
        display: true
    },
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    title: {
      display: true,
      text: 'Cases by age'
    },
    tooltips: {
      mode: 'index',
      intersect: false
    }
  }
})

const dailyChart = new Chart($('#dailyChart'), {
  type: 'bar',
  data: {
    labels: date,
    datasets: [
      {
        label: 'Confirmed',
        backgroundColor: chartColors.orange,
        borderColor: chartColors.orange,
        borderWidth: 2,
        data: getDailyData(confirmed)
      },
      // {
      //   label: 'Recovered',
      //   backgroundColor: chartColors.green,
      //   borderColor: chartColors.green,
      //   borderWidth: 2,
      //   data: getDailyData(recovered)
      // },
      {
        label: 'Deaths',
        backgroundColor: chartColors.red,
        borderColor: chartColors.red,
        borderWidth: 2,
        data: getDailyData(deaths)
      }
    ]
  },
  options: {
    response: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    legend: {
        display: true
    },
    scales: {
      xAxes: [{
        stacked: true,
        offset: true,
        type: 'time',
        time: {
          parser: 'M/D/YY',
	  tooltipFormat: 'll'
	},
        gridLines: {
          drawOnChartArea: false
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true
        }
      }]
    },
    title: {
      display: true,
      text: 'Daily new cases'
    },
    tooltips: {
      mode: 'index',
      intersect: false
    }
  }
})

const wilayaChart = new Chart($('#wilayaChart'), {
  type: 'horizontalBar',
  data: {
    labels: getDataPerWilayaName(provinces, 'confirmed', false),
    datasets: [
      {
        label: 'Confirmed',
        backgroundColor: chartColors.orange,
        borderColor: chartColors.orange,
        borderWidth: 2,
        data: getDataPerWilayaValue(provinces, 'confirmed', false)
      }
    ]
  },
  options: {
    layout: {
      padding: {
        right: 30
      }
    },
    response: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Cases per wilaya'
    },
    tooltips: {
      mode: 'index',
      intersect: false
    },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    plugins: {
      datalabels: {
        display: true,
        anchor: 'end',
        align:'right',
      }
    }
  }
})