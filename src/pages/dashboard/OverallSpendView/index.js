 import React from 'react'
import { Helmet } from 'react-helmet'
import Authorize from 'components/LayoutComponents/Authorize'
import ChartCard from 'components/CleanUIComponents/ChartCard'
import WaterfallGraphCard from './WaterfallGraphCard'
import { chartsData, statsData } from './waterfall-data'

class OverallSpendView extends React.Component {
  render() {
    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        <Helmet title="Dashboard Alpha" />
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Overall Stats</strong>
        </div>
        <div className="row">
          {statsData.map(stats => (
            <div className="col-xl-4">
              <ChartCard {...stats} />
            </div>
          ))}
        </div>

        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Spend Charts</strong>
        </div>
        <div className="row">
          {chartsData.map(item => (
            <div className="col-lg-6">
              <WaterfallGraphCard title={item.title} chartData={item.chartData} />
            </div>
          ))}
        </div>
      </Authorize>
    )
  }
}

export default OverallSpendView
