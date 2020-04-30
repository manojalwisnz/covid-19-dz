const chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)',
  pink: 'rgb(255, 192, 203)'
}

function getTotalConfirmed(confirmed) {
  if (confirmed.length > 0)
    return confirmed[confirmed.length-1]
  return 0
}

function getTotalRecovered(recovered) {
  if (recovered.length > 0)
    return recovered[recovered.length-1]
  return 0
}

function getTotalDeaths(deaths) {
  if (deaths.length > 0)
    return deaths[deaths.length-1]
  return 0
}

function getDailyConfirmed(confirmed) {
  let dailyConfirmed = []
  for (let i = 0; i < confirmed.length; ++i) {
    dailyConfirmed.push(confirmed[i] - (confirmed[i-1] === undefined ? 0 : confirmed[i-1]))
  }
  return dailyConfirmed
}

function getDailyRecovered(recovered) {
  let dailyRecovered = []
  for (let i = 0; i < recovered.length; ++i) {
    dailyRecovered.push(recovered[i] - (recovered[i-1] === undefined ? 0 : recovered[i-1]))
  }
  return dailyRecovered
}

function getDailyDeaths(deaths) {
  let dailyDeaths = []
  for (let i = 0; i < deaths.length; ++i) {
    dailyDeaths.push(deaths[i] - (deaths[i-1] === undefined ? 0 : deaths[i-1]))
  }
  return dailyDeaths
}

function getNewConfirmed(confirmed) {
  if(confirmed.length > 1) {
    let newConfirmed = confirmed[confirmed.length-1] - confirmed[confirmed.length-2]
    if (newConfirmed > 0)
      return `+${newConfirmed}`
  }
  return 0
}

function getNewRecovered(recovered) {
  if(recovered.length > 1) {
    let newRecovered = recovered[recovered.length-1] - recovered[recovered.length-2]
    if (newRecovered > 0)
      return `+${newRecovered}`
  }
  return 0
}

function getNewDeaths(deaths) {
  if(deaths.length > 1) {
    let newDeaths = deaths[deaths.length-1] - deaths[deaths.length-2]
    if (newDeaths > 0)
      return `+${newDeaths}`
  }
  return 0
}

function getDataPerWilayaName(provinces, dataType, filter) {
  return getDataPerWilaya(provinces, dataType, filter).map((t, i) => (i+1)+' - '+ t[0])
}

function getDataPerWilayaValue(provinces, dataType, filter) {
  return getDataPerWilaya(provinces, dataType, filter).map(t => t[1])
}

function getDataPerWilaya(provinces, dataType, filter) {
  let items = Object.keys(provinces).map(key => [key, provinces[key][dataType]])
  items.sort((first, second) => second[1] - first[1])
  if(filter)
    items = items.filter(item => item[1] > 0)
  return items
}

function getTotalDays(date) {
  return date.length
}

function getFatalityRate(confirmed, deaths) {
  return `${(getTotalDeaths(deaths) / getTotalConfirmed(confirmed) * 100).toFixed(2)}%`
}

function getRecoveryRate(confirmed, recovered) {
  return `${(getTotalRecovered(recovered) / getTotalConfirmed(confirmed) * 100).toFixed(2)}%`
}

