// https://canvasjs.com/docs/charts/chart-options/

const baseData = {
  type: 'waterfall',
  yValueFormatString: '$',
  indexLabelOrientation: 'vertical',
  fallingColor: '#58a7be',
  risingColor: '#4c83cf',
  dataPoints: [
    { label: 'Total', y: 460 },
    { label: 'Marketing', y: -78 },
    { label: 'Sales', y: -60 },
    { label: 'Finance', y: -90 },
    { label: 'HCM', y: -81 },
    { label: 'Network', y: -24 },
    { label: 'P & T', y: -54 },
    { label: 'CEO Office', y: -20 },
    { label: 'IT', y: -50 },
  ],
}

export const waterfallChartData = {
  animationEnabled: true,
  animationDuration: 800,
  exportEnabled: false,
  backgroundColor: '#fff',
  theme: 'light2',
  title: {
    text: '',
    fontSize: 20,
    padding: 10,
    fontFamily: 'Nunito Sans',
    fontWeight: 'bolder',
  },
  axisX: {
    title: 'Business Units',
    titleFontSize: 16,
    labelFontSize: 12,
    titleFontFamily: 'Nunito Sans',
    labelFontFamily: 'Nunito Sans',
    labelAngle: -45,
    labelFontColor: '#666',
  },
  axisY: {
    title: 'Spend',
    titleFontSize: 16,
    valueFormatString: '#,##0.##M',
    labelFontSize: 12,
    labelFontFamily: 'Nunito Sans',
    titleFontFamily: 'Nunito Sans',
    labelFontColor: '#666',
    gridColor: '#ddd',
  },
  toolTip: {
    shared: true,
    contentFormatter: e => {
      const multiplier = e.entries[0].dataPoint.label === 'Total' ? 1 : -1
      return `${e.entries[0].dataPoint.label} ${e.entries[0].dataPoint.y * multiplier} M$`
    },
  },
  data: [{ ...baseData }],
}

const chart1 = { ...waterfallChartData }
const chart2 = {
  ...waterfallChartData,
  data: [
    {
      ...baseData,
      dataPoints: [
        { label: 'Total', y: 770 },
        { label: 'Marketing', y: -48 },
        { label: 'Sales', y: -40 },
        { label: 'Finance', y: -170 },
        { label: 'HCM', y: -71 },
        { label: 'Network', y: -124 },
        { label: 'P & T', y: -44 },
        { label: 'CEO Office', y: -120 },
        { label: 'IT', y: -140 },
      ],
    },
  ],
}
const chart3 = {
  ...waterfallChartData,
  data: [
    {
      ...baseData,
      dataPoints: [
        { label: 'Total', y: 860 },
        { label: 'Marketing', y: -78 },
        { label: 'Sales', y: -110 },
        { label: 'Finance', y: -270 },
        { label: 'HCM', y: -80 },
        { label: 'Network', y: -120 },
        { label: 'P & T', y: -80 },
        { label: 'CEO Office', y: -70 },
        { label: 'IT', y: -50 },
      ],
    },
  ],
}
const chart4 = {
  ...waterfallChartData,
  data: [
    {
      ...baseData,
      dataPoints: [
        { label: 'Total', y: 860 },
        { label: 'Marketing', y: -278 },
        { label: 'Sales', y: -60 },
        { label: 'Finance', y: -90 },
        { label: 'HCM', y: -81 },
        { label: 'Network', y: -124 },
        { label: 'P & T', y: -54 },
        { label: 'CEO Office', y: -120 },
        { label: 'IT', y: -50 },
      ],
    },
  ],
}

export const chartsData = [
  { title: 'CAPEX - Category A', chartData: chart1 },
  { title: 'CAPEX - Category B', chartData: chart2 },
  { title: 'OPEX - Category A', chartData: chart3 },
  { title: 'OPEX - Category B', chartData: chart4 },
]

export const statsData = [
  {
    title: 'Total Projects',
    amount: '354',
    chartProps: {
      width: 120,
      height: 107,
      lines: [
        {
          values: [2, 11, 8, 14, 18, 20, 26],
          colors: {
            area: 'rgba(199, 228, 255, 0.5)',
            line: '#004585',
          },
        },
      ],
    },
  },
  {
    title: 'Total Capex',
    amount: '$1.24 M',
    chartProps: {
      width: 120,
      height: 107,
      lines: [
        {
          values: [20, 80, 67, 120, 132, 66, 97],
          colors: {
            area: 'rgba(199, 228, 255, 0.5)',
            line: '#004585',
          },
        },
      ],
    },
  },
  {
    title: 'Total Opex',
    amount: '$486,000',
    chartProps: {
      width: 120,
      height: 107,
      lines: [
        {
          values: [42, 40, 80, 67, 84, 20, 97],
          colors: {
            area: 'rgba(199, 228, 255, 0.5)',
            line: '#004585',
          },
        },
      ],
    },
  },
]

export default chartsData
