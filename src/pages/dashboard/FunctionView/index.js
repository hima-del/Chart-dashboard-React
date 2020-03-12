import React from 'react'
// import { Helmet } from 'react-helmet'
import Authorize from 'components/LayoutComponents/Authorize'
import PaymentCard from 'components/CleanUIComponents/PaymentCard'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
// import ShortItemInfo from 'components/CleanUIComponents/ShortItemInfo'
// import financeStatsData from './data.json'

class FunctionView extends React.Component {
  render() {
    const stackedBarData = {
      labels: ['Planned', 'Actual'],
      series: [
        [8e5, 12e5],
        [2e5, 4e5],
        [1e5, 2e5],
      ],
      style: {
        width: '300px',
      },
    }

    const stackedBarOptions = {
      stackBars: !0,
      axisY: {
        labelInterpolationFnc(value) {
          return `${value / 1e3}k`
        },
      },
      plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
    }
    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-26">PROGRAM A</strong>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card " style={{ padding: '5%', paddingTop: '12%', height: '500px' }}>
              <h5 className="text-black">
                <PaymentCard name="Project A" number="Vendor:ABC Private Ltd" />
              </h5>
              <div className="mb-5">
                <ChartistGraph
                  className="height-150"
                  data={stackedBarData}
                  options={stackedBarOptions}
                  type="Bar"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="card card--fullHeight"
              style={{ padding: '5%', paddingTop: '12%', height: '500px' }}
            >
              <h5 className="text-black">
                <PaymentCard name="Project B" number="Vendor:BCD Private Ltd" />
              </h5>
              <div className="mb-5">
                <ChartistGraph
                  className="height-150"
                  data={stackedBarData}
                  options={stackedBarOptions}
                  type="Bar"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="card card--fullHeight"
              style={{ padding: '5%', paddingTop: '12%', height: '500px' }}
            >
              <h5 className="text-black">
                <PaymentCard name="Project C" number="Vendor:EFG Private Ltd" />
              </h5>
              <div className="mb-5">
                <ChartistGraph
                  className="height-150"
                  data={stackedBarData}
                  options={stackedBarOptions}
                  type="Bar"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-lg-3">
            <PaymentCard name="Project A" number="Vendor:ABC Private Ltd" />
              <div className="mb-5">
                <ChartistGraph
                  className="height-300"
                  data={stackedBarData}
                  options={stackedBarOptions}
                  type="Bar"
                />
              </div>
            </PaymentCard>
          </div> */}
        {/* <div className="col-lg-3">
            <PaymentCard name="Project B" number="Vendor:BCD Private Ltd" />
          </div>
          <div className="col-lg-3">
            <PaymentCard name="Project C" number="Vendor:EFG Private Ltd" />
          </div> */}
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-26">PROGRAM B</strong>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div
              className="card card--fullHeight"
              style={{ padding: '5%', paddingTop: '12%', height: '500px' }}
            >
              <h5 className="text-black">
                <PaymentCard name="Project A" number="Vendor:HIJ Private Ltd" />
              </h5>
              <div className="mb-5">
                <ChartistGraph
                  className="height-150"
                  data={stackedBarData}
                  options={stackedBarOptions}
                  type="Bar"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="card card--fullHeight"
              style={{ padding: '5%', paddingTop: '12%', height: '500px' }}
            >
              <h5 className="text-black">
                <PaymentCard name="Project B" number="Vendor:LKM Private Ltd" />
              </h5>
              <div className="mb-5">
                <ChartistGraph
                  className="height-150"
                  data={stackedBarData}
                  options={stackedBarOptions}
                  type="Bar"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="card card--fullHeight"
              style={{ padding: '5%', paddingTop: '12%', height: '500px' }}
            >
              <h5 className="text-black">
                <PaymentCard name="Project C" number="Vendor:NOP Private Ltd" />
              </h5>
              <div className="mb-5">
                <ChartistGraph
                  className="height-150"
                  data={stackedBarData}
                  options={stackedBarOptions}
                  type="Bar"
                />
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3">
            <PaymentCard name="Project A" number="Vendor:HIJ Private Ltd" />
          </div>
          <div className="col-lg-3">
            <PaymentCard name="Project B" number="Vendor:LKM Private Ltd" />
          </div>
          <div className="col-lg-3">
            <PaymentCard name="Project C" number="Vendor:NOP Private Ltd" />
          </div> */}
        </div>
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-26">PROGRAM C</strong>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div
              className="card card--fullHeight"
              style={{ padding: '5%', paddingTop: '12%', height: '500px' }}
            >
              <h5 className="text-black">
                <PaymentCard name="Project A" number="Vendor:URS Private Ltd" />
              </h5>
              <div className="mb-5">
                <ChartistGraph
                  className="height-150"
                  data={stackedBarData}
                  options={stackedBarOptions}
                  type="Bar"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="card card--fullHeight"
              style={{ padding: '5%', paddingTop: '12%', height: '500px' }}
            >
              <h5 className="text-black">
                <PaymentCard name="Project B" number="Vendor:TUV Private Ltd" />
              </h5>
              <div className="mb-5">
                <ChartistGraph
                  className="height-150"
                  data={stackedBarData}
                  options={stackedBarOptions}
                  type="Bar"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="card card--fullHeight"
              style={{ padding: '5%', paddingTop: '12%', height: '500px' }}
            >
              <h5 className="text-black">
                <PaymentCard name="Project C" number="Vendor:XYZ Private Ltd" />
              </h5>
              <div className="mb-5">
                <ChartistGraph
                  className="height-150"
                  data={stackedBarData}
                  options={stackedBarOptions}
                  type="Bar"
                />
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3">
            <PaymentCard name="Project A" number="Vendor:URS Private Ltd" />
          </div>
          <div className="col-lg-3">
            <PaymentCard name="Project B" number="Vendor:TUV Private Ltd" />
          </div>
          <div className="col-lg-3">
            <PaymentCard name="Project C" number="Vendor:XYZ Private Ltd" />
          </div> */}
        </div>
      </Authorize>
    )
  }
}

export default FunctionView