function setupTable() {
  let provincesData = []
  for (key in provinces) {
    let province = [key,
                    provinces[key].confirmed,
                    provinces[key].new_confirmed > 0 ? '+'+provinces[key].new_confirmed : '',
                    provinces[key].deaths, provinces[key].new_deaths > 0 ? '+'+provinces[key].new_deaths : '',
                    moment(provinces[key].last_reported).isValid() ? moment(provinces[key].last_reported).calendar(moment(), {
                      sameDay:  '[Today]',
                      nextDay:  '[Tomorrow]',
                      nextWeek: 'dddd',
                      lastDay:  '[Yesterday]',
                      lastWeek: () => {
                        return "[" + moment().diff(moment(provinces[key].last_reported), 'days') + " days]"
                      },
                      sameElse: () => {
                        return "[" + moment().diff(moment(provinces[key].last_reported), 'days') + " days]"
                      }
                    }) : '',
                    moment(provinces[key].reported).isValid() ? moment(provinces[key].reported).format('ll') : '']
    provincesData.push(province)
  }

  $.fn.dataTable.moment('ll')

  $('#wilayaTable').DataTable({
    data: provincesData,
    order: [[ 1, 'desc' ]],
    paging: false,
    info: false,
    scrollX: true,
    scrollY: 400,
    scrollCollapse: true,
    columnDefs: [
      // { className: "table_cells", targets: "_all" },
      { className: "province", targets: 0 },
      { className: "confirmed", targets: 2 },
      { className: "deaths", targets: 4 },
      // { className: "text-nowrap", targets: 5 },
      { className: "text-nowrap", targets: 6 }
    ]
  })
}

function updateFromNow() {
  $('#lastUpdated').text(`Updated ${moment(lastUpdated).fromNow()}`)
}

function checkYesterday() {
  if (moment(date[date.length-1], 'M/D/YY').isBefore(moment(), 'day')) {
    $('#newConfirmedText').text('Yesterday')
    $('#newRecoveredText').text('Yesterday')
    $('#newDeathsText').text('Yesterday')
    $('#newConfirmedTh').text('Yesterday cases')
    $('#newDeathsTh').text('Yesterday deaths')
  }
}

$('#wilayaChartsList').change(() => {
  const chartData = $('#wilayaChartsList').val()
  let filter = false
  let dataset = wilayaChart.data.datasets[0]

  if (chartData === 'confirmed') {
    dataset.label = 'Confirmed'
    dataset.backgroundColor = chartColors.orange
    dataset.borderColor = chartColors.orange
  } else if (chartData === 'new_confirmed') {
    dataset.label = 'New confirmed'
    dataset.backgroundColor = chartColors.orange
    dataset.borderColor = chartColors.orange
    // filter = true
  } else if (chartData === 'deaths') {
    dataset.label = 'Deaths'
    dataset.backgroundColor = chartColors.red
    dataset.borderColor = chartColors.red
  } else if (chartData === 'new_deaths') {
    dataset.label = 'New deaths'
    dataset.backgroundColor = chartColors.red
    dataset.borderColor = chartColors.red
    // filter = true
  } else if (chartData === 'recovered') {
    dataset.label = 'Recovered'
    dataset.backgroundColor = chartColors.green
    dataset.borderColor = chartColors.green
  }
  dataset.data = getDataPerWilayaValue(provinces, chartData, filter)
  wilayaChart.data.labels = getDataPerWilayaName(provinces, chartData, filter)
  wilayaChart.update()
  wilayaChart.update()
})

$('#tab a[data-toggle="tab"]').on('shown.bs.tab', (e) => {
  activeTab = e.target.id
  if(activeTab === 'table-tab') {
    $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust()
  }
})

$(document).ready(() => {
  moment.tz.setDefault('Europe/Brussels')
  checkYesterday()
  $('#lastUpdated').attr('datetime', moment(lastUpdated).toISOString())
  $('#lastUpdated').attr('title', moment(lastUpdated).format('LLLL'))

  $('#totalConfirmed').text(getTotalConfirmed(confirmed))
  $('#totalRecovered').text(getTotalRecovered(recovered))
  $('#totalDeaths').text(getTotalDeaths(deaths))

  $('#newConfirmed').text(getNewConfirmed(confirmed))
  $('#newRecovered').text(getNewRecovered(recovered))
  $('#newDeaths').text(getNewDeaths(deaths))

  $('#totalDays').text(getTotalDays(date))
  $('#fatalityRate').text(getFatalityRate(confirmed, deaths))
  $('#recoveryRate').text(getRecoveryRate(confirmed, recovered))

  updateFromNow()
  setInterval(updateFromNow, 60000)
  setupTable()
})
