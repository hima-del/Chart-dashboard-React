import React from 'react'
import {
  Chart,
  ChartTitle,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from '@progress/kendo-react-charts'

import data from './waterfall.json'

class chartjs extends React.Component {
  render() {
    // const pointColor = point => {

    //   if (point.dataItem.summary) {
    //     return point.dataItem.summary === 'total' ? '#555' : 'gray'
    //   }

    //   if (point.value > 0) {
    //     return 'green'
    //   }
    //   return 'red'
    // }
    return (
      <Chart>
        <ChartTitle text="Cash flow" />
        <ChartSeries>
          <ChartSeriesItem
            type="waterfall"
            data={data}
            color="green"
            field="amount"
            categoryField="period"
            summaryField="summary"
          >
            <ChartSeriesLabels format="C0" position="insideEnd" />
          </ChartSeriesItem>
        </ChartSeries>
        <ChartValueAxis>
          <ChartValueAxisItem title={{ format: 'C0' }} />
        </ChartValueAxis>
      </Chart>
    )
  }
}

export default chartjs
