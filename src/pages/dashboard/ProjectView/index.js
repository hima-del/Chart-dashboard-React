import React from 'react'
// import { Helmet } from 'react-helmet'
import Authorize from 'components/LayoutComponents/Authorize'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
import Donut from 'components/CleanUIComponents/Donut'
import { Table } from 'antd'
import styles from './style.module.scss'
import { supportCasesTableData, supportCasesPieData } from './data.json'

class ProjectView extends React.Component {
  render() {
    const supportCasesPieOptions = {
      donut: true,
      donutWidth: 35,
      showLabel: false,
      plugins: [
        ChartistTooltip({
          anchorToPoint: false,
          appendToBody: true,
          seriesName: false,
        }),
      ],
    }
    const supportCasesTableColumns = [
      {
        title: 'Feature',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: 'Status',
        key: 'amount',
        dataIndex: 'amount',
        render: amount => {
          if (amount === 'Not started') {
            return <span className="text-danger font-weight-bold">{amount}</span>
          }
          return <span className="text-primary font-weight-bold">{amount}</span>
        },
      },
    ]

    const stackedBarData = {
      labels: ['Planned', 'Actual'],
      series: [
        [8e5, 12e5],
        [2e5, 4e5],
        [1e5, 2e5],
      ],
      style: {
        width: '300px'
    }
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
        <div className="row">
          <div className="col-lg-6">
            <div className="card card--fullHeight">
              <div className="card-header">
                <h4>
                  <strong>Project A</strong>
                </h4>{' '}
                <br />
                <div>
                  <span>Vendor:ABC Private Ltd</span>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="mb-3">
                      <Table
                        className="utils__scrollTable"
                        scroll={{ x: '100%' }}
                        dataSource={supportCasesTableData}
                        columns={supportCasesTableColumns}
                        pagination={false}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div
                      className={`h-100 d-flex flex-column justify-content-center align-items-center ${styles.chartPieExample}`}
                    >
                      <ChartistGraph
                        data={supportCasesPieData}
                        type="Pie"
                        options={supportCasesPieOptions}
                      />
                      <div className="text-center">
                        <span className="mr-2">
                          <Donut type="success" name="Finished" />
                        </span>
                        <span className="mr-2">
                          <Donut type="warning" name="In progress" />
                        </span>
                        <span className="mr-2">
                          <Donut type="danger" name="Not started" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card card--fullHeight" style={{ padding: '5%', paddingTop: '12%' }}>
              <h5 className="text-black">
                <strong>Stacked Bar</strong>
              </h5>
              <div className="mb-5">
                <ChartistGraph
                  className="height-300"
                  data={stackedBarData}
                  options={stackedBarOptions}
                  type="Bar"
                />
              </div>
            </div>
          </div>
        </div>
      </Authorize>
    )
  }
}

export default ProjectView
