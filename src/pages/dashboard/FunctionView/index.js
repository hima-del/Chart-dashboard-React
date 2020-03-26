import React from 'react'

import Authorize from 'components/LayoutComponents/Authorize'
import ProgramCard from './components/ProgramCard'
import data from './data.json'

class FunctionView extends React.Component {
  render() {
    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        {Object.entries(data).map(([unit, unitData]) => {
          return (
            <>
              <div className="utils__title utils__title--flat mb-3">
                <strong className="text-uppercase font-size-16">{unit}</strong>
              </div>
              <div className="row">
                {unitData.map(values => (
                  <div className="col-lg-4">
                    <ProgramCard
                      title={values.title}
                      healthStatus={values.healthStatus}
                      npsScore={values.npsScore}
                      revenueUplift={values.revenueUplift}
                      costSavings={values.costSavings}
                      chartData={values.chartData}
                    />
                  </div>
                ))}
              </div>
            </>
          )
        })}
      </Authorize>
    )
  }
}

export default FunctionView
